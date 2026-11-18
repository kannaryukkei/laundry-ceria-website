# Experiment 06 — Laundry Ceria Issue Ledger

**Status:** SHA-labelled baseline archive received; tracked source-tree integrity confirmed by operator; Slice A code implemented on fix/experiment-06-stage6-remediation and awaiting build/rendered verification.
**Project:** Fictional training fixture — PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED
**Website branch:** `feat/stage-4-website-production`
**Original code-audit baseline commit:** `f79c2978e11dea653bbcc86f6a1832d3bd96ee8f`  
**SHA-labelled recapture target:** `ff29c739ed23441ed76a3b781d784d66552e6ea0` — manifest present; HEAD matched, tracked diffs empty, no untracked src/public  
**Recapture archive:** `experiment-06-sha-pinned-baseline.zip` — SHA-256 `fa74efef3cf0b6035f24891e7210bd17286ffcaadf921de7aee34453100b0dd7`
**After-QA-001 archive:** owner-supplied `experiment-06-after-qa001.zip`, registered as `SRC-0006` in `SNAP-LC-0001`.

> Laundry Ceria is fictional. Keep the displayed address labelled fictional, WhatsApp NOT_CONFIGURED and non-interactive, exclude photos without files/written permission, and do not add social proof, unsupported claims or transactional features. Do not deploy or publish.

## 1. Evidence summary

| Check | Result | Interpretation |
|---|---:|---|
| Original post-QA-001 Shared Website Quality Gate | **FAIL** | Historical audit evidence before the SHA-labelled recapture |
| SHA-labelled recapture Shared Website Quality Gate | **FAIL** | Typography and contrast remain unresolved |
| Evidence validity in recapture | **VALID, HUMAN REVIEW REQUIRED** | `evidence.valid=true`; 0 candidates; 0 failures; `matchedRecordIds=[]` |
| Typography | 423 observation rows / 59 signatures | Repeated states/viewports, not 423 independent defects |
| Contrast | 1,839 observation rows / 57 signatures | Repeated text/surface observations |
| Excluded contrast surfaces | 216 rows / 5 signatures | Manual review bucket; not automatically confirmed failures |
| Not-visible samples | 500 | Not observed failures |
| Page-level horizontal overflow | 0 failures | `responsive.failures=[]` at the nine diagnostic widths |
| Nested overflow candidates | 58 viewport-level offender rows | Require visual disposition; not 58 confirmed defects |
| Screenshot coverage | 20 PNGs | 3 full-page, 3 viewport and 14 section captures |

Diagnostic widths: 320, 360, 390, 640, 768, 900, 1024, 1280 and 1440 px. The recapture manifest records SHA `ff29c739ed23441ed76a3b781d784d66552e6ea0`; however, the pre-checkout working tree was dirty and post-checkout cleanliness was not recorded, so source-to-SHA binding remains CONDITIONAL until verified.

## 2. Prioritized issue ledger

