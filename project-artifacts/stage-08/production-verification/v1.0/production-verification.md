# Stage 8 — Production Verification Evidence

**Verification type:** Production-shaped CI/local-preview verification  
**Not a public production verification**  
**Operating mode:** studio_development  
**Delivery mode:** production  
**Execution class:** SIMULATION_ONLY

## Exact build and verification source

- Tested SHA: `9b2427a27264904ba67551f76bb600bebb67da4a`
- Web Preview CI: [#44259901262](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44259901262)
- Evidence artifact: [14406843437](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44259901262/artifacts/14406843437)
- Browser QA: 44 / 44 PASS
- Baseline and after screenshots: 7 viewport sizes plus reduced-motion
- Runtime invariant: PASS

## Verification results

| Verification | Result | Evidence |
|---|---|---|
| TypeScript | PASS | `npm run typecheck` in CI |
| Static production build | PASS | `npm run build` / Vite build generated dist |
| Workflow operating mode | PASS | studio_development |
| Workflow delivery mode | PASS | production |
| Execution class | PASS | SIMULATION_ONLY |
| Stage 8 gate readiness | PASS | Stage 8 can_start = true after G4–G6 simulation |
| External release invariant | PASS | external_release_allowed = false |
| Browser and content suite | PASS | 44 / 44 |
| Seven viewport layouts | PASS | 320, 360, 390, 640, 768, 1024, 1440 px |
| Runtime dependency audit | PASS | 0 vulnerabilities |
| Full dependency audit | OPEN | 4 high findings in dev/build dependency tree |
| Public endpoint / DNS / TLS | NOT APPLICABLE | No public environment or deployment created |
| Actual client conversion | NOT CONFIGURED | Fictional address, no official WhatsApp number |

## Environment facts

The preview server used by Playwright was bound to `127.0.0.1` inside GitHub Actions. The `dist/` output was generated in the runner. This evidence confirms the build and test lifecycle only. It is not evidence that an externally hosted website is online or that a public endpoint is reachable.

## Remaining readiness boundaries

- Four high findings in development/build dependencies need review and safe remediation.
- True 200% browser UI zoom, screen-reader review and full contrast audit remain NOT TESTED.
- No human independent reviewer or real client owner signed off; all relevant development roles are simulated.
- All business facts remain DEMO-ONLY / NOT_APPROVED.

## Conclusion

**Production-shaped build and verification PASS; real production verification NOT PERFORMED.** No external release is authorized.
