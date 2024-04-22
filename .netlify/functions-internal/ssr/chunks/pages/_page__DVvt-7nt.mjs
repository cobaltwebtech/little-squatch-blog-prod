/* empty css                                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, p as renderSlot, i as renderComponent, h as addAttribute } from '../astro_CsVxrLK6.mjs';
import 'kleur/colors';
import { $ as $$Image, c as cn, s as sluglify, d as getCategories, e as $$ArrowLeft, g as getPosts, u as unsluglify, f as siteConfig, a as $$BaseLayout } from './__By1NXklS.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$FormattedDate } from './__CReHM-k0.mjs';
import 'clsx';
import 'reading-time';

const $$Astro$a = createAstro("https://www.littlesquatch.blog/");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-2xl sm:text-4xl font-bold capitalize"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/Title.astro", void 0);

const $$Astro$9 = createAstro("https://www.littlesquatch.blog/");
const $$CameraIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CameraIcon;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="40"> <path d="M21.6 16.1c0 1.2-1 2.2-2.2 2.2H9.7c-1.2 0-2.2-1-2.2-2.2v-2.7c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2zm39.1-.2q0 1-1.2 1.2h-5.2q-1 0-1.2-1.2v-1.4q0-1 1.2-1.2h5.2q1 0 1.2 1.2zM64 50.3c0 3-2.4 5.4-5.4 5.4H5.4c-3 0-5.4-2.4-5.4-5.4v-1.6h64z" fill="#212528"></path> <path d="M0 20.1c0-3 2.4-5.4 5.4-5.4h53.1c3 0 5.4 2.4 5.4 5.4v1.6H0z" fill="#51575b"></path> <path fill="#3e4347" d="M0 21.5h64v28.3H0z"></path> <path d="M54.7 18H22.6l3.2-10.8a5 5 0 0 1 2.4-1.8 52 52 0 0 1 20.8 0 5 5 0 0 1 2.4 1.8z" fill="#51575b"></path> <path d="M53.1 29.6h-29L27 15c.2-.8 1.5-2.1 2.2-2.4a33 33 0 0 1 18.8 0c.7.3 1.9 1.6 2.2 2.4z" fill="#3e4347"></path> <path d="M60.6 37.6a22 22 0 1 1-44 0 22 22 0 0 1 44 0" fill="#788287"></path> <path d="M58.2 37.6a19.6 19.6 0 1 1-39.3 0 19.6 19.6 0 0 1 39.3 0" fill="#212528"></path> <circle cx="38.6" cy="37.6" r="15.9" fill="#3e4347"></circle> <circle cx="38.6" cy="37.6" r="8.6" fill="#212528"></circle> <g fill="#f5f5f5"> <path d="M50.3 30.9a5 5 0 1 1-4.9-4.9 5 5 0 0 1 4.9 4.9" opacity=".5"></path> <circle cx="35.6" cy="40.7" r="3.1" opacity=".5"></circle> <circle cx="30.1" cy="46.2" r="1.9" opacity=".5"></circle> </g> <path d="M15 45.3c0 1.2-1 2.2-2.2 2.2H3.6q-2-.2-2.2-2.2V25.9c0-1.2 1-2.2 2.2-2.2h9.2c1.2 0 2.2 1 2.2 2.2z" fill="#636c72"></path> <circle cx="10.1" cy="18.6" r="3.2" fill="#212528"></circle> </svg>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/icons/CameraIcon.astro", void 0);

const $$Astro$8 = createAstro("https://www.littlesquatch.blog/");
const $$TitlePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TitlePage;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-start items-center gap-2 title"> ${renderComponent($$result, "Shape", $$CameraIcon, {})} ${renderComponent($$result, "Title", $$Title, {}, { "default": ($$result2) => renderTemplate`${title}` })} </div>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/TitlePage.astro", void 0);

const $$Astro$7 = createAstro("https://www.littlesquatch.blog/");
const $$ArrowUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArrowUp;
  const { width = 24, height = 24 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg class="feather feather-arrow-up-right" fill="none"${addAttribute(height, "height")} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24"${addAttribute(width, "width")} xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/icons/ArrowUp.astro", void 0);

const $$Astro$6 = createAstro("https://www.littlesquatch.blog/");
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PostCard;
  const {
    id,
    data: { title, description, pubDate, heroImage, category },
    readTime,
    slug
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="grid grid-rows-[300px_auto] md:grid-rows-[300px_220px] min-h-full group"> <a class="relative overflow-hidden"${addAttribute(`/post/${slug}/`, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "height": 200, "format": "avif", "class": "h-full min-w-full object-cover hover:scale-[101%] transition-all duration-200 rounded-[2px]", "alt": `Thumbnail image of ${title}` })} <div class="z-30 absolute bottom-0 w-full h-20"> <div class="-z-10 absolute bottom-0 glass w-full min-h-full"></div> <div class="flex items-center justify-between gap-x-1 text-white px-6 py-4"> <div class="flex flex-col gap-1 items-center justify-center"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })} <span class="text-sm"> ${readTime}</span> </div> <span class="pb-4">${category}</span> </div> </div> </a> <div class="flex justify-between flex-col gap-4 md:gap-0 py-6 pl-1"> <div class="flex flex-col gap-3"> <div class="flex flex-col gap-2"> <a class="text-2xl font-semibold -tracking-wider"${addAttribute(`/post/${slug}/`, "href")}> ${title} </a> </div> <p class="overflow-hidden line-clamp-3 text-gray-700 dark:text-white mb-5 font-[400] md:pr-[15%]"> ${description} </p> </div> <footer class="flex justify-between items-center"> <a${addAttribute(`/post/${slug}/`, "href")} class="flex justify-center items-center dark:text-white rounded-full hover:translate-x-1 transition-transform duration-150 ease-in-out font-semibold gap-1 group"${addAttribute(`go to ${title}`, "aria-label")}>
Read Post <span class="mt-[1px] group-hover:rotate-45 transition-transform duration-250 ease-in-out">${renderComponent($$result, "ArrowUp", $$ArrowUp, { "width": "18", "height": "18" })}</span> </a> </footer> </div> </article> `;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/PostCard.astro", void 0);

const $$Astro$5 = createAstro("https://www.littlesquatch.blog/");
const $$ListPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ListPosts;
  const { posts, FirstBig = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(
    `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-3`,
    FirstBig && `md:[&>*:first-child]:col-span-2`
  ), "class")}> ${posts.map(async (post) => {
    const { remarkPluginFrontmatter } = await post.render();
    return renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "id": post.id, "data": post.data, "slug": post.slug, "readTime": remarkPluginFrontmatter.minutesRead })}`;
  })} </section>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/ListPosts.astro", void 0);

const $$Astro$4 = createAstro("https://www.littlesquatch.blog/");
const $$Category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Category;
  const { name = "View All", activeCategory } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const unsluglifyNameCategory = sluglify(name.toLowerCase());
  const isActive = activeCategory?.toLocaleLowerCase() === unsluglifyNameCategory || currentPath === "/" && name === "View All";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(name === "View All" ? "/" : sluglify(`/category/${unsluglifyNameCategory}/1`), "href")}${addAttribute(cn(
    `text-gray-600 dark:text-gray-300  pb-2.5 first-letter:uppercase font-medium hover:text-gray-800 border-b-2 border-opacity-0 dark:border-opacity-0 border-black dark:border-white dark:hover:border-white hover:border-opacity-100 transition-colors duration-150 ease-linear  `,
    isActive && `border-black border-b-2 text-black z-10  dark:border-white dark:text-white dark:border-opacity-100 border-opacity-100`
  ), "class")}> ${name} </a>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/Category.astro", void 0);

const $$Astro$3 = createAstro("https://www.littlesquatch.blog/");
const $$ListCategories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ListCategories;
  const categories = await getCategories();
  const { activeCategory } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-wrap min-w-full gap-5"> ${renderComponent($$result, "Category", $$Category, {})} ${categories.map((category) => renderTemplate`${renderComponent($$result, "Category", $$Category, { "name": category, "activeCategory": activeCategory })}`)} <div class="hidden sm:block absolute w-full bottom-0 border-b-2 -z-40 dark:border-gray-600"></div> </div>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/ListCategories.astro", void 0);

const $$Astro$2 = createAstro("https://www.littlesquatch.blog/");
const $$ArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  const { width = 24, height = 24 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right-filled"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" stroke-width="0" fill="currentColor"></path> </svg>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/icons/ArrowRight.astro", void 0);

const $$Astro$1 = createAstro("https://www.littlesquatch.blog/");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-5 md:gap-1 justify-around md:justify-end"> <!-- Previous Button --> ${page.start > 0 && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="flex items-center justify-center px-8 md:px-4 h-10 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> ${renderComponent($$result, "ArrowLeft", $$ArrowLeft, {})} </a>`} <!-- Next Button --> ${page.currentPage < page.lastPage && renderTemplate`<a${addAttribute(page.url.next, "href")} class="flex items-center justify-center px-8 md:px-4 h-10 ml-3 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> ${renderComponent($$result, "ArrowRight", $$ArrowRight, {})} </a>`} </div>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/Pagination.astro", void 0);

const $$Astro = createAstro("https://www.littlesquatch.blog/");
async function getStaticPaths({ paginate }) {
  const categories = await getCategories();
  const allPosts = await getPosts();
  return categories.flatMap((category) => {
    const unsluglifyNameCategory = unsluglify(category.toLowerCase());
    const filteredPosts = allPosts.filter(
      (post) => post.data.category.toLowerCase() === unsluglifyNameCategory
    );
    return paginate(filteredPosts, {
      params: {
        category: sluglify(category.toLowerCase())
      },
      pageSize: siteConfig.paginationSize
    });
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const params = Astro2.params;
  const { page } = Astro2.props;
  const unsluglifyNameCategory = unsluglify(params.category.toLowerCase());
  const posts = page.data;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": unsluglifyNameCategory.charAt(0).toUpperCase() + unsluglifyNameCategory.slice(1) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": unsluglifyNameCategory })} ${renderComponent($$result2, "ListCategories", $$ListCategories, { "activeCategory": params.category })} ${renderComponent($$result2, "ListPosts", $$ListPosts, { "posts": posts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ` })}`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/category/[category]/[page].astro", void 0);

const $$file = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/category/[category]/[page].astro";
const $$url = "/category/[category]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$TitlePage as $, _page_ as _, $$ListPosts as a, $$ListCategories as b };
