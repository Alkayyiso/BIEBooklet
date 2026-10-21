import { Rd } from '../components/Rd';
import { Rt } from '../components/Rt';

export default function PagePRundown1() {
  return (
    <section className="page" id="p-rundown1" style={{ background: '#FFFCF6' }}>
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
          Rundown · Jumat 23 Okt
        </div>
        <h2 className="t">
          {'Rundown '}
          <span style={{ color: '#EEA948' }}>Day 1</span>
        </h2>
        <div className="lead">Satu long shift. Absensi dan briefing di Command Center sebelum gate dibuka pukul 13.00.</div>
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
            Long shift
          </span>
        </div>
        <div className="col" style={{ gap: '4px' }}>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={930} end={1000}>
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
                09.30–10.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Absensi petugas
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
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1000} end={1130}>
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
                10.00–11.30
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Briefing awal shift
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
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1130} end={1250}>
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
                11.30–12.50
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  {"Break sholat Jum'at, makan siang & touch up"}
                </Rt>
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
                  Sholat Jum'at di masjid JICC
                </span>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1250} end={1300}>
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
                background: '#f1f1f2',
                borderLeft: '4px solid #9A9CA1',
                borderRadius: '8px',
                padding: '4px 9px',
              }}
            >
              <span className="b num" style={{ width: '66px', flex: 'none', fontSize: '11px', paddingTop: '1px' }}>
                12.50–13.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Standby di lokasi jaga masing-masing
                </Rt>
                <div style={{ fontSize: '8.8px', color: '#C83835', fontWeight: '700', marginTop: '1px' }}>Gate dibuka pukul 13.00</div>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1300} end={1500}>
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
                13.00–15.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Bertugas full team di lokasi masing-masing
                </Rt>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1400} end={1415}>
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
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1500} end={1600}>
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
                15.00–16.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Sholat Ashar
                </Rt>
                <div style={{ display: 'flex', gap: '5px', fontSize: '9px', color: '#4d4e53', lineHeight: '1.3', marginTop: '1px' }}>
                  <b className="num" style={{ flex: 'none', color: '#C9862A' }}>
                    15.00–15.30
                  </b>
                  <span>Sesi 1</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', fontSize: '9px', color: '#4d4e53', lineHeight: '1.3', marginTop: '1px' }}>
                  <b className="num" style={{ flex: 'none', color: '#C9862A' }}>
                    15.30–16.00
                  </b>
                  <span>Sesi 2</span>
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
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1600} end={1730}>
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
                16.00–17.30
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Bertugas full team di lokasi masing-masing
                </Rt>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1730} end={1930}>
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
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1900} end={1915}>
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
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={1930} end={2100}>
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
                19.30–21.00
              </span>
              <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
                <Rt className="b rt" style={{ fontSize: '10.4px' }}>
                  Bertugas full team di lokasi masing-masing
                </Rt>
              </div>
            </div>
          </Rd>
          <Rd style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }} dates="2026-10-23" start={2100} end={2200}>
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
        <a
          href="#p-area"
          className="card"
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            marginTop: '9px',
            background: '#53545A',
            color: '#fff',
            padding: '9px 12px',
          }}
        >
          <span className="ic" style={{ width: '30px', height: '30px', background: '#EEA948' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10.3px', lineHeight: '1.4' }}>
            <b>Command Center</b>
            {' ada di Area Briefing, sisi atas Hall B dekat Food Package & Snack. Lihat rute dari pintu masuk.'}
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '15px', height: '15px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          06
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