| ID | Severity | Root cause | Evidence / observation | Bounded action and acceptance check | Status |
|---|---|---|---|---|---|
| GATE-001 | MEDIUM | EXTERNAL_APPROVAL_DEPENDENCY | The user accepted TDR-LC-2026-11-18-01 for the fictional training exercise. G1/G2/G3 are SIMULATED_PASS for this exercise only; WRP-LC-001 v0.2 is APPROVED_FOR_DESIGN for internal preview. Commercial terms are N/A. This is not a real client/business-owner approval and does not retroactively authorize the earlier implementation. | Preserve the exact WRP and decision record; do not reuse it as approval evidence for a real client or infer publication/asset rights. | RESOLVED FOR TRAINING ONLY; NOT APPROVED FOR REAL CLIENT WORK |
| GATE-002 | HIGH | EXTERNAL_APPROVAL_DEPENDENCY | Legacy Laundry stage numbering was inconsistent with Studio Master Skill v1.12 / Canonical Operating Workflow v1.0. | Keep `docs/workflow-stage-reconciliation.md` and README links. Stage 6 refinement and Stage 7 independent QA remain separate. | DOCUMENTED IN BRANCH |
| PROC-001 | HIGH | IMPLEMENTATION_QA | Web Preview CI #103 passed on the documentation-only baseline head. Local npm ci and production build passed on the pinned checkout; the follow-up output confirms no tracked source diffs or untracked files under src/public. An untracked package-lock was used and is absent from the Git tree. After-slice build/render remains pending; keyboard, focus and 200% zoom remain incomplete. | Verify the Stage 6 branch's production build and capture the same rendered widths/sections. Keep package-lock reproducibility and four reported high-severity npm advisories visible for separate dependency review; run responsive/keyboard/focus/reduced-motion/200% zoom checks separately. | OPEN — AFTER-SLICE BUILD/RENDER PENDING |
| VIS-001 | HIGH | IMPLEMENTATION_QA | Typography: 423 rows / 59 signatures. Confirmed selectors include `.process-item p` 10px, `.timing-rule` 8–9px, `.express-foot` 8–9px, `.fictional-label` 7px, `.status-pill` 8px, `.price-card-head p` 9–10px, `.pickup-footnote` 8–9px and `.hours-row` 11px. `.eyebrow` paragraphs are semantically metadata but the gate classifies plain `<p>` as BODY unless `data-qa-role` overrides it. | Apply role-accurate `data-qa-role` (without lowering floors), raise body/disclosure copy to >=15/13px, metadata to >=11px (target12), units to 12–13px and fictional/status safeguards to 13px. Verify all required widths at 100%. See `docs/experiment-06-selector-remediation-map.md`. | OPEN |
| VIS-002 | HIGH | IMPLEMENTATION_QA | Contrast: 1,839 rows / 57 signatures. Correction: 3.71:1 belongs to `.hero-footnote` (not the top preview notice); footer preview disclosure measures 4.27:1. Other content pairs include `.price-card-foot` 2.97–2.99:1, `.card-footnote` 2.96:1, `.pickup-footnote` 3.74:1, `.timing-rule` 3.80:1, `.section-topline` 2.99–3.22:1 and `.rule-meta`/teal-card supporting labels 3.39–3.65:1. | Use existing `--color-muted` (`#52636C`) on pale surfaces and white/paper on teal; increase footer disclosure opacity to >=.55. Verify every text/surface pair >=4.5:1 for normal text. Do not treat aria-hidden decoration as meaningful content or lower gate thresholds. See `docs/experiment-06-selector-remediation-map.md`. | OPEN |
| VIS-003 | MEDIUM | IMPLEMENTATION_QA | The SHA-labelled recapture records 58 nested-overflow candidate rows across nine widths while `responsive.failures=[]` and `documentWidth` equals viewport width at every sampled width. Suspects include hero/turnaround sections, hero wrapper/art, address card and visually hidden nav label. | Inspect visible clipping at 320/360/390/640/768/900/1024/1280/1440px. Separate intentional art clipping and visually hidden text from actual content clipping. No blanket `overflow-x:hidden`. | OPEN — manual confirmation |
| A11Y-001 | HIGH | IMPLEMENTATION_QA | Source inspection confirms no skip link or main-target ID and no Escape-key handling in the mobile nav. Existing `:focus-visible` CSS (3px outline/4px offset) and `prefers-reduced-motion: reduce` CSS are present. Keyboard-only journeys, focus continuity and 200% zoom remain NOT TESTED. | Add a skip link and programmatically focusable main target; test menu open/close, Escape and focus return. Preserve existing focus/reduced-motion CSS and verify them in a browser; record 200% zoom evidence. | OPEN — NOT TESTED |
| COPY-001 | LOW | MASTER_SKILL_REASONING | Contact heading “Pilih cara yang ingin dikenali.” is awkward and may not clearly communicate contact options. | Make a bounded Bahasa Indonesia copy correction only after the relevant WRP/scope gate is resolved; verify no conversion behavior is implied. | OPEN |
| DES-001 | MEDIUM | MASTER_SKILL_REASONING | Preliminary aesthetic verdict: COMPETENT BUT GENERIC. Required comparison against at least two recent relevant Studio projects was not completed. | Compare design fingerprints and rendered references of two projects; document reused/new patterns and whether direction needs redesign. | DEFERRED |
| GATE-003 | MEDIUM | IMPLEMENTATION_QA | Studio shared gate classifies `p` as BODY unless a `data-qa-role` override is provided. Laundry Ceria `.eyebrow` paragraphs are intended metadata but were measured as BODY; they are also 10px, below the 11px metadata floor. | Add role-accurate `data-qa-role="metadata"` to eyebrow paragraphs; retain BODY/DISCLOSURE/CONTROL floors and make all values meet the correct floor. Add/verify regression coverage if repeated on other projects. | OPEN |
| VIS-004 | MEDIUM | MASTER_SKILL_REASONING | `.process-item` static list entries display a ↗ `.process-mark` although no item is interactive. Stage 3 cautions against arrows on static information rows; the arrow can imply navigation. | Remove the arrow or replace it with a non-directional ordered-sequence treatment; verify the process remains visually clear and non-interactive. | OPEN |
| VIS-005 | MEDIUM | IMPLEMENTATION_QA | The fresh 390px mobile section capture shows the regular and express turnaround cards compressed side by side; explanatory labels and detail copy become difficult to read. This is a rendered-density concern in addition to the 15px BODY-floor failures. | Evaluate a vertically stacked mobile layout for the paired regular/express blocks while retaining a paired desktop presentation where appropriate. Confirm against the Stage 3 direction, WRP and actual 320/360/390px before/after screenshots; preserve every timing and surcharge fact. | OPEN — visual refinement |
| QA-001 | HIGH | IMPLEMENTATION_QA | Testimonial detector matched substring `review` inside `preview`, falsely treating the preview notice as proof. | Word-boundary-aware matching and regression tests merged in Studio PR #48. Post-fix evidence check has 0 candidates and 0 failures; all PNGs unchanged. | FIXED — VERIFIED |

