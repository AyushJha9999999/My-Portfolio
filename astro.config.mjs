// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://AyushJha9999999.github.io",
  base: "/My-Portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
