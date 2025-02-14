import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { remarkReadingTime } from "./src/utils/readTime.ts";
import compressor from "astro-compressor";
import minify from "@playform/compress";

export default defineConfig({
  site: "https://www.littlesquatch.blog/",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        themes: {
          light: "github-light",
          dark: "aurora-x",
        },
        wrap: true,
      },
      drafts: true,
    }),
    icon({
      include: {
        solar: [
          "gallery-bold-duotone",
          "tag-bold-duotone",
          "info-square-bold-duotone",
          "chat-line-bold-duotone",
          "hamburger-menu-line-duotone",
          "close-circle-bold-duotone",
          "moon-stars-bold-duotone",
          "sun-2-bold-duotone",
          "plain-3-bold",
          "notebook-bookmark-bold-duotone",
          "round-arrow-up-bold-duotone",
          "arrow-right-up-bold-duotone",
          "arrow-left-bold-duotone",
          "hashtag-bold-duotone",
          "copy-bold-duotone",
          "check-square-bold-duotone",
          "close-square-bold-duotone",
          "home-bold-duotone",
          "album-line-duotone"
        ],
      },
    }),
    minify({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: false,
      SVG: true,
    }),
    sitemap(),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
});
