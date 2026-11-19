import { useEffect, useRef, useState } from 'react';
import { hours, processSteps, services } from './data';

const navItems = [
  ['Layanan & Harga', 'services-pricing'],
  ['Proses', 'how-it-works'],
  ['Antar-Jemput', 'pickup-delivery'],
  ['Jam & Lokasi', 'hours-location'],
] as const;

function ArrowUpRight() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function PreviewNotice() {
  return (
    <div className="preview-notice" id="preview-notice" role="note" aria-label="Pemberitahuan website demo">
      <div className="container notice-inner">
        <span className="notice-dot" aria-hidden="true" />
        <strong data-qa-role="disclosure">PREVIEW ONLY</strong>
        <span className="notice-divider" aria-hidden="true" />
        <span data-qa-role="disclosure">Data fiktif untuk latihan</span>
        <b data-qa-role="disclosure">DEMO-ONLY</b>
        <b data-qa-role="disclosure">NOT_APPROVED</b>
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
          <span className="wordmark-name">Laundry<span className="wordmark-light">Ceria</span></span>
          <span className="wordmark-tag" data-qa-role="metadata">DEMO</span>
        </a>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}</span>
          <span /><span />
        </button>
        <nav className={`primary-nav${menuOpen ? ' is-open' : ''}`} id="primary-nav" aria-label="Navigasi utama">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Info kontak <ArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <p className="section-label" data-qa-role="metadata">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description" data-qa-role="body">{description}</p>
    </div>
  );
}

