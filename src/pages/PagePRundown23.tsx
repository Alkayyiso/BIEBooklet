import { Rd } from '../components/Rd';
import { Rt } from '../components/Rt';

export default function PagePRundown23() {
  return (
    <section className="page" id="p-rundown23" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c1" style={{ background: '#489D95' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Bab 01
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
        <div className="kick" style={{ color: '#489D95' }}>
          {'Rundown · Sabtu 24 & Minggu 25 Okt'}
        </div>
        <h2 className="t">
          {'Rundown '}
          <span style={{ color: '#489D95' }}>{'Day 2 & 3'}</span>
        </h2>
        <div className="lead">Dua shift. Saat event berlangsung, kegiatan yang sedang berjalan ditandai SEKARANG.</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 11px', fontSize: '9px', color: '#5d5e63', margin: '7px 0 7px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#53545A' }} />
            {'Absensi & briefing'}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#489D95' }} />
            Bertugas
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#EEA948' }} />
            {'Ibadah & makan'}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#C83835' }} />
            Input OASE
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '5px', height: '12px', borderRadius: '3px', background: '#EEA948' }} />
            Shift 1
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '5px', height: '12px', borderRadius: '3px', background: '#2BB5AE' }} />
            Shift 2
          </span>
        </div>
        <div className="col" style={{ gap: '3px' }}>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={730} end={800}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: '#EEA948' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#ECEDEF',
                borderLeft: '4px solid #53545A',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                07.30–08.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Absensi petugas Shift 1
                </Rt>
                <a
                  href="#p-area"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '8.8px',
                    color: '#6b6c70',
                    marginTop: '1px',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Command Center
                </a>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={800} end={850}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: '#EEA948' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#ECEDEF',
                borderLeft: '4px solid #53545A',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                08.00–08.50
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Briefing awal Shift 1
                </Rt>
                <a
                  href="#p-area"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '8.8px',
                    color: '#6b6c70',
                    marginTop: '1px',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Command Center
                </a>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={900} end={1130}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: '#EEA948' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#E2F1EF',
                borderLeft: '4px solid #489D95',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                09.00–11.30
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Bertugas full team di lokasi masing-masing
                </Rt>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1000} end={1015}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: '#EEA948' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
            </div>
            <div
              style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#C83835',
                color: '#fff',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', fontSize: '11px' }}>
                10.00
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '13px', height: '13px' }}
              >
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
              <a href="#p-oase" className="b rt" style={{ fontSize: '10.3px', flex: '1' }}>
                {'Input OASE & collect data bulk (SME & Mikro)'}
              </a>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1130} end={1330}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: '#EEA948' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#FDF1DC',
                borderLeft: '4px solid #EEA948',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                11.30–13.30
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  {'Break sholat Dzuhur, makan siang & touch up'}
                </Rt>
                <div style={{ display: 'flex', gap: '5px', fontSize: '9px', color: '#4d4e53', lineHeight: '1.3', marginTop: '1px' }}>
                  <b className="num" style={{ flex: 'none', color: '#C9862A' }}>
                    11.30–12.30
                  </b>
                  <span>Sesi 1: makan siang lalu sholat</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', fontSize: '9px', color: '#4d4e53', lineHeight: '1.3', marginTop: '1px' }}>
                  <b className="num" style={{ flex: 'none', color: '#C9862A' }}>
                    12.30–13.30
                  </b>
                  <span>Sesi 2: sholat lalu makan siang</span>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '8.8px',
                    color: '#6b6c70',
                    marginTop: '1px',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Bergiliran, diatur oleh PIC
                </span>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1330} end={1530}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: '#EEA948' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#E2F1EF',
                borderLeft: '4px solid #489D95',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                13.30–15.30
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Bertugas full team di lokasi masing-masing
                </Rt>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1330} end={1400}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: '#2BB5AE' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#ECEDEF',
                borderLeft: '4px solid #53545A',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                13.30–14.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Absensi petugas Shift 2
                </Rt>
                <div style={{ fontSize: '8.8px', color: '#C83835', fontWeight: '700', marginTop: '1px' }}>
                  Shift 2 maksimal hadir pukul 14.00
                </div>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1400} end={1415}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: '#EEA948' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
            </div>
            <div
              style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#C83835',
                color: '#fff',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', fontSize: '11px' }}>
                14.00
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '13px', height: '13px' }}
              >
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
              <a href="#p-oase" className="b rt" style={{ fontSize: '10.3px', flex: '1' }}>
                {'Input OASE & collect data bulk (SME & Mikro)'}
              </a>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1400} end={1450}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: '#2BB5AE' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#ECEDEF',
                borderLeft: '4px solid #53545A',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                14.00–14.50
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Briefing awal Shift 2
                </Rt>
                <a
                  href="#p-area"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '8.8px',
                    color: '#6b6c70',
                    marginTop: '1px',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Command Center
                </a>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1500} end={1600}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: '#EEA948' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: '#2BB5AE' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#FBE7E6',
                borderLeft: '4px solid #C83835',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                15.00–16.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  {'Sholat Ashar & transisi tugas ke Shift 2'}
                </Rt>
                <div style={{ display: 'flex', gap: '5px', fontSize: '9px', color: '#4d4e53', lineHeight: '1.3', marginTop: '1px' }}>
                  <b className="num" style={{ flex: 'none', color: '#A42B28' }}>
                    15.00–15.30
                  </b>
                  <span>Shift 2 sholat, lalu langsung bertugas</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', fontSize: '9px', color: '#4d4e53', lineHeight: '1.3', marginTop: '1px' }}>
                  <b className="num" style={{ flex: 'none', color: '#A42B28' }}>
                    15.30–16.00
                  </b>
                  <span>Shift 1 sholat, lalu selesai</span>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '8.8px',
                    color: '#6b6c70',
                    marginTop: '1px',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Bergiliran, diatur oleh PIC RO/Area/KP
                </span>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1530} end={1730}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: '#2BB5AE' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#E2F1EF',
                borderLeft: '4px solid #489D95',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                15.30–17.30
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Bertugas full team di lokasi masing-masing
                </Rt>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1730} end={1930}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: '#2BB5AE' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#FDF1DC',
                borderLeft: '4px solid #EEA948',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                17.30–19.30
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  {'Sholat Maghrib & makan malam'}
                </Rt>
                <div style={{ display: 'flex', gap: '5px', fontSize: '9px', color: '#4d4e53', lineHeight: '1.3', marginTop: '1px' }}>
                  <b className="num" style={{ flex: 'none', color: '#C9862A' }}>
                    17.30–18.30
                  </b>
                  <span>Sesi 1: makan malam lalu sholat</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', fontSize: '9px', color: '#4d4e53', lineHeight: '1.3', marginTop: '1px' }}>
                  <b className="num" style={{ flex: 'none', color: '#C9862A' }}>
                    18.30–19.30
                  </b>
                  <span>Sesi 2: sholat lalu makan malam</span>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '8.8px',
                    color: '#6b6c70',
                    marginTop: '1px',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Bergiliran, diatur oleh PIC RO/Area/KP
                </span>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1900} end={1915}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: '#2BB5AE' }} />
            </div>
            <div
              style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#C83835',
                color: '#fff',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', fontSize: '11px' }}>
                19.00
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '13px', height: '13px' }}
              >
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
              <a href="#p-oase" className="b rt" style={{ fontSize: '10.3px', flex: '1' }}>
                {'Input OASE & collect data bulk (SME & Mikro)'}
              </a>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={1930} end={2100}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: '#2BB5AE' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#E2F1EF',
                borderLeft: '4px solid #489D95',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                19.30–21.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Bertugas full team di lokasi masing-masing
                </Rt>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-24,2026-10-25" start={2100} end={2200}>
            <div style={{ display: 'flex', gap: '2px', width: '14px', flex: 'none' }}>
              <span style={{ width: '6px', borderRadius: '3px', background: 'transparent' }} />
              <span style={{ width: '6px', borderRadius: '3px', background: '#2BB5AE' }} />
            </div>
            <div
              className="rdc"
              style={{
                flex: '1',
                display: 'flex',
                gap: '8px',
                background: '#ECEDEF',
                borderLeft: '4px solid #53545A',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                21.00–22.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Briefing akhir shift
                </Rt>
                <a
                  href="#p-area"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '8.8px',
                    color: '#6b6c70',
                    marginTop: '1px',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Command Center
                </a>
              </div>
            </div>
          </Rd>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          07
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '1' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#cg" style={{ background: '#489D95', opacity: '0.25' }} />
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
