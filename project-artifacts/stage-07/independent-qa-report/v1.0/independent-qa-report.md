# Stage 7 — Independent QA Report

**Project:** LAUNDRY-CERIA-FULL-E2E-DEV  
**Classification:** SYNTHETIC / DEVELOPMENT ONLY  
**QA mode:** Automated CI plus assistant review of rendered screenshot evidence  
**Independent reviewer identity:** Development simulation only; not a separate real human reviewer  
**Verdict:** AUTOMATED QA PASS WITH EXPLICIT MANUAL / SECURITY LIMITATIONS

## 1. Exact test target

- Repository: kannaryukkei/laundry-ceria-website
- Branch: test/full-workflow-production-shaped-simulation
- Commit: `2aa97b6a50c0bb2009517e34a9fe9dfc3ec4a78f`
- CI workflow: Web Preview CI run #44258897911
- Browser QA: 44 / 44 PASS
- Environment: Ubuntu 26.04, Node.js 22, Playwright 1.61.0, Chromium.

## 2. Automated QA results

| Area | Result | Notes |
|---|---|---|
| Dependency installation | PASS | npm install completed |
| TypeScript check | PASS | npm run typecheck |
| Production build | PASS | npm run build; Vite generated dist |
| Browser launch | PASS | Chromium installed and ran |
| Canonical page sections | PASS | All ten section IDs found exactly once |
| In-page anchors | PASS | Every local anchor resolves to an existing target |
| External links | PASS | No external phone, WhatsApp, map or contact URL detected |
| Fictional address | PASS | Required fictional-address disclosure present |
| Demo safeguards | PASS | Preview, DEMO-ONLY and NOT_APPROVED copy present |
| Business facts | PASS | Required service prices, qualifiers and key terms present |
| WhatsApp | PASS | NOT_CONFIGURED and non-interactive; no href/handler/focus target |
| Responsive layout | PASS | Seven viewports; no page-level horizontal overflow |
| Sampled typography | PASS | Sampled minimum 12 px at each tested viewport |
| Mobile navigation | PASS | Open, local anchor, close |
| Keyboard flow | PASS | Skip link, main focus, Enter, Tab, Escape and focus return |
| Reduced motion | PASS | Button transition suppressed under reduced-motion preference |
| Console / runtime errors | PASS | 0 console errors and 0 page errors |

## 3. Viewport matrix

320, 360, 390, 640, 768, 1024 and 1440 CSS px. Document and body width matched viewport width at each measurement.

The 640 px measurement is a narrow-layout proxy only; it is not an actual 200% browser UI zoom test.

## 4. Security audit

The same CI run captured:
- Full dependency audit: 4 high, 0 critical.
- Production/runtime audit using `npm audit --omit=dev`: 0 vulnerabilities.

The full-audit findings concern development/build dependencies, including Vite, fdir, picomatch and tinyglobby. No dependency remediation was performed in this test. Full npm audit JSON and runtime-only JSON are included in the CI artifact.

## 5. Manual checks not completed

- Actual 200% browser UI zoom.
- Screen-reader / assistive-technology review.
- Complete WCAG contrast audit for every visible text/background pair.
- Separate real human independent reviewer sign-off.
- Verification of a real business, real address, official phone/WhatsApp, source image permissions or client publication authority; those cannot be established by a fictional fixture.

## 6. QA judgement

The exact tested commit passes the automated functional, responsive and keyboard smoke suite. The paired baseline and after screenshots show a measurable increase in sampled text sizes without page-level overflow.

This is not an unconditional production approval. The full development-toolchain audit, true zoom, screen-reader and full contrast checks remain open. The reviewer role in this run is synthetic and attributed to the authenticated GitHub operator under studio_development.

**QA outcome:** PASS FOR DEVELOPMENT SIMULATION; REAL PRODUCTION READINESS NOT ESTABLISHED.
