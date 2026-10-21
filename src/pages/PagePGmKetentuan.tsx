import { ZoomImg } from '../components/ZoomImg';

export default function PagePGmKetentuan() {
  return (
    <section className="page" id="p-gm-ketentuan" style={{ background: '#FFFCF6' }}>
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
          {'Ketentuan '}
          <span style={{ color: '#C83835' }}>Gamification</span>
        </h2>
        <div className="lead">Pegang aturan ini supaya poin tercatat benar dan tidak ada nasabah yang dirugikan.</div>
        <div className="card" style={{ padding: '9px 12px', marginTop: '9px', borderTop: '4px solid #489D95' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span className="ic" style={{ width: '24px', height: '24px', background: '#489D95' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <span className="b" style={{ fontSize: '12px' }}>
              Untuk nasabah
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
              {'Satu ID unik hanya punya '}
              <b>1 kesempatan untuk 1 hadiah</b>, tidak berlaku kelipatan.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
              {'Minimal poin untuk penukaran hadiah: '}
              <b>50 poin</b>.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
              {'Poin '}
              <b>tetap berlaku di hari lain</b>
              {' selama belum ditukar hadiah.'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
              {'Aktivitas yang sama '}
              <b>tidak boleh dikerjakan lebih dari 1 kali</b>.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
              {'Jumlah poin nasabah tampil di '}
              <b>aplikasi peserta</b>.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
              {'Ada '}
              <b>kuota hadiah per hari</b>. Bila habis, nasabah diinfokan lewat microsite.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
              {'Sebelum redeem, nasabah wajib '}
              <b>share aktivitas di media sosial</b>
              {' dan tag akun BSI.'}
            </span>
          </div>
        </div>
        <div className="card" style={{ padding: '9px 12px', marginTop: '8px', borderTop: '4px solid #C83835' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span className="ic" style={{ width: '24px', height: '24px', background: '#C83835' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </span>
            <span className="b" style={{ fontSize: '12px' }}>
              {'Untuk PIC island & petugas'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
            <span>
              {'Poin diberikan oleh '}
              <b>PIC island</b>
              {' yang bertanggung jawab, setelah aktivitas dikerjakan.'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
            <span>
              {'PIC hanya bisa menambah poin untuk '}
              <b>aktivitas di island-nya</b>
              {' dan '}
              <b>Welcome Points</b>.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
            <span>
              {'Poin transaksi '}
              <b>Hasanah Card dan QRIS BYOND</b>
              {' diberikan di '}
              <b>Redemption Corner</b>.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
            <span>
              {'Wajib '}
              <b>lampirkan bukti</b>
              {' sebelum memberi poin: bukti transaksi, form aplikasi HC, form peminatan, dsb.'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '9.8px', lineHeight: '1.36', marginTop: '3px' }}>
            <span style={{ flex: 'none', marginTop: '2px' }}>
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
            <span>
              {'User PIC bisa dipakai '}
              <b>bersamaan di lebih dari satu device</b>
              {' untuk mengantisipasi penumpukan.'}
            </span>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '7px 10px', marginTop: '8px' }}>
          <img src="assets/img/gm_merch.jpg" alt="" style={{ width: '122px', height: '78px', objectFit: 'contain', flex: 'none' }} />
          <div style={{ flex: '1', lineHeight: '1.3' }}>
            <div className="b" style={{ fontSize: '11.5px' }}>
              Official merchandise
            </div>
            <div style={{ fontSize: '9.4px', color: '#5d5e63' }}>
              Tumbler, TWS, atau helm BSI International Expo 2026. Jenis dan ketersediaan hadiah menyesuaikan panitia.
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            padding: '7px 10px',
            marginTop: '8px',
            background: '#489D95',
            color: '#fff',
          }}
        >
          <ZoomImg
            src="assets/img/gm_flyer.jpg"
            alt=""
            style={{ width: '84px', height: '112px', objectFit: 'cover', borderRadius: '6px', flex: 'none', background: '#fff' }}
          />
          <div style={{ flex: '1', lineHeight: '1.35' }}>
            <div className="b" style={{ fontSize: '11.5px' }}>
              Flyer untuk nasabah
            </div>
            <div style={{ fontSize: '9.6px', opacity: '.92' }}>
              Bagikan flyer ini dan bantu nasabah memindai QR Code untuk membuka microsite gamification. Ketuk/zoom gambar untuk melihat
              flyer lengkap.
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          59
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
