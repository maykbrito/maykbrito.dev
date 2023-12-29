import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://maykbrito.dev',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx(), svelte()]
});