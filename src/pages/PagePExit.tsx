import { ZoomImg } from '../components/ZoomImg';

export default function PagePExit() {
  return (
    <section className="page" id="p-exit" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c7" style={{ background: '#EEA948' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Bab 08
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
        <div className="kick" style={{ color: '#EEA948' }}>
          Keselamatan
        </div>
        <h2 className="t">
          {'6 Emergency '}
          <span style={{ color: '#C83835' }}>Exit</span>
        </h2>
        <div className="lead">Foto setiap pintu darurat supaya mudah dikenali. Nomor sesuai dengan peta jalur evakuasi.</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '9px' }}>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '104px' }}>
              <ZoomImg src="assets/img/exit1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '7px',
                  top: '7px',
                  width: '28px',
                  height: '28px',
                  background: '#C83835',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '13px',
                  border: '2px solid #fff',
                }}
              >
                1
              </span>{' '}
              <span className="tag" style={{ position: 'absolute', right: '7px', top: '9px', background: '#489D95' }}>
                Hall A
              </span>
            </div>
            <div style={{ padding: '6px 9px 7px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Emergency Exit 1
              </div>
              <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.3' }}>Sisi bawah kanan, dekat Brand Fashion A</div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '104px' }}>
              <ZoomImg src="assets/img/exit2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '7px',
                  top: '7px',
                  width: '28px',
                  height: '28px',
                  background: '#C83835',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '13px',
                  border: '2px solid #fff',
                }}
              >
                2
              </span>{' '}
              <span className="tag" style={{ position: 'absolute', right: '7px', top: '9px', background: '#489D95' }}>
                Hall A
              </span>
            </div>
            <div style={{ padding: '6px 9px 7px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Emergency Exit 2
              </div>
              <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.3' }}>Sisi bawah kiri, dekat Preloved Branded Item</div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '104px' }}>
              <ZoomImg src="assets/img/exit3.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '7px',
                  top: '7px',
                  width: '28px',
                  height: '28px',
                  background: '#C83835',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '13px',
                  border: '2px solid #fff',
                }}
              >
                3
              </span>{' '}
              <span className="tag" style={{ position: 'absolute', right: '7px', top: '9px', background: '#EEA948', color: '#26272B' }}>
                Hall B
              </span>
            </div>
            <div style={{ padding: '6px 9px 7px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Emergency Exit 3
              </div>
              <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.3' }}>{'Sisi bawah tengah, area F&B dan picnic table'}</div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '104px' }}>
              <ZoomImg src="assets/img/exit4.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '7px',
                  top: '7px',
                  width: '28px',
                  height: '28px',
                  background: '#C83835',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '13px',
                  border: '2px solid #fff',
                }}
              >
                4
              </span>{' '}
              <span className="tag" style={{ position: 'absolute', right: '7px', top: '9px', background: '#EEA948', color: '#26272B' }}>
                Hall B
              </span>
            </div>
            <div style={{ padding: '6px 9px 7px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Emergency Exit 4
              </div>
              <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.3' }}>{'Sisi bawah kiri, area F&B dan picnic table'}</div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '104px' }}>
              <ZoomImg src="assets/img/exit5.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '7px',
                  top: '7px',
                  width: '28px',
                  height: '28px',
                  background: '#C83835',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '13px',
                  border: '2px solid #fff',
                }}
              >
                5
              </span>{' '}
              <span className="tag" style={{ position: 'absolute', right: '7px', top: '9px', background: '#EEA948', color: '#26272B' }}>
                Hall B
              </span>
            </div>
            <div style={{ padding: '6px 9px 7px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Emergency Exit 5
              </div>
              <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.3' }}>{'Sisi kiri, dekat Redemption & Watch Zone'}</div>
            </div>
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '104px' }}>
              <ZoomImg src="assets/img/exit6.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '7px',
                  top: '7px',
                  width: '28px',
                  height: '28px',
                  background: '#C83835',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '13px',
                  border: '2px solid #fff',
                }}
              >
                6
              </span>{' '}
              <span className="tag" style={{ position: 'absolute', right: '7px', top: '9px', background: '#EEA948', color: '#26272B' }}>
                Hall B
              </span>
            </div>
            <div style={{ padding: '6px 9px 7px' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Emergency Exit 6
              </div>
              <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.3' }}>Sisi kiri atas, dekat Mushalla</div>
            </div>
          </div>
        </div>
        <a
          href="#p-dodont"
          className="card"
          style={{ display: 'flex', gap: '9px', alignItems: 'center', marginTop: '9px', background: '#EEA94822', boxShadow: 'none' }}
        >
          <span className="ic" style={{ width: '28px', height: '28px', background: '#C83835' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10.2px', lineHeight: '1.4' }}>
            <b>Jangan menutup akses evakuasi.</b>
            {' Pastikan barang, stand banner, dan antrean tidak menghalangi jalan menuju exit.'}
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C83835"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          62
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#cg" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c7" style={{ background: '#EEA948', opacity: '1' }} />
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
