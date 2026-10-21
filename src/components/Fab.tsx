export function Fab() {
  return (
    <div className="fab">
      <a href="#toc" style={{ background: '#53545A' }} aria-label="Daftar isi">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </a>
      <a href="#cover" style={{ background: '#C83835' }} aria-label="Ke atas">
        <svg style={{ transform: 'rotate(180deg)' }} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </div>
  );
}
