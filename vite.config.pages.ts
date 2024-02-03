import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "pages",
  },
  base: "/react-resizer/",
  plugins: [react()],
})
