export default function PagePGmAlur() {
  return (
    <section className="page" id="p-gm-alur" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#cg" style={{ background: '#489D95' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Bab 07
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
          Gamification
        </div>
        <h2 className="t">
          {'Alur '}
          <span style={{ color: '#489D95' }}>Gamification</span>
        </h2>
        <div className="lead">Kunjungan lebih menarik, pengalaman lebih bermakna. Enam langkah dari scan flyer sampai tukar hadiah.</div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: '#489D95',
            color: '#fff',
            borderRadius: '16px',
            padding: '10px 13px',
            margin: '9px 0 9px',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ fontSize: '17px', fontWeight: '900', lineHeight: '1.08' }}>
              Jelajahi island,
              <br />
              kumpulkan poin,
              <br />
              <span style={{ color: '#EEA948' }}>raih hadiah!</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', background: '#fff', color: '#26272B', borderRadius: '12px', padding: '6px 10px' }}>
            <div style={{ fontSize: '8.5px', fontWeight: '700', color: '#6b6c70' }}>MINIMAL</div>
            <div className="big num" style={{ fontSize: '26px', color: '#C9862A' }}>
              50
            </div>
            <div style={{ fontSize: '8.5px', fontWeight: '700' }}>poin = hadiah</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px' }}>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '76px' }}>
              <img src="assets/img/gm1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  width: '24px',
                  height: '24px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                01
              </span>
            </div>
            <div style={{ padding: '5px 8px 7px' }}>
              <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2' }}>
                Akses microsite gamification
              </div>
              <div style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
                Pengunjung memindai QR Code di flyer untuk membuka microsite: info aktivitas, panduan poin, dan mekanisme hadiah.
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '76px' }}>
              <img src="assets/img/gm2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  width: '24px',
                  height: '24px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                02
              </span>
            </div>
            <div style={{ padding: '5px 8px 7px' }}>
              <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2' }}>
                Identifikasi pengunjung
              </div>
              <div style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
                Pengunjung memakai QR Code Kehadiran unik sebagai identitas yang menghubungkan semua aktivitas dan poinnya.
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '76px' }}>
              <img src="assets/img/gm3.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  width: '24px',
                  height: '24px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                03
              </span>
            </div>
            <div style={{ padding: '5px 8px 7px' }}>
              <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2' }}>
                {'Jelajahi island & ikuti aktivitas'}
              </div>
              <div style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
                Pengunjung mendatangi island, berpartisipasi, dan menyelesaikan aktivitas sesuai ketentuan tiap island.
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '76px' }}>
              <img src="assets/img/gm4.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  width: '24px',
                  height: '24px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                04
              </span>
            </div>
            <div style={{ padding: '5px 8px 7px' }}>
              <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2' }}>
                {'Scan QR & validasi aktivitas'}
              </div>
              <div style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
                Setelah aktivitas selesai, crew island memindai QR Code pengunjung untuk memvalidasi keikutsertaan.
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '76px' }}>
              <img src="assets/img/gm5.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  width: '24px',
                  height: '24px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                05
              </span>
            </div>
            <div style={{ padding: '5px 8px 7px' }}>
              <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2' }}>
                Kumpulkan poin
              </div>
              <div style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
                Poin langsung tercatat di sistem setelah aktivitas divalidasi oleh crew island.
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '76px' }}>
              <img src="assets/img/gm6.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  width: '24px',
                  height: '24px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                06
              </span>
            </div>
            <div style={{ padding: '5px 8px 7px' }}>
              <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2' }}>
                Tukarkan poin dengan hadiah
              </div>
              <div style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
                Pengunjung yang mencapai minimal poin dapat menukarkan hadiah: tumbler, TWS, atau helm sesuai ketentuan.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          57
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#cg" style={{ background: '#489D95', opacity: '1' }} />
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
