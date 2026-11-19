import { useEffect, useRef, useState } from 'react';
import { hours, processSteps, services } from './data';

const navItems = [['Layanan', 'services-pricing'], ['Proses', 'how-it-works'], ['Antar-jemput', 'pickup-delivery'], ['Info', 'hours-location']] as const;

function PreviewNotice() {
  return <div className="preview-notice" id="preview-notice"><div className="container notice-inner"><span className="notice-dot" aria-hidden="true" /><strong>PREVIEW ONLY</strong><span>Seluruh informasi adalah data fiktif untuk eksperimen internal</span><b>DEMO-ONLY</b><b>NOT_APPROVED</b></div></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <header className="site-header"><div className="container header-inner">
    <a className="wordmark" href="#hero" aria-label="Laundry Ceria — kembali ke atas"><span className="wordmark-symbol" aria-hidden="true">LC</span><span>Laundry <b>Ceria</b><small>FRESH · ORDERLY · DEMO</small></span></a>
    <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(v => !v)}><span className="sr-only">{open ? 'Tutup navigasi' : 'Buka navigasi'}</span><i /><i /></button>
    <nav id="primary-nav" className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Navigasi utama">{navItems.map(([label,id]) => <a key={id} href={'#'+id} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Info kontak <span aria-hidden="true">↗</span></a></nav>
  </div></header>;
}

function HeroArtwork() {
  return <div className="hero-visual">
    <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
    <div className="visual-stamp"><span>LAUNDRY</span><b>CL</b><span>DEMO STUDY · 06</span></div>
    <picture className="hero-image">
      <source srcSet="/media/laundry-editorial-wide.svg" media="(min-width: 760px)" type="image/svg+xml" />
      <img src="/media/laundry-editorial.svg" width="720" height="760" alt="Ilustrasi konseptual tumpukan kain bersih, botol deterjen tanpa merek, dan aliran air; bukan foto tempat usaha" fetchPriority="high" />
    </picture>
    <div className="visual-note"><span className="note-star" aria-hidden="true">✳</span><span>Rapi dari awal.<br /><b>Jelas setiap langkah.</b></span></div>
    <span className="visual-caption">ILUSTRASI KONSEPTUAL · BUKAN FOTO TOKO</span>
  </div>;
}

function Hero() {
  return <section className="hero" id="hero"><div className="container hero-grid">
    <div className="hero-copy"><p className="eyebrow"><span /> Laundry kiloan & satuan</p><h1>Urusan pakaian,<br /><em>lebih tertata.</em></h1><p className="hero-lead">Lihat pilihan layanan, harga, dan waktu pengerjaan dengan jelas sebelum menentukan kebutuhan laundry.</p>
      <div className="hero-actions"><a className="button button-dark" href="#services-pricing">Jelajahi layanan <span aria-hidden="true">↘</span></a><a className="quiet-link" href="#how-it-works">Kenali prosesnya <span aria-hidden="true">↓</span></a></div>
      <div className="hero-footnote"><span className="footnote-line" />Contoh website untuk pengembangan internal, bukan penawaran usaha nyata.</div>
    </div><HeroArtwork />
  </div>
  <div className="container hero-ribbon"><div><span>01 / PILIHAN</span><b>3 layanan kiloan</b></div><div><span>02 / SATUAN</span><b>2 layanan khusus</b></div><div><span>03 / REGULER</span><b>Biasanya 2 hari</b></div><div><span>04 / JANGKAUAN</span><b>Radius 2 km</b></div></div>
  </section>;
}

function SectionHeading({ index, label, title, copy, light=false }: {index:string;label:string;title:string;copy:string;light?:boolean}) {
  return <div className={light ? 'section-heading light' : 'section-heading'}><div className="heading-index">{index}<span /></div><div><p className="eyebrow">{label}</p><h2>{title}</h2><p className="section-copy">{copy}</p></div></div>;
}

function PriceCard({title,subtitle,items,featured=false}: {title:string;subtitle:string;items:readonly {name:string;price:string;unit:string}[];featured?:boolean}) {
  return <article className={featured ? 'price-card featured' : 'price-card'}><div className="price-card-head"><div><span>{subtitle}</span><h3>{title}</h3></div><span className="card-mark" aria-hidden="true">✳</span></div><div className="price-list">{items.map(item=><div className="price-row" key={item.name}><span>{item.name}</span><strong>{item.price}<small>{item.unit}</small></strong></div>)}</div><div className="price-card-foot"><span>Harga pada fixture demo</span><span>↗</span></div></article>;
}

