import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/aadhiyoga/', // CHANGE THIS to match your exact GitHub repository name
  plugins: [
    react(),
    tailwindcss(),
  ],
})
