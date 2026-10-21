export default function PagePTenaga() {
  return (
    <section className="page" id="p-tenaga" style={{ background: '#FFFCF6' }}>
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
          {'Komposisi '}
          <span style={{ color: '#C83835' }}>Tenaga Kerja</span>
        </h2>
        <div className="lead">Berapa petugas yang turun setiap hari, dan dari fungsi apa saja.</div>
        <div className="row" style={{ margin: '10px 0 8px' }}>
          <div style={{ flex: '1', background: '#EEA948', color: '#26272B', borderRadius: '14px', padding: '10px 10px' }}>
            <div className="b" style={{ fontSize: '12px', lineHeight: '1.1' }}>
              Jumat
            </div>
            <div className="xs" style={{ opacity: '.85' }}>
              23 Okt · long shift 13 jam
            </div>
            <div className="big num" style={{ fontSize: '34px', margin: '4px 0 2px' }}>
              115
            </div>
            <div style={{ fontSize: '8.6px', opacity: '.9', lineHeight: '1.3' }}>RO1 45 · RO2 35 · RO3 35</div>
          </div>
          <div style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '14px', padding: '10px 10px' }}>
            <div className="b" style={{ fontSize: '12px', lineHeight: '1.1' }}>
              Sabtu
            </div>
            <div className="xs" style={{ opacity: '.85' }}>
              24 Okt · 2 shift
            </div>
            <div className="big num" style={{ fontSize: '34px', margin: '4px 0 2px' }}>
              275
            </div>
            <div style={{ fontSize: '8.6px', opacity: '.9', lineHeight: '1.3' }}>RO1 86 · RO2 99 · RO3 90</div>
          </div>
          <div style={{ flex: '1', background: '#53545A', color: '#fff', borderRadius: '14px', padding: '10px 10px' }}>
            <div className="b" style={{ fontSize: '12px', lineHeight: '1.1' }}>
              Minggu
            </div>
            <div className="xs" style={{ opacity: '.85' }}>
              25 Okt · 2 shift
            </div>
            <div className="big num" style={{ fontSize: '34px', margin: '4px 0 2px' }}>
              275
            </div>
            <div style={{ fontSize: '8.6px', opacity: '.9', lineHeight: '1.3' }}>RO1 86 · RO2 90 · RO3 99</div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#C83835',
            color: '#fff',
            borderRadius: '14px',
            padding: '8px 14px',
            marginBottom: '10px',
          }}
        >
          <div className="big num" style={{ fontSize: '30px' }}>
            665
          </div>
          <div style={{ fontSize: '10.5px', lineHeight: '1.3' }}>
            <b>petugas-hari selama 3 hari</b>
            <br />
            gabungan RO Jakarta 1, 2, dan 3
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div className="card" style={{ padding: '9px 9px' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '6px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#489D95' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </span>
              <div style={{ lineHeight: '1.15', minWidth: '0' }}>
                <div className="b" style={{ fontSize: '10.8px' }}>
                  Sales Financing
                </div>
                <div style={{ fontSize: '8.3px', color: '#77787d' }}>Oto · Pawning (PSO) · Griya · Properti</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div
                style={{ flex: '1', background: '#EEA948', color: '#26272B', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}
              >
                <div style={{ fontSize: '8px', opacity: '.85' }}>Jum</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  45
                </div>
              </div>
              <div style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Sab</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  108
                </div>
              </div>
              <div style={{ flex: '1', background: '#53545A', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Min</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  110
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '9px 9px' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '6px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#C83835' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <div style={{ lineHeight: '1.15', minWidth: '0' }}>
                <div className="b" style={{ fontSize: '10.8px' }}>
                  Frontliner
                </div>
                <div style={{ fontSize: '8.3px', color: '#77787d' }}>CS · Teller · BOSM/CSS</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div
                style={{ flex: '1', background: '#EEA948', color: '#26272B', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}
              >
                <div style={{ fontSize: '8px', opacity: '.85' }}>Jum</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  14
                </div>
              </div>
              <div style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Sab</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  32
                </div>
              </div>
              <div style={{ flex: '1', background: '#53545A', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Min</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  32
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '9px 9px' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '6px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#EEA948' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </span>
              <div style={{ lineHeight: '1.15', minWidth: '0' }}>
                <div className="b" style={{ fontSize: '10.8px' }}>
                  Sales Funding
                </div>
                <div style={{ fontSize: '8.3px', color: '#77787d' }}>Priority · Regular</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div
                style={{ flex: '1', background: '#EEA948', color: '#26272B', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}
              >
                <div style={{ fontSize: '8px', opacity: '.85' }}>Jum</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  15
                </div>
              </div>
              <div style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Sab</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  54
                </div>
              </div>
              <div style={{ flex: '1', background: '#53545A', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Min</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  52
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '9px 9px' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '6px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#53545A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </span>
              <div style={{ lineHeight: '1.15', minWidth: '0' }}>
                <div className="b" style={{ fontSize: '10.8px' }}>
                  {'Pendukung & Konsultasi'}
                </div>
                <div style={{ fontSize: '8.3px', color: '#77787d' }}>BM/AM · TBR · Barista · Driver</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div
                style={{ flex: '1', background: '#EEA948', color: '#26272B', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}
              >
                <div style={{ fontSize: '8px', opacity: '.85' }}>Jum</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  21
                </div>
              </div>
              <div style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Sab</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  41
                </div>
              </div>
              <div style={{ flex: '1', background: '#53545A', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Min</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  41
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '9px 9px' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '6px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#489D95' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </span>
              <div style={{ lineHeight: '1.15', minWidth: '0' }}>
                <div className="b" style={{ fontSize: '10.8px' }}>
                  PIC RO/Area
                </div>
                <div style={{ fontSize: '8.3px', color: '#77787d' }}>Pengawas lapangan lintas zona</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div
                style={{ flex: '1', background: '#EEA948', color: '#26272B', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}
              >
                <div style={{ fontSize: '8px', opacity: '.85' }}>Jum</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  12
                </div>
              </div>
              <div style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Sab</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  24
                </div>
              </div>
              <div style={{ flex: '1', background: '#53545A', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Min</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  24
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '9px 9px' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '6px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#C83835' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div style={{ lineHeight: '1.15', minWidth: '0' }}>
                <div className="b" style={{ fontSize: '10.8px' }}>
                  Security
                </div>
                <div style={{ fontSize: '8.3px', color: '#77787d' }}>{'Zona island BSI & BSI Mobility'}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div
                style={{ flex: '1', background: '#EEA948', color: '#26272B', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}
              >
                <div style={{ fontSize: '8px', opacity: '.85' }}>Jum</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  8
                </div>
              </div>
              <div style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Sab</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  16
                </div>
              </div>
              <div style={{ flex: '1', background: '#53545A', color: '#fff', borderRadius: '7px', padding: '3px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', opacity: '.85' }}>Min</div>
                <div className="big num" style={{ fontSize: '16px' }}>
                  16
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#p-daftar"
          className="card"
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            marginTop: '9px',
            background: '#489D95',
            color: '#fff',
            padding: '9px 12px',
          }}
        >
          <span className="ic" style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,.25)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="8" y1="13" x2="16" y2="13" />
              <line x1="8" y1="17" x2="13" y2="17" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10.5px', lineHeight: '1.35' }}>
            <b>Cek namamu di daftar petugas jaga</b>
            <br />
            RO Jakarta 1, 2, dan 3
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
        <div className="note" style={{ marginTop: '8px' }}>
          {
            'Angka = petugas per hari, gabungan 3 Regional Office. PSO masuk Sales Financing. BM/AM, TBR (termasuk TBR Staff BSI Agen), Barista, dan Driver masuk Pendukung & Konsultasi.'
          }
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          24
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '1' }} />
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
