# Laundry Ceria — Workflow Stage Map Reconciliation

**Document status:** Reconciliation note v0.1  
**Date:** 2026-11-18  
**Project baseline:** feat/stage-4-website-production @ f79c2978e11dea653bbcc86f6a1832d3bd96ee8f  
**Current Studio authority reviewed:** AI-Operated Web Studio Master Skill v1.12 and Canonical Operating Workflow v1.0

## 1. Why this note exists

Laundry Ceria's README and Stage 0–3 handoffs use a legacy, project-specific sequence ending at Stage 6 — Final Delivery. The current Studio Master Skill v1.12 uses a different lifecycle: Stage 0–9, including a mandatory WRP gate before Stage 5 implementation and a separate Stage 6 refinement / Stage 7 independent QA split.

The project labels were written before the current Studio stage model was adopted. They are retained as historical labels; they must not be silently treated as the current canonical stages or used to infer approvals.

## 2. The two sequences

### 2.1 Legacy labels found in the Laundry Ceria repository

| Legacy label | Meaning in project docs | Recorded status in README / handoffs |
|---|---|---|
| Stage 0 | Material Ingestion | Completed |
| Stage 1 | Discovery & Strategy | Stage handoff says PASS — ready for Stage 2, preview only |
| Stage 2 | Website Planning | Stage handoff says PASS — ready for Stage 3, preview only |
| Stage 3 | Design Direction | Stage handoff says PASS — ready for legacy Stage 4, preview only |
| Stage 4 | Website Production | README says in progress; implementation PR #1 remains draft/open |
| Stage 5 | Quality Assurance | README says pending |
| Stage 6 | Final Delivery | README says pending |

### 2.2 Current canonical Studio stages

| Canonical stage | Current meaning |
|---|---|
| Stage 0 | Material ingestion and source normalization |
| Stage 1 | Discovery and business understanding |
| Stage 2 | Tier, scope and commercial decision |
| Stage 3 | Customer questions, buying journey and information architecture |
| Stage 4 | Content and conversion; assemble and pass the mandatory WRP/G2 gate |
| Stage 5 | Creative direction and website implementation |
| Stage 6 | Visual refinement using rendered evidence and a traceable issue ledger |
| Stage 7 | Independent QA |
| Stage 8 | Release and handover |
| Stage 9 | Evidence-led calibration and system learning |

## 3. Reconciliation of existing project work

This is a cautious mapping of artifacts, not a retroactive reassignment of approvals.

| Existing Laundry Ceria artifact/work | Closest canonical area | Reconciliation |
|---|---|---|
| Stage 0 source fixture | Canonical Stage 0 | Source packet exists; facts remain DEMO-ONLY and NOT_APPROVED |
| Legacy Stage 1 Discovery & Strategy | Canonical Stage 1 | Substantially aligned as discovery output; canonical data records are not registered |
| Legacy Stage 2 Website Planning | Primarily canonical Stage 3 | Contains questions/journeys/IA/section planning; no evidence of the canonical Stage 2 tier/scope/commercial decision |
| Legacy Stage 3 Design Direction | Design direction input for canonical Stage 5 | A visual specification exists; it does not replace canonical Stage 4 content/WRP or G2 |
| Legacy Stage 4 Website Production | Implementation work resembling part of canonical Stage 5 | Code exists, but canonical WRP/G2 approval was not recorded before implementation; no retroactive approval is implied |
| Legacy Stage 5 Quality Assurance | Work may span canonical Stage 6 and Stage 7 | The label alone cannot determine whether refinement or independent QA was performed. Keep these as separate gates |
| Legacy Stage 6 Final Delivery | Closest to canonical Stage 8 | No release authorization or handover may be inferred; README keeps final delivery pending |

## 4. Verified sequence gaps

1. **Canonical Stage 2 is not evidenced.** A tier recommendation appears in Stage 1, but no owner-approved tier, scope, price, margin, timeline or commercial decision is registered.
2. **Canonical Stage 4 / WRP is missing historically.** The project has no versioned WRP with status APPROVED_FOR_DESIGN and no G2 approval record at the implementation baseline.
3. **Legacy Stage 3 was treated as a handoff to legacy Stage 4 implementation.** Under current policy, design/implementation entry requires an approved WRP and G2. The historical implementation cannot be made retroactively compliant by writing a new WRP.
4. **Legacy QA and current refinement/independent QA are not equivalent.** Stage 6 refinement is a self-review loop; Stage 7 is an independent acceptance pass. A shared Playwright report alone is not both.
5. **Preview acceptance, production readiness and release authorization are separate.** No preview acceptance (G4), production readiness (G5), release authorization (G6) or handover (G7) record was found.

## 5. Project state to use from this point

Until the project owner adopts a corrected project status record:

- Keep the legacy Stage labels in existing historical handoffs.
- Use canonical Studio stage names when planning new work.
- Record the retrospective WRP as DRAFT only.
- Do not report canonical Stage 4 complete or G2 passed.
- Do not start canonical Stage 6 refinement while its entry conditions remain unsatisfied.
- Treat the existing website as a disclosed training preview, not an approved production candidate.
- Keep publication NOT_APPROVED; no deployment or public release.

## 6. Reconciliation work completed and remaining

### Completed in the current project branch

1. README now links to this reconciliation note, the retrospective WRP, canonical discovery snapshot and approval register.
2. WRP-LC-001 v0.1 exists as a retrospective DRAFT and is linked to SNAP-LC-0001.
3. Canonical discovery snapshot SNAP-LC-0001 has been created with project-workspace ID LC-TRAINING-001. Its stable record references and relationships passed a structural cross-reference check. Laravel platform mapping remains unverified.
4. Approval register records G0–G7 status without granting or backdating any decision.
5. The implementation checklist now records successful dependency installation, typecheck and production build from Web Preview CI run 30 at commit 121173d3802f921ceae26694683b13fafaff45ba.

### Still required

1. Operator review and acceptance of the canonical snapshot and WRP; confirm workspace-to-platform project mapping.
2. Studio-owner G1 decision for tier/scope/commercial boundary and explicit G2 decision for the exact WRP version. These cannot be performed by the AI.
3. Complete remaining responsive, keyboard, focus, reduced-motion and 200% zoom checks; current shared rendered quality gate still reports typography/contrast failures.
4. Keep canonical Stage 6 refinement and Stage 7 independent QA separate. No source/CSS implementation change or publication is authorized by these documentation records.

The current checklist remains incomplete and the README continues to label Laundry Ceria as a preview-only project.
