import { useEffect, useRef, useState } from 'react';
import { hours, processSteps, services } from './data';

const navItems = [
  ['Harga', 'services-pricing'],
  ['Proses', 'how-it-works'],
  ['Antar-jemput', 'pickup-delivery'],
  ['Jam & lokasi', 'hours-location'],
] as const;

type PriceItem = { name: string; price: string; unit: string };

function PreviewNotice() {
  return (
    <div className="preview-notice" id="preview-notice" role="note" aria-label="Pemberitahuan website demo">
      <div className="container notice-inner">
        <span className="notice-indicator" aria-hidden="true" />
        <strong>PREVIEW ONLY</strong>
        <span className="notice-separator" aria-hidden="true" />
        <span>Data fiktif untuk latihan</span>
        <b>DEMO-ONLY</b>
        <b>NOT_APPROVED</b>
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#hero" aria-label="Laundry Ceria, kembali ke awal">
          <span className="wordmark-name">Laundry <b>Ceria</b></span>
          <span className="wordmark-demo">DEMO</span>
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}</span>
          <span />
          <span />
        </button>
        <nav className={'primary-nav' + (menuOpen ? ' is-open' : '')} id="primary-nav" aria-label="Navigasi utama">
          {navItems.map(([label, id]) => (
            <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Info kontak <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-art" role="img" aria-label="Ilustrasi dekoratif kain terlipat dan daftar layanan laundry">
      <div className="art-grid" aria-hidden="true" />
      <div className="fabric-stack" aria-hidden="true">
        <div className="fabric fabric-back" />
        <div className="fabric fabric-middle" />
        <div className="fabric fabric-front" />
      </div>
      <div className="service-ticket" aria-hidden="true">
        <div className="ticket-top">
          <span>DAFTAR LAYANAN</span>
          <span className="ticket-mark">LC</span>
        </div>
        <div className="ticket-row"><span>Cuci lipat</span><strong>Rp8.000<small>/kg</small></strong></div>
        <div className="ticket-row"><span>Cuci setrika</span><strong>Rp12.000<small>/kg</small></strong></div>
        <div className="ticket-row"><span>Setrika saja</span><strong>Rp7.000<small>/kg</small></strong></div>
        <div className="ticket-bottom"><span>KILOAN</span><span>DATA DEMO</span></div>
      </div>
      <span className="art-caption">ILUSTRASI DEKORATIF · BUKAN FOTO TOKO</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker">Laundry kiloan & satuan</p>
          <h1>Laundry yang jelas. <span>Mulai dari harga.</span></h1>
          <p className="hero-lead">
            Kenali pilihan layanan, waktu pengerjaan, dan aturan antar-jemput sebelum menentukan kebutuhan laundry.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services-pricing">Lihat daftar harga <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#hours-location">Jam operasional <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-disclaimer">Contoh website untuk latihan. Bukan penawaran usaha nyata.</p>
        </div>
        <HeroIllustration />
      </div>
      <div className="container fact-strip" aria-label="Ringkasan informasi latihan">
        <div className="fact-item"><span>Harga kiloan terendah</span><strong>Rp7.000<small>/kg</small></strong></div>
        <div className="fact-item"><span>Waktu reguler</span><strong>Biasanya 2 hari</strong></div>
        <div className="fact-item"><span>Jangkauan antar-jemput</span><strong>Radius 2 km</strong></div>
      </div>
    </section>
  );
}

function SectionIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="section-intro">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function PriceGroup({ title, unitLabel, items }: { title: string; unitLabel: string; items: readonly PriceItem[] }) {
  return (
    <section className="price-group" aria-label={title}>
      <div className="price-group-heading">
        <h3>{title}</h3>
        <span>{unitLabel}</span>
      </div>
      <div className="price-rows">
        {items.map((item) => (
          <div className="price-row" key={item.name}>
            <span className="price-name">{item.name}</span>
            <strong className="price-value">{item.price}<small>{item.unit}</small></strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPricing() {
  return (
    <section className="section pricing-section" id="services-pricing">
      <div className="container">
        <SectionIntro
          label="Layanan & harga"
          title="Pilih sesuai kebutuhan."
          description="Harga dibedakan menurut berat pakaian atau jumlah potong."
        />
        <div className="pricing-layout">
          <PriceGroup title="Laundry kiloan" unitLabel="HARGA PER KG" items={services.kiloan} />
          <PriceGroup title="Laundry satuan" unitLabel="HARGA PER POTONG" items={services.satuan} />
        </div>
        <p className="pricing-disclaimer">Harga di atas berasal dari data fiktif untuk latihan. Tidak ada biaya atau ketentuan lain yang ditambahkan.</p>
      </div>
    </section>
  );
}

function Turnaround() {
  return (
    <section className="section turnaround-section" id="turnaround">
      <div className="container turnaround-layout">
        <div className="turnaround-copy">
          <p className="section-label section-label-light">Waktu pengerjaan</p>
          <h2>Berapa lama<br />pengerjaannya?</h2>
          <p>Waktu reguler dan express memiliki ketentuan yang berbeda.</p>
        </div>
        <div className="turnaround-details">
          <div className="regular-time">
            <span className="detail-label">LAYANAN REGULER</span>
            <div className="regular-number"><strong>2</strong><span>hari</span></div>
            <p>Biasanya 2 hari untuk layanan kiloan.</p>
          </div>
          <div className="express-time">
            <div className="express-heading"><span className="detail-label">LAYANAN EXPRESS</span><strong>+50%</strong></div>
            <div className="express-flow">
              <div><span>DITERIMA SEBELUM</span><strong>10.00</strong></div>
              <span className="flow-arrow" aria-hidden="true">→</span>
              <div><span>SELESAI HARI YANG SAMA</span><strong>20.00</strong></div>
            </div>
            <p>Biaya tambahan 50% dari harga normal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container">
        <SectionIntro
          label="Proses pengerjaan"
          title="Dari diterima sampai selesai."
          description="Berikut urutan proses berdasarkan materi latihan."
        />
        <ol className="process-list">
          {processSteps.map((step) => (
            <li className="process-item" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-copy">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="process-note">
          <span aria-hidden="true">＋</span>
          <p>Setiap pesanan dibungkus plastik gratis setelah selesai.</p>
        </div>
      </div>
    </section>
  );
}

function PickupDelivery() {
  return (
    <section className="section pickup-section" id="pickup-delivery">
      <div className="container pickup-layout">
        <div className="pickup-copy">
          <p className="section-label">Antar-jemput</p>
          <h2>Masih dalam<br />jangkauan.</h2>
          <p>Area layanan antar-jemput memiliki radius 2 km dari ruko.</p>
          <div className="radius-mark" aria-label="Radius layanan 2 kilometer">
            <span className="radius-number">2</span>
            <span className="radius-unit">km</span>
            <span className="radius-caption">RADIUS LAYANAN</span>
          </div>
        </div>
        <div className="pickup-rules">
          <div className="pickup-rule pickup-free">
            <div><span>BERAT PESANAN</span><strong>Lebih dari 5 kg</strong></div>
            <b>GRATIS</b>
          </div>
          <div className="pickup-rule pickup-paid">
            <div><span>BERAT PESANAN</span><strong>5 kg atau kurang</strong></div>
            <b>Rp5.000</b>
          </div>
          <p className="pickup-note">Ketentuan radius dan biaya di atas merupakan data fiktif untuk latihan.</p>
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section className="section location-section" id="hours-location">
      <div className="container">
        <SectionIntro
          label="Jam & lokasi"
          title="Catat sebelum berkunjung."
          description="Jadwal dan alamat berikut ditampilkan sesuai materi latihan fiktif."
        />
        <div className="location-layout">
          <section className="hours-panel" aria-labelledby="hours-title">
            <div className="panel-heading">
              <h3 id="hours-title">Jam operasional</h3>
              <span>SETIAP MINGGU</span>
            </div>
            <div className="hours-list">
              {hours.map((item) => (
                <div className="hours-row" key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </section>
          <section className="address-panel" aria-labelledby="address-title">
            <div className="address-topline"><span>ALAMAT</span><b>ALAMAT FIKTIF — DATA DEMO</b></div>
            <h3 id="address-title">Jl. Melati No. 12,<br />Jakarta</h3>
            <p>Alamat ini hanya digunakan sebagai contoh latihan dan bukan lokasi usaha sungguhan.</p>
          </section>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionIntro
          label="Informasi kontak"
          title="Sebelum menentukan langkah."
          description="Kontak dan alamat pada halaman ini belum dapat digunakan untuk kunjungan atau komunikasi nyata."
        />
        <div className="contact-layout">
          <div className="contact-option walkin-card">
            <span className="contact-index">01 / KUNJUNGAN</span>
            <h3>Datang langsung</h3>
            <p>Alamat pada materi latihan bersifat fiktif dan tidak dapat digunakan untuk kunjungan nyata.</p>
            <a href="#hours-location">Lihat detail alamat <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-option contact-disabled">
            <div className="contact-index-row"><span className="contact-index">02 / PESAN</span><b>NOT_CONFIGURED</b></div>
            <h3>WhatsApp belum tersedia</h3>
            <p>Nomor WhatsApp usaha belum diberikan dalam materi, sehingga jalur kontak ini belum dapat diaktifkan.</p>
            <span className="disabled-label" aria-disabled="true">Belum tersedia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="footer-wordmark" href="#hero">Laundry <b>Ceria</b></a>
          <p>Contoh website untuk latihan AI-Operated Web Studio.</p>
        </div>
        <nav className="footer-nav" aria-label="Navigasi footer">
          {navItems.map(([label, id]) => <a key={id} href={'#' + id}>{label}</a>)}
        </nav>
        <a className="back-to-top back-top" href="#preview-notice">Kembali ke atas <span aria-hidden="true">↑</span></a>
      </div>
      <div className="container footer-bottom">
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
