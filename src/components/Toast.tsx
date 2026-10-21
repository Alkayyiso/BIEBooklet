import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';

const ToastCtx = createContext<{ message: string; on: boolean; say: (m: string) => void }>({ message: '', on: false, say: () => {} });
export const useToast = () => useContext(ToastCtx).say;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');
  const [on, setOn] = useState(false);
  const timer = useRef<number>();
  const say = useCallback((m: string) => {
    setMessage(m);
    setOn(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOn(false), 1800);
  }, []);
  return <ToastCtx.Provider value={{ message, on, say }}>{children}</ToastCtx.Provider>;
}

export function Toast() {
  const { message, on } = useContext(ToastCtx);
  return <div id="toast" className={on ? 'on' : undefined}>{message}</div>;
}
