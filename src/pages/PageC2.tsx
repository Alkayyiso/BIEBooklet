export default function PageC2() {
  return (
    <section className="page" id="c2" style={{ background: '#C83835', color: '#fff' }}>
      <div
        style={{
          position: 'absolute',
          right: '-90px',
          top: '60px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: '#489D95',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '28px',
          top: '80px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '6px solid #fff',
          background: '#fff',
        }}
      >
        <img src="assets/img/inv4.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '-30px',
          top: '330px',
          width: '90px',
          height: '90px',
          borderRadius: '0 90px 0 0',
          background: 'rgba(255,255,255,.18)',
        }}
      />
      <div className="top">
        <img src="assets/img/blgg_white.png" alt="" />
        <div className="ev" style={{ color: 'rgba(255,255,255,.8)' }}>
          <b style={{ color: '#fff' }}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c2" style={{ background: 'rgba(255,255,255,.22)' }}>
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
        <a className="navbtn" href="#toc" style={{ background: '#fff', color: '#26272B' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#26272B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          Isi
        </a>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '24px',
          top: '70px',
          fontSize: '120px',
          fontWeight: '900',
          lineHeight: '1',
          opacity: '.95',
          letterSpacing: '-4px',
        }}
      >
        02
      </div>
      <div style={{ position: 'absolute', left: '24px', right: '24px', top: '335px' }}>
        <div className="kick" style={{ color: 'rgba(255,255,255,.75)' }}>
          Bab 02
        </div>
        <div style={{ fontSize: '36px', fontWeight: '900', lineHeight: '1.02', letterSpacing: '-.6px', margin: '4px 0 8px' }}>
          {'Registrasi & Akses'}
        </div>
        <div style={{ fontSize: '12px', opacity: '.9', marginBottom: '16px', maxWidth: '320px' }}>
          Jalur masuk, alur registrasi, booth, form, tiket QR, dan script undangan
        </div>
        <a
          href="#p-jalur"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            4 Jalur Masuk
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 09
          </span>
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
        <a
          href="#p-undangan"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Alur Tamu Undangan
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 10
          </span>
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
        <a
          href="#p-walkin"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Alur Walk-In
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 11
          </span>
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
        <a
          href="#p-booth"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Booth Registrasi
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 12
          </span>
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
        <a
          href="#p-tiket"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Kenali Warna Tiket
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 13
          </span>
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
        <a
          href="#p-form"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Form Registrasi
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 14
          </span>
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
        <a
          href="#p-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {'Link Registrasi & Dashboard'}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 15
          </span>
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
        <a
          href="#p-wa"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Script Undangan WA
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 16
          </span>
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
      <div className="foot" style={{ color: '#fff' }}>
        <span className="pn" style={{ color: '#fff' }}>
          08
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c2" style={{ background: '#fff', opacity: '1' }} />
          <a href="#c3" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c4" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c5" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c6" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#cg" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c7" style={{ background: '#fff', opacity: '0.35' }} />
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontWeight: '700', letterSpacing: '.2px', color: '#fff' }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
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
