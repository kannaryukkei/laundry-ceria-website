# ADES PROJECT BRIEF
## Laundry Ceria — Dokumen Kerja Aktif

> Operating mode: `studio_development`. Seluruh data bisnis dan materi dalam pilot ini sintetis/fiktif. Status publikasi: `DEMO-ONLY` / `NOT_APPROVED`. Dokumen ini dikelola ADES Lead; percakapan Lead adalah pusat keputusan.

## 1. Project snapshot

- **Nama bisnis/brand:** Laundry Ceria (simulasi)
- **Nama proyek:** ADES Pilot — Laundry Ceria Website
- **PIC/kontak non-sensitif:** Ratna (nama pemilik simulasi; tidak ada kontak yang diberikan)
- **Operating mode:** `studio_development`
- **Status:** Arah desain DeepSeek dipilih operator; implementasi awal tersedia pada branch terpisah dan menunggu CI serta review
- **Repository:** https://github.com/kannaryukkei/laundry-ceria-website
- **Baseline audit:** `main` pada `71dbcf27e6d77310cd7fa1a098dc8a7935711be2` (2026-11-20)
- **Tanggal diperbarui:** 2026-11-20
- **Ringkasan:** Intake simulasi diterima. Repository privat yang telah berisi implementasi React/TypeScript/Vite, dokumentasi, workflow CI, tes browser, sejumlah branch eksperimen, dan draft PR ditemukan. Tidak ada kode website yang diubah dalam audit awal. Eksplorasi desain lintas model independen telah menghasilkan tiga HTML preview dari Gemini, Muse, dan DeepSeek; seluruh output awal diterima sebelum dilakukan evaluasi.

## 2. Client input and supplied materials

Semua pernyataan di bawah berasal dari intake simulasi operator dan bukan fakta bisnis nyata/terverifikasi.

- **Deskripsi bisnis:** Laundry kiloan simulasi, disebut telah berjalan sekitar tiga tahun, dijalankan pemilik dengan satu karyawan.
- **Layanan/harga yang diberikan:**
  - Cuci lipat — Rp8.000/kg
  - Cuci setrika — Rp12.000/kg
  - Setrika saja — Rp7.000/kg
  - Bed cover — Rp25.000/potong
  - Selimut — Rp20.000/potong
- **Audiens menurut intake:** penghuni kos dan keluarga muda di sekitar lokasi simulasi; biasanya mengantar pakaian sendiri.
- **Tujuan website:** pengunjung baru memahami layanan, harga, cara menggunakan layanan, jam buka dan lokasi, lalu datang atau menghubungi usaha.
- **Informasi operasional dari intake:**
  - Pengerjaan kiloan biasanya dua hari.
  - Express: pakaian diterima sebelum 10.00 selesai pada hari yang sama pukul 20.00; tambahan biaya 50%.
  - Jam buka Senin–Sabtu 08.00–20.00; Minggu 09.00–15.00.
  - Antar-jemput radius 2 km; gratis untuk pesanan di atas 5 kg dan Rp5.000 untuk pesanan 5 kg atau kurang.
  - Pakaian ditimbang di depan pelanggan dan dicatat sebelum dicuci.
- **Lokasi:** Jl. Melati No. 12, Jakarta — secara eksplisit fiktif untuk simulasi; tidak boleh dipetakan atau ditampilkan sebagai lokasi nyata.
- **Kontak:** nomor WhatsApp belum diberikan. Jangan membuat nomor, tautan `wa.me`, QR, atau interaksi kontak aktif.
- **Materi visual:** intake menyebut tiga foto HP (etalase ruko, mesin cuci, pakaian bersih), tetapi file belum diserahkan dan izin tertulis belum tersedia. Jangan gunakan.
- **Brand assets:** belum ada logo atau brand guideline resmi. Jangan mengklaim ada identitas resmi.
- **Social proof:** tidak ada testimoni, rating, penghargaan, atau jumlah pelanggan yang boleh digunakan.
- **Referensi desain:** belum ada referensi khusus; arah visual akan dieksplorasi independen.
- **Batasan operator:** tidak ada publikasi, deployment produksi, outreach, perubahan DNS, atau biaya; jangan membuat klaim/izin/aset palsu. Gunakan branch dan PR untuk semua perubahan repository. Pertahankan hasil eksperimen sebelumnya sebagai baseline.
- **Lampiran yang diterima di percakapan:** ZIP berisi `ADES_GUIDE.md`, `ADES_INTAKE.md`, dan `ADES_PROJECT_BRIEF.md` template. ZIP tersebut bukan snapshot repository website.

