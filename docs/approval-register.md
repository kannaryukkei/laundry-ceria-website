# Laundry Ceria — Approval Register and Gate Reconciliation

**Project:** Laundry Ceria — fictional training fixture  
**Repository:** kannaryukkei/laundry-ceria-website  
**Working branch:** feat/stage-4-website-production  
**Register version:** 0.2 — training decision update, 2026-11-18  
**Register status:** INTERNAL TRAINING DECISIONS RECORDED · PUBLICATION NOT APPROVED

> **PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED**  
> On 2026-11-18, the user explicitly accepted the proposed defaults as simulated decisions for this training experiment. The decisions are limited to internal preview work. They are not approvals or confirmations from a real Laundry Ceria business owner, client, asset owner or external party.

## 1. Authority rule

For this fictional exercise, the user's explicit instruction to adopt the proposed defaults is treated as the controlling training-project decision. The durable record is docs/training-decision-record-2026-11-18.md (TDR-LC-2026-11-18-01).

This exercise-level decision does not impersonate an external client or fictional business owner. It does not verify business facts, approve public claims, grant asset rights or consent, authorize a commercial transaction, grant publication permission or authorize deployment. No decision is backdated: the existing implementation began before this WRP/G2 record, and that historical sequence remains unchanged.

A gate is passed only within the scope stated in its decision record. Training-only decisions must never be reused as approvals for real client work.

## 2. Gate status

| Gate | Required decision | Evidence / exact subject | Current status | Boundary / next action |
|---|---|---|---|---|
| G0 — Facts, public claims and assets | Business owner confirms material facts, destinations, asset rights/consent; Studio owner controls publication policy | All facts remain DEMO-ONLY / NOT_APPROVED. WhatsApp missing. Address fictional. Photo files absent; written consent pending. No real owner exists in this fixture. | NOT_APPROVED | Retain all preview safeguards. No public claims/assets/destinations may be promoted |
| G1 — Tier, scope and commercial | Explicit scope/tier and commercial boundary | TDR-LC-2026-11-18-01: STARTER-equivalent one-page internal training scope accepted; no sale, fee, margin, payment, commercial timeline, revision contract or client agreement | SIMULATED_PASS — TRAINING SCOPE ONLY | Commercial component is NOT_APPLICABLE. No real client offer or commercial commitment |
| G2 — WRP approval for design | Approve exact WRP version and safe fallbacks | WRP-LC-001 v0.2; derived from SNAP-LC-0001; TDR-LC-2026-11-18-01 records the exact progression decision | SIMULATED_PASS — APPROVED_FOR_DESIGN, INTERNAL TRAINING ONLY | Prospective internal design/refinement only; not retroactive approval and not real-client signoff |
| G3 — Content, claims and visual direction | Approve exact content/design version for the permitted scope | docs/stage-3-design-direction.md blob 266ce199d1f47821fa07664768147e24b5ffb5a7; source-backed copy and safe interaction constraints in WRP-LC-001 v0.2; TDR-LC-2026-11-18-01 | SIMULATED_PASS — INTERNAL PREVIEW ONLY | No business fact becomes verified or approved for public publication; any material change needs a new decision |
| G4 — Preview and revision acceptance | Accept/request changes to the exact preview version | PR #1 remains draft/open; no preview acceptance record; no real client exists | NOT_RECORDED | Treat all site output and screenshots as internal training evidence |
| G5 — Production readiness | Independent acceptance and all production criteria | Shared rendered gate remains FAIL for typography/contrast; keyboard, full responsive and 200% zoom evidence incomplete; business facts/assets not cleared | NOT_PASSED | Not applicable to the current fictional exercise; no production-readiness claim |
| G6 — Release authorization | Authorize exact release candidate and deployment | No release authorization; README and project records explicitly retain preview-only boundary | NOT_AUTHORIZED | No deployment, DNS or public release |
| G7 — Handover and closure | Confirm receipt/ownership and close obligations | No production release or handover record exists | NOT_STARTED | Not applicable while project remains a fictional preview |

## 3. Evidence inventory

