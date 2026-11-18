# Website Requirements Pack — Laundry Ceria

**Document ID:** WRP-LC-001  
**Version:** 0.2 — approved for internal training preview only  
**Project ID:** LC-TRAINING-001 — workspace-scoped training identifier; Laravel platform mapping NOT_VERIFIED  
**Created:** 2026-11-18  
**Source snapshot:** SNAP-LC-0001 — docs/canonical-discovery-snapshot-v0.1.json, reconstructed from branch feat/stage-4-website-production at baseline commit f79c2978e11dea653bbcc86f6a1832d3bd96ee8f  
**Schema version:** Website Requirements Pack v1.0  
**Status:** APPROVED_FOR_DESIGN — INTERNAL TRAINING ONLY  
**Artifact workflow state:** APPROVED_FOR_DESIGN  
**Owner approval reference:** TDR-LC-2026-11-18-01 / G2  
**Client confirmation reference:** NOT_APPLICABLE_TO_FICTIONAL_FIXTURE; the training decision accepts safe fallbacks for internal preview only  
**Supersedes:** WRP-LC-001 v0.1 — retrospective reconstruction draft

> **PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED**
>
> Laundry Ceria is a fictional training fixture. This WRP is a retrospective reconstruction of intended requirements from existing project materials. It does not create a retroactive approval, verify any business fact, grant asset rights, authorize publication, or prove that the implementation was approved before coding began.

## 1. Purpose and status

This pack reconstructs the business, visitor, content, interaction, visual and technical requirements that can be supported by the existing Laundry Ceria fixture and Stage 1–3 handoffs. It is intended to expose missing decisions and create a traceable contract for subsequent work.

The website implementation already exists on the source branch. Therefore, this document is retrospective: it records the requirements that appear to have informed that implementation. It must not be represented as an approved pre-implementation WRP.

Version 0.2 supersedes the retrospective v0.1 draft and records an exercise-level decision for future internal training work:
- SNAP-LC-0001 was reviewed in its project workspace and its canonical cross-references were structurally checked. Its 6 sources, 22 coverage rows, 35 facts, 3 assets, 5 offers, 8 customer questions, 4 buying-journey steps, 4 CTAs, 1 trust/process item, 8 content gaps and 8 preview-only page-coverage rows remain linked to their source records.
- LC-TRAINING-001 is intentionally a workspace-scoped identifier. Mapping to a Laravel platform project record is not required or asserted for this standalone experiment.
- G1 is recorded as SIMULATED_PASS for a STARTER-equivalent one-page training scope; all commercial terms are NOT_APPLICABLE.
- G2 is recorded as SIMULATED_PASS for this exact WRP version, with status APPROVED_FOR_DESIGN for internal training only.
- G3 is recorded as SIMULATED_PASS for the existing Stage 3 design direction and source-backed copy constraints, internal preview only.
- No real client/business-owner confirmation, factual verification, asset permission or publication approval is inferred.

The historical website implementation began before this WRP approval. This version authorizes only future in-scope training work from 2026-11-18; it does not retroactively authorize earlier implementation. Stage 6 code changes remain gated on a fresh, reproducible browser baseline pinned to the exact candidate commit (see Sections 14–15).

## 2. Source hierarchy and traceability

### 2.1 Controlling project sources

| Source | Role | Current reference |
|---|---|---|
| Stage 0 source fixture | Raw fictional business facts and immutable constraints | docs/stage-0-source-fixture.md |
| Stage 1 Discovery & Strategy | Audience, website goal, positioning, conversion constraints and preview scope | docs/stage-1-discovery-strategy.md |
| Stage 2 Website Planning | Journeys, exact section sequence, REQ-001–REQ-015, functional and responsive requirements | docs/stage-2-website-planning.md |
| Stage 3 Design Direction | Fresh & Orderly visual direction, tokens, typography, layout and design safeguards | docs/stage-3-design-direction.md |
| Implemented website | Existing candidate to be compared against the requirements | src/App.tsx and src/styles.css at the source snapshot |
| Stage 4 checklist (legacy project label) | Implementation completion evidence and remaining checks | tests/requirements-checklist.md |

Stage 0 explicitly says the latest interview lines replace earlier conflicting statements. Its NOTE_LINE locators remain the only available source-level locators in the project handoffs.

