# Stage 6 — Issue and Fix Mapping

| Issue | Finding in baseline | Fix / test | Current status | Residual limitation |
|---|---|---|---|---|
| VIS-001 | Sampled support text 7 px on mobile, 8 px on desktop | Raised text role sizes and added sampled 12 px minimum assertions for seven viewports | FIXED IN TESTED SELECTORS | Selectors are representative samples, not every text node |
| VIS-002 | Low-contrast notice and support copy reported in earlier issue ledger | Replaced key copy colors with stronger approved pairs and inspected paired rendered screenshots | IMPROVED | Full computed WCAG contrast audit of every rendered text/background pair not run |
| VIS-003 | Historical nested overflow candidates | Browser QA checked document/body overflow and out-of-viewport elements at seven viewports | NO CURRENT PAGE OVERFLOW | Does not exhaustively test every nested scroller, state or scroll position |
| COPY-001 | Awkward contact heading | “Informasi sebelum menghubungi.” | FIXED | No additional content changes required |
| A11Y-001 | Skip link, keyboard Escape and focus restoration unverified | Skip link, focusable main, Escape close, focus return, keyboard smoke tests | AUTOMATED PASS | Screen reader and true 200% browser zoom NOT TESTED |
| SEC-001 | npm install audit summary reports 4 high-severity vulnerabilities | No dependency remediation or full npm audit triage was performed in this refinement cycle | OPEN — BLOCKER FOR REAL PRODUCTION READINESS | Need full npm audit JSON, package path review and safe version upgrade plan |
| DES-001 | Portfolio-level distinctiveness comparison incomplete | Paired screenshot review completed; two-project comparator set still absent | DEFERRED / NOT YET PROVEN | Requires separate project references |

## Regression result reference

- Workflow: [#44258071683](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44258071683)
- Tested candidate: `54e894a1c0c7f63e841a8b9c5011e37d96e96647`
- Automated browser checks: 44 / 44 PASS
- Viewports: 320, 360, 390, 640, 768, 1024, 1440 px
- Page-level horizontal overflow: 0 / 7
- Console errors / page errors: 0 / 0

## Release implication

The open security/dependency audit, manual screen-reader/true-zoom reviews, full contrast audit and real-client publication constraints prevent treating this simulation as evidence of actual commercial production readiness. They remain explicit blockers for any real client-service release.
