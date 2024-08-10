import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://marceladoradomunoz.github.io/desafio_01_pizzeria/",
})
