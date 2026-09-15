import { r as $$Image } from "./_astro_assets_BDHaIWix.mjs";
import { D as createAstro, T as unescapeHTML, _ as maybeRenderHead, b as createRenderInstruction, c as renderComponent, g as renderTemplate, p as renderSlot, v as renderHead, y as addAttribute } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
/* empty css                 */
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/react/MobileNav.tsx
function MobileNav({ links }) {
	const [isOpen, setIsOpen] = useState(false);
	const [openDropdowns, setOpenDropdowns] = useState({});
	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);
	const toggleDropdown = (label, e) => {
		e.preventDefault();
		setOpenDropdowns((prev) => ({
			...prev,
			[label]: !prev[label]
		}));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "block",
		children: [
			/* @__PURE__ */ jsx("button", {
				onClick: () => setIsOpen(!isOpen),
				className: "relative z-[70] p-2 text-white hover:text-cyan-400 focus:outline-none transition-transform duration-300 rounded-md",
				"aria-label": "Toggle menu",
				children: /* @__PURE__ */ jsx("div", {
					className: `transition-transform duration-300 ${isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"}`,
					children: isOpen ? /* @__PURE__ */ jsx("i", { className: "bx bx-x text-4xl" }) : /* @__PURE__ */ jsx("i", { className: "bx bx-menu text-4xl" })
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: `fixed left-0 top-[96px] w-full h-[calc(100vh-96px)] z-[60] bg-[#000f2c]/90 backdrop-blur-xl overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-8 invisible"}`,
				children: /* @__PURE__ */ jsxs("nav", {
					className: "flex flex-col p-6 space-y-4 mb-12",
					children: [links.map((link, index) => /* @__PURE__ */ jsx("div", {
						className: "transform transition-all duration-500 ease-out",
						style: {
							opacity: isOpen ? 1 : 0,
							transform: isOpen ? "translateY(0)" : "translateY(20px)",
							transitionDelay: `${isOpen ? index * 75 + 100 : 0}ms`
						},
						children: link.children ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("button", {
							onClick: (e) => toggleDropdown(link.label, e),
							className: "flex items-center justify-between w-full py-4 text-lg font-light text-white uppercase tracking-[0.15em] hover:text-cyan-400 transition-colors border-b border-white/10 group",
							children: [link.label, /* @__PURE__ */ jsx("i", { className: `bx bx-chevron-${openDropdowns[link.label] ? "up" : "down"} text-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300` })]
						}), /* @__PURE__ */ jsx("div", {
							className: `overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns[link.label] ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`,
							children: /* @__PURE__ */ jsx("div", {
								className: "flex flex-col pl-6 space-y-2 border-l border-cyan-400/20 ml-2 py-4",
								children: link.children.map((child, childIdx) => /* @__PURE__ */ jsxs("a", {
									href: child.href,
									className: "py-3 text-[15px] font-light tracking-wide text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2",
									onClick: () => setIsOpen(false),
									style: {
										animation: openDropdowns[link.label] ? `slideInRight 0.4s ease-out ${childIdx * 50}ms forwards` : "none",
										opacity: openDropdowns[link.label] ? 0 : 1
									},
									children: [/* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-cyan-400/50" }), child.label]
								}, child.label))
							})
						})] }) : /* @__PURE__ */ jsx("a", {
							href: link.href,
							className: "block py-4 text-lg font-light text-white uppercase tracking-[0.15em] hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 border-b border-white/10",
							onClick: () => setIsOpen(false),
							children: link.label
						})
					}, link.label)), /* @__PURE__ */ jsx("div", {
						className: "pt-10 transform transition-all duration-500",
						style: {
							opacity: isOpen ? 1 : 0,
							transform: isOpen ? "translateY(0)" : "translateY(20px)",
							transitionDelay: `${isOpen ? links.length * 75 + 100 : 0}ms`
						},
						children: /* @__PURE__ */ jsxs("a", {
							href: "/contact",
							className: "flex items-center justify-center w-full px-4 py-4 text-sm font-semibold tracking-widest text-white uppercase bg-[#1d4ed8] hover:bg-[#1e40af] hover:shadow-[0_0_20px_rgba(29,78,216,0.4)] transition-all duration-300 group",
							onClick: () => setIsOpen(false),
							children: ["CONTACT US", /* @__PURE__ */ jsx("i", { className: "bx bx-right-arrow-alt ml-2 text-xl group-hover:translate-x-1 transition-transform" })]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      ` })
		]
	});
}
//#endregion
//#region src/assets/logo.png
var logo_default = new Proxy({
	"src": "/_astro/logo.DiCitQR1.png",
	"width": 1149,
	"height": 346,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/logo.png";
	return target[name];
} });
//#endregion
//#region src/components/Header.astro
createAstro("https://inspectivlabs.com");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const { forceSolid = false } = Astro.props;
	const navLinks = [
		{
			label: "HOME",
			href: "/"
		},
		{
			label: "INDUSTRY",
			href: "/#industries",
			children: [
				{
					label: "Infrastructure & Construction",
					href: "/industries/infrastructure"
				},
				{
					label: "Mining & Resources",
					href: "/industries/mining"
				},
				{
					label: "Energy & Utilities",
					href: "/industries/energy"
				},
				{
					label: "Urban Development",
					href: "/industries/urban-development"
				}
			]
		},
		{
			label: "SOLUTIONS",
			href: "/#solutions",
			children: [
				{
					label: "Asset Owners & Operators",
					href: "/solutions/asset-owners-operators"
				},
				{
					label: "Engineering & Geotech Consultants",
					href: "/solutions/engineering-geotech-consultants"
				},
				{
					label: "Financial Institutions & Lenders",
					href: "/solutions/financial-institutions-lenders"
				},
				{
					label: "Insurance & Risk Professionals",
					href: "/solutions/insurance-risk-professionals"
				}
			]
		},
		{
			label: "SERVICES",
			href: "/#services",
			children: [{
				label: "Historical Analysis",
				href: "/services/historical-analysis"
			}, {
				label: "Continuous Monitoring",
				href: "/services/continuous-monitoring"
			}]
		},
		{
			label: "CASE STUDIES",
			href: "/case-studies"
		},
		{
			label: "COMPANY",
			href: "#!",
			children: [{
				label: "About Us",
				href: "/about"
			}, {
				label: "Technology",
				href: "/technology"
			}]
		},
		{
			label: "INSIGHTS",
			href: "/insights"
		}
	];
	return renderTemplate`${!forceSolid && renderTemplate`${maybeRenderHead($$result)}<header class="absolute top-0 left-0 right-0 bg-transparent w-full z-40"><div class="max-w-full lg:max-w-[95vw] xl:max-w-[90vw] mx-auto px-4 lg:px-4 xl:px-6 h-20 lg:h-24 xl:h-32 flex items-center justify-between gap-2 lg:gap-4"><a href="/" aria-label="Home" class="flex items-center gap-2 lg:gap-4 shrink-0">${renderComponent($$result, "Image", $$Image, {
		"loading": "eager",
		"fetchpriority": "high",
		"width": 280,
		"decoding": "async",
		"src": logo_default,
		"alt": "InSpectiv Labs",
		"class": "h-10 md:h-12 lg:h-16 xl:h-20 w-auto object-contain drop-shadow-md"
	})}</a><nav class="hidden md:flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-8 relative shrink-0">${navLinks.map((link) => link.children ? renderTemplate`<div class="relative dropdown-container"><button class="dropdown-button group/link text-white text-[12px] lg:text-[13px] xl:text-[15px] hover:text-cyan-400 transition-colors uppercase tracking-wide drop-shadow-sm font-semibold flex items-center gap-0.5 relative py-1">${link.label}<i class="bx bx-chevron-down chevron text-[10px] lg:text-xs xl:text-sm mt-0.5 opacity-70 -mr-1 transition-transform duration-300"></i><span class="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span></button><div class="dropdown-menu absolute top-full left-0 pt-4 w-56 opacity-0 invisible transition-all duration-300 transform translate-y-4 z-50"><div class="bg-white shadow-xl rounded-sm py-2 flex flex-col border border-gray-100">${link.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="px-6 py-3 text-sm text-gray-700 hover:bg-slate-50 hover:text-[#1d4ed8] transition-colors border-l-2 border-transparent hover:border-[#1d4ed8] font-semibold">${child.label}</a>`)}</div></div></div>` : renderTemplate`<a${addAttribute(link.href, "href")} class="group/link text-white text-[12px] lg:text-[13px] xl:text-[15px] hover:text-cyan-400 transition-colors uppercase tracking-wide drop-shadow-sm font-semibold relative py-1">${link.label}<span class="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span></a>`)}<a href="/contact" class="ml-2 lg:ml-3 xl:ml-4 px-2 py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 bg-cyan-600 text-white text-[11px] lg:text-[12px] xl:text-[14px] font-bold uppercase tracking-widest transition-colors shadow-lg hover:shadow-cyan-500/30 group/btn relative overflow-hidden rounded-sm whitespace-nowrap"><span class="relative z-10">CONTACT US</span><div class="absolute inset-0 w-full h-full bg-cyan-500 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0"></div></a></nav><div class="md:hidden text-white shrink-0">${renderComponent($$result, "MobileNav", MobileNav, {
		"client:idle": true,
		"links": navLinks,
		"client:component-hydration": "idle",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/react/MobileNav.tsx",
		"client:component-export": "default"
	})}</div></div></header>`}<header id="main-header"${addAttribute(forceSolid.toString(), "data-force-solid")}${addAttribute(`fixed top-0 left-0 right-0 bg-[#000f2c] w-full z-50 transition-transform duration-300 shadow-md ${forceSolid ? "translate-y-0" : "transform -translate-y-full"}`, "class")}><div class="max-w-full lg:max-w-[95vw] xl:max-w-[90vw] mx-auto px-4 lg:px-4 xl:px-6 h-20 lg:h-24 flex items-center justify-between gap-2 lg:gap-4"><a href="/" aria-label="Home" class="flex items-center gap-2 lg:gap-4 shrink-0">${renderComponent($$result, "Image", $$Image, {
		"loading": "eager",
		"fetchpriority": "high",
		"width": 280,
		"decoding": "async",
		"src": logo_default,
		"alt": "InSpectiv Labs",
		"class": "h-10 md:h-12 lg:h-16 xl:h-20 w-auto object-contain"
	})}</a><nav class="hidden md:flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-8 relative shrink-0">${navLinks.map((link) => link.children ? renderTemplate`<div class="relative dropdown-container"><button class="dropdown-button group/link text-white text-[12px] lg:text-[13px] xl:text-[15px] hover:text-cyan-400 transition-colors uppercase tracking-wide flex items-center gap-0.5 relative py-1">${link.label}<i class="bx bx-chevron-down chevron text-[10px] lg:text-xs xl:text-sm mt-0.5 opacity-70 -mr-1 transition-transform duration-300"></i><span class="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span></button><div class="dropdown-menu absolute top-full left-0 pt-4 w-56 opacity-0 invisible transition-all duration-300 transform translate-y-4 z-50"><div class="bg-white shadow-xl rounded-sm py-2 flex flex-col border border-gray-100">${link.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="px-6 py-3 text-sm text-gray-700 hover:bg-slate-50 hover:text-[#1d4ed8] transition-colors border-l-2 border-transparent hover:border-[#1d4ed8] font-semibold">${child.label}</a>`)}</div></div></div>` : renderTemplate`<a${addAttribute(link.href, "href")} class="group/link text-white text-[12px] lg:text-[13px] xl:text-[15px] hover:text-cyan-400 transition-colors uppercase tracking-wide relative py-1">${link.label}<span class="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span></a>`)}<a href="/contact" class="ml-2 lg:ml-3 xl:ml-4 px-2 py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 bg-[#1d4ed8] text-white text-[11px] lg:text-[12px] xl:text-[14px] font-semibold uppercase tracking-wider transition-colors group/btn relative overflow-hidden whitespace-nowrap"><span class="relative z-10">CONTACT US</span><div class="absolute inset-0 w-full h-full bg-[#0f2952] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0"></div></a></nav><div class="md:hidden text-white shrink-0">${renderComponent($$result, "MobileNav", MobileNav, {
		"client:idle": true,
		"links": navLinks,
		"client:component-hydration": "idle",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/react/MobileNav.tsx",
		"client:component-export": "default"
	})}</div></div></header>${renderScript($$result, "/home/argha/Desktop/startup/website/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/argha/Desktop/startup/website/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="relative bg-[#000f2c] text-white pt-20 pb-10 w-full overflow-hidden border-t border-white/10 shadow-2xl"><div class="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500 rounded-[100%] blur-[120px] opacity-[0.05] pointer-events-none"></div><div class="max-w-[90vw] mx-auto px-6 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-8 md:mb-12 lg:mb-16"><div class="lg:col-span-3 flex flex-col items-start"><a href="/" aria-label="Home" class="inline-block mb-6">${renderComponent($$result, "Image", $$Image, {
		"loading": "lazy",
		"decoding": "async",
		"src": logo_default,
		"alt": "InSpectiv Labs",
		"class": "h-24 w-auto object-contain"
	})}</a><p class="text-sm font-light leading-relaxed text-gray-400 max-w-sm mb-8">Transforming raw satellite radar data into actionable, millimeter-accurate ground deformation intelligence for the world's most demanding sectors.</p><div class="flex gap-4"><a href="https://www.linkedin.com/company/inspectiv-labs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all shadow-sm"><i class="bx bxl-linkedin text-base md:text-lg"></i></a><a href="https://x.com/inspectivlabs" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all shadow-sm"><svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg></a><a href="https://youtube.com/@inspectivlabs" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all shadow-sm"><i class="bx bxl-youtube text-base md:text-lg"></i></a></div></div><div class="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"><div><h4 class="text-xs font-bold mb-6 tracking-widest text-white uppercase opacity-90">Industry</h4><ul class="space-y-4"><li><a href="/industries/infrastructure" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Infrastructure & Construction</a></li><li><a href="/industries/mining" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Mining & Resources</a></li><li><a href="/industries/energy" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Energy & Utilities</a></li><li><a href="/industries/urban-development" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Urban Development</a></li></ul></div><div><h4 class="text-xs font-bold mb-6 tracking-widest text-white uppercase opacity-90">Solutions</h4><ul class="space-y-4"><li><a href="/solutions/asset-owners-operators" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Asset Owners & Operators</a></li><li><a href="/solutions/engineering-geotech-consultants" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Engineering & Geotech Consultants</a></li><li><a href="/solutions/financial-institutions-lenders" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Financial Institutions & Lenders</a></li><li><a href="/solutions/insurance-risk-professionals" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Insurance & Risk Professionals</a></li></ul></div><div><h4 class="text-xs font-bold mb-6 tracking-widest text-white uppercase opacity-90">Services</h4><ul class="space-y-4"><li><a href="/services/historical-analysis" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Historical Analysis</a></li><li><a href="/services/continuous-monitoring" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Continuous Monitoring</a></li></ul></div><div><h4 class="text-xs font-bold mb-6 tracking-widest text-white uppercase opacity-90">Company</h4><ul class="space-y-4"><li><a href="/about" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li><li><a href="/technology" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">Technology</a></li></ul></div><div><h4 class="text-xs font-bold mb-6 tracking-widest text-white uppercase opacity-90">Contact</h4><ul class="space-y-4"><li class="flex items-start gap-3"><i class="bx bx-map text-cyan-400 text-base mt-0.5"></i><span class="text-sm font-light text-gray-400 leading-relaxed">Hyderabad, India</span></li><li class="flex items-start gap-3 w-full"><i class="bx bx-envelope text-cyan-400 text-base mt-0.5 shrink-0"></i><a href="mailto:connect@inspectivlabs.com" class="text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors break-all">connect@inspectivlabs.com</a></li></ul></div></div></div><div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"><div class="flex items-center gap-3 text-[12px] font-medium text-gray-500"><span>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} InSpectiv Labs Private Limited. All rights reserved.</span></div><div class="flex items-center gap-6 text-[11px] font-medium tracking-wider text-gray-500 uppercase"><a href="/privacy-policy" class="hover:text-cyan-400 transition-colors">Privacy Policy</a><a href="/terms" class="hover:text-cyan-400 transition-colors">Terms of Use</a></div></div></div></footer>`;
}, "/home/argha/Desktop/startup/website/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/SEO.astro
createAstro("https://inspectivlabs.com");
var $$SEO = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SEO;
	const { title, description, ogImage = "/og-image.png", structuredData } = Astro.props;
	const canonicalURL = new URL(Astro.url.pathname, Astro.site || "https://inspectivlabs.com");
	return renderTemplate`<meta charset="utf-8">${structuredData && renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(structuredData))}<\/script>`}<meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro.generator, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(ogImage, Astro.url), "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(ogImage, Astro.url), "content")}>`;
}, "/home/argha/Desktop/startup/website/src/components/SEO.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://inspectivlabs.com");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title = "InSpectiv Labs", description = "A B2B service company targeting insurance companies, financial lenders, geotech consultants, and mining companies.", ogImage, forceSolidHeader = false, structuredData } = Astro.props;
	return renderTemplate`<html lang="en" class="scroll-smooth"><head>${renderComponent($$result, "SEO", $$SEO, {
		"title": title,
		"description": description,
		"ogImage": ogImage,
		"structuredData": structuredData
	})}<link rel="icon" type="image/png" href="/favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"></noscript><link rel="preload" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"></noscript>${renderHead($$result)}</head><body class="flex flex-col min-h-screen">${renderComponent($$result, "Header", $$Header, { "forceSolid": forceSolidHeader })}<main class="flex-grow">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/argha/Desktop/startup/website/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { $$BaseLayout as t };
