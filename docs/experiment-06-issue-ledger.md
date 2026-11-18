# Experiment 06 — Laundry Ceria Issue Ledger

**Status:** Baseline and post-QA-001 evidence triaged; no website source changes authorized by this ledger.
**Project:** Fictional training fixture — PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED
**Website branch:** `feat/stage-4-website-production`
**Audited baseline commit:** `f79c2978e11dea653bbcc86f6a1832d3bd96ee8f`
**After-QA-001 archive:** owner-supplied `experiment-06-after-qa001.zip`, registered as `SRC-0006` in `SNAP-LC-0001`.

> Laundry Ceria is fictional. Keep the displayed address labelled fictional, WhatsApp NOT_CONFIGURED and non-interactive, exclude photos without files/written permission, and do not add social proof, unsupported claims or transactional features. Do not deploy or publish.

## 1. Evidence summary

| Check | Result | Interpretation |
|---|---:|---|
| Overall Shared Website Quality Gate | **FAIL** | Typography and contrast remain unresolved |
| Evidence validity after QA-001 | **PASS** | `evidence.valid=true`; 0 candidates; 0 failures |
| Typography | 423 observation rows / 59 signatures | Repeated states/viewports, not 423 independent defects |
| Contrast | 1,836 observation rows / 57 signatures | Repeated text/surface observations |
| Excluded contrast surfaces | 217 rows / 5 signatures | Manual review bucket; not automatically confirmed failures |
| Not-visible samples | 502 | Not observed failures |
| Page-level horizontal overflow | 0 failures | No document overflow at the nine diagnostic widths |
| Nested overflow candidates | 58 rows / 7 signatures | Require visual disposition; not 58 confirmed defects |

Diagnostic widths: 320, 360, 390, 640, 768, 900, 1024, 1280 and 1440 px. The baseline and post-QA-001 PNG files are byte-identical; QA-001 changed report/diagnostic behavior, not website appearance.

## 2. Prioritized issue ledger

| ID | Severity | Root cause | Evidence / observation | Bounded action and acceptance check | Status |
|---|---|---|---|---|---|
| GATE-001 | BLOCKER | EXTERNAL_APPROVAL_DEPENDENCY | WRP-LC-001 v0.1 is retrospective DRAFT; SNAP-LC-0001 is a draft packet; platform project mapping unverified; G1 not recorded; G2 not passed. Implementation predates the reconstructed WRP. | Operator reviews canonical records and WRP; owner records real G1/G2 decisions against exact versions. A simulated training decision must be labelled simulated. Never backdate approval. | OPEN — blocks formal Stage 6 |
| GATE-002 | HIGH | EXTERNAL_APPROVAL_DEPENDENCY | Legacy Laundry stage numbering was inconsistent with Studio Master Skill v1.12 / Canonical Operating Workflow v1.0. | Keep `docs/workflow-stage-reconciliation.md` and README links. Stage 6 refinement and Stage 7 independent QA remain separate. | DOCUMENTED IN BRANCH |
| PROC-001 | HIGH | IMPLEMENTATION_QA | Web Preview CI #46 passed install, typecheck and production build at `153e0a93a66bc27820c0eda4e1e47af61ddadd32`. Rendered gate still FAIL; responsive and accessibility checks remain incomplete. Screenshot report lacks website SHA. | Complete all required responsive/keyboard/focus/reduced-motion/200% zoom checks; bind future screenshots to exact website SHA; retain failures. | OPEN |
| VIS-001 | HIGH | IMPLEMENTATION_QA | Typography: 423 rows / 59 signatures. Body/support copy appears at 8–14px; examples include process text 10–11px, supporting notes 9–11px, nav links 9–12px. Stage 3 planned Body 16px, Small 14px, Micro 12px. | Correct role assignments and sizes; keep semantically important text out of micro roles. Verify at 390/768/1440px at 100%, with no clipping/wrap regression. | OPEN |
| VIS-002 | HIGH | IMPLEMENTATION_QA | Contrast: 1,836 rows / 57 signatures. Preview notice reported 3.71:1; prominent preview wording 4.267:1; pricing notes ~2.97:1; some kickers ~2.91–3.22:1; teal-card labels ~3.39–3.66:1. | Prioritize preview safeguards, prices, conditions, hours and unavailable/contact explanations. Use suitable approved text/surface pairs; retest sampled states. Do not lower gate thresholds. | OPEN |
| VIS-003 | MEDIUM | IMPLEMENTATION_QA | 58 nested-overflow rows / 7 signatures; no page-level document overflow. Suspects include hero/turnaround sections, hero wrapper/art, address card and visually hidden nav label. | Inspect visible clipping at 320/360/390/640/768px. Separate intentional art clipping and visually hidden text from actual content clipping. No blanket `overflow-x:hidden`. | OPEN — manual confirmation |
| A11Y-001 | HIGH | IMPLEMENTATION_QA | Keyboard-only journeys, skip-link activation, menu Escape/focus return, reduced motion and 200% zoom have not been fully verified. Static inspection suggests skip-link and Escape/focus behavior require attention; no keyboard pass is claimed. | Test representative keyboard journeys start-to-finish; add/fix only confirmed missing behaviors; test focus visibility/return and reduced-motion; record evidence. | OPEN — NOT TESTED |
| COPY-001 | LOW | MASTER_SKILL_REASONING | Contact heading “Pilih cara yang ingin dikenali.” is awkward and may not clearly communicate contact options. | Make a bounded Bahasa Indonesia copy correction only after the relevant WRP/scope gate is resolved; verify no conversion behavior is implied. | OPEN |
| DES-001 | MEDIUM | MASTER_SKILL_REASONING | Preliminary aesthetic verdict: COMPETENT BUT GENERIC. Required comparison against at least two recent relevant Studio projects was not completed. | Compare design fingerprints and rendered references of two projects; document reused/new patterns and whether direction needs redesign. | DEFERRED |
| QA-001 | HIGH | IMPLEMENTATION_QA | Testimonial detector matched substring `review` inside `preview`, falsely treating the preview notice as proof. | Word-boundary-aware matching and regression tests merged in Studio PR #48. Post-fix evidence check has 0 candidates and 0 failures; all PNGs unchanged. | FIXED — VERIFIED |

