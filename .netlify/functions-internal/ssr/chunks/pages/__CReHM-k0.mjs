/* empty css                                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as Fragment, p as renderSlot, s as spreadAttributes, t as defineScriptVars } from '../astro_CsVxrLK6.mjs';
import 'kleur/colors';
import { s as sluglify, $ as $$Image, a as $$BaseLayout, c as cn, g as getPosts, b as getCollection } from './__By1NXklS.mjs';
import 'clsx';
import 'reading-time';
import '@astrojs/internal-helpers/path';

const $$Astro$b = createAstro("https://www.littlesquatch.blog/");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time class="text-sm font-bold text-opacity-60"${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/FormattedDate.astro", void 0);

const $$Astro$a = createAstro("https://www.littlesquatch.blog/");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(sluglify(`/tags/${tag.toLowerCase()}`), "href")}${addAttribute(tag, "aria-label")}> <span class="bg-indigo-600 font-semibold text-white dark:bg-indigo-900 dark:text-white shadow text-sm w-fit px-2 py-1 md:px-5 md:py-2 rounded-full"> ${tag ?? "Blog Tag"} </span> </a>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/Tag.astro", void 0);

const $$Astro$9 = createAstro("https://www.littlesquatch.blog/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { data, readTime, headings, id } = Astro2.props;
  const { title, description, pubDate, heroImage, tags } = data;
  const articleDate = pubDate.toISOString();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "image": heroImage, "articleDate": articleDate }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="min-w-full md:py-4 sm:max-w-none md:max-w-none"> <header class="mb-3 flex flex-col justify-center items-center gap-6"> <div class="flex flex-col gap-2"> <div class="flex items-center justify-center gap-x-1"> <p class="text-center text-sm text-opacity-50">
Published ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate })} </p> <p class="text-center text-sm text-opacity-50 font-bold">
- ${readTime} </p> </div> <h1 class="text-center text-2xl sm:text-4xl md:text-6xl md:pb-2.5 font-semibold"> ${title} </h1> </div> <div class="flex flex-wrap justify-center items-center gap-2 gap-y-4 md:gap-5"> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": tag })}`)} </div> </header> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${heroImage && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": heroImage, "width": 1280, "height": 500, "format": "avif", "loading": "eager", "class": "rounded-md w-full max-h-[300px]  md:max-h-[500px] my-8 object-cover", "alt": `Banner hero image of ${title}` })}`}` })} <hr> <div> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })} `;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/layouts/BlogPost.astro", void 0);

const $$Astro$8 = createAstro("https://www.littlesquatch.blog/");
const $$CopyIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CopyIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path> <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path> </svg>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/icons/CopyIcon.astro", void 0);

const $$Astro$7 = createAstro("https://www.littlesquatch.blog/");
const $$CheckIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CheckIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/icons/CheckIcon.astro", void 0);

const $$Astro$6 = createAstro("https://www.littlesquatch.blog/");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<pre class="shiki shiki-themes relative bg-neutral-200/30 dark:shadow-2xl code"><button aria-label="copy-button" class="copy-button absolute  z-20 top-2 right-2  rounded-md transition-all ease-in max-w-full max-h-fit dark:text-gray-600 text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400">${renderComponent($$result, "CopyIcon", $$CopyIcon, {})}</button><span class="check-span absolute z-10 top-2 right-2  rounded-md transition-all ease-in opacity-0 text-green-600 dark:text-green-400 max-w-full max-h-fit ">${renderComponent($$result, "CheckIcon", $$CheckIcon, {})}</span>${renderSlot($$result, $$slots["default"])}</pre> `;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/mdx/Code.astro", void 0);

const $$Astro$5 = createAstro("https://www.littlesquatch.blog/");
const $$ListRelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ListRelatedPosts;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(`flex flex-col md:flex-row sm:justify-between gap-8`), "class")}> ${posts.length > 0 ? posts.map((post) => {
    return renderTemplate`<div class="flex flex-wrap gap-2"> <div class="min-h-full"> ${renderComponent($$result, "Image", $$Image, { "src": post.data.heroImage, "width": 200, "height": 200, "class": "w-16 h-16 object-cover rounded-full  ", "alt": `Thumbnail image of related post ${post.data.title}` })} </div> <header class="flex justify-center items-center"> <a class="font-medium  hover:underline"${addAttribute(`/post/${post.slug}/`, "href")}> ${post.data.title} </a> </header> </div>`;
  }) : renderTemplate`<span class="text-gray-500">There are no related posts yet. 😢</span>`} </section>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/ListRelatedPosts.astro", void 0);

const $$Astro$4 = createAstro("https://www.littlesquatch.blog/");
const $$TabletOfContentsHeading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TabletOfContentsHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col"> <a${addAttribute("#" + heading.slug, "href")}${addAttribute(cn(
    `text-xs text-center font-normal bg-slate-200 dark:bg-slate-800 dark:hover:bg-indigo-700 hover:bg-indigo-200 hover:text-white dark:hover:text-white py-2 px-4 dark:text-white rounded-full mb-2 first-letter:uppercase w-full line-clamp-2`
  ), "class")}> ${heading.text} </a> ${heading.subheadings.length > 0 && renderTemplate`<ul class="ml-3"> ${heading.subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/TabletOfContentsHeading.astro", void 0);

const $$Astro$3 = createAstro("https://www.littlesquatch.blog/");
const $$TableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const toc = buildToc(headings);
  function buildToc(headings2) {
    let toc2 = [];
    let parentHeadings = /* @__PURE__ */ new Map();
    headings2.forEach((h) => {
      let heading = { ...h, subheadings: [] };
      parentHeadings.set(heading.depth, heading);
      if (heading.depth === 1 || heading.depth === 2) {
        toc2.push(heading);
      } else {
        parentHeadings.get(heading.depth - 1).subheadings.push(heading);
      }
    });
    return toc2;
  }
  return renderTemplate`${maybeRenderHead()}<nav class="max-w-max dark:text-black"> <h1 class="font-bold mb-3 text-xl dark:text-white">Jump to Section</h1> <ul class="[text-wrap:balance] flex flex-col gap-1"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TableOfContentsHeading", $$TabletOfContentsHeading, { "heading": heading })}`)} </ul> </nav>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/TableOfContents.astro", void 0);

