import type { ButtonHTMLAttributes } from 'react';
import waText from '../data/wa-invitation.txt?raw';
import { useToast } from './Toast';

/** Copies the WhatsApp invitation template (src/data/wa-invitation.txt) to the clipboard. */
export function CopyWaButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const say = useToast();
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = waText;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); say('Teks undangan tersalin'); } catch { say('Gagal menyalin'); }
    document.body.removeChild(ta);
  };
  const copy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(waText).then(() => say('Teks undangan tersalin'), fallback);
    } else fallback();
  };
  return <button type="button" {...props} onClick={copy} />;
}
