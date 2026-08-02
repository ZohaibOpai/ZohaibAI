import { o as __toESM } from "./_runtime.mjs";
import { r as require_react } from "./_libs/@ai-sdk/react+[...].mjs";
import { i as Outlet, u as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { s as useAuth } from "./_ssr/ssr.mjs";
import { y as LoaderCircle } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated-DKxa3Epz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthenticatedLayout() {
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!loading && !user) navigate({ to: "/auth" });
	}, [
		loading,
		user,
		navigate
	]);
	if (loading || !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
//#endregion
export { AuthenticatedLayout as component };
