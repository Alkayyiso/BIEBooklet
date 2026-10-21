export default function PagePDaftar() {
  return (
    <section className="page" id="p-daftar" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c4" style={{ background: '#53545A' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Bab 04
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
        <div className="kick" style={{ color: '#53545A' }}>
          {'Tim & Shift'}
        </div>
        <h2 className="t">
          {'Daftar Petugas '}
          <span style={{ color: '#489D95' }}>Jaga</span>
        </h2>
        <div className="lead">Nama petugas yang berjaga untuk setiap Regional Office. Ketuk untuk membuka daftarnya.</div>
        <div className="col" style={{ gap: '8px', marginTop: '9px' }}>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ background: '#14B1A6', color: '#fff', padding: '9px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="ic" style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,.25)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div style={{ flex: '1' }}>
                <div style={{ fontSize: '15px', fontWeight: '900', lineHeight: '1.1' }}>RO Jakarta 1</div>
                <div style={{ fontSize: '9.5px', opacity: '.9' }}>217 petugas-hari selama 3 hari</div>
              </div>
            </div>
            <div style={{ padding: '9px 12px', background: '#14B1A614' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Jumat</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    45
                  </div>
                </div>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Sabtu</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    86
                  </div>
                </div>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Minggu</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    86
                  </div>
                </div>
              </div>
              <a
                className="lnk"
                href="https://bsicenter-my.sharepoint.com/:x:/g/personal/umar_kayyis_bankbsi_co_id/IQAmZtHqTEJiQaDeG7X1WFACAbwE2BxX_BNmoE4akiBMvV4?e=EKwL7X"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#26272B',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '9px 12px',
                }}
                target="_blank"
                rel="noopener"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '16px', height: '16px' }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="13" y2="17" />
                </svg>
                <span className="b" style={{ flex: '1', fontSize: '11.5px' }}>
                  Buka daftar petugas RO Jakarta 1
                </span>
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
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ background: '#8C8F94', color: '#fff', padding: '9px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="ic" style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,.25)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div style={{ flex: '1' }}>
                <div style={{ fontSize: '15px', fontWeight: '900', lineHeight: '1.1' }}>RO Jakarta 2</div>
                <div style={{ fontSize: '9.5px', opacity: '.9' }}>224 petugas-hari selama 3 hari</div>
              </div>
            </div>
            <div style={{ padding: '9px 12px', background: '#8C8F9414' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Jumat</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    35
                  </div>
                </div>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Sabtu</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    99
                  </div>
                </div>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Minggu</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    90
                  </div>
                </div>
              </div>
              <a
                className="lnk"
                href="https://bsicenter-my.sharepoint.com/:x:/g/personal/umar_kayyis_bankbsi_co_id/IQAZjEIwbWaTT7yYybhoeCFYAYHAPckDEmcw5H4gH7SRRfc?e=hkVTtN"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#26272B',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '9px 12px',
                }}
                target="_blank"
                rel="noopener"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '16px', height: '16px' }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="13" y2="17" />
                </svg>
                <span className="b" style={{ flex: '1', fontSize: '11.5px' }}>
                  Buka daftar petugas RO Jakarta 2
                </span>
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
          </div>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ background: '#F08C00', color: '#fff', padding: '9px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="ic" style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,.25)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div style={{ flex: '1' }}>
                <div style={{ fontSize: '15px', fontWeight: '900', lineHeight: '1.1' }}>RO Jakarta 3</div>
                <div style={{ fontSize: '9.5px', opacity: '.9' }}>224 petugas-hari selama 3 hari</div>
              </div>
            </div>
            <div style={{ padding: '9px 12px', background: '#F08C0014' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Jumat</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    35
                  </div>
                </div>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Sabtu</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    90
                  </div>
                </div>
                <div style={{ flex: '1', textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '3px 0' }}>
                  <div style={{ fontSize: '8.5px', color: '#6b6c70' }}>Minggu</div>
                  <div className="big num" style={{ fontSize: '16px' }}>
                    99
                  </div>
                </div>
              </div>
              <a
                className="lnk"
                href="https://bsicenter-my.sharepoint.com/:x:/g/personal/umar_kayyis_bankbsi_co_id/IQDTAY7_tGSTQqrl_o_BcrMhATMSdVxW9rUfZ8dSTAGSdZY"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#26272B',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '9px 12px',
                }}
                target="_blank"
                rel="noopener"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '16px', height: '16px' }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="13" y2="17" />
                </svg>
                <span className="b" style={{ flex: '1', fontSize: '11.5px' }}>
                  Buka daftar petugas RO Jakarta 3
                </span>
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
          </div>
        </div>
        <div className="card" style={{ marginTop: '9px', padding: '9px 12px' }}>
          <div className="col" style={{ gap: '6px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10.2px', lineHeight: '1.35' }}>
              <span className="ic" style={{ width: '24px', height: '24px', background: '#53545A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <span>
                {'Cari namamu, lalu cek '}
                <b>hari, shift, dan zona</b>
                {' tempat kamu berjaga.'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10.2px', lineHeight: '1.35' }}>
              <span className="ic" style={{ width: '24px', height: '24px', background: '#53545A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <span>
                {'File tersimpan di '}
                <b>SharePoint BSI</b>. Masuk dengan akun email BSI bila diminta.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10.2px', lineHeight: '1.35' }}>
              <span className="ic" style={{ width: '24px', height: '24px', background: '#53545A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
              </span>
              <span>
                {'Daftar bisa diperbarui. Cek kembali '}
                <b>H-1</b>
                {' sebelum bertugas.'}
              </span>
            </div>
          </div>
        </div>
        <a href="#p-rekap" className="tap" style={{ color: '#489D95', marginTop: '8px' }}>
          {'Lihat rekap petugas per zona '}
          <svg viewBox="0 0 24 24" fill="none" stroke="#489D95" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          26
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '1' }} />
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
