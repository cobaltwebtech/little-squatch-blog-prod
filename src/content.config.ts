import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { cldAssetsLoader } from "astro-cloudinary/loaders";
import categoriesData from "@/data/categories.json";

const categories = categoriesData as unknown as readonly [string, ...string[]];

const blog = defineCollection({
	// Load Markdown and MDX files
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: z.string(),
			category: z.enum(categories),
			tags: z.array(z.string()),
			draft: z.boolean().default(false),
		}),
});

const albums = defineCollection({
	loader: glob({ base: "./src/content/albums", pattern: "**/*.{json,yml}" }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			cover: z.string(),
			folder: z.string(),
		}),
});

const albumImages = defineCollection({
	// Load Cloudinary assets for album images from parent folder
	// The exact folder is specified in the album's content data in /src/content/albums
	loader: cldAssetsLoader({
		limit: 1000,
		folder: "littlesquatchblog/albums",
	}),
});

export const collections = {
	blog,
	albums,
	albumImages,
};
