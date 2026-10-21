import type { ImgHTMLAttributes } from 'react';
import { useLightbox } from './Lightbox';

/** Image that opens in the full-screen lightbox when tapped. */
export function ZoomImg(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { open } = useLightbox();
  return (
    <img
      {...props}
      data-z="1"
      onClick={(e) => {
        // images inside links should zoom, not navigate
        if (e.currentTarget.closest('a')) e.preventDefault();
        open(e.currentTarget);
      }}
    />
  );
}
