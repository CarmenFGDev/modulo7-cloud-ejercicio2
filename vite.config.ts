import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import path from 'path';

export default defineConfig({
  base: './',
  envPrefix: 'PUBLIC_',
  plugins: [
    react({
      babel: {
        plugins: ['@emotion'],
      },
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
       core: path.resolve(__dirname, 'src/core'),
    },
  },
});