function WasherIllustration() {
  return (
    <div className="washer-illustration" role="img" aria-label="Ilustrasi animasi mesin cuci dengan drum berputar dan gelembung, dibuat dengan CSS untuk demo">
      <div className="washer-machine">
        <div className="washer-control-panel">
          <span className="washer-brand">LC</span>
          <span className="washer-display" aria-hidden="true" />
          <span className="washer-knob" aria-hidden="true" />
        </div>
        <div className="washer-door">
          <div className="washer-rim">
            <div className="washer-glass">
              <div className="washer-drum">
                <span className="washer-cloth washer-cloth-one" />
                <span className="washer-cloth washer-cloth-two" />
                <span className="washer-cloth washer-cloth-three" />
                <span className="washer-water" />
              </div>
            </div>
          </div>
        </div>
        <div className="washer-machine-feet" aria-hidden="true"><i /><i /></div>
      </div>
      <span className="washer-bubble bubble-one" aria-hidden="true" />
      <span className="washer-bubble bubble-two" aria-hidden="true" />
      <span className="washer-bubble bubble-three" aria-hidden="true" />
      <span className="washer-sparkle sparkle-one" aria-hidden="true">✳</span>
      <span className="washer-sparkle sparkle-two" aria-hidden="true">✳</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow" data-qa-role="metadata">LAYANAN KILOAN & SATUAN</p>
            <h1>Laundry harian.<br /><em>Harga jelas sejak awal.</em></h1>
            <p className="hero-lead" data-qa-role="body">
              Pilih cuci lipat, cuci setrika, atau setrika saja. Untuk bed cover dan selimut, tarif dihitung per potong.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" data-qa-role="control" href="#price-estimator">
                Coba estimasi biaya <ArrowUpRight />
              </a>
              <a className="text-link" data-qa-role="control" href="#services-pricing">
                Lihat semua tarif <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-footnote" data-qa-role="disclosure">
              Contoh website untuk latihan. Bukan penawaran usaha nyata.
            </p>
          </div>
          <aside className="hero-experience-card">
            <div className="hero-experience-top">
              <span data-qa-role="metadata">LAUNDRY CERIA / MOTION STUDY</span>
              <span className="motion-indicator" data-qa-role="metadata"><i /> LIVE ILLUSTRATION</span>
            </div>
            <WasherIllustration />
            <div className="hero-experience-rate">
              <div>
                <span data-qa-role="metadata">TARIF REFERENSI · SETRIKA SAJA</span>
                <strong>Rp7.000<small>/kg</small></strong>
              </div>
              <span className="hero-demo-stamp" data-qa-role="disclosure">DATA LATIHAN</span>
            </div>
            <p className="hero-art-note" data-qa-role="disclosure">ILUSTRASI CSS · BUKAN FOTO TOKO</p>
          </aside>
        </div>
        <div className="hero-facts" aria-label="Ringkasan informasi layanan">
          <div className="hero-fact">
            <span data-qa-role="metadata">REGULER</span>
            <strong data-qa-role="body">Biasanya 2 hari</strong>
          </div>
          <div className="hero-fact">
            <span data-qa-role="metadata">EXPRESS</span>
            <strong data-qa-role="body">Sebelum 10.00 · +50%</strong>
          </div>
          <div className="hero-fact">
            <span data-qa-role="metadata">ANTAR-JEMPUT</span>
            <strong data-qa-role="body">Radius 2 km</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceGroup({
  title,
  subtitle,
  items,
  className,
}: {
  title: string;
  subtitle: string;
  items: readonly { name: string; price: string; unit: string }[];
  className: string;
}) {
  return (
    <article className={`price-panel ${className}`}>
      <div className="price-panel-heading">
        <div>
          <span className="panel-index" data-qa-role="metadata">{className === 'kiloan-panel' ? '01' : '02'}</span>
          <h3>{title}</h3>
        </div>
        <p data-qa-role="metadata">{subtitle}</p>
      </div>
      <div className="price-list">
        {items.map((item) => (
          <div className="price-row" key={item.name}>
            <span data-qa-role="body">{item.name}</span>
            <strong data-qa-role="body">{item.price}<small>{item.unit}</small></strong>
          </div>
        ))}
      </div>
      <div className="price-panel-foot" data-qa-role="disclosure">
        <span className="foot-mark" aria-hidden="true">✳</span>
        Tarif dari data fiktif untuk latihan
      </div>
    </article>
  );
}

function ServicesPricing() {
  return (
    <section className="section services-section" id="services-pricing">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata">
          <span>01 / DAFTAR LAYANAN</span>
          <span>HARGA · DATA DEMO</span>
        </div>
        <SectionHeading
          eyebrow="PILIH SESUAI KEBUTUHAN"
          title="Dua cara menghitung harga."
          description="Layanan kiloan dihitung berdasarkan berat pakaian. Bed cover dan selimut dihitung per potong."
        />
        <div className="price-grid">
          <PriceGroup title="Laundry kiloan" subtitle="HARGA PER KILOGRAM" items={services.kiloan} className="kiloan-panel" />
          <PriceGroup title="Laundry satuan" subtitle="HARGA PER POTONG" items={services.satuan} className="satuan-panel" />
        </div>
        <p className="pricing-note" data-qa-role="disclosure">
          Harga yang ditampilkan merupakan bagian dari fixture fiktif. Website ini tidak menambahkan biaya atau ketentuan lain.
        </p>
      </div>
    </section>
  );
}

function PriceEstimator() {
  const [category, setCategory] = useState<'kiloan' | 'satuan'>('kiloan');
  const [serviceName, setServiceName] = useState<string>(services.kiloan[0].name);
  const [quantity, setQuantity] = useState('');
  const [includePickup, setIncludePickup] = useState(false);

  const serviceOptions = category === 'kiloan' ? services.kiloan : services.satuan;
  const selectedService = serviceOptions.find((service) => service.name === serviceName) ?? serviceOptions[0];
  const unitPrice = Number(selectedService.price.replace(/\D/g, ''));
  const quantityValue = Number(quantity);
  const hasQuantity = quantity.trim() !== '' && Number.isFinite(quantityValue) && quantityValue > 0;
  const validIncrement = category === 'satuan'
    ? Number.isInteger(quantityValue)
    : Math.abs(quantityValue * 10 - Math.round(quantityValue * 10)) < 0.000001;
  const validQuantity = hasQuantity && validIncrement;
  const serviceTotal = validQuantity ? unitPrice * quantityValue : 0;
  const pickupFee = validQuantity && category === 'kiloan' && includePickup
    ? (quantityValue > 5 ? 0 : 5000)
    : 0;
  const estimatedTotal = serviceTotal + pickupFee;
  const formatMoney = (amount: number) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);

  const changeCategory = (nextCategory: 'kiloan' | 'satuan') => {
    setCategory(nextCategory);
    setServiceName(nextCategory === 'kiloan' ? services.kiloan[0].name : services.satuan[0].name);
    setQuantity('');
    setIncludePickup(false);
  };

  const resetEstimate = () => {
    setCategory('kiloan');
    setServiceName(services.kiloan[0].name);
    setQuantity('');
    setIncludePickup(false);
  };

  return (
    <section className="section estimate-section" id="price-estimator">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata">
          <span>SIMULASI / HITUNGAN SEDERHANA</span>
          <span>DEMO INTERAKTIF</span>
        </div>
        <div className="estimate-intro">
          <div>
            <p className="section-label" data-qa-role="metadata">SEBELUM MENENTUKAN PILIHAN</p>
            <h2>Mulai dari<br /><em>perkiraanmu.</em></h2>
          </div>
          <p data-qa-role="body">
            Pilih satu layanan dan masukkan jumlahnya untuk melihat hitungan berdasarkan tarif pada demo ini.
          </p>
        </div>

        <div className="estimate-workspace">
          <div className="estimate-controls">
            <div className="estimate-field">
              <span className="estimate-field-label" data-qa-role="metadata">01 / KATEGORI LAYANAN</span>
              <div className="estimate-category" role="group" aria-label="Pilih kategori layanan">
                <button
                  type="button"
                  className={category === 'kiloan' ? 'is-selected' : ''}
                  aria-pressed={category === 'kiloan'}
                  data-qa-role="control"
                  onClick={() => changeCategory('kiloan')}
                >
                  Laundry kiloan
                  <small>Per kilogram</small>
                </button>
                <button
                  type="button"
                  className={category === 'satuan' ? 'is-selected' : ''}
                  aria-pressed={category === 'satuan'}
                  data-qa-role="control"
                  onClick={() => changeCategory('satuan')}
                >
                  Laundry satuan
                  <small>Per potong</small>
                </button>
              </div>
            </div>

            <div className="estimate-field">
              <label className="estimate-field-label" htmlFor="estimate-service" data-qa-role="metadata">02 / PILIH LAYANAN</label>
              <select
                data-qa-role="control"
                id="estimate-service"
                value={serviceName}
                onChange={(event) => setServiceName(event.target.value)}
              >
                {serviceOptions.map((service) => (
                  <option key={service.name} value={service.name}>{service.name} — {service.price}{service.unit}</option>
                ))}
              </select>
            </div>

            <div className="estimate-field">
              <label className="estimate-field-label" htmlFor="estimate-quantity" data-qa-role="metadata">
                03 / {category === 'kiloan' ? 'MASUKKAN BERAT PERKIRAAN' : 'MASUKKAN JUMLAH POTONG'}
              </label>
              <div className="estimate-quantity-wrap">
                <input
                  id="estimate-quantity"
                  data-qa-role="control"
                  type="number"
                  min={category === 'kiloan' ? '0.1' : '1'}
                  step={category === 'kiloan' ? '0.1' : '1'}
                  inputMode="decimal"
                  placeholder={category === 'kiloan' ? 'Contoh: 3' : 'Contoh: 2'}
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
                <span data-qa-role="metadata">{category === 'kiloan' ? 'KG' : 'POTONG'}</span>
              </div>
              {quantity !== '' && !validQuantity && (
                <p className="estimate-validation" role="alert" data-qa-role="disclosure">
                  {hasQuantity ? (category === 'kiloan' ? 'Gunakan kelipatan 0,1 kg.' : 'Jumlah potong harus berupa bilangan bulat.') : 'Masukkan jumlah yang lebih besar dari nol.'}
                </p>
              )}
            </div>

            {category === 'kiloan' ? (
              <label className="estimate-pickup-option" htmlFor="estimate-pickup">
                <input
                  id="estimate-pickup"
                  data-qa-role="control"
                  type="checkbox"
                  checked={includePickup}
                  onChange={(event) => setIncludePickup(event.target.checked)}
                />
                <span>
                  <strong>Hitung juga biaya antar-jemput</strong>
                  <small>Saya memastikan alamat berada dalam radius maksimal 2 km.</small>
                </span>
              </label>
            ) : (
              <p className="estimate-pickup-note" data-qa-role="disclosure">
                Biaya antar-jemput tidak disimulasikan untuk layanan per potong karena data sumber menetapkan tarifnya berdasarkan berat pesanan.
              </p>
            )}
            <button className="estimate-reset" data-qa-role="control" type="button" onClick={resetEstimate}>Atur ulang simulasi</button>
          </div>

          <aside className="estimate-result" aria-label="Hasil simulasi harga">
            <div className="estimate-result-top">
              <span data-qa-role="metadata">RINGKASAN PERKIRAAN</span>
              <span className="result-live"><i /> LIVE CALCULATION</span>
            </div>
            <div className="estimate-total" aria-live="polite" aria-atomic="true">
              <span data-qa-role="metadata">ESTIMASI TOTAL</span>
              <output id="estimate-total" htmlFor="estimate-service estimate-quantity">
                {validQuantity ? formatMoney(estimatedTotal) : 'Isi jumlah di samping'}
              </output>
            </div>
            <div className="estimate-breakdown">
              <div>
                <span data-qa-role="body">{selectedService.name}</span>
                <strong>{validQuantity ? formatMoney(serviceTotal) : '—'}</strong>
              </div>
              {category === 'kiloan' && includePickup && (
                <div>
                  <span data-qa-role="body">Antar-jemput (radius maksimal 2 km)</span>
                  <strong>{validQuantity ? (pickupFee === 0 ? 'GRATIS' : formatMoney(pickupFee)) : '—'}</strong>
                </div>
              )}
              {validQuantity && (
                <div>
                  <span data-qa-role="body">Jumlah</span>
                  <strong>{category === 'kiloan' ? quantityValue.toLocaleString('id-ID') + ' kg' : quantityValue + ' potong'}</strong>
                </div>
              )}
            </div>
            <p className="estimate-disclosure" data-qa-role="disclosure">
              Simulasi ini hanya menghitung satu jenis layanan. Untuk kiloan, hasil memakai berat perkiraan; berat aktual ditimbang di depan pelanggan.
            </p>
            {category === 'kiloan' && (
              <p className="estimate-disclosure estimate-express-note" data-qa-role="disclosure">
                Express tidak dihitung di sini. Ketentuannya +50%, diterima sebelum 10.00 dan selesai hari yang sama pukul 20.00; layanan yang memenuhi syarat belum ditentukan dalam data demo.
              </p>
            )}
            <p className="estimate-local-note" data-qa-role="metadata">TIDAK DIKIRIM · TIDAK DISIMPAN · DEMO-ONLY</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Turnaround() {
  return (
    <section className="section turnaround-section" id="turnaround">
      <div className="container turnaround-layout">
        <div className="section-topline section-topline-dark" data-qa-role="metadata">
          <span>02 / WAKTU PENGERJAAN</span>
          <span>REGULER & EXPRESS</span>
        </div>
        <div className="turnaround-copy">
          <p className="eyebrow eyebrow-light" data-qa-role="metadata">WAKTU PENGERJAAN</p>
          <h2>Kapan cucian{' '}<br /><em>siap diambil?</em></h2>
          <p data-qa-role="body">Ketahui estimasi reguler dan ketentuan Express dari materi latihan.</p>
        </div>
        <div className="turnaround-details">
          <article className="regular-detail">
            <span className="detail-label" data-qa-role="metadata">LAYANAN REGULER</span>
            <div className="regular-time"><strong>2</strong><span>hari</span></div>
            <p data-qa-role="body">Biasanya 2 hari untuk layanan kiloan.</p>
          </article>
          <article className="express-detail">
            <div className="express-header">
              <span className="detail-label" data-qa-role="metadata">LAYANAN EXPRESS</span>
              <strong className="express-surcharge" data-qa-role="disclosure">+50%</strong>
            </div>
            <div className="express-timeline">
              <div>
                <span data-qa-role="metadata">DITERIMA SEBELUM</span>
                <strong>10.00</strong>
              </div>
              <span className="timeline-arrow" aria-hidden="true">→</span>
              <div>
                <span data-qa-role="metadata">SELESAI HARI YANG SAMA</span>
                <strong>20.00</strong>
              </div>
            </div>
            <p data-qa-role="disclosure">Biaya tambahan 50% dari harga normal. Ketentuan waktu mengikuti materi latihan.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata">
          <span>03 / ALUR PENGERJAAN</span>
          <span>DARI TERIMA HINGGA SELESAI</span>
        </div>
        <div className="process-heading-grid">
          <SectionHeading
            eyebrow="PROSES LAYANAN"
            title="Dari diterima sampai selesai."
            description="Urutan berikut merangkum proses yang disebutkan dalam materi latihan."
          />
          <p className="process-aside" data-qa-role="body">
            Pakaian ditimbang di depan pelanggan dan dicatat per pelanggan sebelum masuk proses pencucian.
          </p>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li className="process-item" key={step.number}>
              <span className="process-number" aria-hidden="true">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p data-qa-role="body">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="process-note">
          <div className="process-note-main" data-qa-role="disclosure">
            <span className="package-symbol" aria-hidden="true">▱</span>
            <p>Setiap pesanan dibungkus plastik gratis setelah selesai.</p>
          </div>
          <p className="process-note-secondary" data-qa-role="disclosure">
            Pemberitahuan melalui WhatsApp merupakan deskripsi alur pada fixture; nomor kontak belum dikonfigurasi.
          </p>
        </div>
      </div>
    </section>
  );
}

function PickupDelivery() {
  return (
    <section className="section pickup-section" id="pickup-delivery">
      <div className="container pickup-layout">
        <div className="section-topline" data-qa-role="metadata">
          <span>04 / ANTAR-JEMPUT</span>
          <span>RADIUS & BIAYA</span>
        </div>
        <div className="pickup-copy">
          <p className="eyebrow" data-qa-role="metadata">ANTAR-JEMPUT SEKITAR TOKO</p>
          <h2>Masih dalam<br /><em>jangkauan.</em></h2>
          <p data-qa-role="body">Layanan antar-jemput pada materi latihan memiliki radius maksimal 2 km dari ruko.</p>
          <div className="radius-display">
            <span className="radius-number">2</span>
            <div>
              <span data-qa-role="metadata">RADIUS MAKSIMAL</span>
              <strong>kilometer</strong>
            </div>
          </div>
        </div>
        <div className="pickup-rules">
          <article className="pickup-rule pickup-free">
            <div className="rule-top">
              <span data-qa-role="metadata">BERAT PESANAN</span>
              <span className="rule-symbol" aria-hidden="true">＋</span>
            </div>
            <p data-qa-role="body">Di atas 5 kg</p>
            <strong>GRATIS</strong>
            <span className="rule-description" data-qa-role="disclosure">Biaya antar-jemput</span>
          </article>
          <article className="pickup-rule pickup-paid">
            <div className="rule-top">
              <span data-qa-role="metadata">BERAT PESANAN</span>
              <span className="rule-symbol" aria-hidden="true">02</span>
            </div>
            <p data-qa-role="body">5 kg atau kurang</p>
            <strong>Rp5.000</strong>
            <span className="rule-description" data-qa-role="disclosure">Biaya antar-jemput</span>
          </article>
          <p className="pickup-footnote" data-qa-role="disclosure">
            Radius dan biaya di atas adalah data fiktif; bukan cakupan layanan aktif.
          </p>
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section className="section location-section" id="hours-location">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata">
          <span>05 / INFORMASI KUNJUNGAN</span>
          <span>JADWAL & ALAMAT DEMO</span>
        </div>
        <SectionHeading
          eyebrow="JAM OPERASIONAL & LOKASI"
          title="Catat sebelum berkunjung."
          description="Jadwal dan alamat berikut ditampilkan sesuai materi latihan fiktif."
        />
        <div className="location-grid">
          <article className="hours-panel" aria-labelledby="hours-title">
            <div className="panel-heading">
              <div>
                <span className="panel-index" data-qa-role="metadata">01</span>
                <h3 id="hours-title">Jam operasional</h3>
              </div>
              <span data-qa-role="metadata">SETIAP MINGGU</span>
            </div>
            <div className="hours-list">
              {hours.map((item) => (
                <div className="hours-row" key={item.day}>
                  <span data-qa-role="body">{item.day}</span>
                  <strong data-qa-role="body">{item.time}</strong>
                </div>
              ))}
            </div>
            <p className="card-footnote" data-qa-role="disclosure">Jadwal merupakan data dari fixture latihan.</p>
          </article>
          <article className="address-panel" aria-labelledby="address-title">
            <div className="address-topline">
              <span data-qa-role="metadata">ALAMAT</span>
              <b data-qa-role="disclosure">ALAMAT FIKTIF — DATA DEMO</b>
            </div>
            <h3 id="address-title">Jl. Melati No. 12,<br />Jakarta</h3>
            <p data-qa-role="body">Alamat ini hanya digunakan sebagai contoh latihan dan bukan lokasi usaha sungguhan.</p>
            <p className="address-warning" data-qa-role="disclosure">
              Tidak ada peta atau petunjuk arah untuk alamat fiktif ini.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-topline" data-qa-role="metadata">
          <span>06 / PILIHAN KONTAK</span>
          <span>PREVIEW ONLY</span>
        </div>
        <SectionHeading
          eyebrow="LANGKAH SELANJUTNYA"
          title="Pilihan kunjungan dan kontak."
          description="Alamat dan nomor kontak pada halaman ini masih merupakan data simulasi."
        />
        <div className="contact-grid">
          <article className="contact-card walkin-card">
            <div className="contact-card-top">
              <span className="contact-index" data-qa-role="metadata">01 / KUNJUNGAN</span>
              <span className="contact-marker" aria-hidden="true">↗</span>
            </div>
            <h3>Datang langsung</h3>
            <p data-qa-role="body">Alamat pada materi latihan bersifat fiktif dan tidak dapat digunakan untuk kunjungan nyata.</p>
            <a data-qa-role="control" href="#hours-location">Lihat jam dan alamat demo <ArrowUpRight /></a>
          </article>
          <article className="contact-card whatsapp-card" aria-labelledby="whatsapp-title">
            <div className="contact-card-top">
              <span className="contact-index" data-qa-role="metadata">02 / PESAN</span>
              <span className="status-code" data-qa-role="disclosure">NOT_CONFIGURED</span>
            </div>
            <h3 id="whatsapp-title">WhatsApp belum tersedia</h3>
            <p data-qa-role="body">Nomor WhatsApp usaha belum diberikan dalam materi. Preview ini tidak menyediakan tautan atau tombol chat.</p>
            <div className="disabled-label" aria-disabled="true" data-qa-role="disclosure">Belum dikonfigurasi</div>
          </article>
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
          <a className="footer-wordmark" href="#hero">Laundry<span>Ceria</span></a>
          <p data-qa-role="body">Contoh website untuk latihan AI-Operated Web Studio.</p>
        </div>
        <nav className="footer-nav" aria-label="Navigasi footer">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="back-top" href="#preview-notice">Kembali ke atas <span aria-hidden="true">↑</span></a>
      </div>
      <div className="container footer-bottom">
        <span data-qa-role="disclosure">PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED</span>
        <span data-qa-role="disclosure">BUKAN WEBSITE BISNIS NYATA</span>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.section-heading, .process-item, .price-row, .pickup-rule');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    targets.forEach((target) => {
      target.classList.add('motion-entry');
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <PreviewNotice />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ServicesPricing />
        <PriceEstimator />
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
