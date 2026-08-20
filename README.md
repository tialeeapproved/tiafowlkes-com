# tiafowlkes.com

A desktop workspace, not a portfolio page. Four folders of evidence, each a
saved query over one library — so nothing gets written twice and no view ever
goes stale.

Built with **Astro 7** → **GitHub** → **Vercel**.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
```

---

## The idea

> *"I don't want to have to keep making a new brochure each time I go to a team."*

**Folders are queries, not directories.** Every piece of evidence lives once in
`src/content/evidence/` and carries tags. Folders, the list view, and (later)
the chatbot are all different queries over that same library.

| Folder | Question it answers | Unit |
|---|---|---|
| **Decisions** | How does she think? | A call with a tradeoff |
| **Programs** | What has she delivered? | Something bounded that shipped |
| **Systems** | What did she leave behind? | A mechanism still running without her |
| **AI Fluency** | Can she work where the field is going? | Shipped, not theoretical |

Tiebreaker when something fits more than one: *if it still runs without her,
it's a System. If it ended when it shipped, it's a Program. If the story is the
call rather than the work, it's a Decision.*

---

## Where things live

| To change this | Edit this |
|---|---|
| Accent color | `src/styles/tokens.css` — one line, marked |
| Hero, links, email | `src/data/site.ts` |
| The impact strip | `src/data/site.ts` → `impact` |
| Folder names, captions, order | `src/data/folders.ts` |
| Add a piece of evidence | new `.md` in `src/content/evidence/` |
| Hide something in progress | `draft: true` in its frontmatter |
| Redact a client | `confidential: true` in its frontmatter |
| Layout everywhere | `src/layouts/Desktop.astro` |

Content never lives inside a component. Components only arrange things.

---

## Structural rules

1. **Every folder is a URL** — `/decisions`, `/programs`. Back button works,
   any view is shareable.
2. **Everything prerenders to static HTML.** The desktop is a shell over real
   pages, so it's indexable and survives with JS off.
3. **`view as list`** is authentic to any real OS *and* it's the fast,
   semantic, screen-reader-clean path. Not a fallback.
4. **No animation theater.** Windows open instantly. Boot sequences read as a
   CodePen demo and undercut the work.
5. **Decisions opens by default** — content on screen in the first second, no
   empty desktop where the visitor has to act first.

---

## Evidence frontmatter

```yaml
title: Removed an ambiguous metric from launch gate reviews
summary: One line. Used on cards, in search, and as the meta description.
tags: ['decisions']          # decisions | programs | systems | ai
org: Google
role: Program Manager
period: '2024'
outcome:                     # presence = a hard number renders on the card
  value: 'Director-approved'
  label: 'KPI change'
scale:
  markets: '20 launch markets'
  users: '2M globally'
  stakeholders: ['PM', 'Software']
confidential: false          # true redacts org, strips external links
draft: false                 # true keeps it out of the build entirely
featured: true
order: 1
```

Each page follows the same beats so units stay comparable: **the problem →
what I did → what I gave up → outcome.** The middle two are what separate a
record of judgment from a record of activity.

---

## Not yet built

- [ ] Chatbot (`/api/chat`) — role matching with gap bridging. The only
      server route; everything else stays static.
- [ ] `⌘K` search across all units
- [ ] Per-team saved views (`/for/[team]`)
- [ ] Resume PDF at `public/resume/`
- [ ] Custom domain cutover

## Never in this repo

Client project READMEs, internal assessment documents, interview notes, product
codenames, and colleague names. The evidence library is the public surface and
nothing else feeds it.
