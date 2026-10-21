// Page order. Edit freely: add, remove or reorder entries.
import type { ComponentType } from 'react';
import PageCover from './PageCover';
import PageToc from './PageToc';
import PagePRingkas from './PagePRingkas';
import PageC1 from './PageC1';
import PagePJadwal from './PagePJadwal';
import PagePRundown1 from './PagePRundown1';
import PagePRundown23 from './PagePRundown23';
import PageC2 from './PageC2';
import PagePJalur from './PagePJalur';
import PagePUndangan from './PagePUndangan';
import PagePWalkin from './PagePWalkin';
import PagePBooth from './PagePBooth';
import PagePTiket from './PagePTiket';
import PagePForm from './PagePForm';
import PagePLink from './PagePLink';
import PagePWa from './PagePWa';
import PageC3 from './PageC3';
import PagePArea from './PagePArea';
import PagePHalla from './PagePHalla';
import PagePHallb from './PagePHallb';
import PagePPavilion from './PagePPavilion';
import PageC4 from './PageC4';
import PagePShift from './PagePShift';
import PagePTenaga from './PagePTenaga';
import PagePRekap from './PagePRekap';
import PagePDaftar from './PagePDaftar';
import PagePJumat from './PagePJumat';
import PagePWeekend from './PagePWeekend';
import PagePPic from './PagePPic';
import PagePPicritme from './PagePPicritme';
import PageC5 from './PageC5';
import PagePKesiapan from './PagePKesiapan';
import PagePIt from './PagePIt';
import PagePItStandby from './PagePItStandby';
import PagePInsiden from './PagePInsiden';
import PagePInsiden2 from './PagePInsiden2';
import PagePEnabler from './PagePEnabler';
import PagePOase from './PagePOase';
import PageC6 from './PageC6';
import PagePCx from './PagePCx';
import PagePDress from './PagePDress';
import PagePGrooming from './PagePGrooming';
import PagePGrooming2 from './PagePGrooming2';
import PagePGrooming3 from './PagePGrooming3';
import PagePGrooming4 from './PagePGrooming4';
import PagePGrooming5 from './PagePGrooming5';
import PagePEmas from './PagePEmas';
import PagePGesture from './PagePGesture';
import PagePGesture2 from './PagePGesture2';
import PagePGesture3 from './PagePGesture3';
import PagePGesture4 from './PagePGesture4';
import PagePScript from './PagePScript';
import PagePScript2 from './PagePScript2';
import PagePDodont from './PagePDodont';
import PageCg from './PageCg';
import PagePGmAlur from './PagePGmAlur';
import PagePGmPov from './PagePGmPov';
import PagePGmPoin from './PagePGmPoin';
import PagePGmKetentuan from './PagePGmKetentuan';
import PageC7 from './PageC7';
import PagePEvakuasi from './PagePEvakuasi';
import PagePExit from './PagePExit';
import PagePApar from './PagePApar';
import PagePDamkar from './PagePDamkar';
import PagePFasilitas from './PagePFasilitas';
import PagePKeamanan from './PagePKeamanan';
import PagePBcpInfo from './PagePBcpInfo';
import PagePBcp from './PagePBcp';
import PagePBcp2 from './PagePBcp2';
import PageBack from './PageBack';

export interface BookPage {
  id: string;
  title: string | null;
  kicker: string | null;
  pageNumber: string | null;
  isChapterCover: boolean;
  Component: ComponentType;
}

