# Stage 5 — Working Website Implementation Reference

**Implementation type:** Existing React / Vite static frontend  
**Repository:** kannaryukkei/laundry-ceria-website  
**Reference source branch:** feat/stage-4-website-production  
**Imported development branch:** test/full-workflow-production-shaped-simulation

## Main implementation files

- src/App.tsx — React page structure, responsive navigation, sections and interaction states.
- src/data.ts — service price rows, hours and process content.
- src/main.tsx — frontend entry point.
- src/styles.css — tokens, section styling, responsive rules and reduced-motion CSS.
- index.html — Vite document entry.
- package.json — React 19, TypeScript and Vite build configuration.

## Implemented behavior visible in source

- Persistent preview notice with DEMO-ONLY / NOT_APPROVED.
- In-page navigation and a mobile menu with aria-expanded / aria-controls.
- Five supplied services and price rows.
- Regular and express timing information.
- Process steps and pickup/delivery information.
- Exact operating hours and fictional address disclosure.
- Disabled WhatsApp representation without a live phone destination.
- Decorative hero illustration, not a business photograph.
- Responsive media queries and reduced-motion rule.

## Historical limitation

This code existed before the new canonical E2E test branch and before WRP-LC-E2E-001 was created. It is therefore an existing candidate, not a newly authorized implementation. The simulated WRP/G2 approval does not backdate or legalize historical work.

## Scope boundary

The implementation is frontend-only. This E2E does not add a backend, form submission, payment, tracking, live integration, deployment or public release.
