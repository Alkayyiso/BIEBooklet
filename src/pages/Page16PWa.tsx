import { CopyWaButton } from '../components/CopyWaButton';
import { ZoomImg } from '../components/ZoomImg';

export default function Page16PWa() {
  return (
    <section className="page" id="p-wa" style={{ background: '#FFFCF6' }}>
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
          {'Script Undangan '}
          <span style={{ color: '#1FA855' }}>WA</span>
        </h2>
        <div className="lead">Ketuk tombol hijau, pilih kontak, lalu ganti semua [isian], termasuk link registrasi sesuai RO kamu.</div>
        <div style={{ display: 'flex', gap: '10px', margin: '10px 0 10px' }}>
          <a
            href="https://wa.me/?text=%E2%9C%A8%20PENAWARAN%20SPESIAL%20MENANTI%20ANDA%20DI%20BSI%20INTERNATIONAL%20EXPO%202026%0A%0AAssalamu%27alaikum%20Warahmatullahi%20Wabarakatuh%0A%0ABapak/Ibu%20%5BNama%20Nasabah%5D%2C%0A%0APerkenalkan%20saya%20%5BNama%20Petugas%5D%20dari%20Bank%20Syariah%20Indonesia%20%28BSI%29%20Cabang%20%5BNama%20Cabang%5D.%0A%0AYuk%2C%20sempatkan%20hadir%20dan%20rasakan%20pengalaman%20spesial%20di%20BSI%20International%20Expo%202026%20dengan%20tema%20%22Buy%20Local%20Go%20Global%22%20yang%20akan%20diselenggarakan%20pada%3A%0A%0A%F0%9F%97%93%EF%B8%8F%2023-25%20Oktober%202026%0A%F0%9F%93%8D%20Jakarta%20International%20Convention%20Center%20%28JICC%29%20Hall%20A%20dan%20B%0A%0AKhusus%20untuk%20Nasabah%20BSI%2C%20tersedia%20special%20price%2C%20cashback%2C%20dan%20berbagai%20penawaran%20menarik%20untuk%20berbagai%20kebutuhan%3A%0A%E2%80%A2%20fashion%0A%E2%80%A2%20travelling%0A%E2%80%A2%20haji%20%26%20umrah%0A%E2%80%A2%20pembelian%20emas%0A%E2%80%A2%20kendaraan%0A%E2%80%A2%20hingga%20rumah%20impian%0A%0AJangan%20lewatkan%20kesempatan%20untuk%20mendapatkan%20berbagai%20keuntungan%20eksklusif%20dari%20BSI.%0A%0AUntuk%20memudahkan%20pelayanan%2C%20silakan%20melakukan%20registrasi%20melalui%20link%20berikut%3A%0A%F0%9F%94%97%20%5BLink%20Registrasi%20sesuai%20RO%5D%0A%0AApabila%20ada%20pertanyaan%2C%20saya%20siap%20membantu.%0A%0ATerima%20kasih%20atas%20kepercayaan%20Bapak/Ibu%20kepada%20BSI.%0AWassalamu%27alaikum%20Warahmatullahi%20Wabarakatuh%0A%0A%5BNama%20Petugas%5D%0ABSI%20Cabang%20%5BNama%20Cabang%5D%0A%F0%9F%93%B1%20%5BNomor%20HP%5D"
            style={{
              flex: '1',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#1FA855',
              color: '#fff',
              borderRadius: '14px',
              padding: '10px 12px',
            }}
            target="_blank"
            rel="noopener"
          >
            <span className="ic" style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,.25)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </span>
            <div style={{ lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '12.5px' }}>
                Kirim via WhatsApp
              </div>
              <div className="xs" style={{ opacity: '.9' }}>
                Ketuk, pilih kontak, edit [isian]
              </div>
            </div>
          </a>{' '}
          <a
            href="#p-link"
            style={{
              flex: 'none',
              width: '118px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#489D95',
              color: '#fff',
              borderRadius: '14px',
              padding: '10px 10px',
            }}
          >
            <span className="ic" style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,.25)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </span>
            <div className="b" style={{ fontSize: '10.5px', lineHeight: '1.2' }}>
              Pilih link sesuai RO
            </div>
          </a>
        </div>
        <CopyWaButton
          style={{
            margin: '-2px 0 10px',
            width: '100%',
            border: '2px dashed #1FA855',
            background: '#fff',
            color: '#1FA855',
            fontFamily: 'P,sans-serif',
            fontWeight: '700',
            fontSize: '11.5px',
            borderRadius: '12px',
            padding: '8px',
            cursor: 'pointer',
          }}
        >
          Salin teks undangan
        </CopyWaButton>
        <div style={{ display: 'flex', gap: '10px' }}>
          <ZoomImg
            src="assets/img/phone.jpg"
            alt=""
            style={{
              width: '112px',
              height: '228px',
              objectFit: 'cover',
              objectPosition: '50% 0',
              borderRadius: '18px',
              border: '4px solid #26272B',
              flex: 'none',
            }}
          />
          <div
            className="card"
            style={{
              flex: '1',
              fontSize: '9.6px',
              lineHeight: '1.45',
              padding: '10px 11px',
              background: '#E8F7EC',
              boxShadow: 'none',
              borderRadius: '4px 14px 14px 14px',
            }}
          >
            <b>PENAWARAN SPESIAL MENANTI ANDA DI BSI INTERNATIONAL EXPO 2026</b>
            <br />
            <br />
            {" Assalamu'alaikum Warahmatullahi Wabarakatuh"}
            <br />
            <br />
            {' Bapak/Ibu '}
            <span style={{ background: '#EEA94855', borderRadius: '4px', padding: '0 3px', fontWeight: '600' }}>[Nama Nasabah]</span>,<br />
            {' Perkenalkan saya '}
            <span style={{ background: '#EEA94855', borderRadius: '4px', padding: '0 3px', fontWeight: '600' }}>[Nama Petugas]</span>
            {' dari Bank Syariah Indonesia (BSI) Cabang '}
            <span style={{ background: '#EEA94855', borderRadius: '4px', padding: '0 3px', fontWeight: '600' }}>[Nama Cabang]</span>.<br />
            <br />
            {' Yuk, sempatkan hadir dan rasakan pengalaman spesial di BSI International Expo 2026 dengan tema '}
            <b>"Buy Local Go Global"</b>
            {' pada:'}
            <br /> <b>23-25 Oktober 2026</b>, JICC Hall A dan B.
          </div>
        </div>
        <div
          className="card"
          style={{
            marginTop: '8px',
            fontSize: '9.6px',
            lineHeight: '1.45',
            padding: '10px 11px',
            background: '#E8F7EC',
            boxShadow: 'none',
          }}
        >
          {
            'Khusus untuk Nasabah BSI, tersedia special price, cashback, dan berbagai penawaran menarik untuk kebutuhan fashion, travelling, haji & umrah, pembelian emas, kendaraan, hingga rumah impian.'
          }
          <br />
          <br />
          {
            ' Jangan lewatkan kesempatan untuk mendapatkan berbagai keuntungan eksklusif dari BSI. Untuk memudahkan pelayanan, silakan registrasi melalui link berikut: '
          }
          <span style={{ background: '#EEA94855', borderRadius: '4px', padding: '0 3px', fontWeight: '600' }}>
            [Link Registrasi sesuai RO]
          </span>
          <br />
          <br />
          {' Apabila ada pertanyaan, saya siap membantu. Terima kasih atas kepercayaan Bapak/Ibu kepada BSI.'}
          <br />
          {" Wassalamu'alaikum Warahmatullahi Wabarakatuh"}
          <br />
          <br /> <span style={{ background: '#EEA94855', borderRadius: '4px', padding: '0 3px', fontWeight: '600' }}>[Nama Petugas]</span>
          {' · BSI Cabang '}
          <span style={{ background: '#EEA94855', borderRadius: '4px', padding: '0 3px', fontWeight: '600' }}>[Nama Cabang]</span>
          {' · '}
          <span style={{ background: '#EEA94855', borderRadius: '4px', padding: '0 3px', fontWeight: '600' }}>[Nomor HP]</span>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          16
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '1' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '0.25' }} />
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
