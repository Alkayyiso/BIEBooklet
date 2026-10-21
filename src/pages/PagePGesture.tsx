import { ZoomImg } from '../components/ZoomImg';

export default function PagePGesture() {
  return (
    <section className="page" id="p-gesture" style={{ background: '#FFFCF6' }}>
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
          {'Gesture '}
          <span style={{ color: '#489D95' }}>Petugas</span>
        </h2>
        <div className="lead">13 sikap yang berlaku di seluruh zona, ditambah gesture MSH.</div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: '#489D95',
            color: '#fff',
            borderRadius: '16px',
            padding: '6px 12px 6px 6px',
            margin: '8px 0 7px',
          }}
        >
          <ZoomImg
            src="assets/img/msh.jpg"
            alt=""
            style={{ width: '96px', height: '104px', objectFit: 'contain', background: '#fff', borderRadius: '12px', flex: 'none' }}
          />
          <div style={{ flex: '1' }}>
            <div className="kick" style={{ color: '#EEA948', fontSize: '9px' }}>
              Gesture wajib
            </div>
            <div style={{ fontSize: '15px', fontWeight: '900', lineHeight: '1.1', margin: '1px 0 4px' }}>MSH, Melayani Sepenuh Hati</div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.35', marginTop: '2px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '11px', height: '11px' }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Tangan kanan di dada sebelah kiri</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.35', marginTop: '2px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '11px', height: '11px' }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Senyum di bibir dan di mata</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.35', marginTop: '2px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '11px', height: '11px' }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Kepala sedikit mengangguk</span>
            </div>
          </div>
        </div>
        <div className="col" style={{ gap: '6px' }}>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs1.jpg"
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
                  #1
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Berdiri seimbang
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
                <span>Tumpu di kedua kaki, tidak di satu sisi</span>
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
                <span>Badan rileks, bahu tidak ditarik atau jatuh</span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs2.jpg"
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
                  #2
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Berjalan dengan gesit
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
                <span>Sekitar 2 langkah per detik</span>
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
                <span>Kesan cepat tanggap dan bersegera membantu</span>
              </div>
            </div>
          </div>
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
                  #3
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
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          50
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
