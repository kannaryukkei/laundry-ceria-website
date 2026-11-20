# Laundry Ceria — ADES Test 03

**Mode:** studio_development · **Business:** synthetic training fixture · **Publication:** NOT_APPROVED

This branch applies ADES (AI Design Exploration & Synthesis) to the existing Laundry Ceria Test 02 fixture. It preserves the original candidate explorations under `public/ades/` and builds one integrated experience in the React application.

## Design synthesis

- **Everyday local personality:** warm, friendly and approachable rather than playful or childish.
- **Price-first information hierarchy:** clear kiloan and satuan price tables, plus a concise price cue in the hero.
- **Textile-led art direction:** original local SVG concept artwork, labelled as conceptual rather than a photograph of the business.
- **One coherent system:** cream paper, cobalt blue, warm yellow and restrained coral accents; a compact display/system type scale; varied section compositions rather than repeating the same card pattern.
- **Responsive composition:** hero, navigation, pricing, estimator, process, pickup rules and location details adapt intentionally across mobile, tablet and desktop.

## Visitor interactions

- Accessible mobile navigation with Escape-to-close and focus return.
- Price estimator for the three kiloan services.
- Optional express surcharge calculation (+50%).
- Optional pickup fee calculation: Rp5.000 for 5 kg or less; free above 5 kg.
- Estimator is a transparent demo calculation, not a booking, order, payment or submission flow.

## Synthetic data and safeguards

- All business facts, prices, hours, address and service details come from `docs/stage-0-source-fixture.md`.
- All content remains PREVIEW ONLY, DEMO-ONLY and NOT_APPROVED.
- The address Jl. Melati No. 12, Jakarta is fictional. It is not linked to maps or directions.
- WhatsApp remains NOT CONFIGURED. There is no invented number, active WhatsApp link or message action.
- No testimonials, ratings, awards, customer counts, checkout, payment, booking, account, order tracking or external business actions.
- Concept illustration is not real client work, premises or staff photography.

## Local development

Requirements: Node.js 22 or compatible current LTS.

```bash
npm ci
npm run dev
npm run typecheck
npm run build
```

## Verification

The GitHub Actions workflow runs typecheck, production build, existing Test 02 contract safeguards, three-candidate ADES screenshot capture, the integrated experience regression, responsive screenshots, and the canonical shared website quality gate. Evidence and automated checks are not a substitute for reasoned visual review.

## Experiment isolation

- Baseline: `experiment/test-02-independent-generation` at `157f9bf84fb1d96ab3c6d7bfadb4968e160c32a0`
- ADES branch: `experiment/test-03-ades-exploration`
- Test 02 PR #13 and Test 01 PR #12 remain untouched.
- Do not merge, deploy, publish, configure DNS, contact real people, or represent this fictional business as real.