### 2.2 Traceability limitations

The canonical records are registered in docs/canonical-discovery-snapshot-v0.1.json as SNAP-LC-0001. The snapshot has 6 sources, 22 source-coverage rows, 35 facts, 3 assets, 5 offers, 8 customer questions, 4 buying-journey records, 4 CTAs, 1 trust/process item, 8 content gaps and 8 PREVIEW_ONLY page-coverage records.

The snapshot is intentionally maintained as a project-workspace artifact. The workspace-scoped ID LC-TRAINING-001 is not represented as a Laravel database ID, and no platform mapping is required for this isolated experiment.

Traceability limitations remain explicit:
- SRC-0006 is the supplied after-QA-001 archive; it is not committed in Git and its report does not embed the website Git SHA.
- The eight page-coverage entries establish only that sections/unavailable states appeared in the supplied screenshots. They are not visual-quality, accessibility, customer-acceptance or production passes.
- Source facts remain DEMO-ONLY / NOT_APPROVED; asset rights remain pending; missing real contact and address information remains unavailable.
- The canonical snapshot and WRP are exercise records, not client or business-owner confirmations.

### 2.3 Canonical record map

The WRP uses the project-scoped records in SNAP-LC-0001. Stable IDs are created in the draft canonical packet; they are not platform IDs or approvals.

| WRP area | Canonical records |
|---|---|
| Business and source facts | SRC-0001–SRC-0005; FACT-0001–FACT-0035 |
| Audience and journey questions | Q-0001–Q-0008; BJ-0001–BJ-0004 |
| Service offers and prices | OFFER-0001–OFFER-0005; FACT-0006–FACT-0007 and FACT-0017–FACT-0021 |
| Process and turnaround | FACT-0008–FACT-0014 and FACT-0026; Q-0003, Q-0004 and Q-0007 |
| Pickup/delivery | FACT-0022–FACT-0024; Q-0005 |
| Hours and fictional address | FACT-0015, FACT-0016 and FACT-0025; Q-0006; GAP-0002 |
| Contact and conversion | CTA-0001–CTA-0004; FACT-0011 and FACT-0028; Q-0008; GAP-0001 and GAP-0003 |
| Image and identity constraints | ASSET-0001–ASSET-0003; FACT-0031–FACT-0033; GAP-0004 and GAP-0005 |
| Trust / proof boundary | TRUST-0001; FACT-0029 and FACT-0030 |
| Open decisions and unavailable information | GAP-0001–GAP-0008; FACT-0035 |

The Stage 2 requirement IDs REQ-001–REQ-015 remain the implementation acceptance references. They are not substitutes for canonical facts, offers, questions or CTAs. SNAP-LC-0001 has 8 PREVIEW_ONLY page_coverage records for Q-0001–Q-0008, linked to source SRC-0006 and its after-QA-001 mobile/desktop section captures. These entries do not mean PUBLISHED, do not constitute an overall quality pass, and retain a NOT_VERIFIED limitation because the report does not embed the rendered website Git SHA.

## 3. Project and business context

### 3.1 Business context — fictional fixture only

Laundry Ceria is described as a neighborhood kiloan laundry operating from a small shop-house for three years, run by a fictional owner with one employee. The named owner, business, address, operating details and all prices are fictional training data.

**Evidence status for every business fact:** DEMO-ONLY.  
**Publication status for every business fact:** NOT_APPROVED.

### 3.2 Source-backed facts permitted in this internal preview

