import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "./@ai-sdk/react+[...].mjs";
//#region node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	outline: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	},
	filled: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		stroke: "none"
	}
};
//#endregion
//#region node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var createReactComponent = (type, iconName, iconNamePascal, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref) => (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes[type],
		width: size,
		height: size,
		className: [
			`tabler-icon`,
			`tabler-icon-${iconName}`,
			className
		].join(" "),
		...type === "filled" ? { fill: color } : {
			strokeWidth: stroke,
			stroke: color
		},
		...rest
	}, [
		title && (0, import_react.createElement)("title", { key: "svg-title" }, title),
		...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
		...Array.isArray(children) ? children : [children]
	]));
	Component.displayName = `${iconNamePascal}`;
	return Component;
};
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconBrightnessDown = createReactComponent("outline", "brightness-down", "BrightnessDown", [
	["path", {
		"d": "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
		"key": "svg-0"
	}],
	["path", {
		"d": "M12 5l0 .01",
		"key": "svg-1"
	}],
	["path", {
		"d": "M17 7l0 .01",
		"key": "svg-2"
	}],
	["path", {
		"d": "M19 12l0 .01",
		"key": "svg-3"
	}],
	["path", {
		"d": "M17 17l0 .01",
		"key": "svg-4"
	}],
	["path", {
		"d": "M12 19l0 .01",
		"key": "svg-5"
	}],
	["path", {
		"d": "M7 17l0 .01",
		"key": "svg-6"
	}],
	["path", {
		"d": "M5 12l0 .01",
		"key": "svg-7"
	}],
	["path", {
		"d": "M7 7l0 .01",
		"key": "svg-8"
	}]
]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconBrightnessUp = createReactComponent("outline", "brightness-up", "BrightnessUp", [
	["path", {
		"d": "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
		"key": "svg-0"
	}],
	["path", {
		"d": "M12 5l0 -2",
		"key": "svg-1"
	}],
	["path", {
		"d": "M17 7l1.4 -1.4",
		"key": "svg-2"
	}],
	["path", {
		"d": "M19 12l2 0",
		"key": "svg-3"
	}],
	["path", {
		"d": "M17 17l1.4 1.4",
		"key": "svg-4"
	}],
	["path", {
		"d": "M12 19l0 2",
		"key": "svg-5"
	}],
	["path", {
		"d": "M7 17l-1.4 1.4",
		"key": "svg-6"
	}],
	["path", {
		"d": "M6 12l-2 0",
		"key": "svg-7"
	}],
	["path", {
		"d": "M7 7l-1.4 -1.4",
		"key": "svg-8"
	}]
]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconChevronUp = createReactComponent("outline", "chevron-up", "ChevronUp", [["path", {
	"d": "M6 15l6 -6l6 6",
	"key": "svg-0"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconCommand = createReactComponent("outline", "command", "Command", [["path", {
	"d": "M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10",
	"key": "svg-0"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconMicrophone = createReactComponent("outline", "microphone", "Microphone", [
	["path", {
		"d": "M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5",
		"key": "svg-0"
	}],
	["path", {
		"d": "M5 10a7 7 0 0 0 14 0",
		"key": "svg-1"
	}],
	["path", {
		"d": "M8 21l8 0",
		"key": "svg-2"
	}],
	["path", {
		"d": "M12 17l0 4",
		"key": "svg-3"
	}]
]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconMoon = createReactComponent("outline", "moon", "Moon", [["path", {
	"d": "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008",
	"key": "svg-0"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconPlayerSkipForward = createReactComponent("outline", "player-skip-forward", "PlayerSkipForward", [["path", {
	"d": "M4 5v14l12 -7l-12 -7",
	"key": "svg-0"
}], ["path", {
	"d": "M20 5l0 14",
	"key": "svg-1"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconPlayerTrackNext = createReactComponent("outline", "player-track-next", "PlayerTrackNext", [["path", {
	"d": "M3 5v14l8 -7l-8 -7",
	"key": "svg-0"
}], ["path", {
	"d": "M14 5v14l8 -7l-8 -7",
	"key": "svg-1"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconPlayerTrackPrev = createReactComponent("outline", "player-track-prev", "PlayerTrackPrev", [["path", {
	"d": "M21 5v14l-8 -7l8 -7",
	"key": "svg-0"
}], ["path", {
	"d": "M10 5v14l-8 -7l8 -7",
	"key": "svg-1"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconSearch = createReactComponent("outline", "search", "Search", [["path", {
	"d": "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
	"key": "svg-0"
}], ["path", {
	"d": "M21 21l-6 -6",
	"key": "svg-1"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconTable = createReactComponent("outline", "table", "Table", [
	["path", {
		"d": "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14",
		"key": "svg-0"
	}],
	["path", {
		"d": "M3 10h18",
		"key": "svg-1"
	}],
	["path", {
		"d": "M10 3v18",
		"key": "svg-2"
	}]
]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconVolume2 = createReactComponent("outline", "volume-2", "Volume2", [["path", {
	"d": "M15 8a5 5 0 0 1 0 8",
	"key": "svg-0"
}], ["path", {
	"d": "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
	"key": "svg-1"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconVolume3 = createReactComponent("outline", "volume-3", "Volume3", [["path", {
	"d": "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
	"key": "svg-0"
}], ["path", {
	"d": "M16 10l4 4m0 -4l-4 4",
	"key": "svg-1"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconVolume = createReactComponent("outline", "volume", "Volume", [
	["path", {
		"d": "M15 8a5 5 0 0 1 0 8",
		"key": "svg-0"
	}],
	["path", {
		"d": "M17.7 5a9 9 0 0 1 0 14",
		"key": "svg-1"
	}],
	["path", {
		"d": "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
		"key": "svg-2"
	}]
]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconWorld = createReactComponent("outline", "world", "World", [
	["path", {
		"d": "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
		"key": "svg-0"
	}],
	["path", {
		"d": "M3.6 9h16.8",
		"key": "svg-1"
	}],
	["path", {
		"d": "M3.6 15h16.8",
		"key": "svg-2"
	}],
	["path", {
		"d": "M11.5 3a17 17 0 0 0 0 18",
		"key": "svg-3"
	}],
	["path", {
		"d": "M12.5 3a17 17 0 0 1 0 18",
		"key": "svg-4"
	}]
]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconCaretDownFilled = createReactComponent("filled", "caret-down-filled", "CaretDownFilled", [["path", {
	"d": "M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z",
	"key": "svg-0"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconCaretLeftFilled = createReactComponent("filled", "caret-left-filled", "CaretLeftFilled", [["path", {
	"d": "M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z",
	"key": "svg-0"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconCaretRightFilled = createReactComponent("filled", "caret-right-filled", "CaretRightFilled", [["path", {
	"d": "M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z",
	"key": "svg-0"
}]]);
/**
* @license @tabler/icons-react v3.44.0 - MIT
*
* This source code is licensed under the MIT license.
* See the LICENSE file in the root directory of this source tree.
*/
var IconCaretUpFilled = createReactComponent("filled", "caret-up-filled", "CaretUpFilled", [["path", {
	"d": "M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z",
	"key": "svg-0"
}]]);
//#endregion
export { IconChevronUp as _, IconWorld as a, IconVolume2 as c, IconPlayerTrackPrev as d, IconPlayerTrackNext as f, IconCommand as g, IconMicrophone as h, IconCaretDownFilled as i, IconTable as l, IconMoon as m, IconCaretRightFilled as n, IconVolume as o, IconPlayerSkipForward as p, IconCaretLeftFilled as r, IconVolume3 as s, IconCaretUpFilled as t, IconSearch as u, IconBrightnessUp as v, IconBrightnessDown as y };
