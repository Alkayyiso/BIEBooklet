import { ZoomImg } from '../components/ZoomImg';

export default function PagePDress() {
  return (
    <section className="page" id="p-dress" style={{ background: '#FFFCF6' }}>
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
          Brand
        </div>
        <h2 className="t">
          {'Dress '}
          <span style={{ color: '#C83835' }}>Code</span>
        </h2>
        <div className="lead">Warna zoning region diaplikasikan pada vest. Untuk Priority, dress code mengikuti standar priority.</div>
        <div className="row" style={{ marginTop: '8px', gap: '6px' }}>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '10px', overflow: 'hidden', height: '172px', borderBottom: '5px solid #489D95' }}>
              <ZoomImg
                src="assets/img/dc_ro1.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }}
              />
            </div>
            <div className="b" style={{ fontSize: '10px', marginTop: '3px' }}>
              Region Jakarta 1
            </div>
            <div className="xs muted">Vest teal</div>
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '10px', overflow: 'hidden', height: '172px', borderBottom: '5px solid #8C8F94' }}>
              <ZoomImg
                src="assets/img/dc_ro2.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }}
              />
            </div>
            <div className="b" style={{ fontSize: '10px', marginTop: '3px' }}>
              Region Jakarta 2
            </div>
            <div className="xs muted">Vest abu-abu</div>
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '10px', overflow: 'hidden', height: '172px', borderBottom: '5px solid #EEA948' }}>
              <ZoomImg
                src="assets/img/dc_ro3.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }}
              />
            </div>
            <div className="b" style={{ fontSize: '10px', marginTop: '3px' }}>
              Region Jakarta 3
            </div>
            <div className="xs muted">Vest mustard</div>
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '10px', overflow: 'hidden', height: '172px', borderBottom: '5px solid #26272B' }}>
              <ZoomImg
                src="assets/img/dc_prio.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }}
              />
            </div>
            <div className="b" style={{ fontSize: '10px', marginTop: '3px' }}>
              Priority
            </div>
            <div className="xs muted">Standar priority</div>
          </div>
        </div>
        <div className="card" style={{ marginTop: '9px', padding: '9px 12px', borderTop: '4px solid #C83835' }}>
          <div className="b" style={{ fontSize: '12px', marginBottom: '2px' }}>
            Aturan vest
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.35', marginTop: '2px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C83835"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '11px', height: '11px' }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>
              {'Pakai vest sesuai warna region '}
              <b>hanya saat shift jaga</b>.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.35', marginTop: '2px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C83835"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '11px', height: '11px' }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>
              <b>Resleting vest dibuka</b>, vest menutup bagian dada dan panggul.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.35', marginTop: '2px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C83835"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '11px', height: '11px' }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>
              {'Bawahan '}
              <b>celana khaki</b>
              {'. Petugas wanita '}
              <b>boleh memakai rok khaki</b>.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.4px', lineHeight: '1.35', marginTop: '3px', color: '#7a2a28' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C83835"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '11px', height: '11px' }}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
            <span>
              <b>Jangan memakai vest dari rumah</b>
              {' atau di luar lokasi expo. Kenakan di Holding Room Panitia, toilet, atau booth region.'}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '9px' }}>
          <span className="pill" style={{ background: '#fff', border: '1px solid #e3e3e6', fontSize: '9.6px', padding: '3px 8px' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C83835"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '12px', height: '12px' }}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Kemeja putih
          </span>
          <span className="pill" style={{ background: '#fff', border: '1px solid #e3e3e6', fontSize: '9.6px', padding: '3px 8px' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C83835"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '12px', height: '12px' }}
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Celana khaki / rok khaki
          </span>
          <span className="pill" style={{ background: '#fff', border: '1px solid #e3e3e6', fontSize: '9.6px', padding: '3px 8px' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C83835"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '12px', height: '12px' }}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Sneakers putih
          </span>
          <span className="pill" style={{ background: '#fff', border: '1px solid #e3e3e6', fontSize: '9.6px', padding: '3px 8px' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C83835"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '12px', height: '12px' }}
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="8" y1="13" x2="16" y2="13" />
              <line x1="8" y1="17" x2="13" y2="17" />
            </svg>
            Nametag
          </span>
        </div>
        <a
          href="#p-grooming"
          className="card"
          style={{
            display: 'flex',
            gap: '9px',
            alignItems: 'center',
            marginTop: '9px',
            background: '#53545A',
            color: '#fff',
            padding: '9px 12px',
          }}
        >
          <span className="ic" style={{ width: '28px', height: '28px', background: '#EEA948' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10.3px', lineHeight: '1.35' }}>
            <b>Cek juga panduan grooming</b>
            {' untuk rambut, hijab, sepatu, dan aksesori.'}
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
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
          41
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
