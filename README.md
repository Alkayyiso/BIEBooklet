# Booklet Petugas – BSI International Expo 2026 (Vite + React + TypeScript)

React conversion of the original single-file HTML booklet. The rendered output is pixel-identical to the original.
Internal use only: keep the repo private and the deployment behind authentication.

## Run
```
npm install
npm run dev        # http://localhost:3000
npm run build      # typecheck + production build in dist/
npm run preview
```

## Structure
```
index.html, vite.config.ts, tsconfig.json, metadata.json (Google AI Studio)
public/assets/img      163 images        public/assets/fonts   4 TTF fonts (family "P")
src/main.tsx, App.tsx  entry; renders all pages in order + overlays
src/pages/             70 page components, one per page id (PageCover, PageToc, PagePRingkas …) and index.ts (page order + titles)
src/components/        ZoomImg (tap-to-zoom), Lightbox, Toast, Fab, Chk (checklist), Rd/Rt (live "SEKARANG" rundown rows), CopyWaButton
src/hooks/             useFitScale (scale 430px pages to screen), useAnchorNav (smooth #links)
src/styles/            original CSS split into 6 files
src/data/              pages.json (manifest), wa-invitation.txt (WhatsApp text, edit here)
```

## Notes
- Pages are fixed 430x860 canvases with inline styles (kept as-is to guarantee identical visuals). Refactor repeated blocks into components gradually.
- Deep links work as before: `/#p-booth`, `/#p-evakuasi`.
- Checklist state is stored per day in `localStorage`.
- Placeholders `[Nama Petugas]` / `[Nama Cabang]` remain in the WhatsApp text and the p-wa page.
- No Gemini or API key is used. If you add Gemini features in AI Studio, keep keys server-side.

## Google AI Studio
Push this folder to a private GitHub repo, then in Build mode choose Add files (+) -> Import from GitHub.
