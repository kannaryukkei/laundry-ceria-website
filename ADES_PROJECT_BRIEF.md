# ADES PROJECT BRIEF
## Laundry Ceria — Dokumen Kerja Aktif

> Operating mode: `studio_development`. Seluruh data bisnis dan materi dalam pilot ini sintetis/fiktif. Status publikasi: `DEMO-ONLY` / `NOT_APPROVED`. Dokumen ini dikelola ADES Lead; percakapan Lead adalah pusat keputusan.

## 1. Project snapshot

- **Nama bisnis/brand:** Laundry Ceria (simulasi)
- **Nama proyek:** ADES Pilot — Laundry Ceria Website
- **PIC/kontak non-sensitif:** Ratna (nama pemilik simulasi; tidak ada kontak yang diberikan)
- **Operating mode:** `studio_development`
- **Status:** Discovery awal dan repository audit selesai; prompt eksplorasi independen disiapkan; menunggu tiga HTML preview
- **Repository:** https://github.com/kannaryukkei/laundry-ceria-website
- **Baseline audit:** `main` pada `71dbcf27e6d77310cd7fa1a098dc8a7935711be2` (2026-11-20)
- **Tanggal diperbarui:** 2026-11-20
- **Ringkasan:** Intake simulasi diterima. Repository privat yang telah berisi implementasi React/TypeScript/Vite, dokumentasi, workflow CI, tes browser, sejumlah branch eksperimen, dan draft PR ditemukan. Tidak ada kode website yang diubah dalam audit awal. Eksplorasi desain lintas model independen belum dimulai pada percakapan Lead ini.

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
- **Status eksplorasi:** prompt awal disiapkan untuk Gemini, Muse, dan DeepSeek pada 2026-11-20; output HTML independen belum diterima.
- **Model eksternal pilihan operator:** Gemini, Muse, dan DeepSeek. Ketiganya akan dijalankan operator pada sesi terpisah, tanpa berbagi output antarmodel. Jumlah ini memenuhi syarat minimal dua model eksternal independen selain Lead.
- **Protokol isolasi:** setiap model menerima brief/fakta/batasan dan pertanyaan desain yang sama; tidak boleh melihat output model lain. Jangan lampirkan desain, screenshot, spesifikasi visual, atau arahan dari dokumen Stage 1–3 maupun implementasi lama pada prompt putaran independen pertama.
- **Kontrak output tiap model:** satu file HTML mandiri; CSS/JS inline; responsif; dapat dibuka langsung; tanpa framework/build/API/asset eksternal; tanpa interaksi palsu; label `ADES PREVIEW — NOT FOR RELEASE`; komentar metadata konsep.
- **Kriteria evaluasi:** relevansi bisnis, kualitas visual, UX, responsivitas, aksesibilitas, kelayakan implementasi, dan akurasi informasi.
- **Riwayat model / hasil:** prompt setara disiapkan dan disampaikan di percakapan Lead pada 2026-11-20; hasil dari ketiga model masih menunggu.
- **Sintesis:** pending sampai semua output awal terkumpul; jangan voting atau membuat kolase.

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
| Mengembalikan satu HTML preview dari masing-masing Gemini, Muse, dan DeepSeek | Dibutuhkan untuk membandingkan hasil independen; jangan berbagi hasil antarmodel sebelum ketiganya terkumpul | Operator | Seleksi dan sintesis |
| Rincian operasional ekstra yang ada di implementasi lama tetapi tidak ada di intake | Mencegah fakta sintetis lama dianggap sumber yang disetujui | Lead / Operator | Konten final |
| Nomor WhatsApp tidak tersedia | CTA kontak aktif tidak dapat dibuat | Operator (jika ingin menambahkan dalam skenario) | Sebelum kontak aktif; tidak memblokir demo |
| Foto dan izin tertulis belum ada | Hak penggunaan tidak jelas | Operator | Sebelum foto dipakai; tidak memblokir demo |
| Alamat fiktif | Risiko disalahartikan sebagai tempat nyata | Lead | Semua preview |
| Pemeriksaan manual browser zoom 200% dan screen reader di baseline belum tercatat tuntas | Keterbatasan QA yang harus dibedakan dari automated checks | Operator / reviewer | QA final |

## 12. Lead status and next step

- **Tahap saat ini:** Discovery awal dan repository audit selesai; prompt eksplorasi independen untuk tiga model telah disiapkan.
- **Ringkasan kemajuan:** Guide dibaca; intake diproses; baseline repository dan struktur teknis diperiksa; tidak ada perubahan kode; hasil eksperimen terdahulu dipertahankan.
- **Hambatan:** output HTML dari Gemini, Muse, dan DeepSeek belum dikembalikan.
- **Menunggu operator:** jalankan prompt yang disediakan secara terpisah di Gemini, Muse, dan DeepSeek; jangan bagikan hasil salah satu model kepada model lainnya.
- **Langkah berikutnya:** operator mengembalikan tiga file HTML hasil eksplorasi independen ke percakapan Lead yang sama.

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
