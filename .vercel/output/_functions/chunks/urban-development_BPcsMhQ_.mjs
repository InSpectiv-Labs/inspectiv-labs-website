import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { c as renderComponent, g as renderTemplate } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$IndustryPageLayout } from "./IndustryPageLayout_BfFyRxX3.mjs";
//#region src/pages/industries/urban-development.astro
var urban_development_exports = /* @__PURE__ */ __exportAll({
	default: () => $$UrbanDevelopment,
	file: () => $$file,
	url: () => $$url
});
var $$UrbanDevelopment = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "IndustryPageLayout", $$IndustryPageLayout, {
		"title": "Urban Development & Subway Monitoring | InSpectiv Labs",
		"description": "Track ground settlement and structural health around deep excavations, tunneling projects, and dense urban developments with high-resolution InSAR analytics.",
		"image": "/images/ind-urban.webp",
		"insarImage": "/images/urban_insar.webp",
		"graphImage": "/images/satellite_network_mesh.webp",
		"hero": {
			headline: "Urban Development & Smart Cities",
			intro: "Build resilient cities with continuous ground intelligence. Monitor land subsidence, support zoning, and protect urban utilities."
		},
		"industrySlug": "urban-development",
		"challenges": [
			{
				title: "Urban Subsidence",
				description: "Rapid urbanization and groundwater extraction are causing significant land subsidence in major metropolitan areas."
			},
			{
				title: "Utility Disruption",
				description: "Ground movement threatens underground utilities, metro systems, and essential city services."
			},
			{
				title: "Zoning & Compliance",
				description: "City planners need accurate geological stability data to inform safe zoning and enforce building compliance."
			},
			{
				title: "Climate Resilience",
				description: "Building resilient cities requires continuous ground intelligence to mitigate the impacts of flooding and sea-level rise."
			}
		],
		"solutions": [
			{
				title: "City-Wide Monitoring",
				description: "Monitor land subsidence across entire metropolitan areas with millimeter-level accuracy to inform urban planning."
			},
			{
				title: "Proactive Infrastructure Management",
				description: "Detect risks near metros, utilities, and high-rise buildings before they lead to structural damage or service disruption."
			},
			{
				title: "Strategic Zoning Intelligence",
				description: "Provide city planners with historical and ongoing ground stability data to support intelligent zoning and compliance."
			}
		],
		"benefits": [
			"Resilient City Planning",
			"Protected Urban Utilities",
			"Data-Driven Compliance"
		]
	})}`;
}, "/home/argha/Desktop/startup/website/src/pages/industries/urban-development.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/industries/urban-development.astro";
var $$url = "/industries/urban-development";
//#endregion
//#region \0virtual:astro:page:src/pages/industries/urban-development@_@astro
var page = () => urban_development_exports;
//#endregion
export { page };
