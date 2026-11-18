import { useEffect, useRef, useState } from 'react';
import { hours, processSteps, services } from './data';

const navItems = [
  ['Layanan & Harga', 'services-pricing'],
  ['Proses', 'how-it-works'],
  ['Antar-Jemput', 'pickup-delivery'],
  ['Jam & Lokasi', 'hours-location'],
] as const;

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function PreviewNotice() {
  return (
    <div className="preview-notice" id="preview-notice" role="note" aria-label="Pemberitahuan demo">
      <div className="container notice-inner">
        <span className="notice-dot" aria-hidden="true" />
        <strong data-qa-role="disclosure">PREVIEW ONLY</strong>
        <span className="notice-divider" aria-hidden="true" />
        <span data-qa-role="disclosure">Data fiktif untuk latihan — <b>DEMO-ONLY</b> · <b>NOT_APPROVED</b></span>
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header" id="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#hero" aria-label="Laundry Ceria, kembali ke awal">
          <span>Laundry<span className="wordmark-light">Ceria</span></span>
          <span className="wordmark-tag" data-qa-role="metadata">DEMO</span>
        </a>
        <button ref={menuToggleRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">{menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}</span>
          <span /><span />
        </button>
        <nav className={`primary-nav${menuOpen ? ' is-open' : ''}`} id="primary-nav" aria-label="Navigasi utama">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Info Kontak <ArrowUpRight /></a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow" data-qa-role="metadata"><span />{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-art" aria-label="Ilustrasi dekoratif bentuk kain terlipat" role="img">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-spark spark-one">✳</div>
      <div className="art-spark spark-two">✳</div>
      <div className="fabric fabric-back" />
      <div className="fabric fabric-mid" />
      <div className="fabric fabric-front"><span /></div>
      <div className="art-stamp"><span className="stamp-mark">✳</span><span>RAPI<br />TERATUR</span></div>
      <span className="art-caption">ILUSTRASI DEKORATIF</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-pad" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-qa-role="metadata"><span />LAYANAN LAUNDRY KILOAN</p>
          <h1>Kenali layanan,<br /><em>harga, dan prosesnya.</em></h1>
          <p className="hero-lead">Pilihan layanan laundry untuk kebutuhan harian. Kenali layanan, harga, dan alur pengerjaannya dalam satu tempat.</p>
          <div className="hero-actions">
            <a className="button button-primary" data-qa-role="control" href="#services-pricing">Lihat layanan & harga <ArrowUpRight /></a>
            <a className="text-link" data-qa-role="control" href="#hours-location">Jam operasional <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-footnote" data-qa-role="disclosure"><span className="footnote-line" />Informasi ini merupakan materi simulasi, bukan penawaran bisnis nyata.</div>
        </div>
        <HeroIllustration />
      </div>
      <div className="hero-bottom container" aria-hidden="true"><span>01 / INFORMASI LAYANAN</span><span>SCROLL UNTUK MENJELAJAHI <span className="scroll-mark">↓</span></span></div>
    </section>
  );
}

function PriceGroup({ title, subtitle, items, className }: { title: string; subtitle: string; items: readonly { name: string; price: string; unit: string }[]; className: string }) {
  return (
    <article className={`price-card ${className}`}>
      <div className="price-card-head">
        <div><span className="card-index" data-qa-role="metadata">{className === 'kiloan-card' ? '01' : '02'}</span><h3>{title}</h3></div>
        <p>{subtitle}</p>
      </div>
      <div className="price-list">
        {items.map((item) => (
          <div className="price-row" key={item.name}>
            <span data-qa-role="body">{item.name}</span>
            <strong data-qa-role="body">{item.price}<small>{item.unit}</small></strong>
          </div>
        ))}
      </div>
      <div className="price-card-foot" data-qa-role="disclosure"><span className="tiny-check" aria-hidden="true">✓</span><span>Harga sesuai data fixture latihan</span></div>
    </article>
  );
}

function ServicesPricing() {
  return (
    <section className="section-pad services-section" id="services-pricing">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata"><span>01 — LAYANAN</span><span>DAFTAR HARGA · DATA DEMO</span></div>
        <SectionHeading eyebrow="PILIH SESUAI KEBUTUHAN" title="Layanan yang tersedia." description="Kenali pilihan layanan dan rincian harga sebelum menentukan kebutuhan laundry." />
        <div className="price-grid">
          <PriceGroup title="Laundry Kiloan" subtitle="Dihitung berdasarkan berat pakaian" items={services.kiloan} className="kiloan-card" />
          <PriceGroup title="Laundry Satuan" subtitle="Dihitung per potong" items={services.satuan} className="satuan-card" />
        </div>
        <div className="pricing-note"><span className="note-icon">i</span><p data-qa-role="disclosure">Harga pada halaman ini adalah bagian dari fixture fiktif untuk latihan. Tidak ada biaya atau ketentuan lain yang ditambahkan.</p></div>
      </div>
    </section>
  );
}

function Turnaround() {
  return (
    <section className="section-pad turnaround-section" id="turnaround">
      <div className="container turnaround-grid">
        <div className="turnaround-intro">
          <p className="eyebrow eyebrow-light" data-qa-role="metadata"><span />WAKTU PENGERJAAN</p>
          <h2>Waktu yang<br /><em>lebih jelas.</em></h2>
          <p>Perhatikan perbedaan waktu layanan reguler dan ketentuan express berikut.</p>
          <span className="side-index">02</span>
        </div>
        <div className="timing-cards">
          <article className="timing-card regular-card">
            <div className="timing-card-top" data-qa-role="metadata"><span className="timing-icon">◷</span><span>LAYANAN REGULER</span></div>
            <p className="timing-value">Biasanya <strong>2 hari</strong></p>
            <p className="timing-detail">Estimasi penyelesaian untuk layanan laundry kiloan.</p>
            <div className="timing-rule" data-qa-role="disclosure"><span>01</span><span>Waktu dapat mengikuti ketentuan layanan reguler pada fixture.</span></div>
          </article>
          <article className="timing-card express-card">
            <div className="timing-card-top" data-qa-role="metadata"><span className="timing-icon">✳</span><span>LAYANAN EXPRESS</span><b data-qa-role="disclosure">+50%</b></div>
            <p className="express-intro">Masuk sebelum <strong>10.00</strong></p>
            <div className="express-arrow" aria-hidden="true">↓</div>
            <p className="express-result">Selesai hari yang sama <strong>20.00</strong></p>
            <div className="express-foot" data-qa-role="disclosure">Biaya tambahan 50% dari harga normal.</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-pad process-section" id="how-it-works">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata"><span>03 — PROSES</span><span>DARI TERIMA HINGGA SELESAI</span></div>
        <div className="process-heading-grid">
          <SectionHeading eyebrow="ALUR PENGERJAAN" title="Langkah demi langkah." description="Berikut gambaran proses berdasarkan informasi yang diberikan dalam materi latihan." />
          <div className="process-aside"><span className="aside-icon">↳</span><p>Setiap pakaian ditimbang di depan pelanggan dan dicatat per pelanggan sebelum dicuci.</p></div>
        </div>
        <ol className="process-grid">
          {processSteps.map((step) => (
            <li className="process-item" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.detail}</p></div>
              
            </li>
          ))}
        </ol>
        <div className="process-bottom-note"><span className="package-symbol" aria-hidden="true">▱</span><p>Setiap pesanan dibungkus plastik gratis setelah selesai.</p><span className="note-label" data-qa-role="metadata">INFO TAMBAHAN</span></div>
      </div>
    </section>
  );
}

