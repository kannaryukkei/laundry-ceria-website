import { type ReactNode, useEffect, useRef, useState } from 'react';
import { hours, processSteps, services } from './data';

const navItems = [
  ['Harga', 'services-pricing'],
  ['Proses', 'how-it-works'],
  ['Antar-jemput', 'pickup-delivery'],
  ['Jam buka', 'hours-location'],
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
          <span className="wordmark-symbol" aria-hidden="true"><i /><i /><i /></span>
          <span className="wordmark-name">Laundry <b>Ceria</b></span>
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
    <div className="hero-visual" role="img" aria-label="Ilustrasi dekoratif label kain dan daftar layanan Laundry Ceria">
      <div className="visual-halo halo-one" />
      <div className="visual-halo halo-two" />
      <div className="fabric-swatch swatch-sage" />
      <div className="fabric-swatch swatch-lilac" />
      <div className="fabric-swatch swatch-cream" />
      <div className="thread-loop" />
      <div className="wash-tag">
        <div className="tag-hole" />
        <div className="tag-top"><span>LAUNDRY CERIA</span><span>DATA DEMO</span></div>
        <p>Daftar layanan</p>
        <div className="tag-row"><span>Cuci lipat</span><strong>8.000<small>/kg</small></strong></div>
        <div className="tag-row"><span>Cuci setrika</span><strong>12.000<small>/kg</small></strong></div>
        <div className="tag-row"><span>Setrika saja</span><strong>7.000<small>/kg</small></strong></div>
        <div className="tag-foot"><span>CATATAN HARGA</span><span aria-hidden="true">✳</span></div>
      </div>
      <div className="visual-caption" data-qa-role="disclosure"><span /> ILUSTRASI DEKORATIF · BUKAN FOTO TOKO</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-qa-role="metadata"><span /> LAUNDRY KILOAN & SATUAN</p>
          <h1>Layanan dan harga,<br /><span>terlihat sejak awal.</span></h1>
          <p className="hero-lead" data-qa-role="body">Lihat pilihan laundry, waktu pengerjaan, dan aturan antar-jemput sebelum menentukan kebutuhan.</p>
          <div className="hero-actions">
            <a className="button button-primary" data-qa-role="control" href="#services-pricing">Lihat daftar harga <span aria-hidden="true">↘</span></a>
            <a className="text-link" data-qa-role="control" href="#hours-location">Jam operasional <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-note" data-qa-role="disclosure"><span /> Website ini hanya contoh latihan, bukan penawaran usaha nyata.</p>
        </div>
        <HeroArtwork />
      </div>
      <div className="container quick-facts" aria-label="Ringkasan informasi layanan">
        <div className="quick-fact"><span data-qa-role="metadata">HARGA KILOAN MULAI</span><strong>Rp7.000<small>/kg</small></strong></div>
        <div className="quick-fact"><span data-qa-role="metadata">WAKTU REGULER</span><strong>Biasanya 2 hari</strong></div>
        <div className="quick-fact"><span data-qa-role="metadata">ANTAR-JEMPUT</span><strong>Radius 2 km</strong></div>
      </div>
    </section>
  );
}

function SectionTitle({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="section-title">
      <p className="section-label" data-qa-role="metadata">{label}</p>
      <h2>{title}</h2>
      <p className="section-description" data-qa-role="body">{description}</p>
    </div>
  );
}

