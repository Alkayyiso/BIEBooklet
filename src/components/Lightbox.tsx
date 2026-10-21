import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

interface Ctx { open: (img: HTMLImageElement) => void; close: () => void; src: string | null; wide: boolean }
const LightboxCtx = createContext<Ctx>({ open: () => {}, close: () => {}, src: null, wide: false });
export const useLightbox = () => useContext(LightboxCtx);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);
  const [wide, setWide] = useState(false);
  const open = useCallback((img: HTMLImageElement) => {
    setWide(img.naturalWidth > img.naturalHeight * 1.25);
    setSrc(img.src);
  }, []);
  const close = useCallback(() => setSrc(null), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);
  return <LightboxCtx.Provider value={{ open, close, src, wide }}>{children}</LightboxCtx.Provider>;
}

export function Lightbox() {
  const { src, wide, close } = useLightbox();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (src && ref.current) { ref.current.scrollTop = 0; ref.current.scrollLeft = 0; }
  }, [src]);
  return (
    <div id="lb" ref={ref} className={[src ? 'on' : '', wide ? 'wide' : ''].join(' ').trim() || undefined}>
      <button className="x" aria-label="Tutup" onClick={close}>&times;</button>
      <img alt="" src={src ?? undefined} />
      <div className="hint">Cubit untuk zoom · ketuk &times; untuk tutup</div>
    </div>
  );
}
