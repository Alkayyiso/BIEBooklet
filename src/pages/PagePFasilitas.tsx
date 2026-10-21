export default function PagePFasilitas() {
  return (
    <section className="page" id="p-fasilitas" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c7" style={{ background: '#EEA948' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Bab 08
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
        <div className="kick" style={{ color: '#EEA948' }}>
          Keselamatan
        </div>
        <h2 className="t">
          {'Fasilitas Umum & '}
          <span style={{ color: '#C83835' }}>Emergency</span>
        </h2>
        <div className="lead">Ibadah, kesehatan, restroom, dan rujukan rumah sakit bila ada keadaan darurat.</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px', marginTop: '8px' }}>
          <div className="card" style={{ padding: '8px 10px', display: 'block' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#489D95' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </span>
              <div className="b" style={{ fontSize: '11.5px', lineHeight: '1.15' }}>
                Musholla
              </div>
            </div>
            <div style={{ fontSize: '9.6px', color: '#4d4e53', lineHeight: '1.38', marginTop: '4px' }}>
              {'Kapasitas '}
              <b>200 pengunjung</b>.
              <div style={{ display: 'flex', gap: '4px', margin: '4px 0' }}>
                <div
                  style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '8px', padding: '4px 6px', textAlign: 'center' }}
                >
                  <div className="big num" style={{ fontSize: '18px' }}>
                    100
                  </div>
                  <div style={{ fontSize: '8px' }}>pria</div>
                </div>
                <div
                  style={{ flex: '1', background: '#C9862A', color: '#fff', borderRadius: '8px', padding: '4px 6px', textAlign: 'center' }}
                >
                  <div className="big num" style={{ fontSize: '18px' }}>
                    100
                  </div>
                  <div style={{ fontSize: '8px' }}>wanita</div>
                </div>
              </div>
              {'Musholla milik venue (>200 orang) di '}
              <b>lantai UG</b>.
            </div>
          </div>
          <div className="card" style={{ padding: '8px 10px', display: 'block' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#489D95' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </span>
              <div className="b" style={{ fontSize: '11.5px', lineHeight: '1.15' }}>
                Mobil Musholla
              </div>
            </div>
            <div style={{ fontSize: '9.6px', color: '#4d4e53', lineHeight: '1.38', marginTop: '4px' }}>
              {'1 mobil, di '}
              <b>Hall B dekat musholla</b>.
            </div>
            <img
              src="assets/img/mobilmushola.jpg"
              alt=""
              style={{ width: '100%', height: '62px', objectFit: 'contain', marginTop: '4px' }}
            />
          </div>
          <div className="card" style={{ padding: '8px 10px', display: 'block' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#C83835' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
              <div className="b" style={{ fontSize: '11.5px', lineHeight: '1.15' }}>
                Ambulance
              </div>
            </div>
            <div style={{ fontSize: '9.6px', color: '#4d4e53', lineHeight: '1.38', marginTop: '4px' }}>
              {'2 mobil, parkir di '}
              <b>Foyer A</b>
              {' dan '}
              <b>Foyer B</b>. Medic tersedia di Hall B.
            </div>
            <img src="assets/img/ambulance.jpg" alt="" style={{ width: '100%', height: '62px', objectFit: 'contain', marginTop: '4px' }} />
          </div>
          <a href="#p-damkar" className="card" style={{ padding: '8px 10px', display: 'block' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#53545A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div className="b" style={{ fontSize: '11.5px', lineHeight: '1.15' }}>
                Restroom
              </div>
            </div>
            <div style={{ fontSize: '9.6px', color: '#4d4e53', lineHeight: '1.38', marginTop: '4px' }}>
              Total 3 lokasi.
              <div style={{ display: 'flex', gap: '4px', margin: '4px 0' }}>
                <div
                  style={{ flex: '1', background: '#489D95', color: '#fff', borderRadius: '8px', padding: '4px 6px', textAlign: 'center' }}
                >
                  <div className="big num" style={{ fontSize: '18px' }}>
                    1
                  </div>
                  <div style={{ fontSize: '8px' }}>Hall A</div>
                </div>
                <div
                  style={{ flex: '1', background: '#C9862A', color: '#fff', borderRadius: '8px', padding: '4px 6px', textAlign: 'center' }}
                >
                  <div className="big num" style={{ fontSize: '18px' }}>
                    2
                  </div>
                  <div style={{ fontSize: '8px' }}>Hall B</div>
                </div>
              </div>
              Plus 1 toilet VIP di Hall A.
            </div>
          </a>
          <div className="card" style={{ padding: '8px 10px', display: 'block' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#C83835' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="12" y1="7" x2="12" y2="17" />
                  <line x1="7" y1="12" x2="17" y2="12" />
                </svg>
              </span>
              <div className="b" style={{ fontSize: '11.5px', lineHeight: '1.15' }}>
                Rumah Sakit Terdekat
              </div>
            </div>
            <div style={{ fontSize: '9.6px', color: '#4d4e53', lineHeight: '1.38', marginTop: '4px' }}>
              1. RS TNI-AL Dr. Mintohardjo
              <br />
              2. RS Pertamina
              <br />
              3. RS Siloam Semanggi
            </div>
          </div>
          <a href="#p-damkar" className="card" style={{ padding: '8px 10px', display: 'block' }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#C83835' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </span>
              <div className="b" style={{ fontSize: '11.5px', lineHeight: '1.15' }}>
                Damkar
              </div>
            </div>
            <div style={{ fontSize: '9.6px', color: '#4d4e53', lineHeight: '1.38', marginTop: '4px' }}>
              1 mobil pemadam kebakaran, standby dekat Loading Dock Hall B.
            </div>
            <img src="assets/img/firetruck.jpg" alt="" style={{ width: '100%', height: '62px', objectFit: 'contain', marginTop: '4px' }} />
          </a>
        </div>
        <a
          href="#p-exit"
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: '#1F7A4D',
            color: '#fff',
            borderRadius: '14px',
            padding: '9px 12px',
            marginTop: '8px',
          }}
        >
          <span className="ic" style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,.25)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10.5px', lineHeight: '1.35' }}>
            <b>Tersedia 6 titik emergency exit</b>
            {' di Hall A dan Hall B.'}
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '15px', height: '15px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          65
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#cg" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c7" style={{ background: '#EEA948', opacity: '1' }} />
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
