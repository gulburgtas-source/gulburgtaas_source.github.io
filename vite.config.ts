import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3373,
    host: true,
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})