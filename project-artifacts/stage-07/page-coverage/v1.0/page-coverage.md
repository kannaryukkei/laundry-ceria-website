# Stage 7 — Canonical Page Coverage Records

**Coverage target:** WRP-LC-E2E-001 v1.0  
**Tested commit:** `2aa97b6a50c0bb2009517e34a9fe9dfc3ec4a78f`  
**Classification:** SYNTHETIC / DEVELOPMENT ONLY

| Requirement | Canonical page section | Coverage / evidence | Result |
|---|---|---|---|
| REQ-001 Preview notice and footer status | preview-notice, site-footer | Required copy assertion, screenshot and section presence | PASS |
| REQ-002 Service grouping | services-pricing | Five service rows in two groups | PASS |
| REQ-003 Exact price and units | services-pricing | Rp8.000/kg, Rp12.000/kg, Rp7.000/kg, Rp25.000/potong, Rp20.000/potong | PASS |
| REQ-004 Regular qualifier | turnaround | “Biasanya 2 hari” source-backed copy assertion | PASS |
| REQ-005 Express terms | turnaround | Before 10.00, same day 20.00 and +50% | PASS |
| REQ-006 Intake process | how-it-works | Weigh in front of customer and record per customer | PASS |
| REQ-007 Completion process | how-it-works | Fold/iron, WhatsApp notification wording, plastic wrapping | PASS |
| REQ-008 Pickup/delivery | pickup-delivery | 2 km; above 5 kg free; 5 kg or less Rp5.000 | PASS |
| REQ-009 Opening hours | hours-location | Weekday/Saturday and Sunday values | PASS |
| REQ-010 Fictional address | hours-location | Exact fictional label and no navigation target | PASS |
| REQ-011 Conversion intent | contact | Walk-in informational card and WhatsApp explanatory state | PASS |
| REQ-012 WhatsApp safety | contact | NOT_CONFIGURED, aria-disabled and no interactive element | PASS |
| REQ-013 Imagery restriction | hero | Decorative abstract illustration; no factual business photo | PASS BY SOURCE / IMPLEMENTATION REVIEW |
| REQ-014 Social-proof restriction | all sections | No testimonials, ratings, awards or customer counts in source and rendered copy | PASS BY SOURCE / IMPLEMENTATION REVIEW |
| REQ-015 Claim boundaries | how-it-works, all copy | Process wording; no guaranteed no-mix-up claim | PASS BY SOURCE / IMPLEMENTATION REVIEW |

## Anchor and section integrity

The browser QA confirms all ten canonical section IDs appear exactly once and every in-page link target exists. It detects no external links, phone, WhatsApp, map or navigation URL.

## Coverage limitation

Automated text/structure tests cannot semantically prove that every possible copy change remains source-backed. Fact and claim registers remain the governing review references; a human or trusted independent review is still required for a real client project.
