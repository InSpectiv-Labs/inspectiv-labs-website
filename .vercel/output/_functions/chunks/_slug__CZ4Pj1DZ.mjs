import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { D as createAstro, T as unescapeHTML, _ as maybeRenderHead, c as renderComponent, g as renderTemplate, p as renderSlot, u as Fragment, y as addAttribute } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$BaseLayout } from "./BaseLayout_BI8KNrFp.mjs";
import { t as supabase } from "./supabase_CRd9FTIo.mjs";
import { marked } from "marked";
//#region src/layouts/BlogPostLayout.astro
createAstro("https://inspectivlabs.com");
var $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPostLayout;
	const { title, description, date, author, heroImage, industry, readTime } = Astro.props;
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": title,
		"description": description,
		"image": heroImage ? heroImage : void 0,
		"datePublished": new Date(date).toISOString(),
		"author": {
			"@type": "Person",
			"name": author || "InSpectiv Labs Team"
		},
		"publisher": {
			"@type": "Organization",
			"name": "InSpectiv Labs",
			"logo": {
				"@type": "ImageObject",
				"url": "https://inspectivlabs.com/images/logo.png"
			}
		}
	};
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": `${title} | InSpectiv Labs Insights`,
		"description": description,
		"ogImage": heroImage,
		"structuredData": articleSchema
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="bg-gray-50 min-h-screen pb-24"><header class="relative pt-32 lg:pt-48 pb-16 lg:pb-24 border-b border-gray-200 flex flex-col justify-end min-h-[45vh]">${heroImage ? renderTemplate`<div class="absolute inset-0 z-0 bg-[#000f2c]"><img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover opacity-40 mix-blend-luminosity"><div class="absolute inset-0 bg-gradient-to-t from-[#000f2c] to-transparent opacity-90"></div></div>` : renderTemplate`<div class="absolute inset-0 bg-[#000f2c] z-0"></div>`}<div class="relative z-10 max-w-[80vw] mx-auto px-4 lg:px-8 w-full pb-16 lg:pb-24"><div class="max-w-4xl">${industry && renderTemplate`<div class="mb-8"><span class="px-3 py-1 border border-cyan-500/50 text-cyan-400 text-[11px] font-bold uppercase tracking-widest">${industry}</span></div>`}<h1 class="text-3xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-wide text-white">${title}</h1><div class="flex flex-wrap items-center gap-6 text-gray-400 text-sm font-light">${author && renderTemplate`<div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-cyan-900/50 border border-cyan-800 flex items-center justify-center text-cyan-400 font-semibold text-xs">${author.charAt(0)}</div><span class="text-gray-200">${author}</span></div>`}${readTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="w-1 h-1 rounded-full bg-gray-600 hidden md:block"></div><span class="flex items-center gap-2 uppercase tracking-wider text-xs font-semibold"><i class="bx bx-time-five text-[16px]"></i>${readTime}</span>` })}`}</div></div></div></header><div class="max-w-[80vw] mx-auto px-4 relative z-20 -mt-20 lg:-mt-28 mb-24"><div class="bg-white border border-gray-200 shadow-sm p-8 md:p-12 lg:p-16"><div class="prose prose-lg prose-slate mx-auto max-w-none 
                  prose-headings:text-[#000f2c] prose-headings:font-light 
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
                  prose-h3:text-2xl prose-h3:mt-8 
                  prose-p:text-gray-700 prose-p:font-light prose-p:leading-relaxed 
                  prose-a:text-[#1d4ed8] hover:prose-a:text-[#000f2c] prose-a:transition-colors
                  prose-li:text-gray-700 prose-li:font-light">${renderSlot($$result, $$slots["default"])}</div></div><div class="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between"><a href="/insights" class="text-[#1d4ed8] text-sm font-bold uppercase tracking-wider hover:text-[#000f2c] transition-colors flex items-center gap-2"><span class="text-lg md:text-xl leading-none rotate-180">›</span> Back to Insights</a></div></div></article>` })}`;
}, "/home/argha/Desktop/startup/website/src/layouts/BlogPostLayout.astro", void 0);
//#endregion
//#region src/pages/insights/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://inspectivlabs.com");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	let post = null;
	try {
		const { data } = await supabase.from("insights").select("*").eq("slug", slug).single();
		post = data;
	} catch (e) {
		console.error(e);
	}
	if (!post) return Astro.redirect("/404");
	const contentHtml = marked.parse(post.content || "");
	return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPostLayout, {
		"title": post.title,
		"description": post.description,
		"date": post.publishDate,
		"author": post.author,
		"heroImage": post.heroImage_url,
		"industry": post.industry,
		"readTime": post.readTime
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article>${unescapeHTML(contentHtml)}</article>` })}`;
}, "/home/argha/Desktop/startup/website/src/pages/insights/[slug].astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/insights/[slug].astro";
var $$url = "/insights/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/insights/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
