import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/padel-rafael/", // ⚠️ HARUS sama persis dengan nama repository
  plugins: [
    react(),
    tailwindcss(),
  ],
});
