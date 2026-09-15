import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { c as renderComponent, g as renderTemplate } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$IndustryPageLayout } from "./IndustryPageLayout_C6h9r5a0.mjs";
//#region src/pages/industries/mining.astro
var mining_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Mining,
	file: () => $$file,
	url: () => $$url
});
var $$Mining = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "IndustryPageLayout", $$IndustryPageLayout, {
		"title": "Mining & Tailings Dam Monitoring | InSpectiv Labs",
		"description": "Mitigate catastrophic risks with continuous InSAR monitoring for open-pit mines, tailings dams, and underground extraction operations to ensure site safety.",
		"image": "/images/ind-mining.webp",
		"insarImage": "/images/insar_mine.webp",
		"graphImage": "/images/time_series_analysis.webp",
		"hero": {
			headline: "Mining Operations",
			intro: "Zero-Infra safety intelligence for safer, more productive mines. Detect slope instability, monitor tailings dams, and support DGMS compliance."
		},
		"industrySlug": "mining",
		"challenges": [
			{
				title: "Slope Instability & Highwall Movement",
				description: "Detecting minute ground displacement early is critical to preventing catastrophic failures in open-pit environments."
			},
			{
				title: "Tailings Dam Integrity",
				description: "Continuous monitoring of tailings dams, dumps, and embankments is required to prevent failures and environmental disasters."
			},
			{
				title: "Unplanned Downtime",
				description: "Unexpected ground movement halts production and puts personnel at risk, drastically affecting overall mine productivity."
			},
			{
				title: "DGMS Compliance & Reporting",
				description: "Meeting stringent regulatory requirements demands continuous, verifiable data on ground stability across the entire footprint."
			}
		],
		"solutions": [
			{
				title: "Zero-Infra Intelligence",
				description: "Monitor slope stability and ground movement remotely using satellite radar, removing the need to dispatch survey teams into actively hazardous areas."
			},
			{
				title: "Comprehensive Embankment Tracking",
				description: "Deploy our continuous monitoring service to track structural changes across all tailings dams and embankments, identifying risks early."
			},
			{
				title: "Automated Compliance Support",
				description: "Access our advanced analytics platform to generate the verifiable, objective data required for DGMS and other regulatory reporting."
			}
		],
		"benefits": [
			"Improved Safety & Zero Staff Risk",
			"Reduced Unplanned Downtime",
			"Automated Compliance & Reporting"
		]
	})}`;
}, "/home/argha/Desktop/startup/website/src/pages/industries/mining.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/industries/mining.astro";
var $$url = "/industries/mining";
//#endregion
//#region \0virtual:astro:page:src/pages/industries/mining@_@astro
var page = () => mining_exports;
//#endregion
export { page };
