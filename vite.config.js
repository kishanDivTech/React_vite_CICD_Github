import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React_vite_CICD_Github/',
  server: {
    opne: true,
    port: 3001
  }
})
