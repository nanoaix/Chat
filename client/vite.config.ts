import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import eslint from "vite-plugin-eslint"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    react(),
    eslint({
      failOnError: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
