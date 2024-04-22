/* empty css                                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_CsVxrLK6.mjs';
import 'kleur/colors';
import { j as getTags, s as sluglify, a as $$BaseLayout, k as getPostByTag, g as getPosts } from './__By1NXklS.mjs';
import { $ as $$TitlePage, a as $$ListPosts, b as $$ListCategories } from './_page__DVvt-7nt.mjs';
import 'clsx';
import 'reading-time';

const $$Astro$2 = createAstro("https://www.littlesquatch.blog/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const tags = await getTags();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tags" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": "Tags" })} ${maybeRenderHead()}<div class="flex justify-center flex-wrap gap-4"> ${tags.map((tag) => renderTemplate`<a${addAttribute(sluglify(`/tags/${tag}`), "href")} class="inline-block bg-slate-200 dark:bg-slate-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
#${tag} </a>`)} </div> ` })}`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/tags/index.astro", void 0);

const $$file$2 = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/tags/index.astro";
const $$url$2 = "/tags";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://www.littlesquatch.blog/");
async function getStaticPaths() {
  const tags = await getTags();
  return tags.map((tag) => ({
    params: {
      tag: sluglify(tag.toLowerCase())
    },
    props: { tag }
  }));
}
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { tag } = Astro2.props;
  const posts = await getPostByTag(tag);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tag.charAt(0).toUpperCase() + tag.slice(1) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": tag.charAt(0).toUpperCase() + tag.slice(1) })} ${renderComponent($$result2, "ListPosts", $$ListPosts, { "posts": posts })} ` })}`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/tags/[...tag]/index.astro", void 0);

const $$file$1 = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/tags/[...tag]/index.astro";
const $$url$1 = "/tags/[...tag]";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	getStaticPaths,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://www.littlesquatch.blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const MAX_POSTS = 5;
  const posts = await getPosts(MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "LittleSquatch.blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": "Welcome to LittleSquatch.blog" })} ${renderComponent($$result2, "ListCategories", $$ListCategories, {})} ${maybeRenderHead()}<div> <h2 class="text-lg font-medium tracking-wide text-end">Latest Posts</h2> ${renderComponent($$result2, "ListPosts", $$ListPosts, { "FirstBig": true, "posts": posts })} </div> ` })} `;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/index.astro", void 0);

const $$file = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
