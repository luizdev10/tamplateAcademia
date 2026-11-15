import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Em GitHub Pages use VITE_BASE=/nome-do-repositorio/ (padrão: raiz)
  base: process.env.VITE_BASE || '/',
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
})