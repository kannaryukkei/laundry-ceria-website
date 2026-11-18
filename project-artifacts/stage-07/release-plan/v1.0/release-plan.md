# Stage 7 — Release Candidate, Rollback and Release Plan

**Project delivery mode:** production (simulation path only)  
**Operating mode:** studio_development  
**Release eligibility:** INTERNAL SIMULATION ONLY  
**External release:** FORBIDDEN

## Release candidate

- Repository: kannaryukkei/laundry-ceria-website
- Branch: test/full-workflow-production-shaped-simulation
- Tested SHA: `2aa97b6a50c0bb2009517e34a9fe9dfc3ec4a78f`
- Build output: Vite `dist/`
- Internal verification: Vite preview at loopback only during GitHub Actions.
- No deployment target, hosting account, public URL or DNS zone is configured by this exercise.

## Proposed production-shaped sequence for workflow testing

1. Run the production build on the exact tested commit.
2. Verify the static output locally/inside CI.
3. Record the production-shaped verification evidence.
4. Prepare a handover bundle containing code reference, known constraints, evidence and ownership notes.
5. Record simulated G4/G5/G6 decisions and simulate Stage 8 operations.
6. Do not invoke a hosting deploy, public publish, DNS update, external service or client communication.

## Gate semantics

G4, G5 and G6 may be recorded with explicit development-simulation identities to exercise the repository-native lifecycle. Those values do not constitute real client preview acceptance, independent QA, commercial production readiness or release authorization.

Even after simulated G6, the workflow must remain:
- `operating_mode = studio_development`
- `delivery_mode = production`
- `execution_class = SIMULATION_ONLY`
- `external_release_allowed = false`

## Rollback plan

No external deployment exists, so no external production rollback is performed. For the local simulation:
- Keep `main` unchanged.
- Keep all work on the dedicated E2E branch.
- Preserve the exact tested commit and evidence artifact.
- If the test branch becomes invalid, stop the simulation and restore the isolated branch to the last recorded safe SHA; do not merge or deploy.
- If a real client project is later created, generate a separate rollback plan bound to its actual hosting target, release ID, backup and approval records.

## Release decision

**NO REAL RELEASE.** Stage 8 is allowed only as an internal production-shaped simulation. The security and manual-review gaps listed in the unresolved-gate artifact remain visible.
