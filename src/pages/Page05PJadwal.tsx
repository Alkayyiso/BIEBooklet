export default function Page05PJadwal() {
  return (
    <section className="page" id="p-jadwal" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c1" style={{ background: '#489D95' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Bab 01
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
          {'Jadwal & Rundown'}
        </div>
        <h2 className="t">
          {'Jadwal & '}
          <span style={{ color: '#489D95' }}>Sesi</span>
        </h2>
        <div className="lead">Kapan gate dibuka dan sesi apa saja yang berjalan setiap hari.</div>
        <div style={{ display: 'flex', gap: '8px', margin: '10px 0 8px' }}>
          <div className="card" style={{ flex: '1', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="ic" style={{ width: '32px', height: '32px', background: '#489D95' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <div style={{ lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '12.5px' }}>
                23 sampai 25 Okt
              </div>
              <div className="xs muted">Jumat s.d. Minggu, 2026</div>
            </div>
          </div>
          <div className="card" style={{ flex: '1', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="ic" style={{ width: '32px', height: '32px', background: '#C83835' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div style={{ lineHeight: '1.25' }}>
              <div className="b" style={{ fontSize: '12.5px' }}>
                {'JICC Hall A & B'}
              </div>
              <div className="xs muted">Senayan, Jakarta</div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: '8px' }}>
          <div style={{ flex: '1', background: '#2E9F95', color: '#fff', borderRadius: '12px', padding: '8px 9px' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '18px', height: '18px' }}
            >
              <path d="M17 18a5 5 0 0 0-10 0" />
              <line x1="12" y1="2" x2="12" y2="9" />
              <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
              <line x1="1" y1="18" x2="3" y2="18" />
              <line x1="21" y1="18" x2="23" y2="18" />
              <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
              <line x1="23" y1="22" x2="1" y2="22" />
            </svg>
            <div className="b" style={{ fontSize: '13px', marginTop: '2px' }}>
              Sesi 1
            </div>
            <div style={{ fontSize: '10px', opacity: '.9' }}>09.00 s.d. 14.00</div>
          </div>
          <div style={{ flex: '1', background: '#C83835', color: '#fff', borderRadius: '12px', padding: '8px 9px' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '18px', height: '18px' }}
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <div className="b" style={{ fontSize: '13px', marginTop: '2px' }}>
              Sesi 2
            </div>
            <div style={{ fontSize: '10px', opacity: '.9' }}>13.00 s.d. 17.00</div>
          </div>
          <div style={{ flex: '1', background: '#7A3D8E', color: '#fff', borderRadius: '12px', padding: '8px 9px' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '18px', height: '18px' }}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <div className="b" style={{ fontSize: '13px', marginTop: '2px' }}>
              Sesi 3
            </div>
            <div style={{ fontSize: '10px', opacity: '.9' }}>16.00 s.d. 21.00</div>
          </div>
        </div>
        <div className="card" style={{ padding: '10px 12px 6px', marginBottom: '8px' }}>
          <div className="b" style={{ fontSize: '12px', marginBottom: '4px' }}>
            Sesi yang berjalan per hari
          </div>
          <svg width="360" height="148" viewBox="0 0 360 148" fontFamily="P">
            <text x="52.0" y="10" fontSize="8.5" fill="#8a8b90" textAnchor="middle" fontWeight="600">
              09.00
            </text>
            <line x1="52.0" y1="14" x2="52.0" y2="148" stroke="#000" opacity=".06" />
            <text x="100.0" y="10" fontSize="8.5" fill="#8a8b90" textAnchor="middle" fontWeight="600">
              11.00
            </text>
            <line x1="100.0" y1="14" x2="100.0" y2="148" stroke="#000" opacity=".06" />
            <text x="148.0" y="10" fontSize="8.5" fill="#8a8b90" textAnchor="middle" fontWeight="600">
              13.00
            </text>
            <line x1="148.0" y1="14" x2="148.0" y2="148" stroke="#000" opacity=".06" />
            <text x="196.0" y="10" fontSize="8.5" fill="#8a8b90" textAnchor="middle" fontWeight="600">
              15.00
            </text>
            <line x1="196.0" y1="14" x2="196.0" y2="148" stroke="#000" opacity=".06" />
            <text x="244.0" y="10" fontSize="8.5" fill="#8a8b90" textAnchor="middle" fontWeight="600">
              17.00
            </text>
            <line x1="244.0" y1="14" x2="244.0" y2="148" stroke="#000" opacity=".06" />
            <text x="292.0" y="10" fontSize="8.5" fill="#8a8b90" textAnchor="middle" fontWeight="600">
              19.00
            </text>
            <line x1="292.0" y1="14" x2="292.0" y2="148" stroke="#000" opacity=".06" />
            <text x="340.0" y="10" fontSize="8.5" fill="#8a8b90" textAnchor="middle" fontWeight="600">
              21.00
            </text>
            <line x1="340.0" y1="14" x2="340.0" y2="148" stroke="#000" opacity=".06" />
            <text x="0" y="42.0" fontSize="10.5" fontWeight="800" fill="#26272B">
              Jumat
            </text>
            <rect x="148.0" y="21" width="96.0" height="10" rx="5" fill="#C83835" />
            <text x="154.0" y="28.6" fontSize="7.5" fontWeight="800" fill="#fff">
              S2
            </text>
            <rect x="220.0" y="33" width="120.0" height="10" rx="5" fill="#7A3D8E" />
            <text x="226.0" y="40.6" fontSize="7.5" fontWeight="800" fill="#fff">
              S3
            </text>
            <text x="52.0" y="33" fontSize="8" fontWeight="700" fill="#C83835">
              Open gate 13.00
            </text>
            <line x1="0" y1="60" x2="360" y2="60" stroke="#eee" />
            <text x="0" y="84.0" fontSize="10.5" fontWeight="800" fill="#26272B">
              Sabtu
            </text>
            <rect x="52.0" y="63" width="120.0" height="10" rx="5" fill="#2E9F95" />
            <text x="58.0" y="70.6" fontSize="7.5" fontWeight="800" fill="#fff">
              S1
            </text>
            <rect x="148.0" y="75" width="96.0" height="10" rx="5" fill="#C83835" />
            <text x="154.0" y="82.6" fontSize="7.5" fontWeight="800" fill="#fff">
              S2
            </text>
            <rect x="220.0" y="87" width="120.0" height="10" rx="5" fill="#7A3D8E" />
            <text x="226.0" y="94.6" fontSize="7.5" fontWeight="800" fill="#fff">
              S3
            </text>
            <line x1="0" y1="102" x2="360" y2="102" stroke="#eee" />
            <text x="0" y="126.0" fontSize="10.5" fontWeight="800" fill="#26272B">
              Minggu
            </text>
            <rect x="52.0" y="105" width="120.0" height="10" rx="5" fill="#2E9F95" />
            <text x="58.0" y="112.6" fontSize="7.5" fontWeight="800" fill="#fff">
              S1
            </text>
            <rect x="148.0" y="117" width="96.0" height="10" rx="5" fill="#C83835" />
            <text x="154.0" y="124.6" fontSize="7.5" fontWeight="800" fill="#fff">
              S2
            </text>
            <rect x="220.0" y="129" width="120.0" height="10" rx="5" fill="#7A3D8E" />
            <text x="226.0" y="136.6" fontSize="7.5" fontWeight="800" fill="#fff">
              S3
            </text>
            <line x1="196.0" y1="118" x2="196.0" y2="128" stroke="#26272B" strokeWidth="2" />
            <text x="52.0" y="135" fontSize="8" fontWeight="700" fill="#26272B">
              S2 clear area 15.00
            </text>
          </svg>
        </div>
        <div className="col" style={{ gap: '5px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10.2px' }}>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#EEA948' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
                <circle cx="14.5" cy="12" r=".8" />
              </svg>
            </span>
            <span>
              <b>Jumat:</b>
              {' gate baru dibuka pukul 13.00 WIB, jadi tidak ada Sesi 1.'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10.2px' }}>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#C83835' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <span>
              <b>Minggu Sesi 2:</b>
              {' clear area pukul 15.00 WIB.'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10.2px' }}>
            <span className="ic" style={{ width: '22px', height: '22px', background: '#7A3D8E' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <span>
              <b>Minggu Sesi 3:</b>
              {' kunjungan internal pegawai dan nasabah undangan.'}
            </span>
          </div>
        </div>
        <div className="row" style={{ marginBottom: '8px' }}>
          <a
            href="#p-rundown1"
            className="card"
            style={{ flex: '1', display: 'flex', gap: '8px', alignItems: 'center', background: '#EEA948', padding: '9px 10px' }}
          >
            <span className="ic" style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,.35)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <div style={{ lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '11.5px' }}>
                Rundown Day 1
              </div>
              <div className="xs">Jumat, long shift</div>
            </div>
          </a>{' '}
          <a
            href="#p-rundown23"
            className="card"
            style={{
              flex: '1',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              background: '#489D95',
              color: '#fff',
              padding: '9px 10px',
            }}
          >
            <span className="ic" style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,.25)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <div style={{ lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '11.5px' }}>
                {'Rundown Day 2 & 3'}
              </div>
              <div className="xs">{'Sabtu & Minggu, 2 shift'}</div>
            </div>
          </a>
        </div>
        <a
          href="#p-shift"
          className="card"
          style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#53545A', color: '#fff', padding: '10px 12px' }}
        >
          <span className="ic" style={{ width: '32px', height: '32px', background: '#EEA948' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10.6px', lineHeight: '1.4' }}>
            <b>Sesi visitor bertumpuk dengan pergantian shift petugas.</b>
            {' Kenali tiga titik kritisnya agar booth tidak pernah kosong.'}
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '16px', height: '16px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>{' '}
        <a
          href="#p-area"
          className="card"
          style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px', padding: '10px 12px' }}
        >
          <span className="ic" style={{ width: '32px', height: '32px', background: '#C83835' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10.6px', lineHeight: '1.4' }}>
            <b>Baru pertama kali ke JICC?</b>
            {' Lihat rute petugas dari pintu masuk ke Area Briefing.'}
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C83835"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '16px', height: '16px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          05
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '1' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
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
