# Laundry Ceria — AWOS Simplified Test 02

**Mode:** studio_development · **Business:** synthetic training fixture · **Publication:** NOT_APPROVED

This branch is an independent full-website generation experiment. It does not continue or copy the A5, A6, or Test 01 implementations.

## Test 02 direction

- **Concept:** Neighborhood Laundry Ledger — an editorial, price-first presentation for a small neighborhood laundry.
- **Visual system:** ultramarine, warm paper, citrus accent, serif display typography, sans-serif reading text, and monospaced information labels.
- **Structure:** one responsive page covering services/prices, turnaround, process, pickup/delivery, hours/location, and contact readiness.
- **Implementation:** React + TypeScript + Vite; no backend, account, database, booking, payment, form submission, analytics, or external contact integration.
- **Assets:** no supplied business photos are used. The temporary identity is text-only; no official logo is claimed.
- **Typography:** system fallbacks only; no external font dependency is required.

## Source of truth

docs/stage-0-source-fixture.md contains the fictional interview notes and hard constraints. Business information is synthetic and must remain visibly identified as demo-only.

- Address Jl. Melati No. 12, Jakarta is fictional. Do not link it to maps or directions.
- WhatsApp is NOT_CONFIGURED. Do not invent a number, wa.me URL, QR code, or active contact control.
- Three described business photos are not supplied as files; verbal permission is not written permission. Do not use them.
- No logo was supplied. Do not invent an official logo or monogram.
- No testimonials, ratings, awards, customer counts, or unsupported trust claims.
- No checkout, payment, booking, order tracking, or customer accounts.
- Visible copy is in Bahasa Indonesia. Keep PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED visible at the top and footer.

## Local development

Requirements: Node.js 22 or compatible current LTS.

npm ci
npm run dev
npm run typecheck
npm run build

The CI workflow runs TypeScript/build checks, browser keyboard tests, Test 02 source/safeguard and responsive checks, reference captures, and the canonical shared website quality gate. Screenshots and automated checks are evidence, not proof of aesthetic quality or WCAG conformance.

## Isolation and publication boundary

- Test branch: experiment/test-02-independent-generation
- Baseline commit: 71dbcf27e6d77310cd7fa1a098dc8a7935711be2
- A5 PR #10, A6 PR #11, and Test 01 PR #12 are not modified by this branch.
- Do not merge, deploy, publish, configure DNS, contact real people, or represent this fictional business as real.