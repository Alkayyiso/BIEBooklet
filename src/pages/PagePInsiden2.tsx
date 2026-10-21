export default function PagePInsiden2() {
  return (
    <section className="page" id="p-insiden2" style={{ background: '#FFFCF6' }}>
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
          Penanganan insiden IT
        </div>
        <h2 className="t">
          {'BCP, Recovery & '}
          <span style={{ color: '#2BA84A' }}>Review</span>
        </h2>
        <div className="lead">Langkah 5 sampai 8: layanan dialihkan, nasabah tetap terlayani, lalu dinormalisasi.</div>
        <div style={{ marginTop: '8px' }}>
          <div style={{ position: 'relative', display: 'flex', gap: '9px', marginBottom: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                className="ic"
                style={{ width: '28px', height: '28px', background: '#C83835', color: '#fff', fontWeight: '900', fontSize: '13px' }}
              >
                5
              </span>
              <span style={{ flex: '1', width: '3px', background: '#C83835', opacity: '.25', marginTop: '3px' }} />
            </div>
            <div className="card" style={{ flex: '1', padding: '7px 10px', borderTop: '3px solid #C83835' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
                  Implementasi BCP
                </span>
                <span className="tag" style={{ background: '#C83835', fontSize: '8px' }}>
                  Menit 15 s.d. selesai
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C83835"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Alihkan layanan yang eligible ke EXA dan kanal alternatif</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C83835"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Pastikan kapasitas, konektivitas, dan monitoring EXA siap</span>
              </div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '4px' }}>
                <span className="pill" style={{ background: '#489D9518', fontSize: '9px', padding: '2px 8px', fontWeight: '700' }}>
                  EXA
                </span>
                <span className="pill" style={{ background: '#489D9518', fontSize: '9px', padding: '2px 8px', fontWeight: '700' }}>
                  ATM/CRM
                </span>
                <span className="pill" style={{ background: '#489D9518', fontSize: '9px', padding: '2px 8px', fontWeight: '700' }}>
                  EDC
                </span>
                <span className="pill" style={{ background: '#489D9518', fontSize: '9px', padding: '2px 8px', fontWeight: '700' }}>
                  Cash
                </span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '9px', marginBottom: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                className="ic"
                style={{ width: '28px', height: '28px', background: '#C83835', color: '#fff', fontWeight: '900', fontSize: '13px' }}
              >
                6
              </span>
              <span style={{ flex: '1', width: '3px', background: '#C83835', opacity: '.25', marginTop: '3px' }} />
            </div>
            <div className="card" style={{ flex: '1', padding: '7px 10px', borderTop: '3px solid #C83835' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
                  Operasional selama BCP
                </span>
                <span className="tag" style={{ background: '#C83835', fontSize: '8px' }}>
                  Menit 15 s.d. selesai
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C83835"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Monitor performa EXA dan kanal alternatif</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C83835"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>
                  <b>Petugas di lokasi expo</b>
                  {' membantu nasabah, merchant, dan VIP'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C83835"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>{'Komunikasi internal & eksternal, termasuk media sosial'}</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C83835"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>
                  {'Tangani transaksi gantung/unknown status, '}
                  <b>cegah double transaction</b>
                </span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '9px', marginBottom: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                className="ic"
                style={{ width: '28px', height: '28px', background: '#2BA84A', color: '#fff', fontWeight: '900', fontSize: '13px' }}
              >
                7
              </span>
              <span style={{ flex: '1', width: '3px', background: '#2BA84A', opacity: '.25', marginTop: '3px' }} />
            </div>
            <div className="card" style={{ flex: '1', padding: '7px 10px', borderTop: '3px solid #2BA84A' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
                  {'Recovery & normalisasi'}
                </span>
                <span className="tag" style={{ background: '#2BA84A', fontSize: '8px' }}>
                  Setelah troubleshooting
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2BA84A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>BYOND pulih, uji fungsi: login, inquiry, transaksi</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2BA84A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Monitor stabilitas dan verifikasi bisnis</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2BA84A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>
                  {'Sudah stabil? '}
                  <b>Normalisasi layanan (deaktivasi BCP)</b>. Belum? Lanjut monitoring
                </span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '9px', marginBottom: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                className="ic"
                style={{ width: '28px', height: '28px', background: '#2BA84A', color: '#fff', fontWeight: '900', fontSize: '13px' }}
              >
                8
              </span>
              <span style={{ flex: '1', width: '3px', background: '#2BA84A', opacity: '.25', marginTop: '3px' }} />
            </div>
            <div className="card" style={{ flex: '1', padding: '7px 10px', borderTop: '3px solid #2BA84A' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
                  Post incident review
                </span>
                <span className="tag" style={{ background: '#2BA84A', fontSize: '8px' }}>
                  Setelah troubleshooting
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2BA84A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Rekonsiliasi transaksi dan validasi data</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2BA84A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>{'Evaluasi & lesson learned'}</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2BA84A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Laporan insiden dan rekomendasi perbaikan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ padding: '7px 10px', background: '#53545A', color: '#fff', fontSize: '8.8px', lineHeight: '1.45' }}>
          <b style={{ color: '#EEA948' }}>FUNGSI TERLIBAT</b>
          {
            ' · IT/Application (IOG, ASP, IDG, CSO) · Operasional (CTG, DBO) · Business (DBR, DSG) · BCM/Risk (BCM, IFG, SOR IT & OPS) · Komunikasi (CSG, MCG) · CS (CEX) · Command Center (IOG, BCM) · Tim Expo'
          }
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          36
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
