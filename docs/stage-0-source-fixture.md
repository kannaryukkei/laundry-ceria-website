# Latihan Web-Studio 1 — Klien Fiktif: Laundry Ceria

Salin SELURUH isi file ini ke ChatGPT untuk menjalankan Stage 0.

## Pemberitahuan fixture (baca dulu)

- Semua isi file ini FIKSI, dibuat untuk latihan. Tidak ada bisnis asli,
  tidak ada kontak asli, tidak ada harga asli.
- Semua fakta dari paket ini berstatus bukti DEMO-ONLY dan status
  publikasi NOT_APPROVED. Output latihan ini PREVIEW ONLY dan tidak
  boleh dipublikasikan sebagai bisnis nyata.
- Paket diperkaya dengan wawancara lanjutan (baris [23]-[32]) agar data
  bisnisnya lengkap dan website latihan bisa maksimal. Semua tambahan
  tetap DEMO-ONLY.
- Paket ini SENGAJA tidak berisi testimoni, rating, penghargaan, atau
  jumlah pelanggan. Jangan mengarangnya dalam bentuk apa pun, termasuk
  untuk demo.
- Nomor WhatsApp SENGAJA tidak diisi: nomor karangan bisa jadi nomor
  orang sungguhan. CTA WhatsApp tetap NOT_CONFIGURED.
- Aset hanya berupa deskripsi 3 foto HP (file tidak disertakan). Izin
  lisan "boleh dipakai" dicatat apa adanya; status izin tetap PENDING
  sampai ada persetujuan tertulis.

## Prompt untuk ChatGPT

Anda adalah spesialis Material Ingestion untuk AI-Operated Web Studio.
Kerjakan Stage 0 (material-first intake and source normalization) dari
paket materi di bawah ini. Aturan keras:

1. Gunakan HANYA informasi dari paket. Jangan mengarang fakta, harga,
   testimoni, rating, penghargaan, jumlah pelanggan, atau kontak,
   termasuk untuk demo.
2. Paket ini FIXTURE pelatihan: semua fakta berstatus bukti DEMO-ONLY
   dan status publikasi NOT_APPROVED. Jangan menaikkan status apa pun.
3. Setiap fakta harus menunjuk sumbernya: locator NOTE_LINE + nomor
   baris + kutipan pendek. Kalau tidak ada sumbernya, tulis MISSING.
4. Jangan menebak yang kosong; catat sebagai gap.
5. Baris [23] ke atas adalah wawancara lanjutan. Jika bertentangan
   dengan baris sebelumnya, baris terbaru yang berlaku; catat
   konfliknya sebagai resolved dengan merujuk kedua locator.

Keluaran yang diminta:

(a) Fact Register: tabel berisi ID (FACT-0001 dst), fakta, locator,
    kutipan, evidence_status, publication_status.
(b) Asset Register: ID (ASSET-0001 dst), deskripsi, pemilik/sumber,
    permission_status, permission_evidence_status, intended_use.
(c) Gap Register: ID (GAP-0001 dst), informasi yang hilang,
    pemilik/aksi, milestone_priority (PREVIEW_BLOCKER, PRODUCTION_BLOCKER,
    atau OPTIONAL_GAP).
(d) Draf 5 field intake wajib dari paket (business_overview,
    target_audience, products_services, website_goal,
    primary_conversion), dan sebutkan mana yang tidak bisa diisi dari
    paket.

Tulis penjelasan dalam Bahasa Indonesia; nama field dan nilai enum tetap
Bahasa Inggris persis seperti di atas. Jangan membuat website atau copy
website. Hanya Stage 0.

## Paket materi: catatan wawancara

[1] Pemilik: Ratna (nama fiktif), menjalankan Laundry Ceria sendirian
    dibantu 1 karyawan.
[2] Usaha: laundry kiloan di sebuah ruko kecil, sudah berjalan 3 tahun.
[3] Layanan: cuci lipat, cuci setrika, setrika saja.
[4] Layanan satuan: bed cover dan selimut.
[5] Pelanggan utama: penghuni kos dan keluarga muda di sekitar ruko.
[6] Kebanyakan pelanggan mengantar pakaian sendiri ke ruko.
[7] Proses: pakaian diterima, ditimbang di depan pelanggan, dicatat per
    pelanggan, lalu dicuci.
[8] Setelah kering, pakaian dilipat atau disetrika sesuai layanan, lalu
    pelanggan dikabari lewat WhatsApp.
[9] Nomor WhatsApp tidak diberikan dalam wawancara.
[10] Waktu selesai kiloan: biasanya 2 hari.
[11] Layanan ekspres disebut "bisa 1 hari", tetapi syarat dan biayanya
     tidak dijelaskan.
[12] Jam buka Senin-Sabtu 08.00-20.00.
[13] Hari Minggu: Ratna tidak yakin, kadang buka kadang tutup, jamnya
     tidak pasti.
[14] Harga tidak disebutkan sama sekali dalam wawancara.
[15] Antar-jemput: "sekitar sini saja", batas wilayahnya tidak
     dijelaskan.
[16] Klaim Ratna: pakaian tidak tertukar karena ditimbang dan dicatat
     per pelanggan.
[17] Aset: 3 foto HP — etalase ruko, mesin cuci, tumpukan pakaian
     bersih.
[18] Ratna berkata lisan "fotonya boleh dipakai" untuk website.
[19] Tidak ada logo. Tidak ada website atau media sosial yang disebutkan.
[20] Tujuan website menurut Ratna: supaya pelanggan baru tahu layanannya
     dan cara order.
[21] Konversi utama yang diinginkan: pelanggan datang langsung atau
     menghubungi lewat WhatsApp.
[22] Tidak ada testimoni, rating, penghargaan, atau jumlah pelanggan
     yang disebutkan.

## Paket materi: wawancara lanjutan

[23] (Menggantikan [14]) Harga: cuci lipat Rp8.000/kg; cuci setrika
     Rp12.000/kg; setrika saja Rp7.000/kg.
[24] (Menggantikan [14]) Harga satuan: bed cover Rp25.000 per potong;
     selimut Rp20.000 per potong.
[25] (Menggantikan [11]) Ekspres: pakaian yang diterima sebelum pukul
     10.00 selesai hari yang sama pukul 20.00, biaya tambahan 50% dari
     harga normal.
[26] (Menggantikan [13]) Hari Minggu buka pukul 09.00-15.00.
[27] (Menggantikan [15]) Antar-jemput: radius 2 km dari ruko; gratis
     untuk pesanan di atas 5 kg, Rp5.000 untuk pesanan 5 kg ke bawah.
[28] Alamat: Jl. Melati No. 12, Jakarta (alamat fiktif).
[29] Setiap pesanan dibungkus plastik gratis setelah selesai.
[30] Ratna berjanji mengirim nomor WhatsApp usaha, tetapi sampai
     wawancara selesai nomornya belum diterima.
[31] Tidak ada perubahan soal foto: izin masih lisan, belum ada
     persetujuan tertulis. Tidak ada logo.
[32] Ratna menegaskan tidak ada testimoni, rating, penghargaan, atau
     jumlah pelanggan yang boleh ditampilkan.

## Setelah ChatGPT menjawab

Tempel jawaban ChatGPT kembali ke Muse untuk diperiksa terhadap kriteria
keluar Stage 0 sebelum lanjut ke Stage 1. Jangan lanjut ke stage
berikutnya sebelum diperiksa.
