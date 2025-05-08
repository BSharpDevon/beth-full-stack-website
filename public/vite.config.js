import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/beth-full-stack-website/', // your GitHub repo name
  plugins: [react()],
})
