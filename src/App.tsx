import { pages } from './pages';
import { Fab } from './components/Fab';
import { Lightbox, LightboxProvider } from './components/Lightbox';
import { Toast, ToastProvider } from './components/Toast';
import { NowProvider } from './components/Rd';
import { useAnchorNav } from './hooks/useAnchorNav';
import { useFitScale } from './hooks/useFitScale';

export default function App() {
  const bookRef = useFitScale();
  useAnchorNav();
  return (
    <ToastProvider>
      <LightboxProvider>
        <NowProvider>
          <div className="book" ref={bookRef}>
            {pages.map(({ id, Component }) => (
              <Component key={id} />
            ))}
          </div>
        </NowProvider>
        <Fab />
        <Lightbox />
        <Toast />
      </LightboxProvider>
    </ToastProvider>
  );
}
