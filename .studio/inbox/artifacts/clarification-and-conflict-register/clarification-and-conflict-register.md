# Clarification, Conflict and Gap Register — Laundry Ceria E2E

> Fixture fiktif untuk uji E2E workflow. Evidence: DEMO-ONLY. Publication: NOT_APPROVED. Delivery mode: preview_only. Jangan gunakan sebagai data bisnis nyata atau memublikasikan website ini.

## Resolved conflicts / refinements

| ID | Earlier note | Later note | Resolution | Status |
|---|---|---|---|---|
| CONFLICT-0001 | NOTE_LINE [14]: prices not stated | NOTE_LINE [23] and [24] supply exact kiloan and piece-based prices | Use the later explicit prices; do not retain “price missing” as the current fact | RESOLVED_BY_FOLLOW_UP |
| CONFLICT-0002 | NOTE_LINE [11]: express “can be one day,” with conditions and cost unspecified | NOTE_LINE [25]: received before 10:00, complete same day at 20:00, +50% | Use the later exact terms; do not infer capacity limits or other eligibility rules | RESOLVED_BY_FOLLOW_UP |
| CONFLICT-0003 | NOTE_LINE [13]: Sunday hours uncertain | NOTE_LINE [26]: Sunday 09:00–15:00 | Use the later stated hours | RESOLVED_BY_FOLLOW_UP |
| CONFLICT-0004 | NOTE_LINE [15]: pickup/delivery “around here,” boundary unclear | NOTE_LINE [27]: 2 km radius; above 5 kg free; 5 kg or less Rp5.000 | Use the later defined radius and fee thresholds | RESOLVED_BY_FOLLOW_UP |

## Gaps and constraints

| Gap ID | Missing / unresolved information | Owner / action | Priority | Preview handling |
|---|---|---|---|---|
| GAP-0001 | Official WhatsApp number not supplied; owner promised it but it remained missing (NOTE_LINE [9], [30]) | Obtain and verify official number and authorization before enabling contact | PRODUCTION_BLOCKER | Keep WhatsApp NOT_CONFIGURED; no number, link, QR or active action |
| GAP-0002 | Real-world address is not supplied; only a fictional address is present (NOTE_LINE [28]) | Obtain and verify actual address before real business publication | PRODUCTION_BLOCKER | Label supplied address as fictional demo data; no map or directions |
| GAP-0003 | Written consent for three described photos is not supplied (NOTE_LINE [17], [18], [31]) | Obtain actual image files and written website-use permission | PRODUCTION_BLOCKER for photography | Exclude all three photos; use photo-independent/abstract preview visuals only |
| GAP-0004 | No logo supplied (NOTE_LINE [19], [31]) | Owner may supply/approve a brand mark later | OPTIONAL_GAP | No invented logo; text-only temporary wordmark is acceptable as a placeholder |
| GAP-0005 | Accepted payment methods are not stated | Ask only if payment information is included in a later approved scope | OPTIONAL_GAP | Do not mention or infer payment methods; no checkout in preview scope |
| GAP-0006 | Publication / real-world launch approval is explicitly absent | Obtain explicit owner and studio release authorization at the production gates | PRODUCTION_BLOCKER | Remain PREVIEW ONLY / DEMO-ONLY / NOT_APPROVED |

## Stage 0 conclusion

The source supports normalized facts and a constrained preview brief. No unresolved item requires inventing a value to proceed with a synthetic preview. G0 may only record CONDITIONAL_PREVIEW for preview_only mode; production approval is not implied.
