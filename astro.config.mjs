import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import minify from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import icon from "astro-icon";

export default defineConfig({
	site: "https://www.littlesquatch.blog",
	output: "static",
	prefetch: {
		prefetchAll: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: netlify({
		imageCDN: false,
	}),
	image: {
		domains: ["res.cloudinary.com"],
		layout: "constrained",
		objectFit: "cover",
		objectPosition: "center",
		responsiveStyles: true,
	},
	markdown: {
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
		icon(),
		sitemap({
			filter: (page) => {
				const url = new URL(page);
				if (url.pathname.includes("/success")) return false;
				return true;
			},
		}),
		minify({
			CSS: false,
			HTML: true,
			Image: false,
			JavaScript: false,
			SVG: true,
		}),
		compressor({
			gzip: false,
			brotli: true,
		}),
	],
});
