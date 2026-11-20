import { useEffect, useRef, useState } from 'react';
import { hours, services } from './data';

const navItems = [
  ['Harga', 'services-pricing'],
  ['Waktu', 'how-it-works'],
  ['Antar-jemput', 'pickup-delivery'],
  ['Jam & lokasi', 'hours-location'],
] as const;

type ServiceKey = 'cuci-lipat' | 'cuci-setrika' | 'setrika-saja' | 'bed-cover' | 'selimut';

const calculatorServices: { key: ServiceKey; label: string; price: number; unit: 'kg' | 'potong' }[] = [
  { key: 'cuci-lipat', label: 'Cuci lipat', price: 8000, unit: 'kg' },
  { key: 'cuci-setrika', label: 'Cuci setrika', price: 12000, unit: 'kg' },
  { key: 'setrika-saja', label: 'Setrika saja', price: 7000, unit: 'kg' },
  { key: 'bed-cover', label: 'Bed cover', price: 25000, unit: 'potong' },
  { key: 'selimut', label: 'Selimut', price: 20000, unit: 'potong' },
];

const rupiah = (amount: number) => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0,
}).format(amount);

function PreviewBar() {
  return <div className="preview-bar" role="note">ADES PREVIEW — NOT FOR RELEASE <span>• DATA FIKTIF • DEMO-ONLY • NOT_APPROVED</span></div>;
}

