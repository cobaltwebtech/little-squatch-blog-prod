/* empty css                                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_CsVxrLK6.mjs';
import 'kleur/colors';
import { b as getCollection, $ as $$Image, a as $$BaseLayout } from './__By1NXklS.mjs';
import '@astrojs/internal-helpers/path';

const $$Astro = createAstro("https://www.littlesquatch.blog/");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const albums = await getCollection("albums");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gallery" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> <h2 class="text-5xl font-bold">Photo Gallery</h2> <p class="text-xl my-4">A collection of my photos</p> </div> <section class="mx-auto container grid grid-cols-2 gap-8"> ${albums.map((item) => renderTemplate`<a${addAttribute(`/gallery/${item.id}`, "href")} class="group transition-all mb-4 block"> ${renderComponent($$result2, "Image", $$Image, { "src": item.data.cover, "alt": item.data.title, "format": "avif", "width": 720, "quality": "mid", "class:list": [
    "rounded-lg transition-all",
    "group-hover:shadow-lg group-hover:opacity-90"
  ] })} <div class="mt-4 text-center"> <strong class="font-normal">${item.data.title}</strong> <p class="text-xs text-slate-900 dark:text-slate-100">${item.data.description}</p> </div> </a>`)} </section> ` })}`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/gallery.astro", void 0);

const $$file = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/gallery.astro";
const $$url = "/gallery";

export { $$Gallery as default, $$file as file, $$url as url };
