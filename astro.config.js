import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
// import partytown from '@astrojs/partytown'
// import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap"
// import starlight from "@astrojs/starlight"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [
    // starlight({
    //   title: "My delightful docs site",
    //   locales: {
    //     // English docs in `src/content/docs/en/`
    //     en: {
    //       label: "English",
    //     },
    //   },
    //   customCss: [
    //     // Relative path to your @font-face CSS file.
    //     "./src/styles/index.css",
    //   ],
    // }),
    react(),
    tailwind(),
    // partytown(),
    // prefetch(),
    sitemap(),
    mdx(),
  ],
})
