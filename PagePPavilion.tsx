import { ZoomImg } from '../components/ZoomImg';

export default function PagePPavilion() {
  return (
    <section className="page" id="p-pavilion" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c3" style={{ background: '#EEA948' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Bab 03
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
          {'Venue & Zona'}
        </div>
        <h2 className="t">
          {'BSI '}
          <span style={{ color: '#C83835' }}>Pavilion</span>
        </h2>
        <div className="lead">Zona 4, jantung layanan BSI di sisi Hall A. Masuk lewat Gate BSI Pavilion (no. 14).</div>
        <div style={{ borderRadius: '14px', overflow: 'hidden', marginTop: '8px', position: 'relative' }}>
          <ZoomImg src="assets/img/pav1.jpg" alt="" style={{ width: '100%', height: '178px', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ borderRadius: '14px', overflow: 'hidden', marginTop: '6px' }}>
          <ZoomImg
            src="assets/img/pav2.jpg"
            alt=""
            style={{ width: '100%', height: '132px', objectFit: 'cover', objectPosition: '50% 60%', display: 'block' }}
          />
        </div>
        <div className="card" style={{ padding: '9px 10px', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <span className="b" style={{ fontSize: '11.5px', flex: '1' }}>
              Susunan booth Zona 4
            </span>
            <span className="xs muted">dari kiri ke kanan</span>
          </div>
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e3e3e6' }}>
            <ZoomImg src="assets/img/pavplan.jpg" alt="" style={{ width: '100%', display: 'block' }} />{' '}
            <span className="tag" style={{ position: 'absolute', right: '6px', bottom: '6px', background: 'rgba(38,39,43,.8)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              {' Zoom'}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 10px', marginTop: '7px' }}>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '9.8px', lineHeight: '1.3' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#4A7FC1', flex: 'none' }} />
              {'ESG & BSI Maslahat'}
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '9.8px', lineHeight: '1.3' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#C47BC0', flex: 'none' }} />
              Hasanah Card
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '9.8px', lineHeight: '1.3' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#D4A72C', flex: 'none' }} />
              {'Region 1, 2, 3 & BSI Agen'}
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '9.8px', lineHeight: '1.3' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#3F8A55', flex: 'none' }} />
              Consultation Corner Mitraguna
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '7px' }}>
          <div
            className="card"
            style={{
              flex: '1',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '8px 10px',
              background: '#EEA94822',
              boxShadow: 'none',
            }}
          >
            <span className="ic" style={{ width: '26px', height: '26px', background: '#C9862A' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </span>
            <div style={{ fontSize: '9.6px', lineHeight: '1.3' }}>
              <b>Money Changer</b>
              {' berada di '}
              <b>BSI Mobility (Triton)</b>.
            </div>
          </div>
          <div className="card" style={{ flex: '1', display: 'flex', gap: '8px', alignItems: 'center', padding: '8px 10px' }}>
            <span className="ic" style={{ width: '26px', height: '26px', background: '#3E63B8' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </span>
            <div style={{ fontSize: '9.6px', lineHeight: '1.3' }}>
              <b>1 dispenser</b>
              {' di area Pavilion.'}
            </div>
          </div>
        </div>
        <a
          href="#p-jumat"
          className="card"
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            marginTop: '7px',
            background: '#C83835',
            color: '#fff',
            padding: '8px 12px',
          }}
        >
          <span className="ic" style={{ width: '26px', height: '26px', background: 'rgba(255,255,255,.25)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10px', lineHeight: '1.35' }}>
            <b>Petugas Z4:</b>
            {' Jumat '}
            <b>29</b>
            {', Sabtu & Minggu '}
            <b>64</b>
            {' orang (inti layanan, Consultancy Corner, Sales Booth).'}
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
          21
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '1' }} />
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
