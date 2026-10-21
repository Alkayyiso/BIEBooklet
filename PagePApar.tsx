import { ZoomImg } from '../components/ZoomImg';

export default function PagePApar() {
  return (
    <section className="page" id="p-apar" style={{ background: '#FFFCF6' }}>
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
          {'APAR, Dispenser & '}
          <span style={{ color: '#1F7A4D' }}>Tempat Sampah</span>
        </h2>
        <div className="lead">Pemetaan fasilitas keselamatan, kedaruratan, dan pendukung operasional di setiap area.</div>
        <div className="row xs" style={{ gap: '10px', margin: '8px 0 8px', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="ic" style={{ width: '18px', height: '18px', background: '#C83835' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 10-1-1-2-2-2-4-2 2-1 5-1 6 0 4 3 7 7 7z" />
              </svg>
            </span>
            APAR
          </span>{' '}
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="ic" style={{ width: '18px', height: '18px', background: '#3E63B8' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </span>
            Dispenser air minum
          </span>{' '}
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="ic" style={{ width: '18px', height: '18px', background: '#1F7A4D' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              </svg>
            </span>
            Tempat sampah
          </span>{' '}
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="ic" style={{ width: '18px', height: '18px', background: '#D45D5A' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            Ambulance
          </span>
        </div>
        <div className="col" style={{ gap: '7px' }}>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '7px', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '146px',
                height: '80px',
                flex: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #eee',
                background: '#fff',
              }}
            >
              <ZoomImg src="assets/img/aparFA.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div className="b" style={{ fontSize: '12.5px', marginBottom: '4px' }}>
                Foyer A
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#C8383514',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#C83835' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 10-1-1-2-2-2-4-2 2-1 5-1 6 0 4 3 7 7 7z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    1
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>APAR</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#1F7A4D14',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#1F7A4D' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    2
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>
                    tempat
                    <br />
                    sampah
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#D45D5A14',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#D45D5A' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    1
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>ambulance</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#489D9514',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#489D95' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    1
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>
                    ambulance
                    <br />
                    BSI
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '7px', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '146px',
                height: '80px',
                flex: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #eee',
                background: '#fff',
              }}
            >
              <ZoomImg src="assets/img/aparHA.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div className="b" style={{ fontSize: '12.5px', marginBottom: '4px' }}>
                Hall A
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#C8383514',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#C83835' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 10-1-1-2-2-2-4-2 2-1 5-1 6 0 4 3 7 7 7z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    2
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>APAR</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#3E63B814',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#3E63B8' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    5
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>dispenser</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#1F7A4D14',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#1F7A4D' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    7
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>
                    tempat
                    <br />
                    sampah
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '7px', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '146px',
                height: '80px',
                flex: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #eee',
                background: '#fff',
              }}
            >
              <ZoomImg src="assets/img/aparHB.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div className="b" style={{ fontSize: '12.5px', marginBottom: '4px' }}>
                Hall B
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#C8383514',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#C83835' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 10-1-1-2-2-2-4-2 2-1 5-1 6 0 4 3 7 7 7z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    10
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>APAR</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#3E63B814',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#3E63B8' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    12
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>dispenser</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#1F7A4D14',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#1F7A4D' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    13
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>
                    tempat
                    <br />
                    sampah
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '7px', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '146px',
                height: '80px',
                flex: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #eee',
                background: '#fff',
              }}
            >
              <ZoomImg src="assets/img/aparZ4.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div className="b" style={{ fontSize: '12.5px', marginBottom: '4px' }}>
                BSI Pavilion (Zona 4)
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#3E63B814',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#3E63B8' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    1
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>dispenser</span>
                </div>
              </div>
              <div style={{ fontSize: '8.4px', color: '#6b6c70', marginTop: '3px', lineHeight: '1.25' }}>
                Dispenser dekat BSI Consultancy Corner.
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '7px', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '146px',
                height: '80px',
                flex: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #eee',
                background: '#fff',
              }}
            >
              <ZoomImg src="assets/img/aparFB.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div className="b" style={{ fontSize: '12.5px', marginBottom: '4px' }}>
                Foyer B
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#C8383514',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#C83835' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 10-1-1-2-2-2-4-2 2-1 5-1 6 0 4 3 7 7 7z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    10
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>APAR</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#3E63B814',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#3E63B8' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    5
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>dispenser</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#1F7A4D14',
                    borderRadius: '9px',
                    padding: '4px 7px',
                  }}
                >
                  <span className="ic" style={{ width: '20px', height: '20px', background: '#1F7A4D' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    </svg>
                  </span>
                  <span className="big num" style={{ fontSize: '15px' }}>
                    6
                  </span>
                  <span style={{ fontSize: '8.6px', color: '#5d5e63', lineHeight: '1.1' }}>
                    tempat
                    <br />
                    sampah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '8px' }}>
          <a href="#p-cx" className="card" style={{ flex: '1', display: 'flex', gap: '8px', alignItems: 'center', padding: '8px 10px' }}>
            <span className="ic" style={{ width: '28px', height: '28px', background: '#3E63B8' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </span>
            <div style={{ fontSize: '9.8px', lineHeight: '1.35' }}>
              <b>Bawa tumbler</b>, isi ulang di dispenser terdekat.
            </div>
          </a>
          <div className="card" style={{ flex: '1', display: 'flex', gap: '8px', alignItems: 'center', padding: '8px 10px' }}>
            <span className="ic" style={{ width: '28px', height: '28px', background: '#C83835' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 10-1-1-2-2-2-4-2 2-1 5-1 6 0 4 3 7 7 7z" />
              </svg>
            </span>
            <div style={{ fontSize: '9.8px', lineHeight: '1.35' }}>
              <b>Hafalkan APAR</b>
              {' terdekat dari booth kamu.'}
            </div>
          </div>
        </div>
        <div className="note" style={{ marginTop: '6px' }}>
          Ketuk/zoom gambar peta untuk melihat titik persisnya.
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          63
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
