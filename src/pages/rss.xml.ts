import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { siteConfig } from "@/lib/site-data";

export async function get() {
	const posts = await getCollection("blog");
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			...post.data,
			link: `post/${post.slug}/`,
		})),
	});
}
