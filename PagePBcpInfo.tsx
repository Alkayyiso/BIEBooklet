import { ZoomImg } from '../components/ZoomImg';

export default function PagePBcpInfo() {
  return (
    <section className="page" id="p-bcp-info" style={{ background: '#FFFCF6' }}>
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
          BCP
        </div>
        <h2 className="t">
          {'Business Continuity '}
          <span style={{ color: '#489D95' }}>Plan</span>
        </h2>
        <div className="lead">Skenario gangguan aplikasi BYOND ketika event BSI International Expo 2026.</div>
        <div style={{ margin: '8px -20px 6px', position: 'relative', background: '#fff' }}>
          <ZoomImg src="assets/img/bcp_info.jpg" alt="" style={{ width: '100%', display: 'block' }} />{' '}
          <span className="tag" style={{ position: 'absolute', right: '10px', bottom: '8px', background: 'rgba(38,39,43,.8)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            {' Ketuk untuk perbesar'}
          </span>
        </div>
        <div className="card" style={{ padding: '9px 12px', marginTop: '6px' }}>
          <div className="b" style={{ fontSize: '12px', marginBottom: '3px' }}>
            Saat BYOND terganggu di BSI Expo
          </div>
          <div style={{ display: 'flex', gap: '7px', fontSize: '9.8px', lineHeight: '1.38', marginTop: '3px' }}>
            <span
              className="ic"
              style={{
                width: '18px',
                height: '18px',
                background: '#489D95',
                color: '#fff',
                fontSize: '9px',
                fontWeight: '900',
                flex: 'none',
              }}
            >
              1
            </span>
            <span>Tetap tenang dan bantu nasabah, merchant, serta tamu VIP di lokasi.</span>
          </div>
          <div style={{ display: 'flex', gap: '7px', fontSize: '9.8px', lineHeight: '1.38', marginTop: '3px' }}>
            <span
              className="ic"
              style={{
                width: '18px',
                height: '18px',
                background: '#489D95',
                color: '#fff',
                fontSize: '9px',
                fontWeight: '900',
                flex: 'none',
              }}
            >
              2
            </span>
            <span>Cek layanan yang dibutuhkan nasabah di daftar 14 skenario BCP.</span>
          </div>
          <div style={{ display: 'flex', gap: '7px', fontSize: '9.8px', lineHeight: '1.38', marginTop: '3px' }}>
            <span
              className="ic"
              style={{
                width: '18px',
                height: '18px',
                background: '#489D95',
                color: '#fff',
                fontSize: '9px',
                fontWeight: '900',
                flex: 'none',
              }}
            >
              3
            </span>
            <span>
              {'Arahkan ke '}
              <b>tools BCP</b>: EXA, ATM/CRM, EDC, atau kanal alternatif lain.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '7px', fontSize: '9.8px', lineHeight: '1.38', marginTop: '3px' }}>
            <span
              className="ic"
              style={{
                width: '18px',
                height: '18px',
                background: '#489D95',
                color: '#fff',
                fontSize: '9px',
                fontWeight: '900',
                flex: 'none',
              }}
            >
              4
            </span>
            <span>
              {'Tangani transaksi gantung/unknown status dan '}
              <b>cegah double transaction</b>.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '7px', fontSize: '9.8px', lineHeight: '1.38', marginTop: '3px' }}>
            <span
              className="ic"
              style={{
                width: '18px',
                height: '18px',
                background: '#489D95',
                color: '#fff',
                fontSize: '9px',
                fontWeight: '900',
                flex: 'none',
              }}
            >
              5
            </span>
            <span>Ikuti arahan PIC dan Command Center sampai layanan dinormalisasi.</span>
          </div>
        </div>
        <div className="row" style={{ marginTop: '7px' }}>
          <a
            href="#p-bcp"
            className="card"
            style={{
              flex: '1',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '8px 10px',
              background: '#489D95',
              color: '#fff',
            }}
          >
            <span className="ic" style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,.25)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </span>
            <span className="b" style={{ fontSize: '10.2px', flex: '1' }}>
              Rincian 14 skenario
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '13px', height: '13px' }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>{' '}
          <a
            href="#p-insiden"
            className="card"
            style={{
              flex: '1',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '8px 10px',
              background: '#53545A',
              color: '#fff',
            }}
          >
            <span className="ic" style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,.25)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <span className="b" style={{ fontSize: '10.2px', flex: '1' }}>
              Alur insiden IT
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '13px', height: '13px' }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          67
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