Selector-level sizes, proposed role assignments, measured color pairs and acceptance checks are documented in [Experiment 06 Selector Remediation Map](./experiment-06-selector-remediation-map.md).

## 3. Contrast exclusion disposition

The 216 excluded rows reduce to five signatures from abstract hero art: decorative `✳` symbols, the illustration badge `RAPI TERATUR`, and caption `ILUSTRASI DEKORATIF`. The star symbols are decorative. The text-bearing badge/caption require a deliberate decision: if meaningful, make them legible; if decorative, they must not carry essential claims. Do not count all 217 as proven contrast failures.

## 4. Preserved elements and project safeguards

- Preserve the abstract CSS folded-fabric hero illustration; no approved business photos exist.
- Preserve separate kiloan/satuan pricing, all five demo prices and units, regular/express conditions, six-step process and exact pickup thresholds.
- Keep `Jl. Melati No. 12, Jakarta` visibly labelled as fictional; no maps/directions.
- Keep WhatsApp `NOT_CONFIGURED`, disabled and non-interactive.
- Do not add testimonials, ratings, awards, customer counts, invented guarantees, official logo, bookings, payments, tracking or other unsupported features.
- No deployment or public publication.

## 5. Current gate and next execution

Current records: WRP-LC-001 v0.2 = APPROVED_FOR_DESIGN for internal training only; TDR-LC-2026-11-18-01 records simulated G1/G2/G3 decisions; commercial terms are N/A. All fixture facts remain DEMO-ONLY / NOT_APPROVED, and G0 publication plus G4–G7 remain unpassed. The new browser archive is attached to the experiment record and carries a companion SHA manifest; exact source-to-SHA binding remains CONDITIONAL until post-checkout working-tree cleanliness is verified.

Proceed in this order:
1. Confirm current local checkout SHA and inspect tracked/untracked source changes non-destructively; do not run `reset --hard` or `git clean`.
2. Once source cleanliness is confirmed, record the SHA-labelled archive as the pinned baseline and begin bounded training-only Stage 6 changes tied to finding IDs.
3. Prioritize VIS-001/GATE-003 typography role/floor fixes and VIS-002 contrast pairs; then VIS-005 mobile turnaround density, VIS-004 static arrows, VIS-003 overflow triage and A11Y-001 keyboard/focus behavior.
4. Re-capture the same viewports/sections, retain before/after screenshots, build/test outputs and exact SHA.
5. Stage 7 independent QA remains separate. No preview pass authorizes production or release.

**Current decision:** QA-001 is closed and verified. GATE-001 is resolved for this training exercise only. The fresh rendered baseline is captured and visually inspected, but source-to-SHA binding awaits a post-checkout cleanliness check. PROC-001, VIS-001, VIS-002, VIS-003, VIS-004, VIS-005, A11Y-001 and COPY-001 remain open; DES-001 deferred. No Laundry Ceria application source or CSS has yet been changed in the refinement slice.

## 6. Stage 6 Slice A implementation checkpoint — 2026-11-18

Branch `fix/experiment-06-stage6-remediation`, source checkpoint `ed77b9cdbf7f5fed810a9b0aabe1b8f3c75b0adc`.

- `src/App.tsx`: explicit QA role attributes for metadata, disclosure, body and control text; express surcharge disclosure tagged; non-semantic numbering marked decorative.
- `src/styles.css`: readability and contrast updates for preview notice, body copy, pricing, turnaround, process, pickup/delivery, hours/location, contact states, controls and footer.
- Existing design tokens reused; no typography thresholds lowered, palette redesign, dependency or new feature added.
- **Build and after-render checks remain NOT TESTED.** VIS-001, VIS-002 and GATE-003 remain OPEN until exact after screenshots/report verify the change.
