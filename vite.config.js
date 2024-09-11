import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { qrcode } from "vite-plugin-qrcode";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  base: "/kAFe3Ra-W/",
  server: {
    server: { host: true },
    port: 5000,
  },
});
