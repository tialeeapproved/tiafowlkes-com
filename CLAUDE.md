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
| **Decisions** | How does she think? | Stacked decision log — headline + Context / The call / What followed | `src/content/decisions/*.md` |
| **Programs** | What has she delivered? | Portfolio matrix, then detail sections with metric strips | `src/data/programs.ts` |
| **Systems** | What did she leave behind? | Six-tile numbered grid | `src/data/systems.ts` |
| **AI Fluency** | Can she work where the field is going? | Opener, then linked project cards | `src/data/ai.ts` |

**Tiebreaker** when something fits more than one: *if it still runs without her, it's a System. If it ended when it shipped, it's a Program. If the story is the call rather than the work, it's a Decision.*

### The visual system — two worlds

**The desktop is Windows 95. Every page it opens is glass.** That split is deliberate: an old OS booting into a new one.

**Desktop (`/`)** — sky wallpaper with panning pixel clouds, large gold folder icons, and a taskbar carrying only her name plus `?` and Résumé. Styles live in `global.css` + the Win95 half of `tokens.css`. The bevel language is two utility classes:

- `.raised` — a surface that sticks out: windows, buttons. Highlight top/left, dark shadow bottom/right.
- `.sunken` — a well that goes in. The reverse.
- `.chrome` — 11px, font smoothing off, no text selection. Chrome only, never prose.

**Content pages** — `#050505` with a CSS-generated blurred atmosphere (`Mesh.astro` — layered radial gradients, no image, nothing external). Panels use one class:

- `.glass` — diagonal white wash 0.06→0.01, `backdrop-filter: blur(28px)`, hairline border, deep shadow, lit top-left corner via `::before`.

Type is Inter (300 for display, 400 body) with JetBrains Mono for labels and metrics. `.label` is the 10px tracked uppercase mono; `.meta` is the 11px mono. Radii are 24 / 16 / 8.

**Rules that hold in both worlds:**

- **Numbering appears only on Systems**, where the six are a genuine inventory. The index numerals on Decisions are orientation, kept at tertiary contrast so they never read as a ranking.
- **Sentence case headings throughout.** No title case.
- **Metric strips are load-bearing** — a recruiter reads them before any prose. On glass pages they are mono chips on their own row.
- Only the clouds and the atmosphere drift, and both stop under `prefers-reduced-motion`. Nothing else moves.
- Responsive to 380px. Visible keyboard focus. Real contrast.

The desktop loads **no webfonts** — Tahoma/Verdana/Geneva are already on the machine. Glass pages load Inter and JetBrains Mono.

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
| Glass page frame | `src/layouts/Glass.astro` |
| Glass top bar | `src/components/GlassBar.astro` |
| The blurred atmosphere | `src/components/Mesh.astro` |
| Glass material and shared type | `src/styles/glass.css` |
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
