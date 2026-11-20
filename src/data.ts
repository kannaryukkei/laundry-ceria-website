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

export const hours = [
  { day: 'Senin – Sabtu', time: '08.00–20.00' },
  { day: 'Minggu', time: '09.00–15.00' },
] as const;
