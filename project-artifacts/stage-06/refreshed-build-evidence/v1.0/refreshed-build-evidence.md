# Stage 6 — Refreshed Build and Regression Evidence

**Workflow:** Web Preview CI run [#44258071683](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44258071683)  
**Tested commit:** `54e894a1c0c7f63e841a8b9c5011e37d96e96647`  
**Branch:** `test/full-workflow-production-shaped-simulation`  
**Environment:** GitHub Actions, Ubuntu 26.04, Node.js 22, Playwright 1.61.0 / Chromium.

## Verified

| Check | Result |
|---|---|
| Dependency installation | PASS |
| TypeScript typecheck | PASS |
| Vite production build | PASS |
| Chromium installation | PASS |
| Paired baseline screenshot capture | PASS — exact pre-refinement commit |
| Browser QA | PASS — 44 / 44 checks |
| Seven viewport layouts | PASS |
| Page-level horizontal overflow | 0 failures |
| Local anchor target validation | PASS |
| WhatsApp NOT_CONFIGURED / non-interactive state | PASS |
| Fictional-address disclosure | PASS |
| Required source-backed prices and terms | PASS |
| Mobile menu and keyboard flow | PASS |
| Reduced-motion preference | PASS |
| Console errors | 0 |
| Page runtime errors | 0 |

## Evidence output

GitHub Actions artifact 14407200762 contains:
- `baseline/baseline-report.json`
- `baseline/screenshots/viewport-320.png` through `viewport-1440.png`
- `baseline/screenshots/reduced-motion-390.png`
- `browser-qa-report.json`
- `screenshots/viewport-320.png` through `viewport-1440.png`
- `screenshots/reduced-motion-390.png`

## Known unresolved risks

- CI `npm install` output reports 4 high-severity vulnerabilities. A full `npm audit` report and remediation were not completed; do not use this evidence to certify production security.
- True 200% browser UI zoom and screen-reader review remain NOT TESTED.
- Full computed contrast audit across every text/background pair remains NOT TESTED.
- No real-world external release is authorized; project remains a synthetic fixture under `studio_development`.

## Conclusion

The updated website candidate passes its automated build and browser regression suite on the exact tested commit. This evidence supports progression to the independent-QA workflow simulation, but not an actual production release or real client sign-off.
