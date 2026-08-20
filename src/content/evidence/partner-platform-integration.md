---
title: Narrowing over covering
summary: The standard approach would have tested the full surface. I cut it to the highest-risk technical areas and accepted thinner coverage elsewhere.
tags: ['decisions', 'programs']
org: Google
role: Program Manager
period: '2025'
outcome:
  value: '20%'
  label: 'time efficiency gain'
scale:
  stakeholders: ['External partner', 'Platform', 'Software']
order: 5
---

## The problem

A platform integration with an external partner, on a fixed date, with a test
surface far larger than the time available. Covering all of it thinly was the
default path and the one nobody would have questioned.

## What I did

I narrowed scope to the highest-risk technical surfaces — the places where a
failure would be both likely and expensive — and deliberately accepted less
coverage everywhere else.

## What I gave up

Breadth. There were areas we tested lightly, and I had to be able to say why
that was the right call rather than a resourcing accident.

## Outcome

Twenty percent time efficiency gain, and the scoping framework became the model
subsequent partner integrations were built on.
