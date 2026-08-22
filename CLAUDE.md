# CLAUDE.md — tiafowlkes.com

> **You are Claude, working on Tia's personal site.** This file is your operating manual. Read it before making changes.

> **🚫 NEVER PUSH WITHOUT EXPLICIT APPROVAL.** Every push to `main` triggers a production build. Edits stay local until Tia says "push it" / "ship it" / "go live". Work on a branch by default so she gets a preview URL first.

---

## Project at a glance

- **Site lives at:** `tiafowlkes.com` (owned, not connected yet)
- **Repo:** `github.com/tialeeapproved/tiafowlkes-com`
- **Local path:** `~/Documents/WEBSITES/tiafowlkes-com`
- **Stack:** Astro 7 + a little React. **There is a build step** — this differs from frequency313 and livingonpurpose.
- **Purpose:** Tia is targeting **full-time Technical Program Manager roles**. This is not a freelance storefront and must never read like one.

### Why this one has a build step

The other sites are a handful of pages with no repeated content, so plain HTML is right for them. This site has a desktop plus four pages that share one frame — in plain HTML, changing the menu bar would mean editing every file. The eight decision entries are also generated from data rather than hand-written markup, so the layout can change once and apply to all of them.

Astro still outputs plain static HTML. Same speed, same free hosting.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
```

---

## Structure — a desktop over four pages

The landing page is a bare desktop: four folders, nothing else. Each folder opens one page, and each page has its own layout because each answers a different question.

| Folder | Question it answers | Layout | Source |
|---|---|---|---|
| **Decisions** | How does she think? | Stacked decision log — headline + Constraint / The call / Impact | `src/content/decisions/*.md` |
| **Programs** | What has she delivered? | Portfolio matrix, then detail sections with metric strips | `src/data/programs.ts` |
| **Systems** | What did she leave behind? | Six-tile numbered grid | `src/data/systems.ts` |
| **AI Fluency** | Can she work where the field is going? | Try me block, tool matrix, two engineered-system cards, then the client web roster | `src/data/ai.ts` |

**Tiebreaker** when something fits more than one: *if it still runs without her, it's a System. If it ended when it shipped, it's a Program. If the story is the call rather than the work, it's a Decision.*

### The visual system — one desktop, glass windows

**The desktop never changes.** Sky wallpaper with panning pixel clouds, large gold folder icons, and a taskbar carrying her name plus `?` and Résumé — identical on every page, including the four content pages. Only the window on top of it changes.

**Windows are frosted glass.** `GlassWin.astro` is the panel: white at 0.38→0.24, `backdrop-filter: blur(60px) saturate(1.4)`, a hairline white edge, a lit top-left corner, and a soft drop shadow. The wallpaper stays visible and blurred behind it — **that blur is the entire effect, so a glass window must never sit on an opaque background.**

Because the glass is light, the ink inside it is dark. Do not carry white-on-dark values into these panels.

| Layer | Class | Where |
|---|---|---|
| Desktop chrome, bevels | `.raised` `.sunken` `.chrome` | `global.css`, Win95 half of `tokens.css` |
| Frosted window | `GlassWin.astro` | every content page, and the 404 dialog stays Win95 |
| Content type inside a window | `.g` wrapper, `.label`, `.meta`, `.pane`, `.rule` | `glass.css` |

`.pane` is the lighter nested surface for cards and columns — **no backdrop blur on it**, the window already did that and stacking blurs costs performance for no visual gain.

**Rules:**

- **Numbering appears only on Systems**, where the six are a genuine inventory. The index numerals on Decisions are orientation, kept at low contrast so they never read as a ranking.
- **Sentence case headings throughout.** No title case.
- **Metric strips are load-bearing** — a recruiter reads them before any prose. They render as mono chips on their own row.
- **Legibility over the clouds is a blur problem, not an opacity problem.** Raising `--g-panel` past ~0.5 makes the glass read as plain white paper and kills the effect. If cloud edges are fighting the text, raise `--blur` (currently 60px) or soften the cloud fills in `Sky.astro` instead.
- **The workspace reserves the rail's width as a gutter on BOTH sides** (`--rail-w`, above 901px). The rail is out of flow, so a centred 1000px window slides straight under the folders on anything narrower than ~1300px — an iPad or a small laptop. Padding only the left side would push the window off-centre; padding both keeps it centred on screen and clear of the icons.
- **The rail's breakpoint lives in two files and they must match.** `Page.astro` takes it out of `position: fixed` at 900px; `FolderIcons.astro` turns the column into a row at the same 900px. Drift between them leaves a vertical stack of five icons inside a horizontal strip, eating the viewport.
- **The desktop inset is a token: `--desk-x` / `--desk-y` in `tokens.css`.** Two layouts position the chrome against it — `.desktop` on the landing page and `.workspace` plus the fixed `.rail` on the folders. When each carried its own padding they drifted, and on a phone the folder strip jumped 4px left and 8px up on every navigation — the desktop visibly re-laying-out at the exact moment it is supposed to prove it never changes. Never hardcode that inset in a layout again.
- **Navigation cross-fades via `@view-transition { navigation: auto }` in `global.css`** — the native cross-document transition, not `ClientRouter`. That choice is load-bearing: a client-side router would stop the `data-from` script in the head from running on each navigation, which is the whole mechanism behind Tia's exit, and would leave the sky's clock script un-rerun. Every navigation must stay a real page load. Browsers without support simply cut, which is what the site did before.
- **The card stack is desktop-only — `.slot` goes `position: static` below 900px.** Sticky pinning needs the card to be shorter than the scroll container. On a phone the window is short and the cards are long, so a sticky card pins at the top with its own bottom below the fold and nothing will scroll it back into view: the text is simply unreachable. Do not lower that breakpoint to buy the effect back on tablets without measuring the tallest card against the shortest window.
- **Tia appears on the landing page at every width, and on folder pages only above 1180px.** Below that there is no room beside a near-full-screen window, and she is `z-index: 15` against the workspace's 10 — she would cover the content she is meant to introduce. On the landing page the opposite is true: the folders moved to a strip across the top and left the screen empty, so she fills it, smaller, with the bubble above her head instead of beside her.
- **On a phone the taskbar facts rotate rather than disappear.** Three facts, ~6s each, stacked absolutely so the bar never changes width as they swap — a taskbar that reflows every six seconds is worse than showing nothing. `.start` must carry `flex: 1` for this: it is content-sized by default, so a `flex: 1` on `.facts` alone resolves against a zero basis and the text renders fully opaque at no width at all.
- **The folders never move.** The rail is `position: fixed` on the desktop — deliberately out of the document flow, so the window centres on the page instead of being pushed into whatever space is left beside it. The taskbar is fixed too.
- **The window is centred** with `margin: auto` on `.stage`, not `justify-content: center` — auto margins centre a short page but never clip the top of a long one.
- **`Ask` is a desktop icon**, drawn as a period help file beneath AI Fluency. It is where the chatbot will live. It is not in the taskbar.
- **The AI Fluency pills link out to the tialeeapproved case studies** — Tia's call, made knowing it points at the contract brand. The Claude Code attribution sits under the two pills it applies to, not in a sentence at the foot of the card: the claim belongs on the thing making it.
- **The tool matrix is cut out and reset, like the product shots.** Her source image bakes the capability bullets into the picture; only the three logos are used as images and the bullets are real text in `ai.ts`. The ChatGPT mark is white and was recoloured to the site's ink for the same reason Matter was.
- **`Try me` is inert on purpose.** The pixel-smiley block at the top of AI Fluency is a `div`, not a link, and carries a `Coming soon` chip — the chatbot route does not exist. When `/ask` ships, that block and the desktop `?` both become links to it and the chip comes off.
- **The product shots are cut out, never collaged.** Tia's source images are grids of products with names baked in, in a font that is not the site's. Each product is cut to its own transparent file and the name is set as real HTML, so the matrix stays one typeface. They run at 30px in a fixed square box with `object-fit: contain` — recognition, not decoration. The Matter mark is white and was recoloured to the site's ink; a white glyph is invisible on these cards.
- **Tia's exit is decided in the `<head>`, not next to the element.** `Base.astro` stamps `data-from="desktop"` on `<html>` from the referrer before the body is parsed, and her visibility is pure CSS off that attribute — so the browser can never paint a frame with her missing. A script sitting next to the element is too late: the browser is free to paint the partially-parsed body first, and that one hidden frame *is* the blink. It was diagnosed twice from the wrong end; do not move this decision back into the body. The separate `.dissolve` script only starts the fade, and waits on `img.decode()` so the animation does not run over an image that has not painted.
- **The clouds run off the wall clock.** Each page is a fresh document, so the animation would restart on every navigation. An inline script in `Sky.astro` sets a negative `animation-delay` from `Date.now() % cycle`, putting each layer exactly where it would have been — so moving between folders looks like one continuous sky. Without JS the clouds just start at the beginning.
- **The window is a fixed frame, not a long page.** `.workspace` is exactly one viewport tall and the page itself does not scroll (`body:has(.workspace) { overflow: hidden }`). `GlassWin` fills that height, and its `.body` is the scroll container. That is what keeps the gap around all four edges constant and stops the page ever reading as a long column.
- Because the scroll container is `.body`, the title bar needs no pinning — it sits outside the scrolling area and is simply always there. It also means `.slot` pins from `top: 0`, measured against that box rather than the viewport.
- **Do not move the scrolling back to the page.** An earlier pass pinned the title bar to the viewport instead; it escaped the window's rounded corners and the bottom gap only appeared at the very end of the scroll.
- **Long pages are a card stack, not a column.** Each section sits in a `.slot` pinned to the same offset, so cards rise and settle over one another and the reader never sees how far there is to go. Scrollbars are hidden for the same reason.
- **Stacked cards must occlude.** A translucent card ghosts the text of the card sliding beneath it — there is no styling around that. `.slot > .pane` runs near-opaque on purpose; the glass reading comes from the window they sit in and the gaps between them. Do not "fix" this by making them transparent again.
- `.pop` is the scroll-driven rise, behind `@supports (animation-timeline: view())`. Unsupported browsers get the cards, just without the motion. Both the rise and the pinning switch off under `prefers-reduced-motion`.
- Only the clouds move, and they stop under `prefers-reduced-motion`.
- Responsive to 380px. Visible keyboard focus. Real contrast.

The desktop loads **no webfonts**. Content pages pass `fonts` to `Base.astro`, which pulls Inter and JetBrains Mono for the glass windows.

---

## Tia's standing preferences

**Check every line of copy against this list before shipping it.** Each entry is here
because she had to correct it at least once. She should not have to say any of them
again.

**Tone**

- Preferences are never demands. She has things she is looking for, not terms she is
  imposing. "She is not relocating", "not willing", "non-negotiable", "the sticking
  point" — all banned. A mismatch is a practical fact stated once.
- Nothing sassy or arch. "Relocating isn't something she's looking to do again" is the
  register to avoid: it reads as attitude where information was wanted.
- Never gatekeeping. The reader is considering working with her and should come away
  wanting to.
- Do not restate a point already made a paragraph earlier.

**Register**

- Corporate and professional. A senior operator briefing a hiring manager, not a
  chatbot making conversation. No contractions in canned copy.
- Short. If a sentence carries no evidence, cut it.
- Every claim names a program and a figure. Vague endorsement — "well covered", "real
  evidence here", "she's got" — is the failure mode.
- Bold sparingly. If more than a fifth of the words are bold, none of them work.
- **Her email is not a sign-off.** The default is no contact line. It appears only
  after a role assessment, when the answer cannot be given from the folder, or when
  something does not line up — and always as an invitation with a reason attached
  ("reach out to her directly at…"), never the bare fact of an address.

**Substance**

- Assess capability, not vocabulary. Her record uses different words than a job
  description does for the same work.
- A strength is a competency (influence without authority, operating in ambiguity),
  never a program name or a metric.
- Meeting the minimum qualifications means qualified. Floor 75, normally 80+.
- Lead with what she has, not what is missing. Name gaps once, without the word "gap".

**Hard limits**

- Never invent evidence to fill a hole. If something is true but not written down —
  design tools, for instance — **ask her for it** and add it to the knowledge base.
  Do not assert it and do not quietly drop the requirement.
- Never imply she is still at Google.
- Nothing from the client READMEs or internal assessment docs, ever.

---

## Writing copy — the part that matters most

Tia was **L4 at Google (Feb 2021 – June 2025)** and is targeting **L5**. She is no longer there — she has been running Independent Strategic Advisory out of New York since. Nothing on the site may imply current Google employment. Her evidence clears that bar; the risk is writing it at the wrong altitude.

**Every page follows the same four beats:**

1. **The problem** — what was actually hard, and why it wasn't obvious
2. **What I did** — the decision, not the activity
3. **What I gave up** — the tradeoff, named explicitly
4. **Outcome** — result, and what would have happened otherwise

Beats 2 and 3 are the difference between a record of judgment and a record of activity. Never drop them.

### Rules

- **Decisions first, activity never.** "Facilitated," "supported," "monitored," "helped" are L4 verbs. Use "decided," "owned," "removed," "narrowed," "secured."
- **Outcome metrics, not program-health metrics.** Survey response rates and adoption percentages measure how well *her program* ran. They belong inside a page, tied to a consequence — never on the desktop strip.
- **No invented outcomes.** If a consequence isn't known, leave an HTML comment `<!-- TODO (Tia): ... -->` asking for it. Never fill the gap with a plausible guess.

### 🔒 Never in this repo

Internal assessment documents, interview notes, colleague names, or client project READMEs. Product names and figures on the site were reviewed and approved by Tia for publication — do not add new ones without asking her first.

---

## Where things live

| To change this | Edit this |
|---|---|
| Any colour, bevel, or spacing | `src/styles/tokens.css` — **never hardcode a hex anywhere else** |
| Desktop wallpaper and clouds | `src/components/Sky.astro` |
| Taskbar | `src/components/Taskbar.astro` |
| Win95 window chrome (404) | `src/components/Win.astro` |
| Page frame (desktop + window) | `src/layouts/Page.astro` |
| The frosted window | `src/components/GlassWin.astro` |
| Frost density | `src/styles/tokens.css` → `--g-panel` |
| Content type inside windows | `src/styles/glass.css` |
| Hero, links, email | `src/data/site.ts` |
| Folder names and order | `src/data/folders.ts` |
| Add or edit a decision | `src/content/decisions/*.md` |
| Hide a decision in progress | `draft: true` in its frontmatter |
| Program copy, portfolio matrix | `src/data/programs.ts` |
| A product shot in the matrix | `public/programs/<slug>.webp`, referenced by `icon` in `programs.ts` |
| The six systems | `src/data/systems.ts` |
| AI Fluency project cards | `src/data/ai.ts` |
| The desktop landing | `src/layouts/Desktop.astro` |
| Shared page frame | `src/layouts/Page.astro` |

**Content never lives inside a component.** Components only arrange things.

---

## Structural rules — don't break these

1. **Every folder is a URL** — `/decisions`, `/programs`. Back button works, any view is shareable.
2. **Everything prerenders to static HTML.** The desktop is a shell over real pages, so it stays indexable and works with JS off.
3. **The desktop never scales down.** On a phone the folders become a two-column grid and the taskbar stays. Same design, adapted — never a shrunken desktop.
4. **No dragging, no boot sequence, no window management.** The chrome is the look; the site is still four pages and a back button.

---

## Daily editing workflow

1. Tia describes what she wants in plain English
2. You make the edit — usually one file, per the table above
3. `npm run build` to confirm nothing broke
4. Commit to a **branch**, never straight to `main`
5. She reviews the preview URL on her phone
6. She says "push it" → merge to `main` → production build

---

## Not yet built

- [x] ~~Chatbot~~ — built, on the `ask-bot` branch. Not merged until Tia has tried to break it on the preview URL.

### The Ask bot

| Piece | Where |
|---|---|
| The page | `src/pages/ask.astro` — glass window like any folder, `/ask` |
| The route | `src/pages/api/chat.ts` — **the only file with `prerender = false`** |
| Knowledge loader | `src/lib/knowledge.ts` — eight named imports, no glob |
| Redis (rate limit + log) | `src/lib/store.ts` |
| Question log | `/ask/log?key=…`, gated on `ASK_LOG_KEY` |

**Environment variables** (Vercel → Settings → Environment Variables):

| Name | Needed for | Missing? |
|---|---|---|
| `ANTHROPIC_API_KEY` | everything | The bot returns "isn't configured yet" |
| `KV_REST_API_URL` / `KV_REST_API_TOKEN`, or `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | per-IP cap, question log | Injected by the Upstash integration, which uses either naming — `store.ts` accepts both. Bot still works without them; cap becomes best-effort and nothing is logged |
| `ASK_LOG_KEY` | reading the log | `/ask/log` returns "Not found" to everyone, including Tia |

**Rules:**

- **The store must never break the conversation.** Every Redis call is wrapped, timed out at 2.5s, and falls back to "allow". A rate limiter that takes the feature down with it is worse than no rate limiter. The real spend ceiling is the monthly cap in the Anthropic console, not this code.
- **Caps:** 12 messages per conversation, 30 per IP per day, 8000 characters per message. The conversation cap is enforced in both the page and the route — the page for the UX, the route because the page can be bypassed.
- **The conversation lives in the visitor's tab**, in `sessionStorage`, and is posted in full on every turn. That is how a follow-up knows its antecedent. The server holds no conversation state and should not start.
- **Roles are filtered on the way in.** Anything that is not `user` or `assistant` is dropped, so a forged `system` turn in the request body cannot become an instruction.
- **Bubbles are styled in an `is:global` block scoped to `#chat`.** They are built by script and never carry Astro's scope attribute, so scoped rules miss them silently — the styling just does not appear.
- **The bot answers in markdown bold and the page renders it by building nodes**, never `innerHTML` — a pasted job description is untrusted text and must never become markup. `**double asterisks**` is the only markdown supported; anything else arrives literally.
- **`strengths.md` carries the thesis; everything else carries evidence.** Without it the bot answered "what are her strengths" with section headings — launch governance, cross-functional alignment — because that is all there was to reason from. A strength is a competency (influence without authority, operating in ambiguity); a program name or a metric is proof of one, never the headline.
- **Meeting every minimum qualification floors the score at 75, and normally lands 80+.** That is not flattery, it is what a minimum means — the preferred list is upside, not a second set of hurdles. Below 75 only when a stated minimum has *nothing* in the knowledge base speaking to it. The failure mode this fixes is keyword-matching: the folder describes the same work in different vocabulary than a job description does, and `bridging.md` carries a translation table for the common cases.
- **A pasted job description opens with a match score.** That plus the length caps (120–180 words for a role, under 80 for a question) and the ban on vague endorsement — "well covered", "real evidence here" — all live in `bridging.md`. Answers that read as padding are a copy bug, fixable there.
- **The log holds questions only** — no IP, no user agent, no fingerprint. 500 entries, 30-day expiry. Do not add identifying fields to it.
- **`ANTHROPIC_BASE_URL`** exists so the streaming path can be exercised against a local mock without a real key. Leave it unset in production.

### The bot's knowledge base — `src/knowledge/`

**The bot reads this folder and nothing else.** That is a structural guarantee, not a
habit: there is no glob anywhere in the loader or the generator, so a file cannot be
picked up by being nearby. Tia's client READMEs carry a staging password, a contract
value and a client's phone number; the assessment docs carry colleague names and Google
codenames. None of it can reach the folder by accident.

| File | Source |
|---|---|
| `about.md`, `resume.md`, `targeting.md`, `strengths.md`, `bridging.md` | Hand-written. Edit directly. |
| `decisions.md`, `programs.md`, `systems.md`, `ai-fluency.md` | **Generated** — `npm run knowledge`. Do not hand-edit; edits are overwritten. |

The generated half comes from the same `src/data` files and decision markdown the pages
render from, so the bot can never quote copy that is no longer live. **Run `npm run
knowledge` after any copy change**, or the bot goes stale.

`bridging.md` is the system prompt. Its load-bearing line is *"you may always reframe,
you may never assert"* — reframe a requirement with real adjacent evidence, never claim
experience the files do not contain. `targeting.md` says never to volunteer her internal
Google level.
- [ ] Custom domain cutover