## 3. Findings, facts and evidence

| Informasi / klaim | Jenis sumber | Status keyakinan | Sumber / bukti / tanggal | Boleh dipublikasikan? |
|---|---|---|---|---|
| Seluruh detail bisnis Laundry Ceria dalam intake | Synthetic / Client input | Synthetic; tidak nyata | Simulated Client Intake, 2026-11-20 | Hanya pada preview internal dengan disclosure DEMO-ONLY |
| Harga, jam, express, pickup, proses timbang/catat | Synthetic / Client input | Synthetic; tidak diverifikasi independen | Simulated Client Intake, 2026-11-20 | Hanya pada preview internal dengan disclosure DEMO-ONLY |
| Alamat Jl. Melati No. 12, Jakarta | Synthetic | Fiktif secara eksplisit | Operator Context, 2026-11-20 | Tidak sebagai alamat nyata; tanpa peta/petunjuk arah |
| Nomor WhatsApp | Client input | Pending / tidak diberikan | Simulated Client Intake, 2026-11-20 | Tidak; jangan direkayasa |
| Tiga foto usaha | Supplied material (deskripsi saja) | File dan izin tertulis belum diterima | Simulated Client Intake, 2026-11-20 | Tidak |
| Logo/brand guideline | Client input | Tidak tersedia | Simulated Client Intake, 2026-11-20 | Tidak ada aset resmi untuk digunakan |
| Testimoni/rating/penghargaan/jumlah pelanggan | Client input | Tidak tersedia | Simulated Client Intake, 2026-11-20 | Tidak |
| Repository privat tersedia | Repository observation | Terverifikasi pada saat audit | GitHub repo API, 2026-11-20 | Metadata internal proyek |
| Default branch `main` dan stack React 19/TypeScript/Vite | Repository observation | Terverifikasi pada saat audit | GitHub repo tree, `package.json`, 2026-11-20 | Metadata internal proyek |
| Main berisi website dan aset implementasi sebelumnya | Repository observation | Terverifikasi pada saat audit | `src/App.tsx`, `src/data.ts`, `src/styles.css`, 2026-11-20 | Untuk audit baseline; bukan arahan visual eksplorasi independen |
| Automated CI dan Playwright browser tests tersedia | Repository observation | Terverifikasi dari file konfigurasi | `.github/workflows/ci.yml`, `tests/`, 2026-11-20 | Metadata internal proyek |
| Draft PR eksperimen terdahulu masih terbuka | Repository observation | Terlihat pada audit | GitHub open issues/PR list, 2026-11-20 | Jangan merge/close/modify tanpa keputusan |

## 4. Lead analysis and recommendations

- **Masalah pengunjung:** perlu cepat memahami perbedaan layanan dan harga, estimasi waktu, ketentuan express/antar-jemput, serta langkah sebelum datang.
- **Kebutuhan utama:** informasi yang mudah dipindai di ponsel; harga dan ketentuan transparan; proses layanan yang dijelaskan tanpa klaim tambahan.
- **Audiens prioritas:** penghuni kos dan keluarga muda di sekitar lokasi (berdasarkan intake; bukan hasil riset pasar).
- **Positioning/value proposition sementara:** layanan laundry lingkungan yang informasinya jelas sejak awal — rekomendasi komunikasi, bukan klaim keunggulan terverifikasi.
- **Pesan utama:** “Lihat layanan, harga, dan ketentuannya sebelum membawa pakaian.”
- **Primary conversion goal:** membantu pengunjung memutuskan untuk datang langsung; kontak digital tidak dapat dijadikan CTA aktif karena nomor WhatsApp belum ada.
- **CTA aman untuk demo:** “Lihat daftar harga” / “Lihat cara kerja” / “Cek jam operasional”. Hindari CTA WhatsApp aktif atau petunjuk arah.
- **Rekomendasi strategi:** satu halaman informasional yang mengutamakan daftar harga, alur layanan, turnaround reguler/express, antar-jemput, jam operasional, dan penjelasan alamat fiktif. Hindari booking, tracking, pembayaran, login, atau formulir yang tidak diminta.
- **Asumsi:** mayoritas kunjungan dari ponsel; validasi melalui uji responsif dan usability internal, bukan data analytics.
- **Catatan integritas:** bila repository saat ini memuat rincian operasional tambahan yang tidak terdapat pada intake (mis. notifikasi WhatsApp atau fasilitas tambahan), jangan menyalinnya ke versi baru tanpa sumber yang jelas/konfirmasi operator.