| Topic | Fixture detail | Source locator | Evidence / publication state |
|---|---|---|---|
| Operating model | Laundry kiloan from a small shop-house; owner plus one employee | NOTE_LINE [1]–[2] | DEMO-ONLY / NOT_APPROVED |
| Audience | Boarding-house residents and young families around the shop | NOTE_LINE [5] | DEMO-ONLY / NOT_APPROVED |
| Kiloan services | Cuci lipat, cuci setrika, setrika saja | NOTE_LINE [3] | DEMO-ONLY / NOT_APPROVED |
| Piece-based services | Bed cover and selimut | NOTE_LINE [4] | DEMO-ONLY / NOT_APPROVED |
| Intake process | Items received, weighed in front of customer and recorded per customer | NOTE_LINE [7] | DEMO-ONLY / NOT_APPROVED |
| Completion | After drying, items folded or ironed according to selected service; customer notified through WhatsApp | NOTE_LINE [8] | DEMO-ONLY / NOT_APPROVED |
| Regular turnaround | Usually two days for kiloan | NOTE_LINE [10] | DEMO-ONLY / NOT_APPROVED |
| Express | Items received before 10.00 completed the same day at 20.00; surcharge 50% of normal price | NOTE_LINE [25] | DEMO-ONLY / NOT_APPROVED |
| Kiloan prices | Cuci lipat Rp8.000/kg; cuci setrika Rp12.000/kg; setrika saja Rp7.000/kg | NOTE_LINE [23] | DEMO-ONLY / NOT_APPROVED |
| Piece prices | Bed cover Rp25.000/potong; selimut Rp20.000/potong | NOTE_LINE [24] | DEMO-ONLY / NOT_APPROVED |
| Pickup/delivery | Radius 2 km; free above 5 kg; Rp5.000 for orders of 5 kg or less | NOTE_LINE [27] | DEMO-ONLY / NOT_APPROVED |
| Opening hours | Monday–Saturday 08.00–20.00; Sunday 09.00–15.00 | NOTE_LINE [12], [26] | DEMO-ONLY / NOT_APPROVED |
| Address | Jl. Melati No. 12, Jakarta; explicitly fictional | NOTE_LINE [28] | DEMO-ONLY / NOT_APPROVED |
| Packaging | Completed orders wrapped in plastic at no charge | NOTE_LINE [29] | DEMO-ONLY / NOT_APPROVED |
| Website goal | Help new customers understand services and how to order | NOTE_LINE [20] | DEMO-ONLY / NOT_APPROVED |
| Intended conversion | Walk-in visit or WhatsApp contact | NOTE_LINE [21] | DEMO-ONLY / NOT_APPROVED |

The owner’s statement that clothes do not get mixed up is not independently verified. The website may describe the weighing and per-customer recording process, but must not state an absolute or guaranteed no-mix-up outcome.

### 3.3 Audience

**Primary audience A — boarding-house residents.** This group is explicitly named in NOTE_LINE [5]. Comparing service options, prices and handover steps are working hypotheses, not validated research.

**Primary audience B — young families near the shop.** This group is explicitly named in NOTE_LINE [5]. Clear prices, household service options and pickup/delivery information are working hypotheses, not validated research.

No age, income, purchase frequency, neighborhood boundary beyond the supplied service radius, or validated customer motivation may be added.

## 4. Website goal and conversion

### 4.1 Goal

Help prospective visitors understand the supplied services, prices, turnaround, pickup/delivery rules, process, hours and preview contact limitations so they can understand the intended next step.

### 4.2 Conversion intent and real behavior

The fixture names two intended paths, but neither is a production-ready live conversion path.

| Intended path | Required representation | Actual behavior in this preview | Status |
|---|---|---|---|
| Visit the shop | Show the fixture address only with a prominent fictional/demo label | Informational text only; no map, directions, geolocation or navigation link | DEMO_ONLY |
| WhatsApp contact | Explain that WhatsApp is not configured because no number was supplied | Disabled, non-interactive state; no href, click handler, QR code, phone number or wa.me URL | NOT_CONFIGURED |

No form, phone, email, social handle, booking, checkout, payment or order tracking behavior is in scope.

## 5. Tier, scope and exclusions

### 5.1 Tier and commercial decision — training-only

**Training scope shorthand:** STARTER / one-page local-service presentation.

G1 decision TDR-LC-2026-11-18-01 adopts the one-page scope and exclusions for this training exercise only. The STARTER label is not a commercial product sale or price commitment. Price, margin, payment, commercial timeline, revision allowance, client agreement and third-party spending are all NOT_APPLICABLE. No commercial obligation is created.

### 5.2 Intended preview scope

- One responsive page in Bahasa Indonesia.
- Preview notice, text-only temporary identity and in-page navigation.
- Service and price information exactly as supplied.
- Regular and express turnaround information with stated qualifiers.
- Pickup/delivery conditions exactly as supplied.
- Handover process description.
- Opening hours and prominently fictional address.
- Non-interactive WhatsApp NOT_CONFIGURED state.
- Footer repeats preview-only safeguards.

