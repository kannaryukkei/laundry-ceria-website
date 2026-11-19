import { useEffect, useRef, useState } from 'react';

const navigation = [
  { label: 'Layanan & harga', href: '#services-pricing' },
  { label: 'Proses', href: '#how-it-works' },
  { label: 'Antar-jemput', href: '#pickup-delivery' },
  { label: 'Jam & lokasi', href: '#hours-location' },
];

const kiloan = [
  { name: 'Cuci lipat', price: 'Rp8.000', unit: '/kg' },
  { name: 'Cuci setrika', price: 'Rp12.000', unit: '/kg' },
  { name: 'Setrika saja', price: 'Rp7.000', unit: '/kg' },
];

const satuan = [
  { name: 'Bed cover', price: 'Rp25.000', unit: '/potong' },
  { name: 'Selimut', price: 'Rp20.000', unit: '/potong' },
];

const process = [
  ['01', 'Pakaian diterima', 'Pakaian diserahkan langsung di ruko.'],
  ['02', 'Ditimbang di depan pelanggan', 'Berat pakaian ditimbang bersama saat diterima.'],
  ['03', 'Dicatat per pelanggan', 'Pesanan dicatat untuk setiap pelanggan.'],
  ['04', 'Masuk proses pencucian', 'Pakaian kemudian dicuci dan dikeringkan.'],
  ['05', 'Dilipat atau disetrika', 'Penyelesaian mengikuti layanan yang dipilih.'],
  ['06', 'Pelanggan dikabari', 'Pelanggan diberi kabar melalui WhatsApp setelah selesai.'],
];

const hours = [
  ['Senin', '08.00–20.00'],
  ['Selasa', '08.00–20.00'],
  ['Rabu', '08.00–20.00'],
  ['Kamis', '08.00–20.00'],
  ['Jumat', '08.00–20.00'],
  ['Sabtu', '08.00–20.00'],
  ['Minggu', '09.00–15.00'],
];

