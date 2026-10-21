export default function PagePInsiden() {
  return (
    <section className="page" id="p-insiden" style={{ background: '#FFFCF6' }}>
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
          {'Penanganan '}
          <span style={{ color: '#C83835' }}>Insiden IT</span>
        </h2>
        <div className="lead">Skenario gangguan aplikasi BYOND saat expo. Langkah 1 sampai 4: deteksi hingga keputusan BCP.</div>
        <div style={{ marginTop: '8px' }}>
          <div style={{ position: 'relative', display: 'flex', gap: '9px', marginBottom: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                className="ic"
                style={{ width: '28px', height: '28px', background: '#2BA84A', color: '#fff', fontWeight: '900', fontSize: '13px' }}
              >
                1
              </span>
              <span style={{ flex: '1', width: '3px', background: '#2BA84A', opacity: '.25', marginTop: '3px' }} />
            </div>
            <div className="card" style={{ flex: '1', padding: '7px 10px', borderTop: '3px solid #2BA84A' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
                  Kondisi awal
                </span>
                <span className="tag" style={{ background: '#2BA84A', fontSize: '8px' }}>
                  Normal
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
                <span>Expo berlangsung, traffic BYOND tinggi, aplikasi berjalan normal</span>
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
                <span>Seluruh tim siaga: IT, operasional, BCM, business, CS, command center</span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '9px', marginBottom: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                className="ic"
                style={{ width: '28px', height: '28px', background: '#EEA948', color: '#fff', fontWeight: '900', fontSize: '13px' }}
              >
                2
              </span>
              <span style={{ flex: '1', width: '3px', background: '#EEA948', opacity: '.25', marginTop: '3px' }} />
            </div>
            <div className="card" style={{ flex: '1', padding: '7px 10px', borderTop: '3px solid #EEA948' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
                  Deteksi gangguan
                </span>
                <span className="tag" style={{ background: '#EEA948', fontSize: '8px' }}>
                  Menit 0 s.d. 5
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EEA948"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>BYOND mengalami gangguan (intermittent/error)</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EEA948"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>{'Monitoring & validasi oleh tim IT (aplikasi & surrounding)'}</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EEA948"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Identifikasi dampak: komplain naik, transaksi terganggu, antrean di booth</span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '9px', marginBottom: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                className="ic"
                style={{ width: '28px', height: '28px', background: '#E0901A', color: '#fff', fontWeight: '900', fontSize: '13px' }}
              >
                3
              </span>
              <span style={{ flex: '1', width: '3px', background: '#E0901A', opacity: '.25', marginTop: '3px' }} />
            </div>
            <div className="card" style={{ flex: '1', padding: '7px 10px', borderTop: '3px solid #E0901A' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
                  {'Eskalasi & assessment'}
                </span>
                <span className="tag" style={{ background: '#E0901A', fontSize: '8px' }}>
                  Menit 5 s.d. 15
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E0901A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Incident escalation lewat call tree</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E0901A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Assessment dampak teknis, operasional, reputasi, finansial</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9.5px', lineHeight: '1.35', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E0901A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>Koordinasi crisis team: IT, business, operasional, BCM, komunikasi</span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '9px', marginBottom: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                className="ic"
                style={{ width: '28px', height: '28px', background: '#C83835', color: '#fff', fontWeight: '900', fontSize: '13px' }}
              >
                4
              </span>
              <span style={{ flex: '1', width: '3px', background: '#C83835', opacity: '.25', marginTop: '3px' }} />
            </div>
            <div className="card" style={{ flex: '1', padding: '7px 10px', borderTop: '3px solid #C83835' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
                  Decision point: aktivasi BCP?
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
                <span>Apakah BCP BYOND perlu diaktifkan?</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', marginTop: '5px' }}>
                <div
                  style={{
                    flex: '1',
                    background: '#C83835',
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '5px 7px',
                    fontSize: '9px',
                    lineHeight: '1.3',
                  }}
                >
                  <b>YA</b>
                  {' → Aktivasi BCP BYOND'}
                </div>
                <div style={{ flex: '1', background: '#eee', borderRadius: '8px', padding: '5px 7px', fontSize: '9px', lineHeight: '1.3' }}>
                  <b>TIDAK</b>
                  {' → Lanjutkan troubleshooting & monitoring'}
                </div>
              </div>
              <div style={{ fontSize: '9px', color: '#5d5e63', marginTop: '4px', lineHeight: '1.35' }}>
                <b>Penetapan:</b>
                {' waktu aktivasi, layanan yang dialihkan, peran & tanggung jawab, komunikasi internal & eksternal.'}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          35
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
