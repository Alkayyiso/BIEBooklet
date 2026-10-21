import { createContext, useContext, useEffect, useState, type HTMLAttributes, type ReactNode } from 'react';

const NowCtx = createContext<Date>(new Date());

/** Ticks every minute so rundown rows can highlight "SEKARANG". */
export function NowProvider({ children }: { children: ReactNode }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);
  return <NowCtx.Provider value={now}>{children}</NowCtx.Provider>;
}

const RowCtx = createContext(false);

const ymd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

interface RdProps extends HTMLAttributes<HTMLDivElement> {
  /** comma separated YYYY-MM-DD list */
  dates: string;
  /** HHMM, e.g. 930 for 09:30 */
  start: number;
  end: number;
}

/** Rundown row; gets class "now" while the current local date/time is inside its window. */
export function Rd({ dates, start, end, className, children, ...rest }: RdProps) {
  const now = useContext(NowCtx);
  const hm = now.getHours() * 100 + now.getMinutes();
  const isNow = dates.split(',').includes(ymd(now)) && hm >= start && hm < end;
  return (
    <RowCtx.Provider value={isNow}>
      <div {...rest} className={['rd', isNow ? 'now' : '', className].filter(Boolean).join(' ')}>
        {children}
      </div>
    </RowCtx.Provider>
  );
}

/** Title element of a rundown row; shows the SEKARANG tag when its row is current. */
export function Rt({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const isNow = useContext(RowCtx);
  return (
    <div {...rest}>
      {children}
      {isNow && <span className="nowtag">SEKARANG</span>}
    </div>
  );
}
