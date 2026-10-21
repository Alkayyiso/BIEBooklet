import { Chk } from '../components/Chk';

export default function Page29PPicritme() {
  return (
    <section className="page" id="p-picritme" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c4" style={{ background: '#53545A' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Bab 04
        </a>
        <a className="navbtn" href="#toc" style={{}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          Isi
        </a>
      </div>
      <div className="content">
        <div className="kick" style={{ color: '#53545A' }}>
          {'Tim & Shift'}
        </div>
        <h2 className="t">
          {'Ritme Harian '}
          <span style={{ color: '#C83835' }}>PIC</span>
        </h2>
        <div className="lead">
          Satu hari Sabtu atau Minggu dari kacamata PIC. Ketuk tiap baris untuk mencentang, otomatis reset setiap hari.
        </div>
        <div className="card" style={{ padding: '10px 12px 4px', marginTop: '8px' }}>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={0}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              07.30
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#489D95', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                {'Absensi & briefing Shift 1'}
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>
                Absensi 07.30, briefing 08.00 s.d. 08.50 di Command Center. Bagi zona, cek booth, enabler, sistem.
              </div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={1}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              09.00
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#2E9F95', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
                <circle cx="14.5" cy="12" r=".8" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Gate dibuka, Sesi 1
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>Pastikan semua petugas di posnya.</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={2}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              10.00
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#EEA948', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Input OASE Sesi 1
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>Ingatkan sales, kumpulkan data bulk.</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={3}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              11.30
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#C9862A', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Break Dzuhur Shift 1
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>{'Atur giliran sesi 1 & 2 sampai 13.30.'}</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={4}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              13.30
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#53545A', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Absensi Shift 2
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>Shift 2 maksimal hadir pukul 14.00.</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={5}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              14.00
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#53545A', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Briefing Shift 2 + input OASE Sesi 2
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>Briefing 14.00 s.d. 14.50 di Command Center, penempatan zona.</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={6}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              15.00
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#C83835', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                {'Sholat Ashar & transisi'}
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>
                15.00 Shift 2 sholat lalu bertugas, 15.30 Shift 1 sholat lalu selesai.
              </div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={7}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              17.00
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#EEA948', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="13" y2="17" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Laporan Sesi 2
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>Cek angka sebelum laporan final.</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={8}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              17.30
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#C9862A', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                {'Maghrib & makan malam Shift 2'}
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>{'Atur giliran sesi 1 & 2 sampai 19.30.'}</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={9}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              19.00
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#EEA948', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Input OASE Sesi 3
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>Ingatkan sales, kumpulkan data bulk.</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={10}>
            <div style={{ position: 'absolute', left: '58px', top: '24px', bottom: '-6px', width: '2px', background: '#e1e1e4' }} />
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              21.00
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#53545A', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="13" y2="17" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Briefing akhir shift
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>Di Command Center. Rekap kendala dan laporan Sesi 3.</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
          <Chk style={{ position: 'relative', display: 'flex', gap: '10px', alignItems: 'flex-start', minHeight: '50px' }} index={11}>
            <div className="b num" style={{ width: '38px', textAlign: 'right', fontSize: '11.5px', paddingTop: '3px' }}>
              22.00
            </div>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#C83835', zIndex: '1' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25', paddingTop: '2px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Tutup
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>EXA ditutup, tablet diamankan, booth rapi.</div>
            </div>
            <span
              className="box"
              style={{
                width: '17px',
                height: '17px',
                border: '2px solid #c9cacd',
                borderRadius: '5px',
                flex: 'none',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Chk>
        </div>
        <div className="note" style={{ marginTop: '6px' }}>
          <b>Jumat:</b>
          {' long shift, absensi 09.30 dan briefing 10.00 s.d. 11.30. Ikuti '}
          <a href="#p-rundown1" style={{ textDecoration: 'underline' }}>
            rundown Day 1
          </a>
          .
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          29
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '1' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c7" style={{ background: '#EEA948', opacity: '0.25' }} />
        </div>
        <span
          style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontWeight: '700', letterSpacing: '.2px', color: '#C83835' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C83835"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '10px', height: '10px' }}
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Internal BSI
        </span>
      </div>
    </section>
  );
}
