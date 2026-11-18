# Laundry Ceria — Full workflow production-shaped E2E

**Test branch:** `test/full-workflow-production-shaped-simulation`  
**Operating mode:** `studio_development`  
**Delivery mode:** `production`  
**Execution class:** `SIMULATION_ONLY`  
**External release:** forbidden

This branch tests the complete canonical Stage 0–9 lifecycle using the fictional Laundry Ceria fixture and existing website implementation. The production delivery mode exists only to exercise G4–G7 and Stage 8. It does not authorize a real deployment, publication, DNS change, client communication, asset use, or transfer of ownership.

All synthetic business facts remain DEMO-ONLY / NOT_APPROVED. Any client-owner and independent-reviewer approvals recorded on this branch are explicitly simulated by the authenticated GitHub actor `kannaryukkei`; they are not client consent or real independent QA sign-off.

The existing website implementation and retrospective Stage 1–3 documents are inputs for a new, forward-only development simulation. This test does not retroactively authorize their historical creation. Any QA result must state the exact commit and checks actually run. Unknown or unavailable checks remain NOT TESTED.

No commits from this branch should be merged or deployed. The separate Stage 0 preview-mode E2E branch remains unchanged.
