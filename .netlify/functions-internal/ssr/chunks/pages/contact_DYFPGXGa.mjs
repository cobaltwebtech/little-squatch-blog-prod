/* empty css                                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_CsVxrLK6.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './__By1NXklS.mjs';
import { $ as $$TitlePage } from './_page__DVvt-7nt.mjs';

const $$Astro = createAstro("https://www.littlesquatch.blog/");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Me" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": "Contact Me" })} ${maybeRenderHead()}<div class="flex justify-center flex-wrap gap-4"> <div class="m-10 min-w-64 w-1/2"> <form data-netlify="true" netlify-honeypot name="contact" method="POST" action="/success"> <p class="netlify-hidden"> <label>
Don’t fill this out if you’re human: <input name="bot-field"> </label> </p> <input type="hidden" name="form-name" value="contact"> <label class="font-semibold" for="name">Name</label> <input class="w-full rounded-md border border-teal-500 bg-teal-50 dark:bg-teal-800 focus:bg-teal-100 dark:focus:bg-teal-700 my-6 py-3 px-6" id="name" type="text" name="name" required> <label class="font-semibold" for="email">Email</label> <input class="w-full rounded-md border border-teal-500 bg-teal-50 dark:bg-teal-800 focus:bg-teal-100 dark:focus:bg-teal-700 my-6 py-3 px-6" id="email" type="email" name="email" required> <label class="font-semibold" for="message">Message or questions below</label> <textarea class="w-full rounded-md border border-teal-500 bg-teal-50 dark:bg-teal-800 focus:bg-teal-100 dark:focus:bg-teal-700 my-6 py-3 px-6" id="message" wrap="soft" name="message" required></textarea> <button class="font-bold w-1/4 rounded-md border border-teal-500 bg-teal-50 dark:bg-teal-800 hover:bg-teal-500 dark:hover:bg-teal-900 my-6 py-3 px-6" type="submit">SUBMIT</button> </form> </div> </div> ` })}`;
}, "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/contact.astro", void 0);

const $$file = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
