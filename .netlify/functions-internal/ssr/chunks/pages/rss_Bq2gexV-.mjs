import rss from '@astrojs/rss';
import { b as getCollection, f as siteConfig } from './__By1NXklS.mjs';

async function get() {
  const posts = await getCollection("blog");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://www.littlesquatch.blog/",
    items: posts.map((post) => ({
      ...post.data,
      link: `post/${post.slug}/`
    }))
  });
}

export { get };
