import { u as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime, i as useQueryClient, t as useMutation } from "./_libs/react+tanstack__react-query.mjs";
import { a as Plus, v as Sparkles, y as LoaderCircle } from "./_libs/lucide-react.mjs";
import { n as createConversation, u as useServerFn } from "./_ssr/conversations.functions-Dlg96BMn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.chat.index-DsrWAZcl.js
var import_jsx_runtime = require_jsx_runtime();
function ChatEmpty() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const create = useServerFn(createConversation);
	const createMut = useMutation({
		mutationFn: () => create({ data: {} }),
		onSuccess: (row) => {
			qc.invalidateQueries({ queryKey: ["conversations"] });
			navigate({
				to: "/chat/$threadId",
				params: { threadId: row.id }
			});
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-surface text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Start a conversation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm text-muted-foreground",
				children: "Ask anything — code, writing, research, planning. Switch between models any time without losing your thread."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => createMut.mutate(),
				disabled: createMut.isPending,
				className: "mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60",
				children: [createMut.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "New chat"]
			})
		]
	});
}
//#endregion
export { ChatEmpty as component };
