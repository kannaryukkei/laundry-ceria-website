# Laundry Ceria — Website Experiment

**Mode:** `studio_development` · **Data:** synthetic · **Publication:** not authorized

This repository contains one fictional Laundry Ceria website experiment. It is a website project repository, not the AI Operated Web Studio platform, project manager, workflow engine, or approval system.

## Current boundary

- Internal development and preview only. Laundry Ceria is not a real business.
- All prices, service details, operating information, contact context, and address in this project are synthetic. Never present them as real business facts.
- The displayed address, `Jl. Melati No. 12, Jakarta`, is fictional. Keep it explicitly labelled as demo data; never connect it to maps, directions, or a live location.
- WhatsApp is `NOT_CONFIGURED`. Do not invent a number, create a `wa.me` link or QR code, or make the disabled contact treatment interactive.
- The described business photos are not supplied as files. Verbal permission is not written permission; do not use the photos.
- No official logo was supplied. Keep the identity text-only and temporary.
- Do not add testimonials, ratings, awards, customer counts, fabricated trust signals, or an independently verified no-mix-up guarantee.
- Do not imply payments, booking, checkout, order tracking, customer accounts, or other unsupported services.
- Keep visible website copy in Bahasa Indonesia and retain the persistent `PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED` notice.

No public deployment, publication, outreach, DNS configuration, real contact integration, or production release is authorized.

## Project material

The original project handoffs are retained as source and design provenance:

- [Source fixture](./docs/stage-0-source-fixture.md) — fictional interview notes and hard constraints.
- [Discovery and strategy](./docs/stage-1-discovery-strategy.md) — audience hypotheses and grounded positioning.
- [Website plan](./docs/stage-2-website-planning.md) — one-page information architecture and interaction requirements.
- [Design direction](./docs/stage-3-design-direction.md) — Fresh & Orderly visual direction and design tokens.
- [Experiment 06 issue ledger](./docs/experiment-06-issue-ledger.md) — rendered findings and unresolved defects.
- [Visual refinement log](./docs/experiment-06-visual-refinement-log.md) — before/after implementation and capture notes.
- [Selector remediation map](./docs/experiment-06-selector-remediation-map.md) — source-specific audit notes.
- [Website verification checklist](./docs/website-checklist.md) — manual checks still required.

The old Stage 0–3 labels are historical names for these handoff documents, not a mandatory execution pipeline. Retired approval registers, canonical artifact snapshots, requirements-pack duplicates, and stage-reconciliation records are intentionally not maintained here.

## Development

Requirements: Node.js 22 or compatible current LTS.

```bash
npm ci
npm run dev
npm run typecheck
npm run build
```

The GitHub Actions workflow uses the committed npm lockfile with `npm ci`, runs TypeScript checking and a Vite production build, installs Chromium for the pinned Playwright `1.65.1` regressions, captures exact-head Hero screenshots at 640px/720px and full-page breakpoint evidence at 320px/360px/900px/1024px/1280px, and invokes the canonical AWOS Shared Website Quality Gate. The shared gate also measures 320px/360px/390px/640px/768px/900px/1024px/1280px/1440px. Screenshot captures are review evidence, not automated visual assertions; manual visual inspection, keyboard, accessibility, and human acceptance checks remain required. A passing build is not a QA or release approval.

The shared quality gate requires `.website-quality/evidence-manifest.json`. This small file is intentionally retained even when the page has no detected proof-like claims: `"items": []` means there are no testimonial, rating, award, customer-count or performance-claim records to validate. `"humanReviewRequired": true` keeps human review enabled. This is a quality-gate input only; it is not a project-state manifest, workflow engine, approval register, or publication authorization.

`package-lock.json` is committed (npm lockfile v3, 122 package entries) and pins Playwright to `1.65.1`. Exact-head CI run [#44370283497](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44370283497) passed using `npm ci`; the run's `npm ls --all` and `npm audit` both exited 0, with zero reported vulnerabilities. These results are tied to the run date and are not a guarantee of future dependency security.

## How this repository is operated

The active project conversation is the single operating and decision center. Use GitHub for the website source, project source material, and useful QA evidence. Do not recreate a dashboard, issue-form intake workflow, project-state manifest, approval register, artifact registry, or workflow engine in this repository.

Use a focused feature branch and pull request into `main` for code changes. Keep the project in `studio_development` unless a real client engagement is separately established with real source material and authorization.
