import { n as __exportAll } from "./rolldown-runtime_Bl3dcgcQ.mjs";
import { _ as maybeRenderHead, c as renderComponent, g as renderTemplate } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$BaseLayout } from "./BaseLayout_CZewrqhW.mjs";
//#region src/pages/services/historical-analysis.astro
var historical_analysis_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HistoricalAnalysis,
	file: () => $$file,
	url: () => $$url
});
var $$HistoricalAnalysis = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Historical Ground Deformation Analysis | InSpectiv Labs",
		"description": "Analyze years of historical InSAR data to identify long-term settlement trends and ground risks before breaking ground on new infrastructure projects."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20 bg-[#000f2c] text-white text-center"><div class="max-w-[1000px] mx-auto px-4"><h1 class="text-3xl md:text-4xl md:text-5xl font-light mb-6 tracking-wide">Historical Analysis</h1><p class="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">Establish pre-construction baselines and validate historical asset stability using archived satellite data.</p></div></section><section class="py-12 md:py-16 lg:py-24 bg-gray-50 min-h-[70vh] flex items-center"><div class="max-w-[90vw] mx-auto px-6"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="flex flex-col"><h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000f2c] mb-6">Historical Analysis</h2><p class="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-10">Understand how ground movement has evolved over time through satellite-based InSAR analysis. We analyse historical satellite data to identify deformation patterns, movement trends and areas of persistent change, providing a baseline for assessing current ground conditions and potential risks.</p><h3 class="text-lg md:text-xl font-semibold text-[#1d4ed8] mb-6">Key Benefits</h3><ul class="space-y-5"><li class="flex items-start gap-3"><i class="bx bx-check-circle text-[#1d4ed8] text-lg md:text-xl mt-1 shrink-0"></i><span class="text-gray-700 font-light mt-0.5">Understand historical movement and how deformation has evolved over time.</span></li><li class="flex items-start gap-3"><i class="bx bx-check-circle text-[#1d4ed8] text-lg md:text-xl mt-1 shrink-0"></i><span class="text-gray-700 font-light mt-0.5">Identify deformation hotspots and areas showing persistent or significant movement.</span></li><li class="flex items-start gap-3"><i class="bx bx-check-circle text-[#1d4ed8] text-lg md:text-xl mt-1 shrink-0"></i><span class="text-gray-700 font-light mt-0.5">Establish a baseline of ground behaviour for future assessment and monitoring.</span></li><li class="flex items-start gap-3"><i class="bx bx-check-circle text-[#1d4ed8] text-lg md:text-xl mt-1 shrink-0"></i><span class="text-gray-700 font-light mt-0.5">Assess potential ground-related risks using historical evidence.</span></li><li class="flex items-start gap-3"><i class="bx bx-check-circle text-[#1d4ed8] text-lg md:text-xl mt-1 shrink-0"></i><span class="text-gray-700 font-light mt-0.5">Support informed decision-making for investigation, planning and risk assessment.</span></li></ul></div><div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group"><div class="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div><img loading="lazy" src="/images/srv-history.webp" alt="Historical Analysis InSAR Data" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"></div></div></div></section>` })}`;
}, "/home/argha/Desktop/startup/website/src/pages/services/historical-analysis.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/services/historical-analysis.astro";
var $$url = "/services/historical-analysis";
//#endregion
//#region \0virtual:astro:page:src/pages/services/historical-analysis@_@astro
var page = () => historical_analysis_exports;
//#endregion
export { page };
