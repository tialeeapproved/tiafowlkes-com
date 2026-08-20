---
title: Removed an ambiguous metric from launch gate reviews
summary: The team was gating launches on a proxy the product couldn't control. I built the case to replace it and secured director approval.
tags: ['decisions']
org: Google
role: Program Manager
period: '2024'
outcome:
  value: 'Director-approved'
  label: 'KPI change'
scale:
  stakeholders: ['PM', 'Android TV', 'Software leads']
featured: true
order: 1
---

## The problem

Launch gate reviews were scored partly on first-try setup success. It sounded
like a quality metric, but it charged the product for user behavior it had no
control over — people setting a device down mid-flow, switching networks,
starting over on purpose. A launch could look worse than it was, and the number
was steering conversations at the level where launch decisions get made.

## What I did

I made the case for overall setup success as the primary measure instead, and
took it through PM, Android TV, and software leads before bringing it to the
gate. The tradeoff was real and I named it: we would lose a signal about the
very first attempt, which some people wanted to keep.

## What I gave up

First-try data still gets collected — it just stopped being a gating number.
That was the compromise that got the change through rather than stalling it.

## Outcome

Director approval, and it changed what leadership saw at every gate review
after it.

<!-- TODO (Tia): one line on what a later launch decision looked like
     because the metric changed. That's the sentence that closes this. -->