## 5. Website structure and content plan

| Halaman / section | Tujuan bagi pengunjung | Konten / bukti yang diperlukan | Status |
|---|---|---|---|
| Hero / ringkasan | Menjelaskan layanan dan mengarahkan ke harga | Deskripsi layanan generik; disclosure demo | Proposed |
| Layanan & harga | Membandingkan layanan kiloan dan satuan | Lima item harga dari intake simulasi | Proposed |
| Cara kerja | Menjelaskan timbang dan pencatatan sebelum pencucian | Dua langkah yang secara eksplisit diberikan; langkah lain jangan diasumsikan | Proposed |
| Waktu pengerjaan | Membandingkan reguler dan express | 2 hari biasanya; express cutoff 10.00, selesai 20.00, +50% | Proposed |
| Antar-jemput | Menjelaskan radius dan biaya | Radius 2 km; gratis >5 kg; Rp5.000 untuk <=5 kg | Proposed |
| Jam & lokasi | Membantu merencanakan kunjungan | Jam buka; alamat wajib ditandai FIKTIF/DEMO | Proposed |
| Kontak / footer | Menjelaskan status kontak | WhatsApp belum tersedia; tidak ada tautan aktif | Proposed |

- **Primary CTA:** menuju bagian daftar harga.
- **Secondary CTA:** menuju jam operasional/cara kerja.
- **Konten yang harus dikonfirmasi bila diperlukan:** nomor WhatsApp (hanya jika ada dalam simulasi dan diotorisasi), alamat nyata bila skenario berubah dari fiktif, rincian operasional yang belum disebut intake.
- **Informasi yang dilarang:** kontak/nomor/QR rekaan, peta untuk alamat fiktif, social proof rekaan, foto tanpa file dan izin, klaim garansi/no-mix-up, fitur booking/pembayaran/tracking yang tidak didukung.

## 6. Creative direction and multi-model exploration

- **Identitas visual/aset brand:** belum ada identitas resmi atau aset foto yang dapat digunakan.
- **Creative brief:** eksplorasi independen untuk satu halaman website laundry lingkungan; prioritaskan kejelasan harga, keterbacaan ponsel, hirarki layanan dan ketentuan; arah visual bebas selama akurat dan aksesibel.
- **Status eksplorasi:** tiga output HTML independen diterima pada 2026-11-20 dan dievaluasi oleh Lead.
- **Model eksternal pilihan operator:** Gemini, Muse, dan DeepSeek. Ketiganya akan dijalankan operator pada sesi terpisah, tanpa berbagi output antarmodel. Jumlah ini memenuhi syarat minimal dua model eksternal independen selain Lead.
- **Protokol isolasi:** setiap model menerima brief/fakta/batasan dan pertanyaan desain yang sama; tidak boleh melihat output model lain. Jangan lampirkan desain, screenshot, spesifikasi visual, atau arahan dari dokumen Stage 1–3 maupun implementasi lama pada prompt putaran independen pertama.
- **Kontrak output tiap model:** satu file HTML mandiri; CSS/JS inline; responsif; dapat dibuka langsung; tanpa framework/build/API/asset eksternal; tanpa interaksi palsu; label `ADES PREVIEW — NOT FOR RELEASE`; komentar metadata konsep.
- **Kriteria evaluasi:** relevansi bisnis, kualitas visual, UX, responsivitas, aksesibilitas, kelayakan implementasi, dan akurasi informasi.
- **Riwayat model / hasil:** ketiga output diterima; ringkasan evaluasi dan keputusan KEEP / ADAPT / REJECT tercatat pada Bagian 14.
- **Sintesis:** arah utama direkomendasikan dari konsep Muse; adaptasi terpilih dari DeepSeek dan Gemini; bukan voting atau kolase. Rincian pada Bagian 14.

## 7. Functional and technical plan

