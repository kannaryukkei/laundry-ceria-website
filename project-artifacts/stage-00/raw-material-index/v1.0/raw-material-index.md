# Stage 0 — Raw Material Index

**Project:** LAUNDRY-CERIA-FULL-E2E-DEV  
**Classification:** SYNTHETIC / DEVELOPMENT ONLY  
**Source fixture:** `docs/stage-0-source-fixture.md`  
**Source commit:** `c9fa889b8449853f4f82d7229e9533984c7f598a`

## Source inventory

| Material ID | Material | Locator | Coverage | Authority / limitation |
|---|---|---|---|---|
| MAT-001 | Original fictional owner interview | NOTE_LINE [1]–[22] | Business model, team, service list, customers, intake process, turnaround, hours, price gaps, pickup/delivery gap, claim, assets, goals, social-proof restrictions | DEMO-ONLY; NOT_APPROVED |
| MAT-002 | Fictional follow-up interview | NOTE_LINE [23]–[32] | Replaces missing/uncertain prices, express terms, Sunday hours and pickup/delivery details; supplies fictional address and packaging detail; confirms contact and asset gaps | DEMO-ONLY; NOT_APPROVED; latest statement controls conflicts |
| MAT-003 | Fixture guardrails and exercise instructions | Opening notice and prompt in source fixture | No fabricated facts, no publication-status upgrade, line-level evidence, explicit gaps, latest-line conflict rule | Binding exercise constraints |
| MAT-004 | Existing Laundry Ceria Stage 1–3 handoffs | `docs/stage-1-discovery-strategy.md`, `docs/stage-2-website-planning.md`, `docs/stage-3-design-direction.md` | Context for downstream planning only | Derived project documents; cannot override Stage 0 facts or fixture restrictions |

## Intake completeness

- Primary source is a written training fixture, not a real client record.
- No original audio, signed transcript, identity verification, real contact, source image files, written asset licence, or external business record is included.
- The follow-up interview is explicitly newer and replaces conflicting earlier statements at [14], [11], [13], and [15].
- No testimonials, ratings, awards or customer counts may be used.
- WhatsApp number is missing. Any contact action remains NOT_CONFIGURED.
- The address is fictional. It must not be mapped or used for navigation.
- Three photo descriptions exist, but the image files are absent and permission is verbal only.

## Source handling decision

Use only the source fixture for business facts. Retain NOTE_LINE locators and short quotations in the Fact Register. Treat all facts as `DEMO-ONLY` and all public claims as `NOT_APPROVED`. The Stage 1–3 handoffs may inform studio recommendations, but are not new primary evidence and do not create approvals.

**Stage 0 source boundary:** sufficient to create a synthetic internal preview brief; insufficient to represent a real business, publish claims, configure a live CTA, use the described photos, or authorize release.
