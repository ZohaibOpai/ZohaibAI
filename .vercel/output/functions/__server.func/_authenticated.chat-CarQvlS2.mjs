import { o as __toESM } from "./_runtime.mjs";
import { r as require_react } from "./_libs/@ai-sdk/react+[...].mjs";
import { c as Link, d as useParams, i as Outlet, u as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime, i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/react+tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { o as useTheme, s as useAuth } from "./_ssr/ssr.mjs";
import { a as Plus, c as Moon, d as LogOut, h as Check, l as MessageSquare, n as Trash2, o as Pencil, r as Sun, t as X, u as Menu, y as LoaderCircle } from "./_libs/lucide-react.mjs";
import { i as deleteConversation, n as createConversation, o as listConversations, s as renameConversation, u as useServerFn } from "./_ssr/conversations.functions-Dlg96BMn.mjs";
import { t as formatDistanceToNow } from "./_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.chat-CarQvlS2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
function ChatLayout() {
	const list = useServerFn(listConversations);
	const create = useServerFn(createConversation);
	const remove = useServerFn(deleteConversation);
	const rename = useServerFn(renameConversation);
	const qc = useQueryClient();
	const navigate = useNavigate();
	const { user, signOut } = useAuth();
	const { theme, toggleTheme } = useTheme();
	const activeId = useParams({ strict: false }).threadId;
	const conversationsQuery = useQuery({
		queryKey: ["conversations"],
		queryFn: () => list()
	});
	const createMut = useMutation({
		mutationFn: () => create({ data: {} }),
		onSuccess: (row) => {
			qc.invalidateQueries({ queryKey: ["conversations"] });
			navigate({
				to: "/chat/$threadId",
				params: { threadId: row.id }
			});
		},
		onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to create chat")
	});
	const deleteMut = useMutation({
		mutationFn: (id) => remove({ data: { conversationId: id } }),
		onSuccess: (_d, id) => {
			qc.invalidateQueries({ queryKey: ["conversations"] });
			if (id === activeId) navigate({ to: "/chat" });
		}
	});
	const renameMut = useMutation({
		mutationFn: ({ id, title }) => rename({ data: {
			conversationId: id,
			title
		} }),
		onSuccess: () => qc.invalidateQueries({ queryKey: ["conversations"] })
	});
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [editValue, setEditValue] = (0, import_react.useState)("");
	const isMobile = useIsMobile();
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isMobile) setSidebarOpen(false);
	}, [activeId, isMobile]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen w-full overflow-hidden bg-background",
		children: [
			isMobile && sidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-black/50",
				onClick: () => setSidebarOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `flex w-72 shrink-0 flex-col border-r border-border bg-surface transition-transform duration-200 ${isMobile ? `fixed inset-y-0 left-0 z-50 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}` : "relative translate-x-0"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/chat",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm font-semibold",
									children: "Z"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Zohaib AI"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggleTheme,
								className: "rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground",
								"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
								title: theme === "dark" ? "Light mode" : "Dark mode",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
							}), isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSidebarOpen(false),
								className: "rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground",
								"aria-label": "Close sidebar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => createMut.mutate(),
							disabled: createMut.isPending,
							className: "flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-2 text-sm font-medium hover:bg-accent disabled:opacity-60",
							children: [createMut.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "New chat"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex-1 overflow-y-auto px-2 pb-2",
						children: [
							conversationsQuery.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid place-items-center py-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-muted-foreground" })
							}),
							conversationsQuery.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-3 py-6 text-center text-xs text-muted-foreground",
								children: "No chats yet. Start a new one."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-0.5",
								children: conversationsQuery.data?.map((c) => {
									const isActive = c.id === activeId;
									const isEditing = editingId === c.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 rounded-md bg-surface-2 px-2 py-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												autoFocus: true,
												value: editValue,
												onChange: (e) => setEditValue(e.target.value),
												onKeyDown: (e) => {
													if (e.key === "Enter") {
														renameMut.mutate({
															id: c.id,
															title: editValue.trim() || c.title
														});
														setEditingId(null);
													} else if (e.key === "Escape") setEditingId(null);
												},
												className: "min-w-0 flex-1 bg-transparent text-sm outline-none"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													renameMut.mutate({
														id: c.id,
														title: editValue.trim() || c.title
													});
													setEditingId(null);
												},
												className: "rounded p-1 text-muted-foreground hover:text-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setEditingId(null),
												className: "rounded p-1 text-muted-foreground hover:text-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `group flex items-center gap-2 rounded-md px-2 py-1.5 ${isActive ? "bg-surface-2" : "hover:bg-surface-2/60"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/chat/$threadId",
											params: { threadId: c.id },
											className: "flex min-w-0 flex-1 items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate text-sm",
												children: c.title
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex shrink-0 items-center gap-0.5 opacity-0 transition group-hover:opacity-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: (e) => {
													e.stopPropagation();
													setEditingId(c.id);
													setEditValue(c.title);
												},
												className: "rounded p-1 text-muted-foreground hover:text-foreground",
												"aria-label": "Rename",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: (e) => {
													e.stopPropagation();
													if (confirm("Delete this conversation?")) deleteMut.mutate(c.id);
												},
												className: "rounded p-1 text-muted-foreground hover:text-destructive",
												"aria-label": "Delete",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
											})]
										})]
									}), isActive && !isEditing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "px-3 pt-0.5 text-[10px] text-muted-foreground",
										children: ["Updated ", formatDistanceToNow(new Date(c.updated_at), { addSuffix: true })]
									})] }, c.id);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 px-1 pb-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-7 w-7 place-items-center rounded-full bg-surface-2 text-xs",
									children: (user?.email ?? "?")[0]?.toUpperCase()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0 flex-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs",
										children: user?.email
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: async () => {
										await signOut();
										navigate({ to: "/" });
									},
									className: "rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground",
									"aria-label": "Sign out",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border px-3 py-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSidebarOpen(true),
							className: "rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground",
							"aria-label": "Open sidebar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Zohaib AI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleTheme,
							className: "ml-auto rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground",
							"aria-label": "Toggle theme",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
			})
		]
	});
}
//#endregion
export { ChatLayout as component };