### 5.3 Exclusions

- Any publication as a real business website.
- Live WhatsApp messaging, phone contact or invented public destination.
- Map, directions, geolocation or real-world location claims.
- Booking, order placement, checkout, payment, customer accounts, order tracking or admin dashboard.
- Automated notifications or messaging integrations.
- Forms that send or store information.
- Business photographs described in the source fixture, because the actual files are absent and written permission is pending.
- Invented logo, slogan or owner-approved brand identity.
- Testimonials, reviews, ratings, awards, customer counts, fabricated trust signals or guaranteed outcomes.
- Payment methods, public-holiday hours, extra service conditions, fees, delivery schedules or express eligibility rules not present in the fixture.

## 6. Audience journeys and customer questions

These journeys reproduce the Stage 2 plan. They are not observed analytics or validated customer research.

| Journey | Visitor intent | Website support | Completion condition |
|---|---|---|---|
| Compare and consider a visit | Understand services/prices, turnaround and opening information | Services, prices, timing, hours and clearly fictional address | Visitor is not misled into treating demo details as real |
| Understand pickup/delivery | Understand coverage and fee threshold | State 2 km radius, free above 5 kg, Rp5.000 at 5 kg or less | Threshold and fee are unambiguous; no unsupported coverage claim |
| Understand the handover process | Know what happens to laundry | Explain receiving, weighing, recording, washing, drying, finishing and notification | Process is descriptive; no absolute guarantee and no implied live WhatsApp integration |
| Try to contact | Recognize intended WhatsApp route | Show visibly unavailable NOT_CONFIGURED state | No message can be sent to an invented number or destination |

Critical questions:
1. What laundry services are available?
2. What does each service cost?
3. How long does regular and express laundry take?
4. What is the express cutoff, completion time and surcharge?
5. Is pickup/delivery available, within what radius and at what price?
6. What are the opening hours and what address appears in the fixture?
7. What happens after laundry is handed over?
8. What action can a visitor actually take in this preview?

The available handoff docs do not contain canonical Customer Question IDs. These question statements are descriptive reconstructions, not canonical records.

## 7. Information architecture and section requirements

The existing Stage 2 section order is retained exactly:

| Order | Section key | Purpose / visitor question | Required behavior |
|---:|---|---|---|
| 0 | preview-notice | Is this a real, approved website? | Persistent PREVIEW ONLY, DEMO-ONLY, NOT_APPROVED notice; repeat in footer |
| 1 | site-header | What is the business and where are key sections? | Text-only temporary identity and in-page navigation |
| 2 | hero | What does Laundry Ceria offer and where can I learn more? | Accurate introduction; in-page actions only |
| 3 | services-pricing | What is offered and how much does it cost? | All five supplied service/price entries with correct units |
| 4 | turnaround | When will laundry be ready? | Usually two days; exact express cutoff, time and surcharge |
| 5 | how-it-works | What happens after handover? | Source-backed process without guarantee language |
| 6 | pickup-delivery | Is pickup/delivery available and what does it cost? | Exact radius and weight thresholds |
| 7 | hours-location | When is the shop open and what address is in this fixture? | Exact hours; fictional-address label adjacent to address |
| 8 | contact | What can a visitor actually do next? | Walk-in intent is demo-only; WhatsApp disabled / NOT_CONFIGURED |
| 9 | site-footer | What constraints still apply? | Repeat PREVIEW ONLY, DEMO-ONLY, NOT_APPROVED; only valid anchors |

### 7.1 Header navigation

- Layanan & Harga → services-pricing
- Proses → how-it-works
- Antar-Jemput → pickup-delivery
- Jam & Lokasi → hours-location
- Any prominent header action may only navigate to the contact section; it must not look like a functioning WhatsApp destination.

## 8. Content and offer requirements

### 8.1 Service and price content

| Category | Service | Price | Source |
|---|---|---:|---|
| Kiloan | Cuci lipat | Rp8.000/kg | NOTE_LINE [23] |
| Kiloan | Cuci setrika | Rp12.000/kg | NOTE_LINE [23] |
| Kiloan | Setrika saja | Rp7.000/kg | NOTE_LINE [23] |
| Satuan | Bed cover | Rp25.000/potong | NOTE_LINE [24] |
| Satuan | Selimut | Rp20.000/potong | NOTE_LINE [24] |

