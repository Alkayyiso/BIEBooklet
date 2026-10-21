export default function PagePPic() {
  return (
    <section className="page" id="p-pic" style={{ background: '#FFFCF6' }}>
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
          {'Tugas PIC '}
          <span style={{ color: '#489D95' }}>Area/RO</span>
        </h2>
        <div className="lead">Empat tanggung jawab utama PIC, lengkap dengan hal yang perlu dicek di lapangan.</div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: '#53545A',
            color: '#fff',
            borderRadius: '14px',
            padding: '8px 12px',
            margin: '8px 0 8px',
          }}
        >
          <span className="ic" style={{ width: '30px', height: '30px', background: '#EEA948' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
          </span>
          <div style={{ flex: '1', fontSize: '10px', lineHeight: '1.35' }}>
            <b>Pengawas lapangan lintas zona.</b>
            {' Jumat 12 PIC (4 per RO), Sabtu dan Minggu 24 PIC (8 per RO).'}
          </div>
        </div>
        <div className="col" style={{ gap: '6px' }}>
          <div className="card" style={{ padding: '8px 11px 7px', borderLeft: '5px solid #489D95' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#489D95' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </span>
              <div className="b" style={{ flex: '1', fontSize: '11.8px', lineHeight: '1.15' }}>
                <span style={{ color: '#489D95' }}>1.</span>
                {' Pencatatan Pencapaian'}
              </div>
              <a href="#p-oase" className="tap" style={{ color: '#489D95' }}>
                {'OASE '}
                <svg viewBox="0 0 24 24" fill="none" stroke="#489D95" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div style={{ fontSize: '9.6px', color: '#5d5e63', fontStyle: 'italic', margin: '4px 0 1px', lineHeight: '1.35' }}>
              {'Pencapaian tercatat di OASE dan Excel bulk (SME & Mikro) sesuai 3 sesi laporan.'}
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                {'Ingatkan sales input OASE dengan kode '}
                <b>BSIX</b>
                {' sebelum batas tiap sesi: 10.00, 14.00, 19.00.'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{'Kumpulkan dan cek kelengkapan data bulk SME & Mikro sebelum diteruskan ke DSG.'}</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#489D95"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Cocokkan angka OASE dengan catatan lapangan sebelum laporan final 12.00, 17.00, 21.00.</span>
            </div>
          </div>
          <div className="card" style={{ padding: '8px 11px 7px', borderLeft: '5px solid #C83835' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#C83835' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <div className="b" style={{ flex: '1', fontSize: '11.8px', lineHeight: '1.15' }}>
                <span style={{ color: '#C83835' }}>2.</span>
                {' Kebersihan, Kerapihan & Kelengkapan Operasional'}
              </div>
              <a href="#p-dress" className="tap" style={{ color: '#C83835' }}>
                {'Dress code '}
                <svg viewBox="0 0 24 24" fill="none" stroke="#C83835" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div style={{ fontSize: '9.6px', color: '#5d5e63', fontStyle: 'italic', margin: '4px 0 1px', lineHeight: '1.35' }}>
              Booth dan petugas BSI rapi dan bersih, kebutuhan operasional lengkap.
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C83835"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Cek kebersihan dan kerapihan booth sebelum layanan dibuka dan di setiap pergantian shift.</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C83835"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Pantau stok enabler (kartu ATM, buku tabungan, form, ATK, dll), minta tambahan sebelum habis.</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C83835"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Ingatkan petugas untuk tetap rapi, ramah, dan sesuai dress code.</span>
            </div>
          </div>
          <div className="card" style={{ padding: '8px 11px 7px', borderLeft: '5px solid #C9862A' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#C9862A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <div className="b" style={{ flex: '1', fontSize: '11.8px', lineHeight: '1.15' }}>
                <span style={{ color: '#C9862A' }}>3.</span>
                {' Kehadiran, Shifting & Konsumsi'}
              </div>
              <a href="#p-shift" className="tap" style={{ color: '#C9862A' }}>
                {'Shift '}
                <svg viewBox="0 0 24 24" fill="none" stroke="#C9862A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div style={{ fontSize: '9.6px', color: '#5d5e63', fontStyle: 'italic', margin: '4px 0 1px', lineHeight: '1.35' }}>
              Petugas hadir sesuai jadwal dan zona, ishoma dan pergantian shift lancar.
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9862A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Absen petugas (Shift 1 pukul 07.30, Shift 2 maksimal 14.00) dan cek penempatan sesuai zona.</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9862A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{'Atur giliran ishoma grup a & b agar booth tidak kosong. Siapkan pengganti bila ada yang berhalangan.'}</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9862A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{'Kawal transisi 15.00 s.d. 16.00 (handover isu) dan pastikan konsumsi siang & malam sampai ke petugas.'}</span>
            </div>
          </div>
          <div className="card" style={{ padding: '8px 11px 7px', borderLeft: '5px solid #53545A' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span className="ic" style={{ width: '26px', height: '26px', background: '#53545A' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </span>
              <div className="b" style={{ flex: '1', fontSize: '11.8px', lineHeight: '1.15' }}>
                <span style={{ color: '#53545A' }}>4.</span>
                {' Availability System'}
              </div>
              <a href="#p-it" className="tap" style={{ color: '#53545A' }}>
                {'Perangkat '}
                <svg viewBox="0 0 24 24" fill="none" stroke="#53545A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div style={{ fontSize: '9.6px', color: '#5d5e63', fontStyle: 'italic', margin: '4px 0 1px', lineHeight: '1.35' }}>
              Sistem operasional berjalan lancar, termasuk ATM, CRM, dan CS Mesin.
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#53545A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Cek ATM, CRM, CS Mesin, dan perangkat booth sebelum layanan dibuka.</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#53545A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Kendala sistem atau jaringan: segera eskalasi ke Tim Endpoint / Command Center, catat waktu dan dampaknya.</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '9.8px', lineHeight: '1.35', marginTop: '3px' }}>
              <span style={{ flex: 'none', marginTop: '1px' }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#53545A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '11px', height: '11px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Pastikan EXA ditutup pukul 22.00 WIB dan tablet diamankan setelah transaksi.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          29
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
