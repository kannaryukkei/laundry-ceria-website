import { useEffect, useRef, useState } from 'react';

const navigation = [
  { label: 'Layanan & harga', href: '#services-pricing' },
  { label: 'Cara kerja', href: '#how-it-works' },
  { label: 'Antar-jemput', href: '#pickup-delivery' },
  { label: 'Jam & lokasi', href: '#hours-location' },
];
const kiloan = [
  { name: 'Cuci lipat', price: 8000 },
  { name: 'Cuci setrika', price: 12000 },
  { name: 'Setrika saja', price: 7000 },
];
const satuan = [
  { name: 'Bed cover', price: 25000 },
  { name: 'Selimut', price: 20000 },
];
const processSteps = [
  ['01', 'Serahkan pakaian', 'Pakaian dibawa langsung ke ruko.'],
  ['02', 'Timbang bersama', 'Berat pakaian ditimbang di depan pelanggan.'],
  ['03', 'Catat pesanan', 'Pesanan dicatat untuk setiap pelanggan.'],
  ['04', 'Cuci dan keringkan', 'Pakaian masuk ke proses pencucian dan pengeringan.'],
  ['05', 'Lipat atau setrika', 'Penyelesaian mengikuti layanan yang dipilih.'],
  ['06', 'Kabar setelah selesai', 'Pelanggan dikabari melalui WhatsApp setelah selesai.'],
];
const hours = [
  ['Senin', '08.00–20.00'], ['Selasa', '08.00–20.00'], ['Rabu', '08.00–20.00'],
  ['Kamis', '08.00–20.00'], ['Jumat', '08.00–20.00'], ['Sabtu', '08.00–20.00'],
  ['Minggu', '09.00–15.00'],
];
const currency = (value: number) => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0,
}).format(value);

function PreviewNotice() {
  return <aside className="preview-bar" aria-label="Status website"><span className="preview-dot" aria-hidden="true" /><strong>PREVIEW ONLY</strong><i /><span>Simulasi bisnis fiktif</span><b>DEMO-ONLY</b><b>NOT_APPROVED</b></aside>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <header className="masthead">
    <div className="page-shell masthead-inner">
      <a className="wordmark" href="#hero" aria-label="Laundry Ceria, kembali ke awal"><span className="wordmark-mark" aria-hidden="true">✳</span><span className="wordmark-copy">Laundry Ceria<small>CUCIAN HARIAN, LEBIH RINGKAS</small></span></a>
      <button ref={buttonRef} className="menu-toggle" type="button" aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(v => !v)}><span /><span /></button>
      <nav id="primary-nav" className={open ? 'main-nav primary-nav is-open' : 'main-nav primary-nav'} aria-label="Navigasi utama">
        {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Info demo <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero" id="hero"><div className="page-shell">
    <div className="hero-layout">
      <div className="hero-copy">
        <div className="hero-kicker"><span /> LAUNDRY KILOAN & SATUAN</div>
        <h1>Cucian beres.<br /><em>Hari lanjut.</em></h1>
        <p className="hero-description">Untuk penghuni kos dan keluarga muda, pilih layanan, cek tarif, dan pahami prosesnya sebelum pakaian diserahkan. Semua informasi penting ada di satu tempat.</p>
        <div className="hero-actions"><a className="button button-primary" href="#services-pricing">Lihat daftar harga <span aria-hidden="true">↓</span></a><a className="text-link" href="#how-it-works">Kenali prosesnya ↗</a></div>
        <div className="hero-proofline"><b aria-hidden="true">✓</b><span>Harga terlihat di awal</span><i /><span>Pesanan dicatat per pelanggan</span></div>
      </div>
      <div className="hero-visual">
        <figure className="hero-image-wrap"><img src="/assets/laundry-ceria-hero.svg" alt="Ilustrasi konseptual tumpukan pakaian bersih dan keranjang laundry biru" width="896" height="597" fetchPriority="high" /><figcaption>ILUSTRASI KONSEPTUAL · BUKAN FOTO TEMPAT USAHA</figcaption></figure>
        <div className="hero-price-note"><span>TARIF KILOAN MULAI</span><strong>Rp7.000</strong><small>PER KG</small><b aria-hidden="true">↗</b></div>
        <div className="hero-sticker"><strong>5</strong><span>pilihan<br />layanan</span></div>
      </div>
    </div>
    <div className="hero-bottom"><span>UNTUK PENGHUNI KOS & KELUARGA MUDA</span><span>JELAJAHI LAYANAN ↓</span></div>
  </div></section>;
}

function SectionIntro({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description: string }) {
  return <div className="section-intro"><div className="section-intro-meta"><b>{number}</b><span>{eyebrow}</span></div><div><h2>{title}</h2><p>{description}</p></div></div>;
}

