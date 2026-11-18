# Source Register — Laundry Ceria E2E

> Fixture fiktif untuk uji E2E workflow. Evidence: DEMO-ONLY. Publication: NOT_APPROVED. Delivery mode: preview_only. Jangan gunakan sebagai data bisnis nyata atau memublikasikan website ini.

| Source ID | Source type | Repository path | Locator range | Evidence status | Publication status | Authority / handling |
|---|---|---|---|---|---|---|
| SRC-0001 | Fictional owner interview fixture with follow-up interview | `docs/stage-0-source-fixture.md` | NOTE_LINE [1]–[32] | DEMO-ONLY | NOT_APPROVED | Primary source for Stage 0 facts; later notes [23]–[27] explicitly replace or refine earlier notes [14], [11], [13], [15] |

## Source integrity

- Git blob SHA-1: `006916d4afe240d954a41d1b127948db9f8fe0be`
- Source file was read from branch `feat/stage-4-website-production`.
- The source itself identifies all facts as fictional training data.

## Provenance rules

1. Every extracted fact in the Fact Register points to NOTE_LINE locators in SRC-0001.
2. Follow-up notes take precedence only where the source explicitly labels them as replacements/refinements.
3. Absence of a value is recorded as MISSING; no phone number, actual address, logo, written photo consent, or social proof is inferred.
4. No downstream handoff document is treated as a primary source for new business facts.
