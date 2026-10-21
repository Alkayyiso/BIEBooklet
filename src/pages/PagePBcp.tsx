export default function PagePBcp() {
  return (
    <section className="page" id="p-bcp" style={{ background: '#FFFCF6' }}>
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
          Keselamatan
        </div>
        <h2 className="t">
          {'BCP '}
          <span style={{ color: '#489D95' }}>BYOND</span>
        </h2>
        <div className="lead">Business Continuity Plan: layanan alternatif bila aplikasi BYOND terganggu selama expo.</div>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            background: '#489D9518',
            borderRadius: '10px',
            padding: '6px 10px',
            marginTop: '8px',
            fontSize: '9.4px',
            lineHeight: '1.35',
          }}
        >
          <span className="ic" style={{ width: '22px', height: '22px', background: '#489D95' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
          </span>
          <span>
            {'Saat BYOND terganggu, arahkan nasabah ke '}
            <b>tools BCP</b>
            {' (chip hijau). Label abu-abu = group penanggung jawab.'}
          </span>
        </div>
        <div className="col" style={{ gap: '5px', marginTop: '7px' }}>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '8px 10px', alignItems: 'flex-start' }}>
            <span
              className="ic"
              style={{
                width: '26px',
                height: '26px',
                background: '#1F4E79',
                color: '#fff',
                fontWeight: '900',
                fontSize: '10px',
                borderRadius: '8px',
                marginTop: '1px',
              }}
            >
              01
            </span>
            <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.6px', flex: '1' }}>
                  Transaksi harian
                </span>
                <span style={{ fontSize: '8.2px', color: '#6b6c70', background: '#f1f1f2', borderRadius: '6px', padding: '1px 6px' }}>
                  DBR, DBO
                </span>
              </div>
              <div style={{ fontSize: '9.4px', color: '#6b6c70', marginTop: '1px' }}>Tidak bisa transaksi bayar/beli semua kategori</div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  ATM
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  E-wallet (OVO, ShopeePay, DANA)
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  mBanking lain
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '8px 10px', alignItems: 'flex-start' }}>
            <span
              className="ic"
              style={{
                width: '26px',
                height: '26px',
                background: '#1F4E79',
                color: '#fff',
                fontWeight: '900',
                fontSize: '10px',
                borderRadius: '8px',
                marginTop: '1px',
              }}
            >
              02
            </span>
            <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.6px', flex: '1' }}>
                  QRIS
                </span>
                <span style={{ fontSize: '8.2px', color: '#6b6c70', background: '#f1f1f2', borderRadius: '6px', padding: '1px 6px' }}>
                  DBR
                </span>
              </div>
              <div style={{ fontSize: '9.4px', color: '#6b6c70', marginTop: '1px' }}>Tidak bisa bayar QRIS lewat BYOND</div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  Transfer online
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  Kartu
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  Mesin EDC
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  BI FAST
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '8px 10px', alignItems: 'flex-start' }}>
            <span
              className="ic"
              style={{
                width: '26px',
                height: '26px',
                background: '#1F4E79',
                color: '#fff',
                fontWeight: '900',
                fontSize: '10px',
                borderRadius: '8px',
                marginTop: '1px',
              }}
            >
              03
            </span>
            <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.6px', flex: '1' }}>
                  Transfer pemindahbukuan
                </span>
                <span style={{ fontSize: '8.2px', color: '#6b6c70', background: '#f1f1f2', borderRadius: '6px', padding: '1px 6px' }}>
                  DBR
                </span>
              </div>
              <div style={{ fontSize: '9.4px', color: '#6b6c70', marginTop: '1px' }}>Tidak bisa transfer pemindahbukuan lewat BYOND</div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  ATM
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '8px 10px', alignItems: 'flex-start' }}>
            <span
              className="ic"
              style={{
                width: '26px',
                height: '26px',
                background: '#1F4E79',
                color: '#fff',
                fontWeight: '900',
                fontSize: '10px',
                borderRadius: '8px',
                marginTop: '1px',
              }}
            >
              04
            </span>
            <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.6px', flex: '1' }}>
                  Cardless withdrawal on-us
                </span>
                <span style={{ fontSize: '8.2px', color: '#6b6c70', background: '#f1f1f2', borderRadius: '6px', padding: '1px 6px' }}>
                  DBR
                </span>
              </div>
              <div style={{ fontSize: '9.4px', color: '#6b6c70', marginTop: '1px' }}>Tidak bisa tarik tunai tanpa kartu di ATM/CRM BSI</div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  EXA cabang
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '8px 10px', alignItems: 'flex-start' }}>
            <span
              className="ic"
              style={{
                width: '26px',
                height: '26px',
                background: '#1F4E79',
                color: '#fff',
                fontWeight: '900',
                fontSize: '10px',
                borderRadius: '8px',
                marginTop: '1px',
              }}
            >
              05
            </span>
            <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.6px', flex: '1' }}>
                  Cardless withdrawal bank lain
                </span>
                <span style={{ fontSize: '8.2px', color: '#6b6c70', background: '#f1f1f2', borderRadius: '6px', padding: '1px 6px' }}>
                  DBR
                </span>
              </div>
              <div style={{ fontSize: '9.4px', color: '#6b6c70', marginTop: '1px' }}>
                Nasabah bank lain tidak bisa tarik tunai tanpa kartu di ATM/CRM BSI
              </div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  ATM bank lain
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '8px 10px', alignItems: 'flex-start' }}>
            <span
              className="ic"
              style={{
                width: '26px',
                height: '26px',
                background: '#1F4E79',
                color: '#fff',
                fontWeight: '900',
                fontSize: '10px',
                borderRadius: '8px',
                marginTop: '1px',
              }}
            >
              06
            </span>
            <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.6px', flex: '1' }}>
                  {'Buka rekening & tambah rekening'}
                </span>
                <span style={{ fontSize: '8.2px', color: '#6b6c70', background: '#f1f1f2', borderRadius: '6px', padding: '1px 6px' }}>
                  DBR
                </span>
              </div>
              <div style={{ fontSize: '9.4px', color: '#6b6c70', marginTop: '1px' }}>
                Nasabah baru/eksisting tidak bisa buka CIF, tabungan, deposito
              </div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  EXA
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '9px', padding: '8px 10px', alignItems: 'flex-start' }}>
            <span
              className="ic"
              style={{
                width: '26px',
                height: '26px',
                background: '#1F4E79',
                color: '#fff',
                fontWeight: '900',
                fontSize: '10px',
                borderRadius: '8px',
                marginTop: '1px',
              }}
            >
              07
            </span>
            <div style={{ flex: '1', minWidth: '0', lineHeight: '1.25' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="b" style={{ fontSize: '11.6px', flex: '1' }}>
                  Transfer BI FAST
                </span>
                <span style={{ fontSize: '8.2px', color: '#6b6c70', background: '#f1f1f2', borderRadius: '6px', padding: '1px 6px' }}>
                  DBR
                </span>
              </div>
              <div style={{ fontSize: '9.4px', color: '#6b6c70', marginTop: '1px' }}>Tidak bisa transfer BI FAST lewat BYOND</div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  Online transfer
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  ATM
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#489D95',
                    color: '#fff',
                    fontSize: '9.2px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    padding: '1px 8px',
                    margin: '3px 3px 0 0',
                  }}
                >
                  EXA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          68
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
