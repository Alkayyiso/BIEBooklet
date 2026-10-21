export default function PagePOase() {
  return (
    <section className="page" id="p-oase" style={{ background: '#FFFCF6' }}>
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
          {'Pelaporan '}
          <span style={{ color: '#489D95' }}>OASE</span>
        </h2>
        <div className="lead">Jadwal input dan laporan per sesi. Tepat waktu supaya data bisa langsung dipantau.</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#53545A',
            color: '#fff',
            borderRadius: '16px',
            padding: '12px 14px',
            margin: '10px 0 10px',
          }}
        >
          <div style={{ flex: '1' }}>
            <div className="xs b" style={{ color: '#EEA948', letterSpacing: '1px' }}>
              KODE EVENT DI OASE
            </div>
            <div style={{ fontSize: '11px', opacity: '.9', lineHeight: '1.35' }}>
              Seluruh perolehan selama event wajib dilaporkan sales melalui OASE.
            </div>
          </div>
          <div
            style={{
              background: '#fff',
              color: '#C83835',
              borderRadius: '12px',
              padding: '6px 12px',
              fontSize: '30px',
              fontWeight: '900',
              letterSpacing: '1px',
            }}
          >
            BSIX
          </div>
        </div>
        <div className="row xs b muted" style={{ padding: '0 4px', marginBottom: '4px' }}>
          <span style={{ flex: '1' }}>{'1. Input OASE & data bulk'}</span>
          <span style={{ flex: '1', textAlign: 'center' }}>2. Bulk ke OASE</span>
          <span style={{ flex: '1', textAlign: 'center' }}>3. Tarik data</span>
          <span style={{ flex: '1', textAlign: 'right' }}>4. Laporan</span>
        </div>
        <div className="col" style={{ gap: '7px' }}>
          <div className="card" style={{ padding: '9px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span className="tag" style={{ background: '#489D95' }}>
                SESI 1
              </span>
              <span className="xs muted">
                {'Laporan final pukul '}
                <b style={{ color: '#26272B' }}>12.00</b>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #489D95',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  10.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>Region</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #489D95',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  10.30
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>DSG</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #489D95',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  11.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>DAS</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#489D95',
                  color: '#fff',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #489D95',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  12.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>{'DAS & DSG'}</div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '9px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span className="tag" style={{ background: '#C83835' }}>
                SESI 2
              </span>
              <span className="xs muted">
                {'Laporan final pukul '}
                <b style={{ color: '#26272B' }}>17.00</b>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #C83835',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  14.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>Region</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C83835"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #C83835',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  15.30
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>DSG</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C83835"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #C83835',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  16.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>DAS</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C83835"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#C83835',
                  color: '#fff',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #C83835',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  17.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>{'DAS & DSG'}</div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '9px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span className="tag" style={{ background: '#EEA948' }}>
                SESI 3
              </span>
              <span className="xs muted">
                {'Laporan final pukul '}
                <b style={{ color: '#26272B' }}>21.00</b>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #EEA948',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  19.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>Region</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EEA948"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #EEA948',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  19.30
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>DSG</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EEA948"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#26272B',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #EEA948',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  20.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>DAS</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EEA948"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div
                style={{
                  flex: '1',
                  textAlign: 'center',
                  background: '#EEA948',
                  color: '#fff',
                  borderRadius: '9px',
                  padding: '5px 2px',
                  border: '1px solid #EEA948',
                }}
              >
                <div className="b num" style={{ fontSize: '12.5px' }}>
                  21.00
                </div>
                <div style={{ fontSize: '8px', opacity: '.8' }}>{'DAS & DSG'}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ marginTop: '8px', display: 'flex', gap: '9px', alignItems: 'center', background: '#EEA94822', boxShadow: 'none' }}
        >
          <span className="ic" style={{ width: '30px', height: '30px', background: '#C9862A' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </span>
          <div style={{ fontSize: '10.2px', lineHeight: '1.4' }}>
            <b>Data bulk</b>
            {' khusus untuk produk yang belum bisa diproses atau dilaporkan di OASE, seperti '}
            <b>Mikro</b>
            {' dan '}
            <b>SME</b>.
          </div>
        </div>
        <div className="note" style={{ marginTop: '8px' }}>
          {'Semua waktu dalam WIB. Region menginput, DSG mengunggah bulk, DAS menarik data, lalu DAS & DSG menyusun laporan.'}
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          40
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
