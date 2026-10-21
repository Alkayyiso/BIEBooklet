import { ZoomImg } from '../components/ZoomImg';

export default function PagePGesture2() {
  return (
    <section className="page" id="p-gesture2" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c6" style={{ background: '#C83835' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
          Bab 06
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
        <div className="kick" style={{ color: '#C83835' }}>
          People
        </div>
        <h2 className="t">
          {'Gesture Petugas '}
          <span style={{ color: '#489D95' }}>#4 s.d. #7</span>
        </h2>
        <div className="lead">Menunjuk lokasi dan tulisan, serta condong saat berinteraksi.</div>
        <div className="col" style={{ gap: '6px', marginTop: '8px' }}>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs3.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%' }}
              />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  className="num"
                  style={{
                    background: '#C83835',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '9px',
                    borderRadius: '6px',
                    padding: '1px 5px',
                  }}
                >
                  #4
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Menunjuk lokasi/objek besar
                </span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.4px', lineHeight: '1.33', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Telapak terbuka, siku sedikit ditekuk, 4 jari berhimpit</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.4px', lineHeight: '1.33', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Wajah ke arah lokasi. Boleh tangan kiri bila lokasi di kiri</span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs4.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%' }}
              />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  className="num"
                  style={{
                    background: '#C83835',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '9px',
                    borderRadius: '6px',
                    padding: '1px 5px',
                  }}
                >
                  #5
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Menunjuk tulisan detail
                </span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.4px', lineHeight: '1.33', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Telunjuk + jari tengah kanan dihimpitkan</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.4px', lineHeight: '1.33', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Posisikan dokumen ke arah baca customer</span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs5.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%' }}
              />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  className="num"
                  style={{
                    background: '#C83835',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '9px',
                    borderRadius: '6px',
                    padding: '1px 5px',
                  }}
                >
                  #6
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Sedikit condong saat berinteraksi
                </span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.4px', lineHeight: '1.33', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Condongkan punggung ke depan, tanda penuh perhatian</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.4px', lineHeight: '1.33', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Jarak ±1 lengan (±70 cm)</span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs6.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%' }}
              />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  className="num"
                  style={{
                    background: '#C83835',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '9px',
                    borderRadius: '6px',
                    padding: '1px 5px',
                  }}
                >
                  #7
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Condong rendah saat nasabah duduk
                </span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.4px', lineHeight: '1.33', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Untuk interaksi singkat</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.4px', lineHeight: '1.33', marginTop: '2px' }}>
                <span style={{ flex: 'none', marginTop: '2px' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Pandangan sejajar dengan customer (eye level)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          49
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '1' }} />
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