function PriceGroup({ title, unitLabel, items }: { title: string; unitLabel: string; items: readonly { name: string; price: string; unit: string }[] }) {
  return (
    <section className="price-group">
      <div className="price-group-heading">
        <h3>{title}</h3>
        <span data-qa-role="metadata">{unitLabel}</span>
      </div>
      <div className="price-rows">
        {items.map((item) => (
          <div className="price-row" key={item.name}>
            <span data-qa-role="body">{item.name}</span>
            <strong data-qa-role="body">{item.price}<small>{item.unit}</small></strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPricing() {
  return (
    <section className="section-pad services-section" id="services-pricing">
      <div className="container">
        <div className="section-topline"><span data-qa-role="metadata">DAFTAR LAYANAN</span><span data-qa-role="metadata">SEMUA HARGA DALAM DATA DEMO</span></div>
        <div className="pricing-intro">
          <SectionTitle label="PILIH SESUAI KEBUTUHAN" title="Mulai dari yang sederhana." description="Layanan kiloan dihitung berdasarkan berat pakaian. Layanan satuan dihitung per potong." />
          <p className="pricing-side-note" data-qa-role="disclosure">Lima pilihan layanan<br />dalam dua kelompok.</p>
        </div>
        <div className="price-board">
          <PriceGroup title="Laundry kiloan" unitLabel="HARGA PER KG" items={services.kiloan} />
          <PriceGroup title="Laundry satuan" unitLabel="HARGA PER POTONG" items={services.satuan} />
          <p className="price-board-note" data-qa-role="disclosure"><span>i</span> Harga ini berasal dari bahan latihan. Tidak ada biaya atau ketentuan lain yang ditambahkan.</p>
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
          <h2>Ketahui kapan<br />cucian selesai.</h2>
          <p data-qa-role="body">Waktu reguler dan layanan ekspres memiliki ketentuan yang berbeda.</p>
        </div>
        <div className="turnaround-board">
          <div className="regular-time">
            <div className="time-label" data-qa-role="metadata">LAYANAN REGULER</div>
            <div className="regular-value">2<span>hari</span></div>
            <p data-qa-role="body">Waktu pengerjaan layanan kiloan biasanya 2 hari.</p>
          </div>
          <div className="express-time">
            <div className="express-top"><span data-qa-role="metadata">LAYANAN EKSPRES</span><b data-qa-role="metadata">+50%</b></div>
            <div className="express-timeline">
              <div><small data-qa-role="metadata">DITERIMA SEBELUM</small><strong>10.00</strong></div>
              <span className="timeline-arrow" aria-hidden="true">→</span>
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
        <div className="section-topline"><span data-qa-role="metadata">ALUR LAYANAN</span><span data-qa-role="metadata">DARI TERIMA HINGGA SELESAI</span></div>
        <div className="process-intro">
          <SectionTitle label="LANGKAH DEMI LANGKAH" title="Urutannya sederhana." description="Berikut proses layanan berdasarkan bahan latihan." />
          <p className="process-aside" data-qa-role="body">Pakaian ditimbang di depan pelanggan dan dicatat untuk setiap pelanggan sebelum dicuci.</p>
        </div>
        <ol className="process-steps">
          {processSteps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div><h3>{step.title}</h3><p data-qa-role="body">{step.detail}</p></div>
            </li>
          ))}
        </ol>
        <div className="process-footnote"><span aria-hidden="true">✳</span><p data-qa-role="body">Setiap pesanan dibungkus plastik gratis setelah selesai.</p><small data-qa-role="metadata">INFORMASI DARI BAHAN LATIHAN</small></div>
      </div>
    </section>
  );
}

function PickupDelivery() {
  return (
    <section className="section-pad pickup-section" id="pickup-delivery">
      <div className="container pickup-grid">
        <div className="pickup-copy">
          <p className="section-label" data-qa-role="metadata">LAYANAN ANTAR-JEMPUT</p>
          <h2>Masih dalam<br />jangkauan.</h2>
          <p data-qa-role="body">Aturan antar-jemput dalam contoh ini berlaku pada radius 2 km dari ruko.</p>
          <div className="radius-badge"><span>2</span><small>km</small><b data-qa-role="metadata">RADIUS LAYANAN</b></div>
        </div>
        <div className="pickup-table">
          <div className="pickup-table-heading"><span>BERAT PESANAN</span><span>BIAYA ANTAR-JEMPUT</span></div>
          <div className="pickup-row pickup-free">
            <div><small data-qa-role="metadata">LEBIH DARI</small><strong>5 kg</strong></div>
            <b>GRATIS</b>
          </div>
          <div className="pickup-row pickup-paid">
            <div><small data-qa-role="metadata">5 KG ATAU KURANG</small><strong>5 kg</strong></div>
            <b>Rp5.000</b>
          </div>
          <p className="pickup-note" data-qa-role="disclosure">Ketentuan radius dan biaya di atas merupakan data fiktif untuk latihan.</p>
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section className="section-pad location-section" id="hours-location">
      <div className="container">
        <div className="section-topline"><span data-qa-role="metadata">INFORMASI KUNJUNGAN</span><span data-qa-role="metadata">JAM & LOKASI · DATA DEMO</span></div>
        <div className="location-intro">
          <SectionTitle label="SEBELUM BERKUNJUNG" title="Catat jam bukanya." description="Jadwal dan alamat berikut ditampilkan sesuai materi latihan fiktif." />
        </div>
        <div className="location-grid">
          <article className="hours-panel">
            <div className="panel-heading"><h3>Jam operasional</h3><span data-qa-role="metadata">SETIAP MINGGU</span></div>
            <div className="hours-row"><span data-qa-role="body">Senin–Sabtu</span><strong>{hours[0].time}</strong></div>
            <div className="hours-row"><span data-qa-role="body">Minggu</span><strong>{hours[6].time}</strong></div>
          </article>
          <article className="address-panel">
            <div className="address-heading"><span data-qa-role="metadata">ALAMAT</span><span className="fictional-label" data-qa-role="disclosure">ALAMAT FIKTIF — DATA DEMO</span></div>
            <h3>Jl. Melati No. 12,<br />Jakarta</h3>
            <p data-qa-role="disclosure">Alamat ini hanya digunakan sebagai contoh latihan dan bukan lokasi usaha sungguhan.</p>
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
        <div className="section-topline"><span data-qa-role="metadata">LANGKAH SELANJUTNYA</span><span data-qa-role="metadata">PREVIEW ONLY</span></div>
        <div className="contact-intro">
          <SectionTitle label="INFORMASI KONTAK" title="Pilih jalur yang tersedia." description="Kedua pilihan ini masih berupa contoh dan belum dapat digunakan untuk kunjungan atau pemesanan nyata." />
        </div>
        <div className="contact-grid">
          <article className="contact-card walkin-card">
            <div className="contact-card-top"><span data-qa-role="metadata">KUNJUNGAN LANGSUNG</span><span aria-hidden="true">↗</span></div>
            <h3>Datang ke toko</h3>
            <p data-qa-role="body">Alamat pada materi latihan bersifat fiktif dan tidak dapat digunakan untuk kunjungan nyata.</p>
            <div className="contact-card-bottom"><span className="status-pill" data-qa-role="disclosure">ALAMAT DEMO</span><a data-qa-role="control" href="#hours-location">Lihat detail alamat <span aria-hidden="true">↗</span></a></div>
          </article>
          <article className="contact-card whatsapp-card" aria-labelledby="whatsapp-title">
            <div className="contact-card-top"><span data-qa-role="metadata">KONTAK PESAN</span><span className="status-pill status-disabled" data-qa-role="disclosure">NOT_CONFIGURED</span></div>
            <h3 id="whatsapp-title">WhatsApp belum tersedia</h3>
            <p data-qa-role="body">Nomor WhatsApp usaha belum diberikan dalam materi. Karena itu, jalur kontak ini belum dapat diaktifkan.</p>
            <div className="contact-card-bottom"><span className="status-pill status-muted" data-qa-role="disclosure">BELUM TERSEDIA</span><span className="disabled-action" aria-disabled="true" data-qa-role="disclosure">Belum dikonfigurasi</span></div>
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
          <p data-qa-role="disclosure">Materi website simulasi untuk validasi alur Web Studio.</p>
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