const $$Astro$2 = createAstro("https://www.littlesquatch.blog/");
const $$SButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SButton;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(props)} class="bg-purple-800 p-4 text-white rounded-full"> ${renderSlot($$result, $$slots["default"])} <!-- Be sure to add a \`<slot/>\` for child content! --> </button>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/mdx/SButton.astro", void 0);

const disqusConfig = {
  enabled: false,
  shortname: ""
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.littlesquatch.blog/");
const $$Disqus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Disqus;
  return renderTemplate(_a || (_a = __template(["", '<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20"> <div id="disqus_thread"></div> <script>(function(){', "\n		var d = document,\n			s = d.createElement('script')\n		s.src = 'https://' + shortname + '.disqus.com/embed.js'\n		s.setAttribute('data-timestamp', String(new Date()))\n		s.setAttribute('data-theme', localStorage.getItem('theme') ?? 'light') // Pass the string value directly\n		;(d.head || d.body).appendChild(s)\n\n		// document.addEventListener('theme-change', (e) => {\n		//   todo: reload disqus\n		// })\n	})();<\/script> </div>"])), maybeRenderHead(), defineScriptVars({ shortname: disqusConfig.shortname }));
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/Disqus.astro", void 0);

const $$Astro = createAstro("https://www.littlesquatch.blog/");
async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("blog");
  const post = Astro2.props;
  const MAX_POSTS = 3;
  const getRelatedPosts = (post2) => {
    const lowercaseTags = post2.data.tags.map((tag) => tag.toLowerCase());
    const relatedPosts2 = posts.filter(
      (p) => p.slug !== post2.slug && p.data.tags.some((t) => lowercaseTags.includes(t.toLowerCase()))
    );
    return relatedPosts2.slice(0, MAX_POSTS);
  };
  const relatedPosts = getRelatedPosts(post);
  const { Content, headings, remarkPluginFrontmatter } = await post.render();
  const disqusEnabled = disqusConfig.enabled;
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "id": post.id, "data": post.data, "headings": headings, "readTime": remarkPluginFrontmatter.minutesRead }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-[auto_15%] gap-10 mt-8"> <!-- post --> <article class="max-w-full w-full"> <div class="prose prose-slate dark:prose-invert mb-12 min-w-full"> ${renderComponent($$result2, "Content", Content, { "components": { pre: $$Code, SButton: $$SButton } })} </div> <!-- related posts --> <footer> <h2 class="font-bold text-lg dark:text-white mb-6">Related Posts</h2> ${renderComponent($$result2, "ListRelatedPosts", $$ListRelatedPosts, { "posts": relatedPosts })} </footer> </article> <!-- aside  --> <aside class="md:flex flex-col gap-8 hidden"> <div class="sticky top-24 self-start hidden md:block transition-all duration-200"> ${headings && headings.length > 0 && renderTemplate`${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings })}`} </div> </aside> </div> ${disqusEnabled }` })}`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/post/[...slug].astro", void 0);

const $$file = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/post/[...slug].astro";
const $$url = "/post/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormattedDate as $, ____slug_ as _ };
