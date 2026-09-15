import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { c as renderComponent, g as renderTemplate } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$IndustryPageLayout } from "./IndustryPageLayout_C6h9r5a0.mjs";
//#region src/pages/industries/infrastructure.astro
var infrastructure_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Infrastructure,
	file: () => $$file,
	url: () => $$url
});
var $$Infrastructure = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "IndustryPageLayout", $$IndustryPageLayout, {
		"title": "Infrastructure & Construction Monitoring | InSpectiv Labs",
		"description": "Ensure the safety and longevity of critical infrastructure with millimeter-precise ground deformation monitoring for bridges, highways, and deep excavations.",
		"image": "/images/ind-infra.webp",
		"insarImage": "/images/infra.webp",
		"graphImage": "/images/deformation.webp",
		"hero": {
			headline: "Infrastructure & Construction",
			intro: "Protect critical infrastructure across its lifecycle. Monitor bridges, highways, and deep excavations with millimeter-scale precision."
		},
		"industrySlug": "infrastructure",
		"challenges": [
			{
				title: "Structural Settlement",
				description: "Bridges, highways, and rail corridors require continuous monitoring for unexpected settlement and subsidence."
			},
			{
				title: "Deep Excavation Risks",
				description: "Tunneling and deep metro excavations can destabilize surrounding ground, putting nearby structures in jeopardy."
			},
			{
				title: "Long-Term Structural Health",
				description: "Ensuring the structural health of mega-projects over decades is challenging without wide-area, continuous data."
			},
			{
				title: "Widespread Footprints",
				description: "Monitoring hundreds of kilometers of rail or highway networks is logistically impossible with traditional survey teams."
			}
		],
		"solutions": [
			{
				title: "Wide-Area Monitoring",
				description: "Monitor entire highway and rail corridors simultaneously using high-resolution satellite imagery."
			},
			{
				title: "Early Warning Systems",
				description: "Detect millimeter-level subsidence near tunneling and deep excavations before structural damage occurs."
			},
			{
				title: "Lifecycle Assessment",
				description: "Track the long-term structural health of critical infrastructure over years and decades using our baseline services."
			}
		],
		"benefits": [
			"Prevent Catastrophic Failures",
			"Reduce Survey Costs",
			"Ensure Project Longevity"
		]
	})}`;
}, "/home/argha/Desktop/startup/website/src/pages/industries/infrastructure.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/industries/infrastructure.astro";
var $$url = "/industries/infrastructure";
//#endregion
//#region \0virtual:astro:page:src/pages/industries/infrastructure@_@astro
var page = () => infrastructure_exports;
//#endregion
export { page };
