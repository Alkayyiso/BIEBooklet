import { ZoomImg } from '../components/ZoomImg';

export default function Page43PDamkar() {
  return (
    <section className="page" id="p-damkar" style={{ background: '#FFFCF6' }}>
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
          {'Mobil Damkar & '}
          <span style={{ color: '#EEA948' }}>Fasilitas VIP</span>
        </h2>
        <div className="lead">Lokasi mobil pemadam kebakaran serta mushala dan toilet khusus VIP.</div>
        <div className="card" style={{ padding: '8px', marginTop: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
            <span className="ic" style={{ width: '28px', height: '28px', background: '#C83835' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '12.5px' }}>
                Mobil Damkar
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>
                1 mobil pemadam kebakaran, standby di sisi utara Hall B dekat Loading Dock
              </div>
            </div>
            <img src="assets/img/firetruck.jpg" alt="" style={{ width: '70px', borderRadius: '6px' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ flex: '1', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee', height: '178px' }}>
              <ZoomImg
                src="assets/img/damkar.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }}
              />
            </div>
            <div
              style={{ width: '92px', flex: 'none', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee', height: '178px' }}
            >
              <ZoomImg src="assets/img/damkar_key.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="note" style={{ marginTop: '4px' }}>
            Kanan: posisi Hall A, Hall B, dan pintu masuk di kompleks JICC.
          </div>
        </div>
        <div className="card" style={{ padding: '8px', marginTop: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
            <span className="ic" style={{ width: '28px', height: '28px', background: '#EEA948' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <div style={{ flex: '1', lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '12.5px' }}>
                {'Mushala VIP & Toilet VIP'}
              </div>
              <div style={{ fontSize: '9.3px', color: '#6b6c70' }}>Masing-masing 1 unit, di sisi kanan Hall A dekat BSI Gold</div>
            </div>
          </div>
          <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee', height: '196px' }}>
            <ZoomImg
              src="assets/img/vip.jpg"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '100% 40%' }}
            />
          </div>
          <div className="note" style={{ marginTop: '4px' }}>
            Arahkan tamu VIP ke fasilitas ini. Tamu umum menggunakan musholla dan restroom reguler.
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          43
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