Do not add minimum charges, rounding rules, stain fees or other conditions. Do not calculate an express total.

### 8.2 Turnaround

- Regular kiloan: usually two days. Preserve “biasanya”.
- Express: items received before 10.00 are completed the same day at 20.00.
- Express surcharge: +50% of normal price.
- Do not imply every item/service is eligible; no further eligibility or capacity rules are supplied.

### 8.3 Process and completion

Describe: receive → weigh in front of customer → record per customer → wash → dry → fold or iron according to selected service → notify via WhatsApp. State that completed orders are wrapped in plastic for free.

The WhatsApp notification is a source description, not proof of a configured integration. Do not turn the owner's no-mix-up statement into a guarantee.

### 8.4 Pickup and delivery

- Radius: 2 km from the fictional shop.
- Above 5 kg: free.
- 5 kg or less: Rp5.000.
- Exactly 5 kg is included in the paid bracket.
- No map, route, schedule or booking functionality.

### 8.5 Hours and address

- Monday–Saturday: 08.00–20.00.
- Sunday: 09.00–15.00.
- Displayed address: Jl. Melati No. 12, Jakarta.
- The fictional/demo label must be prominent and adjacent wherever the address appears.
- No map, direction link or real-world navigation.

## 9. Asset, identity and trust requirements

| Item | Current evidence | Required treatment |
|---|---|---|
| Three phone-photo descriptions | Actual files absent; verbal permission only; written permission pending | Exclude from the build |
| Logo | No logo supplied | Text-only temporary identity; never call it an official logo |
| Illustration | Stage 2/3 permit abstract CSS shapes or clearly illustrative graphics | Must not resemble factual photographs of the shop, staff, machines or customers |
| Testimonials/reviews/ratings/awards/customer counts | Fixture explicitly says none may be shown | Omit entirely |
| No-mix-up statement | Owner claim; not independently verified | Describe weighing/recording process only; no guarantee |

Asset provenance, rights and permission must remain pending/not approved until actual supporting evidence exists.

## 10. Design direction and visual constraints

The Stage 3 design specification names **Fresh & Orderly**. This section records that existing design direction; it does not assert a new approval.

- Core feel: clean, fresh, neighborhood, organized, human and clear.
- Temporary identity: text-only “Laundry Ceria”; no invented mark, slogan, seal or monogram.
- Colors: primary teal #0F6B68; ink #172B3A; paper #F6F7F2; white #FFFFFF; mint #DDEFEA; muted #52636C; amber #F0B54A; disabled surface #E9EFEB; border #DCE4DF.
- Typography families: Plus Jakarta Sans for display/headings; Inter for body/interface, with the documented fallbacks.
- Planned type roles from the design handoff: display 64px desktop / 42px mobile; H2 44px / 32px; H3 26px / 22px; lead 19px / 18px; body 16px; small 14px; micro 12px. Planned line heights are display 1.05–1.10, H2 1.10–1.18, H3 1.20, lead 1.50–1.60, body 1.55–1.70, small 1.45–1.55 and micro 1.40–1.50. Critical notices, prices, units, hours and disabled explanations must not be reduced to micro text; the current Studio implementation standard targets at least 13px for important conditions/disclosures or requires a layout restructure. The current rendered implementation must be checked against these roles; this WRP does not waive legibility requirements.
- Layout: maximum content width 1200px; planned 20px mobile, 32px tablet and 48px desktop gutters; mobile below 640px, tablet 640–1023px, desktop 1024px and above.
- No photography-dependent composition. No fabricated trust signals, luxury cues or unsupported claims.
- The section sequence from Stage 2 is retained.

## 11. Functional and interaction requirements

