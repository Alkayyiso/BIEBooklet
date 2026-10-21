import { ZoomImg } from '../components/ZoomImg';

export default function PagePGesture3() {
  return (
    <section className="page" id="p-gesture3" style={{ background: '#FFFCF6' }}>
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
          <span style={{ color: '#489D95' }}>#8 s.d. #10</span>
        </h2>
        <div className="lead">Mempersilakan duduk, mengantar customer, dan serah terima.</div>
        <div className="col" style={{ gap: '6px', marginTop: '8px' }}>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs7.jpg"
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
                  #8
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Mempersilakan duduk
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
                <span>Telapak kanan terbuka, 4 jari berhimpit</span>
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
                <span>Ucapkan “...silakan duduk...”, customer duduk lebih dulu</span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs8.jpg"
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
                  #9
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Mengantar customer
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
                <span>Posisi arah jam 10 atau jam 2, jarak ±1 lengan</span>
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
                <span>Di sisi yang kosong, sesekali small talk</span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '6px', alignItems: 'center' }}>
            <div style={{ width: '112px', height: '128px', flex: 'none', borderRadius: '9px', overflow: 'hidden', background: '#f3f3f4' }}>
              <ZoomImg
                src="assets/img/gs9.jpg"
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
                  #10
                </span>
                <span className="b" style={{ fontSize: '11px', lineHeight: '1.15' }}>
                  Serah terima dua tangan
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
                <span>Dokumen, kartu, atau uang dengan dua tangan</span>
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
                <span>Sesuai arah baca customer</span>
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
