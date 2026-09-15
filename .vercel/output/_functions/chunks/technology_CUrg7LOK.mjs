import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as $$Image, t as getImage } from "./_astro_assets_BDHaIWix.mjs";
import { _ as maybeRenderHead, c as renderComponent, g as renderTemplate } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$BaseLayout } from "./BaseLayout_D0Thhi29.mjs";
import { n as ind_energy_default, r as ind_mining_default, t as scan_sat_default } from "./scan-sat_BpDx8hOH.mjs";
import React, { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/react/TechnologyTimeline.tsx
var steps = [
	{
		id: 1,
		title: "Satellite Data Acquisition",
		description: "We acquire high-resolution C-band SAR radar data from Sentinel-1 satellites, providing all-weather, day & night imaging with frequent revisit times.",
		icon: "bx-globe",
		image: "/images/satellite_hero.webp"
	},
	{
		id: 2,
		title: "InSAR Processing",
		description: "Advanced algorithms detect phase changes between multiple radar images over time. We isolate the true deformation signal from atmospheric noise.",
		icon: "bx-layer",
		image: "/images/insar_interferogram.webp"
	},
	{
		id: 3,
		title: "Deformation Analysis",
		description: "Using advanced MintPy workflows and time-series analysis, we convert phase differences into exact, millimeter-level ground deformation maps.",
		icon: "bx-network-chart",
		image: "/images/deformation.webp"
	},
	{
		id: 4,
		title: "Risk Alerts & Reporting",
		description: "Machine learning models identify anomalies and early warning signals. Automated alerts highlight critical areas of subsidence or instability.",
		icon: "bx-radar",
		image: "/images/time_series.webp"
	},
	{
		id: 5,
		title: "Informed Decisions",
		description: "Turn complex data into decision-ready insights. Our actionable intelligence protects critical assets, ensures safety, and optimizes operations.",
		icon: "bx-check-shield",
		image: "/images/real_world_impact.webp"
	}
];
function TechnologyTimeline() {
	const [activeStep, setActiveStep] = useState(1);
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					setActiveStep((current) => current === steps.length ? 1 : current + 1);
					return 0;
				}
				return prev + 1;
			});
		}, 50);
		return () => clearInterval(timer);
	}, [activeStep]);
	const handleStepClick = (id) => {
		setActiveStep(id);
		setProgress(0);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "w-full max-w-[90vw] mx-auto min-h-[750px] lg:min-h-0",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch",
			children: [/* @__PURE__ */ jsx("div", {
				className: "col-span-1 lg:col-span-7 relative overflow-hidden bg-white border-l-2 border-[#1d4ed8] h-[300px] lg:h-auto lg:min-h-[400px]",
				children: steps.map((step) => /* @__PURE__ */ jsxs("div", {
					className: `absolute inset-0 transition-opacity duration-700 ${activeStep === step.id ? "opacity-100 z-10" : "opacity-0 z-0"}`,
					children: [
						/* @__PURE__ */ jsx("img", {
							loading: "lazy",
							src: step.image,
							alt: step.title,
							className: "w-full h-full object-cover opacity-90"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" }),
						/* @__PURE__ */ jsxs("div", {
							className: `absolute bottom-8 left-8 right-8 transition-transform duration-500 delay-150 ${activeStep === step.id ? "translate-y-0" : "translate-y-4"}`,
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-3xl font-semibold tracking-wide text-white mb-2 drop-shadow-md",
								children: step.title
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4 text-xs font-semibold text-cyan-400 tracking-wider",
								children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" }), /* @__PURE__ */ jsx("span", {
									className: "drop-shadow-md",
									children: "ACTIVE PROCESS"
								})]
							})]
						})
					]
				}, step.id))
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5 flex flex-col justify-center h-[500px] md:h-[550px] lg:h-[600px]",
				children: /* @__PURE__ */ jsx("div", {
					className: "space-y-4",
					children: steps.map((step) => /* @__PURE__ */ jsxs("div", {
						onClick: () => handleStepClick(step.id),
						className: "group cursor-pointer border-b border-gray-200 pb-6 last:border-0 transition-colors",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-baseline gap-6 mb-2",
							children: [/* @__PURE__ */ jsxs("span", {
								className: `font-semibold text-sm tracking-widest ${activeStep === step.id ? "text-[#1d4ed8]" : "text-gray-400 group-hover:text-gray-500"}`,
								children: [
									"[",
									step.id.toString().padStart(2, "0"),
									"]"
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("i", { className: `bx ${step.icon} text-2xl transition-colors duration-300 ${activeStep === step.id ? "text-[#1d4ed8]" : "text-gray-400 group-hover:text-gray-500"}` }), /* @__PURE__ */ jsx("h4", {
									className: `text-xl font-semibold tracking-wide transition-colors duration-300 ${activeStep === step.id ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"}`,
									children: step.title
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: `pl-14 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeStep === step.id ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`,
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-base text-gray-600 font-light leading-relaxed mb-6",
								children: step.description
							}), activeStep === step.id && /* @__PURE__ */ jsx("div", {
								className: "h-[1px] w-full bg-gray-200 relative",
								children: /* @__PURE__ */ jsx("div", {
									className: "absolute top-0 left-0 h-full bg-[#1d4ed8] transition-all duration-75",
									style: { width: `${progress}%` }
								})
							})]
						})]
					}, step.id))
				})
			})]
		})
	});
}
//#endregion
//#region src/components/react/TechStackGrid.tsx
var technologies = [
	{
		id: 1,
		title: "Sentinel-1 SAR Data",
		subtitle: "C-BAND SAR IMAGING",
		description: "All-weather, day & night imaging with 6–12 day repeat cycle.",
		icon: "bx-radar"
	},
	{
		id: 2,
		title: "InSAR Processing",
		subtitle: "PHASE INTERFEROMETRY",
		description: "Detect phase changes between radar images to measure deformation.",
		icon: "bx-layer"
	},
	{
		id: 3,
		title: "MintPy Workflow",
		subtitle: "TIME-SERIES ANALYSIS",
		description: "Advanced time-series analysis to isolate and quantify deformation.",
		icon: "bx-cube-alt"
	},
	{
		id: 4,
		title: "AI/ML Analytics",
		subtitle: "PATTERN RECOGNITION",
		description: "Machine learning models identify risks, anomalies and early warning signals.",
		icon: "bx-brain"
	},
	{
		id: 5,
		title: "Actionable Intelligence",
		subtitle: "DECISION READY INSIGHTS",
		description: "Clear dashboards, alerts and reports for smarter, faster decisions.",
		icon: "bx-line-chart"
	}
];
function TechStackGrid() {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full max-w-[90vw] mx-auto px-6 py-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-20 md:pl-12 border-l-2 border-[#1d4ed8]",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900",
				children: "Technology Stack"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xl text-gray-600 font-normal max-w-3xl leading-relaxed",
				children: "We combine advanced satellite radar, InSAR processing, and AI-driven analytics to deliver millimeter-level ground deformation intelligence at scale."
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-b border-gray-200",
			children: technologies.map((tech, index) => /* @__PURE__ */ jsxs("div", {
				className: `group relative p-8 md:p-10 bg-white transition-colors duration-300 hover:bg-gray-50 ${index !== technologies.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-baseline gap-4 mb-8",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-sm font-semibold text-[#1d4ed8]",
							children: ["0", tech.id]
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-xs font-bold text-gray-400 uppercase tracking-widest",
							children: tech.subtitle
						})]
					}),
					/* @__PURE__ */ jsx("i", { className: `bx ${tech.icon} text-4xl text-blue-600 mb-6 opacity-80 group-hover:opacity-100 transition-opacity` }),
					/* @__PURE__ */ jsx("h4", {
						className: "text-xl font-semibold text-gray-900 mb-4 tracking-wide",
						children: tech.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-gray-600 font-normal leading-relaxed",
						children: tech.description
					})
				]
			}, tech.id))
		})]
	});
}
//#endregion
//#region src/components/react/DataPipeline.tsx
var pipelineSteps = [
	{
		id: 1,
		title: "RAW SAR IMAGE",
		subtitle: "Sentinel-1 radar acquisition",
		image: "/images/satellite_hero.webp"
	},
	{
		id: 2,
		title: "INTERFEROGRAM",
		subtitle: "Phase difference between images",
		image: "/images/deformation_map.webp"
	},
	{
		id: 3,
		title: "UNWRAPPED PHASE",
		subtitle: "Corrected phase (unwrapped)",
		image: "/images/deformation.webp"
	},
	{
		id: 4,
		title: "TIME-SERIES DEFORMATION",
		subtitle: "Millimeter-level deformation over time",
		image: "/images/time_series_analysis.webp"
	},
	{
		id: 5,
		title: "RISK & INSIGHT",
		subtitle: "Identify unstable zones and enable action",
		image: "/images/real_world_impact.webp"
	}
];
function DataPipeline() {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full max-w-[90vw] mx-auto px-6 py-24",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-20 md:pl-12 border-l-2 border-[#1d4ed8]",
			children: /* @__PURE__ */ jsx("h2", {
				className: "text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900",
				children: "From Raw Data to Real-World Impact"
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 w-full relative",
			children: pipelineSteps.map((step, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center group w-full lg:flex-1 min-w-0 relative",
				children: [
					index < pipelineSteps.length - 1 && /* @__PURE__ */ jsx("div", {
						className: "hidden lg:block absolute top-[3rem] xl:top-[4rem] 2xl:top-[5rem] left-[50%] w-full h-[2px] bg-gray-200 z-0",
						children: /* @__PURE__ */ jsx("div", { className: "absolute right-[3.5rem] xl:right-[4.5rem] 2xl:right-[5.5rem] top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-gray-300 rotate-45" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative w-40 h-40 md:w-48 md:h-48 lg:w-24 lg:h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 shrink-0 rounded-full border-4 border-white shadow-xl overflow-hidden mb-4 lg:mb-6 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 z-10 bg-white",
						children: [/* @__PURE__ */ jsx("img", {
							loading: "lazy",
							src: step.image,
							alt: step.title,
							className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-900/10 transition-colors duration-500" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "text-center px-2 md:px-4",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-bold text-gray-900 tracking-wide mb-2",
							children: step.title
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm text-gray-600 font-normal leading-relaxed",
							children: step.subtitle
						})]
					})
				]
			}), index < pipelineSteps.length - 1 && /* @__PURE__ */ jsx("div", {
				className: "lg:hidden text-[#1d4ed8]/30 my-2 w-full flex justify-center",
				children: /* @__PURE__ */ jsx("i", { className: "bx bx-chevron-down text-3xl" })
			})] }, step.id))
		})]
	});
}
//#endregion
//#region src/components/react/MonitoringGrid.tsx
function MonitoringGrid({ images }) {
	const monitoringDomains = [
		{
			id: 1,
			title: "SLOPES & HIGHWALLS",
			description: "Detect slope instability and potential failures.",
			icon: "bx-target-lock",
			image: images[0] || "",
			className: "md:col-span-1 lg:col-span-3"
		},
		{
			id: 2,
			title: "TAILINGS STORAGE FACILITIES",
			description: "Monitor tailings dam movement, seepage and structural integrity.",
			icon: "bx-water",
			image: images[1] || "",
			className: "md:col-span-1 lg:col-span-3"
		},
		{
			id: 3,
			title: "WASTE DUMPS & STOCKPILES",
			description: "Track movement and settlement over time.",
			icon: "bx-cart",
			image: images[2] || "",
			className: "md:col-span-1 lg:col-span-2"
		},
		{
			id: 4,
			title: "INFRASTRUCTURE & ASSETS",
			description: "Monitor critical infrastructure and linear assets.",
			icon: "bx-buildings",
			image: images[3] || "",
			className: "md:col-span-1 lg:col-span-2"
		},
		{
			id: 5,
			title: "LARGE AREA SURVEILLANCE",
			description: "Wide area monitoring for regional risk assessment.",
			icon: "bx-cloud-drizzle",
			image: images[4] || "",
			className: "md:col-span-2 lg:col-span-2"
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full max-w-[90vw] mx-auto px-6 py-24",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-16 md:pl-12 border-l-2 border-[#1d4ed8]",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900",
				children: "What We Monitor"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xl text-gray-600 font-normal max-w-3xl leading-relaxed",
				children: "Our technology adapts to diverse environments, providing critical intelligence where it matters most."
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[250px]",
			children: monitoringDomains.map((domain) => /* @__PURE__ */ jsxs("div", {
				className: `group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${domain.className}`,
				children: [
					/* @__PURE__ */ jsx("img", {
						loading: "lazy",
						src: domain.image,
						alt: domain.title,
						className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-100"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/60 transition-colors duration-500" }),
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 p-8 flex flex-col justify-end z-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "transform transition-transform duration-500 group-hover:-translate-y-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30",
									children: /* @__PURE__ */ jsx("i", { className: `bx ${domain.icon} text-white text-xl` })
								}), /* @__PURE__ */ jsx("h3", {
									className: "text-lg md:text-xl font-bold text-white tracking-wider",
									children: domain.title
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-100 font-normal text-sm md:text-base leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 overflow-hidden transition-all duration-500 delay-100",
								children: domain.description
							})]
						})
					})
				]
			}, domain.id))
		})]
	});
}
//#endregion
//#region src/assets/bg-hero.webp
var bg_hero_default = new Proxy({
	"src": "/_astro/bg-hero.Bc9deibG.webp",
	"width": 1024,
	"height": 1024,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/bg-hero.webp";
	return target[name];
} });
//#endregion
//#region src/assets/scan-infra.webp
var scan_infra_default = new Proxy({
	"src": "/_astro/scan-infra.B2FWd5oz.webp",
	"width": 1024,
	"height": 1024,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/scan-infra.webp";
	return target[name];
} });
//#endregion
//#region src/assets/bg-map.webp
var bg_map_default = new Proxy({
	"src": "/_astro/bg-map.CPBvoCN8.webp",
	"width": 1024,
	"height": 1024,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/bg-map.webp";
	return target[name];
} });
//#endregion
//#region src/pages/technology.astro
var technology_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Technology,
	file: () => $$file,
	url: () => $$url
});
var $$Technology = createComponent(async ($$result, $$props, $$slots) => {
	const miningOpt = await getImage({
		src: ind_mining_default,
		format: "webp",
		width: 400
	});
	const energyOpt = await getImage({
		src: ind_energy_default,
		format: "webp",
		width: 400
	});
	const heroBgOpt = await getImage({
		src: bg_hero_default,
		format: "webp",
		width: 400
	});
	const infraOpt = await getImage({
		src: scan_infra_default,
		format: "webp",
		width: 400
	});
	const worldMapOpt = await getImage({
		src: bg_map_default,
		format: "webp",
		width: 400
	});
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Our Technology | InSAR & Predictive Analytics | InSpectiv",
		"description": "Discover how InSpectiv Labs leverages Sentinel-1 satellite radar and advanced machine learning algorithms to map millimeter-scale ground deformation."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 bg-[#000f2c] text-white"><div class="absolute inset-0 opacity-30">${renderComponent($$result, "Image", $$Image, {
		"loading": "eager",
		"decoding": "async",
		"src": scan_sat_default,
		"alt": "Technology",
		"class": "w-full h-full object-cover"
	})}</div><div class="relative z-10 max-w-[90vw] mx-auto px-6 text-center"><h1 class="text-3xl md:text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-wide">Our Technology</h1><p class="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">Transforming satellite radar into millimeter-level precision.</p></div></section><section class="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden"><div class="max-w-[90vw] mx-auto px-6 relative z-10"><div class="mb-12 md:mb-16 lg:mb-24 md:pl-12 border-l-2 border-gray-200"><h3 class="text-3xl md:text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900">How It Works</h3><p class="text-base md:text-lg text-gray-600 font-normal max-w-2xl">InSpectiv Labs converts satellite radar data into millimeter-level ground deformation intelligence through an advanced end-to-end InSAR workflow.</p></div>${renderComponent($$result, "TechnologyTimeline", TechnologyTimeline, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/react/TechnologyTimeline.tsx",
		"client:component-export": "default"
	})}</div></section><section class="bg-gray-50 relative overflow-hidden py-12"><div class="relative z-10">${renderComponent($$result, "TechStackGrid", TechStackGrid, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/react/TechStackGrid.tsx",
		"client:component-export": "default"
	})}</div></section><section class="bg-gray-50 relative overflow-hidden border-t border-b border-gray-200">${renderComponent($$result, "DataPipeline", DataPipeline, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/react/DataPipeline.tsx",
		"client:component-export": "default"
	})}</section><section class="bg-white relative overflow-hidden py-12">${renderComponent($$result, "MonitoringGrid", MonitoringGrid, {
		"images": [
			miningOpt.src,
			energyOpt.src,
			heroBgOpt.src,
			infraOpt.src,
			worldMapOpt.src
		],
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/react/MonitoringGrid.tsx",
		"client:component-export": "default"
	})}</section><section class="bg-gray-50 text-gray-900 py-16 md:py-24 lg:py-32 border-t border-gray-200"><div class="max-w-[90vw] mx-auto px-6"><div><h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 lg:mb-12 tracking-tight text-center text-[#1d4ed8]">Why It Matters</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="flex flex-col items-center text-center"><div class="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6"><i class="bx bx-target-lock text-2xl md:text-3xl text-blue-600"></i></div><h4 class="text-lg md:text-xl font-bold mb-3">Millimeter Precision</h4><p class="text-gray-600 font-normal leading-relaxed">Detect movement as small as 1–2 mm, identifying issues long before they become visible to the naked eye.</p></div><div class="flex flex-col items-center text-center"><div class="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6"><i class="bx bx-world text-2xl md:text-3xl text-blue-600"></i></div><h4 class="text-lg md:text-xl font-bold mb-3">Wide Area Coverage</h4><p class="text-gray-600 font-normal leading-relaxed">Monitor large and remote areas cost-effectively, providing a complete picture of regional stability.</p></div><div class="flex flex-col items-center text-center"><div class="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6"><i class="bx bx-time-five text-2xl md:text-3xl text-blue-600"></i></div><h4 class="text-lg md:text-xl font-bold mb-3">Continuous & Consistent</h4><p class="text-gray-600 font-normal leading-relaxed">Frequent revisits ensure no critical changes are missed, providing a reliable historical baseline.</p></div></div></div></div></section>` })}`;
}, "/home/argha/Desktop/startup/website/src/pages/technology.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/technology.astro";
var $$url = "/technology";
//#endregion
//#region \0virtual:astro:page:src/pages/technology@_@astro
var page = () => technology_exports;
//#endregion
export { page };
