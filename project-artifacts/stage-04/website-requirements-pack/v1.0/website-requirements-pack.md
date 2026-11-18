# Website Requirements Pack — Laundry Ceria Synthetic E2E

**Document ID:** WRP-LC-E2E-001  
**Version:** 1.0  
**Project ID:** LAUNDRY-CERIA-FULL-E2E-DEV  
**Status:** APPROVED_FOR_SIMULATED_DEVELOPMENT_ONLY  
**Classification:** SYNTHETIC / DEVELOPMENT ONLY  
**Evidence status:** DEMO-ONLY  
**Publication status:** NOT_APPROVED  
**Supersedes:** None in this E2E project

> **This WRP is a development test artifact.** The simulated G2 gate authorizes only progression of this synthetic workflow test. It is not a client-approved requirements document, a commercial agreement, an asset licence, or permission to publish. Existing website implementation predates this WRP and is recorded retrospectively; this approval does not backdate its authorization.

## 1. Purpose and success definition

Create and test a single-page responsive informational website using the fictional Laundry Ceria fixture. The website succeeds as an internal preview when a visitor can understand the five supplied services and prices, turnaround, handover process, pickup/delivery terms and hours without mistaking the fixture for a real business or assuming a live contact path.

The full Web Studio exercise also tests repository-native progression through canonical Stage 0–9, artifact snapshots, approval gates, event logging, SHA-256 bindings and explicit operating/delivery mode separation.

## 2. Source of truth

Primary source: docs/stage-0-source-fixture.md. Business facts retain NOTE_LINE locators. Later fixture lines [23]–[32] supersede explicit conflicts in [11], [13], [14] and [15].

Derived planning references:
- docs/stage-1-discovery-strategy.md
- docs/stage-2-website-planning.md
- docs/stage-3-design-direction.md

These are synthetic planning inputs, not independent business evidence or client approvals.

## 3. Business and audience context

The fixture describes a neighborhood kiloan laundry run by a fictional owner and one employee. Named audience groups are boarding-house residents and young families nearby. No demographic detail or validated user research is supplied.

All business information is DEMO-ONLY / NOT_APPROVED. The address is fictional. WhatsApp is NOT_CONFIGURED. Described photos are unavailable and not cleared for use. No logo is supplied.

## 4. Scope

### Included
- One responsive page in Bahasa Indonesia.
- Persistent preview notice and repeated footer status.
- Text-only temporary identity.
- Five source-backed service and price entries.
- Regular/express timing.
- Handover process and free plastic wrapping description.
- Pickup/delivery radius and price threshold.
- Exact weekday/Sunday hours.
- Fictional address with an adjacent disclosure.
- Walk-in intent as informational demo text; WhatsApp as disabled NOT_CONFIGURED state.
- Keyboard, responsive, reduced-motion and 200% zoom validation as QA objectives.
- Repository-native Stage 0–9 workflow tests.

### Excluded
- Public release, real deployment, DNS, external hosting action, live client communications.
- WhatsApp integration, phone destination, QR, forms or external CTA.
- Maps, geolocation, directions or real-world address claims.
- Business photos, official logo, testimonials, ratings, awards, customer counts.
- Payment, checkout, booking, customer account, order tracking, CRM or admin features.
- Unsupplied business, service, legal or commercial claims.
- Any real client consent, asset authorization or commercial commitment.

## 5. Functional requirements

