import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { D as createAstro, c as renderComponent, g as renderTemplate, p as renderSlot, v as renderHead, y as addAttribute } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
/* empty css                 */
//#region src/layouts/AdminLayout.astro
createAstro("https://inspectivlabs.com");
var $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AdminLayout;
	const { title } = Astro.props;
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"></noscript>${renderHead($$result)}</head><body class="bg-[#000f2c] text-gray-200 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-100 font-sans"><div class="relative z-10">${renderSlot($$result, $$slots["default"])}</div></body></html>`;
}, "/home/argha/Desktop/startup/website/src/layouts/AdminLayout.astro", void 0);
//#endregion
//#region src/pages/admin/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
function getStaticPaths() {
	return [
		{ params: { slug: void 0 } },
		{ params: { slug: "inquiries" } },
		{ params: { slug: "insights" } },
		{ params: { slug: "case-studies" } }
	];
}
var $$Component = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Inspectiv Labs - Admin Dashboard" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminApp", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/admin/AdminApp.tsx",
		"client:component-export": "default"
	})}` })}`;
}, "/home/argha/Desktop/startup/website/src/pages/admin/[...slug].astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/admin/[...slug].astro";
var $$url = "/admin/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
