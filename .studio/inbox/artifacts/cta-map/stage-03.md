# Stage 3 — Public CTA and Contact Map

**CTA policy:** This synthetic preview has no functional public conversion destination. All visible actions are local navigation only.

| CTA ID | Location | Label / intent | Destination | Behavior | Status |
|---|---|---|---|---|---|
| CTA-0001 | Header | Layanan & Harga | #services-pricing | In-page anchor | INTERNAL_NAVIGATION |
| CTA-0002 | Header | Proses | #how-it-works | In-page anchor | INTERNAL_NAVIGATION |
| CTA-0003 | Header | Antar-Jemput | #pickup-delivery | In-page anchor | INTERNAL_NAVIGATION |
| CTA-0004 | Header | Jam & Lokasi | #hours-location | In-page anchor | INTERNAL_NAVIGATION |
| CTA-0005 | Hero | Lihat layanan & harga | #services-pricing | In-page anchor | INTERNAL_NAVIGATION |
| CTA-0006 | Hero | Jam operasional | #hours-location | In-page anchor | INTERNAL_NAVIGATION |
| CTA-0007 | Header / footer | Info Kontak | #contact | In-page anchor | INTERNAL_NAVIGATION |
| CTA-0008 | Contact | Kunjungan langsung | No external destination; explain address is fictional | Informational only | DEMO_ONLY / NON_ACTIONABLE |
| CTA-0009 | Contact | WhatsApp | No destination configured | Disabled explanatory state; no href, handler, QR or focus target | NOT_CONFIGURED |

## Hard restrictions

- Do not invent a phone number, WhatsApp account, wa.me URL, QR code, email, form endpoint or social profile.
- Do not create a clickable address, map, geolocation or route.
- Disabled WhatsApp is not a button or link. It must not look or behave as clickable.
- Header, hero and footer controls may use valid in-page anchors only.
- Every CTA visible on the page must have a documented destination and behavior; any new one requires a new reviewed CTA record.
