export default function PageC1() {
  return (
    <section className="page" id="c1" style={{ background: '#489D95', color: '#fff' }}>
      <div
        style={{
          position: 'absolute',
          right: '-90px',
          top: '60px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: '#EEA948',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '28px',
          top: '96px',
          width: '228px',
          height: '228px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '6px solid #fff',
          background: '#fff',
        }}
      >
        <img src="assets/img/inv5.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
        <a className="chip" href="#c1" style={{ background: 'rgba(255,255,255,.22)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Bab 01
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
        01
      </div>
      <div style={{ position: 'absolute', left: '24px', right: '24px', top: '400px' }}>
        <div className="kick" style={{ color: 'rgba(255,255,255,.75)' }}>
          Bab 01
        </div>
        <div style={{ fontSize: '36px', fontWeight: '900', lineHeight: '1.02', letterSpacing: '-.6px', margin: '4px 0 8px' }}>
          {'Jadwal & Rundown'}
        </div>
        <div style={{ fontSize: '12px', opacity: '.9', marginBottom: '16px', maxWidth: '320px' }}>
          Waktu, tempat, sesi kunjungan, dan rundown harian petugas
        </div>
        <a
          href="#p-jadwal"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '9px 12px',
            marginBottom: '6px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {'Jadwal & Sesi Kunjungan'}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 05
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
          href="#p-rundown1"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '9px 12px',
            marginBottom: '6px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Rundown Day 1
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 06
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
          href="#p-rundown23"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '9px 12px',
            marginBottom: '6px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {'Rundown Day 2 & 3'}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 07
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
          04
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#fff', opacity: '1' }} />
          <a href="#c2" style={{ background: '#fff', opacity: '0.35' }} />
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
