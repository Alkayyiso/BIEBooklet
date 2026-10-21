export default function PagePItStandby() {
  return (
    <section className="page" id="p-it-standby" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c5" style={{ background: '#489D95' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          Bab 05
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
          Operasional
        </div>
        <h2 className="t">
          {'Tim IT '}
          <span style={{ color: '#489D95' }}>Standby</span>
        </h2>
        <div className="lead">Jumlah tim IT yang berjaga di lokasi dan on call selama tiga hari expo.</div>
        <div className="card" style={{ padding: '8px 8px 6px', marginTop: '8px' }}>
          <table style={{ borderCollapse: 'separate', borderSpacing: '0', tableLayout: 'fixed', width: '100%' }}>
            <colgroup>
              <col style={{ width: '58px' }} />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col style={{ width: '46px' }} />
            </colgroup>
            <tbody>
              <tr>
                <td />
                <td
                  colSpan={3}
                  style={{
                    textAlign: 'center',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '8.6px',
                    fontWeight: '800',
                    padding: '3px',
                    borderRadius: '6px 6px 0 0',
                  }}
                >
                  STANDBY ON SITE
                </td>
                <td
                  colSpan={2}
                  style={{
                    textAlign: 'center',
                    background: '#1F4E79',
                    color: '#fff',
                    fontSize: '8.6px',
                    fontWeight: '800',
                    padding: '3px',
                    borderRadius: '6px 6px 0 0',
                  }}
                >
                  ON CALL
                </td>
                <td />
              </tr>
              <tr>
                <td />
                <td style={{ textAlign: 'center', padding: '4px 1px', background: '#489D9514', verticalAlign: 'top' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '14px', height: '14px' }}
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  <div style={{ fontSize: '7.8px', fontWeight: '800', lineHeight: '1.1' }}>IT Network</div>
                  <div style={{ fontSize: '7px', color: '#77787d' }}>IOG</div>
                </td>
                <td style={{ textAlign: 'center', padding: '4px 1px', background: '#489D9514', verticalAlign: 'top' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '14px', height: '14px' }}
                  >
                    <rect x="4" y="4" width="16" height="11" rx="1.5" />
                    <path d="M2 19h20" />
                  </svg>
                  <div style={{ fontSize: '7.8px', fontWeight: '800', lineHeight: '1.1' }}>{'Endpoint & Helpdesk'}</div>
                  <div style={{ fontSize: '7px', color: '#77787d' }}>IOG</div>
                </td>
                <td style={{ textAlign: 'center', padding: '4px 1px', background: '#489D9514', verticalAlign: 'top' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#489D95"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '14px', height: '14px' }}
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <div style={{ fontSize: '7.8px', fontWeight: '800', lineHeight: '1.1' }}>User ID</div>
                  <div style={{ fontSize: '7px', color: '#77787d' }}>CSO</div>
                </td>
                <td style={{ textAlign: 'center', padding: '4px 1px', background: '#1F4E7914', verticalAlign: 'top' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1F4E79"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '14px', height: '14px' }}
                  >
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                  </svg>
                  <div style={{ fontSize: '7.8px', fontWeight: '800', lineHeight: '1.1' }}>IT Monitoring</div>
                  <div style={{ fontSize: '7px', color: '#77787d' }}>IOG</div>
                </td>
                <td style={{ textAlign: 'center', padding: '4px 1px', background: '#1F4E7914', verticalAlign: 'top' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1F4E79"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '14px', height: '14px' }}
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <div style={{ fontSize: '7.8px', fontWeight: '800', lineHeight: '1.1' }}>Firewall</div>
                  <div style={{ fontSize: '7px', color: '#77787d' }}>CSO</div>
                </td>
                <td style={{ textAlign: 'center', fontSize: '8.5px', fontWeight: '800', verticalAlign: 'bottom', paddingBottom: '4px' }}>
                  Total
                </td>
              </tr>
              <tr style={{ borderTop: '3px solid #FFFCF6' }}>
                <td style={{ background: '#EEA948', color: '#26272B', borderRadius: '8px 0 0 8px', padding: '6px 7px', lineHeight: '1.1' }}>
                  <div className="b" style={{ fontSize: '11px' }}>
                    Jumat
                  </div>
                  <div style={{ fontSize: '8px' }}>23 Okt</div>
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  28
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  26
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  5
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  18
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  5
                </td>
                <td
                  className="num big"
                  style={{ textAlign: 'center', fontSize: '19px', background: '#EEA948', color: '#26272B', borderRadius: '0 8px 8px 0' }}
                >
                  82
                </td>
              </tr>
              <tr style={{ borderTop: '3px solid #FFFCF6' }}>
                <td style={{ background: '#489D95', color: '#fff', borderRadius: '8px 0 0 8px', padding: '6px 7px', lineHeight: '1.1' }}>
                  <div className="b" style={{ fontSize: '11px' }}>
                    Sabtu
                  </div>
                  <div style={{ fontSize: '8px' }}>24 Okt</div>
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  30
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  28
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  7
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  28
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  5
                </td>
                <td
                  className="num big"
                  style={{ textAlign: 'center', fontSize: '19px', background: '#489D95', color: '#fff', borderRadius: '0 8px 8px 0' }}
                >
                  98
                </td>
              </tr>
              <tr style={{ borderTop: '3px solid #FFFCF6' }}>
                <td style={{ background: '#53545A', color: '#fff', borderRadius: '8px 0 0 8px', padding: '6px 7px', lineHeight: '1.1' }}>
                  <div className="b" style={{ fontSize: '11px' }}>
                    Minggu
                  </div>
                  <div style={{ fontSize: '8px' }}>25 Okt</div>
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  24
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  28
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  5
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  22
                </td>
                <td className="num big" style={{ textAlign: 'center', fontSize: '17px', background: '#fff' }}>
                  5
                </td>
                <td
                  className="num big"
                  style={{ textAlign: 'center', fontSize: '19px', background: '#53545A', color: '#fff', borderRadius: '0 8px 8px 0' }}
                >
                  84
                </td>
              </tr>
            </tbody>
          </table>
          <div className="note" style={{ marginTop: '5px' }}>
            Terdiri dari 2 shift, termasuk vendor yang standby. Data per 21 Oktober 2026, 13.00 WIB.
          </div>
        </div>
        <div className="card" style={{ padding: '9px 12px', marginTop: '8px' }}>
          <div className="kick" style={{ color: '#489D95', fontSize: '9px' }}>
            {'Penguatan monitoring & support IT'}
          </div>
          <div style={{ borderLeft: '4px solid #489D95', padding: '3px 0 3px 9px', marginTop: '6px' }}>
            <div className="b" style={{ fontSize: '10.8px' }}>
              {'On site · IT Endpoint & Helpdesk'}
            </div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.6px', lineHeight: '1.35', marginTop: '1px' }}>
              <span style={{ flex: 'none', marginTop: '2px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '10px', height: '10px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Setting dan troubleshoot perangkat IT</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.6px', lineHeight: '1.35', marginTop: '1px' }}>
              <span style={{ flex: 'none', marginTop: '2px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '10px', height: '10px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                {'Support pukul '}
                <b>07.00 s.d. selesai</b>
              </span>
            </div>
          </div>
          <div style={{ borderLeft: '4px solid #489D95', padding: '3px 0 3px 9px', marginTop: '6px' }}>
            <div className="b" style={{ fontSize: '10.8px' }}>
              On site · IT Network
            </div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.6px', lineHeight: '1.35', marginTop: '1px' }}>
              <span style={{ flex: 'none', marginTop: '2px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '10px', height: '10px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{'Setting dan troubleshoot jaringan intranet & internet'}</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.6px', lineHeight: '1.35', marginTop: '1px' }}>
              <span style={{ flex: 'none', marginTop: '2px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '10px', height: '10px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                {'Support pukul '}
                <b>07.00 s.d. selesai</b>
              </span>
            </div>
          </div>
          <div style={{ borderLeft: '4px solid #1F4E79', padding: '3px 0 3px 9px', marginTop: '6px' }}>
            <div className="b" style={{ fontSize: '10.8px' }}>
              {'On call · IT Monitoring & Command Center'}
            </div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.6px', lineHeight: '1.35', marginTop: '1px' }}>
              <span style={{ flex: 'none', marginTop: '2px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1F4E79"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '10px', height: '10px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <b>War Room</b>
                {' di Teams Monitoring and Collaboration Center (MCC), '}
                <b>08.00 s.d. 22.00 WIB</b>
                {' (IOG, ASP, CSO, DBO, BCM)'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9.6px', lineHeight: '1.35', marginTop: '1px' }}>
              <span style={{ flex: 'none', marginTop: '2px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1F4E79"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '10px', height: '10px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                {'Akses '}
                <b>EXA dan WISE</b>
                {' dibuka s.d. '}
                <b>22.00 WIB</b>
              </span>
            </div>
          </div>
        </div>
        <a
          href="#p-insiden"
          className="card"
          style={{
            display: 'flex',
            gap: '9px',
            alignItems: 'center',
            marginTop: '8px',
            background: '#C83835',
            color: '#fff',
            padding: '9px 12px',
          }}
        >
          <span className="ic" style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,.25)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10.3px', lineHeight: '1.35' }}>
            <b>Ada gangguan sistem?</b>
            {' Lihat alur penanganan insiden IT dan BCP BYOND.'}
          </div>
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
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          34
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '1' }} />
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
