import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    host: '0.0.0.0',
    server: {
      allowedHosts:['pan.yuan36.xyz'],
  },
  plugins: [
      vue(),
      tailwindcss()],
})
