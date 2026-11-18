# Stage 0 — Conflict, Gap and Minimal Clarification Register

**Classification:** SYNTHETIC / DEVELOPMENT ONLY  
**Conflict rule:** Latest interview line controls where it explicitly replaces or clarifies an earlier statement.

## Resolved source conflicts

| Conflict ID | Topic | Earlier statement | Latest statement | Resolution | Locators |
|---|---|---|---|---|---|
| CONFLICT-0001 | Prices | “Harga tidak disebutkan” | Kiloan prices supplied | Use Rp8.000/kg, Rp12.000/kg and Rp7.000/kg as mapped in [23] | [14] → [23] |
| CONFLICT-0002 | Piece prices | No price in original interview | Bed cover Rp25.000/piece; selimut Rp20.000/piece | Use latest supplied prices | [14] → [24] |
| CONFLICT-0003 | Express | “bisa 1 hari”; no conditions or fee | Before 10.00, completed same day at 20.00, surcharge 50% | Use the later complete terms; do not infer more eligibility rules | [11] → [25] |
| CONFLICT-0004 | Sunday hours | Owner uncertain; sometimes open | Sunday 09.00–15.00 | Use latest stated hours | [13] → [26] |
| CONFLICT-0005 | Pickup/delivery | “sekitar sini saja”; unclear boundary | 2 km radius; free above 5 kg; Rp5.000 at 5 kg or less | Use exact latest terms | [15] → [27] |
| CONFLICT-0006 | Photo permission | Verbal “boleh dipakai” | No written permission; still verbal | Permission remains PENDING; exclude all photos | [18] → [31] |

## Unresolved gaps

| Gap ID | Missing / unresolved information | Owner / action needed in a real-client workflow | Priority | Safe treatment in this synthetic preview |
|---|---|---|---|---|
| GAP-0001 | Official WhatsApp number and ownership/verification | Client supplies and verifies the official business destination | PRODUCTION_BLOCKER | NOT_CONFIGURED; no active CTA, number, QR or wa.me |
| GAP-0002 | Real physical business address | Client confirms a deliverable address | PRODUCTION_BLOCKER | Address is explicitly fictional; label and no maps/directions |
| GAP-0003 | Actual photo files and written permissions | Client supplies files and written website-use permission | PRODUCTION_BLOCKER | Exclude photos |
| GAP-0004 | Official logo or approved identity | Client supplies or approves identity | OPTIONAL_GAP | Text-only placeholder; no invented logo |
| GAP-0005 | Payment methods | Client confirms accepted methods | OPTIONAL_GAP unless a future requirement needs it | Omit all payment claims |
| GAP-0006 | Public-holiday / special-day hours | Client confirms if relevant | OPTIONAL_GAP | Publish only weekday/weekend hours in synthetic context |
| GAP-0007 | Express eligibility, capacity and exceptions | Client confirms before any real operational promise | PRODUCTION_BLOCKER for expanded express claims | Repeat only supplied cutoff, 20.00 completion and +50%; no additional promise |
| GAP-0008 | Detailed pickup/delivery scheduling or booking process | Client confirms scope and availability if requested | OPTIONAL_GAP | State supplied radius/fees only; no booking or schedule |

## Minimal clarification set for a real client

1. What is the verified official WhatsApp number and who controls it?
2. What is the real business address and may it be displayed publicly?
3. Can you supply the actual photo files and written permission for website use?
4. Are there express-service limitations or capacity rules beyond the supplied terms?
5. Which payment methods, if any, should be displayed?

These questions are not answered by this fixture. No guess or default answer is created.

## Stage 0 disposition

The synthetic packet is coherent enough to support Stage 1 strategy and an internal non-published preview, provided all restrictions remain visible. No G0 production approval can be interpreted as real-world business consent; on this branch any G0 decision is a development simulation only.