| Evidence | What it proves | What it does not prove |
|---|---|---|
| docs/stage-0-source-fixture.md | Fictional training source packet and immutable constraints | Real business facts or publication rights |
| Stage 1–3 handoffs | Discovery, single-page planning and Fresh & Orderly design direction exist | Real client confirmation or factual/publication approval |
| docs/canonical-discovery-snapshot-v0.1.json / SNAP-LC-0001 | Workspace-scoped canonical packet: 6 sources, 22 source-coverage rows, 35 facts, 3 assets, 5 offers, 8 questions, 4 buying-journey records, 4 CTAs, 1 trust/process item, 8 gaps and 8 PREVIEW_ONLY page-coverage rows | Laravel platform mapping, real-world verification, publication permission or QA pass |
| docs/website-requirements-pack-v0.1-draft.md | Historical retrospective draft | Approval; it is superseded by v0.2 for current training decisions |
| docs/website-requirements-pack-v0.2-internal-preview.md | Exact approved-for-design training scope, exclusions, acceptance criteria and safe fallbacks | Real-client approval or permission to publish |
| docs/training-decision-record-2026-11-18.md | User-confirmed G1/G2/G3 training-only decisions and their boundaries | Client/business-owner consent, real commercial approval or release authorization |
| docs/experiment-06-issue-ledger.md | Selector-level findings and triage | Actual fixes or completed QA |
| docs/experiment-06-selector-remediation-map.md | Bounded remediation plan tied to audited source and rendered evidence | Implemented changes or a passing quality gate |
| SRC-0006 — after-QA-001 archive | Existing report and PNGs; page coverage was recorded as PREVIEW_ONLY | The report does not include website Git SHA; exact screenshot-to-commit binding remains NOT_VERIFIED |
| Web Preview CI run #74 at 9d4a5ef7049f781e5c0ec434658cd0c8c21b9bf7 | Dependency install, typecheck and Vite production build passed on that commit | Browser visual QA, keyboard operation, full responsive/accessibility acceptance or production readiness |
| Web Preview CI run #94 at ff29c739ed23441ed76a3b781d784d66552e6ea0 | Dependency install, typecheck and Vite production build passed on the documentation-only decision head | Browser visual QA, keyboard operation, full responsive/accessibility acceptance or production readiness |
| Web Preview CI run #99 at 9cc398f4b179e81de78e19148fb5fa9725f79e64 | Dependency install, typecheck and Vite production build passed on the latest documentation-only PR head | Browser visual QA, keyboard operation, full responsive/accessibility acceptance or production readiness |
| Web Preview CI run #101 at 9bb9c055a0276acec34fae85e272cf062c62792b | Dependency install, typecheck and Vite production build passed on the current documentation-only PR head | Browser visual QA, keyboard operation, full responsive/accessibility acceptance or production readiness |
| Web Preview CI run #103 at fef4a8461e2998ed622db99311d2e75095fd8f6e | Dependency install, typecheck and Vite production build passed on the current documentation-only PR head | Browser visual QA, keyboard operation, full responsive/accessibility acceptance or production readiness |
| Experiment 06 SHA-labelled baseline archive | 20 PNG screenshots plus report.json, diagnostics.log and companion manifest for target ff29c739ed23441ed76a3b781d784d66552e6ea0; archive SHA-256 fa74efef3cf0b6035f24891e7210bd17286ffcaadf921de7aee34453100b0dd7 | User supplied a dirty pre-checkout status and did not capture post-checkout cleanliness; visual review is possible, exact source-to-SHA binding remains conditional |
| PR #1 | Candidate implementation and training decision docs exist in a draft/open PR targeting main; the website source/CSS was not changed by the seven decision-record commits | Merge, client acceptance, G4/G5/G6/G7 or publication authorization |

## 4. Canonical workflow reconciliation

The repository's Stage 0–6 labels are historical project-local labels. Use the current Studio Master Skill v1.12 and Canonical Operating Workflow v1.0 stages for new work. See docs/workflow-stage-reconciliation.md.

- The new G1/G2/G3 decisions apply prospectively to this training exercise only.
- They do not rewrite the fact that implementation began before a WRP approval existed.
- WRP-LC-001 v0.2 is APPROVED_FOR_DESIGN for internal training only; commercial G1 is N/A.
- Stage 6 refinement and Stage 7 independent QA remain distinct.
- Stage 6 cannot start source/CSS changes until an exact commit is pinned and a fresh browser-rendered baseline is captured and preserved.

## 5. Current safe operating decision

- Continue only as a disclosed, internal training preview.
- Keep every business fact DEMO-ONLY and NOT_APPROVED.
- Keep WhatsApp NOT_CONFIGURED and non-interactive.
- Keep the address explicitly fictional, informational only and without maps/directions.
- Exclude the described photos because files are absent and written permission is pending.
- Keep a text-only temporary identity.
- Do not add testimonials, ratings, awards, customer counts, fabricated trust signals, payment methods, booking, checkout, tracking or invented operational terms.
- Do not deploy or publish.
- The shared rendered quality gate remains FAIL for typography and contrast. Keyboard, responsive and zoom checks remain NOT_TESTED/INCOMPLETE until evidenced.
- Stage 6 source/CSS work is waiting only on a fresh SHA-pinned browser baseline; Stage 7 must be independently executed.

## 6. Next actions and owners

| Order | Action | Responsible | Completion evidence |
|---:|---|---|---|
| 1 | Pin the exact candidate commit and recapture the actual browser baseline | Operator | Repository/branch/SHA, preview command and browser version, full/viewport/section PNGs, report.json and diagnostics.log retained together |
| 2 | Inspect the exact baseline images and run the mandatory specialist reviews | Operator / AI review | Actual PNG inspection, visual-design-audit and interface-quality-review records; separate visual-fidelity verdict |
| 3 | Apply bounded Stage 6 corrections tied to issue IDs | Operator / implementation agent | Separate branch/checkpoint, finding-to-change mapping, before/after captures, build and affected tests |
| 4 | Re-run the shared rendered gate and affected accessibility/functional checks | Operator | New report and honest PASS/FAIL/NOT_TESTED state, commit-bound evidence |
| 5 | Complete independent Stage 7 QA | Independent reviewer | Separate Stage 7 report; not a self-review or a CI-only claim |
| 6 | Keep G4/G5/G6/G7 unpassed until a separately authorized project decision | Operator | No preview acceptance, production readiness, release or handover inferred |

## 7. Change history

| Date | Change | Approval effect |
|---|---|---|
| 2026-11-18 | Register reconstructed from repository evidence, v0.1 | No approvals granted |
| 2026-11-18 | User accepted proposed defaults as simulated G1/G2/G3 decisions for this training experiment; TDR-LC-2026-11-18-01 and WRP-LC-001 v0.2 recorded | Training-only progression decision recorded; no client, publication, asset, production or release approval |


### Baseline capture integrity note — 2026-11-18

The user supplied `experiment-06-sha-pinned-baseline.zip`, whose companion manifest records target `ff29c739ed23441ed76a3b781d784d66552e6ea0`. The archive passed ZIP CRC validation and contains 20 PNGs, `report.json` and `diagnostics.log`. The report quality status is FAIL; typography and contrast failures are retained. The user's pre-checkout working tree was non-empty and no post-checkout cleanliness output was supplied, so the manifest/HEAD match is recorded but a clean source-tree-to-SHA binding is still pending. Do not alter or delete local work to manufacture a clean state.
