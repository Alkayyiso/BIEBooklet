export default function PagePGmPoin() {
  return (
    <section className="page" id="p-gm-poin" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#cg" style={{ background: '#489D95' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Bab 07
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
          Gamification
        </div>
        <h2 className="t">
          {'Aktivitas & '}
          <span style={{ color: '#C9862A' }}>Poin</span>
        </h2>
        <div className="lead">Panduan aktivitas nasabah di setiap island, bukti yang perlu ditunjukkan, dan poinnya.</div>
        <div className="col" style={{ gap: '4px', marginTop: '8px' }}>
          <div className="card" style={{ padding: '5px 9px 4px', borderLeft: '5px solid #489D95' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="ic" style={{ width: '20px', height: '20px', background: '#489D95' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <span className="b" style={{ fontSize: '11px', flex: '1' }}>
                {'Registrasi Awal '}
                <span style={{ fontSize: '8.6px', color: '#8a8b90', fontWeight: '600' }}>All grup bisnis</span>
              </span>{' '}
              <span style={{ fontSize: '9px', color: '#6b6c70' }}>
                <b className="num" style={{ fontSize: '12.5px', color: '#489D95' }}>
                  5
                </b>
                {' poin'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>Tunjukkan portofolio BYOND / Welcome Points</div>
              </div>
              <span
                className="num"
                style={{
                  background: '#C9862A',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                5
              </span>
            </div>
          </div>
          <div className="card" style={{ padding: '5px 9px 4px', borderLeft: '5px solid #3E63B8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="ic" style={{ width: '20px', height: '20px', background: '#3E63B8' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </span>
              <span className="b" style={{ fontSize: '11px', flex: '1' }}>
                {'Automotive Island '}
                <span style={{ fontSize: '8.6px', color: '#8a8b90', fontWeight: '600' }}>MAG OTO</span>
              </span>{' '}
              <span style={{ fontSize: '9px', color: '#6b6c70' }}>
                <b className="num" style={{ fontSize: '12.5px', color: '#3E63B8' }}>
                  10
                </b>
                {' poin'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>Test drive kendaraan</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Absensi & test drive'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
          </div>
          <div className="card" style={{ padding: '5px 9px 4px', borderLeft: '5px solid #7A3D8E' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="ic" style={{ width: '20px', height: '20px', background: '#7A3D8E' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </span>
              <span className="b" style={{ fontSize: '11px', flex: '1' }}>
                {'BSI Business Hub '}
                <span style={{ fontSize: '8.6px', color: '#8a8b90', fontWeight: '600' }}>SMG</span>
              </span>{' '}
              <span style={{ fontSize: '9px', color: '#6b6c70' }}>
                <b className="num" style={{ fontSize: '12.5px', color: '#7A3D8E' }}>
                  10
                </b>
                {' poin'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>{'Konsultasi akses pasar ekspor & pembiayaan UMKM'}</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Konsultasi & analisis kesehatan bisnis'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
          </div>
          <div className="card" style={{ padding: '5px 9px 4px', borderLeft: '5px solid #C83835' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="ic" style={{ width: '20px', height: '20px', background: '#C83835' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </span>
              <span className="b" style={{ fontSize: '11px', flex: '1' }}>
                {'Property Island '}
                <span style={{ fontSize: '8.6px', color: '#8a8b90', fontWeight: '600' }}>MAG GRIYA</span>
              </span>{' '}
              <span style={{ fontSize: '9px', color: '#6b6c70' }}>
                {'hingga '}
                <b className="num" style={{ fontSize: '12.5px', color: '#C83835' }}>
                  25
                </b>
                {' poin'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>{'Datang & absen di Property Island'}</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Tunjukkan QR Code di island'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#C9862A',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                5
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>Konsultasi kepemilikan rumah / take over</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Simulasi angsuran / kartu angsuran BSI Griya'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>SPR rumah</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' SPR rumah'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
          </div>
          <div className="card" style={{ padding: '5px 9px 4px', borderLeft: '5px solid #C9862A' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="ic" style={{ width: '20px', height: '20px', background: '#C9862A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <span className="b" style={{ fontSize: '11px', flex: '1' }}>
                {'Gold Island '}
                <span style={{ fontSize: '8.6px', color: '#8a8b90', fontWeight: '600' }}>BBG</span>
              </span>{' '}
              <span style={{ fontSize: '9px', color: '#6b6c70' }}>
                <b className="num" style={{ fontSize: '12.5px', color: '#C9862A' }}>
                  10
                </b>
                {' poin'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>Gold Bar Challenge</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Mengikuti Gold Bar Challenge'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
          </div>
          <div className="card" style={{ padding: '5px 9px 4px', borderLeft: '5px solid #53545A' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="ic" style={{ width: '20px', height: '20px', background: '#53545A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </span>
              <span className="b" style={{ fontSize: '11px', flex: '1' }}>
                {'BSI Pavilion (Booth BSI) '}
                <span style={{ fontSize: '8.6px', color: '#8a8b90', fontWeight: '600' }}>RDG · TBR · PFG</span>
              </span>{' '}
              <span style={{ fontSize: '9px', color: '#6b6c70' }}>
                {'hingga '}
                <b className="num" style={{ fontSize: '12.5px', color: '#53545A' }}>
                  30
                </b>
                {' poin'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>Punya min. 3 tabungan BSI, total saldo Rp1,5 juta</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Tunjukkan portofolio rekening di BYOND (RDG)'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>Bukti transaksi QRIS via BYOND di BSI Expo</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Bukti & receipt transaksi QRIS (TBR)'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>
                  Nasabah payroll: konsultasi personal loan / pensiun di Consultation Corner
                </div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Screenshot cek limit Migol / form peminatan (PFG)'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
          </div>
          <div className="card" style={{ padding: '5px 9px 4px', borderLeft: '5px solid #D45D5A' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="ic" style={{ width: '20px', height: '20px', background: '#D45D5A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </span>
              <span className="b" style={{ fontSize: '11px', flex: '1' }}>
                {'Hasanah Card, semua island '}
                <span style={{ fontSize: '8.6px', color: '#8a8b90', fontWeight: '600' }}>CBG</span>
              </span>{' '}
              <span style={{ fontSize: '9px', color: '#6b6c70' }}>
                <b className="num" style={{ fontSize: '12.5px', color: '#D45D5A' }}>
                  10
                </b>
                {' poin'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '2.5px 0', borderTop: '1px solid #f1f1f2' }}>
              <div style={{ flex: '1', lineHeight: '1.22' }}>
                <div style={{ fontSize: '9.6px', fontWeight: '700' }}>Transaksi dengan Hasanah Card / apply Hasanah Card</div>
                <div style={{ fontSize: '8.4px', color: '#6b6c70' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a8b90"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '9px', height: '9px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {' Bukti transaksi & receipt / form aplikasi HC'}
                </div>
              </div>
              <span
                className="num"
                style={{
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  borderRadius: '9px',
                  padding: '1px 8px',
                }}
              >
                10
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#53545A',
            color: '#fff',
            borderRadius: '12px',
            padding: '6px 12px',
            marginTop: '6px',
          }}
        >
          <div style={{ flex: '1', fontSize: '9.6px', lineHeight: '1.3' }}>
            {'Total poin semua aktivitas. Penukaran hadiah mulai '}
            <b style={{ color: '#EEA948' }}>50 poin</b>.
          </div>
          <div className="big num" style={{ fontSize: '24px', color: '#EEA948' }}>
            100
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          58
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#cg" style={{ background: '#489D95', opacity: '1' }} />
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