## 3. Contrast exclusion disposition

The 217 excluded rows reduce to five signatures from abstract hero art: decorative `✳` symbols, the illustration badge `RAPI TERATUR`, and caption `ILUSTRASI DEKORATIF`. The star symbols are decorative. The text-bearing badge/caption require a deliberate decision: if meaningful, make them legible; if decorative, they must not carry essential claims. Do not count all 217 as proven contrast failures.

## 4. Preserved elements and project safeguards

- Preserve the abstract CSS folded-fabric hero illustration; no approved business photos exist.
- Preserve separate kiloan/satuan pricing, all five demo prices and units, regular/express conditions, six-step process and exact pickup thresholds.
- Keep `Jl. Melati No. 12, Jakarta` visibly labelled as fictional; no maps/directions.
- Keep WhatsApp `NOT_CONFIGURED`, disabled and non-interactive.
- Do not add testimonials, ratings, awards, customer counts, invented guarantees, official logo, bookings, payments, tracking or other unsupported features.
- No deployment or public publication.

## 5. Current gate and next execution

Current records: WRP-LC-001 v0.1 = DRAFT / STUDIO_REVIEW_REQUIRED; SNAP-LC-0001 = draft; project ID `LC-TRAINING-001` is workspace-scoped and not yet mapped to a Laravel project ID; G1 = NOT_RECORDED; G2 = NOT_PASSED. Eight question-to-section page-coverage entries are PREVIEW_ONLY and refer to `SRC-0006`; the screenshot archive is not in Git and the report does not embed the website SHA, so exact commit binding is NOT_VERIFIED.

Proceed in this order:
1. Operator review of SNAP-LC-0001 and WRP-LC-001; verify platform project mapping without inventing a database ID.
2. Record actual owner G1 and G2 decisions against exact versions. Never infer or backdate approval.
3. Complete responsive, keyboard-only, focus, reduced-motion and 200% zoom checks. Keep typography/contrast gate FAIL visible.
4. Only when Stage 6 entry conditions are met, refine bounded slices VIS-001/VIS-002 first, then VIS-003 and confirmed accessibility/copy issues. Re-capture the same viewports and states.
5. Stage 7 independent QA remains a separate review; no preview pass authorizes production or release.

**Current decision:** QA-001 is closed and verified. Documentation reconciliation and canonical snapshot reconstruction are complete as drafts. GATE-001, PROC-001, VIS-001, VIS-002, VIS-003, A11Y-001 and COPY-001 remain open; DES-001 deferred. No Laundry Ceria application source or CSS has been changed by this documentation work.