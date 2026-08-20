---
title: Three org lines, one release plan
summary: Android TV, Google TV, and Chromecast each had their own priorities and no shared plan for in-market devices. I became the point that reconciled them.
tags: ['programs', 'decisions']
org: Google
role: Program Manager
period: '2024–2025'
outcome:
  value: '2M users'
  label: 'hardware shipped to'
scale:
  users: '2M globally'
  stakeholders: ['Android TV', 'Google TV', 'Chromecast TPM']
featured: true
order: 2
---

## The problem

Three organizations owned pieces of the same user experience and none of them
owned the seam. In-market Chromecast devices needed backward compatibility
testing against new hardware, but each org had its own release calendar and its
own idea of what mattered. Requests arrived fragmented and got prioritized
inconsistently.

## What I did

I centralized the requests and became the single point the three teams
negotiated through. The call I made was to bundle software releases rather than
run them separately — it meant fewer, larger coordination points instead of
continuous small ones, and it let one testing pass cover what would otherwise
have taken three.

## What I gave up

Bundling reduces flexibility. A team that wanted to ship one fix early had to
wait for the bundle. I traded that for a plan all three orgs could actually
hold.

## Outcome

New hardware reached two million users globally, with backward compatibility
verified against in-market devices for the first time under this model.
