# Decisions — page copy

Everything currently live on `tiafowlkes.com/decisions`, in the order it appears.
Each entry is one file in `src/content/decisions/`. Edit the file, not this doc —
this is a reading copy.

**Eyebrow:** Strategic judgment
**Lead:** Strategic calls made under ambiguity, competing priorities, and fixed timelines, documenting the judgment behind complex launch gates.

Every entry follows the same three beats: **Constraint** (what was actually hard),
**The call** (the decision, not the activity), **Impact** (what followed).

---

## 1. Consolidated ten fragmented releases into a single synchronized launch window.

`01-one-release.md`

**Constraint** — A court mandate in Sonos v. Google mandated firmware modifications across the active in-market portfolio. Standard operating procedure dictated sequential, device-by-device rollouts based on isolated team readiness, which failed to meet the court-ordered deadline.

**The call** — Consolidated the entire product portfolio into a single, synchronized release gate, enforcing a unified operational timeline across Software Engineering, Product Marketing, Legal, and PR.

**Impact** — Successfully deployed firmware updates across 720K+ devices impacting 10M+ active units on the legal deadline. Established two daily cross-functional control towers to eliminate cross-PA blockers, creating a repeatable framework adopted by executive leadership for subsequent high-stakes multi-product launches.

---

## 2. Pivoted active hardware testing architecture in-flight to protect launch readiness.

`02-hardware-swap.md`

**Constraint** — A late-stage SKU pivot and factory RF desense issue threatened the Google TV Streamer 4K timeline during active validation. The test population was stranded on unviable hardware, critical telemetry gaps were emerging, and the executive approval gate remained fixed.

**The call** — Executed a full hardware swap to Chromecast with Google TV for the active cohort rather than pausing validation, restructuring the downstream UX and feature testing roadmaps in real time.

**Impact** — The Streamer and remote cleared executive approval gates with setup and satisfaction telemetry intact. Maintained uninterrupted feature validation and kept cross-functional stakeholders aligned through a high-risk change impacting every downstream partner schedule.

---

## 3. Deprecated a misaligned core metric to drive executive alignment on true setup quality.

`03-cut-the-metric.md`

**Constraint** — Setup quality across the Chromecast ecosystem was gated on a "first-try setup" metric with divergent definitions across Engineering, Product, and QA. Executive launch reviews consistently stalled on metric interpretation rather than product health.

**The call** — Formally deprecated "first-try setup" from readiness review criteria and institutionalized Overall Setup Success (OSS) as the single source of truth KPI across all hardware lines.

**Impact** — Unified Product, Android TV, and Software leadership around an objective quality baseline. Converted launch readiness reviews from tactical debate into decisive, data-driven release gating across all subsequent hardware cycles.

---

## 4. Replaced vendor specification delivery with a co-engineered partnership framework.

`04-framework-not-spec.md`

**Constraint** — Third-party integration of the Google Home Platform into partner hardware lacked an operational blueprint. The legacy model relied on handing off static specs to partners and validating at end-of-funnel, shifting defect discovery to the most expensive phase of the product lifecycle.

**The call** — Co-designed a joint integration and testing framework directly with LG, establishing shared entrance and exit criteria, unified bug SLAs, and real-time defect visibility.

**Impact** — Shipped the integration flawlessly with smart home functionality synchronized across both software platforms. Elevated LG from a tactical hardware vendor to a strategic ecosystem partner, establishing the reference operational model for all subsequent 3P platform integrations.

---

## 5. Executed backward compatibility validation against unreleased hardware ahead of market entry.

`05-unreleased-hardware.md`

**Constraint** — Validation models evaluated in-market software strictly against in-market hardware. The Google TV Streamer remote remained unreleased with zero coverage for cross-device interoperability, while a shrinking participant pool required strict allocation discipline.

**The call** — Authorized and budgeted backward compatibility testing against unreleased hardware, a first for the entertainment portfolio, reallocating high-yield test cohorts to cover the risk.

**Impact** — Identified and mitigated critical interoperability defects pre-launch rather than post-commercialization. Established pre-market cross-hardware validation as standard operating practice across the entertainment vertical.

---

## 6. Secured dedicated staffing infrastructure to de-risk vendor transition timelines.

`06-bought-headcount.md`

**Constraint** — A critical vendor site migration was understaffed, managed by a single resource against a high-volume hardware shipment timeline. Absorbing the gap internally would have silently degraded shipment schedules and obscured true capacity constraints.

**The call** — Negotiated temporary on-site support from the outgoing vendor team for immediate risk mitigation, secured executive approval for incremental head count, and enforced a two-week advance notice SLA on all shipment requests.

**Impact** — Maintained 100% on-time shipment execution through the transition. Scaled the operational team to match actual program demand, shielding downstream product roadmaps from capacity bottlenecks.

---

## 7. Proactively funded and integrated emerging platform technologies ahead of roadmap demand.

`07-funded-partners.md`

**Constraint** — Matter over Thread and Spatial Audio represented strategic industry standards but lacked defined program ownership, allocated budget, or entry points within the active product pipeline.

**The call** — Championed cross-PA alignment, secured dedicated strategic budget to integrate both technologies into the testing pipeline, and established joint validation roadmaps with partner engineering leads.

**Impact** — Successfully onboarded both capabilities into the portfolio with structured validation data, enabling executive leadership to make proactive, data-backed commercialization decisions.

---

## 8. Centralized multi-team intake to eliminate participant pool cannibalization.

`08-bundled-requests.md`

**Constraint** — Android TV Setup, Google TV, and Chromecast teams submitted independent validation requests, competing for the same constrained participant pool without visibility into ecosystem queue depth.

**The call** — Established a centralized intake governance model across all three program leads and mandated bundled software testing sweeps over parallel execution.

**Impact** — Maximized participant cohort yield, eliminated cross-team resource competition, and stabilized cohort retention across high-velocity testing cycles.

---

## Notes on the set

**What's strong.** Every entry names a decision rather than an activity, and seven of
eight land a consequence that outlived the program — a framework adopted, a practice
standardized, a KPI institutionalized. That is the difference between a record of
judgment and a record of work, and it is what reads as L5.

**Where a recruiter will push.** The beat that is thinnest across all eight is the
tradeoff — what was given up, and what would have happened otherwise. Entries 2 and 5
imply it (pausing validation; spending scarce cohorts) but never say it outright.
In an interview those are the follow-up questions, so it is worth having the answers
ready even if they never go on the page.

**Two entries lean on the same event.** #1 and #4 both draw on partner-facing release
work, and #1 shares the Sonos matter with the Programs page. That is fine — different
lenses on the same evidence — but do not let a third one land there.
