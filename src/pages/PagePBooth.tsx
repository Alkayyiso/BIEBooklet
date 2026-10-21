import { ZoomImg } from '../components/ZoomImg';

export default function PagePBooth() {
  return (
    <section className="page" id="p-booth" style={{ background: '#FFFCF6' }}>
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
          {'Booth '}
          <span style={{ color: '#C83835' }}>Registrasi</span>
        </h2>
        <div className="lead">Ada 3 baris registrasi. Setiap booth melayani dua kategori tamu.</div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', margin: '10px 0 10px', position: 'relative' }}>
          <ZoomImg src="assets/img/booth.jpg" alt="" style={{ width: '100%', display: 'block' }} />{' '}
          <span className="tag" style={{ position: 'absolute', left: '10px', bottom: '10px', background: 'rgba(38,39,43,.8)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            {' Ketuk untuk perbesar'}
          </span>
        </div>
        <div className="row">
          <div className="card" style={{ flex: '1', padding: '0', overflow: 'hidden', textAlign: 'center' }}>
            <div style={{ background: '#489D95', color: '#fff', padding: '8px 0' }}>
              <div className="xs b" style={{ opacity: '.85' }}>
                BOOTH
              </div>
              <div className="big" style={{ fontSize: '30px' }}>
                1
              </div>
            </div>
            <div style={{ padding: '8px 6px' }} className="col">
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '9px',
                    fontWeight: '700',
                    padding: '2px 7px 2px 3px',
                    borderRadius: '10px',
                    background: '#14B1A61f',
                    color: '#26272B',
                    margin: '0 3px 2px 0',
                  }}
                >
                  <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#14B1A6' }} />
                  RO 1
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '9px',
                    fontWeight: '700',
                    padding: '2px 7px 2px 3px',
                    borderRadius: '10px',
                    background: '#EDB12F1f',
                    color: '#26272B',
                    margin: '0 3px 2px 0',
                  }}
                >
                  <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#EDB12F' }} />
                  Employee
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ flex: '1', padding: '0', overflow: 'hidden', textAlign: 'center' }}>
            <div style={{ background: '#53545A', color: '#fff', padding: '8px 0' }}>
              <div className="xs b" style={{ opacity: '.85' }}>
                BOOTH
              </div>
              <div className="big" style={{ fontSize: '30px' }}>
                2
              </div>
            </div>
            <div style={{ padding: '8px 6px' }} className="col">
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '9px',
                    fontWeight: '700',
                    padding: '2px 7px 2px 3px',
                    borderRadius: '10px',
                    background: '#8C8F941f',
                    color: '#26272B',
                    margin: '0 3px 2px 0',
                  }}
                >
                  <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#8C8F94' }} />
                  RO 2
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '9px',
                    fontWeight: '700',
                    padding: '2px 7px 2px 3px',
                    borderRadius: '10px',
                    background: '#3B3B3E1f',
                    color: '#26272B',
                    margin: '0 3px 2px 0',
                  }}
                >
                  <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#3B3B3E' }} />
                  Instansi
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ flex: '1', padding: '0', overflow: 'hidden', textAlign: 'center' }}>
            <div style={{ background: '#C83835', color: '#fff', padding: '8px 0' }}>
              <div className="xs b" style={{ opacity: '.85' }}>
                BOOTH
              </div>
              <div className="big" style={{ fontSize: '30px' }}>
                3
              </div>
            </div>
            <div style={{ padding: '8px 6px' }} className="col">
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '9px',
                    fontWeight: '700',
                    padding: '2px 7px 2px 3px',
                    borderRadius: '10px',
                    background: '#F08C001f',
                    color: '#26272B',
                    margin: '0 3px 2px 0',
                  }}
                >
                  <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#F08C00' }} />
                  RO 3
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '9px',
                    fontWeight: '700',
                    padding: '2px 7px 2px 3px',
                    borderRadius: '10px',
                    background: '#D020DC1f',
                    color: '#26272B',
                    margin: '0 3px 2px 0',
                  }}
                >
                  <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#D020DC' }} />
                  Walk-In
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'center', background: '#EEA94822', boxShadow: 'none' }}
        >
          <span className="ic" style={{ width: '32px', height: '32px', background: '#EEA948' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </span>
          <div style={{ fontSize: '10.5px', lineHeight: '1.45' }}>
            <b>Tips crowd control:</b>
            {' lihat warna QR di layar HP tamu, lalu arahkan ke booth yang cocok. Tamu walk-in yang belum punya QR selalu ke '}
            <b>Booth 3</b>.
          </div>
        </div>
        <div className="card" style={{ marginTop: '8px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span className="ic" style={{ width: '32px', height: '32px', background: '#489D95' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </span>
          <div style={{ fontSize: '10.5px', lineHeight: '1.45' }}>
            Tiga baris registrasi berjajar di area depan, lengkap dengan meja bar dan kursi untuk tamu yang mengisi form.
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          12
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
