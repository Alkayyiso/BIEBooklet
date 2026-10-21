import { useEffect } from 'react';

/** Smooth-scroll for in-page #links, plus deep-link support (e.g. index.html#p-booth). */
export function useAnchorNav() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a || e.defaultPrevented) return;
      const href = a.getAttribute('href')!;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    };
    document.addEventListener('click', onClick);
    let t: number | undefined;
    if (location.hash) {
      const h = document.getElementById(location.hash.slice(1));
      if (h) t = window.setTimeout(() => h.scrollIntoView(), 50);
    }
    return () => {
      document.removeEventListener('click', onClick);
      if (t) clearTimeout(t);
    };
  }, []);
}