| Requirement area | Required behavior | Acceptance test |
|---|---|---|
| Navigation | In-page anchors only | Each navigation item reaches the intended section by mouse and keyboard |
| WhatsApp | Disabled and NOT_CONFIGURED; no destination | No href, click handler, QR code, phone number or active focus state |
| Walk-in | Informational demo address only | No map, directions, geolocation or route link |
| Forms and transactions | Not in scope | No simulated success, send, booking, payment or storage behavior |
| Process list | Ordered and understandable | Semantic ordered sequence, logical reading order |
| Preview notice | Persistent and not dismissible | Visible before business content and repeated in footer |
| Contact unavailable state | Honest and explanatory | Visitor can distinguish intent from an available action |

No interactive behavior may be inferred from decorative styling. A control must either perform its documented action or be represented as unavailable/non-interactive.

## 12. Non-functional requirements

### 12.1 Responsive layout

Required widths from Stage 2: 320, 360, 390, 768, 1024 and 1440 px.

- Mobile below 640px: stacked layout, 20px page gutters, at least 16px card padding, vertical process sequence, contact states stacked and fully readable.
- Tablet 640–1023px: use two columns only when text remains readable; stack below 768px where specified.
- Desktop 1024px+: max 1200px content width and 12-column composition.
- No page-level horizontal scrolling or clipped content.
- Logical reading order at all widths.
- Usable at 200% zoom.
- Touch targets approximately 44×44px where practicable.

### 12.2 Accessibility and motion

- Semantic headings, landmarks, descriptive link names and ordered process list.
- Visible keyboard focus with documented outline and offset.
- Logical keyboard order.
- Disabled WhatsApp must not behave like a link or active control.
- Do not convey meaning through color/icons alone.
- Respect prefers-reduced-motion.
- No autoplay, carousel, parallax or entrance animation that delays access to content.
- No hover-only disclosure.

### 12.3 Technical

- Existing React/Vite implementation and plain CSS are retained; no migration or new dependency is justified by this WRP.
- Typecheck and production build must pass on the exact candidate.
- Rendered responsive/browser checks are separate from build checks.
- Record browser, branch, commit, commands, screenshot evidence and actual results.
- Do not claim cross-browser, screen-reader, performance or production readiness unless those checks are actually performed.
- No deployment or publication is authorized by this pack.

## 13. Acceptance criteria

A candidate can be accepted as a safe internal preview only when all applicable preview criteria are met:

1. The persistent notice states PREVIEW ONLY, DEMO-ONLY and NOT_APPROVED before business content and again in the footer.
2. The single-page section sequence and key Stage 2 requirements are preserved.
3. All five supplied service/price entries and units are exact.
4. Regular timing retains “biasanya”; express cutoff, finish time and +50% surcharge are exact.
5. The intake/finishing process is accurately described without a no-mix-up guarantee.
6. Pickup radius and fee threshold are exact; exactly 5 kg is in the paid bracket.
7. Opening hours match the latest fixture lines.
8. The address is always labelled fictional and has no route/map behavior.
9. WhatsApp remains disabled and NOT_CONFIGURED with no URL or active action.
10. No unapproved photographs, invented logo, testimonial, rating, award, customer count or unsupported claim appears.
11. Navigation, responsive layout, focus, reduced motion and 200% zoom are tested and recorded.
12. Typecheck and production build pass on the exact candidate.
13. Remaining production blockers, NOT_TESTED checks and limitations are visible.

Production acceptance is explicitly out of scope and cannot be inferred from passing preview checks.

## 14. Open decisions and blockers

The training decisions in TDR-LC-2026-11-18-01 resolve the exercise scope and WRP progression only. They do not clear real-world/business publication blockers.