function ServicesPricing() {
  return <section className="section services-section" id="services-pricing"><div className="container"><SectionHeading index="01" label="Layanan & harga" title={<>Pilihan yang jelas.<br /><em>Tanpa tebak-tebakan.</em></>} copy="Setiap layanan punya cara hitung yang berbeda. Bandingkan jenis layanan dan satuannya di sini." />
    <div className="pricing-grid"><PriceCard title="Laundry kiloan" subtitle="BERDASARKAN BERAT" items={services.kiloan} featured /><PriceCard title="Laundry satuan" subtitle="BERDASARKAN POTONG" items={services.satuan} /></div>
    <p className="section-footnote"><span>ⓘ</span> Semua harga merupakan data fiktif untuk latihan. Tidak ada biaya tambahan lain yang diasumsikan.</p>
  </div></section>;
}

function Turnaround() {
  return <section className="turnaround-section"><div className="container turnaround-grid"><div className="turnaround-intro"><p className="eyebrow">Waktu pengerjaan</p><h2>Waktu yang<br />bisa <em>direncanakan.</em></h2><p>Ketentuan reguler dan express ditampilkan terpisah agar mudah dibandingkan.</p><span className="turnaround-index">02 — 07</span></div>
    <div className="time-cards"><article className="time-card regular"><span className="time-kicker">LAYANAN REGULER</span><div className="time-value">2<small>hari</small></div><p>Biasanya 2 hari untuk layanan kiloan.</p><div className="time-rule" /><span className="time-bottom">PENGERJAAN REGULER</span></article>
      <article className="time-card express"><div className="express-top"><span className="time-kicker">LAYANAN EXPRESS</span><b>+50%</b></div><p className="express-title">Selesai di<br />hari yang sama.</p><div className="express-timeline"><div><span>DITERIMA SEBELUM</span><strong>10.00</strong></div><span className="timeline-arrow" aria-hidden="true">→</span><div><span>SELESAI</span><strong>20.00</strong></div></div><p className="express-note">Biaya tambahan 50% dari harga normal.</p></article></div>
  </div></section>;
}

function Process() {
  return <section className="section process-section" id="how-it-works"><div className="container"><SectionHeading index="03" label="Alur pengerjaan" title={<>Dari meja timbang<br />sampai <em>siap diambil.</em></>} copy="Enam langkah sederhana berdasarkan alur operasional pada materi latihan." />
    <ol className="process-grid">{processSteps.map((step,i)=><li className="process-card" key={step.number}><div className="process-card-top"><span>{step.number}</span><span aria-hidden="true">{['↘','≋','▤','✳','▱','◌'][i]}</span></div><h3>{step.title}</h3><p>{step.detail}</p>{i===5 && <small>Pemberitahuan dijelaskan sebagai proses; WhatsApp belum dikonfigurasi.</small>}</li>)}</ol>
    <div className="wrap-note"><span className="wrap-icon" aria-hidden="true">✳</span><div><b>Sentuhan akhir</b><p>Setiap pesanan dibungkus plastik gratis setelah selesai.</p></div><span className="wrap-tag">INFORMASI DEMO</span></div>
  </div></section>;
}

function Pickup() {
  return <section className="pickup-section" id="pickup-delivery"><div className="container pickup-grid"><div className="pickup-intro"><p className="eyebrow">Antar-jemput</p><h2>Lebih dekat,<br /><em>lebih praktis.</em></h2><p>Materi latihan menetapkan jangkauan antar-jemput dalam radius 2 km dari ruko fiktif.</p><div className="radius-art"><div className="radius-ring ring-outer" /><div className="radius-ring ring-inner" /><div className="radius-core"><b>2</b><span>KM</span></div><span className="radius-caption">RADIUS LAYANAN</span></div></div>
    <div className="pickup-details"><div className="pickup-detail free"><div><span>BERAT PESANAN</span><h3>Lebih dari 5 kg</h3><p>Biaya antar-jemput sesuai fixture.</p></div><strong>GRATIS</strong></div><div className="pickup-detail paid"><div><span>BERAT PESANAN</span><h3>5 kg atau kurang</h3><p>Termasuk pesanan tepat 5 kg.</p></div><strong>Rp5.000</strong></div><div className="pickup-disclaimer">Ketentuan ini hanya simulasi. Tidak ada peta, pelacakan lokasi, atau pemesanan aktif.</div></div>
  </div></section>;
}

