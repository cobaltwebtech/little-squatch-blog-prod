import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Dt1huVf9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_VHkPSD2U.mjs');
const _page1 = () => import('./chunks/about-little-squatch_BrK9ZfYz.mjs');
const _page2 = () => import('./chunks/_page__DKF5KZM9.mjs');
const _page3 = () => import('./chunks/contact_BoXgz6QJ.mjs');
const _page4 = () => import('./chunks/gallery_CvePLAZK.mjs');
const _page5 = () => import('./chunks/_.._EgVEfsoM.mjs');
const _page6 = () => import('./chunks/_.._BPljDIa4.mjs');
const _page7 = () => import('./chunks/rss_CCfUTLlZ.mjs');
const _page8 = () => import('./chunks/success_CHJTSI-t.mjs');
const _page9 = () => import('./chunks/index_Sw-E4oW6.mjs');
const _page10 = () => import('./chunks/index_1mlE3bFh.mjs');
const _page11 = () => import('./chunks/index_DPjtvvsc.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-little-squatch.astro", _page1],
    ["src/pages/category/[category]/[page].astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/gallery.astro", _page4],
    ["src/pages/gallery/[...id].astro", _page5],
    ["src/pages/post/[...slug].astro", _page6],
    ["src/pages/rss.xml.ts", _page7],
    ["src/pages/success.astro", _page8],
    ["src/pages/tags/index.astro", _page9],
    ["src/pages/tags/[...tag]/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "d33294e0-da54-4f4f-9eb4-f7e2a8b27877"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