- **Fungsi yang diperlukan:** navigasi section, daftar harga, konten informasional, tampilan responsif, tautan anchor internal.
- **Fungsi yang tidak termasuk:** WhatsApp aktif, booking, order tracking, login, checkout, pembayaran, backend, formulir pengiriman, peta/alamat nyata.
- **Baseline teknis:** React 19, TypeScript, Vite; pertahankan stack saat ini kecuali ada alasan kuat setelah eksplorasi/sintesis.
- **Repository:** privat; default branch `main`; perubahan harus melalui branch dan PR.
- **CI:** workflow GitHub Actions melakukan install terkunci, typecheck/build, capture browser, tes Playwright, dan quality gate bersama. Status terkini perlu diperiksa pada exact-head branch sebelum menerima perubahan.
- **Biaya/integrasi/hosting:** tidak ada yang disetujui; jangan menambah layanan berbayar atau melakukan deployment.

## 8. Assets, permissions and publication status

| Aset | Sumber/pemilik | Hak/izin penggunaan | Status publikasi | Catatan |
|---|---|---|---|---|
| Nama Laundry Ceria dan konten bisnis | Simulasi operator | Synthetic/demo only | Exclude from real publication | Wajib disclosure |
| Foto etalase, mesin cuci, pakaian bersih | Disebut di intake, file belum ada | Izin tertulis belum ada | Exclude | Jangan gunakan |
| Logo/brand guideline | Tidak disediakan | N/A | Exclude | Gunakan identitas teks sementara bila perlu |
| Alamat | Simulasi operator | Fiktif | Exclude as real location | Tanpa map/directions |
| WhatsApp | Tidak diberikan | N/A | Exclude | Jangan buat link aktif |
| Testimoni/rating/award/customer count | Tidak diberikan | N/A | Exclude | Jangan buat social proof |

- **Publication status:** PREVIEW ONLY / DEMO-ONLY / NOT_APPROVED.
- Tidak ada deployment, domain/DNS, outreach, publikasi, atau pengeluaran biaya yang diotorisasi.

## 9. Scope and acceptance criteria

**Termasuk**
- Satu website informasional responsif.
- Layanan/harga, proses yang terkonfirmasi, waktu reguler/express, ketentuan antar-jemput, jam buka, alamat fiktif yang diberi label, dan status kontak.
- Eksplorasi multi-model independen, evaluasi, sintesis, implementasi dan QA.

**Tidak termasuk**
- Produksi/launch publik, deployment, DNS, biaya, outreach.
- Integrasi WhatsApp nyata, booking, pembayaran, akun, tracking, peta lokasi fiktif.
- Penggunaan foto atau social proof tanpa bukti/izin.

**Kriteria penerimaan**
- [ ] Sedikitnya dua model eksternal independen selain Lead telah menghasilkan HTML preview sesuai kontrak.
- [ ] Semua hasil awal dikumpulkan sebelum hasil model lain dibagikan; evaluasi KEEP / ADAPT / REJECT terdokumentasi.
- [ ] Sintesis menghasilkan satu arah desain koheren.
- [ ] Konten tidak memuat fakta/fitur/izin rekaan dan disclosure demo terlihat.
- [ ] Tidak ada tautan WhatsApp aktif, peta, atau petunjuk arah untuk alamat fiktif.
- [ ] Build, tes, responsivitas, keyboard, aksesibilitas dan pemeriksaan visual dilaporkan secara jujur.
- [ ] Perubahan disampaikan melalui branch dan PR; tidak merge/deploy tanpa persetujuan.

## 10. Decisions and approvals
| Tanggal | Keputusan | Dasar / dampak | Disetujui oleh | Status |
|---|---|---|---|---|
| 2026-11-20 | Mode `studio_development`; semua data synthetic/demo-only | Operator Context | Operator | Approved |
| 2026-11-20 | Gunakan repository privat yang sudah ada; jangan menganggap kosong | Instruksi operator dan repository ditemukan | Operator | Approved |
| 2026-11-20 | Audit `main` sebagai baseline; tidak mengubah kode saat audit | Menjaga eksperimen terdahulu | Lead | Recorded |
| 2026-11-20 | Tidak ada deployment/publikasi/DNS/biaya/outreach | Batasan operator | Operator | Approved |
| 2026-11-20 | Eksplorasi multi-model independen wajib; minimal dua model eksternal | ADES_GUIDE | Operator / operating contract | Required |

## 11. Open questions, risks and next actions