function PriceTable({ title, unit, rows }: { title: string; unit: string; rows: readonly { name: string; price: number }[] }) {
  return <div className="price-table"><div className="price-table-heading"><h3>{title}</h3><span>{unit}</span></div>
    {rows.map((row, index) => <div className="price-line" key={row.name}><span>{String(index + 1).padStart(2, '0')}</span><b>{row.name}</b><strong>{currency(row.price)}<small>{unit === 'PER KILOGRAM' ? '/kg' : '/potong'}</small></strong></div>)}
  </div>;
}

function PriceEstimator() {
  const [service, setService] = useState('0');
  const [weight, setWeight] = useState('');
  const [express, setExpress] = useState(false);
  const [pickup, setPickup] = useState(false);
  const item = kiloan[Number(service)] ?? kiloan[0];
  const kg = Number(weight);
  const valid = weight.trim() !== '' && Number.isFinite(kg) && kg > 0;
  const laundry = valid ? item.price * kg * (express ? 1.5 : 1) : 0;
  const delivery = valid && pickup && kg <= 5 ? 5000 : 0;
  const total = laundry + delivery;
  const summary = valid ? 'Laundry ' + currency(laundry) + (pickup ? ' · Antar-jemput ' + (delivery === 0 ? 'gratis' : currency(delivery)) : '') : 'Masukkan berat di atas 0 kg untuk melihat perkiraan.';
  return <div className="estimator">
    <div className="estimator-copy"><span>ALAT BANTU · DATA DEMO</span><h3>Perkirakan biaya<br />sebelum datang.</h3><p>Ubah layanan dan berat pakaian untuk melihat simulasi biaya. Bukan pemesanan atau tagihan.</p><small>Express +50% · Antar-jemput radius 2 km</small></div>
    <div className="estimator-panel">
      <label htmlFor="service-choice">Pilih layanan kiloan</label>
      <select id="service-choice" value={service} onChange={e => setService(e.target.value)}>{kiloan.map((row, i) => <option key={row.name} value={String(i)}>{row.name} · {currency(row.price)}/kg</option>)}</select>
      <label htmlFor="laundry-weight">Berat pakaian (kg)</label>
      <input id="laundry-weight" type="number" min="0.1" max="1000" step="0.1" inputMode="decimal" placeholder="Contoh: 3" value={weight} onChange={e => setWeight(e.target.value)} />
      <label className="check-row"><input type="checkbox" checked={express} onChange={e => setExpress(e.target.checked)} /><span>Express <small>+50% · diterima sebelum 10.00, selesai 20.00</small></span></label>
      <label className="check-row"><input type="checkbox" checked={pickup} onChange={e => setPickup(e.target.checked)} /><span>Hitung biaya antar-jemput <small>Radius 2 km dari ruko</small></span></label>
      <div className="estimate-result" aria-live="polite" aria-atomic="true"><div><span>Perkiraan total</span><strong>{valid ? currency(total) : '—'}</strong></div><p>{summary}</p></div>
      <small className="estimator-disclaimer">Simulasi menggunakan tarif pada halaman ini. Semua data bisnis bersifat fiktif.</small>
    </div>
  </div>;
}

function ServicesPricing() {
  return <section className="section pricing-section" id="services-pricing"><div className="page-shell">
    <SectionIntro number="01" eyebrow="LAYANAN & HARGA" title="Pilih yang cocok. Harganya jelas." description="Tarif kiloan dihitung per kilogram. Bed cover dan selimut dihitung per potong." />
    <div className="pricing-grid"><PriceTable title="Laundry kiloan" unit="PER KILOGRAM" rows={kiloan} /><PriceTable title="Laundry satuan" unit="PER POTONG" rows={satuan} /></div>
    <div className="pricing-footer"><span>✳</span><p>Setiap pesanan selesai dibungkus plastik gratis.</p><small>TARIF DEMO · BUKAN PENAWARAN NYATA</small></div>
    <PriceEstimator />
  </div></section>;
}

function Turnaround() {
  return <section className="turnaround-section" id="turnaround"><div className="page-shell turnaround-layout">
    <div className="turnaround-copy"><div className="section-intro-meta"><b>02</b><span>WAKTU PENGERJAAN</span></div><h2>Waktu yang bisa<br />diperkirakan.</h2><p>Untuk layanan kiloan reguler, proses biasanya 2 hari. Pilihan express memiliki ketentuan tersendiri.</p></div>
    <div className="turnaround-options">
      <article className="turnaround-card regular-card"><span>KILOAN REGULER</span><div className="duration">2<small>hari</small></div><p>Biasanya 2 hari untuk layanan kiloan.</p><small>WAKTU REGULER</small></article>
      <article className="turnaround-card express-card"><div className="express-head"><span>LAYANAN EXPRESS</span><b>+50%</b></div><div className="express-time"><div><span>DITERIMA SEBELUM</span><strong>10.00</strong></div><i>→</i><div><span>SELESAI HARI YANG SAMA</span><strong>20.00</strong></div></div><p>Biaya tambahan 50% dari harga normal.</p><small>KETENTUAN EXPRESS</small></article>
    </div>
  </div></section>;
}