| ID | Requirement | Acceptance criteria |
|---|---|---|
| REQ-001 | Preview status | PREVIEW ONLY / DEMO-ONLY / NOT_APPROVED visible before content and in footer |
| REQ-002 | Service grouping | Three kiloan and two piece-based services shown |
| REQ-003 | Exact prices/units | Rp8.000/kg, Rp12.000/kg, Rp7.000/kg, Rp25.000/potong, Rp20.000/potong |
| REQ-004 | Regular timing | Wording retains “biasanya 2 hari” |
| REQ-005 | Express terms | Before 10.00; same day 20.00; +50% of normal price |
| REQ-006 | Intake process | Weigh in front of customer and record per customer |
| REQ-007 | Completion | Fold/iron according to service; notification described; free plastic wrap |
| REQ-008 | Pickup/delivery | 2 km; above 5 kg free; 5 kg or less Rp5.000 |
| REQ-009 | Hours | Mon–Sat 08.00–20.00; Sunday 09.00–15.00 |
| REQ-010 | Fictional address | Label clearly; no map or direction target |
| REQ-011 | Conversion intent | Walk-in and WhatsApp intent documented without real-world action |
| REQ-012 | WhatsApp safe state | Disabled / NOT_CONFIGURED; no href, number, QR or handler |
| REQ-013 | Imagery | No unapproved business photos; abstract illustration only |
| REQ-014 | Social proof | No testimonials, ratings, awards or customer counts |
| REQ-015 | Claim boundaries | No absolute no-mix-up guarantee or other unsupported claim |

## 6. Information architecture

1. preview-notice
2. site-header
3. hero
4. services-pricing
5. turnaround
6. how-it-works
7. pickup-delivery
8. hours-location
9. contact
10. site-footer

Navigation and visible actions are in-page anchors only.

## 7. Content and claim requirements

Every business statement must map to a source locator in the fact register or claim/evidence list. Recommendations and needs hypotheses must be labelled. No unsupported marketing superlatives or fabricated social proof may appear. All prices preserve original units. Exactly 5 kg is within the Rp5.000 pickup/delivery bracket.

## 8. Visual and interaction requirements

- Design direction: Fresh & Orderly.
- Palette: primary teal #0F6B68, ink #172B3A, paper #F6F7F2, mint #DDEFEA, muted #52636C, amber #F0B54A, border #DCE4DF.
- Temporary wordmark is text-only; no official logo.
- Abstract hero illustration must not resemble factual shop photography.
- Mobile layout is single column; in-page navigation and menu are keyboard-accessible.
- Focus indicators remain visible; reduced motion is respected.
- No horizontal overflow at 320, 360, 390, 768, 1024 and 1440 px.
- At 200% zoom, primary information remains usable.
- Disabled WhatsApp is not focusable and has no click behavior.

## 9. Technical and security boundaries

The site is a frontend-only static preview using the repository's React/Vite implementation. No backend, database, external API, secrets, customer data or third-party integration is required. The repository-native runtime is separate from the website frontend and stores only synthetic project workflow records.

No production deploy, public hosting, DNS, publication, external messaging, data collection or customer transaction is permitted in this development exercise.

## 10. Acceptance and QA plan

Stage 5 checks implementation alignment and initial build. Stage 6 records baseline/after evidence and fixes only evidence-backed issues. Stage 7 independently evaluates the exact commit, typecheck/build, links, factual content, responsive viewports, focus/keyboard, reduced motion, zoom and safety constraints. Any check not actually run must be marked NOT TESTED.

G4 preview acceptance, G5 production-readiness-shaped decision, and G6 release-authorization-shaped decision are separate development simulations. They are not real human approvals. Stage 8 release execution is simulation-only and must not invoke external infrastructure.

## 11. Open risks and safe fallbacks

| Risk / gap | Impact | Treatment |
|---|---|---|
| WhatsApp destination absent | No real contact conversion | Disabled NOT_CONFIGURED |
| Address is fictional | No location navigation | Adjacent fictional label; no map |
| Photo files and written consent absent | No cleared business imagery | Exclude |
| Logo absent | Official identity unavailable | Text-only placeholder |
| Express exceptions unknown | Risk of overstated promise | State only supplied timing/surcharge |
| Payment methods absent | Cannot explain payment | Omit |
| No social proof allowed | Social proof unavailable | Omit |
| Visual/accessibility checks pending | Cannot claim full quality | Run tests; disclose residual NOT TESTED |

## 12. Version and change control

This WRP version is the exact document bound to the simulated G2 approval. Any change to content, scope, CTA, claim, asset or release constraint requires a versioned revision and a fresh review of dependent approvals. The historical website implementation is not retroactively approved by this document.

## 13. Gate decision

G2 in this test may be marked APPROVED only by explicit simulated development roles bound to this exact WRP artifact hash. This records an internal training decision only. Publication remains NOT_APPROVED and external release remains forbidden.