| Pertanyaan / risiko / tindakan | Mengapa penting | Penanggung jawab | Dibutuhkan sebelum |
|---|---|---|---|
| Validasi visual manual pada browser desktop/mobile | Render headless di lingkungan Lead timeout; perlu pemeriksaan screenshot di browser operator | Operator / reviewer | Sebelum implementasi final |
| Rincian operasional ekstra yang ada di implementasi lama tetapi tidak ada di intake | Mencegah fakta sintetis lama dianggap sumber yang disetujui | Lead / Operator | Konten final |
| Nomor WhatsApp tidak tersedia | CTA kontak aktif tidak dapat dibuat | Operator (jika ingin menambahkan dalam skenario) | Sebelum kontak aktif; tidak memblokir demo |
| Foto dan izin tertulis belum ada | Hak penggunaan tidak jelas | Operator | Sebelum foto dipakai; tidak memblokir demo |
| Alamat fiktif | Risiko disalahartikan sebagai tempat nyata | Lead | Semua preview |
| Pemeriksaan manual browser zoom 200% dan screen reader di baseline belum tercatat tuntas | Keterbatasan QA yang harus dibedakan dari automated checks | Operator / reviewer | QA final |

## 12. Lead status and next step

- **Tahap saat ini:** Build — implementasi awal arah DeepSeek dan kalkulator tersedia pada branch PR terpisah; TypeScript dan production build lulus; menunggu browser capture, canonical quality gate, dan review desktop.
- **Ringkasan kemajuan:** Guide dan intake ditinjau; baseline repository dipertahankan; tiga output independen diaudit; operator memilih DeepSeek; implementasi awal dilakukan pada branch `ades/deepseek-direction-implementation`.
- **Hambatan:** inspeksi render desktop/mobile melalui Chromium headless tidak berhasil (proses timeout); visual akhir, zoom 200%, screen reader dan interaksi manual belum tervalidasi.
- **Menunggu operator:** buka ketiga HTML preview secara lokal pada desktop dan lebar mobile; kirim screenshot bila tersedia. Tidak perlu menjalankan ulang model.
- **Langkah berikutnya:** periksa hasil CI dan preview desktop dari PR implementasi; koreksi bila ditemukan regresi.

---

**Aturan kerja:** satu ADES_PROJECT_BRIEF aktif; percakapan Lead adalah pusat keputusan; perubahan repository melalui branch dan PR; tidak ada rilis tanpa otorisasi eksplisit.


## 13. Independent exploration handoff — 2026-11-20

- **Operator-selected models:** Gemini, Muse, DeepSeek.
- **Execution:** operator manually runs each prompt in a separate fresh session. No model receives another model's output, screenshot, critique, or concept before all initial outputs are collected.
- **Prompt parity:** all three prompts use the same business facts, constraints, task, output contract, and evaluation criteria. Only the target model label changes.
- **Prompt source:** ADES Lead conversation dated 2026-11-20. The three prompts are delivered in that conversation for direct copy/paste.
- **Forbidden context for this first round:** do not attach or reveal prior Stage 1–3 strategy/planning/design documents, existing website source, prior branch/PR descriptions, screenshots, or previous candidate directions. The prompts are intentionally self-contained and independent.
- **Expected handoff:** exactly one standalone HTML preview file from each model, returned to this Lead conversation. Do not ask models to compare, rank, or synthesize one another.
- **Current state:** prompts prepared; model execution and outputs pending. Exploration is not complete until outputs are received and reviewed.


## 14. Independent design exploration — results and Lead evaluation (2026-11-20)

### Output received
| Model | File | Concept | Contract / structural checks |
|---|---|---|---|
| Gemini | `gemini-code-1795166439843.html` | Tali Jemuran & Sabun Batang — Warm Neighborhood Tactile Craft | Standalone HTML; inline CSS/JS; no external asset references; persistent preview label; Indonesian; viewport metadata; landmarks and skip link; internal anchors resolve; responsive breakpoints; reduced-motion and focus-visible rules |
| Muse | `Laundry Ceria Muse.html` | Nota Ceria — The Laundry Tag | Standalone HTML; inline CSS/JS; no external asset references; persistent preview label; Indonesian; viewport metadata; landmarks and skip link; internal anchors resolve; responsive breakpoints; reduced-motion and focus-visible rules |
| DeepSeek | `deepseek_html_20261120_27ec69.html` | Jemuran Ceria — The Cheerful Clothesline | Standalone HTML; inline CSS/JS; no external asset references; persistent preview label; Indonesian; viewport metadata; landmarks and skip link; internal anchors resolve; responsive breakpoints; reduced-motion and focus-visible rules |

