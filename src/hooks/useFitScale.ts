import { useEffect, useRef } from 'react';

/** Scales the 430px-wide pages down to fit narrow screens through the --s CSS variable. */
export function useFitScale() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fit = () => {
      const s = Math.min(1, window.innerWidth / 430);
      document.documentElement.style.setProperty('--s', String(s));
      if (ref.current) ref.current.style.width = 430 * s + 'px';
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return ref;
}