function ClotheslineArt() {
  return (
    <div className="hero-art">
      <svg viewBox="0 0 520 300" role="img" aria-labelledby="clothesline-title">
        <title id="clothesline-title">Ilustrasi pakaian yang dijemur pada tali jemuran</title>
        <path d="M28 72 Q260 35 492 72" fill="none" stroke="#16262B" strokeWidth="4" strokeLinecap="round" />
        <path d="M28 72 L28 255 M492 72 L492 255" stroke="#0F6B63" strokeWidth="8" strokeLinecap="round" />
        <g stroke="#16262B" strokeWidth="3" strokeLinejoin="round">
          <path d="M90 73 L90 101 M82 96 L98 96" stroke="#D9543B" strokeWidth="5" />
          <path d="M78 103 L101 103 L98 145 L93 150 L86 150 L81 145 Z" fill="#D3EAE0" />
          <path d="M184 65 L184 94 M176 89 L192 89" stroke="#F2A93B" strokeWidth="5" />
          <path d="M168 96 L200 96 L197 153 L171 153 Z" fill="#F2A93B" />
          <path d="M280 59 L280 90 M272 85 L288 85" stroke="#0F6B63" strokeWidth="5" />
          <path d="M264 92 L296 92 L293 155 L267 155 Z" fill="#0F6B63" />
          <path d="M375 65 L375 95 M367 90 L383 90" stroke="#D9543B" strokeWidth="5" />
          <path d="M361 97 L389 97 L386 145 L364 145 Z" fill="#D9543B" />
        </g>
        <path d="M50 210 Q260 184 470 210" stroke="#0F6B63" strokeWidth="2" strokeDasharray="5 9" fill="none" opacity=".45"/>
        <circle cx="260" cy="213" r="8" fill="#F2A93B"/>
      </svg>
      <p>ILUSTRASI DEKORATIF · BUKAN FOTO TOKO</p>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Laundry Ceria, kembali ke awal">
          <span className="brand-mark" aria-hidden="true">LC</span>
          <span><strong>Laundry Ceria</strong><small>LAUNDRY KILOAN TETANGGA</small></span>
        </a>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? 'Tutup menu' : 'Buka menu'}</span><i/><i/>
        </button>
        <nav id="main-nav" className={open ? 'nav primary-nav is-open' : 'nav primary-nav'} aria-label="Navigasi utama">
          {navItems.map(([label, id]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#hours-location" onClick={() => setOpen(false)}>Jam buka</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">LAUNDRY KILOAN LINGKUNGAN</p>
          <h1>Laundry yang jelas, <em>mulai dari harga.</em></h1>
          <p className="hero-lead">Lihat pilihan layanan, waktu pengerjaan, dan ketentuan antar-jemput sebelum membawa pakaian.</p>
          <div className="hero-pills"><span>Reguler biasanya 2 hari</span><span>Express hari yang sama</span><span>Antar-jemput radius 2 km</span></div>
          <div className="hero-actions"><a className="button button-primary" href="#services-pricing">Lihat daftar harga <span>↘</span></a><a className="button button-outline" href="#hours-location">Jam & lokasi</a></div>
          <p className="demo-copy">Simulasi informasi bisnis. Bukan penawaran usaha nyata.</p>
        </div>
        <ClotheslineArt />
      </div>
      <div className="container quick-facts">
        <div><span>HARGA MULAI DARI</span><strong>Rp7.000<small>/kg</small></strong></div>
        <div><span>REGULER KILOAN</span><strong>Biasanya 2 hari</strong></div>
        <div><span>AREA ANTAR-JEMPUT</span><strong>Radius 2 km</strong></div>
      </div>
      <div className="container walkin-card"><a href="#hours-location">Lihat jam operasional dan informasi lokasi demo →</a></div>
    </section>
  );
}

function PricingCalculator() {
  const [serviceKey, setServiceKey] = useState<ServiceKey>('cuci-lipat');
  const [quantity, setQuantity] = useState('5');
  const [pickup, setPickup] = useState(false);
  const [express, setExpress] = useState(false);
  const selected = calculatorServices.find((item) => item.key === serviceKey)!;
  const amount = Number(quantity);
  const valid = Number.isFinite(amount) && amount > 0 && (selected.unit !== 'potong' || Number.isInteger(amount));
  const serviceTotal = valid ? Math.round(amount * selected.price) : 0;
  const expressAllowed = selected.unit === 'kg';
  const pickupAllowed = selected.unit === 'kg';
  const expressFee = express && expressAllowed ? Math.round(serviceTotal * 0.5) : 0;
  const pickupFee = pickup && pickupAllowed && amount <= 5 ? 5000 : 0;
  const total = serviceTotal + expressFee + pickupFee;
  const quantityLabel = selected.unit === 'kg' ? 'Berat cucian (kg)' : 'Jumlah potong';
  const step = selected.unit === 'kg' ? '0.1' : '1';
  const updateService = (value: ServiceKey) => {
    setServiceKey(value);
    if (!calculatorServices.find((item) => item.key === value)?.unit || calculatorServices.find((item) => item.key === value)?.unit === 'potong') {
      setPickup(false);
      setExpress(false);
    }
  };
  return (
    <section className="calculator-card" aria-labelledby="calculator-title">
      <div className="calculator-heading"><div><p className="eyebrow">ALAT BANTU HITUNG · BUKAN PEMESANAN</p><h3 id="calculator-title">Hitung perkiraan biaya</h3></div><span className="calc-stamp">DATA DEMO</span></div>
      <p className="calculator-intro">Pilih layanan dan masukkan jumlahnya untuk melihat estimasi awal.</p>
      <div className="calculator-fields">
        <label htmlFor="service-select">Layanan</label>
        <select id="service-select" value={serviceKey} onChange={(e) => updateService(e.target.value as ServiceKey)}>
          {calculatorServices.map((item) => <option key={item.key} value={item.key}>{item.label} — {rupiah(item.price)}/{item.unit}</option>)}
        </select>
        <label htmlFor="quantity-input">{quantityLabel}</label>
        <input id="quantity-input" type="number" min="0.1" step={step} inputMode="decimal" value={quantity} onChange={(e) => setQuantity(e.target.value)} aria-describedby="quantity-help"/>
        <small id="quantity-help">{selected.unit === 'kg' ? 'Masukkan berat dalam kilogram.' : 'Masukkan jumlah potong berupa bilangan bulat.'}</small>
        {expressAllowed && <label className="check-option"><input type="checkbox" checked={express} onChange={(e) => setExpress(e.target.checked)}/><span>Express (+50% biaya layanan)</span></label>}
        {pickupAllowed && <label className="check-option"><input type="checkbox" checked={pickup} onChange={(e) => setPickup(e.target.checked)}/><span>Antar-jemput dalam radius 2 km</span></label>}
      </div>
      <div className="estimate" aria-live="polite" aria-atomic="true">
        <div className="estimate-top"><span>PERKIRAAN BIAYA</span><strong>{valid ? rupiah(total) : '—'}</strong></div>
        {valid ? <div className="estimate-lines">
          <p><span>{selected.label} · {amount} {selected.unit}</span><b>{rupiah(serviceTotal)}</b></p>
          {expressFee > 0 && <p><span>Tambahan express 50%</span><b>{rupiah(expressFee)}</b></p>}
          {pickup && <p><span>Antar-jemput {amount <= 5 ? '(5 kg atau kurang)' : '(lebih dari 5 kg)'}</span><b>{pickupFee ? rupiah(pickupFee) : 'Gratis'}</b></p>}
        </div> : <p className="estimate-error">Masukkan berat lebih dari nol atau jumlah potong berupa bilangan bulat.</p>}
        <p className="estimate-note">Estimasi bukan tagihan. Berat akhir ditimbang di depan pelanggan dan dicatat sebelum dicuci.</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section pricing-section" id="services-pricing">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">01 · LAYANAN & HARGA</p><h2>Harga yang bisa dibaca sebelum datang</h2><p>Tarif kiloan untuk cucian harian dan tarif per potong untuk bed cover serta selimut.</p></div>
        <div className="pricing-layout">
          <div className="price-board">
            <div className="price-head"><strong>LAYANAN</strong><strong>HARGA</strong></div>
            {services.kiloan.map((item) => <div className="price-row" key={item.name}><strong>{item.name}</strong><span>{item.price}<small>{item.unit}</small></span></div>)}
            <div className="price-divider">SATUAN · PER POTONG</div>
            {services.satuan.map((item) => <div className="price-row" key={item.name}><strong>{item.name}</strong><span>{item.price}<small>{item.unit}</small></span></div>)}
          </div>
          <PricingCalculator />
        </div>
        <p className="fine-print">Seluruh harga pada halaman ini merupakan data fiktif untuk latihan.</p>
      </div>
    </section>
  );
}

function Turnaround() {
  return (
    <section className="section turnaround-section" id="how-it-works">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">02 · WAKTU PENGERJAAN</p><h2>Reguler dua hari, express selesai hari yang sama</h2><p>Waktu pengerjaan dihitung sejak cucian diterima.</p></div>
        <div className="turn-grid">
          <article className="turn-card"><span className="tag">REGULER</span><h3>Biasanya 2 hari</h3><p>Laundry kiloan reguler biasanya selesai dalam dua hari.</p></article>
          <article className="turn-card turn-express"><span className="tag tag-sun">EXPRESS · TAMBAHAN 50%</span><h3>Selesai pukul 20.00</h3><p>Cucian yang diterima <strong>sebelum pukul 10.00</strong> dapat selesai pada pukul 20.00 di hari yang sama.</p><div className="timeline"><span>Masuk sebelum 10.00</span><b>→</b><span>Selesai 20.00</span></div></article>
        </div>
        <p className="fine-print">Ketentuan express untuk layanan per potong belum dinyatakan dalam materi simulasi, sehingga tidak dihitung oleh kalkulator.</p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="proses">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">03 · PROSES</p><h2>Ditimbang di depan Anda, dicatat sebelum dicuci</h2><p>Dua hal ini dinyatakan dalam materi simulasi.</p></div>
        <ol className="steps">
          <li><span>01</span><div><h3>Ditimbang di depan pelanggan</h3><p>Berat cucian ditimbang di depan Anda.</p></div></li>
          <li><span>02</span><div><h3>Dicatat sebelum dicuci</h3><p>Berat cucian dicatat terlebih dahulu sebelum proses pencucian dimulai.</p></div></li>
        </ol>
      </div>
    </section>
  );
}

function Pickup() {
  return (
    <section className="section pickup-section" id="pickup-delivery">
      <div className="container pickup-layout">
        <div><p className="eyebrow">04 · ANTAR-JEMPUT</p><h2>Antar-jemput dalam radius 2 km</h2><p className="pickup-lead">Ketentuan biaya mengikuti berat pesanan.</p><div className="radius-art"><span>2</span><b>km</b><small>RADIUS LAYANAN</small></div></div>
        <div className="pickup-rules">
          <article className="pickup-rule pickup-free"><span>GRATIS</span><div><h3>Pesanan di atas 5 kg</h3><p>Biaya jemput gratis untuk pesanan dengan berat lebih dari 5 kg.</p></div></article>
          <article className="pickup-rule"><span>Rp5.000</span><div><h3>Pesanan 5 kg atau kurang</h3><p>Biaya antar-jemput untuk pesanan dengan berat maksimal 5 kg.</p></div></article>
          <p className="fine-print">Ketentuan ini berlaku dalam radius 2 km dari lokasi simulasi.</p>
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section className="section location-section" id="hours-location">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">05 · JAM BUKA & LOKASI</p><h2>Kapan bisa datang</h2><p>Jam operasional mingguan dan keterangan alamat demo.</p></div>
        <div className="info-grid">
          <section className="info-card" aria-labelledby="hours-title"><h3 id="hours-title">Jam operasional</h3><ul>{hours.map((item) => <li key={item.day}><span>{item.day}</span><strong>{item.time}</strong></li>)}</ul></section>
          <section className="info-card address-card" aria-labelledby="address-title"><span className="demo-badge">ALAMAT FIKTIF · DEMO</span><h3 id="address-title">Jl. Melati No. 12, Jakarta</h3><p>Alamat ini sepenuhnya fiktif untuk keperluan pratinjau desain dan bukan alamat usaha yang sebenarnya. Tidak ada peta atau petunjuk arah.</p></section>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><div><a className="footer-wordmark" href="#top"><strong>Laundry Ceria</strong></a><p>Pratinjau desain untuk laundry kiloan lingkungan.</p><span className="contact-status">STATUS KONTAK: BELUM TERSEDIA<br/>Nomor WhatsApp dan telepon belum diberikan.</span></div><nav className="footer-nav" aria-label="Navigasi footer">{navItems.map(([label,id]) => <a key={id} href={'#'+id}>{label}</a>)}</nav></div><div className="container footer-bottom"><span>ADES PREVIEW — NOT FOR RELEASE · DEMO-ONLY · NOT_APPROVED</span><span>Konsep desain: “Jemuran Ceria”</span></div><div className="container back-top-wrap"><a className="back-top" href="#top">Kembali ke atas ↑</a></div></footer>;
}

export default function App() {
  return <><a className="skip-link" href="#main-content">Lewati ke konten utama</a><PreviewBar/><Header/><main id="main-content" tabIndex={-1}><Hero/><Services/><Turnaround/><Process/><Pickup/><HoursLocation/></main><Footer/></>;
}
