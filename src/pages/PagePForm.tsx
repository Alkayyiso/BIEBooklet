import { ZoomImg } from '../components/ZoomImg';

export default function PagePForm() {
  return (
    <section className="page" id="p-form" style={{ background: '#FFFCF6' }}>
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
          {'Form '}
          <span style={{ color: '#C83835' }}>Registrasi</span>
        </h2>
        <div className="lead">Lima jenis form, satu untuk setiap kategori tamu. Bantu tamu mengisi data dengan benar.</div>
        <div className="col" style={{ marginTop: '10px', gap: '7px' }}>
          <div
            className="card"
            style={{ display: 'flex', gap: '10px', padding: '7px', alignItems: 'center', borderLeft: '5px solid #14B1A6' }}
          >
            <ZoomImg
              src="assets/img/f_region.jpg"
              alt=""
              style={{
                width: '62px',
                height: '98px',
                objectFit: 'cover',
                objectPosition: '50% 0',
                borderRadius: '6px',
                border: '1px solid #eee',
                flex: 'none',
              }}
            />
            <div style={{ flex: '1' }}>
              <div className="b" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                Nasabah Undangan Region
              </div>
              <div className="xs muted" style={{ marginBottom: '2px' }}>
                {'Tombol: Registrasi & Dapatkan Tiket'}
              </div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Nama sesuai KTP
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Email sesuai BYOND
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                WhatsApp sesuai BYOND
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Persetujuan data
              </span>
            </div>
          </div>
          <div
            className="card"
            style={{ display: 'flex', gap: '10px', padding: '7px', alignItems: 'center', borderLeft: '5px solid #F08C00' }}
          >
            <ZoomImg
              src="assets/img/f_walkn.jpg"
              alt=""
              style={{
                width: '62px',
                height: '98px',
                objectFit: 'cover',
                objectPosition: '50% 0',
                borderRadius: '6px',
                border: '1px solid #eee',
                flex: 'none',
              }}
            />
            <div style={{ flex: '1' }}>
              <div className="b" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                Nasabah Walk-In
              </div>
              <div className="xs muted" style={{ marginBottom: '2px' }}>
                Data harus terdaftar di BYOND
              </div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Nama sesuai KTP
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                No. ponsel BYOND
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Email BYOND
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Domisili (kecamatan)
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Persetujuan data
              </span>
            </div>
          </div>
          <div
            className="card"
            style={{ display: 'flex', gap: '10px', padding: '7px', alignItems: 'center', borderLeft: '5px solid #D020DC' }}
          >
            <ZoomImg
              src="assets/img/f_walknn.jpg"
              alt=""
              style={{
                width: '62px',
                height: '98px',
                objectFit: 'cover',
                objectPosition: '50% 0',
                borderRadius: '6px',
                border: '1px solid #eee',
                flex: 'none',
              }}
            />
            <div style={{ flex: '1' }}>
              <div className="b" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                Non Nasabah Walk-In
              </div>
              <div className="xs muted" style={{ marginBottom: '2px' }}>
                Untuk pengunjung umum
              </div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Nama sesuai KTP
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                No. ponsel
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Email aktif
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Domisili (kecamatan)
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Persetujuan data
              </span>
            </div>
          </div>
          <div
            className="card"
            style={{ display: 'flex', gap: '10px', padding: '7px', alignItems: 'center', borderLeft: '5px solid #3B3B3E' }}
          >
            <ZoomImg
              src="assets/img/f_inst.jpg"
              alt=""
              style={{
                width: '62px',
                height: '98px',
                objectFit: 'cover',
                objectPosition: '50% 0',
                borderRadius: '6px',
                border: '1px solid #eee',
                flex: 'none',
              }}
            />
            <div style={{ flex: '1' }}>
              <div className="b" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                Nasabah Institusi
              </div>
              <div className="xs muted" style={{ marginBottom: '2px' }}>
                Kunjungan resmi instansi
              </div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Nama institusi
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                {'Nama & gelar'}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Jabatan
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                No. telp/WA
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                {'Tanggal & jam kunjungan'}
              </span>
            </div>
          </div>
          <div
            className="card"
            style={{ display: 'flex', gap: '10px', padding: '7px', alignItems: 'center', borderLeft: '5px solid #EDB12F' }}
          >
            <ZoomImg
              src="assets/img/f_emp.jpg"
              alt=""
              style={{
                width: '62px',
                height: '98px',
                objectFit: 'cover',
                objectPosition: '50% 0',
                borderRadius: '6px',
                border: '1px solid #eee',
                flex: 'none',
              }}
            />
            <div style={{ flex: '1' }}>
              <div className="b" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                Employee
              </div>
              <div className="xs muted" style={{ marginBottom: '2px' }}>
                Undangan karyawan
              </div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Nama sesuai ID karyawan
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                NIP
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Email BSI
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Unit kerja
              </span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 6px',
                  margin: '2px 2px 0 0',
                  borderRadius: '8px',
                  background: '#f2f2f3',
                }}
              >
                Jumlah keluarga hadir
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          14
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '1' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
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
