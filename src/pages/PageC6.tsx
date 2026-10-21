import { ZoomImg } from '../components/ZoomImg';

export default function PageC6() {
  return (
    <section className="page" id="c6" style={{ background: '#C83835', color: '#fff' }}>
      <div
        style={{
          position: 'absolute',
          right: '-90px',
          top: '60px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: '#489D95',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '28px',
          top: '80px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '6px solid #fff',
          background: '#fff',
        }}
      >
        <ZoomImg src="assets/img/dc_ro1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '-30px',
          top: '330px',
          width: '90px',
          height: '90px',
          borderRadius: '0 90px 0 0',
          background: 'rgba(255,255,255,.18)',
        }}
      />
      <div className="top">
        <img src="assets/img/blgg_white.png" alt="" />
        <div className="ev" style={{ color: 'rgba(255,255,255,.8)' }}>
          <b style={{ color: '#fff' }}>BSI International Expo 2026</b>Booklet Petugas
        </div>
        <div className="sp" />
        <a className="chip" href="#c6" style={{ background: 'rgba(255,255,255,.22)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
          Bab 06
        </a>
        <a className="navbtn" href="#toc" style={{ background: '#fff', color: '#26272B' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#26272B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          Isi
        </a>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '24px',
          top: '70px',
          fontSize: '120px',
          fontWeight: '900',
          lineHeight: '1',
          opacity: '.95',
          letterSpacing: '-4px',
        }}
      >
        06
      </div>
      <div style={{ position: 'absolute', left: '24px', right: '24px', top: '335px' }}>
        <div className="kick" style={{ color: 'rgba(255,255,255,.75)' }}>
          Bab 06
        </div>
        <div style={{ fontSize: '36px', fontWeight: '900', lineHeight: '1.02', letterSpacing: '-.6px', margin: '4px 0 8px' }}>
          {'Sikap & Penampilan'}
        </div>
        <div style={{ fontSize: '12px', opacity: '.9', marginBottom: '16px', maxWidth: '320px' }}>
          Customer experience: dress code, grooming, standar E.M.A.S, gesture, dan script
        </div>
        <a
          href="#p-cx"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Bersama Jaga CX
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 42
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-dress"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Dress Code
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 43
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-grooming"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {'Grooming Pria: Rambut & Wajah'}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 44
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-grooming2"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {'Grooming Pria: Kemeja & Belt'}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 45
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-grooming3"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {'Aksesori & Kaos Kaki'}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 46
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-grooming4"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {'Sepatu & Hijab'}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 47
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-grooming5"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Grooming Wanita: Aksesori
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 48
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-emas"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Standar Layanan E.M.A.S
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 49
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-gesture"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {'Gesture & MSH'}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 50
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-gesture2"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Gesture #4 s.d. #7
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 51
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-gesture3"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Gesture #8 s.d. #10
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 52
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-gesture4"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Gesture #11 s.d. #13
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 53
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-script"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            Script Greeting
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 54
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#p-dodont"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,.14)',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '4px',
          }}
        >
          <span className="b" style={{ flex: '1', fontSize: '12.5px' }}>
            {"Do & Don't"}
          </span>
          <span className="xs" style={{ opacity: '.75' }}>
            hal 55
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '14px', height: '14px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="foot" style={{ color: '#fff' }}>
        <span className="pn" style={{ color: '#fff' }}>
          41
        </span>
        <div className="prog">
          <a href="#c1" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c2" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c3" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c4" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c5" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c6" style={{ background: '#fff', opacity: '1' }} />
          <a href="#cg" style={{ background: '#fff', opacity: '0.35' }} />
          <a href="#c7" style={{ background: '#fff', opacity: '0.35' }} />
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontWeight: '700', letterSpacing: '.2px', color: '#fff' }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
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
