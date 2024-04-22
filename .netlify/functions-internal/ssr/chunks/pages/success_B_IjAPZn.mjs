/* empty css                                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_CsVxrLK6.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './__By1NXklS.mjs';
import { $ as $$TitlePage } from './_page__DVvt-7nt.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://www.littlesquatch.blog/");
const $$MessageCheck = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MessageCheck;
  return renderTemplate`${maybeRenderHead()}<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 13.5C2.79 13.5 1 15.29 1 17.5C1 18.25 1.21 18.96 1.58 19.56C2.27 20.72 3.54 21.5 5 21.5C6.46 21.5 7.73 20.72 8.42 19.56C8.79 18.96 9 18.25 9 17.5C9 15.29 7.21 13.5 5 13.5ZM6.97 17.17L4.84 19.14C4.7 19.27 4.51 19.34 4.33 19.34C4.14 19.34 3.95 19.27 3.8 19.12L2.81 18.13C2.52 17.84 2.52 17.36 2.81 17.07C3.1 16.78 3.58 16.78 3.87 17.07L4.35 17.55L5.95 16.07C6.25 15.79 6.73 15.81 7.01 16.11C7.29 16.41 7.27 16.89 6.97 17.17Z" fill="currentColor"></path> <path d="M17.25 2.42969H7.75C4.9 2.42969 3 4.32969 3 7.17969V11.6397C3 11.9897 3.36 12.2397 3.7 12.1497C4.12 12.0497 4.55 11.9997 5 11.9997C7.86 11.9997 10.22 14.3197 10.48 17.1297C10.5 17.4097 10.73 17.6297 11 17.6297H11.55L15.78 20.4497C16.4 20.8697 17.25 20.4097 17.25 19.6497V17.6297C18.67 17.6297 19.86 17.1497 20.69 16.3297C21.52 15.4897 22 14.2997 22 12.8797V7.17969C22 4.32969 20.1 2.42969 17.25 2.42969ZM15.83 10.8097H9.17C8.78 10.8097 8.46 10.4897 8.46 10.0997C8.46 9.69969 8.78 9.37969 9.17 9.37969H15.83C16.22 9.37969 16.54 9.69969 16.54 10.0997C16.54 10.4897 16.22 10.8097 15.83 10.8097Z" fill="currentColor"></path> </svg>`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/components/icons/Message-Check.astro", void 0);

const $$Astro = createAstro("https://www.littlesquatch.blog/");
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Message Received" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": "Message Received" })} ${maybeRenderHead()}<div class="w-1/2"> <div> ${renderComponent($$result2, "Shape", $$MessageCheck, {})} </div> <h2 class="text-2xl font-bold my-6">
Thanks for Contacting the Little Squatch
</h2> <p class="mb-6">
Bet you didn't know a Sasquatch can read? Well, this one does and I promise to read your message and get back to you if you asked me.
</p> <p class="mb-6 font-bold">
Little Squatch
</p> </div> ` })}`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/success.astro", void 0);

const $$file = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/success.astro";
const $$url = "/success";

export { $$Success as default, $$file as file, $$url as url };
