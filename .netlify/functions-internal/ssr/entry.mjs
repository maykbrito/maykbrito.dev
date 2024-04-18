import { renderers } from './renderers.mjs';
import { manifest } from './manifest_IRLgUxND.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_EkSTHXvS.mjs');
const _page1 = () => import('./chunks/fetch-youtube_cYvDkvcT.mjs');
const _page2 = () => import('./chunks/astro-social-share-links-de-compartilhamento-de-artigos_pWJ6frvL.mjs');
const _page3 = () => import('./chunks/astro-viewtransition-island-component-react-svelte-vue_Fc2_ZZsz.mjs');
const _page4 = () => import('./chunks/como-criar-um-bot-o-de-ler-mais-com-svelte_S5FL5ko1.mjs');
const _page5 = () => import('./chunks/notion-markdown-playground_HtXZQe2E.mjs');
const _page6 = () => import('./chunks/roadmap-de-programa-o-2024_l96MR7Oe.mjs');
const _page7 = () => import('./chunks/blog_Xh6LAdbJ.mjs');
const _page8 = () => import('./chunks/setup_DnE6TUP0.mjs');
const _page9 = () => import('./chunks/index_zRDfP-2w.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/fetch-youtube.ts", _page1],
    ["src/pages/blog/astro-social-share-links-de-compartilhamento-de-artigos.mdx", _page2],
    ["src/pages/blog/astro-viewtransition-island-component-react-svelte-vue.mdx", _page3],
    ["src/pages/blog/como-criar-um-bot-o-de-ler-mais-com-svelte.mdx", _page4],
    ["src/pages/blog/notion-markdown-playground.mdx", _page5],
    ["src/pages/blog/roadmap-de-programa-o-2024.mdx", _page6],
    ["src/pages/blog.astro", _page7],
    ["src/pages/setup.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0725ac91-a6e5-4a55-b436-66c987c9a65c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