function HowItWorks() {
  return <section className="section process-section" id="how-it-works"><div className="page-shell">
    <SectionIntro number="03" eyebrow="CARA KERJA" title="Enam langkah. Dari serah sampai selesai." description="Alur pelayanan dirangkum dari informasi bisnis yang tersedia pada materi latihan." />
    <ol className="process-list">{processSteps.map(([number, title, description]) => <li className="process-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b aria-hidden="true">↗</b></li>)}</ol>
  </div></section>;
}

function PickupDelivery() {
  return <section className="pickup-section" id="pickup-delivery"><div className="page-shell pickup-layout">
    <div><div className="section-intro-meta"><b>04</b><span>ANTAR-JEMPUT</span></div><h2>Masih di sekitar sini?<br /><em>Ada ketentuannya.</em></h2><p>Layanan antar-jemput pada data demo dibatasi pada radius 2 km dari ruko.</p><div className="radius-stamp"><strong>2</strong><span>KM<br />RADIUS</span></div></div>
    <div className="pickup-fees"><div className="pickup-fee pickup-free"><span>BERAT PESANAN</span><strong>Di atas 5 kg</strong><b>GRATIS</b></div><div className="pickup-fee"><span>BERAT PESANAN</span><strong>5 kg atau kurang</strong><b>Rp5.000</b></div><p>Tepat 5 kg termasuk pada ketentuan biaya Rp5.000. Tidak ada peta atau pemesanan antar-jemput aktif pada preview.</p></div>
  </div></section>;
}

function HoursLocation() {
  return <section className="section location-section" id="hours-location"><div className="page-shell">
    <SectionIntro number="05" eyebrow="JAM & LOKASI" title="Rencanakan waktu untuk mampir." description="Informasi berikut merupakan data sintetis untuk latihan desain, bukan informasi lokasi nyata." />
    <div className="location-grid">
      <div className="hours-sheet"><div className="sheet-heading"><h3>Jam operasional</h3><span>SETIAP HARI</span></div>{hours.map(([day, time]) => <div className="hours-line" key={day}><span>{day}</span><strong>{time}</strong></div>)}<p className="hours-note">Kiloan reguler: biasanya 2 hari · Express: sebelum 10.00, selesai 20.00</p></div>
      <div className="address-sheet"><span className="address-tag">ALAMAT FIKTIF · DATA DEMO</span><span className="address-overline">ALAMAT DALAM MATERI LATIHAN</span><h3>Jl. Melati No. 12,<br />Jakarta</h3><p>Alamat ini bukan lokasi usaha nyata. Tidak tersedia petunjuk arah, peta, atau navigasi.</p><span className="address-ref">LC / LOCATION REFERENCE 001</span></div>
    </div>
  </div></section>;
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="page-shell contact-layout">
    <div className="contact-copy"><span>06 / KONTAK</span><h2>Semua info ada.<br /><em>Kontak belum aktif.</em></h2><p>Materi sumber menyebut kunjungan langsung dan WhatsApp sebagai jalur konversi. Keduanya belum dapat digunakan pada preview fiktif ini.</p></div>
    <div className="contact-status"><div className="contact-status-item contact-option"><span>01 / KUNJUNGAN</span><strong>Alamat demo</strong><p>Alamat yang tercantum merupakan data fiktif. Jangan gunakan sebagai tujuan perjalanan.</p><a href="#hours-location">Lihat informasi lokasi demo ↗</a></div><div className="contact-status-item contact-disabled" aria-disabled="true"><span>02 / WHATSAPP</span><strong>Belum dikonfigurasi</strong><p>Nomor WhatsApp usaha belum diberikan dalam materi sumber.</p><b>NOT CONFIGURED · NONAKTIF</b></div></div>
  </div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="page-shell footer-main"><a className="footer-wordmark" href="#hero">✳ Laundry Ceria</a><p>Website latihan untuk bisnis sintetis. Bukan representasi usaha nyata.</p><a className="footer-top" href="#hero">Kembali ke atas ↑</a></div><div className="footer-status"><div className="page-shell"><strong>PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED</strong><span>ADES / TEST 03</span></div></div></footer>;
}

export default function App() {
  return <><a className="skip-link" href="#main-content">Lewati ke konten utama</a><PreviewNotice /><Header /><main id="main-content" tabIndex={-1}><Hero /><ServicesPricing /><Turnaround /><HowItWorks /><PickupDelivery /><HoursLocation /><Contact /></main><Footer /></>;
}
