import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure that assets are emitted to the root path
    assetsDir: '',
  },
  base: '/',
  server: {
    host: 'localhost',
  },
})
