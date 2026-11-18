# Laundry Ceria — Website Experiment

> **PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED**

This repository contains a fictional training project for validating the AI-Operated Web Studio workflow. Laundry Ceria is not a real business. Nothing in this repository may be represented as a real business website or published as a real business.

## Project status

- Stage 0 — Material Ingestion: completed
- Stage 1 — Discovery & Strategy: completed
- Stage 2 — Website Planning: completed
- Stage 3 — Design Direction: completed
- Stage 4 — Website Production: in progress
- Stage 5 — Quality Assurance: pending
- Stage 6 — Final Delivery: pending

## Workflow reconciliation records

The stage numbers in the project status above are **legacy project-local labels** from the initial training workflow. They do not map one-to-one to the current AI-Operated Web Studio Master Skill v1.12 stages. See [workflow-stage-reconciliation.md](./docs/workflow-stage-reconciliation.md) before advancing the project.

Current retrospective records:
- [Website Requirements Pack WRP-LC-001 v0.2 — APPROVED_FOR_DESIGN, internal training only](./docs/website-requirements-pack-v0.2-internal-preview.md)
- [WRP-LC-001 v0.1 — historical retrospective draft](./docs/website-requirements-pack-v0.1-draft.md)
- [Training decision record TDR-LC-2026-11-18-01 — G1/G2/G3 boundaries](./docs/training-decision-record-2026-11-18.md)
- [Experiment 06 visual refinement log — baseline capture gate](./docs/experiment-06-visual-refinement-log.md)
- [Canonical discovery snapshot SNAP-LC-0001 — draft](./docs/canonical-discovery-snapshot-v0.1.json)
- [Approval register and G0–G7 status](./docs/approval-register.md)
- [Experiment 06 issue ledger](./docs/experiment-06-issue-ledger.md)
- [Experiment 06 selector remediation map](./docs/experiment-06-selector-remediation-map.md)

G1/G2/G3 are recorded as simulated decisions for this training exercise only; WRP v0.2 is APPROVED_FOR_DESIGN for internal preview/refinement. This is not real-client or business-owner confirmation. All fixture facts remain DEMO-ONLY / NOT_APPROVED, G0 publication remains NOT_APPROVED, G4/G5/G6/G7 remain unpassed, and the existing implementation is not retroactively authorized. Stage 6 source changes still require a fresh browser baseline pinned to an exact commit.

## Current canonical workflow focus

G1/G2/G3 training-only decisions are recorded. Current canonical focus is Stage 6 — Refinement. The exact branch/commit must be pinned and a fresh browser-rendered baseline preserved before any source/CSS correction. Stage 7 remains an independent QA gate; no deployment or public release is authorized.

## Non-negotiable safeguards

- All business facts are fictional and remain `DEMO-ONLY`.
- Publication status remains `NOT_APPROVED`.
- The address `Jl. Melati No. 12, Jakarta` is fictional. It must always be explicitly labelled as demo data and must never be linked to map directions.
- WhatsApp remains `NOT_CONFIGURED`. Do not invent a number, create a `wa.me` URL, QR code, or active WhatsApp action.
- The three described phone photos are not included as files. Permission is verbal only and remains `PENDING`; do not use them.
- No logo is supplied. Use text-only temporary identity treatment, not an invented official logo.
- Do not add testimonials, ratings, awards, customer counts, or fabricated trust signals.
- Do not convert the owner's no-mix-up statement into an independently verified guarantee.
- Do not add unsupported payment methods, booking, checkout, order tracking, or service terms.
- Keep all visible UI content in Bahasa Indonesia.

## Source documents

The approved stage handoffs are stored in [docs/](./docs/). Stage 0 is the source of business facts and publication constraints; Stages 1–3 define strategy, planning, and design decisions.

## Development

- `npm install`
- `npm run dev`
- `npm run typecheck`
- `npm run build`

Do not assume a deployment target or public release is authorized.

## Git workflow

- `main` is the stable baseline.
- Stage work is performed on dedicated feature branches and reviewed before merging.
- Stage 4 must not be marked complete until its production build and implementation checks pass.
- Stage 5 is a separate QA gate; production build success alone is not a QA pass.
