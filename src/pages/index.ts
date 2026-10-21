// Page order. Edit freely: add, remove or reorder entries.
import type { ComponentType } from 'react';
import Page01Cover from './Page01Cover';
import Page02Toc from './Page02Toc';
import Page03PRingkas from './Page03PRingkas';
import Page04C1 from './Page04C1';
import Page05PJadwal from './Page05PJadwal';
import Page06PRundown1 from './Page06PRundown1';
import Page07PRundown23 from './Page07PRundown23';
import Page08C2 from './Page08C2';
import Page09PJalur from './Page09PJalur';
import Page10PUndangan from './Page10PUndangan';
import Page11PWalkin from './Page11PWalkin';
import Page12PBooth from './Page12PBooth';
import Page13PTiket from './Page13PTiket';
import Page14PForm from './Page14PForm';
import Page15PLink from './Page15PLink';
import Page16PWa from './Page16PWa';
import Page17C3 from './Page17C3';
import Page18PArea from './Page18PArea';
import Page19PHalla from './Page19PHalla';
import Page20PHallb from './Page20PHallb';
import Page21PPavilion from './Page21PPavilion';
import Page22C4 from './Page22C4';
import Page23PShift from './Page23PShift';
import Page24PTenaga from './Page24PTenaga';
import Page25PRekap from './Page25PRekap';
import Page26PJumat from './Page26PJumat';
import Page27PWeekend from './Page27PWeekend';
import Page28PPic from './Page28PPic';
import Page29PPicritme from './Page29PPicritme';
import Page30C5 from './Page30C5';
import Page31PKesiapan from './Page31PKesiapan';
import Page32PIt from './Page32PIt';
import Page33PEnabler from './Page33PEnabler';
import Page34POase from './Page34POase';
import Page35C6 from './Page35C6';
import Page36PDress from './Page36PDress';
import Page37PService from './Page37PService';
import Page38PDodont from './Page38PDodont';
import Page39C7 from './Page39C7';
import Page40PEvakuasi from './Page40PEvakuasi';
import Page41PExit from './Page41PExit';
import Page42PApar from './Page42PApar';
import Page43PDamkar from './Page43PDamkar';
import Page44PFasilitas from './Page44PFasilitas';
import Page45PKeamanan from './Page45PKeamanan';
import Page46Back from './Page46Back';

export interface BookPage {
  id: string;
  title: string | null;
  kicker: string | null;
  pageNumber: string | null;
  isChapterCover: boolean;
  Component: ComponentType;
}

