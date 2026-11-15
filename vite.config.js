import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// No build, o site é servido em https://<usuario>.github.io/<repositorio>/
const REPO = '/tamplateAcademia/'

export default defineConfig(({ command }) => ({
  // VITE_BASE permite sobrescrever (ex.: domínio próprio usa '/')
  base: process.env.VITE_BASE || (command === 'build' ? REPO : '/'),
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    tailwindcss(), // O Tailwind v4 já cuida de carregar os plugins que estão no CSS
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify:"esbuild",
    minify:"esbuild"
  },
  define: {
    'process.env': {} 
  }
}))
