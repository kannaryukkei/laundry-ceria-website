import { type ReactNode, useEffect, useRef, useState } from 'react';
import { hours, processSteps, services } from './data';

const navItems = [
  ['Layanan & Harga', 'services-pricing'],
  ['Proses', 'how-it-works'],
  ['Antar-Jemput', 'pickup-delivery'],
  ['Jam & Lokasi', 'hours-location'],
] as const;

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
          <span>Laundry</span><span className="wordmark-accent">Ceria</span>
          <span className="wordmark-tag" data-qa-role="metadata">DEMO</span>
        </a>
        <button ref={menuToggleRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">{menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}</span>
          <span /><span />
        </button>
        <nav className={'primary-nav' + (menuOpen ? ' is-open' : '')} id="primary-nav" aria-label="Navigasi utama">
          {navItems.map(([label, id]) => (
            <a data-qa-role="control" key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Info kontak <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-scene" role="img" aria-label="Ilustrasi dekoratif tumpukan kain dan label layanan laundry">
      <div className="scene-sun" />
      <div className="scene-orbit orbit-a" />
      <div className="scene-orbit orbit-b" />
      <div className="cloth-stack">
        <div className="cloth cloth-blue"><span /></div>
        <div className="cloth cloth-coral"><span /></div>
        <div className="cloth cloth-yellow"><span /></div>
      </div>
      <div className="scene-ticket">
        <div className="ticket-top"><span data-qa-role="metadata">CATATAN LAUNDRY</span><span data-qa-role="metadata">SIMULASI</span></div>
        <p className="ticket-title">Layanan & harga</p>
        <div className="ticket-lines" aria-hidden="true"><span /><span /><span /></div>
        <div className="ticket-foot"><span data-qa-role="metadata">DATA LATIHAN</span><span aria-hidden="true">✳</span></div>
      </div>
      <div className="scene-sticker" aria-hidden="true">✳</div>
      <div className="scene-caption" data-qa-role="disclosure"><span /> BUKAN FOTO TOKO</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-qa-role="metadata"><span className="eyebrow-mark" /> LAYANAN HARIAN · DATA DEMO</p>
          <h1>Urusan laundry,<br /><em>jelas dari awal.</em></h1>
          <p className="hero-lead">Kenali layanan, harga, waktu pengerjaan, dan cara kerja Laundry Ceria dalam satu halaman.</p>
          <div className="hero-actions">
            <a className="button button-primary" data-qa-role="control" href="#services-pricing">Lihat layanan & harga <span aria-hidden="true">↘</span></a>
            <a className="text-link" data-qa-role="control" href="#hours-location">Jam operasional <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-note" data-qa-role="disclosure"><span /> Materi ini fiktif dan tidak mewakili usaha nyata.</p>
        </div>
        <HeroArtwork />
      </div>
      <div className="container hero-facts" aria-label="Ringkasan informasi">
        <div className="hero-fact"><span data-qa-role="metadata">HARGA MULAI</span><strong>Rp7.000<small data-qa-role="metadata">/kg</small></strong></div>
        <div className="hero-fact"><span data-qa-role="metadata">LAYANAN KILOAN</span><strong>Biasanya 2 hari</strong></div>
        <div className="hero-fact"><span data-qa-role="metadata">ANTAR-JEMPUT</span><strong>Radius 2 km</strong></div>
      </div>
    </section>
  );
}

function SectionIntro({ label, title, description }: { label: string; title: ReactNode; description: string }) {
  return (
    <div className="section-intro">
      <p className="section-label" data-qa-role="metadata">{label}</p>
      <h2>{title}</h2>
      <p className="section-description" data-qa-role="body">{description}</p>
    </div>
  );
}

function PriceGroup({ title, qualifier, items }: { title: string; qualifier: string; items: readonly { name: string; price: string; unit: string }[] }) {
  return (
    <div className="price-group">
      <div className="price-group-head">
        <h3>{title}</h3>
        <span data-qa-role="metadata">{qualifier}</span>
      </div>
      <div className="price-list">
        {items.map((item) => (
          <div className="price-row" key={item.name}>
            <span data-qa-role="body">{item.name}</span>
            <strong data-qa-role="body">{item.price}<small>{item.unit}</small></strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesPricing() {
  return (
    <section className="section-pad services-section" id="services-pricing">
      <div className="container">
        <div className="section-topline"><span data-qa-role="metadata">LAYANAN & HARGA</span><span data-qa-role="metadata">SEMUA ANGKA ADALAH DATA DEMO</span></div>
        <div className="pricing-layout">
          <SectionIntro label="PILIH SESUAI KEBUTUHAN" title={<>Harga terlihat.<br />Pilihan lebih mudah.</>} description="Layanan kiloan dihitung berdasarkan berat pakaian. Layanan satuan dihitung per potong." />
          <div className="price-board">
            <div className="price-board-head"><span data-qa-role="metadata">DAFTAR HARGA</span><span data-qa-role="metadata">RUPIAH · DATA LATIHAN</span></div>
            <div className="price-groups">
              <PriceGroup title="Laundry kiloan" qualifier="PER KG" items={services.kiloan} />
              <PriceGroup title="Laundry satuan" qualifier="PER POTONG" items={services.satuan} />
            </div>
            <p className="price-board-note" data-qa-role="disclosure"><span>i</span> Harga ini berasal dari bahan latihan. Tidak ada biaya lain yang ditambahkan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Turnaround() {
  return (
    <section className="section-pad turnaround-section" id="turnaround">
      <div className="container turnaround-grid">
        <div className="turnaround-copy">
          <p className="section-label section-label-light" data-qa-role="metadata">WAKTU PENGERJAAN</p>
          <h2>Tahu kapan<br />cucian selesai.</h2>
          <p data-qa-role="body">Perhatikan perbedaan waktu layanan reguler dan ketentuan ekspres berikut.</p>
        </div>
        <div className="turnaround-content">
          <div className="regular-time">
            <span data-qa-role="metadata">LAYANAN REGULER</span>
            <div className="regular-number">2<small>hari</small></div>
            <p data-qa-role="body">Untuk layanan kiloan, waktu pengerjaan biasanya 2 hari.</p>
          </div>
          <div className="express-time">
            <div className="express-head"><span data-qa-role="metadata">LAYANAN EKSPRES</span><b data-qa-role="metadata">+50%</b></div>
            <div className="express-flow">
              <div><small data-qa-role="metadata">MASUK SEBELUM</small><strong>10.00</strong></div>
              <span className="express-arrow" aria-hidden="true">→</span>
              <div><small data-qa-role="metadata">SELESAI HARI YANG SAMA</small><strong>20.00</strong></div>
            </div>
            <p data-qa-role="body">Biaya tambahan 50% dari harga normal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-pad process-section" id="how-it-works">
      <div className="container">
        <div className="section-topline"><span data-qa-role="metadata">PROSES LAYANAN</span><span data-qa-role="metadata">DARI TERIMA HINGGA SELESAI</span></div>
        <div className="process-heading">
          <SectionIntro label="ALUR PENGERJAAN" title={<>Enam langkah,<br />dari awal sampai selesai.</>} description="Ini adalah urutan proses yang tercantum dalam bahan latihan." />
          <p className="process-side-note" data-qa-role="body">Pakaian ditimbang di depan pelanggan dan dicatat untuk setiap pelanggan sebelum dicuci.</p>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-step-copy"><h3>{step.title}</h3><p data-qa-role="body">{step.detail}</p></div>
              <span className="process-step-mark" aria-hidden="true">↗</span>
            </li>
          ))}
        </ol>
        <div className="process-note"><span className="process-note-mark" aria-hidden="true">✳</span><p data-qa-role="body">Setiap pesanan dibungkus plastik gratis setelah selesai.</p><span data-qa-role="metadata">INFO DARI BAHAN LATIHAN</span></div>
      </div>
    </section>
  );
}

function PickupDelivery() {
  return (
    <section className="section-pad pickup-section" id="pickup-delivery">
      <div className="container pickup-grid">
        <div className="pickup-copy">
          <p className="section-label" data-qa-role="metadata">ANTAR-JEMPUT</p>
          <h2>Masih dalam<br />jangkauan.</h2>
          <p data-qa-role="body">Aturan antar-jemput dalam contoh ini berlaku pada radius 2 km dari ruko.</p>
          <div className="radius-mark">
            <span className="radius-circle radius-circle-one" />
            <span className="radius-circle radius-circle-two" />
            <strong>2<small>km</small></strong>
            <span className="radius-caption" data-qa-role="metadata">RADIUS LAYANAN</span>
          </div>
        </div>
        <div className="pickup-rules">
          <article className="pickup-rule pickup-free">
            <div className="pickup-rule-top"><span data-qa-role="metadata">BERAT PESANAN</span><span data-qa-role="metadata">ATURAN 1</span></div>
            <h3>Di atas<br />5 kg</h3>
            <div className="pickup-rule-bottom"><strong>GRATIS</strong><span data-qa-role="metadata">Biaya antar-jemput</span></div>
          </article>
          <article className="pickup-rule pickup-paid">
            <div className="pickup-rule-top"><span data-qa-role="metadata">BERAT PESANAN</span><span data-qa-role="metadata">ATURAN 2</span></div>
            <h3>5 kg<br />atau kurang</h3>
            <div className="pickup-rule-bottom"><strong>Rp5.000</strong><span data-qa-role="metadata">Biaya antar-jemput</span></div>
          </article>
          <p className="pickup-note" data-qa-role="disclosure">Radius dan biaya di atas merupakan data fiktif untuk latihan.</p>
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section className="section-pad location-section" id="hours-location">
      <div className="container">
        <div className="section-topline"><span data-qa-role="metadata">JAM & LOKASI</span><span data-qa-role="metadata">INFORMASI KUNJUNGAN · DATA DEMO</span></div>
        <div className="location-grid">
          <div className="location-intro">
            <SectionIntro label="SEBELUM BERKUNJUNG" title="Catat jamnya." description="Jadwal dan alamat berikut hanya ditampilkan sebagai data latihan." />
          </div>
          <div className="location-details">
            <article className="hours-panel">
              <div className="panel-heading"><h3>Jam operasional</h3><span data-qa-role="metadata">JADWAL MINGGU</span></div>
              <div className="hours-list">
                <div className="hours-row"><span data-qa-role="body">Senin–Sabtu</span><strong>{hours[0].time}</strong></div>
                <div className="hours-row"><span data-qa-role="body">Minggu</span><strong>{hours[6].time}</strong></div>
              </div>
            </article>
            <article className="address-panel">
              <div className="panel-heading"><h3>Alamat dalam contoh</h3><span>DATA FIKTIF</span></div>
              <p className="fictional-label" data-qa-role="disclosure">ALAMAT FIKTIF — DATA DEMO</p>
              <h4>Jl. Melati No. 12,<br />Jakarta</h4>
              <p data-qa-role="disclosure">Alamat ini bukan lokasi usaha sungguhan dan tidak dapat digunakan untuk petunjuk arah.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container">
        <div className="section-topline"><span data-qa-role="metadata">LANGKAH SELANJUTNYA</span><span data-qa-role="metadata">PREVIEW ONLY</span></div>
        <div className="contact-heading">
          <SectionIntro label="INFORMASI KONTAK" title={<>Sudah tahu<br />pilihannya?</>} description="Dua jalur ini adalah gambaran cara pelanggan ingin bertindak. Keduanya belum dapat digunakan pada website latihan." />
        </div>
        <div className="contact-grid">
          <article className="contact-card walkin-card">
            <div className="contact-card-top"><span data-qa-role="metadata">KUNJUNGAN</span><span className="contact-symbol" aria-hidden="true">↗</span></div>
            <h3>Datang langsung</h3>
            <p data-qa-role="body">Alamat yang ditampilkan hanya alamat contoh. Bukan lokasi toko sebenarnya.</p>
            <div className="contact-card-bottom"><span className="status-pill status-demo" data-qa-role="disclosure">ALAMAT DEMO</span><a data-qa-role="control" href="#hours-location">Lihat detail alamat <span aria-hidden="true">↗</span></a></div>
          </article>
          <article className="contact-card whatsapp-card" aria-labelledby="whatsapp-title">
            <div className="contact-card-top"><span data-qa-role="metadata">PESAN</span><span className="status-pill status-disabled" data-qa-role="disclosure">NOT_CONFIGURED</span></div>
            <h3 id="whatsapp-title">Hubungi via WhatsApp</h3>
            <p data-qa-role="body">Nomor WhatsApp belum diberikan. Tombol kontak belum dapat diaktifkan.</p>
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
        <div className="footer-brand">
          <a className="footer-wordmark" href="#hero">Laundry <span>Ceria</span></a>
          <p>Website latihan untuk mengenalkan layanan dan informasi usaha.</p>
        </div>
        <nav className="footer-nav" aria-label="Navigasi footer">
          {navItems.map(([label, id]) => <a data-qa-role="control" key={id} href={'#' + id}>{label}</a>)}
        </nav>
        <a className="back-top" data-qa-role="control" href="#preview-notice">Kembali ke atas <span aria-hidden="true">↑</span></a>
      </div>
      <div className="container footer-bottom" data-qa-role="disclosure">
        <span>PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED</span>
        <span>BUKAN WEBSITE BISNIS NYATA</span>
      </div>
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
