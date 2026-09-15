import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as maybeRenderHead, c as renderComponent, g as renderTemplate, y as addAttribute } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$BaseLayout } from "./BaseLayout_BI8KNrFp.mjs";
import { t as supabase } from "./supabase_CRd9FTIo.mjs";
//#region src/pages/case-studies/index.astro
var case_studies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	let caseStudies = [];
	try {
		const { data } = await supabase.from("case_studies").select("*").order("created_at", { ascending: false });
		if (data) caseStudies = data;
	} catch (e) {
		console.error("Failed to fetch case studies");
	}
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Case Studies | InSpectiv Labs",
		"description": "Explore how InSpectiv Labs' satellite monitoring technology delivers predictive insights and real-world impact across industries."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative pt-32 lg:pt-48 pb-16 lg:pb-24 bg-[#000f2c] text-white overflow-hidden"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500 rounded-[100%] blur-[120px] opacity-10 pointer-events-none"></div><div class="relative z-10 max-w-[90vw] mx-auto px-6 text-center"><h1 class="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide">Case Studies</h1><p class="text-lg md:text-xl text-cyan-400 font-light max-w-2xl mx-auto">Proven impact in the field. See how our risk intelligence platform protects critical assets worldwide.</p></div></section><section class="py-16 md:py-24 bg-slate-50 min-h-[50vh]"><div class="max-w-[90vw] mx-auto px-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">${caseStudies.map((study) => renderTemplate`<div class="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"><div class="h-48 overflow-hidden relative"><img loading="lazy"${addAttribute(study.cardImage_url || study.cardImage, "src")}${addAttribute(study.cardTitle, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"></div><div class="p-8 flex flex-col flex-grow"><h4 class="text-lg md:text-xl font-bold text-[#000f2c] mb-2 group-hover:text-[#1d4ed8] transition-colors">${study.cardTitle}</h4>${study.cardSubtitle && renderTemplate`<p class="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">${study.cardSubtitle}</p>`}<p class="text-gray-600 text-sm font-light leading-relaxed mb-6 flex-grow">${study.cardDescription}</p><a${addAttribute(study.slug ? `/case-studies/${study.slug}` : "#!", "href")} class="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] uppercase tracking-wider group-hover:translate-x-2 transition-transform mt-auto w-max">Read Full Case Study <i class="bx bx-right-arrow-alt text-lg md:text-xl"></i></a></div></div>`)}</div></div></section>` })}`;
}, "/home/argha/Desktop/startup/website/src/pages/case-studies/index.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/case-studies/index.astro";
var $$url = "/case-studies";
//#endregion
//#region \0virtual:astro:page:src/pages/case-studies/index@_@astro
var page = () => case_studies_exports;
//#endregion
export { page };