function HoursLocation() {
  return <section className="section info-section" id="hours-location"><div className="container"><SectionHeading index="04" label="Jam & lokasi" title={<>Simpan informasinya.<br /><em>Rencanakan kunjungan.</em></>} copy="Jadwal dan alamat berikut ditampilkan untuk melengkapi simulasi pengalaman website." />
    <div className="info-grid"><article className="hours-card"><div className="card-topline"><span>JADWAL MINGGUAN</span><span>01 — 07</span></div><h3>Jam operasional</h3><div className="hours-list">{hours.map((item,i)=><div className={i===6?'hours-row sunday':'hours-row'} key={item.day}><span>{item.day}</span><b>{item.time}</b></div>)}</div><p className="card-caption">Jam pada seluruh hari adalah data demo.</p></article>
      <article className="address-card"><div className="card-topline"><span>ALAMAT</span><b>ALAMAT FIKTIF — DATA DEMO</b></div><div className="address-graphic" aria-hidden="true"><span>JAKARTA</span><i /><i /><i /></div><h3>Jl. Melati No. 12,<br />Jakarta</h3><p>Alamat ini sepenuhnya fiktif dan tidak dapat digunakan untuk kunjungan nyata.</p><span className="address-bottom">BUKAN LOKASI USAHA SUNGGUHAN</span></article></div>
  </div></section>;
}

function FAQ() {
  const items=[
    ['Apa saja layanan yang tersedia?','Tersedia cuci lipat, cuci setrika, setrika saja, serta layanan satuan bed cover dan selimut.'],
    ['Berapa lama pengerjaan reguler?','Pengerjaan kiloan biasanya 2 hari.'],
    ['Bagaimana ketentuan express?','Pakaian yang diterima sebelum pukul 10.00 selesai pada hari yang sama pukul 20.00, dengan biaya tambahan 50% dari harga normal.'],
    ['Apakah tersedia antar-jemput?','Tersedia dalam radius 2 km dari ruko. Pesanan di atas 5 kg gratis; pesanan 5 kg atau kurang dikenai Rp5.000.'],
    ['Bagaimana cara mengetahui pesanan selesai?','Dalam alur fixture, pelanggan diberi kabar melalui WhatsApp setelah pakaian selesai. Nomor WhatsApp belum tersedia sehingga fitur kontak tidak aktif.']
  ];
  const [active,setActive]=useState<number|null>(0);
  return <section className="section faq-section"><div className="container faq-grid"><div><SectionHeading index="05" label="Pertanyaan umum" title={<>Hal penting,<br /><em>terjawab singkat.</em></>} copy="Ringkasan ketentuan yang paling sering perlu diketahui sebelum memilih layanan." /></div><div className="faq-list">{items.map(([q,a],i)=><article className={active===i?'faq-item active':'faq-item'} key={q}><h3><button type="button" aria-expanded={active===i} onClick={()=>setActive(active===i?null:i)}><span>{q}</span><i aria-hidden="true">{active===i?'−':'+'}</i></button></h3>{active===i&&<p>{a}</p>}</article>)}</div></div></section>;
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="container contact-panel"><div className="contact-copy"><p className="eyebrow">Langkah berikutnya</p><h2>Informasi sudah jelas.<br /><em>Kontak masih demo.</em></h2><p>Halaman ini memperlihatkan dua jalur yang direncanakan dalam materi latihan. Keduanya belum bisa digunakan untuk tindakan nyata.</p></div><div className="contact-options"><div className="contact-option"><span>01 / KUNJUNGAN</span><b>Datang langsung</b><p>Alamat yang ditampilkan adalah alamat fiktif. Jangan gunakan untuk navigasi.</p><a href="#hours-location">Lihat informasi alamat ↗</a></div><div className="contact-option disabled"><span>02 / PESAN</span><b>WhatsApp belum tersedia</b><p>Nomor usaha belum diberikan. Tidak ada tautan atau aksi WhatsApp yang aktif.</p><span className="disabled-state">NOT_CONFIGURED</span></div></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><a href="#hero">Laundry <b>Ceria</b></a><p>Eksperimen website untuk AI-Operated Web Studio.</p></div><nav aria-label="Navigasi footer">{navItems.map(([label,id])=><a key={id} href={'#'+id}>{label}</a>)}</nav><a className="back-top" href="#preview-notice">Kembali ke atas ↑</a></div><div className="container footer-bottom"><span>PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED</span><span>BUKAN WEBSITE BISNIS NYATA</span></div></footer>;
}

export default function App() {
  return <><a className="skip-link" href="#main-content">Lewati ke konten utama</a><PreviewNotice /><Header /><main id="main-content" tabIndex={-1}><Hero /><ServicesPricing /><Turnaround /><Process /><Pickup /><HoursLocation /><FAQ /><Contact /></main><Footer /></>;
}
