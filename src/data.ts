export const services = {
  kiloan: [
    { name: 'Cuci lipat', price: 'Rp8.000', unit: '/kg' },
    { name: 'Cuci setrika', price: 'Rp12.000', unit: '/kg' },
    { name: 'Setrika saja', price: 'Rp7.000', unit: '/kg' },
  ],
  satuan: [
    { name: 'Bed cover', price: 'Rp25.000', unit: '/potong' },
    { name: 'Selimut', price: 'Rp20.000', unit: '/potong' },
  ],
} as const;

export const processSteps = [
  { number: '01', title: 'Pakaian diterima', detail: 'Pakaian dibawa dan diserahkan di ruko.' },
  { number: '02', title: 'Ditimbang bersama', detail: 'Berat ditimbang di depan pelanggan.' },
  { number: '03', title: 'Dicatat per pelanggan', detail: 'Pesanan dicatat untuk setiap pelanggan.' },
  { number: '04', title: 'Pakaian dicuci', detail: 'Pakaian masuk ke proses pencucian.' },
  { number: '05', title: 'Dilipat atau disetrika', detail: 'Setelah kering, pakaian diselesaikan sesuai layanan.' },
  { number: '06', title: 'Pelanggan dikabari', detail: 'Pelanggan diberi kabar melalui WhatsApp saat selesai.' },
] as const;

export const hours = [
  { day: 'Senin', time: '08.00–20.00' },
  { day: 'Selasa', time: '08.00–20.00' },
  { day: 'Rabu', time: '08.00–20.00' },
  { day: 'Kamis', time: '08.00–20.00' },
  { day: 'Jumat', time: '08.00–20.00' },
  { day: 'Sabtu', time: '08.00–20.00' },
  { day: 'Minggu', time: '09.00–15.00' },
] as const;
