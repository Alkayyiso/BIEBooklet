import { ZoomImg } from '../components/ZoomImg';

export default function PagePTiket() {
  return (
    <section className="page" id="p-tiket" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c2" style={{ background: '#C83835' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <line x1="14" y1="14" x2="14" y2="14.01" />
            <line x1="17" y1="17" x2="21" y2="17" />
            <line x1="21" y1="14" x2="21" y2="21" />
            <line x1="14" y1="17" x2="14" y2="21" />
          </svg>
          Bab 02
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
          {'Registrasi & Akses'}
        </div>
        <h2 className="t">
          {'Kenali '}
          <span style={{ color: '#C83835' }}>Warna</span>
          {' Tiket'}
        </h2>
        <div className="lead">Warna QR menentukan booth tujuan tamu. Cocokkan warna, lalu arahkan.</div>
        <div className="row" style={{ marginTop: '10px' }}>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '3px solid #14B1A6', background: '#fff', height: '196px' }}>
              <ZoomImg
                src="assets/img/qr_ro1.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 38%' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#14B1A6', flex: 'none' }} />
              <span className="b" style={{ fontSize: '10.5px' }}>
                RO Jakarta 1
              </span>
            </div>
            <div className="xs muted" style={{ lineHeight: '1.25' }}>
              {'Undangan RO · '}
              <b style={{ color: '#26272B' }}>Booth 1</b>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '3px solid #8C8F94', background: '#fff', height: '196px' }}>
              <ZoomImg
                src="assets/img/qr_ro2.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 38%' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#8C8F94', flex: 'none' }} />
              <span className="b" style={{ fontSize: '10.5px' }}>
                RO Jakarta 2
              </span>
            </div>
            <div className="xs muted" style={{ lineHeight: '1.25' }}>
              {'Undangan RO · '}
              <b style={{ color: '#26272B' }}>Booth 2</b>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '3px solid #F08C00', background: '#fff', height: '196px' }}>
              <ZoomImg
                src="assets/img/qr_ro3.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 38%' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#F08C00', flex: 'none' }} />
              <span className="b" style={{ fontSize: '10.5px' }}>
                RO Jakarta 3
              </span>
            </div>
            <div className="xs muted" style={{ lineHeight: '1.25' }}>
              {'Undangan RO · '}
              <b style={{ color: '#26272B' }}>Booth 3</b>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '8px' }}>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '3px solid #EDB12F', background: '#fff', height: '196px' }}>
              <ZoomImg
                src="assets/img/qr_emp.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 38%' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#EDB12F', flex: 'none' }} />
              <span className="b" style={{ fontSize: '10.5px' }}>
                Employee
              </span>
            </div>
            <div className="xs muted" style={{ lineHeight: '1.25' }}>
              {'Pegawai · '}
              <b style={{ color: '#26272B' }}>Booth 1</b>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '3px solid #3B3B3E', background: '#fff', height: '196px' }}>
              <ZoomImg
                src="assets/img/qr_inst.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 38%' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#3B3B3E', flex: 'none' }} />
              <span className="b" style={{ fontSize: '10.5px' }}>
                Institusi
              </span>
            </div>
            <div className="xs muted" style={{ lineHeight: '1.25' }}>
              {'Tamu korporat · '}
              <b style={{ color: '#26272B' }}>Booth 2</b>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '3px solid #D020DC', background: '#fff', height: '196px' }}>
              <ZoomImg
                src="assets/img/qr_wnn.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 38%' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#D020DC', flex: 'none' }} />
              <span className="b" style={{ fontSize: '10.5px' }}>
                Walk-In Non Nasabah
              </span>
            </div>
            <div className="xs muted" style={{ lineHeight: '1.25' }}>
              {'Daftar di lokasi · '}
              <b style={{ color: '#26272B' }}>Booth 3</b>
            </div>
          </div>
        </div>
        <div className="card" style={{ marginTop: '10px', padding: '9px 12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span className="ic" style={{ width: '30px', height: '30px', background: '#53545A' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <line x1="14" y1="14" x2="14" y2="14.01" />
              <line x1="17" y1="17" x2="21" y2="17" />
              <line x1="21" y1="14" x2="21" y2="21" />
              <line x1="14" y1="17" x2="14" y2="21" />
            </svg>
          </span>
          <div style={{ fontSize: '10.3px', lineHeight: '1.45' }}>
            {'Setiap tiket punya '}
            <b>kode unik</b>
            {', contoh '}
            <span style={{ fontFamily: 'monospace', background: '#f1f1f1', padding: '0 4px', borderRadius: '4px' }}>
              BSI26-ROJKT01-XXXXXX
            </span>
            . Walk-in nasabah memakai warna RO sesuai domisili. Tiket Institusi masih dalam penyesuaian.
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          13
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '1' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
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
