import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  site: 'https://maykbrito.dev',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    svelte(),
  ],
  output: 'static',
})
