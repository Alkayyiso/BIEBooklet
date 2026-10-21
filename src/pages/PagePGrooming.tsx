import { ZoomImg } from '../components/ZoomImg';

export default function PagePGrooming() {
  return (
    <section className="page" id="p-grooming" style={{ background: '#FFFCF6' }}>
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
          Grooming
        </div>
        <h2 className="t">
          {'Grooming Pria: '}
          <span style={{ color: '#489D95' }}>{'Rambut & Wajah'}</span>
        </h2>
        <div className="lead">{"Do & don't untuk rambut dan wajah, plus tiga langkah skincare dasar."}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '9px' }}>
          <span className="tag" style={{ background: '#489D95' }}>
            Pria
          </span>
          <span className="b" style={{ fontSize: '12.5px' }}>
            {'Rambut & Wajah'}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '6px 0 4px' }}>
          <span className="tag" style={{ background: '#1F7F77', fontSize: '9.5px', padding: '2px 9px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {' DO'}
          </span>
          <span style={{ flex: '1', height: '1px', background: '#1F7F77', opacity: '.3' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '6px' }}>
          <div style={{ minWidth: '0' }}>
            <div
              style={{
                position: 'relative',
                height: '80px',
                borderRadius: '9px',
                overflow: 'hidden',
                background: '#f3f3f4',
                border: '2px solid #1F7F77',
              }}
            >
              <ZoomImg
                src="assets/img/hair_do1.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />{' '}
              <span
                className="ic"
                style={{ position: 'absolute', left: '3px', bottom: '3px', width: '18px', height: '18px', background: '#1F7F77' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: '800', lineHeight: '1.15', marginTop: '3px', color: '#1F7F77' }}>Rambut rapi</div>
            <div style={{ fontSize: '8.2px', color: '#5d5e63', lineHeight: '1.25' }}>Terawat, tidak menutupi kerah</div>
          </div>
          <div style={{ minWidth: '0' }}>
            <div
              style={{
                position: 'relative',
                height: '80px',
                borderRadius: '9px',
                overflow: 'hidden',
                background: '#f3f3f4',
                border: '2px solid #1F7F77',
              }}
            >
              <ZoomImg
                src="assets/img/hair_do2.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />{' '}
              <span
                className="ic"
                style={{ position: 'absolute', left: '3px', bottom: '3px', width: '18px', height: '18px', background: '#1F7F77' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: '800', lineHeight: '1.15', marginTop: '3px', color: '#1F7F77' }}>Model sopan</div>
            <div style={{ fontSize: '8.2px', color: '#5d5e63', lineHeight: '1.25' }}>Profesional</div>
          </div>
          <div style={{ minWidth: '0' }}>
            <div
              style={{
                position: 'relative',
                height: '80px',
                borderRadius: '9px',
                overflow: 'hidden',
                background: '#f3f3f4',
                border: '2px solid #1F7F77',
              }}
            >
              <ZoomImg
                src="assets/img/hair_do3.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />{' '}
              <span
                className="ic"
                style={{ position: 'absolute', left: '3px', bottom: '3px', width: '18px', height: '18px', background: '#1F7F77' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: '800', lineHeight: '1.15', marginTop: '3px', color: '#1F7F77' }}>
              {'Tanpa kumis & jenggot'}
            </div>
          </div>
          <div style={{ minWidth: '0' }}>
            <div
              style={{
                position: 'relative',
                height: '80px',
                borderRadius: '9px',
                overflow: 'hidden',
                background: '#f3f3f4',
                border: '2px solid #1F7F77',
              }}
            >
              <ZoomImg
                src="assets/img/hair_do4.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />{' '}
              <span
                className="ic"
                style={{ position: 'absolute', left: '3px', bottom: '3px', width: '18px', height: '18px', background: '#1F7F77' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: '800', lineHeight: '1.15', marginTop: '3px', color: '#1F7F77' }}>
              {'Bersih & rapi'}
            </div>
            <div style={{ fontSize: '8.2px', color: '#5d5e63', lineHeight: '1.25' }}>Wajah segar</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '6px 0 4px' }}>
          <span className="tag" style={{ background: '#C83835', fontSize: '9.5px', padding: '2px 9px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            {" DON'T"}
          </span>
          <span style={{ flex: '1', height: '1px', background: '#C83835', opacity: '.3' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '6px' }}>
          <div style={{ minWidth: '0' }}>
            <div
              style={{
                position: 'relative',
                height: '80px',
                borderRadius: '9px',
                overflow: 'hidden',
                background: '#f3f3f4',
                border: '2px solid #C83835',
              }}
            >
              <ZoomImg
                src="assets/img/hair_no1.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />{' '}
              <span
                className="ic"
                style={{ position: 'absolute', left: '3px', bottom: '3px', width: '18px', height: '18px', background: '#C83835' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: '800', lineHeight: '1.15', marginTop: '3px', color: '#C83835' }}>Rambut panjang</div>
            <div style={{ fontSize: '8.2px', color: '#5d5e63', lineHeight: '1.25' }}>Berantakan, menutupi kerah</div>
          </div>
          <div style={{ minWidth: '0' }}>
            <div
              style={{
                position: 'relative',
                height: '80px',
                borderRadius: '9px',
                overflow: 'hidden',
                background: '#f3f3f4',
                border: '2px solid #C83835',
              }}
            >
              <ZoomImg
                src="assets/img/hair_no2.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />{' '}
              <span
                className="ic"
                style={{ position: 'absolute', left: '3px', bottom: '3px', width: '18px', height: '18px', background: '#C83835' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: '800', lineHeight: '1.15', marginTop: '3px', color: '#C83835' }}>Terlalu trendi</div>
            <div style={{ fontSize: '8.2px', color: '#5d5e63', lineHeight: '1.25' }}>Model tidak sopan</div>
          </div>
          <div style={{ minWidth: '0' }}>
            <div
              style={{
                position: 'relative',
                height: '80px',
                borderRadius: '9px',
                overflow: 'hidden',
                background: '#f3f3f4',
                border: '2px solid #C83835',
              }}
            >
              <ZoomImg
                src="assets/img/hair_no3.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />{' '}
              <span
                className="ic"
                style={{ position: 'absolute', left: '3px', bottom: '3px', width: '18px', height: '18px', background: '#C83835' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: '800', lineHeight: '1.15', marginTop: '3px', color: '#C83835' }}>
              Kumis/janggut tebal
            </div>
            <div style={{ fontSize: '8.2px', color: '#5d5e63', lineHeight: '1.25' }}>Tidak terawat</div>
          </div>
          <div style={{ minWidth: '0' }}>
            <div
              style={{
                position: 'relative',
                height: '80px',
                borderRadius: '9px',
                overflow: 'hidden',
                background: '#f3f3f4',
                border: '2px solid #C83835',
              }}
            >
              <ZoomImg
                src="assets/img/hair_no4.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />{' '}
              <span
                className="ic"
                style={{ position: 'absolute', left: '3px', bottom: '3px', width: '18px', height: '18px', background: '#C83835' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: '800', lineHeight: '1.15', marginTop: '3px', color: '#C83835' }}>Wajah kusam</div>
            <div style={{ fontSize: '8.2px', color: '#5d5e63', lineHeight: '1.25' }}>Kurang rapi</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '9px' }}>
          <span className="tag" style={{ background: '#489D95' }}>
            Pria
          </span>
          <span className="b" style={{ fontSize: '12.5px' }}>
            Basic skincare, 3 langkah
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginTop: '5px' }}>
          <div className="card" style={{ padding: '6px', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <ZoomImg
              src="assets/img/skin1.jpg"
              alt=""
              style={{ width: '38px', height: '70px', objectFit: 'cover', objectPosition: '30% 50%', borderRadius: '5px' }}
            />
            <div style={{ lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '9.6px', color: '#489D95' }}>
                01 Face wash
              </div>
              <div style={{ fontSize: '8.2px', color: '#5d5e63' }}>Bersihkan kotoran, minyak, dan polusi.</div>
            </div>
          </div>
          <div className="card" style={{ padding: '6px', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <ZoomImg
              src="assets/img/skin2.jpg"
              alt=""
              style={{ width: '38px', height: '70px', objectFit: 'cover', objectPosition: '30% 50%', borderRadius: '5px' }}
            />
            <div style={{ lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '9.6px', color: '#489D95' }}>
                02 Moisturizer
              </div>
              <div style={{ fontSize: '8.2px', color: '#5d5e63' }}>Lembapkan kulit, jaga skin barrier.</div>
            </div>
          </div>
          <div className="card" style={{ padding: '6px', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <ZoomImg
              src="assets/img/skin3.jpg"
              alt=""
              style={{ width: '38px', height: '70px', objectFit: 'cover', objectPosition: '30% 50%', borderRadius: '5px' }}
            />
            <div style={{ lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '9.6px', color: '#489D95' }}>
                03 Sunscreen
              </div>
              <div style={{ fontSize: '8.2px', color: '#5d5e63' }}>Lindungi dari sinar UV.</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            background: '#489D9518',
            borderRadius: '10px',
            padding: '6px 10px',
            marginTop: '8px',
            fontSize: '9.4px',
            lineHeight: '1.35',
          }}
        >
          <span className="ic" style={{ width: '20px', height: '20px', background: '#489D95' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </span>
          <span>
            {'Gunakan skincare '}
            <b>pagi dan malam</b>
            {' secara rutin. Penampilan rapi dan bersih adalah bagian dari citra BSI.'}
          </span>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          44
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
