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

The other sites are a handful of pages with no repeated content, so plain HTML is right for them. This site has four folders plus a page per evidence unit, all sharing one layout — in plain HTML, changing the menu bar would mean editing every file. It also serves one content library three different ways (folders, list view, and later a chatbot), which would mean maintaining three copies by hand.

Astro still outputs plain static HTML. Same speed, same free hosting.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
```

---

## The core idea — folders are queries, not directories

> *"I don't want to have to keep making a new brochure each time I go to a team."*

Every piece of evidence lives **once** in `src/content/evidence/` and carries tags. Folders, the list view, and (later) the chatbot are all different queries over that one library. Nothing is ever written twice.

| Folder | Question it answers | What belongs in it |
|---|---|---|
| **Decisions** | How does she think? | A call with a tradeoff |
| **Programs** | What has she delivered? | Something bounded that shipped |
| **Systems** | What did she leave behind? | A mechanism still running without her |
| **AI Fluency** | Can she work where the field is going? | Shipped, not theoretical |

**Tiebreaker** when something fits more than one: *if it still runs without her, it's a System. If it ended when it shipped, it's a Program. If the story is the call rather than the work, it's a Decision.*

---

## Writing evidence — the part that matters most

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

Product codenames, colleague names, internal assessment documents, interview notes, unreleased hardware details, or client project READMEs. The evidence library is the public surface and nothing else feeds it. When in doubt, describe the *shape* of the work — "an ambiguous setup metric" lands without naming anything.

---

## Where things live

| To change this | Edit this |
|---|---|
| Accent color | `src/styles/tokens.css` — one line, marked |
| Any color or spacing | `src/styles/tokens.css` — **never hardcode a hex anywhere else** |
| Hero, links, email | `src/data/site.ts` |
| The impact strip | `src/data/site.ts` → `impact` |
| Folder names, captions, order | `src/data/folders.ts` |
| Add evidence | new `.md` in `src/content/evidence/` |
| Hide something in progress | `draft: true` in its frontmatter |
| Redact a client | `confidential: true` in its frontmatter |
| Layout everywhere | `src/layouts/Desktop.astro` |

**Content never lives inside a component.** Components only arrange things.

---

## Structural rules — don't break these

1. **Every folder is a URL** — `/decisions`, `/programs`. Back button works, any view is shareable.
2. **Everything prerenders to static HTML.** The desktop is a shell over real pages, so it stays indexable and works with JS off.
3. **`view as list`** is authentic to any real OS *and* it's the fast, semantic, screen-reader-clean path. Not a fallback — don't let it rot.
4. **No animation theater.** Windows open instantly. Boot sequences and fake Finder chrome read as a CodePen demo and undercut the work.
5. **Decisions opens by default** — content on screen in the first second. A program manager's site being confusing to navigate contradicts the competency being claimed.
6. **Mobile is a phone home screen**, not a shrunken desktop. Recruiters open links on phones constantly.

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
- [ ] `⌘K` search across all units
- [ ] Per-team saved views (`/for/[team]`)
- [ ] Resume PDF → `public/resume/tia-fowlkes-resume.pdf`
- [ ] Custom domain cutover
