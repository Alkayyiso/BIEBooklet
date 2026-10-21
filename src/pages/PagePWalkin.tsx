export default function PagePWalkin() {
  return (
    <section className="page" id="p-walkin" style={{ background: '#FFFCF6' }}>
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
          {'Alur '}
          <span style={{ color: '#C83835' }}>Walk-In</span>
        </h2>
        <div className="lead">Untuk pengunjung yang datang tanpa undangan. Prosesnya cepat dan selesai di lokasi.</div>
        <div style={{ marginTop: '10px' }}>
          <div style={{ position: 'relative', display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div
              style={{
                position: 'absolute',
                left: '15px',
                top: '32px',
                bottom: '-8px',
                width: '3px',
                background: '#53545A',
                opacity: '.3',
              }}
            />
            <span
              className="ic"
              style={{
                width: '32px',
                height: '32px',
                background: '#53545A',
                color: '#fff',
                fontWeight: '900',
                fontSize: '14px',
                zIndex: '1',
              }}
            >
              1
            </span>
            <div className="card" style={{ flex: '1', display: 'flex', gap: '10px', padding: '7px', alignItems: 'center' }}>
              <img
                src="assets/img/walk1.jpg"
                alt=""
                style={{ width: '112px', height: '98px', objectFit: 'cover', borderRadius: '9px', flex: 'none' }}
              />
              <div style={{ flex: '1' }}>
                <div className="b" style={{ fontSize: '12px', lineHeight: '1.25', marginBottom: '2px' }}>
                  Datang langsung ke expo
                </div>
                <div style={{ fontSize: '10.6px', color: '#5d5e63', lineHeight: '1.42' }}>
                  Pengunjung tanpa undangan tetap boleh hadir di BSI International Expo 2026.
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div
              style={{
                position: 'absolute',
                left: '15px',
                top: '32px',
                bottom: '-8px',
                width: '3px',
                background: '#53545A',
                opacity: '.3',
              }}
            />
            <span
              className="ic"
              style={{
                width: '32px',
                height: '32px',
                background: '#53545A',
                color: '#fff',
                fontWeight: '900',
                fontSize: '14px',
                zIndex: '1',
              }}
            >
              2
            </span>
            <div className="card" style={{ flex: '1', display: 'flex', gap: '10px', padding: '7px', alignItems: 'center' }}>
              <img
                src="assets/img/walk2.jpg"
                alt=""
                style={{ width: '112px', height: '98px', objectFit: 'cover', borderRadius: '9px', flex: 'none' }}
              />
              <div style={{ flex: '1' }}>
                <div className="b" style={{ fontSize: '12px', lineHeight: '1.25', marginBottom: '2px' }}>
                  Belum punya QR? Arahkan
                </div>
                <div style={{ fontSize: '10.6px', color: '#5d5e63', lineHeight: '1.42' }}>
                  Tim EO dan tim BSI mengarahkan pengunjung tanpa QR ke proses registrasi.
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div
              style={{
                position: 'absolute',
                left: '15px',
                top: '32px',
                bottom: '-8px',
                width: '3px',
                background: '#53545A',
                opacity: '.3',
              }}
            />
            <span
              className="ic"
              style={{
                width: '32px',
                height: '32px',
                background: '#53545A',
                color: '#fff',
                fontWeight: '900',
                fontSize: '14px',
                zIndex: '1',
              }}
            >
              3
            </span>
            <div className="card" style={{ flex: '1', display: 'flex', gap: '10px', padding: '7px', alignItems: 'center' }}>
              <img
                src="assets/img/walk3.jpg"
                alt=""
                style={{ width: '112px', height: '98px', objectFit: 'cover', borderRadius: '9px', flex: 'none' }}
              />
              <div style={{ flex: '1' }}>
                <div className="b" style={{ fontSize: '12px', lineHeight: '1.25', marginBottom: '2px' }}>
                  Scan QR Walk-In Registration
                </div>
                <div style={{ fontSize: '10.6px', color: '#5d5e63', lineHeight: '1.42' }}>
                  Pengunjung memindai QR walk-in, mengisi data diri, dan memilih nasabah BSI atau bukan.
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div
              style={{
                position: 'absolute',
                left: '15px',
                top: '32px',
                bottom: '-8px',
                width: '3px',
                background: '#53545A',
                opacity: '.3',
              }}
            />
            <span
              className="ic"
              style={{
                width: '32px',
                height: '32px',
                background: '#53545A',
                color: '#fff',
                fontWeight: '900',
                fontSize: '14px',
                zIndex: '1',
              }}
            >
              4
            </span>
            <div className="card" style={{ flex: '1', display: 'flex', gap: '10px', padding: '7px', alignItems: 'center' }}>
              <img
                src="assets/img/walk4.jpg"
                alt=""
                style={{ width: '112px', height: '98px', objectFit: 'cover', borderRadius: '9px', flex: 'none' }}
              />
              <div style={{ flex: '1' }}>
                <div className="b" style={{ fontSize: '12px', lineHeight: '1.25', marginBottom: '2px' }}>
                  {'Dapat QR & kode unik'}
                </div>
                <div style={{ fontSize: '10.6px', color: '#5d5e63', lineHeight: '1.42' }}>
                  Nasabah mendapat QR sesuai domisili (RO1, RO2, RO3). Non-nasabah mendapat QR berwarna magenta.
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <span
              className="ic"
              style={{
                width: '32px',
                height: '32px',
                background: '#53545A',
                color: '#fff',
                fontWeight: '900',
                fontSize: '14px',
                zIndex: '1',
              }}
            >
              5
            </span>
            <div className="card" style={{ flex: '1', display: 'flex', gap: '10px', padding: '7px', alignItems: 'center' }}>
              <img
                src="assets/img/walk5.jpg"
                alt=""
                style={{ width: '112px', height: '98px', objectFit: 'cover', borderRadius: '9px', flex: 'none' }}
              />
              <div style={{ flex: '1' }}>
                <div className="b" style={{ fontSize: '12px', lineHeight: '1.25', marginBottom: '2px' }}>
                  {'Nikmati promo & acara'}
                </div>
                <div style={{ fontSize: '10.6px', color: '#5d5e63', lineHeight: '1.42' }}>
                  Pengunjung menikmati program promosi, acara, dan suasana expo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          11
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
