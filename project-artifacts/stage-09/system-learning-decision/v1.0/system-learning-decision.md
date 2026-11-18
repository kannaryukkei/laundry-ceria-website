# Stage 9 — System Learning Decision

**Decision:** REVISE

## RETAIN

1. **Keep operating_mode separate from delivery_mode.** The E2E proved `studio_development` can use a `production` delivery path while retaining `SIMULATION_ONLY` and `external_release_allowed = false`.
2. **Keep repository-native artifact intake and snapshots.** The adapter processed 54 canonical artifacts into versioned snapshots and a traceable event log.
3. **Keep explicit simulated identities.** Development approvals are visibly labelled `[SIMULATED]` and attributed to the authenticated GitHub actor.
4. **Keep layered release gates.** G4 preview acceptance, G5 production readiness, G6 release authorization and G7 handover remain separate decisions.
5. **Keep isolated E2E branches and CI evidence.** No website changes were merged and no external release occurred.

## REVISE NEXT

1. Add stronger semantic QA for claims and content against fact-register source IDs; current validator is primarily structural.
2. Make the production-readiness gate surface full dependency-audit findings and manual QA status instead of relying only on role approval.
3. Add automated computed contrast coverage, true zoom testing and a documented screen-reader workflow.
4. Add a distinct human independent-review requirement for client_service. A development simulation must never be accepted as real independent QA.
5. Keep test environment compatibility metadata close to browser test versions and runner images.
6. Improve branch-parameter preflight on file-update tools and add a safeguard against accidental writes to main.
7. Keep the release-isolation assertion in CI on every Stage 8 / Stage 9 update.

## REJECT

- Do not treat G5 or G6 simulated decision strings as actual production readiness or actual release permission.
- Do not infer a zero-cost external hosting setup or an account-level zero-billing guarantee.
- Do not promote the Laundry Ceria synthetic fixture, fictional address, contact details or assets to public business facts.
- Do not call the full Studio proven solely because this development-mode lifecycle passed.

## NOT YET PROVEN

- A real client_service project with distinct authenticated client owner, studio owner and independent reviewer.
- Semantic validation that reliably detects fabricated or unsupported business claims.
- End-to-end deployment to an actual approved hosting provider, with real rollback.
- Real client handover, domain/account ownership transfer and actual recurring cost reconciliation.
- Portfolio-level design distinctiveness across at least two separate Studio projects.

## Final calibration statement

The workflow's repository-native development simulation is validated across Stage 0–9, with explicit gates, artifact snapshots, evidence and a strict external-release lock. The system should be **retained as a development harness but revised before being represented as a fully proven, client-ready operating system**.