function PreviewNotice() {
  return (
    <aside className="preview-bar" aria-label="Status website">
      <span className="preview-dot" aria-hidden="true" />
      <strong>PREVIEW ONLY</strong>
      <span className="preview-divider" aria-hidden="true" />
      <span>Simulasi bisnis fiktif</span>
      <b>DEMO-ONLY</b>
      <b>NOT_APPROVED</b>
    </aside>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="masthead">
      <div className="page-shell masthead-inner">
        <a className="wordmark" href="#hero" aria-label="Laundry Ceria, kembali ke awal">
          <span>Laundry Ceria</span>
          <small>STUDIO PREVIEW</small>
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(value => !value)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-nav" className={open ? 'main-nav primary-nav is-open' : 'main-nav primary-nav'} aria-label="Navigasi utama">
          {navigation.map(item => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Info kunjungan <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="page-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span>LAUNDRY KILOAN</span><i /> <span>LAYANAN SATUAN</span></p>
          <h1>Lihat dulu.<br /><em>Baru laundry.</em></h1>
          <p className="hero-description">
            Pilihan layanan, daftar harga, dan waktu pengerjaan dalam satu tempat. Kenali informasinya sebelum menyerahkan pakaian.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services-pricing">Lihat daftar harga <span aria-hidden="true">↓</span></a>
            <a className="quiet-link" href="#how-it-works">Kenali prosesnya <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-footnote">Contoh website latihan. Seluruh informasi bisnis pada halaman ini bersifat fiktif.</p>
        </div>
        <div className="hero-side" aria-label="Ringkasan tarif demo">
          <div className="hero-side-top">
            <span>CATATAN TARIF</span>
            <span>NO. 001 / DEMO</span>
          </div>
          <div className="hero-price">
            <span>Mulai dari</span>
            <strong>7.000</strong>
            <small>RUPIAH / KG</small>
          </div>
          <div className="hero-side-rule" />
          <div className="hero-side-row"><span>Jenis layanan</span><b>05 pilihan</b></div>
          <div className="hero-side-row"><span>Waktu reguler</span><b>Biasanya 2 hari</b></div>
          <div className="hero-side-row"><span>Antar-jemput</span><b>Radius 2 km</b></div>
          <p className="hero-side-caption">RINGKASAN INFORMASI · BUKAN PENAWARAN NYATA</p>
        </div>
      </div>
      <div className="hero-bottom page-shell">
        <span>01 — INFORMASI USAHA</span>
        <span>GULIR UNTUK MELIHAT RINCIAN <b aria-hidden="true">↓</b></span>
      </div>
    </section>
  );
}

function SectionHeading({ index, eyebrow, title, description }: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-meta"><span>{index}</span><span>{eyebrow}</span></div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function PriceTable({ title, unit, rows }: {
  title: string;
  unit: string;
  rows: readonly { name: string; price: string; unit: string }[];
}) {
  return (
    <div className="price-table">
      <div className="price-table-heading">
        <h3>{title}</h3>
        <span>{unit}</span>
      </div>
      {rows.map((row, index) => (
        <div className="price-line" key={row.name}>
          <span className="price-line-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="price-line-name">{row.name}</span>
          <strong>{row.price}<small>{row.unit}</small></strong>
        </div>
      ))}
    </div>
  );
}

function ServicesPricing() {
  return (
    <section className="section pricing-section" id="services-pricing">
      <div className="page-shell">
        <SectionHeading
          index="01"
          eyebrow="DAFTAR LAYANAN"
          title="Harga, tanpa perlu menebak."
          description="Tarif dibedakan berdasarkan berat pakaian untuk layanan kiloan dan jumlah potong untuk layanan satuan."
        />
        <div className="pricing-grid">
          <PriceTable title="Laundry kiloan" unit="PER KILOGRAM" rows={kiloan} />
          <PriceTable title="Laundry satuan" unit="PER POTONG" rows={satuan} />
        </div>
        <p className="section-footnote"><span aria-hidden="true">i</span> Seluruh harga pada halaman ini merupakan data sintetis untuk eksperimen website.</p>
      </div>
    </section>
  );
}

function Turnaround() {
  return (
    <section className="section turnaround-section" id="turnaround">
      <div className="page-shell turnaround-layout">
        <div className="turnaround-intro">
          <SectionHeading
            index="02"
            eyebrow="WAKTU PENGERJAAN"
            title="Pilih waktu yang sesuai."
            description="Layanan reguler dan express memiliki waktu serta ketentuan berbeda."
          />
        </div>
        <div className="turnaround-board">
          <article className="turnaround-card regular-card">
            <span className="card-kicker">LAYANAN REGULER</span>
            <div className="large-duration">2<small>hari</small></div>
            <p>Biasanya 2 hari untuk layanan kiloan.</p>
            <span className="card-index">A / REGULER</span>
          </article>
          <article className="turnaround-card express-card">
            <div className="express-card-head"><span className="card-kicker">LAYANAN EXPRESS</span><b>+50%</b></div>
            <div className="express-time-row">
              <div><span>DITERIMA SEBELUM</span><strong>10.00</strong></div>
              <i aria-hidden="true">→</i>
              <div><span>SELESAI HARI YANG SAMA</span><strong>20.00</strong></div>
            </div>
            <p>Biaya tambahan 50% dari harga normal.</p>
            <span className="card-index">B / EXPRESS</span>
          </article>
        </div>
        <p className="turnaround-note">Ketentuan express ditampilkan sesuai data demo. Tidak ada syarat layanan tambahan yang diasumsikan.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="page-shell">
        <SectionHeading
          index="03"
          eyebrow="ALUR PELAYANAN"
          title="Dari serah terima hingga selesai."
          description="Urutan berikut merangkum proses yang dijelaskan dalam materi bisnis."
        />
        <ol className="process-list">
          {process.map(([number, title, description]) => (
            <li className="process-step" key={number}>
              <span className="process-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <span className="process-mark" aria-hidden="true">↗</span>
            </li>
          ))}
        </ol>
        <div className="wrap-note"><span className="wrap-note-symbol" aria-hidden="true">+</span><p>Setiap pesanan dibungkus plastik gratis setelah selesai.</p></div>
      </div>
    </section>
  );
}

function PickupDelivery() {
  return (
    <section className="section pickup-section" id="pickup-delivery">
      <div className="page-shell pickup-layout">
        <div className="pickup-copy">
          <SectionHeading
            index="04"
            eyebrow="ANTAR-JEMPUT"
            title="Ada batas area, ada aturan biaya."
            description="Layanan antar-jemput dalam data demo dibatasi pada radius 2 km dari ruko."
          />
          <div className="radius-display"><strong>2</strong><span>KM</span><small>RADIUS LAYANAN</small></div>
        </div>
        <div className="pickup-rules">
          <div className="pickup-rule pickup-free">
            <div><span>BERAT PESANAN</span><strong>Di atas 5 kg</strong></div>
            <b>GRATIS</b>
          </div>
          <div className="pickup-rule pickup-paid">
            <div><span>BERAT PESANAN</span><strong>5 kg atau kurang</strong></div>
            <b>Rp5.000</b>
          </div>
          <p className="pickup-clarification">Tepat 5 kg termasuk pada ketentuan biaya Rp5.000. Tidak ada peta atau pemesanan antar-jemput aktif pada demo ini.</p>
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section className="section location-section" id="hours-location">
      <div className="page-shell">
        <SectionHeading
          index="05"
          eyebrow="JAM & LOKASI"
          title="Informasi untuk kunjungan."
          description="Jam operasional dan alamat berikut hanya ditampilkan untuk kebutuhan simulasi."
        />
        <div className="location-grid">
          <div className="hours-sheet">
            <div className="sheet-top"><h3>Jam operasional</h3><span>7 HARI OPERASIONAL</span></div>
            {hours.map(([day, time]) => (
              <div className="hours-line" key={day}><span>{day}</span><strong>{time}</strong></div>
            ))}
          </div>
          <div className="address-sheet">
            <span className="address-warning">ALAMAT FIKTIF · DATA DEMO</span>
            <p className="address-label">ALAMAT DALAM MATERI LATIHAN</p>
            <h3>Jl. Melati No. 12,<br />Jakarta</h3>
            <p>Alamat ini bukan lokasi usaha nyata. Tidak tersedia petunjuk arah, peta, atau navigasi.</p>
            <span className="address-reference">LC / LOCATION REFERENCE 001</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="page-shell contact-layout">
        <div className="contact-intro">
          <p className="contact-overline">06 / LANGKAH BERIKUTNYA</p>
          <h2>Informasi sudah tersedia.<br /><em>Kontak belum.</em></h2>
          <p>Materi bisnis menyebut kunjungan langsung dan WhatsApp sebagai jalur konversi. Keduanya belum dapat digunakan pada preview fiktif ini.</p>
        </div>
        <div className="contact-options">
          <div className="contact-option">
            <span className="contact-option-number">01</span>
            <h3>Kunjungan langsung</h3>
            <p>Alamat yang tercantum merupakan data fiktif. Jangan gunakan sebagai tujuan perjalanan.</p>
            <a href="#hours-location">Lihat informasi demo <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-option contact-disabled" aria-disabled="true">
            <span className="contact-option-number">02</span>
            <h3>WhatsApp</h3>
            <p>Nomor WhatsApp usaha belum diberikan dalam materi sumber.</p>
            <span className="disabled-status">NOT CONFIGURED · NONAKTIF</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <a className="footer-wordmark" href="#hero">Laundry Ceria</a>
        <p>Website latihan untuk bisnis sintetis. Bukan representasi usaha nyata.</p>
        <a className="footer-top" href="#hero">Kembali ke atas ↑</a>
      </div>
      <div className="footer-status">
        <div className="page-shell"><strong>PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED</strong><span>INTERNAL EXPERIMENT / TEST 02</span></div>
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
