export default function PageCover() {
  return (
    <section className="page" id="cover" style={{ background: '#FFFCF6' }}>
      <div style={{ position: 'absolute', left: '0', top: '0', width: '430px', height: '860px' }}>
        <div
          style={{
            position: 'absolute',
            right: '-110px',
            top: '96px',
            width: '210px',
            height: '210px',
            borderRadius: '50%',
            background: '#489D95',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '26px',
            top: '372px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: '#EEA948',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-60px',
            top: '120px',
            width: '120px',
            height: '120px',
            borderRadius: '0 0 120px 0',
            background: '#C83835',
          }}
        />
        <div style={{ position: 'absolute', left: '0', bottom: '0', width: '430px', height: '300px', background: '#53545A' }} />
        <div style={{ position: 'absolute', left: '0', bottom: '300px', width: '215px', height: '16px', background: '#EEA948' }} />
        <div style={{ position: 'absolute', left: '215px', bottom: '300px', width: '215px', height: '16px', background: '#C83835' }} />
        <div
          style={{
            position: 'absolute',
            right: '-60px',
            bottom: '150px',
            width: '190px',
            height: '190px',
            borderRadius: '50%',
            background: '#489D95',
            opacity: '.9',
          }}
        />
      </div>
      <img src="assets/img/danantara.png" alt="" style={{ position: 'absolute', left: '24px', top: '24px', height: '36px' }} />
      <img src="assets/img/bsi_cover.png" alt="" style={{ position: 'absolute', right: '24px', top: '24px', height: '36px' }} />{' '}
      <img src="assets/img/blgg.png" alt="" style={{ position: 'absolute', left: '65px', top: '84px', width: '300px' }} />
      <div style={{ position: 'absolute', left: '24px', right: '24px', top: '470px' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="pill" style={{ background: '#489D95', color: '#fff' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {'\u00a023 sampai 25 Oktober 2026'}
          </span>{' '}
          <span className="pill" style={{ background: '#C83835', color: '#fff' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {'\u00a0JICC Hall A & B'}
          </span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: '24px', right: '24px', bottom: '72px', color: '#fff' }}>
        <div className="kick" style={{ color: '#EEA948' }}>
          BSI International Expo 2026
        </div>
        <div style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1', letterSpacing: '-.8px', marginTop: '6px' }}>
          Booklet
          <br />
          Petugas
        </div>
        <div style={{ fontSize: '12px', opacity: '.85', marginTop: '10px', maxWidth: '262px' }}>
          {'Panduan ringkas operasional, registrasi, dan layanan untuk seluruh tim RO\u00a0Jakarta\u00a01,\u00a02, dan\u00a03.'}
        </div>
        <a href="#toc" className="pill" style={{ background: '#fff', color: '#26272B', marginTop: '14px' }}>
          {'Mulai baca '}
          <svg viewBox="0 0 24 24" fill="none" stroke="#26272B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '24px',
          right: '24px',
          bottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#C83835',
          color: '#fff',
          borderRadius: '10px',
          padding: '6px 10px',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '16px', height: '16px' }}
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <div style={{ fontSize: '9px', lineHeight: '1.3' }}>
          <b style={{ letterSpacing: '1px' }}>INTERNAL USE ONLY</b>
          <br />
          Hanya untuk kalangan internal BSI. Dilarang menyebarkan ke pihak di luar BSI.
        </div>
      </div>
    </section>
  );
}