| ID / item | Priority | Current state | Owner / next action | Safe fallback |
|---|---|---|---|---|
| Project ID and source snapshot registration | PREVIEW_BLOCKER for canonical WRP completeness | Accepted as workspace-scoped training records; no Laravel platform mapping asserted or required | Operator: preserve LC-TRAINING-001 / SNAP-LC-0001 in this repository | Do not present these IDs as platform database identifiers |
| Canonical discovery snapshot review | PREVIEW_BLOCKER for canonical WRP completeness | Operator review and structural cross-reference check recorded for this training exercise; 6 sources and 22 coverage rows | Operator: maintain exact source references and update by version if material source data changes | Do not change factual/evidence/publication status through this WRP decision |
| G1 tier/scope/commercial decision | PREVIEW_BLOCKER for progression under current workflow | SIMULATED_PASS — training one-page scope; commercial terms N/A | See TDR-LC-2026-11-18-01 | Do not quote or imply a real Starter sale, price or client agreement |
| G2 WRP approval | PREVIEW_BLOCKER | SIMULATED_PASS — this WRP v0.2 is APPROVED_FOR_DESIGN for internal training only | See TDR-LC-2026-11-18-01 | No retroactive authorization; no real client approval implied |
| G3 content/claims/visual direction | PREVIEW_BLOCKER for production/public claims | SIMULATED_PASS for the existing Stage 3 direction and copy constraints, internal preview only | See TDR-LC-2026-11-18-01 and docs/stage-3-design-direction.md | Every business fact remains DEMO-ONLY / NOT_APPROVED |
| Exact visual baseline and commit binding | PREVIEW_BLOCKER for Stage 6 execution | Existing SRC-0006 report does not embed website Git SHA; current screenshots are historical and not independently commit-bound | Operator: capture a new browser baseline against the exact recorded candidate commit and retain PNGs, report.json and diagnostics.log | Do not change website source/CSS until the baseline is pinned and preserved |
| Material business/public facts | PRODUCTION_BLOCKER | All are DEMO-ONLY / NOT_APPROVED | No real client exists in this fictional fixture | Keep all fixture disclosure; no public release |
| WhatsApp number/destination | PRODUCTION_BLOCKER | Missing / NOT_CONFIGURED | No real contact owner for this fixture | Disabled state; no link |
| Real business address | PRODUCTION_BLOCKER | Address is fictional | No real location exists for this fixture | Label as fictional; no navigation |
| Photo files and written permissions | PRODUCTION_BLOCKER | Files absent; written permission pending | No usable asset/consent evidence | Exclude photos |
| Logo/brand identity | OPTIONAL_GAP for preview; production decision pending | No logo supplied | No real brand owner available | Text-only temporary identity |
| Payment methods and unprovided service terms | OPTIONAL_GAP unless required by a future approved journey | Not supplied | Do not add without source | Omit |
| Social proof | NOT_APPLICABLE under current fixture | Explicitly prohibited | No action | Omit entirely |
| Keyboard, 200% zoom and full responsive evidence | PREVIEW_BLOCKER for complete preview handoff | NOT_TESTED; must be verified during refinement/independent QA against the pinned candidate | Operator: execute and record exact checks | Keep NOT_TESTED until actual evidence exists |

## 15. Minimum completeness and approval decision

**WRP-LC-001 v0.2 status: APPROVED_FOR_DESIGN — INTERNAL TRAINING ONLY.**

The operator reviewed this WRP against SNAP-LC-0001 and the existing Stage 0–3 handoffs. The workspace-scoped project identifier is accepted for this isolated exercise; no Laravel platform mapping is asserted or required.

The exact progression decisions are recorded in docs/training-decision-record-2026-11-18.md:
- **G1:** SIMULATED_PASS for the STARTER-equivalent one-page training scope; all commercial terms are NOT_APPLICABLE.
- **G2:** SIMULATED_PASS; this exact WRP version is APPROVED_FOR_DESIGN for internal training only.
- **G3:** SIMULATED_PASS for the existing Stage 3 design direction and source-backed copy constraints, internal preview only.

The training approval authorizes future in-scope internal design/refinement work from 2026-11-18. It does not:
- retroactively authorize the earlier implementation or represent historical work as compliant with the current workflow;
- confirm that any business fact is real or independently verified;
- approve a real public claim, contact destination, address, photo, logo or social proof;
- grant asset rights or person consent;
- constitute G4 preview acceptance, G5 production readiness, G6 release authorization or G7 handover;
- authorize deployment, publication, DNS, payment, booking, messaging or any external transaction.

**Stage 6 execution condition:** do not modify website source/CSS until the exact candidate commit has a newly captured and preserved browser-rendered baseline. The previous SRC-0006 archive remains historical because its report does not embed a website Git SHA. Typography/contrast findings and the not-yet-tested responsive/keyboard/zoom checks remain open work, not passes.

**No retroactive authorization:** approval of this future WRP version authorizes only subsequent in-scope work under the stated training boundary. It cannot rewrite the historical fact that implementation began before this gate was recorded.
