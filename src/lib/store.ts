/* ============================================================
   UPSTASH REDIS — rate limiting and the question log.

   Talks to the REST API over plain fetch, so there is no SDK to
   keep current. Upstash's Vercel integration injects
   KV_REST_API_URL and KV_REST_API_TOKEN automatically.

   Everything here degrades to a no-op when those variables are
   absent. That is deliberate: the bot must keep working if the
   store is missing, misconfigured, or down. A rate limiter that
   takes the whole feature down with it is worse than no rate
   limiter — the real spend ceiling is the monthly cap set in the
   Anthropic console, not this file.
   ============================================================ */

/* The Upstash integration does not always inject the same names —
   `KV_REST_API_*` in some setups, `UPSTASH_REDIS_REST_*` in others.
   Accept either, so a working database is never silently ignored
   because it was connected a different way. */
const env = (name: string) =>
  (import.meta.env as Record<string, string | undefined>)[name] ?? process.env[name];

const URL_ = env('KV_REST_API_URL') ?? env('UPSTASH_REDIS_REST_URL');
const TOKEN = env('KV_REST_API_TOKEN') ?? env('UPSTASH_REDIS_REST_TOKEN');

export const storeReady = Boolean(URL_ && TOKEN);

async function redis(command: (string | number)[]): Promise<any> {
  if (!storeReady) return null;
  try {
    const res = await fetch(URL_!, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(command),
      signal: AbortSignal.timeout(2500),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.result ?? null;
  } catch {
    /* Never let the store break the conversation. */
    return null;
  }
}

/* ---- rate limiting ------------------------------------------
   One counter per visitor per UTC day, expiring after 24h so the
   store never grows. Returns how many are left; a null store
   always allows, and says so. */
export interface Quota {
  allowed: boolean;
  remaining: number | null;
}

export async function checkDailyQuota(ip: string, limit: number): Promise<Quota> {
  if (!storeReady) return { allowed: true, remaining: null };

  const day = new Date().toISOString().slice(0, 10);
  const key = `ask:rate:${day}:${ip}`;
  const count = await redis(['INCR', key]);

  if (count === null) return { allowed: true, remaining: null };
  if (count === 1) await redis(['EXPIRE', key, 60 * 60 * 24]);

  return { allowed: count <= limit, remaining: Math.max(0, limit - count) };
}

/* ---- the question log ---------------------------------------
   What people asked, so Tia can see what the site is actually
   being asked about. Questions only — no IP, no user agent, no
   attempt to identify anyone. Trimmed to 500 entries and expired
   after 30 days, because holding a stranger's words forever is
   not something this feature needs. */
const LOG_KEY = 'ask:log';
const LOG_KEEP = 500;
const LOG_TTL = 60 * 60 * 24 * 30;

export async function logQuestion(question: string, turn: number): Promise<void> {
  if (!storeReady) return;
  const entry = JSON.stringify({
    at: new Date().toISOString(),
    turn,
    q: question.slice(0, 1000),
  });
  await redis(['LPUSH', LOG_KEY, entry]);
  await redis(['LTRIM', LOG_KEY, 0, LOG_KEEP - 1]);
  await redis(['EXPIRE', LOG_KEY, LOG_TTL]);
}

export interface LoggedQuestion {
  at: string;
  turn: number;
  q: string;
}

export async function readLog(): Promise<LoggedQuestion[]> {
  if (!storeReady) return [];
  const rows = await redis(['LRANGE', LOG_KEY, 0, LOG_KEEP - 1]);
  if (!Array.isArray(rows)) return [];
  return rows
    .map((r: string) => {
      try {
        return JSON.parse(r) as LoggedQuestion;
      } catch {
        return null;
      }
    })
    .filter(Boolean) as LoggedQuestion[];
}
