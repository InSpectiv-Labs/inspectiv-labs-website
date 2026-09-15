import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as maybeRenderHead, c as renderComponent, g as renderTemplate, y as addAttribute } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$BaseLayout } from "./BaseLayout_D0Thhi29.mjs";
import { t as supabase } from "./supabase_CRd9FTIo.mjs";
//#region src/pages/insights/index.astro
var insights_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	let posts = [];
	try {
		const { data } = await supabase.from("insights").select("*").order("publishDate", { ascending: false });
		if (data) posts = data;
	} catch (e) {
		console.error("Error fetching insights", e);
	}
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Insights & Analysis | InSpectiv Labs Blog",
		"description": "Read the latest insights, research, and technical analysis on InSAR, ground deformation, and risk intelligence for mining, infrastructure, and insurance."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20 bg-[#000f2c] text-white text-center"><div class="max-w-[1000px] mx-auto px-4"><h1 class="text-3xl md:text-4xl md:text-5xl font-light mb-6 tracking-wide">Insights & Analysis</h1><p class="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">Strategic intelligence and technical trends across mining, geotech, insurance, and banking.</p></div></section><section class="py-12 md:py-16 lg:py-24 bg-gray-50 min-h-screen"><div class="max-w-[90vw] mx-auto px-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">${posts.map((post) => renderTemplate`<article class="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col group"><a${addAttribute(`/insights/${post.slug}`, "href")} class="block aspect-video overflow-hidden bg-gray-100 relative">${post.heroImage_url ? renderTemplate`<img${addAttribute(post.heroImage_url, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-[#000f2c]"><span class="text-gray-600 font-light">InSpectiv Labs</span></div>`}${post.industry && renderTemplate`<div class="absolute top-4 left-4 px-3 py-1 bg-[#1d4ed8] text-white text-[11px] font-bold uppercase tracking-wider">${post.industry}</div>`}</a><div class="p-8 flex flex-col flex-grow"><div class="flex items-center gap-2 text-xs text-gray-500 mb-3 font-semibold tracking-wide">${post.readTime && renderTemplate`<span>${post.readTime}</span>`}</div><h2 class="text-lg md:text-xl font-semibold text-[#000f2c] mb-4 leading-snug group-hover:text-[#1d4ed8] transition-colors"><a${addAttribute(`/insights/${post.slug}`, "href")}>${post.title}</a></h2><p class="text-gray-600 text-sm font-light leading-relaxed mb-8 flex-grow">${post.description}</p><a${addAttribute(`/insights/${post.slug}`, "href")} class="mt-auto text-[#1d4ed8] text-xs font-bold uppercase tracking-wider hover:text-[#000f2c] transition-colors flex items-center gap-1">Read Article <span class="text-base md:text-lg leading-none">›</span></a></div></article>`)}</div>${posts.length > 9 && renderTemplate`<div class="mt-20 text-center"><button class="px-8 py-3 border border-gray-300 text-gray-600 text-sm uppercase tracking-wider font-semibold hover:bg-gray-100 transition-colors">Load More Articles</button></div>`}</div></section>` })}`;
}, "/home/argha/Desktop/startup/website/src/pages/insights/index.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/insights/index.astro";
var $$url = "/insights";
//#endregion
//#region \0virtual:astro:page:src/pages/insights/index@_@astro
var page = () => insights_exports;
//#endregion
export { page };
