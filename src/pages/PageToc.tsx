export default function PageToc() {
  return (
    <section className="page" id="toc" style={{ background: '#FFFCF6' }}>
      <div className="top">
        <img src="assets/img/blgg.png" alt="" />
        <div className="ev" style={{}}>
          <b style={{}}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
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
          Daftar Isi
        </div>
        <h2 className="t">
          {'Mau cari '}
          <span style={{ color: '#489D95' }}>apa</span> <span style={{ color: '#EEA948' }}>hari ini?</span>
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            background: '#53545A',
            color: '#fff',
            borderRadius: '12px',
            padding: '8px 12px',
            margin: '6px 0 12px',
          }}
        >
          <span className="ic" style={{ width: '24px', height: '24px', background: '#EEA948' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </span>
          <div style={{ fontSize: '9.4px', lineHeight: '1.35' }}>
            <b>Booklet interaktif.</b>
            {' Ketuk judul untuk melompat, tombol '}
            <b>Isi</b>
            {' untuk kembali ke sini.'}
          </div>
        </div>
        <a
          href="#p-ringkas"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px',
            background: '#fff',
            border: '2px dashed #EEA948',
            borderRadius: '12px',
            padding: '8px 12px',
          }}
        >
          <span className="ic" style={{ width: '30px', height: '30px', background: '#EEA948' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </span>
          <div style={{ flex: '1' }}>
            <div className="b" style={{ fontSize: '12.5px' }}>
              Ringkasan Kilat
            </div>
            <div className="xs muted">{'Angka penting & 6 hal yang wajib diingat'}</div>
          </div>
          <span className="xs b muted">03</span>
        </a>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
          <a
            href="#c1"
            className="ic"
            style={{
              width: '34px',
              height: '34px',
              background: '#489D95',
              borderRadius: '10px',
              fontWeight: '900',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            01
          </a>
          <div style={{ flex: '1' }}>
            <a href="#c1" style={{ fontWeight: '800', fontSize: '12.5px', lineHeight: '1.2' }}>
              {'Jadwal & Rundown'}
            </a>
            <div>
              <a
                href="#p-jadwal"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Jadwal & Sesi Kunjungan '}
                <span style={{ opacity: '.6' }}>05</span>
              </a>
              <a
                href="#p-rundown1"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Rundown Day 1 (Jumat) '}
                <span style={{ opacity: '.6' }}>06</span>
              </a>
              <a
                href="#p-rundown23"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Rundown Day 2 & 3 (Sab-Min) '}
                <span style={{ opacity: '.6' }}>07</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
          <a
            href="#c2"
            className="ic"
            style={{
              width: '34px',
              height: '34px',
              background: '#C83835',
              borderRadius: '10px',
              fontWeight: '900',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            02
          </a>
          <div style={{ flex: '1' }}>
            <a href="#c2" style={{ fontWeight: '800', fontSize: '12.5px', lineHeight: '1.2' }}>
              {'Registrasi & Akses'}
            </a>
            <div>
              <a
                href="#p-jalur"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'4 Jalur Masuk '}
                <span style={{ opacity: '.6' }}>09</span>
              </a>
              <a
                href="#p-undangan"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Alur Tamu Undangan '}
                <span style={{ opacity: '.6' }}>10</span>
              </a>
              <a
                href="#p-walkin"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Alur Walk-In '}
                <span style={{ opacity: '.6' }}>11</span>
              </a>
              <a
                href="#p-booth"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Booth Registrasi '}
                <span style={{ opacity: '.6' }}>12</span>
              </a>
              <a
                href="#p-tiket"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Kenali Warna Tiket '}
                <span style={{ opacity: '.6' }}>13</span>
              </a>
              <a
                href="#p-form"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Form Registrasi '}
                <span style={{ opacity: '.6' }}>14</span>
              </a>
              <a
                href="#p-link"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Link Registrasi & Dashboard '}
                <span style={{ opacity: '.6' }}>15</span>
              </a>
              <a
                href="#p-wa"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Script Undangan WA '}
                <span style={{ opacity: '.6' }}>16</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
          <a
            href="#c3"
            className="ic"
            style={{
              width: '34px',
              height: '34px',
              background: '#EEA948',
              borderRadius: '10px',
              fontWeight: '900',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            03
          </a>
          <div style={{ flex: '1' }}>
            <a href="#c3" style={{ fontWeight: '800', fontSize: '12.5px', lineHeight: '1.2' }}>
              {'Venue & Zona'}
            </a>
            <div>
              <a
                href="#p-area"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'Petunjuk Area Petugas '}
                <span style={{ opacity: '.6' }}>18</span>
              </a>
              <a
                href="#p-halla"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'Hall A '}
                <span style={{ opacity: '.6' }}>19</span>
              </a>
              <a
                href="#p-hallb"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'Hall B '}
                <span style={{ opacity: '.6' }}>20</span>
              </a>
              <a
                href="#p-pavilion"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'BSI Pavilion (Z4) '}
                <span style={{ opacity: '.6' }}>21</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
          <a
            href="#c4"
            className="ic"
            style={{
              width: '34px',
              height: '34px',
              background: '#53545A',
              borderRadius: '10px',
              fontWeight: '900',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            04
          </a>
          <div style={{ flex: '1' }}>
            <a href="#c4" style={{ fontWeight: '800', fontSize: '12.5px', lineHeight: '1.2' }}>
              {'Tim & Shift'}
            </a>
            <div>
              <a
                href="#p-shift"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#ECEDEF',
                  color: '#3D3E42',
                  fontWeight: '600',
                }}
              >
                {'Pola Shift & Titik Kritis '}
                <span style={{ opacity: '.6' }}>23</span>
              </a>
              <a
                href="#p-tenaga"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#ECEDEF',
                  color: '#3D3E42',
                  fontWeight: '600',
                }}
              >
                {'Komposisi Tenaga Kerja '}
                <span style={{ opacity: '.6' }}>24</span>
              </a>
              <a
                href="#p-rekap"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#ECEDEF',
                  color: '#3D3E42',
                  fontWeight: '600',
                }}
              >
                {'Rekap per Regional Office '}
                <span style={{ opacity: '.6' }}>25</span>
              </a>
              <a
                href="#p-daftar"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#ECEDEF',
                  color: '#3D3E42',
                  fontWeight: '600',
                }}
              >
                {'Daftar Petugas Jaga '}
                <span style={{ opacity: '.6' }}>26</span>
              </a>
              <a
                href="#p-jumat"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#ECEDEF',
                  color: '#3D3E42',
                  fontWeight: '600',
                }}
              >
                {'Penempatan Jumat '}
                <span style={{ opacity: '.6' }}>27</span>
              </a>
              <a
                href="#p-weekend"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#ECEDEF',
                  color: '#3D3E42',
                  fontWeight: '600',
                }}
              >
                {'Penempatan Sabtu & Minggu '}
                <span style={{ opacity: '.6' }}>28</span>
              </a>
              <a
                href="#p-pic"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#ECEDEF',
                  color: '#3D3E42',
                  fontWeight: '600',
                }}
              >
                {'Tugas PIC Area/RO '}
                <span style={{ opacity: '.6' }}>29</span>
              </a>
              <a
                href="#p-picritme"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#ECEDEF',
                  color: '#3D3E42',
                  fontWeight: '600',
                }}
              >
                {'Ritme Harian PIC '}
                <span style={{ opacity: '.6' }}>30</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
          <a
            href="#c5"
            className="ic"
            style={{
              width: '34px',
              height: '34px',
              background: '#489D95',
              borderRadius: '10px',
              fontWeight: '900',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            05
          </a>
          <div style={{ flex: '1' }}>
            <a href="#c5" style={{ fontWeight: '800', fontSize: '12.5px', lineHeight: '1.2' }}>
              Operasional
            </a>
            <div>
              <a
                href="#p-kesiapan"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Kesiapan Operasional '}
                <span style={{ opacity: '.6' }}>32</span>
              </a>
              <a
                href="#p-it"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Perangkat IT '}
                <span style={{ opacity: '.6' }}>33</span>
              </a>
              <a
                href="#p-it-standby"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Tim IT Standby '}
                <span style={{ opacity: '.6' }}>34</span>
              </a>
              <a
                href="#p-insiden"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Penanganan Insiden IT '}
                <span style={{ opacity: '.6' }}>35</span>
              </a>
              <a
                href="#p-insiden2"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Insiden IT: BCP s.d. Review '}
                <span style={{ opacity: '.6' }}>36</span>
              </a>
              <a
                href="#p-bcp"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'BCP BYOND #1 s.d. #7 '}
                <span style={{ opacity: '.6' }}>37</span>
              </a>
              <a
                href="#p-bcp2"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'BCP BYOND #8 s.d. #13 '}
                <span style={{ opacity: '.6' }}>38</span>
              </a>
              <a
                href="#p-enabler"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Kartu & Buku Tabungan '}
                <span style={{ opacity: '.6' }}>39</span>
              </a>
              <a
                href="#p-oase"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Pelaporan OASE '}
                <span style={{ opacity: '.6' }}>40</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
          <a
            href="#c6"
            className="ic"
            style={{
              width: '34px',
              height: '34px',
              background: '#C83835',
              borderRadius: '10px',
              fontWeight: '900',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            06
          </a>
          <div style={{ flex: '1' }}>
            <a href="#c6" style={{ fontWeight: '800', fontSize: '12.5px', lineHeight: '1.2' }}>
              {'Sikap & Penampilan'}
            </a>
            <div>
              <a
                href="#p-cx"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Bersama Jaga CX '}
                <span style={{ opacity: '.6' }}>42</span>
              </a>
              <a
                href="#p-dress"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Dress Code '}
                <span style={{ opacity: '.6' }}>43</span>
              </a>
              <a
                href="#p-grooming"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Grooming Pria: Rambut & Wajah '}
                <span style={{ opacity: '.6' }}>44</span>
              </a>
              <a
                href="#p-grooming2"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Grooming Pria: Kemeja & Belt '}
                <span style={{ opacity: '.6' }}>45</span>
              </a>
              <a
                href="#p-grooming3"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Aksesori & Kaos Kaki '}
                <span style={{ opacity: '.6' }}>46</span>
              </a>
              <a
                href="#p-grooming4"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Sepatu & Hijab '}
                <span style={{ opacity: '.6' }}>47</span>
              </a>
              <a
                href="#p-grooming5"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Grooming Wanita: Aksesori '}
                <span style={{ opacity: '.6' }}>48</span>
              </a>
              <a
                href="#p-emas"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Standar Layanan E.M.A.S '}
                <span style={{ opacity: '.6' }}>49</span>
              </a>
              <a
                href="#p-gesture"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Gesture & MSH '}
                <span style={{ opacity: '.6' }}>50</span>
              </a>
              <a
                href="#p-gesture2"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Gesture #4 s.d. #7 '}
                <span style={{ opacity: '.6' }}>51</span>
              </a>
              <a
                href="#p-gesture3"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Gesture #8 s.d. #10 '}
                <span style={{ opacity: '.6' }}>52</span>
              </a>
              <a
                href="#p-gesture4"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Gesture #11 s.d. #13 '}
                <span style={{ opacity: '.6' }}>53</span>
              </a>
              <a
                href="#p-script"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {'Script Greeting '}
                <span style={{ opacity: '.6' }}>54</span>
              </a>
              <a
                href="#p-dodont"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FBE7E6',
                  color: '#A42B28',
                  fontWeight: '600',
                }}
              >
                {"Do & Don't "}
                <span style={{ opacity: '.6' }}>55</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
          <a
            href="#cg"
            className="ic"
            style={{
              width: '34px',
              height: '34px',
              background: '#489D95',
              borderRadius: '10px',
              fontWeight: '900',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            07
          </a>
          <div style={{ flex: '1' }}>
            <a href="#cg" style={{ fontWeight: '800', fontSize: '12.5px', lineHeight: '1.2' }}>
              Gamification
            </a>
            <div>
              <a
                href="#p-gm-alur"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Alur Gamification '}
                <span style={{ opacity: '.6' }}>57</span>
              </a>
              <a
                href="#p-gm-poin"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Aktivitas & Poin '}
                <span style={{ opacity: '.6' }}>58</span>
              </a>
              <a
                href="#p-gm-ketentuan"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#E2F1EF',
                  color: '#357870',
                  fontWeight: '600',
                }}
              >
                {'Ketentuan & Hadiah '}
                <span style={{ opacity: '.6' }}>59</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
          <a
            href="#c7"
            className="ic"
            style={{
              width: '34px',
              height: '34px',
              background: '#EEA948',
              borderRadius: '10px',
              fontWeight: '900',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            08
          </a>
          <div style={{ flex: '1' }}>
            <a href="#c7" style={{ fontWeight: '800', fontSize: '12.5px', lineHeight: '1.2' }}>
              Keselamatan
            </a>
            <div>
              <a
                href="#p-evakuasi"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'Jalur Evakuasi & Titik Kumpul '}
                <span style={{ opacity: '.6' }}>61</span>
              </a>
              <a
                href="#p-exit"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'6 Emergency Exit '}
                <span style={{ opacity: '.6' }}>62</span>
              </a>
              <a
                href="#p-apar"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'APAR, Dispenser & Tempat Sampah '}
                <span style={{ opacity: '.6' }}>63</span>
              </a>
              <a
                href="#p-damkar"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'Mobil Damkar & Fasilitas VIP '}
                <span style={{ opacity: '.6' }}>64</span>
              </a>
              <a
                href="#p-fasilitas"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'Fasilitas Umum & Emergency '}
                <span style={{ opacity: '.6' }}>65</span>
              </a>
              <a
                href="#p-keamanan"
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  padding: '1px 7px',
                  margin: '1.5px 3px 0 0',
                  borderRadius: '10px',
                  background: '#FDF1DC',
                  color: '#C9862A',
                  fontWeight: '600',
                }}
              >
                {'Keamanan & BCM '}
                <span style={{ opacity: '.6' }}>66</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          02
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
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
