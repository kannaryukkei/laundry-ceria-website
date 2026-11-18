# Stage 2 — Timeline, Dependencies and Client Responsibilities

**Plan ID:** LC-DEV-PLAN-001  
**Schedule status:** Sequence defined; calendar dates and delivery promises not set.

## Canonical sequence and handoffs

| Stage | Work | Required output / dependency | Gate / handoff |
|---|---|---|---|
| 0 | Material-first intake and source normalization | Source index, register, coverage, interview summary, brief, facts, asset permissions, conflict/gap register | Development-simulated G0 |
| 1 | Business intelligence | Business, audience, offer, trust and operational analysis | Stage 0 |
| 2 | Tier, scope and commercial decision | Tier recommendation, scope, commercial record, dependency plan | G1 simulated |
| 3 | Customer questions and information architecture | Question map, journey, IA, source-to-page and CTA map | Stage 2 |
| 4 | Content and conversion | Copy pack, CTA and claim registers, coverage, versioned WRP | G2 simulated |
| 5 | Creative direction and implementation | Design alternatives, selected fingerprint, specification, implementation and build evidence | G0 already passed; G3 simulated |
| 6 | Refinement | Baseline/after evidence, issue-fix mapping and refreshed build evidence | Stage 5 |
| 7 | Independent QA | Exact commit, CI evidence, page coverage, unresolved gate list and release plan | Stage 6 |
| 8 | Release and handover | Production-shaped test notes, synthetic verification, handover and ownership record | G4, G5 and G6 simulated before entry; G7 simulated to close |
| 9 | Calibration and system learning | Calibration, root cause, regression results and learning decision | Stage 8 |

## Dependencies and test responsibilities

- The workflow operator prepares source-grounded artifacts and commits inbox entries.
- GitHub Actions processes the inbox, validates each artifact ID against the active stage, snapshots each artifact and records hashes/events.
- Studio owner role is authenticated as the GitHub actor kannaryukkei.
- Client business owner and independent reviewer are explicitly simulated only because this project is studio_development.
- Every simulated approval is attributed to kannaryukkei; no independent human review is implied.
- No external deployment, public release, DNS, customer contact or asset transfer is part of the plan.

## Timing policy

No delivery date or duration is promised. Stage transitions depend on artifacts, validator results and simulated gate records—not calendar assumptions. Any failed or incomplete check remains visible as a gap and must not be silently marked PASS.
