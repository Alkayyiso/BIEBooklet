import { ZoomImg } from '../components/ZoomImg';

export default function PagePCx() {
  return (
    <section className="page" id="p-cx" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c6" style={{ background: '#C83835' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
          Bab 06
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
          Brand
        </div>
        <h2 className="t">
          {'Bersama Jaga '}
          <span style={{ color: '#C83835' }}>Customer Experience</span>
        </h2>
        <div className="lead">
          Dengan disiplin, koordinasi, dan semangat melayani, kita ciptakan pengalaman terbaik untuk setiap pengunjung.
        </div>
        <div className="col" style={{ gap: '5px', marginTop: '8px' }}>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '6px 8px 6px 6px' }}>
            <div style={{ position: 'relative', flex: 'none' }}>
              <ZoomImg
                src="assets/img/cx1.jpg"
                alt=""
                style={{ width: '92px', height: '62px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '-3px',
                  top: '-3px',
                  width: '20px',
                  height: '20px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  border: '2px solid #fff',
                }}
              >
                1
              </span>
            </div>
            <div style={{ flex: '1', lineHeight: '1.28' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Bedakan jadwal bertugas dan jadi pengunjung
              </div>
              <div style={{ fontSize: '9.3px', color: '#5d5e63' }}>
                Pahami kapan kamu sedang bertugas dan kapan sedang menjadi pengunjung.
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '6px 8px 6px 6px' }}>
            <div style={{ position: 'relative', flex: 'none' }}>
              <ZoomImg
                src="assets/img/cx2.jpg"
                alt=""
                style={{ width: '92px', height: '62px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '-3px',
                  top: '-3px',
                  width: '20px',
                  height: '20px',
                  background: '#C83835',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  border: '2px solid #fff',
                }}
              >
                2
              </span>
            </div>
            <div style={{ flex: '1', lineHeight: '1.28' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Pakai dress code sesuai ketentuan
              </div>
              <div style={{ fontSize: '9.3px', color: '#5d5e63' }}>
                DC petugas hanya saat bertugas. Di luar itu, pakai pakaian bebas non PDL/DC berlogo BSI.
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '6px 8px 6px 6px' }}>
            <div style={{ position: 'relative', flex: 'none' }}>
              <ZoomImg
                src="assets/img/cx3.jpg"
                alt=""
                style={{ width: '92px', height: '62px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '-3px',
                  top: '-3px',
                  width: '20px',
                  height: '20px',
                  background: '#EEA948',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  border: '2px solid #fff',
                }}
              >
                3
              </span>
            </div>
            <div style={{ flex: '1', lineHeight: '1.28' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                {'Update kehadiran & ikuti briefing'}
              </div>
              <div style={{ fontSize: '9.3px', color: '#5d5e63' }}>
                Di ruang khusus petugas BSI: presensi, briefing, serta cek kerapihan dan kebersihan diri.
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '6px 8px 6px 6px' }}>
            <div style={{ position: 'relative', flex: 'none' }}>
              <ZoomImg
                src="assets/img/cx4.jpg"
                alt=""
                style={{ width: '92px', height: '62px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '-3px',
                  top: '-3px',
                  width: '20px',
                  height: '20px',
                  background: '#53545A',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  border: '2px solid #fff',
                }}
              >
                4
              </span>
            </div>
            <div style={{ flex: '1', lineHeight: '1.28' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Kenakan vest di ruang pegawai
              </div>
              <div style={{ fontSize: '9.3px', color: '#5d5e63' }}>Supaya lebih rapi. Vest tidak dipakai dari rumah.</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '6px 8px 6px 6px' }}>
            <div style={{ position: 'relative', flex: 'none' }}>
              <ZoomImg
                src="assets/img/cx5.jpg"
                alt=""
                style={{ width: '92px', height: '62px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '-3px',
                  top: '-3px',
                  width: '20px',
                  height: '20px',
                  background: '#489D95',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  border: '2px solid #fff',
                }}
              >
                5
              </span>
            </div>
            <div style={{ flex: '1', lineHeight: '1.28' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Lakukan adjustment saat diperlukan
              </div>
              <div style={{ fontSize: '9.3px', color: '#5d5e63' }}>
                Jika pengunjung tidak seimbang dengan petugas: tambah tim atau kurangi sementara.
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '6px 8px 6px 6px' }}>
            <div style={{ position: 'relative', flex: 'none' }}>
              <ZoomImg
                src="assets/img/cx6.jpg"
                alt=""
                style={{ width: '92px', height: '62px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '-3px',
                  top: '-3px',
                  width: '20px',
                  height: '20px',
                  background: '#C83835',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  border: '2px solid #fff',
                }}
              >
                6
              </span>
            </div>
            <div style={{ flex: '1', lineHeight: '1.28' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Makan di ruang makan pegawai
              </div>
              <div style={{ fontSize: '9.3px', color: '#5d5e63' }}>
                {'Kursi food court untuk pengunjung. Makan siang & malam disediakan, bawa tumbler sendiri.'}
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '6px 8px 6px 6px' }}>
            <div style={{ position: 'relative', flex: 'none' }}>
              <ZoomImg
                src="assets/img/cx7.jpg"
                alt=""
                style={{ width: '92px', height: '62px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />{' '}
              <span
                className="ic"
                style={{
                  position: 'absolute',
                  left: '-3px',
                  top: '-3px',
                  width: '20px',
                  height: '20px',
                  background: '#EEA948',
                  color: '#fff',
                  fontWeight: '900',
                  fontSize: '10px',
                  border: '2px solid #fff',
                }}
              >
                7
              </span>
            </div>
            <div style={{ flex: '1', lineHeight: '1.28' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                Nikmati expo saat jadi pengunjung
              </div>
              <div style={{ fontSize: '9.3px', color: '#5d5e63' }}>
                Boleh menikmati experience BSI International Expo, tapi bukan saat sedang berjaga.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          40
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '0.25' }} />
          <a href="#c4" style={{ background: '#53545A', opacity: '0.25' }} />
          <a href="#c5" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c6" style={{ background: '#C83835', opacity: '1' }} />
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
