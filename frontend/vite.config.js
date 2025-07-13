import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // SPA fallback for client-side routing
    {
      name: 'spa-fallback',
      configureServer(server) {
        const history = require('connect-history-api-fallback');
        server.middlewares.use(history({ index: '/index.html' }));
      }
    }
  ],
  server: {
    port: 5173,
    host: true
  }
}) 