# Stage 9 — Root Cause Classification and Decision

## 1. Product / website findings

| Finding | Root cause classification | Decision |
|---|---|---|
| Supporting copy rendered at 7–8 px in baseline | CSS role sizes and legacy mobile rules | Revised selector sizes and final breakpoint overrides; sampled minimum now 12 px |
| Preview / metadata contrast weak in selected areas | Insufficient contrast in text/surface choices | Improved key pairs; exhaustive contrast audit remains open |
| Contact heading awkward | UX copy issue | Revised copy to “Informasi sebelum menghubungi.” |
| Skip link absent | Accessibility implementation gap | Added keyboard-first skip link to main content |
| Mobile menu had no Escape close / focus return | Interaction completeness gap | Added Escape listener and focus restoration |
| Visual distinctiveness uncertain | Evidence gap, not just CSS defect | Retained “competent but generic” verdict; comparator project evidence still missing |

## 2. Test infrastructure findings

| Finding | Root cause | Decision |
|---|---|---|
| Playwright 1.55 browser installation failed on Ubuntu 26.04 | Test dependency did not support the runner image | Updated to Playwright 1.61.0; browser installed and ran |
| Browser copy assertion rejected “Biasanya” | Test assertion was case-sensitive | Normalized case in test assertion |
| Mobile typography test failed at 320 px | Legacy notice/footer mobile declarations overrode later token sizes | Added final breakpoint overrides |
| Typography test failed at 768 px | Footer retained 11 px in tablet/desktop range | Raised final footer floor to 12 px |
| CI invariant initially expected Stage 8 to remain startable after G7 | Test harness did not account for completed Stage 8 transition | Updated invariant to accept Stage 8 PASSED and Stage 9 startable/completed |
| An update-file call omitted the target branch | Tool invocation defaulted to main | Accidental test file was removed from main via correction commit; subsequent update specified the E2E branch explicitly |

## 3. Workflow / governance findings

- The operating_mode and delivery_mode separation behaves as intended.
- Repository-native artifact intake, version snapshots, hashes, event log and gate approvals processed successfully through the full synthetic lifecycle.
- Development role simulation is visible and attributed; it is not silently elevated to real client identity.
- The runtime invariant prevents development mode from setting `external_release_allowed = true`, even after G6 is recorded.
- The artifact validator is structural; it does not semantically prove that arbitrary prose is true, source-backed or legally permitted.
- The configured simulation allowlist supports one authenticated operator simulating client/reviewer roles only in studio_development. Real client_service still requires authenticated real roles.

## 4. Security and QA root causes

- Runtime dependency audit found 0 vulnerabilities.
- Full dependency audit found 4 high findings in development/build packages (Vite, fdir, picomatch and tinyglobby). No forced downgrade or unreviewed upgrade was made.
- True browser UI zoom at 200%, screen-reader review and complete rendered contrast testing remain NOT TESTED.
- Synthetic facts, fictional address, missing WhatsApp destination and excluded photo assets prevent any real publication.

## 5. Root-cause decision

The observed website/automation defects were bounded implementation or test-harness issues and have been corrected where evidence permitted. The unresolved production, security and governance items are not treated as UI defects; they require a separate dependency-review and real-client workflow.

**Decision:** REVISE the system in the next increment; retain mode separation and auditability, but strengthen semantic/quality/security assurance before any real client-service adoption.
