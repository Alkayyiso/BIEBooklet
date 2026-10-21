import { useState, type HTMLAttributes } from 'react';

const key = () => 'bsiexpo-ritme-' + new Date().toISOString().slice(0, 10);

function load(): Record<number, boolean> {
  try { return JSON.parse(localStorage.getItem(key()) || '{}'); } catch { return {}; }
}

/** Tick-able checklist row. `index` identifies it in the per-day localStorage state. */
export function Chk({ index, className, children, ...rest }: HTMLAttributes<HTMLDivElement> & { index: number }) {
  const [done, setDone] = useState(() => !!load()[index]);
  const toggle = () => {
    const next = !done;
    setDone(next);
    const st = load();
    st[index] = next;
    try { localStorage.setItem(key(), JSON.stringify(st)); } catch { /* storage unavailable */ }
  };
  return (
    <div {...rest} className={['chk', done ? 'done' : '', className].filter(Boolean).join(' ')} onClick={toggle}>
      {children}
    </div>
  );
}