export const pages: BookPage[] = [
  { id: 'cover', title: null, kicker: 'BSI International Expo 2026', pageNumber: null, isChapterCover: false, Component: PageCover },
  { id: 'toc', title: 'Mau cari apa hari ini?', kicker: 'Daftar Isi', pageNumber: '02', isChapterCover: false, Component: PageToc },
  { id: 'p-ringkas', title: 'Sekilas Expo 2026', kicker: 'Ringkasan Kilat', pageNumber: '03', isChapterCover: false, Component: PagePRingkas },
  { id: 'c1', title: null, kicker: 'Bab 01', pageNumber: '04', isChapterCover: true, Component: PageC1 },
  { id: 'p-jadwal', title: 'Jadwal & Sesi', kicker: 'Jadwal & Rundown', pageNumber: '05', isChapterCover: false, Component: PagePJadwal },
  { id: 'p-rundown1', title: 'Rundown Day 1', kicker: 'Rundown · Jumat 23 Okt', pageNumber: '06', isChapterCover: false, Component: PagePRundown1 },
  {
    id: 'p-rundown23',
    title: 'Rundown Day 2 & 3',
    kicker: 'Rundown · Sabtu 24 & Minggu 25 Okt',
    pageNumber: '07',
    isChapterCover: false,
    Component: PagePRundown23,
  },
  { id: 'c2', title: null, kicker: 'Bab 02', pageNumber: '08', isChapterCover: true, Component: PageC2 },
  { id: 'p-jalur', title: '4 Jalur Masuk', kicker: 'Registrasi & Akses', pageNumber: '09', isChapterCover: false, Component: PagePJalur },
  { id: 'p-undangan', title: 'Alur Tamu Undangan', kicker: 'Registrasi & Akses', pageNumber: '10', isChapterCover: false, Component: PagePUndangan },
  { id: 'p-walkin', title: 'Alur Walk-In', kicker: 'Registrasi & Akses', pageNumber: '11', isChapterCover: false, Component: PagePWalkin },
  { id: 'p-booth', title: 'Booth Registrasi', kicker: 'Registrasi & Akses', pageNumber: '12', isChapterCover: false, Component: PagePBooth },
  { id: 'p-tiket', title: 'Kenali Warna Tiket', kicker: 'Registrasi & Akses', pageNumber: '13', isChapterCover: false, Component: PagePTiket },
  { id: 'p-form', title: 'Form Registrasi', kicker: 'Registrasi & Akses', pageNumber: '14', isChapterCover: false, Component: PagePForm },
  { id: 'p-link', title: 'Link Registrasi & Dashboard', kicker: 'Registrasi & Akses', pageNumber: '15', isChapterCover: false, Component: PagePLink },
  { id: 'p-wa', title: 'Script Undangan WA', kicker: 'Registrasi & Akses', pageNumber: '16', isChapterCover: false, Component: PagePWa },
  { id: 'c3', title: null, kicker: 'Bab 03', pageNumber: '17', isChapterCover: true, Component: PageC3 },
  { id: 'p-area', title: 'Petunjuk Area', kicker: 'Venue & Zona', pageNumber: '18', isChapterCover: false, Component: PagePArea },
  { id: 'p-halla', title: 'Hall A', kicker: 'Venue & Zona', pageNumber: '19', isChapterCover: false, Component: PagePHalla },
  { id: 'p-hallb', title: 'Hall B', kicker: 'Venue & Zona', pageNumber: '20', isChapterCover: false, Component: PagePHallb },
  { id: 'p-pavilion', title: 'BSI Pavilion', kicker: 'Venue & Zona', pageNumber: '21', isChapterCover: false, Component: PagePPavilion },
  { id: 'c4', title: null, kicker: 'Bab 04', pageNumber: '22', isChapterCover: true, Component: PageC4 },
  { id: 'p-shift', title: 'Pola Shift & Titik Kritis', kicker: 'Tim & Shift', pageNumber: '23', isChapterCover: false, Component: PagePShift },
  { id: 'p-tenaga', title: 'Komposisi Tenaga Kerja', kicker: 'Tim & Shift', pageNumber: '24', isChapterCover: false, Component: PagePTenaga },
  { id: 'p-rekap', title: 'Rekap per Regional Office', kicker: 'Tim & Shift', pageNumber: '25', isChapterCover: false, Component: PagePRekap },
  { id: 'p-daftar', title: 'Daftar Petugas Jaga', kicker: 'Tim & Shift', pageNumber: '26', isChapterCover: false, Component: PagePDaftar },
  { id: 'p-jumat', title: 'Siapa jaga di mana?', kicker: 'Penempatan · Jumat 23 Okt', pageNumber: '27', isChapterCover: false, Component: PagePJumat },
  { id: 'p-weekend', title: 'Akhir pekan, 2 shift', kicker: 'Penempatan · Sabtu & Minggu', pageNumber: '28', isChapterCover: false, Component: PagePWeekend },
  { id: 'p-pic', title: 'Tugas PIC Area/RO', kicker: 'Tim & Shift', pageNumber: '29', isChapterCover: false, Component: PagePPic },
  { id: 'p-picritme', title: 'Ritme Harian PIC', kicker: 'Tim & Shift', pageNumber: '30', isChapterCover: false, Component: PagePPicritme },
  { id: 'c5', title: null, kicker: 'Bab 05', pageNumber: '31', isChapterCover: true, Component: PageC5 },
  { id: 'p-kesiapan', title: 'Kesiapan Operasional', kicker: 'Operasional', pageNumber: '32', isChapterCover: false, Component: PagePKesiapan },
  { id: 'p-it', title: 'Perangkat IT', kicker: 'Operasional', pageNumber: '33', isChapterCover: false, Component: PagePIt },
  { id: 'p-it-standby', title: 'Tim IT Standby', kicker: 'Operasional', pageNumber: '34', isChapterCover: false, Component: PagePItStandby },
  { id: 'p-insiden', title: 'Penanganan Insiden IT', kicker: 'Operasional', pageNumber: '35', isChapterCover: false, Component: PagePInsiden },
  { id: 'p-insiden2', title: 'BCP, Recovery & Review', kicker: 'Penanganan insiden IT', pageNumber: '36', isChapterCover: false, Component: PagePInsiden2 },
  { id: 'p-enabler', title: 'Kartu & Buku Tabungan', kicker: 'Operasional', pageNumber: '37', isChapterCover: false, Component: PagePEnabler },
  { id: 'p-oase', title: 'Pelaporan OASE', kicker: 'Operasional', pageNumber: '38', isChapterCover: false, Component: PagePOase },
  { id: 'c6', title: null, kicker: 'Bab 06', pageNumber: '39', isChapterCover: true, Component: PageC6 },
  { id: 'p-cx', title: 'Bersama Jaga Customer Experience', kicker: 'Brand', pageNumber: '40', isChapterCover: false, Component: PagePCx },
  { id: 'p-dress', title: 'Dress Code', kicker: 'Brand', pageNumber: '41', isChapterCover: false, Component: PagePDress },
  { id: 'p-grooming', title: 'Grooming Pria: Rambut & Wajah', kicker: 'Grooming', pageNumber: '42', isChapterCover: false, Component: PagePGrooming },
  { id: 'p-grooming2', title: 'Grooming Pria: Kemeja & Belt', kicker: 'Grooming', pageNumber: '43', isChapterCover: false, Component: PagePGrooming2 },
  { id: 'p-grooming3', title: 'Aksesori & Kaos Kaki', kicker: 'Grooming', pageNumber: '44', isChapterCover: false, Component: PagePGrooming3 },
  { id: 'p-grooming4', title: 'Sepatu & Hijab', kicker: 'Grooming', pageNumber: '45', isChapterCover: false, Component: PagePGrooming4 },
  { id: 'p-grooming5', title: 'Grooming Wanita: Aksesori', kicker: 'Grooming', pageNumber: '46', isChapterCover: false, Component: PagePGrooming5 },
  { id: 'p-emas', title: 'Standar Layanan E.M.A.S', kicker: 'People', pageNumber: '47', isChapterCover: false, Component: PagePEmas },
  { id: 'p-gesture', title: 'Gesture Petugas', kicker: 'People', pageNumber: '48', isChapterCover: false, Component: PagePGesture },
  { id: 'p-gesture2', title: 'Gesture Petugas #4 s.d. #7', kicker: 'People', pageNumber: '49', isChapterCover: false, Component: PagePGesture2 },
  { id: 'p-gesture3', title: 'Gesture Petugas #8 s.d. #10', kicker: 'People', pageNumber: '50', isChapterCover: false, Component: PagePGesture3 },
  { id: 'p-gesture4', title: 'Gesture Petugas #11 s.d. #13', kicker: 'People', pageNumber: '51', isChapterCover: false, Component: PagePGesture4 },
  { id: 'p-script', title: 'Script Greeting', kicker: 'Process', pageNumber: '52', isChapterCover: false, Component: PagePScript },
  { id: 'p-script2', title: 'Script Greeting (lanjutan)', kicker: 'Process', pageNumber: '53', isChapterCover: false, Component: PagePScript2 },
  { id: 'p-dodont', title: "Do & Don't", kicker: 'Sikap & Penampilan', pageNumber: '54', isChapterCover: false, Component: PagePDodont },
  { id: 'cg', title: null, kicker: 'Bab 07', pageNumber: '55', isChapterCover: false, Component: PageCg },
  { id: 'p-gm-alur', title: 'Alur Gamification', kicker: 'Gamification', pageNumber: '56', isChapterCover: false, Component: PagePGmAlur },
  { id: 'p-gm-pov', title: 'Registrasi Jelajah BIE', kicker: 'POV Nasabah', pageNumber: '57', isChapterCover: false, Component: PagePGmPov },
  { id: 'p-gm-poin', title: 'Aktivitas & Poin', kicker: 'Gamification', pageNumber: '58', isChapterCover: false, Component: PagePGmPoin },
  { id: 'p-gm-ketentuan', title: 'Ketentuan Gamification', kicker: 'Gamification', pageNumber: '59', isChapterCover: false, Component: PagePGmKetentuan },
  { id: 'c7', title: null, kicker: 'Bab 08', pageNumber: '60', isChapterCover: true, Component: PageC7 },
  { id: 'p-evakuasi', title: 'Jalur Evakuasi & Titik Kumpul', kicker: 'Keselamatan', pageNumber: '61', isChapterCover: false, Component: PagePEvakuasi },
  { id: 'p-exit', title: '6 Emergency Exit', kicker: 'Keselamatan', pageNumber: '62', isChapterCover: false, Component: PagePExit },
  { id: 'p-apar', title: 'APAR, Dispenser & Tempat Sampah', kicker: 'Keselamatan', pageNumber: '63', isChapterCover: false, Component: PagePApar },
  { id: 'p-damkar', title: 'Mobil Damkar & Fasilitas VIP', kicker: 'Keselamatan', pageNumber: '64', isChapterCover: false, Component: PagePDamkar },
  { id: 'p-fasilitas', title: 'Fasilitas Umum & Emergency', kicker: 'Keselamatan', pageNumber: '65', isChapterCover: false, Component: PagePFasilitas },
  { id: 'p-keamanan', title: 'Keamanan & BCM', kicker: 'Keselamatan', pageNumber: '66', isChapterCover: false, Component: PagePKeamanan },
  { id: 'p-bcp-info', title: 'Business Continuity Plan', kicker: 'BCP', pageNumber: '67', isChapterCover: false, Component: PagePBcpInfo },
  { id: 'p-bcp', title: 'BCP BYOND', kicker: 'Keselamatan', pageNumber: '68', isChapterCover: false, Component: PagePBcp },
  { id: 'p-bcp2', title: 'BCP BYOND #8 s.d. #14', kicker: 'BCP BYOND', pageNumber: '69', isChapterCover: false, Component: PagePBcp2 },
  { id: 'back', title: null, kicker: 'Akses cepat', pageNumber: '70', isChapterCover: false, Component: PageBack },
];
