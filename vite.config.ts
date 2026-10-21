import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset URLs relative, so the build works from any sub-path or static host.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { host: '0.0.0.0', port: 3000 },
});
