import { ZoomImg } from '../components/ZoomImg';

export default function Page20PHallb() {
  return (
    <section className="page" id="p-hallb" style={{ background: '#FFFCF6' }}>
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
          <span style={{ color: '#EEA948' }}>B</span>
        </h2>
        <div className="lead">{'Main stage, tenant lifestyle, F&B, mushola, dan area keluarga.'}</div>
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
            src="assets/img/mapB.jpg"
            alt=""
            style={{ width: '100%', height: '270px', objectFit: 'cover', objectPosition: '50% 0', display: 'block' }}
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
        <div className="row" style={{ marginBottom: '8px' }}>
          <a href="#p-rekap" className="card" style={{ display: 'flex', gap: '7px', alignItems: 'center', padding: '6px 8px', flex: '1' }}>
            <span
              className="ic"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: '#489D95',
                color: '#fff',
                fontWeight: '900',
                fontSize: '11px',
              }}
            >
              Z5
            </span>
            <div style={{ flex: '1', lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                {'Tenant & Lifestyle'}
              </div>
              <div className="xs muted">3 sampai 9 petugas</div>
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
              Z6
            </span>
            <div style={{ flex: '1', lineHeight: '1.2' }}>
              <div className="b" style={{ fontSize: '11px' }}>
                {'Panggung & Komunitas'}
              </div>
              <div className="xs muted">0 petugas</div>
            </div>
          </a>
        </div>
        <div className="card" style={{ padding: '8px 10px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: '1' }}>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>24</b>
                <span>{'Electronic & Gadget'}</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>25</b>
                <span>SMESCO</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>26</b>
                <span>Islamic Book Fair</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>27</b>
                <span>Media Center</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>28</b>
                <span>Food Package</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>29</b>
                <span>VIP Lounge</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>30</b>
                <span>Coffee Corner</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>31</b>
                <span>BSI Bisnis Hub</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>32</b>
                <span>Vespa + Yamaha</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>33</b>
                <span>Paragon</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>34</b>
                <span>Watson</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>35</b>
                <span>{'Beauty & Wellness'}</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>36</b>
                <span>Lokamove</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>37</b>
                <span>Othman</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>38</b>
                <span>Local Apparel</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>39</b>
                <span>Motor Listrik</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>40</b>
                <span>Booth merchant S24</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>41</b>
                <span>Brand Fashion B</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>42</b>
                <span>Lokamove Clearance</span>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>43</b>
                <span>Female Daily</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>44</b>
                <span>Jagat Aroma</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>45</b>
                <span>Pru Syariah</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>46</b>
                <span>Redemption GL</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>47</b>
                <span>Glam Local</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>48</b>
                <span>Outdoor Activity</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>49</b>
                <span>Watch Zone</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>50</b>
                <span>Redemption Hall B</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>51</b>
                <span>Lapangan Padel</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>52</b>
                <span>Sport Zone</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>53</b>
                <span>{'Healthy Booth & Bar'}</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>54</b>
                <span>Mushola</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>55</b>
                <span>Medic</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>56</b>
                <span>{'F&B Mix'}</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>57</b>
                <span>Lactation</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>58</b>
                <span>Playground</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>59</b>
                <span>Picnic Table</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', fontSize: '9.2px', lineHeight: '1.5' }}>
                <b style={{ minWidth: '16px', color: '#8a8b90' }}>60</b>
                <span>Exit Gate</span>
              </div>
            </div>
          </div>
        </div>
        <div className="note" style={{ marginTop: '5px' }}>
          Layout dapat berubah menyesuaikan kenyamanan.
        </div>
      </div>
      <div className="foot" style={{}}>
        <span className="pn" style={{}}>
          20
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#489D95', opacity: '0.25' }} />
          <a href="#c2" style={{ background: '#C83835', opacity: '0.25' }} />
          <a href="#c3" style={{ background: '#EEA948', opacity: '1' }} />
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
