/* ============================================================
   /api/chat — the only server route on the site.

   Takes a conversation, sends it to Claude with the knowledge
   base as the system prompt, streams the answer back as plain
   text. Prerendering is off for this file and this file only.
   ============================================================ */

import type { APIRoute } from 'astro';
import { systemPrompt } from '../../lib/knowledge';
import { checkDailyQuota, logQuestion } from '../../lib/store';

export const prerender = false;

const MODEL = 'claude-sonnet-5';
/* A full role assessment runs longer than it looks. At 1024 the model
   was being cut mid-word — the visible symptom was a stray `**` where
   a bold marker never closed. */
const MAX_TOKENS = 1600;

/* Two caps. Neither is the real spend ceiling — that is the
   monthly limit set in the Anthropic console, which holds even
   if everything here is wrong. */
const MAX_TURNS = 12; // messages per conversation
const MAX_PER_DAY = 30; // messages per visitor per day
const MAX_CHARS = 8000; // one pasted job description, generously

interface Turn {
  role: 'user' | 'assistant';
  content: string;
}

const text = (body: string, status = 200) =>
  new Response(body, {
    status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const key = import.meta.env.ANTHROPIC_API_KEY ?? process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return text("The assistant is not available yet. Her email is tiafowlkes@gmail.com.", 503);
  }

  /* ---- read and validate ---- */
  let messages: Turn[];
  try {
    const body = await request.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return text('Malformed request.', 400);
  }

  messages = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant'))
    .map((m) => ({ role: m.role, content: String(m.content ?? '').slice(0, MAX_CHARS) }))
    .filter((m) => m.content.trim().length > 0);

  const last = messages[messages.length - 1];
  if (!last || last.role !== 'user') return text('Nothing to answer.', 400);

  if (messages.length > MAX_TURNS) {
    return text(
      "That is the end of this conversation. Start a new one, or contact Tia directly — her email is tiafowlkes@gmail.com.",
      429
    );
  }

  /* ---- per-visitor daily cap ---- */
  const quota = await checkDailyQuota(clientAddress ?? 'unknown', MAX_PER_DAY);
  if (!quota.allowed) {
    return text(
      "You have reached today's limit. Her email is tiafowlkes@gmail.com.",
      429
    );
  }

  /* Questions only. No address, no user agent, no fingerprint. */
  logQuestion(last.content, messages.length).catch(() => {});

  /* ---- ask Claude ---- */
  let upstream: Response;
  try {
    /* Overridable so the streaming path can be exercised against a
       local mock without a real key. Unset in production. */
    const base =
      import.meta.env.ANTHROPIC_BASE_URL ??
      process.env.ANTHROPIC_BASE_URL ??
      'https://api.anthropic.com';
    upstream = await fetch(`${base}/v1/messages`, {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        stream: true,
        /* The knowledge base is identical on every request, so it
           is cached rather than re-billed as fresh input. */
        system: [
          { type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } },
        ],
        messages,
      }),
    });
  } catch {
    return text(
      "The assistant is unreachable right now. Try again shortly, or her email is tiafowlkes@gmail.com.",
      502
    );
  }

  if (!upstream.ok || !upstream.body) {
    /* Out of credits, rate limited upstream, bad key — the visitor
       does not need the detail, only a way forward. */
    return text(
      "The assistant is unavailable right now. Her email is tiafowlkes@gmail.com.",
      502
    );
  }

  /* ---- stream it through ----
     Parse the server-sent events and re-emit just the text, so the
     browser deals with a plain stream rather than a protocol. */
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = '';

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';

          for (const line of lines) {
            if (!line.startsWith('data:')) continue;
            const payload = line.slice(5).trim();
            if (!payload || payload === '[DONE]') continue;
            try {
              const evt = JSON.parse(payload);
              if (evt.type === 'content_block_delta' && evt.delta?.type === 'text_delta') {
                controller.enqueue(encoder.encode(evt.delta.text));
              }
            } catch {
              /* partial frame — the next chunk completes it */
            }
          }
        }
      } catch {
        controller.enqueue(encoder.encode('\n\n(The answer was cut short.)'));
      } finally {
        controller.close();
        reader.releaseLock();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Accel-Buffering': 'no',
    },
  });
};

/* Anything but POST. */
export const GET: APIRoute = () => text('POST a conversation here.', 405);
