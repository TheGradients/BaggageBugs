import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://baggagebugs-1.onrender.com/api/v1",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [tailwindcss()],
});
