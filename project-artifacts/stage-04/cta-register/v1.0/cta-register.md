# Stage 4 — CTA Register

**Register version:** LC-CTA-001 v1.0  
**Project mode:** SYNTHETIC / DEVELOPMENT ONLY  
**Public conversion readiness:** NONE — internal preview only

| CTA ID | Label / intent | Placement | Target | Action type | State | Guardrail |
|---|---|---|---|---|---|---|
| CTA-0001 | Layanan & Harga | Header | #services-pricing | In-page anchor | ENABLED | Valid local anchor |
| CTA-0002 | Proses | Header | #how-it-works | In-page anchor | ENABLED | Valid local anchor |
| CTA-0003 | Antar-Jemput | Header | #pickup-delivery | In-page anchor | ENABLED | Valid local anchor |
| CTA-0004 | Jam & Lokasi | Header | #hours-location | In-page anchor | ENABLED | Valid local anchor |
| CTA-0005 | Lihat layanan & harga | Hero | #services-pricing | In-page anchor | ENABLED | No external action |
| CTA-0006 | Jam operasional | Hero | #hours-location | In-page anchor | ENABLED | No external action |
| CTA-0007 | Info Kontak | Header / footer | #contact | In-page anchor | ENABLED | No external action |
| CTA-0008 | Kunjungan langsung | Contact | No external target | Informational only | DEMO_ONLY / NON_ACTIONABLE | Address is fictional; no route/map/directions |
| CTA-0009 | WhatsApp | Contact | No destination supplied | Disabled state only | NOT_CONFIGURED | No href, wa.me URL, number, QR, click handler or focus target |
| CTA-0010 | Kembali ke atas | Footer | #hero | In-page anchor | ENABLED | Valid local anchor |

## CTA acceptance criteria

1. Every enabled CTA resolves to an existing page element.
2. No CTA opens or contacts an external destination.
3. Disabled WhatsApp does not use link/button semantics and cannot receive keyboard focus.
4. The fictional address is not clickable and is not associated with map or navigation services.
5. No form submission, tracking, booking, order, payment or messaging side effect exists.