### Evaluation and decisions
| Model | Decision | Strengths to retain | Issues / adaptation required |
|---|---|---|---|
| Muse — Nota Ceria | **KEEP** (primary creative direction) | Strongest coherent information design: receipt/ledger metaphor directly supports transparent pricing; clear split between kiloan and per-piece prices; clear regular/express and pickup conditions; explicit restraint about unconfirmed process; calculator is scoped to kiloan rather than falsely applying pickup fees to per-piece services; strong content hierarchy and useful estimate disclaimer | Remove or rewrite unsupported instruction that customers outside 2 km should come directly to the store; ensure the calculator cannot produce confusing zero-weight/fee states and prevent accidental form submission; review claims like “selalu” and “tidak ada berat kira-kira” against the exact intake wording; verify current-day status behavior and contrast visually |
| DeepSeek — Jemuran Ceria | **ADAPT** | Calm, compact one-page hierarchy; original CSS/SVG clothesline illustration without third-party assets; concise pricing and operational sections; no unnecessary calculator; no contact or map fabrication | Headline “Bersih, wangi” implies an unsubstantiated outcome; timeline uses “Masuk ≤ 10.00” in one place although intake says **sebelum 10.00** (strictly earlier); process has a third “Baru dicuci” stage beyond the two expressly supplied facts; remove/reframe these before reuse |
| Gemini — Tali Jemuran & Sabun Batang | **ADAPT** | Strong overview/hero scanability; well-structured price table; audience context; helpful distinction between kiloan and per-piece; vector illustration and multiple responsive breakpoints | Cost estimator applies a Rp5.000 pickup fee to per-piece services through its fallback branch, although pickup thresholds are weight-based; express and pickup controls appear available for per-piece services without intake confirmation; phrase “Setiap pakaian ditimbang” is more absolute than the supplied statement; disable unsupported estimator combinations or simplify to an informational price table |

### Shared checks and limitations
- All three are standalone HTML documents with inline styles/scripts and no detected external CSS/JS/font/image URL dependencies.
- All three include `ADES PREVIEW — NOT FOR RELEASE`, Indonesian page content, a viewport meta tag, skip navigation, semantic page landmarks, visible focus styling, reduced-motion handling, and responsive CSS breakpoints.
- Static parsing found no duplicate IDs or broken in-page anchor targets in the three files.
- Muse has one `form` wrapper and no submit button; its Enter-key submission behavior still needs a browser check.
- No fake WhatsApp/contact links, map embeds, or third-party photos were detected.
- Automated static inspection is not a substitute for visual/accessibility testing. Chromium headless rendering was attempted at desktop and mobile viewport sizes but timed out in this environment. No screenshot-based visual judgment, 200% zoom test, screen-reader test, or manual interaction test is claimed.
- Accessibility checks are partial: presence of landmarks, skip links, focus-visible styles and reduced-motion rules was checked; contrast, reading order at zoom, screen-reader announcements and keyboard behavior remain unverified.

### Synthesis recommendation
Use **DeepSeek / Jemuran Ceria** as the single primary visual direction, per operator decision. Muse remains an evaluated alternative, not the selected direction. Its receipt/ledger metaphor reinforces the primary user task — quickly understanding prices and conditions — and its kiloan-only estimator avoids the most significant calculation error found in the other concepts.

Adapt selectively:
1. Retain Muse’s receipt-like price presentation, clear kiloan/per-piece grouping, section hierarchy, restrained copy, and explicit estimate disclaimer.
2. Borrow DeepSeek’s simple clothesline illustration only if it can be integrated as a supporting motif without competing with the price-ledger system; it is not a second visual direction.
3. Borrow Gemini’s compact service summary/price-table scanability where it improves mobile comprehension, but do not reuse its estimator logic.
4. Keep all operational statements bounded by intake: regular kiloan usually two days; express only for clothes received **before 10.00**, same day by 20.00, +50%; pickup radius 2 km, free above 5 kg, Rp5.000 at 5 kg or less; weighing in front of customer and recorded before washing.
5. Do not infer that express applies to per-piece bed covers/blankets unless the intake is clarified. Do not describe washing stages beyond the supplied weighing and recording facts.
6. Keep address explicitly fictional/demo, no map/directions, no live WhatsApp/contact, no unsupported claims or unlicensed photos.
7. This is a Lead recommendation, not operator approval to alter the existing website or release anything.

### Status
- Independent exploration gate: **complete** (three operator-selected external model outputs received independently).
- Candidate evaluation: **complete at static/source-review level**.
- Final visual selection: **recommended, pending operator visual review** because browser rendering could not be verified here.
- Production implementation: **not started**; existing repository baseline and prior experiments remain untouched.
- Release/publication: **not authorized**.


