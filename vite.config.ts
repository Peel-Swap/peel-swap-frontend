/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url';
import { nodePolyfills } from "vite-plugin-node-polyfills";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), nodePolyfills()],
  resolve: {
    alias: {
      "@": __dirname,
      "@cedra-labs/wallet-adapter-react": __dirname + "/node_modules/@cedra-labs/wallet-adapter/packages/wallet-adapter-react/src",
      "@cedra-labs/wallet-adapter-core": __dirname + "/node_modules/@cedra-labs/wallet-adapter/packages/wallet-adapter-core/src",
    },
  },
  server: {
    proxy: {
      '/api/cedra': {
        target: 'https://devnet.cedra.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cedra/, '/v1')
      }
    }
  }
})
