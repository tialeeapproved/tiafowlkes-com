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
| **AI Fluency** | Can she work where the field is going? | Opener, then linked project cards | `src/data/ai.ts` |

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
- **The folders never move.** The rail is `position: fixed` on the desktop — deliberately out of the document flow, so the window centres on the page instead of being pushed into whatever space is left beside it. The taskbar is fixed too.
- **The window is centred** with `margin: auto` on `.stage`, not `justify-content: center` — auto margins centre a short page but never clip the top of a long one.
- **`Ask` is a desktop icon**, drawn as a period help file beneath AI Fluency. It is where the chatbot will live. It is not in the taskbar.
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

## Writing copy — the part that matters most

Tia is currently **L4 at Google targeting L5**. Her evidence clears that bar; the risk is writing it at the wrong altitude.

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

- [ ] Chatbot (`/api/chat`) — paste a role, get a match report **with gap bridging**. It may reframe a gap using real adjacent evidence; it may never invent experience. The only server route on the site.
- [ ] **AI Fluency project cards** — deliberately empty. The clickability is the argument, so no placeholders. Needs: the iOS app (name, what it does, state, link, stack), the AI tutoring engagement (nameable client? what's linkable?), which tialeeapproved client sites belong here with URLs, and whether this site gets its own card.
- [ ] Resume PDF → `public/resume/tia-fowlkes-resume.pdf`
- [ ] LinkedIn URL in `src/data/site.ts`
- [ ] Custom domain cutover
