import { ZoomImg } from '../components/ZoomImg';

export default function Page40PEvakuasi() {
  return (
    <section className="page" id="p-evakuasi" style={{ background: '#FFFCF6' }}>
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
        <div className="kick" style={{ color: '#EEA948' }}>
          Keselamatan
        </div>
        <h2 className="t">
          {'Jalur Evakuasi & '}
          <span style={{ color: '#1F7A4D' }}>Titik Kumpul</span>
        </h2>
        <div className="lead">Ada 6 emergency exit dan 3 assembly point. Kenali yang terdekat dari posmu sejak hari pertama.</div>
        <div style={{ margin: '8px -20px 6px', position: 'relative', background: '#fff' }}>
          <ZoomImg src="assets/img/evac.jpg" alt="" style={{ width: '100%', display: 'block' }} />
          <span className="tag" style={{ position: 'absolute', right: '8px', top: '8px', background: 'rgba(38,39,43,.8)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            {' Ketuk untuk perbesar'}
          </span>
        </div>
        <div className="row xs" style={{ gap: '12px', marginBottom: '9px', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="ic" style={{ width: '17px', height: '17px', border: '2px solid #C83835', background: '#fff' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#C83835" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </span>
            Emergency exit 1 s.d. 6
          </span>{' '}
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span
              style={{
                width: '20px',
                height: '11px',
                background: '#1F7A4D',
                clipPath: 'polygon(0 50%,35% 0,35% 25%,100% 25%,100% 75%,35% 75%,35% 100%)',
              }}
            />
            Arah ke assembly point
          </span>{' '}
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2BB24C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '13px', height: '13px' }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            Main gate (sisi kanan)
          </span>
        </div>
        <div className="kick" style={{ color: '#1F7A4D', marginBottom: '5px' }}>
          3 titik kumpul (assembly point)
        </div>
        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '92px', marginBottom: '6px' }}>
          <ZoomImg
            src="assets/img/assembly.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%' }}
          />
        </div>
        <div className="row">
          <div className="card" style={{ flex: '1', padding: '8px 7px', borderTop: '4px solid #1F7A4D' }}>
            <span className="tag" style={{ background: '#1F7A4D' }}>
              AP I
            </span>
            <div className="b" style={{ fontSize: '11px', marginTop: '4px', lineHeight: '1.15' }}>
              Jalur Pintu 9
            </div>
            <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.25' }}>Dekat parkir loading</div>
            <div style={{ fontSize: '8.6px', color: '#1F7A4D', fontWeight: '700', lineHeight: '1.25', marginTop: '3px' }}>
              Sisi kiri atas Hall B, dekat Exit 6
            </div>
          </div>
          <div className="card" style={{ flex: '1', padding: '8px 7px', borderTop: '4px solid #1F7A4D' }}>
            <span className="tag" style={{ background: '#1F7A4D' }}>
              AP II
            </span>
            <div className="b" style={{ fontSize: '11px', marginTop: '4px', lineHeight: '1.15' }}>
              Jalur Pintu 8
            </div>
            <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.25' }}>Dekat lobby depan</div>
            <div style={{ fontSize: '8.6px', color: '#1F7A4D', fontWeight: '700', lineHeight: '1.25', marginTop: '3px' }}>
              Sisi kanan bawah Hall A, dekat Exit 1
            </div>
          </div>
          <div className="card" style={{ flex: '1', padding: '8px 7px', borderTop: '4px solid #1F7A4D' }}>
            <span className="tag" style={{ background: '#1F7A4D' }}>
              AP III
            </span>
            <div className="b" style={{ fontSize: '11px', marginTop: '4px', lineHeight: '1.15' }}>
              Jalur Karyawan
            </div>
            <div style={{ fontSize: '9px', color: '#6b6c70', lineHeight: '1.25' }}>Dekat parkir VIP</div>
            <div style={{ fontSize: '8.6px', color: '#1F7A4D', fontWeight: '700', lineHeight: '1.25', marginTop: '3px' }}>
              Sisi kiri bawah Hall B
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: '#C83835',
            color: '#fff',
            borderRadius: '14px',
            padding: '9px 12px',
            marginTop: '8px',
          }}
        >
          <span className="ic" style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,.25)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </span>
          <div style={{ fontSize: '10.4px', lineHeight: '1.4' }}>
            <b>Saat darurat:</b>
            {' patuhi arahan petugas, keluar lewat emergency exit terdekat, lalu menuju titik kumpul.'}
          </div>
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
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
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