function PickupDelivery() {
  return (
    <section className="section-pad pickup-section" id="pickup-delivery">
      <div className="container pickup-grid">
        <div className="pickup-copy">
          <p className="eyebrow" data-qa-role="metadata"><span />LAYANAN ANTAR-JEMPUT</p>
          <h2>Lebih dekat<br />dalam <em>jangkauan.</em></h2>
          <p>Informasi area layanan dan biaya antar-jemput berdasarkan data simulasi.</p>
          <div className="radius-display"><span className="radius-ring">⌖</span><div><small>JANGKAUAN LAYANAN</small><strong>2 km</strong><span>Radius dari ruko (data fiktif)</span></div></div>
        </div>
        <div className="pickup-rules">
          <article className="pickup-rule pickup-free"><div className="rule-meta" data-qa-role="metadata"><span>ATURAN 01</span><span className="rule-symbol">＋</span></div><p>Berat pesanan</p><h3>Di atas 5 kg</h3><div className="rule-bottom"><strong>GRATIS</strong><span data-qa-role="disclosure">Biaya antar-jemput</span></div></article>
          <article className="pickup-rule pickup-paid"><div className="rule-meta" data-qa-role="metadata"><span>ATURAN 02</span><span className="rule-symbol">↗</span></div><p>Berat pesanan</p><h3>5 kg atau kurang</h3><div className="rule-bottom"><strong>Rp5.000</strong><span data-qa-role="disclosure">Biaya antar-jemput</span></div></article>
          <p className="pickup-footnote" data-qa-role="disclosure">Ketentuan radius dan biaya di atas merupakan data demo, bukan informasi layanan aktif.</p>
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section className="section-pad location-section" id="hours-location">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata"><span>05 — INFORMASI KUNJUNGAN</span><span>JADWAL & ALAMAT DEMO</span></div>
        <SectionHeading eyebrow="JAM & LOKASI" title="Kenali detailnya." description="Jadwal operasional dan alamat ditampilkan sesuai materi latihan fiktif." />
        <div className="location-grid">
          <article className="info-card hours-card">
            <div className="info-card-head" data-qa-role="metadata"><span className="info-icon">◷</span><span>JAM OPERASIONAL</span><span className="card-corner" aria-hidden="true">01</span></div>
            <div className="hours-list">
              {hours.map((item) => <div className="hours-row" data-qa-role="body" key={item.day}><span>{item.day}</span><strong>{item.time}</strong></div>)}
            </div>
            <p className="card-footnote" data-qa-role="disclosure">Seluruh jadwal merupakan data dari fixture latihan.</p>
          </article>
          <article className="info-card address-card">
            <div className="info-card-head" data-qa-role="metadata"><span className="info-icon">⌖</span><span>ALAMAT</span><span className="card-corner" aria-hidden="true">02</span></div>
            <div className="fictional-label" data-qa-role="disclosure"><span />ALAMAT FIKTIF — DATA DEMO</div>
            <h3>Jl. Melati No. 12,<br />Jakarta</h3>
            <p>Alamat ini hanya digunakan sebagai contoh dalam proyek latihan dan bukan lokasi usaha sungguhan.</p>
            
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata"><span>06 — LANGKAH SELANJUTNYA</span><span>KONVERSI · PREVIEW ONLY</span></div>
        <div className="contact-heading-grid">
          <SectionHeading eyebrow="INFORMASI KONTAK" title="Pilihan kunjungan dan kontak." description="Alamat kunjungan dan kontak WhatsApp pada halaman ini masih berupa data simulasi." />
          
        </div>
        <div className="contact-grid">
          <article className="contact-card walkin-card">
            <div className="contact-card-top" data-qa-role="metadata"><span className="contact-icon">⌖</span><span>JALUR 01</span></div>
            <h3>Datang langsung</h3>
            <p>Alamat pada materi latihan bersifat fiktif dan tidak dapat digunakan untuk kunjungan nyata.</p>
            <div className="contact-card-bottom"><span className="status-pill status-demo" data-qa-role="disclosure">ALAMAT DEMO</span><a data-qa-role="control" href="#hours-location">Lihat detail alamat <ArrowUpRight /></a></div>
          </article>
          <article className="contact-card whatsapp-card" aria-labelledby="whatsapp-title">
            <div className="contact-card-top" data-qa-role="metadata"><span className="contact-icon">⌁</span><span>JALUR 02</span><span className="status-pill status-disabled" data-qa-role="disclosure">NOT_CONFIGURED</span></div>
            <h3 id="whatsapp-title">Hubungi via WhatsApp</h3>
            <p>Nomor WhatsApp usaha belum tersedia dalam materi. Karena itu, jalur kontak ini belum dapat diaktifkan.</p>
            <div className="contact-card-bottom"><span className="status-pill status-muted" data-qa-role="disclosure">BELUM TERSEDIA</span><span className="disabled-action" data-qa-role="disclosure" aria-disabled="true">WhatsApp belum dikonfigurasi</span></div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-main">
        <div><a className="footer-wordmark" href="#hero">Laundry<span>Ceria</span></a><p>Materi website simulasi untuk validasi alur Web Studio.</p></div>
        <nav className="footer-nav" aria-label="Navigasi footer">{navItems.map(([label, id]) => <a data-qa-role="control" key={id} href={`#${id}`}>{label}</a>)}</nav>
        <a className="back-top" href="#preview-notice">Kembali ke atas <span aria-hidden="true">↑</span></a>
      </div>
      <div className="container footer-bottom" data-qa-role="disclosure"><span>PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED</span><span>BUKAN WEBSITE BISNIS NYATA</span></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <PreviewNotice />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ServicesPricing />
        <Turnaround />
        <HowItWorks />
        <PickupDelivery />
        <HoursLocation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