## 15. Operator visual review and design decision — 2026-11-20

- **Evidence received:** operator supplied one long-page visual capture for each of Muse, Gemini, and DeepSeek.
- **Review scope:** operator stated that desktop review is sufficient for the current decision; no additional mobile review is requested at this stage. The supplied captures are long-page portrait images, so exact desktop viewport fidelity was not independently measured from the images.
- **Operator assessment:** DeepSeek has the strongest overall interaction and responsive behavior, although those qualities are not fully represented by a static screenshot. Its main weakness is the absence of a cost calculator.
- **Decision:** **DeepSeek / Jemuran Ceria selected as the primary design direction**, overriding the Lead's initial Muse recommendation. This is the operator's explicit design selection.
- **Implementation response:** retain DeepSeek's interaction model, clothesline motif, section rhythm and restrained layout as the design basis. Add a calculator as a purposeful decision-support feature, with verified pricing and pickup arithmetic; do not copy Gemini's per-piece pickup-fee bug or Muse's assumptions.
- **Content corrections remain mandatory:** remove/rewrite unsupported “Bersih, wangi” outcome claim; express cutoff must read **sebelum 10.00** (not ≤ 10.00); remove the third process stage “Baru dicuci” because intake only confirms weighing in front of customer and recording before washing; no unsupported express eligibility for per-piece items.
- **Current validation status:** operator visual preference recorded. Desktop visual preference accepted as design direction; exact browser rendering, calculator behavior, keyboard, accessibility, responsive breakpoints and manual QA remain to be validated on the implementation branch.
- **Scope boundary:** no deployment, DNS, cost, outreach, publication or release authorized. Prior experiments and main baseline remain untouched.


## 16. Implementasi arah DeepSeek — 2026-11-20

- **Keputusan operator:** DeepSeek / “Jemuran Ceria” adalah arah desain utama. Operator menyatakan desktop review cukup untuk tahap pemilihan konsep; belum meminta review mobile.
- **Branch implementasi:** `ades/deepseek-direction-implementation`, dibuat dari baseline `main` commit `71dbcf27e6d77310cd7fa1a098dc8a7935711be2`. Perubahan dipisahkan dari main dan eksperimen terdahulu.
- **Implementasi awal:**
  - Adaptasi palet warm paper/cream, deep teal, marigold, clothesline SVG, section rhythm dan typography hierarchy dari DeepSeek.
  - Daftar harga tetap dikelompokkan kiloan dan satuan.
  - Kalkulator estimasi mendukung seluruh lima layanan: tarif dikalikan berat (kg) atau jumlah potong; jumlah potong divalidasi bilangan bulat.
  - Opsi antar-jemput dan biaya hanya tersedia untuk layanan kiloan: Rp5.000 untuk berat <= 5 kg dan gratis untuk berat > 5 kg, sesuai intake.
  - Opsi express (+50%) hanya tersedia untuk layanan kiloan pada kalkulator; applicability untuk layanan per potong tidak dinyatakan di intake dan sengaja tidak diasumsikan.
  - Proses dibatasi pada dua fakta: penimbangan di depan pelanggan dan pencatatan sebelum pencucian. Klaim tambahan “baru dicuci” sebagai tahapan terverifikasi tidak dipakai.
  - Express menggunakan cutoff **sebelum pukul 10.00**, selesai pukul 20.00 hari yang sama, +50%.
  - Alamat tetap ditandai fiktif/demo; tanpa peta, petunjuk arah, kontak aktif, foto, atau social proof.
- **Formula kalkulator:** subtotal = harga layanan × berat/jumlah; express kiloan = 50% subtotal bila dipilih; pickup kiloan = Rp5.000 bila dipilih dan berat <= 5 kg, selain itu gratis bila > 5 kg. Pickup/express tidak muncul untuk item per potong.
- **Validasi:** workflow PR #16 run `44713268009` sedang berjalan; langkah TypeScript dan production build sudah sukses. Sisa browser capture, dependency evidence, dan canonical quality gate masih berjalan. Pemeriksaan visual desktop manual, interaksi keyboard, zoom 200%, screen reader, dan mobile QA belum dilakukan pada implementasi.
- **Branch dan PR:** implementasi pada branch `ades/deepseek-direction-implementation`; draft PR #16 https://github.com/kannaryukkei/laundry-ceria-website/pull/16. Tidak ada merge, deployment, DNS, publikasi, biaya atau outreach yang diotorisasi.
- **Catatan scope:** operator meminta fokus visual desktop untuk keputusan arah. CSS tetap memiliki breakpoints untuk layout lain, tetapi itu bukan klaim bahwa responsivitas sudah diuji.


