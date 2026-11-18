# Stage 0 — Source Coverage Matrix

**Status values:** COVERED = a source statement exists; GAP = required information is absent or insufficient. All covered business facts remain DEMO-ONLY / NOT_APPROVED.

| Domain | Captured information | Source locator | Coverage | Downstream handling |
|---|---|---|---|---|
| Owner / team | Fictional owner Ratna; one employee | [1] | COVERED | Label as synthetic; omit personal contact details |
| Business model / tenure | Kiloan laundry in a small shop-house; three years | [2] | COVERED | Demo-only wording |
| Core services | Cuci lipat, cuci setrika, setrika saja | [3] | COVERED | Use exact names |
| Piece services | Bed cover and selimut | [4] | COVERED | Unit prices supplied at [24] |
| Audience | Kos residents and young families nearby | [5] | COVERED | Do not infer demographics |
| Customer behavior | Most customers bring laundry to the shop | [6] | COVERED | Do not assert all customers do |
| Intake process | Weigh in front of customer and record per customer | [7] | COVERED | Describe process, not guaranteed outcome |
| Completion process | Wash, dry, finish per service and notify via WhatsApp | [8] | COVERED | No integration is configured |
| WhatsApp number | Not supplied; later promised but not received | [9], [30] | GAP | NOT_CONFIGURED; no link or number |
| Regular turnaround | Usually 2 days for kiloan | [10] | COVERED | Preserve “biasanya” |
| Express timing | Before 10.00; same day at 20.00 | [25] | COVERED | State exact cutoff/time; no extra eligibility assumption |
| Express fee | +50% of normal price | [25] | COVERED | State only the supplied surcharge |
| Opening hours Mon–Sat | 08.00–20.00 | [12] | COVERED | Demo-only |
| Opening hours Sunday | 09.00–15.00 replaces uncertainty | [13], [26] | COVERED | Use latest line [26] |
| Kiloan prices | Rp8.000/kg, Rp12.000/kg, Rp7.000/kg | [23] | COVERED | Preserve units and service mapping |
| Piece prices | Bed cover Rp25.000/potong; selimut Rp20.000/potong | [24] | COVERED | Preserve per-piece unit |
| Pickup/delivery radius | 2 km from shop | [27] | COVERED | Address is fictional; no map |
| Pickup/delivery fee | Free above 5 kg; Rp5.000 at 5 kg or less | [27] | COVERED | Exactly 5 kg belongs to paid bracket |
| Address | Jl. Melati No. 12, Jakarta; explicitly fictional | [28] | COVERED / NOT REAL | Show fictional label adjacent; no navigation |
| Packaging | Free plastic wrap after completion | [29] | COVERED | Demo-only |
| Website goal | Help new customers learn services and ordering | [20] | COVERED | Goal, not proof of demand |
| Intended conversion | Walk-in or WhatsApp | [21] | COVERED WITH LIMITS | Both demo-only; WhatsApp disabled |
| Photos | Three descriptions; files absent | [17] | GAP | Do not use |
| Photo permission | Verbal only; written permission pending | [18], [31] | GAP | Do not use photos |
| Logo / social profiles | No logo; no website or social media named | [19], [31] | GAP | Text-only temporary identity |
| Testimonials / rating / awards / customer counts | None; explicitly prohibited | [22], [32] | COVERED AS RESTRICTION | Omit all social proof |
| Payment methods | Not supplied | No locator | GAP | Do not mention |
| Public-holiday hours | Not supplied | No locator | GAP | Do not infer |
| Express capacity / exceptions | Not supplied | [25] only supplies cutoff, completion and surcharge | GAP | Do not add rules or guarantee capacity |

## Coverage decision

The packet supports a bounded synthetic preview brief with explicit safe fallbacks. It does not support real-world publication, a working contact CTA, navigation to the address, use of photographs, or additional commercial/service claims.
