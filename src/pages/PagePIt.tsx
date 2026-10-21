export default function PagePIt() {
  return (
    <section className="page" id="p-it" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c5" style={{ background: '#489D95' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          Bab 05
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
          Operasional
        </div>
        <h2 className="t">
          {'Perangkat '}
          <span style={{ color: '#489D95' }}>IT</span>
        </h2>
        <div className="lead">Kebutuhan laptop, tablet, printer, dan pinpad untuk seluruh booth layanan.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 8px' }}>
          <div className="big num" style={{ fontSize: '52px', color: '#489D95' }}>
            156
          </div>
          <div style={{ fontSize: '11px', lineHeight: '1.35' }}>
            <b>unit perangkat IT</b>
            <br />
            <span className="muted">proyeksi sementara, menyesuaikan jumlah booth layanan internal BSI</span>
          </div>
        </div>
        <div className="col" style={{ gap: '5px' }}>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '7px 10px' }}>
            <span className="ic" style={{ width: '30px', height: '30px', background: '#489D95' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="11" rx="1.5" />
                <path d="M2 19h20" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '11.3px' }}>
                Laptop Intranet
              </div>
              <div className="xs muted">Akses aplikasi internal BSI</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="big num" style={{ fontSize: '20px' }}>
                58
              </div>
              <span className="tag" style={{ background: '#489D95', fontSize: '8px' }}>
                Sewa
              </span>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '7px 10px' }}>
            <span className="ic" style={{ width: '30px', height: '30px', background: '#489D95' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '11.3px' }}>
                Tablet
              </div>
              <div className="xs muted">Akses webform</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="big num" style={{ fontSize: '20px' }}>
                18
              </div>
              <span className="tag" style={{ background: '#EEA948', fontSize: '8px' }}>
                Existing cabang
              </span>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '7px 10px' }}>
            <span className="ic" style={{ width: '30px', height: '30px', background: '#489D95' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '11.3px' }}>
                Printer Passbook
              </div>
              <div className="xs muted">{'Cetak buku tabungan & print form EXA'}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="big num" style={{ fontSize: '20px' }}>
                20
              </div>
              <span className="tag" style={{ background: '#489D95', fontSize: '8px' }}>
                Sewa
              </span>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '7px 10px' }}>
            <span className="ic" style={{ width: '30px', height: '30px', background: '#489D95' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '11.3px' }}>
                Pinpad
              </div>
              <div className="xs muted">Create, reissue, verify PIN</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="big num" style={{ fontSize: '20px' }}>
                27
              </div>
              <span className="tag" style={{ background: '#EEA948', fontSize: '8px' }}>
                Existing cabang
              </span>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '7px 10px' }}>
            <span className="ic" style={{ width: '30px', height: '30px', background: '#489D95' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '11.3px' }}>
                Printer Multi Function
              </div>
              <div className="xs muted">{'Fotokopi & scan dokumen'}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="big num" style={{ fontSize: '20px' }}>
                20
              </div>
              <span className="tag" style={{ background: '#489D95', fontSize: '8px' }}>
                Sewa
              </span>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '7px 10px' }}>
            <span className="ic" style={{ width: '30px', height: '30px', background: '#489D95' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="11" rx="1.5" />
                <path d="M2 19h20" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '11.3px' }}>
                Laptop Internet
              </div>
              <div className="xs muted">{'Akses LPC & kalkulator Griya'}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="big num" style={{ fontSize: '20px' }}>
                15
              </div>
              <span className="tag" style={{ background: '#489D95', fontSize: '8px' }}>
                Sewa
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: '#53545A', color: '#fff', borderRadius: '14px', padding: '10px 12px', marginTop: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="ic" style={{ width: '26px', height: '26px', background: '#EEA948' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <div className="b" style={{ fontSize: '12.5px' }}>
              Support Tim Endpoint
            </div>
          </div>
          <div style={{ display: 'flex', gap: '7px', alignItems: 'center', fontSize: '10.3px', marginTop: '4px' }}>
            <span
              className="ic"
              style={{ width: '20px', height: '20px', background: '#fff', color: '#53545A', fontWeight: '900', fontSize: '9.5px' }}
            >
              1
            </span>
            Standarisasi endpoint
          </div>
          <div style={{ display: 'flex', gap: '7px', alignItems: 'center', fontSize: '10.3px', marginTop: '4px' }}>
            <span
              className="ic"
              style={{ width: '20px', height: '20px', background: '#fff', color: '#53545A', fontWeight: '900', fontSize: '9.5px' }}
            >
              2
            </span>
            Cek kesiapan laptop, printer, EDC pinpad H-1
          </div>
          <div style={{ display: 'flex', gap: '7px', alignItems: 'center', fontSize: '10.3px', marginTop: '4px' }}>
            <span
              className="ic"
              style={{ width: '20px', height: '20px', background: '#fff', color: '#53545A', fontWeight: '900', fontSize: '9.5px' }}
            >
              3
            </span>
            Pastikan semua perangkat lancar dipakai
          </div>
          <div style={{ display: 'flex', gap: '7px', alignItems: 'center', fontSize: '10.3px', marginTop: '4px' }}>
            <span
              className="ic"
              style={{ width: '20px', height: '20px', background: '#fff', color: '#53545A', fontWeight: '900', fontSize: '9.5px' }}
            >
              4
            </span>
            Troubleshoot saat ada kendala
          </div>
          <div style={{ display: 'flex', gap: '7px', alignItems: 'center', fontSize: '10.3px', marginTop: '4px' }}>
            <span
              className="ic"
              style={{ width: '20px', height: '20px', background: '#fff', color: '#53545A', fontWeight: '900', fontSize: '9.5px' }}
            >
              5
            </span>
            Standby selama event
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          33
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '1' }} />
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
