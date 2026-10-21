import { ZoomImg } from '../components/ZoomImg';

export default function PagePGmPov() {
  return (
    <section className="page" id="p-gm-pov" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#cg" style={{ background: '#489D95' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
        <div className="kick" style={{ color: '#489D95' }}>
          POV Nasabah
        </div>
        <h2 className="t">
          {'Registrasi '}
          <span style={{ color: '#489D95' }}>Jelajah BIE</span>
        </h2>
        <div className="lead">Lima langkah yang dilihat nasabah di HP saat mendaftar Poin Collection.</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '7px', marginTop: '9px' }}>
          <div className="card" style={{ padding: '6px', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                height: '220px',
                borderRadius: '8px',
                background: '#F3F4F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <ZoomImg
                src="assets/img/gm_flyer.jpg"
                alt=""
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '5px',
                  width: '22px',
                  height: '22px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                1
              </span>
            </div>
            <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2', marginTop: '5px' }}>
              Scan QR di flyer
            </div>
            <div style={{ fontSize: '8.7px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
              Nasabah memindai QR Code di flyer gamification.
            </div>
          </div>
          <div className="card" style={{ padding: '6px', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                height: '220px',
                borderRadius: '8px',
                background: '#F3F4F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <ZoomImg
                src="assets/img/pv2.jpg"
                alt=""
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '5px',
                  width: '22px',
                  height: '22px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                2
              </span>
            </div>
            <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2', marginTop: '5px' }}>
              Daftar dengan QR pengunjung
            </div>
            <div style={{ fontSize: '8.7px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
              {'Di halaman Poin Collection, ketuk '}
              <b>Daftar dengan QR pengunjung</b>. Sudah didaftarkan usher? Cukup masuk dengan No HP.
            </div>
          </div>
          <div className="card" style={{ padding: '6px', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                height: '220px',
                borderRadius: '8px',
                background: '#F3F4F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <ZoomImg
                src="assets/img/pv3.jpg"
                alt=""
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '5px',
                  width: '22px',
                  height: '22px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                3
              </span>
            </div>
            <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2', marginTop: '5px' }}>
              Unggah gambar QR tiket
            </div>
            <div style={{ fontSize: '8.7px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
              {'Ketuk '}
              <b>Unggah Gambar QR</b>, pilih QR tiket registrasi (berawalan BSI26-, selain BSI26-Empl).
            </div>
          </div>
          <div className="card" style={{ padding: '6px', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                height: '220px',
                borderRadius: '8px',
                background: '#F3F4F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <ZoomImg
                src="assets/img/pv4.jpg"
                alt=""
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '5px',
                  width: '22px',
                  height: '22px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                4
              </span>
            </div>
            <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2', marginTop: '5px' }}>
              {'Isi nama & nomor HP'}
            </div>
            <div style={{ fontSize: '8.7px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
              {'Isi '}
              <b>nama lengkap</b>
              {' dan '}
              <b>nomor handphone</b>
              {', lalu ketuk '}
              <b>Masuk / Daftar</b>.
            </div>
          </div>
          <div className="card" style={{ padding: '6px', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                height: '220px',
                borderRadius: '8px',
                background: '#F3F4F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <ZoomImg
                src="assets/img/pv5.jpg"
                alt=""
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '5px',
                  width: '22px',
                  height: '22px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '11px',
                  border: '2px solid #fff',
                }}
              >
                5
              </span>
            </div>
            <div className="b" style={{ fontSize: '10.4px', lineHeight: '1.2', marginTop: '5px' }}>
              Pendaftaran berhasil
            </div>
            <div style={{ fontSize: '8.7px', color: '#5d5e63', lineHeight: '1.3', marginTop: '2px' }}>
              {'Poin terkumpul tampil di layar, dengan progres menuju '}
              <b>minimal 50 poin</b>.
            </div>
          </div>
          <div
            className="card"
            style={{
              padding: '9px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '8px',
              background: '#53545A',
              color: '#fff',
            }}
          >
            <span className="ic" style={{ width: '30px', height: '30px', background: '#EEA948' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div style={{ fontSize: '9.6px', lineHeight: '1.38' }}>
              <b>Nasabah kesulitan?</b>
              {' Arahkan ke meja usher BSI Expo untuk dibantu petugas.'}
            </div>
            <div style={{ fontSize: '9.6px', lineHeight: '1.38', borderTop: '1px solid rgba(255,255,255,.2)', paddingTop: '7px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EEA948"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '12px', height: '12px' }}
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              {' Ingatkan: '}
              <b>jangan buka aplikasi di perangkat umum.</b>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          57
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#cg" style={{ background: '#489D95', opacity: '1' }} />
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