export const pages: BookPage[] = [
  { id: 'cover', title: null, kicker: 'BSI International Expo 2026', pageNumber: null, isChapterCover: false, Component: Page01Cover },
  { id: 'toc', title: 'Mau cari apa hari ini?', kicker: 'Daftar Isi', pageNumber: '02', isChapterCover: false, Component: Page02Toc },
  { id: 'p-ringkas', title: 'Sekilas Expo 2026', kicker: 'Ringkasan Kilat', pageNumber: '03', isChapterCover: false, Component: Page03PRingkas },
  { id: 'c1', title: null, kicker: 'Bab 01', pageNumber: '04', isChapterCover: true, Component: Page04C1 },
  { id: 'p-jadwal', title: 'Jadwal & Sesi', kicker: 'Jadwal & Rundown', pageNumber: '05', isChapterCover: false, Component: Page05PJadwal },
  { id: 'p-rundown1', title: 'Rundown Day 1', kicker: 'Rundown · Jumat 23 Okt', pageNumber: '06', isChapterCover: false, Component: Page06PRundown1 },
  {
    id: 'p-rundown23',
    title: 'Rundown Day 2 & 3',
    kicker: 'Rundown · Sabtu 24 & Minggu 25 Okt',
    pageNumber: '07',
    isChapterCover: false,
    Component: Page07PRundown23,
  },
  { id: 'c2', title: null, kicker: 'Bab 02', pageNumber: '08', isChapterCover: true, Component: Page08C2 },
  { id: 'p-jalur', title: '4 Jalur Masuk', kicker: 'Registrasi & Akses', pageNumber: '09', isChapterCover: false, Component: Page09PJalur },
  { id: 'p-undangan', title: 'Alur Tamu Undangan', kicker: 'Registrasi & Akses', pageNumber: '10', isChapterCover: false, Component: Page10PUndangan },
  { id: 'p-walkin', title: 'Alur Walk-In', kicker: 'Registrasi & Akses', pageNumber: '11', isChapterCover: false, Component: Page11PWalkin },
  { id: 'p-booth', title: 'Booth Registrasi', kicker: 'Registrasi & Akses', pageNumber: '12', isChapterCover: false, Component: Page12PBooth },
  { id: 'p-tiket', title: 'Kenali Warna Tiket', kicker: 'Registrasi & Akses', pageNumber: '13', isChapterCover: false, Component: Page13PTiket },
  { id: 'p-form', title: 'Form Registrasi', kicker: 'Registrasi & Akses', pageNumber: '14', isChapterCover: false, Component: Page14PForm },
  { id: 'p-link', title: 'Link Registrasi & Dashboard', kicker: 'Registrasi & Akses', pageNumber: '15', isChapterCover: false, Component: Page15PLink },
  { id: 'p-wa', title: 'Script Undangan WA', kicker: 'Registrasi & Akses', pageNumber: '16', isChapterCover: false, Component: Page16PWa },
  { id: 'c3', title: null, kicker: 'Bab 03', pageNumber: '17', isChapterCover: true, Component: Page17C3 },
  { id: 'p-area', title: 'Petunjuk Area', kicker: 'Venue & Zona', pageNumber: '18', isChapterCover: false, Component: Page18PArea },
  { id: 'p-halla', title: 'Hall A', kicker: 'Venue & Zona', pageNumber: '19', isChapterCover: false, Component: Page19PHalla },
  { id: 'p-hallb', title: 'Hall B', kicker: 'Venue & Zona', pageNumber: '20', isChapterCover: false, Component: Page20PHallb },
  { id: 'p-pavilion', title: 'BSI Pavilion', kicker: 'Venue & Zona', pageNumber: '21', isChapterCover: false, Component: Page21PPavilion },
  { id: 'c4', title: null, kicker: 'Bab 04', pageNumber: '22', isChapterCover: true, Component: Page22C4 },
  { id: 'p-shift', title: 'Pola Shift & Titik Kritis', kicker: 'Tim & Shift', pageNumber: '23', isChapterCover: false, Component: Page23PShift },
  { id: 'p-tenaga', title: 'Komposisi Tenaga Kerja', kicker: 'Tim & Shift', pageNumber: '24', isChapterCover: false, Component: Page24PTenaga },
  { id: 'p-rekap', title: 'Rekap per Regional Office', kicker: 'Tim & Shift', pageNumber: '25', isChapterCover: false, Component: Page25PRekap },
  { id: 'p-jumat', title: 'Siapa jaga di mana?', kicker: 'Penempatan · Jumat 23 Okt', pageNumber: '26', isChapterCover: false, Component: Page26PJumat },
  { id: 'p-weekend', title: 'Akhir pekan, 2 shift', kicker: 'Penempatan · Sabtu & Minggu', pageNumber: '27', isChapterCover: false, Component: Page27PWeekend },
  { id: 'p-pic', title: 'Tugas PIC Area/RO', kicker: 'Tim & Shift', pageNumber: '28', isChapterCover: false, Component: Page28PPic },
  { id: 'p-picritme', title: 'Ritme Harian PIC', kicker: 'Tim & Shift', pageNumber: '29', isChapterCover: false, Component: Page29PPicritme },
  { id: 'c5', title: null, kicker: 'Bab 05', pageNumber: '30', isChapterCover: true, Component: Page30C5 },
  { id: 'p-kesiapan', title: 'Kesiapan Operasional', kicker: 'Operasional', pageNumber: '31', isChapterCover: false, Component: Page31PKesiapan },
  { id: 'p-it', title: 'Perangkat IT', kicker: 'Operasional', pageNumber: '32', isChapterCover: false, Component: Page32PIt },
  { id: 'p-enabler', title: 'Kartu & Buku Tabungan', kicker: 'Operasional', pageNumber: '33', isChapterCover: false, Component: Page33PEnabler },
  { id: 'p-oase', title: 'Pelaporan OASE', kicker: 'Operasional', pageNumber: '34', isChapterCover: false, Component: Page34POase },
  { id: 'c6', title: null, kicker: 'Bab 06', pageNumber: '35', isChapterCover: true, Component: Page35C6 },
  { id: 'p-dress', title: 'Dress Code', kicker: 'Sikap & Penampilan', pageNumber: '36', isChapterCover: false, Component: Page36PDress },
  { id: 'p-service', title: 'Service Excellence', kicker: 'Sikap & Penampilan', pageNumber: '37', isChapterCover: false, Component: Page37PService },
  { id: 'p-dodont', title: "Do & Don't", kicker: 'Sikap & Penampilan', pageNumber: '38', isChapterCover: false, Component: Page38PDodont },
  { id: 'c7', title: null, kicker: 'Bab 07', pageNumber: '39', isChapterCover: true, Component: Page39C7 },
  { id: 'p-evakuasi', title: 'Jalur Evakuasi & Titik Kumpul', kicker: 'Keselamatan', pageNumber: '40', isChapterCover: false, Component: Page40PEvakuasi },
  { id: 'p-exit', title: '6 Emergency Exit', kicker: 'Keselamatan', pageNumber: '41', isChapterCover: false, Component: Page41PExit },
  { id: 'p-apar', title: 'APAR, Dispenser & Tempat Sampah', kicker: 'Keselamatan', pageNumber: '42', isChapterCover: false, Component: Page42PApar },
  { id: 'p-damkar', title: 'Mobil Damkar & Fasilitas VIP', kicker: 'Keselamatan', pageNumber: '43', isChapterCover: false, Component: Page43PDamkar },
  { id: 'p-fasilitas', title: 'Fasilitas Umum & Emergency', kicker: 'Keselamatan', pageNumber: '44', isChapterCover: false, Component: Page44PFasilitas },
  { id: 'p-keamanan', title: 'Keamanan & BCM', kicker: 'Keselamatan', pageNumber: '45', isChapterCover: false, Component: Page45PKeamanan },
  { id: 'back', title: null, kicker: 'Akses cepat', pageNumber: '46', isChapterCover: false, Component: Page46Back },
];
