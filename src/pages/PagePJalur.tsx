export default function PagePJalur() {
  return (
    <section className="page" id="p-jalur" style={{ background: '#FFFCF6' }}>
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
          {'4 Jalur '}
          <span style={{ color: '#C83835' }}>Masuk</span>
        </h2>
        <div className="lead">Setiap tamu masuk lewat salah satu dari empat jalur ini, dan semuanya memakai QR code.</div>
        <div className="col" style={{ marginTop: '10px', gap: '7px' }}>
          <div className="card" style={{ display: 'flex', gap: '10px', padding: '8px', alignItems: 'center' }}>
            <img
              src="assets/img/ep_ro.jpg"
              alt=""
              style={{ width: '92px', height: '72px', objectFit: 'cover', borderRadius: '10px', flex: 'none' }}
            />
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontWeight: '900', fontSize: '15px', color: '#489D95' }}>RO Jakarta</span>
                <span className="xs muted">Region Office 1, 2, 3</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', alignItems: 'center', margin: '2px 0 5px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Undangan dari RO
                </span>
                <span style={{ color: '#489D95' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Isi registrasi
                </span>
                <span style={{ color: '#489D95' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Dapat QR
                </span>
              </div>
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
          </div>
          <div className="card" style={{ display: 'flex', gap: '10px', padding: '8px', alignItems: 'center' }}>
            <img
              src="assets/img/ep_inst.jpg"
              alt=""
              style={{ width: '92px', height: '72px', objectFit: 'cover', borderRadius: '10px', flex: 'none' }}
            />
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontWeight: '900', fontSize: '15px', color: '#C83835' }}>Institusi</span>
                <span className="xs muted">Tamu korporat</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', alignItems: 'center', margin: '2px 0 5px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Undangan Kantor Pusat
                </span>
                <span style={{ color: '#C83835' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C83835"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Isi registrasi
                </span>
                <span style={{ color: '#C83835' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C83835"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Dapat QR
                </span>
              </div>
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
                Institusi
              </span>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '10px', padding: '8px', alignItems: 'center' }}>
            <img
              src="assets/img/ep_emp.jpg"
              alt=""
              style={{ width: '92px', height: '72px', objectFit: 'cover', borderRadius: '10px', flex: 'none' }}
            />
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontWeight: '900', fontSize: '15px', color: '#EEA948' }}>Employee</span>
                <span className="xs muted">Internal BSI</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', alignItems: 'center', margin: '2px 0 5px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Memo / surat tugas
                </span>
                <span style={{ color: '#EEA948' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EEA948"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Form internal
                </span>
                <span style={{ color: '#EEA948' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EEA948"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Dapat QR
                </span>
              </div>
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
          <div className="card" style={{ display: 'flex', gap: '10px', padding: '8px', alignItems: 'center' }}>
            <img
              src="assets/img/ep_walk.jpg"
              alt=""
              style={{ width: '92px', height: '72px', objectFit: 'cover', borderRadius: '10px', flex: 'none' }}
            />
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontWeight: '900', fontSize: '15px', color: '#53545A' }}>Walk-In</span>
                <span className="xs muted">Daftar di lokasi</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', alignItems: 'center', margin: '2px 0 5px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Link medsos, tenant, OOH
                </span>
                <span style={{ color: '#53545A' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#53545A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  Isi form di lokasi
                </span>
                <span style={{ color: '#53545A' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#53545A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '10px', height: '10px' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '9.5px',
                    fontWeight: '600',
                    color: '#26272B',
                  }}
                >
                  QR sesuai domisili
                </span>
              </div>
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
                RO 1/2/3
              </span>
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
                Non-nasabah
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: '#C83835',
            color: '#fff',
            borderRadius: '16px',
            padding: '10px 12px',
            marginTop: '10px',
          }}
        >
          <img
            src="assets/img/ep_gate.jpg"
            alt=""
            style={{
              width: '70px',
              height: '96px',
              objectFit: 'cover',
              objectPosition: '50% 40%',
              borderRadius: '10px',
              background: '#fff',
            }}
          />
          <div style={{ flex: '1' }}>
            <div className="kick" style={{ color: '#EEA948' }}>
              Semua jalur berakhir di sini
            </div>
            <div style={{ fontSize: '17px', fontWeight: '900', lineHeight: '1.15', margin: '2px 0 4px' }}>Check-in: scan QR di gate</div>
            <div style={{ fontSize: '10.5px', opacity: '.92' }}>
              QR dipindai lagi di pintu masuk untuk konfirmasi kehadiran. Tamu tanpa QR diarahkan ke booth registrasi.
            </div>
            <a href="#p-tiket" className="tap" style={{ color: '#fff', marginTop: '4px' }}>
              {'Lihat warna tiket '}
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          09
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
