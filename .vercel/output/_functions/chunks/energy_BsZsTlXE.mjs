import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { c as renderComponent, g as renderTemplate } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$IndustryPageLayout } from "./IndustryPageLayout_KwgdKZt-.mjs";
//#region src/pages/industries/energy.astro
var energy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Energy,
	file: () => $$file,
	url: () => $$url
});
var $$Energy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "IndustryPageLayout", $$IndustryPageLayout, {
		"title": "Energy & Utility Asset Monitoring | InSpectiv Labs",
		"description": "Protect critical energy infrastructure and pipeline networks from ground subsidence and landslides using our advanced satellite radar monitoring platform.",
		"image": "/images/ind-energy.webp",
		"insarImage": "/images/energy_insar.webp",
		"graphImage": "/images/geotech_terrain_mesh.webp",
		"hero": {
			headline: "Oil, Gas & Energy",
			intro: "Monitor ground movement around energy assets. Detect subsidence early, monitor pipelines, and reduce operational risks."
		},
		"industrySlug": "energy",
		"challenges": [
			{
				title: "Pipeline Integrity",
				description: "Vast pipeline networks are vulnerable to ground movement, landslides, and subsidence which can lead to catastrophic leaks."
			},
			{
				title: "Well Pad Stability",
				description: "Extraction activities can induce local subsidence, affecting well pad stability and nearby infrastructure."
			},
			{
				title: "Environmental Risks",
				description: "Unmonitored ground instability can result in severe environmental contamination and operational shutdowns."
			},
			{
				title: "Asset Lifecycle Management",
				description: "Understanding ground dynamics is crucial for planning the lifecycle and decommissioning of large-scale energy assets."
			}
		],
		"solutions": [
			{
				title: "Network-Wide Pipeline Tracking",
				description: "Monitor thousands of kilometers of pipelines for early signs of ground movement or landslide activity."
			},
			{
				title: "Induced Subsidence Detection",
				description: "Track ground deformation around extraction sites and well pads to manage risks proactively."
			},
			{
				title: "Environmental Protection",
				description: "Utilize our continuous monitoring service to reduce environmental risks and ensure safe operational continuity."
			}
		],
		"benefits": [
			"Reduced Environmental Risk",
			"Improved Asset Integrity",
			"Proactive Leak Prevention"
		]
	})}`;
}, "/home/argha/Desktop/startup/website/src/pages/industries/energy.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/industries/energy.astro";
var $$url = "/industries/energy";
//#endregion
//#region \0virtual:astro:page:src/pages/industries/energy@_@astro
var page = () => energy_exports;
//#endregion
export { page };
