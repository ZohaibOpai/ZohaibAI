import { o as __toESM } from "./_runtime.mjs";
import { r as require_react, t as useChat } from "./_libs/@ai-sdk/react+[...].mjs";
import { u as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime, i as useQueryClient, n as useQuery } from "./_libs/react+tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as DefaultChatTransport } from "./_libs/ai.mjs";
import { c as supabase, i as getModel, n as DEFAULT_MODEL, r as MODELS, t as Route } from "./_ssr/ssr.mjs";
import { f as ImagePlus, g as ArrowUp, h as Check, i as Square, m as ChevronDown, p as Copy, s as Paperclip, t as X, v as Sparkles, y as LoaderCircle } from "./_libs/lucide-react.mjs";
import { a as getConversation, l as updateConversationModel, u as useServerFn } from "./_ssr/conversations.functions-Dlg96BMn.mjs";
import { t as Markdown$1 } from "./_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "./_libs/remark-gfm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.chat._threadId-BiN4Wi0t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Markdown({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "zai-prose",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown$1, {
			remarkPlugins: [remarkGfm],
			children: text
		})
	});
}
function ModelPicker({ value, onChange, disabled }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const current = getModel(value);
	(0, import_react.useEffect)(() => {
		function onClick(e) {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		}
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			disabled,
			onClick: () => setOpen((o) => !o),
			className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium hover:bg-surface-2 disabled:opacity-60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: current.provider
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current.label }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 text-muted-foreground" })
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-full left-0 z-50 mb-1 w-64 overflow-hidden rounded-lg border border-border bg-popover shadow-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "max-h-80 overflow-y-auto p-1",
				children: MODELS.map((m) => {
					const selected = m.id === value;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							onChange(m.id);
							setOpen(false);
						},
						className: `flex w-full items-start gap-2 rounded-md px-2 py-2 text-left text-xs hover:bg-accent ${selected ? "bg-accent" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-4 w-4 shrink-0 items-center justify-center",
							children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: m.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: m.provider
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[11px] text-muted-foreground",
								children: m.description
							})]
						})]
					}) }, m.id);
				})
			})
		})]
	});
}
function ChatThread() {
	const { threadId } = Route.useParams();
	const navigate = useNavigate();
	const qc = useQueryClient();
	const getConv = useServerFn(getConversation);
	const updateModelFn = useServerFn(updateConversationModel);
	const convQuery = useQuery({
		queryKey: ["conversation", threadId],
		queryFn: () => getConv({ data: { conversationId: threadId } }),
		retry: false
	});
	(0, import_react.useEffect)(() => {
		if (convQuery.error) {
			toast.error("Conversation unavailable.");
			navigate({ to: "/chat" });
		}
	}, [convQuery.error, navigate]);
	if (convQuery.isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid flex-1 place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (!convQuery.data) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatThreadInner, {
		threadId,
		initialModel: convQuery.data.conversation.model,
		initialMessages: hydrateMessages(convQuery.data.messages),
		onAfterFirstSend: () => qc.invalidateQueries({ queryKey: ["conversations"] }),
		onModelChange: async (model) => {
			await updateModelFn({ data: {
				conversationId: threadId,
				model
			} });
		}
	}, threadId);
}
function hydrateMessages(rows) {
	return rows.map((r) => ({
		id: r.id,
		role: r.role,
		parts: r.parts ?? []
	}));
}
function ChatThreadInner({ threadId, initialModel, initialMessages, onAfterFirstSend, onModelChange }) {
	const [model, setModel] = (0, import_react.useState)(initialModel || DEFAULT_MODEL);
	const modelRef = (0, import_react.useRef)(model);
	modelRef.current = model;
	const { messages, sendMessage, setMessages, status, error, stop } = useChat({
		id: threadId,
		messages: initialMessages,
		transport: (0, import_react.useMemo)(() => new DefaultChatTransport({
			api: "/api/chat",
			fetch: async (url, init) => {
				const { data } = await supabase.auth.getSession();
				const token = data.session?.access_token;
				const headers = new Headers(init?.headers);
				if (token) headers.set("Authorization", `Bearer ${token}`);
				return fetch(url, {
					...init,
					headers
				});
			},
			prepareSendMessagesRequest: ({ messages, body }) => ({ body: {
				...body,
				messages,
				conversationId: threadId,
				model: modelRef.current
			} })
		}), [threadId]),
		onError: (e) => {
			const msg = e instanceof Error ? e.message : "Something went wrong";
			if (/429/.test(msg)) toast.error("Rate limited. Please try again in a moment.");
			else if (/402/.test(msg)) toast.error("AI credits exhausted. Please upgrade your plan.");
			else toast.error(msg);
		}
	});
	const [input, setInput] = (0, import_react.useState)("");
	const [attachments, setAttachments] = (0, import_react.useState)([]);
	const [imageMode, setImageMode] = (0, import_react.useState)(false);
	const [generating, setGenerating] = (0, import_react.useState)(false);
	const textareaRef = (0, import_react.useRef)(null);
	const scrollRef = (0, import_react.useRef)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const [userName, setUserName] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			setUserName(data.user?.user_metadata?.full_name || data.user?.user_metadata?.name || data.user?.email?.split("@")[0] || "");
		});
	}, []);
	(0, import_react.useEffect)(() => {
		textareaRef.current?.focus();
	}, [threadId]);
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.scrollTop = el.scrollHeight;
	}, [
		messages,
		status,
		generating
	]);
	const isBusy = status === "submitted" || status === "streaming" || generating;
	async function handleFiles(files) {
		if (!files || files.length === 0) return;
		const next = [];
		for (const f of Array.from(files)) {
			if (!f.type.startsWith("image/")) {
				toast.error(`${f.name}: only image files are supported`);
				continue;
			}
			if (f.size > 5 * 1024 * 1024) {
				toast.error(`${f.name} is larger than 5MB`);
				continue;
			}
			const dataUrl = await fileToDataUrl(f);
			next.push({
				name: f.name,
				mediaType: f.type,
				url: dataUrl
			});
		}
		if (next.length) setAttachments((prev) => [...prev, ...next]);
	}
	async function generateImage(prompt) {
		setGenerating(true);
		const userId = crypto.randomUUID();
		const placeholderId = crypto.randomUUID();
		setMessages((prev) => [
			...prev,
			{
				id: userId,
				role: "user",
				parts: [{
					type: "text",
					text: prompt
				}]
			},
			{
				id: placeholderId,
				role: "assistant",
				parts: [{
					type: "text",
					text: "Generating image…"
				}]
			}
		]);
		try {
			const { data } = await supabase.auth.getSession();
			const token = data.session?.access_token;
			const res = await fetch("/api/generate-image", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...token ? { Authorization: `Bearer ${token}` } : {}
				},
				body: JSON.stringify({
					conversationId: threadId,
					prompt
				})
			});
			if (!res.ok) {
				const text = await res.text().catch(() => "");
				throw new Error(text || `Image generation failed (${res.status})`);
			}
			const json = await res.json();
			setMessages((prev) => prev.map((m) => m.id === placeholderId ? {
				...m,
				parts: [{
					type: "file",
					mediaType: "image/png",
					url: json.imageUrl
				}]
			} : m));
		} catch (e) {
			const msg = e instanceof Error ? e.message : "Image generation failed";
			toast.error(msg);
			setMessages((prev) => prev.filter((m) => m.id !== placeholderId && m.id !== userId));
		} finally {
			setGenerating(false);
		}
	}
	async function submit() {
		const text = input.trim();
		if (!text || isBusy) return;
		const wasEmpty = messages.length === 0;
		setInput("");
		const currentAttachments = attachments;
		setAttachments([]);
		if (imageMode) {
			await generateImage(text);
			if (wasEmpty) onAfterFirstSend();
			return;
		}
		if (currentAttachments.length > 0) await sendMessage({
			text,
			files: attachmentsToFileList(currentAttachments)
		});
		else await sendMessage({ text });
		if (wasEmpty) onAfterFirstSend();
	}
	function handleSubmit(e) {
		e.preventDefault();
		submit();
	}
	function onKeyDown(e) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			submit();
		}
	}
	const empty = messages.length === 0;
	function getGreeting() {
		const hour = (/* @__PURE__ */ new Date()).getHours();
		if (hour < 12) return "Good morning";
		if (hour < 17) return "Good afternoon";
		return "Good evening";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollRef,
			className: "flex-1 overflow-y-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-3xl px-4 py-8",
				children: [empty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center pt-20 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-surface text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-xl font-semibold",
							children: userName ? `${getGreeting()}, ${userName.split(" ")[0]}! 👋` : "How can I help you today?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: userName ? "I'm Zohaib AI — ask me anything!" : "Ask anything — type below to begin."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid w-full max-w-xl grid-cols-1 gap-2 sm:grid-cols-2",
							children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setInput(s.prompt),
								className: "rounded-lg border border-border bg-surface px-3 py-2.5 text-left text-sm text-muted-foreground hover:bg-surface-2 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-foreground",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-xs",
									children: s.desc
								})]
							}, s.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-6",
					children: [
						messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageView, { message: m }) }, m.id)),
						status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-surface text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] font-semibold",
									children: "Z"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 pt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "zai-dot" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "zai-dot" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "zai-dot" })
								]
							})]
						}) }),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive",
							children: error.message
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background/60 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 py-3",
				children: [
					attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 px-1",
						children: attachments.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative h-16 w-16 overflow-hidden rounded-lg border border-border bg-surface-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: a.url,
								alt: a.name,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setAttachments((prev) => prev.filter((_, idx) => idx !== i)),
								className: "absolute right-0.5 top-0.5 grid h-5 w-5 place-items-center rounded-full bg-background/80 text-foreground opacity-0 transition group-hover:opacity-100",
								"aria-label": `Remove ${a.name}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
							})]
						}, `${a.name}-${i}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end gap-2 rounded-2xl border border-border bg-surface p-2 shadow-sm focus-within:border-ring/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileInputRef,
								type: "file",
								accept: "image/*",
								multiple: true,
								className: "hidden",
								onChange: (e) => {
									handleFiles(e.target.files);
									e.target.value = "";
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => fileInputRef.current?.click(),
								disabled: isBusy || imageMode,
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl text-muted-foreground hover:bg-surface-2 hover:text-foreground disabled:opacity-40",
								"aria-label": "Attach image",
								title: "Attach image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setImageMode((v) => !v),
								disabled: isBusy,
								className: `grid h-9 w-9 shrink-0 place-items-center rounded-xl transition hover:bg-surface-2 disabled:opacity-40 ${imageMode ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`,
								"aria-label": "Generate image",
								title: "Generate image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								ref: textareaRef,
								value: input,
								onChange: (e) => setInput(e.target.value),
								onKeyDown,
								rows: 1,
								placeholder: imageMode ? "Describe an image to generate…" : "Message Zohaib AI…",
								className: "max-h-48 min-h-36px flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground",
								disabled: isBusy
							}),
							isBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => generating ? null : stop(),
								disabled: generating,
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground text-background hover:opacity-90 disabled:opacity-60",
								"aria-label": "Stop",
								children: generating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "h-4 w-4" })
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: !input.trim(),
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-40",
								"aria-label": "Send",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelPicker, {
							value: model,
							disabled: isBusy,
							onChange: (id) => {
								setModel(id);
								onModelChange(id).catch(() => {});
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground",
							children: imageMode ? "Image mode · gpt-image-2" : "Enter to send · Shift+Enter for newline"
						})]
					})
				]
			})
		})]
	});
}
function fileToDataUrl(file) {
	return new Promise((resolve, reject) => {
		const r = new FileReader();
		r.onload = () => resolve(r.result);
		r.onerror = () => reject(r.error);
		r.readAsDataURL(file);
	});
}
function dataUrlToFile(dataUrl, name, mediaType) {
	const [, base64 = ""] = dataUrl.split(",");
	const bin = atob(base64);
	const bytes = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
	return new File([bytes], name, { type: mediaType });
}
function attachmentsToFileList(items) {
	const dt = new DataTransfer();
	for (const a of items) dt.items.add(dataUrlToFile(a.url, a.name, a.mediaType));
	return dt.files;
}
function CopyButton({ text }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			toast.error("Failed to copy");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: handleCopy,
		className: "mt-2 flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-surface-2 hover:text-foreground transition",
		title: "Copy response",
		children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-green-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-green-500",
			children: "Copied!"
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })] })
	});
}
function MessageView({ message }) {
	const isUser = message.role === "user";
	const text = message.parts.map((p) => p.type === "text" ? p.text : "").join("");
	const files = message.parts.filter((p) => p.type === "file" && typeof p.url === "string");
	if (isUser) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-end gap-2",
		children: [files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap justify-end gap-2",
			children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: f.url,
				alt: "attachment",
				className: "max-h-48 max-w-xs rounded-xl border border-border object-cover"
			}, i))
		}), text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[80%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground whitespace-pre-wrap",
			children: text
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-surface text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] font-semibold",
				children: "Z"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 space-y-1",
			children: [files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: f.url,
					target: "_blank",
					rel: "noreferrer",
					className: "block overflow-hidden rounded-xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: f.url,
						alt: "generated",
						className: "max-h-96 max-w-full object-contain"
					})
				}, i))
			}), text && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text })] })]
		})]
	});
}
var SUGGESTIONS = [
	{
		label: "✍️ Write for me",
		desc: "Email, essay, story, or post",
		prompt: "Write a professional email to a client following up on a project"
	},
	{
		label: "💻 Help with code",
		desc: "Debug, explain, or write code",
		prompt: "Help me debug this JavaScript code:"
	},
	{
		label: "🧠 Explain a topic",
		desc: "Make anything easy to understand",
		prompt: "Explain how the internet works in simple terms"
	},
	{
		label: "🌍 Translate text",
		desc: "Any language, instantly",
		prompt: "Translate this to Urdu:"
	}
];
//#endregion
export { ChatThread as component };
