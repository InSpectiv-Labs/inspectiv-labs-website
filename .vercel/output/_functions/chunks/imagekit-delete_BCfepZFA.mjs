import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/imagekit-delete.ts
var imagekit_delete_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request }) => {
	try {
		const { url } = await request.json();
		if (!url) return new Response(JSON.stringify({ error: "URL is required" }), { status: 400 });
		const authHeader = "Basic " + Buffer.from("private_YjP2TtQv/Aw45cQ2/XdQPSfROm0=:").toString("base64");
		const imagekitUrl = "https://ik.imagekit.io/arghajit";
		if (!url.startsWith(imagekitUrl)) return new Response(JSON.stringify({ error: "URL does not belong to this ImageKit endpoint" }), { status: 400 });
		const relativePath = url.replace(imagekitUrl, "");
		const filename = relativePath.split("/").pop();
		const folderPath = relativePath.substring(0, relativePath.lastIndexOf("/"));
		if (!filename) return new Response(JSON.stringify({ error: "Invalid URL format" }), { status: 400 });
		const searchQuery = `name="${filename}"`;
		const searchUrl = `https://api.imagekit.io/v1/files?path=${encodeURIComponent(folderPath)}&searchQuery=${encodeURIComponent(searchQuery)}`;
		const searchResponse = await fetch(searchUrl, {
			method: "GET",
			headers: { "Authorization": authHeader }
		});
		if (!searchResponse.ok) {
			const errorText = await searchResponse.text();
			return new Response(JSON.stringify({
				error: "Failed to search ImageKit",
				details: errorText
			}), { status: searchResponse.status });
		}
		const files = await searchResponse.json();
		if (!files || files.length === 0) return new Response(JSON.stringify({
			success: true,
			message: "File not found in ImageKit, skipped deletion."
		}), { status: 200 });
		const deleteUrl = `https://api.imagekit.io/v1/files/${files[0].fileId}`;
		const deleteResponse = await fetch(deleteUrl, {
			method: "DELETE",
			headers: { "Authorization": authHeader }
		});
		if (!deleteResponse.ok) {
			const errorText = await deleteResponse.text();
			return new Response(JSON.stringify({
				error: "Failed to delete file from ImageKit",
				details: errorText
			}), { status: deleteResponse.status });
		}
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/imagekit-delete@_@ts
var page = () => imagekit_delete_exports;
//#endregion
export { page };
