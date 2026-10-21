import { ZoomImg } from '../components/ZoomImg';

export default function PagePHalla() {
  return (
    <section className="page" id="p-halla" style={{ background: '#FFFCF6' }}>
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
          {'Hall '}
          <span style={{ color: '#EEA948' }}>A</span>
        </h2>
        <div className="lead">{'Pintu masuk utama, layanan BSI, haji & umroh, serta zona prioritas.'}</div>
        <div
          style={{
            borderRadius: '14px',
            overflow: 'hidden',
            margin: '8px 0 8px',
            border: '1px solid #eee',
            background: '#fff',
            position: 'relative',
          }}
        >
          <ZoomImg
            src="assets/img/mapA.jpg"
            alt=""
            style={{ width: '100%', height: '330px', objectFit: 'cover', objectPosition: '50% 100%', display: 'block' }}
          />{' '}
          <span className="tag" style={{ position: 'absolute', right: '8px', top: '8px', background: 'rgba(38,39,43,.8)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            {' Ketuk untuk perbesar'}
          </span>
        </div>
        <div className="row" style={{ marginBottom: '6px' }}>
          <a href="#p-rekap" className="card" style={{ display: 'flex', gap: '7px', alignItems: 'center', padding: '6px 8px', flex: '1' }}>
            <span
              className="ic"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: '#9A9CA1',
                color: '#fff',
                fontWeight: '900',
                fontSize: '11px',
              }}
            >
              Z1
            </span>
            <div style={{ flex: '1', lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Area Depan Luar
              </div>
              <div className="xs muted">5 sampai 10 petugas</div>
            </div>
          </a>
          <a href="#p-rekap" className="card" style={{ display: 'flex', gap: '7px', alignItems: 'center', padding: '6px 8px', flex: '1' }}>
            <span
              className="ic"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: '#EEA948',
                color: '#fff',
                fontWeight: '900',
                fontSize: '11px',
              }}
            >
              Z2
            </span>
            <div style={{ flex: '1', lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                {'Prioritas, Gold, Properti & Oto'}
              </div>
              <div className="xs muted">8 sampai 16 petugas</div>
            </div>
          </a>
        </div>
        <div className="row" style={{ marginBottom: '8px' }}>
          <a href="#p-rekap" className="card" style={{ display: 'flex', gap: '7px', alignItems: 'center', padding: '6px 8px', flex: '1' }}>
            <span
              className="ic"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: '#3E63B8',
                color: '#fff',
                fontWeight: '900',
                fontSize: '11px',
              }}
            >
              Z3
            </span>
            <div style={{ flex: '1', lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                {'Haji, Umroh & Travel'}
              </div>
              <div className="xs muted">8 sampai 21 petugas</div>
            </div>
          </a>
          <a
            href="#p-pavilion"
            className="card"
            style={{ display: 'flex', gap: '7px', alignItems: 'center', padding: '6px 8px', flex: '1' }}
          >
            <span
              className="ic"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: '#C83835',
                color: '#fff',
                fontWeight: '900',
                fontSize: '11px',
              }}
            >
              Z4
            </span>
            <div style={{ flex: '1', lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                BSI Pavilion
              </div>
              <div className="xs muted">15 sampai 32 petugas</div>
            </div>
          </a>
        </div>
        <div className="card" style={{ padding: '8px 10px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: '1' }}>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>1</b>
                <span>Giant Map</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>2</b>
                <span>Help Desk</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>3</b>
                <span>Main Gate</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>4</b>
                <span>Photo Booth</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>5</b>
                <span>Komunitas (Souvenir/Regis)</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>6</b>
                <span>Ruang tunggu test drive</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>7</b>
                <span>ATM BSI</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>8</b>
                <span>Ambulance BSI</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>9</b>
                <span>Oto Display</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>10</b>
                <span>{'Haji & Umroh'}</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>11</b>
                <span>Visa (space only)</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>12</b>
                <span>Airlines</span>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>13</b>
                <span>Halal Travel</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>14</b>
                <span>Gate BSI Pavilion</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>15</b>
                <span>Properti Zone, BSI Griya, BSI Lelang</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>16</b>
                <span>Automotive</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>17</b>
                <span>BSI Prioritas</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>18</b>
                <span>BSI Gold</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>19</b>
                <span>Brand Fashion A</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>20</b>
                <span>Preloved Branded Item</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>21</b>
                <span>Seating Area</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>22</b>
                <span>Activation Space</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>23</b>
                <span>Redemption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          19
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
