import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" keeps asset URLs relative, so the build works on the custom domain
// (aiaccesshub.online) and under the GitHub Pages path (/aiaccesshub/).
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
