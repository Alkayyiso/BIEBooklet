export default function PageBack() {
  return (
    <section className="page" id="back" style={{ background: '#53545A', color: '#fff' }}>
      <div
        style={{
          position: 'absolute',
          left: '-110px',
          top: '-110px',
          width: '230px',
          height: '230px',
          borderRadius: '50%',
          background: '#489D95',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '-70px',
          top: '70px',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          background: '#EEA948',
        }}
      />
      <div style={{ position: 'absolute', left: '0', top: '410px', width: '140px', height: '16px', background: '#C83835' }} />
      <div style={{ position: 'absolute', left: '140px', top: '410px', width: '290px', height: '16px', background: '#EEA948' }} />
      <img src="assets/img/blgg_white.png" alt="" style={{ position: 'absolute', left: '28px', top: '140px', width: '104px' }} />
      <div style={{ position: 'absolute', left: '28px', right: '28px', top: '300px' }}>
        <div style={{ fontSize: '36px', fontWeight: '900', lineHeight: '1', letterSpacing: '-.8px' }}>
          Satu Tim.
          <br />
          <span style={{ color: '#EEA948' }}>Layanan Terbaik.</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: '28px', right: '28px', top: '446px' }}>
        <div style={{ fontSize: '12px', opacity: '.9', marginBottom: '14px' }}>
          Terima kasih sudah menjadi wajah BSI di International Expo 2026. Simpan halaman ini di HP dan buka kapan saja selama bertugas.
        </div>
        <div className="kick" style={{ color: '#EEA948', marginBottom: '8px' }}>
          Akses cepat
        </div>
        <div className="col" style={{ gap: '7px' }}>
          <a
            href="#toc"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff',
              color: '#26272B',
              borderRadius: '12px',
              padding: '9px 12px',
              fontWeight: '700',
              fontSize: '11.5px',
              borderLeft: '5px solid #489D95',
            }}
          >
            <span style={{ flex: '1' }}>Daftar Isi</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#489D95"
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
              gap: '8px',
              background: '#fff',
              color: '#26272B',
              borderRadius: '12px',
              padding: '9px 12px',
              fontWeight: '700',
              fontSize: '11.5px',
              borderLeft: '5px solid #EEA948',
            }}
          >
            <span style={{ flex: '1' }}>{'Link Registrasi & Dashboard'}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EEA948"
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
              gap: '8px',
              background: '#fff',
              color: '#26272B',
              borderRadius: '12px',
              padding: '9px 12px',
              fontWeight: '700',
              fontSize: '11.5px',
              borderLeft: '5px solid #C83835',
            }}
          >
            <span style={{ flex: '1' }}>Rundown Harian Petugas</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C83835"
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
            href="#p-area"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff',
              color: '#26272B',
              borderRadius: '12px',
              padding: '9px 12px',
              fontWeight: '700',
              fontSize: '11.5px',
              borderLeft: '5px solid #489D95',
            }}
          >
            <span style={{ flex: '1' }}>Petunjuk Area Petugas</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#489D95"
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
            href="#p-evakuasi"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff',
              color: '#26272B',
              borderRadius: '12px',
              padding: '9px 12px',
              fontWeight: '700',
              fontSize: '11.5px',
              borderLeft: '5px solid #C83835',
            }}
          >
            <span style={{ flex: '1' }}>{'Evakuasi & Titik Kumpul'}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C83835"
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
      </div>
      <div
        style={{
          position: 'absolute',
          left: '28px',
          right: '28px',
          bottom: '46px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          border: '1.5px solid rgba(255,255,255,.5)',
          borderRadius: '10px',
          padding: '7px 10px',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EEA948"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '18px', height: '18px' }}
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <div style={{ fontSize: '9.3px', lineHeight: '1.35' }}>
          <b style={{ color: '#EEA948', letterSpacing: '1px' }}>INTERNAL USE ONLY</b>
          <br />
          Dokumen ini hanya untuk petugas dan pegawai BSI. Jangan diteruskan, diunggah, atau dibagikan ke pihak di luar BSI.
        </div>
      </div>
      <img
        src="assets/img/bsi.png"
        alt=""
        style={{
          position: 'absolute',
          right: '28px',
          top: '250px',
          height: '30px',
          background: '#fff',
          borderRadius: '8px',
          padding: '4px 6px',
        }}
      />
      <div className="foot" style={{ color: '#fff' }}>
        <span className="pn" style={{ color: '#fff' }}>
          70
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#fff', opacity: '0.35' }} />
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
