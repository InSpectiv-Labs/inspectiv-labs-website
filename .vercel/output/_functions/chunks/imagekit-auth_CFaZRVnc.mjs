import { n as __exportAll } from "./rolldown-runtime_Bl3dcgcQ.mjs";
import crypto from "crypto";
//#region src/pages/api/imagekit-auth.ts
var imagekit_auth_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async () => {
	const privateKey = "private_YjP2TtQv/Aw45cQ2/XdQPSfROm0=";
	const token = crypto.randomUUID();
	const expire = Math.floor(Date.now() / 1e3) + 1800;
	const signature = crypto.createHmac("sha1", privateKey).update(token + expire).digest("hex");
	return new Response(JSON.stringify({
		token,
		expire,
		signature
	}), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/imagekit-auth@_@ts
var page = () => imagekit_auth_exports;
//#endregion
export { page };
