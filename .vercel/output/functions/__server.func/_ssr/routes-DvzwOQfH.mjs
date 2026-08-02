import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { c as Link, u as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as useAuth } from "./ssr.mjs";
import { _ as ArrowRight, b as Layers, l as MessageSquare, v as Sparkles } from "../_libs/lucide-react.mjs";
import { n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { _ as IconChevronUp, a as IconWorld, c as IconVolume2, d as IconPlayerTrackPrev, f as IconPlayerTrackNext, g as IconCommand, h as IconMicrophone, i as IconCaretDownFilled, l as IconTable, m as IconMoon, n as IconCaretRightFilled, o as IconVolume, p as IconPlayerSkipForward, r as IconCaretLeftFilled, s as IconVolume3, t as IconCaretUpFilled, u as IconSearch, v as IconBrightnessUp, y as IconBrightnessDown } from "../_libs/tabler__icons-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DvzwOQfH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var MacbookScroll = ({ src, showGradient, title, badge }) => {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window && window.innerWidth < 768) setIsMobile(true);
	}, []);
	const scaleX = useTransform(scrollYProgress, [0, .3], [1.2, isMobile ? 1 : 1.5]);
	const scaleY = useTransform(scrollYProgress, [0, .3], [.6, isMobile ? 1 : 1.5]);
	const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
	const rotate = useTransform(scrollYProgress, [
		.1,
		.12,
		.3
	], [
		-28,
		-28,
		0
	]);
	const textTransform = useTransform(scrollYProgress, [0, .3], [0, 100]);
	const textOpacity = useTransform(scrollYProgress, [0, .2], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "flex min-h-[200vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				style: {
					translateY: textTransform,
					opacity: textOpacity
				},
				className: "mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white",
				children: title || /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"This Macbook is built with Tailwindcss. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					" No kidding."
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lid, {
				src,
				scaleX,
				scaleY,
				rotate,
				translate
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-10 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto h-full w-[10%] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakerGrid, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto h-full w-[80%]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keypad, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto h-full w-[10%] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakerGrid, {})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trackpad, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" }),
					showGradient && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" }),
					badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-4 left-4",
						children: badge
					})
				]
			})
		]
	});
};
var Lid = ({ scaleX, scaleY, rotate, translate, src }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative [perspective:800px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
				transformOrigin: "bottom",
				transformStyle: "preserve-3d"
			},
			className: "relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { boxShadow: "0px 2px 0px 2px #171717 inset" },
				className: "absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AceternityLogo, {})
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: {
				scaleX,
				scaleY,
				rotateX: rotate,
				translateY: translate,
				transformStyle: "preserve-3d",
				transformOrigin: "top"
			},
			className: "absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-lg bg-[#272729]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "aceternity logo",
				className: "absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
			})]
		})]
	});
};
var Trackpad = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto my-1 h-32 w-[40%] rounded-xl",
		style: { boxShadow: "0px 0px 1px 1px #00000020 inset" }
	});
};
var Keypad = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
						className: "w-10 items-end justify-start pb-[2px] pl-[4px]",
						childrenClassName: "items-start",
						children: "esc"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBrightnessDown, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F1"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBrightnessUp, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTable, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F3"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSearch, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F4"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMicrophone, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F5"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMoon, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F6"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPlayerTrackPrev, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F7"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPlayerSkipForward, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F8"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPlayerTrackNext, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F8"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconVolume3, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F10"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconVolume2, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F11"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconVolume, { className: "h-[6px] w-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block",
						children: "F12"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-full bg-black" })
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "~"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block",
						children: "`"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "1"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "@"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "#"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "3"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "$"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "4"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "%"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "5"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "^"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "6"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "&"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "7"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "*"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "8"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "("
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "9"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: ")"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "0"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "—"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "_"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: " = "
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
						className: "w-10 items-end justify-end pr-[4px] pb-[2px]",
						childrenClassName: "items-end",
						children: "delete"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
						className: "w-10 items-end justify-start pb-[2px] pl-[4px]",
						childrenClassName: "items-start",
						children: "tab"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "Q"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "W"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "E"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "R"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "T"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "Y"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "U"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "I"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "O"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "P"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `{`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `[`
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `]`
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `|`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `\\`
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
						className: "w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]",
						childrenClassName: "items-start",
						children: "caps lock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "A"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "S"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "D"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "F"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "G"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "H"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "J"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "K"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "L"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `:`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `;`
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `"`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `'`
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
						className: "w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]",
						childrenClassName: "items-end",
						children: "return"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
						className: "w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]",
						childrenClassName: "items-start",
						children: "shift"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "Z"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "X"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "C"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "V"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "B"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "N"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "M"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `<`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `,`
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `>`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `.`
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `?`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: `/`
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
						className: "w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]",
						childrenClassName: "items-end",
						children: "shift"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, {
						className: "",
						childrenClassName: "h-full justify-between py-[4px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-end pr-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "fn"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-start pl-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWorld, { className: "h-[6px] w-[6px]" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, {
						className: "",
						childrenClassName: "h-full justify-between py-[4px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-end pr-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChevronUp, { className: "h-[6px] w-[6px]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-start pl-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "control"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, {
						className: "",
						childrenClassName: "h-full justify-between py-[4px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-end pr-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionKey, { className: "h-[6px] w-[6px]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-start pl-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "option"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, {
						className: "w-8",
						childrenClassName: "h-full justify-between py-[4px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-end pr-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCommand, { className: "h-[6px] w-[6px]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-start pl-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "command"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, { className: "w-[8.2rem]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, {
						className: "w-8",
						childrenClassName: "h-full justify-between py-[4px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-start pl-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCommand, { className: "h-[6px] w-[6px]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-start pl-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "command"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KBtn, {
						className: "",
						childrenClassName: "h-full justify-between py-[4px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-start pl-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionKey, { className: "h-[6px] w-[6px]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full justify-start pl-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "option"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
							className: "h-3 w-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCaretUpFilled, { className: "h-[6px] w-[6px]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
									className: "h-3 w-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCaretLeftFilled, { className: "h-[6px] w-[6px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
									className: "h-3 w-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCaretDownFilled, { className: "h-[6px] w-[6px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KBtn, {
									className: "h-3 w-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCaretRightFilled, { className: "h-[6px] w-[6px]" })
								})
							]
						})]
					})
				]
			})
		]
	});
};
var KBtn = ({ className, children, childrenClassName, backlit = true }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]", backlit && "bg-white/[0.2] shadow-xl shadow-white"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]", className),
			style: { boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flex w-full flex-col items-center justify-center text-[5px] text-neutral-200", childrenClassName, backlit && "text-white"),
				children
			})
		})
	});
};
var SpeakerGrid = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 flex h-40 gap-[2px] px-[0.5px]",
		style: {
			backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
			backgroundSize: "3px 3px"
		}
	});
};
var OptionKey = ({ className }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		fill: "none",
		version: "1.1",
		id: "icon",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				stroke: "currentColor",
				strokeWidth: 2,
				x: "18",
				y: "5",
				width: "10",
				height: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				stroke: "currentColor",
				strokeWidth: 2,
				points: "10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				id: "_Transparent_Rectangle_",
				className: "st0",
				width: "32",
				height: "32",
				stroke: "none"
			})
		]
	});
};
var AceternityLogo = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "66",
		height: "65",
		viewBox: "0 0 66 65",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: "h-3 w-3 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696",
			stroke: "currentColor",
			strokeWidth: "15",
			strokeMiterlimit: "3.86874",
			strokeLinecap: "round"
		})
	});
};
function MacbookScrollDemo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full overflow-hidden bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacbookScroll, {
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Zohaib AI. ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				" Every model. One quiet workspace."
			] }),
			badge: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { className: "h-10 w-10 -rotate-12 transform" }),
			src: "/linear.webp",
			showGradient: false
		})
	});
}
var Badge = ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	className,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
			fill: "#F5B544"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z",
			fill: "#C8902E"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "50%",
			y: "54%",
			textAnchor: "middle",
			dominantBaseline: "middle",
			fontSize: "28",
			fontWeight: "700",
			fontFamily: "ui-sans-serif, system-ui",
			fill: "#0B0B0F",
			children: "Z"
		})
	]
});
function Landing() {
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!loading && user) navigate({ to: "/chat" });
	}, [
		user,
		loading,
		navigate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 -z-10",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm font-semibold",
							children: "Z"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-sm font-medium tracking-tight",
						children: "Zohaib AI"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex shrink-0 items-center gap-1 sm:gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						className: "rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground sm:px-3",
						children: "Sign in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						search: { mode: "signup" },
						className: "rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Get started"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-12 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-primary" }), "Multi-model AI workspace"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl",
						children: [
							"One quiet workspace for",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "every AI model"
							}),
							" you actually use."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-pretty text-sm text-muted-foreground sm:mt-6 sm:text-base md:text-lg",
						children: "Zohaib AI brings GPT-5, Gemini and more under a single, focused, dark interface. Switch models mid-thread, keep your full history, ship faster."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth",
							search: { mode: "signup" },
							className: "group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90",
							style: { boxShadow: "var(--shadow-glow)" },
							children: ["Start chatting free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-surface-2",
							children: "Sign in"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid w-full grid-cols-1 gap-4 text-left sm:mt-24 sm:grid-cols-2 md:grid-cols-3",
						children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 grid h-9 w-9 place-items-center rounded-md bg-surface-2 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: f.body
								})
							]
						}, f.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacbookScrollDemo, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mx-auto w-full max-w-6xl px-6 pb-8 text-center text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Zohaib AI"
				]
			})
		]
	});
}
var features = [
	{
		icon: Layers,
		title: "Multi-model, one thread",
		body: "Swap between GPT-5, Gemini 2.5 Pro, and other frontier models without losing context."
	},
	{
		icon: MessageSquare,
		title: "Persistent history",
		body: "Every conversation is saved, searchable, and yours. Pick up exactly where you left off."
	},
	{
		icon: Sparkles,
		title: "Built for focus",
		body: "A calm, dark, keyboard-first interface designed to disappear so your thinking can lead."
	}
];
//#endregion
export { Landing as component };