## 17. CI failure diagnosis and test alignment — 2026-11-20

- **Failed run:** GitHub Actions run `44713268009` / Website CI run #252 on PR #16, head `56a12be0c394f971754255d6e03446d51e313f8`.
- **Successful steps:** dependency installation, TypeScript typecheck, production build, Playwright/Chromium install, A3 reference study, dependency evidence collection, and all seven responsive screenshot captures (640, 720, 320, 360, 900, 1024, 1280).
- **Failure:** `tests/a11y-001-keyboard.mjs` timed out at its wait for `#primary-nav`. Current implementation uses `#main-nav`; test selectors also referenced the previous `.wordmark` and `.primary-nav` naming. This is a stale-test/markup contract mismatch, not a compile or build failure.
- **Correction committed on the same implementation branch:** updated A11Y-001 selectors to the current navigation and brand classes; rewrote A11Y-002 keyboard traversal expectations to match the actual current anchor destinations and visible navigation order. Checks remain enabled; assertions were not removed.
- **New head:** `cdc98e18c8527792a8b3c8af6a1412a6ac3ec7bf`. New CI run #255 / run ID `44713744535` has started. Result pending at time of this update.
- **No merge/deployment/publication:** PR #16 remains a draft review path; all existing baseline and prior experiment branches are preserved.

## 18. CI #255 diagnosis and keyboard focus correction — 2026-11-20

- **Run #255:** GitHub Actions run `44713744535`, PR #16, head `cdc98e18c8527792a8b3c8af6a1412a6ac3ec7bf`; conclusion **failure**.
- **Successful checks:** dependency installation, TypeScript typecheck, production build, Playwright/Chromium installation, A3 reference study (12/12 captures; 4/4 measured pages), dependency evidence collection, and responsive screenshot captures at 640, 720, 320, 360, 900, 1024, and 1280 px.
- **Failure:** `tests/a11y-001-keyboard.mjs` assertion at line 82: `Escape restores focus to the menu toggle`. After Escape, the menu state closed but focus was not programmatically returned to the toggle. A11Y-002 was not reached in this run.
- **Root cause from source review:** Header Escape handler only called `setOpen(false)`; the menu toggle had no retained ref and no explicit focus restoration.
- **Correction committed to implementation branch:** `src/App.tsx` now stores the menu toggle in a React ref and, on Escape, closes the menu and calls `toggleRef.current?.focus()`. No test assertion was removed or weakened.
- **Fix commit:** `eef6547302ec0dc16fb12c2a3f33516c53c2182e` (`fix(a11y): restore focus after Escape closes mobile navigation`). New CI status must be checked on this exact head; no pass is claimed yet.
- **Scope:** PR #16 remains draft. No merge, deployment, DNS, publication, external contact, or spending is authorized.

## 19. CI #257 runner-level failure and evidence limitation — 2026-11-20

- **Latest exact-head run:** GitHub Actions run `44714157346` / Website CI #257, head `eef6547302ec0dc16fb12c2a3f33516c53c2182e`; conclusion **failure**.
- **Job metadata:** one job `build-and-preview`, job ID `136213122459`, completed in approximately two seconds. GitHub job payload reports `runner_id: 0`, empty runner name, and `steps: []`; the job-steps endpoint also returned an empty list.
- **Evidence limitation:** the job-log endpoint returned 404 BlobNotFound. No test assertion, build output, or application error is available for this run. Therefore the failure cannot responsibly be attributed to the focus-restoration code or to another source-code defect.
- **Interpretation:** the available metadata is consistent with a runner/provisioning or workflow-start failure before any step executed; this is a cautious inference, not a confirmed GitHub root-cause diagnosis.
- **Code status:** the Escape-focus correction remains committed at `eef6547302ec0dc16fb12c2a3f33516c53c2182e`. It has **not** been validated by CI because the run exposed no steps/logs.
- **Next diagnostic:** obtain GitHub Actions check-run annotations or a new run with a provisioned runner and inspect its first executed step. Do not make further application-code changes until an actionable failure is visible.
- **Scope:** PR #16 remains draft; no merge, deployment, DNS, publication, outreach, or spending authorized.
