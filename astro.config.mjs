import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
	site: 'https://www.littlesquatch.blog/',
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/preline/preline.js",
	],	
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight',
				  },
				wrap: true
			},
			drafts: true
		}),
		icon({
			include: {
				solar: ['gallery-bold-duotone', 'tag-bold-duotone', 'info-square-bold-duotone', 'chat-line-bold-duotone','hamburger-menu-line-duotone','close-circle-bold-duotone','moon-stars-bold-duotone','sun-2-bold-duotone','plain-3-bold'],
			},
		}),
		sitemap(),
		tailwind()
	]
})
