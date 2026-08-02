import { o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { $ as lazy, G as _enum, K as _instanceof, Q as discriminatedUnion, X as boolean, Y as array$1, Z as custom, at as record, ct as union, et as literal, ft as AISDKError, it as object$1, lt as unknown, nt as never, ot as strictObject, q as _null, rt as number, st as string, yt as TypeValidationError } from "./gateway+[...].mjs";
import { a as createIdGenerator, d as parseJsonEventStream, g as validateTypes, h as safeValidateTypes, l as lazySchema, m as safeParseJSON, p as resolve, r as asSchema, s as generateId, u as normalizeHeaders, v as zodSchema } from "../ai-sdk__provider-utils.mjs";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, assign = Object.assign, emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	}, hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	}, Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/version.js
var require_version = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VERSION = void 0;
	exports.VERSION = "1.9.1";
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/internal/semver.js
var require_semver = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isCompatible = exports._makeCompatibilityCheck = void 0;
	var version_1 = require_version();
	var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
	/**
	* Create a function to test an API version to see if it is compatible with the provided ownVersion.
	*
	* The returned function has the following semantics:
	* - Exact match is always compatible
	* - Major versions must match exactly
	*    - 1.x package cannot use global 2.x package
	*    - 2.x package cannot use global 1.x package
	* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
	*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
	*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
	* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
	* - Patch and build tag differences are not considered at this time
	*
	* @param ownVersion version which should be checked against
	*/
	function _makeCompatibilityCheck(ownVersion) {
		const acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
		const rejectedVersions = /* @__PURE__ */ new Set();
		const myVersionMatch = ownVersion.match(re);
		if (!myVersionMatch) return () => false;
		const ownVersionParsed = {
			major: +myVersionMatch[1],
			minor: +myVersionMatch[2],
			patch: +myVersionMatch[3],
			prerelease: myVersionMatch[4]
		};
		if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
			return globalVersion === ownVersion;
		};
		function _reject(v) {
			rejectedVersions.add(v);
			return false;
		}
		function _accept(v) {
			acceptedVersions.add(v);
			return true;
		}
		return function isCompatible(globalVersion) {
			if (acceptedVersions.has(globalVersion)) return true;
			if (rejectedVersions.has(globalVersion)) return false;
			const globalVersionMatch = globalVersion.match(re);
			if (!globalVersionMatch) return _reject(globalVersion);
			const globalVersionParsed = {
				major: +globalVersionMatch[1],
				minor: +globalVersionMatch[2],
				patch: +globalVersionMatch[3],
				prerelease: globalVersionMatch[4]
			};
			if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
			if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
			if (ownVersionParsed.major === 0) {
				if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
				return _reject(globalVersion);
			}
			if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
			return _reject(globalVersion);
		};
	}
	exports._makeCompatibilityCheck = _makeCompatibilityCheck;
	/**
	* Test an API version to see if it is compatible with this API.
	*
	* - Exact match is always compatible
	* - Major versions must match exactly
	*    - 1.x package cannot use global 2.x package
	*    - 2.x package cannot use global 1.x package
	* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
	*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
	*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
	* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
	* - Patch and build tag differences are not considered at this time
	*
	* @param version version of the API requesting an instance of the global API
	*/
	exports.isCompatible = _makeCompatibilityCheck(version_1.VERSION);
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/internal/global-utils.js
var require_global_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.unregisterGlobal = exports.getGlobal = exports.registerGlobal = void 0;
	var version_1 = require_version();
	var semver_1 = require_semver();
	var major = version_1.VERSION.split(".")[0];
	var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for(`opentelemetry.js.api.${major}`);
	var _global = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
	function registerGlobal(type, instance, diag, allowOverride = false) {
		var _a;
		const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : { version: version_1.VERSION };
		if (!allowOverride && api[type]) {
			const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
			diag.error(err.stack || err.message);
			return false;
		}
		if (api.version !== version_1.VERSION) {
			const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${version_1.VERSION}`);
			diag.error(err.stack || err.message);
			return false;
		}
		api[type] = instance;
		diag.debug(`@opentelemetry/api: Registered a global for ${type} v${version_1.VERSION}.`);
		return true;
	}
	exports.registerGlobal = registerGlobal;
	function getGlobal(type) {
		var _a, _b;
		const globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
		if (!globalVersion || !(0, semver_1.isCompatible)(globalVersion)) return;
		return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
	}
	exports.getGlobal = getGlobal;
	function unregisterGlobal(type, diag) {
		diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${version_1.VERSION}.`);
		const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
		if (api) delete api[type];
	}
	exports.unregisterGlobal = unregisterGlobal;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag/ComponentLogger.js
var require_ComponentLogger = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagComponentLogger = void 0;
	var global_utils_1 = require_global_utils();
	/**
	* Component Logger which is meant to be used as part of any component which
	* will add automatically additional namespace in front of the log message.
	* It will then forward all message to global diag logger
	* @example
	* const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
	* cLogger.debug('test');
	* // @opentelemetry/instrumentation-http test
	*/
	var DiagComponentLogger = class {
		constructor(props) {
			this._namespace = props.namespace || "DiagComponentLogger";
		}
		debug(...args) {
			return logProxy("debug", this._namespace, args);
		}
		error(...args) {
			return logProxy("error", this._namespace, args);
		}
		info(...args) {
			return logProxy("info", this._namespace, args);
		}
		warn(...args) {
			return logProxy("warn", this._namespace, args);
		}
		verbose(...args) {
			return logProxy("verbose", this._namespace, args);
		}
	};
	exports.DiagComponentLogger = DiagComponentLogger;
	function logProxy(funcName, namespace, args) {
		const logger = (0, global_utils_1.getGlobal)("diag");
		if (!logger) return;
		return logger[funcName](namespace, ...args);
	}
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag/types.js
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagLogLevel = void 0;
	(function(DiagLogLevel) {
		/** Diagnostic Logging level setting to disable all logging (except and forced logs) */
		DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
		/** Identifies an error scenario */
		DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
		/** Identifies a warning scenario */
		DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
		/** General informational log message */
		DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
		/** General debug log message */
		DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
		/**
		* Detailed trace level logging should only be used for development, should only be set
		* in a development environment.
		*/
		DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
		/** Used to set the logging level to include all logging */
		DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
	})(exports.DiagLogLevel || (exports.DiagLogLevel = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag/internal/logLevelLogger.js
var require_logLevelLogger = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createLogLevelDiagLogger = void 0;
	var types_1 = require_types();
	function createLogLevelDiagLogger(maxLevel, logger) {
		if (maxLevel < types_1.DiagLogLevel.NONE) maxLevel = types_1.DiagLogLevel.NONE;
		else if (maxLevel > types_1.DiagLogLevel.ALL) maxLevel = types_1.DiagLogLevel.ALL;
		logger = logger || {};
		function _filterFunc(funcName, theLevel) {
			const theFunc = logger[funcName];
			if (typeof theFunc === "function" && maxLevel >= theLevel) return theFunc.bind(logger);
			return function() {};
		}
		return {
			error: _filterFunc("error", types_1.DiagLogLevel.ERROR),
			warn: _filterFunc("warn", types_1.DiagLogLevel.WARN),
			info: _filterFunc("info", types_1.DiagLogLevel.INFO),
			debug: _filterFunc("debug", types_1.DiagLogLevel.DEBUG),
			verbose: _filterFunc("verbose", types_1.DiagLogLevel.VERBOSE)
		};
	}
	exports.createLogLevelDiagLogger = createLogLevelDiagLogger;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/diag.js
var require_diag = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagAPI = void 0;
	var ComponentLogger_1 = require_ComponentLogger();
	var logLevelLogger_1 = require_logLevelLogger();
	var types_1 = require_types();
	var global_utils_1 = require_global_utils();
	var API_NAME = "diag";
	exports.DiagAPI = class DiagAPI {
		/** Get the singleton instance of the DiagAPI API */
		static instance() {
			if (!this._instance) this._instance = new DiagAPI();
			return this._instance;
		}
		/**
		* Private internal constructor
		* @private
		*/
		constructor() {
			function _logProxy(funcName) {
				return function(...args) {
					const logger = (0, global_utils_1.getGlobal)("diag");
					if (!logger) return;
					return logger[funcName](...args);
				};
			}
			const self = this;
			const setLogger = (logger, optionsOrLogLevel = { logLevel: types_1.DiagLogLevel.INFO }) => {
				var _a, _b, _c;
				if (logger === self) {
					const err = /* @__PURE__ */ new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
					self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
					return false;
				}
				if (typeof optionsOrLogLevel === "number") optionsOrLogLevel = { logLevel: optionsOrLogLevel };
				const oldLogger = (0, global_utils_1.getGlobal)("diag");
				const newLogger = (0, logLevelLogger_1.createLogLevelDiagLogger)((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : types_1.DiagLogLevel.INFO, logger);
				if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
					const stack = (_c = (/* @__PURE__ */ new Error()).stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
					oldLogger.warn(`Current logger will be overwritten from ${stack}`);
					newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
				}
				return (0, global_utils_1.registerGlobal)("diag", newLogger, self, true);
			};
			self.setLogger = setLogger;
			self.disable = () => {
				(0, global_utils_1.unregisterGlobal)(API_NAME, self);
			};
			self.createComponentLogger = (options) => {
				return new ComponentLogger_1.DiagComponentLogger(options);
			};
			self.verbose = _logProxy("verbose");
			self.debug = _logProxy("debug");
			self.info = _logProxy("info");
			self.warn = _logProxy("warn");
			self.error = _logProxy("error");
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/baggage/internal/baggage-impl.js
var require_baggage_impl = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BaggageImpl = void 0;
	exports.BaggageImpl = class BaggageImpl {
		constructor(entries) {
			this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
		}
		getEntry(key) {
			const entry = this._entries.get(key);
			if (!entry) return;
			return Object.assign({}, entry);
		}
		getAllEntries() {
			return Array.from(this._entries.entries());
		}
		setEntry(key, entry) {
			const newBaggage = new BaggageImpl(this._entries);
			newBaggage._entries.set(key, entry);
			return newBaggage;
		}
		removeEntry(key) {
			const newBaggage = new BaggageImpl(this._entries);
			newBaggage._entries.delete(key);
			return newBaggage;
		}
		removeEntries(...keys) {
			const newBaggage = new BaggageImpl(this._entries);
			for (const key of keys) newBaggage._entries.delete(key);
			return newBaggage;
		}
		clear() {
			return new BaggageImpl();
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/baggage/internal/symbol.js
var require_symbol = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.baggageEntryMetadataSymbol = void 0;
	/**
	* Symbol used to make BaggageEntryMetadata an opaque type
	*/
	exports.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/baggage/utils.js
var require_utils$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.baggageEntryMetadataFromString = exports.createBaggage = void 0;
	var diag_1 = require_diag();
	var baggage_impl_1 = require_baggage_impl();
	var symbol_1 = require_symbol();
	var diag = diag_1.DiagAPI.instance();
	/**
	* Create a new Baggage with optional entries
	*
	* @param entries An array of baggage entries the new baggage should contain
	*/
	function createBaggage(entries = {}) {
		return new baggage_impl_1.BaggageImpl(new Map(Object.entries(entries)));
	}
	exports.createBaggage = createBaggage;
	/**
	* Create a serializable BaggageEntryMetadata object from a string.
	*
	* @param str string metadata. Format is currently not defined by the spec and has no special meaning.
	*
	* @since 1.0.0
	*/
	function baggageEntryMetadataFromString(str) {
		if (typeof str !== "string") {
			diag.error(`Cannot create baggage metadata from unknown type: ${typeof str}`);
			str = "";
		}
		return {
			__TYPE__: symbol_1.baggageEntryMetadataSymbol,
			toString() {
				return str;
			}
		};
	}
	exports.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/context/context.js
var require_context$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ROOT_CONTEXT = exports.createContextKey = void 0;
	/**
	* Get a key to uniquely identify a context value
	*
	* @since 1.0.0
	*/
	function createContextKey(description) {
		return Symbol.for(description);
	}
	exports.createContextKey = createContextKey;
	/**
	* The root context is used as the default parent context when there is no active context
	*
	* @since 1.0.0
	*/
	exports.ROOT_CONTEXT = new class BaseContext {
		/**
		* Construct a new context which inherits values from an optional parent context.
		*
		* @param parentContext a context from which to inherit values
		*/
		constructor(parentContext) {
			const self = this;
			self._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
			self.getValue = (key) => self._currentContext.get(key);
			self.setValue = (key, value) => {
				const context = new BaseContext(self._currentContext);
				context._currentContext.set(key, value);
				return context;
			};
			self.deleteValue = (key) => {
				const context = new BaseContext(self._currentContext);
				context._currentContext.delete(key);
				return context;
			};
		}
	}();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag/consoleLogger.js
var require_consoleLogger = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagConsoleLogger = exports._originalConsoleMethods = void 0;
	var consoleMap = [
		{
			n: "error",
			c: "error"
		},
		{
			n: "warn",
			c: "warn"
		},
		{
			n: "info",
			c: "info"
		},
		{
			n: "debug",
			c: "debug"
		},
		{
			n: "verbose",
			c: "trace"
		}
	];
	exports._originalConsoleMethods = {};
	if (typeof console !== "undefined") {
		for (const key of [
			"error",
			"warn",
			"info",
			"debug",
			"trace",
			"log"
		]) if (typeof console[key] === "function") exports._originalConsoleMethods[key] = console[key];
	}
	/**
	* A simple Immutable Console based diagnostic logger which will output any messages to the Console.
	* If you want to limit the amount of logging to a specific level or lower use the
	* {@link createLogLevelDiagLogger}
	*
	* @since 1.0.0
	*/
	var DiagConsoleLogger = class {
		constructor() {
			function _consoleFunc(funcName) {
				return function(...args) {
					let theFunc = exports._originalConsoleMethods[funcName];
					if (typeof theFunc !== "function") theFunc = exports._originalConsoleMethods["log"];
					if (typeof theFunc !== "function" && console) {
						theFunc = console[funcName];
						if (typeof theFunc !== "function") theFunc = console.log;
					}
					if (typeof theFunc === "function") return theFunc.apply(console, args);
				};
			}
			for (let i = 0; i < consoleMap.length; i++) this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
		}
	};
	exports.DiagConsoleLogger = DiagConsoleLogger;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/metrics/NoopMeter.js
var require_NoopMeter = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createNoopMeter = exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = exports.NOOP_OBSERVABLE_GAUGE_METRIC = exports.NOOP_OBSERVABLE_COUNTER_METRIC = exports.NOOP_UP_DOWN_COUNTER_METRIC = exports.NOOP_HISTOGRAM_METRIC = exports.NOOP_GAUGE_METRIC = exports.NOOP_COUNTER_METRIC = exports.NOOP_METER = exports.NoopObservableUpDownCounterMetric = exports.NoopObservableGaugeMetric = exports.NoopObservableCounterMetric = exports.NoopObservableMetric = exports.NoopHistogramMetric = exports.NoopGaugeMetric = exports.NoopUpDownCounterMetric = exports.NoopCounterMetric = exports.NoopMetric = exports.NoopMeter = void 0;
	/**
	* NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
	* constant NoopMetrics for all of its methods.
	*/
	var NoopMeter = class {
		constructor() {}
		/**
		* @see {@link Meter.createGauge}
		*/
		createGauge(_name, _options) {
			return exports.NOOP_GAUGE_METRIC;
		}
		/**
		* @see {@link Meter.createHistogram}
		*/
		createHistogram(_name, _options) {
			return exports.NOOP_HISTOGRAM_METRIC;
		}
		/**
		* @see {@link Meter.createCounter}
		*/
		createCounter(_name, _options) {
			return exports.NOOP_COUNTER_METRIC;
		}
		/**
		* @see {@link Meter.createUpDownCounter}
		*/
		createUpDownCounter(_name, _options) {
			return exports.NOOP_UP_DOWN_COUNTER_METRIC;
		}
		/**
		* @see {@link Meter.createObservableGauge}
		*/
		createObservableGauge(_name, _options) {
			return exports.NOOP_OBSERVABLE_GAUGE_METRIC;
		}
		/**
		* @see {@link Meter.createObservableCounter}
		*/
		createObservableCounter(_name, _options) {
			return exports.NOOP_OBSERVABLE_COUNTER_METRIC;
		}
		/**
		* @see {@link Meter.createObservableUpDownCounter}
		*/
		createObservableUpDownCounter(_name, _options) {
			return exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
		}
		/**
		* @see {@link Meter.addBatchObservableCallback}
		*/
		addBatchObservableCallback(_callback, _observables) {}
		/**
		* @see {@link Meter.removeBatchObservableCallback}
		*/
		removeBatchObservableCallback(_callback) {}
	};
	exports.NoopMeter = NoopMeter;
	var NoopMetric = class {};
	exports.NoopMetric = NoopMetric;
	var NoopCounterMetric = class extends NoopMetric {
		add(_value, _attributes) {}
	};
	exports.NoopCounterMetric = NoopCounterMetric;
	var NoopUpDownCounterMetric = class extends NoopMetric {
		add(_value, _attributes) {}
	};
	exports.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
	var NoopGaugeMetric = class extends NoopMetric {
		record(_value, _attributes) {}
	};
	exports.NoopGaugeMetric = NoopGaugeMetric;
	var NoopHistogramMetric = class extends NoopMetric {
		record(_value, _attributes) {}
	};
	exports.NoopHistogramMetric = NoopHistogramMetric;
	var NoopObservableMetric = class {
		addCallback(_callback) {}
		removeCallback(_callback) {}
	};
	exports.NoopObservableMetric = NoopObservableMetric;
	var NoopObservableCounterMetric = class extends NoopObservableMetric {};
	exports.NoopObservableCounterMetric = NoopObservableCounterMetric;
	var NoopObservableGaugeMetric = class extends NoopObservableMetric {};
	exports.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
	var NoopObservableUpDownCounterMetric = class extends NoopObservableMetric {};
	exports.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
	exports.NOOP_METER = new NoopMeter();
	exports.NOOP_COUNTER_METRIC = new NoopCounterMetric();
	exports.NOOP_GAUGE_METRIC = new NoopGaugeMetric();
	exports.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
	exports.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
	exports.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
	exports.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
	exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
	/**
	* Create a no-op Meter
	*
	* @since 1.3.0
	*/
	function createNoopMeter() {
		return exports.NOOP_METER;
	}
	exports.createNoopMeter = createNoopMeter;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/metrics/Metric.js
var require_Metric = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ValueType = void 0;
	(function(ValueType) {
		ValueType[ValueType["INT"] = 0] = "INT";
		ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
	})(exports.ValueType || (exports.ValueType = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/propagation/TextMapPropagator.js
var require_TextMapPropagator = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.defaultTextMapSetter = exports.defaultTextMapGetter = void 0;
	/**
	* @since 1.0.0
	*/
	exports.defaultTextMapGetter = {
		get(carrier, key) {
			if (carrier == null) return;
			return carrier[key];
		},
		keys(carrier) {
			if (carrier == null) return [];
			return Object.keys(carrier);
		}
	};
	/**
	* @since 1.0.0
	*/
	exports.defaultTextMapSetter = { set(carrier, key, value) {
		if (carrier == null) return;
		carrier[key] = value;
	} };
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js
var require_NoopContextManager = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopContextManager = void 0;
	var context_1 = require_context$1();
	var NoopContextManager = class {
		active() {
			return context_1.ROOT_CONTEXT;
		}
		with(_context, fn, thisArg, ...args) {
			return fn.call(thisArg, ...args);
		}
		bind(_context, target) {
			return target;
		}
		enable() {
			return this;
		}
		disable() {
			return this;
		}
	};
	exports.NoopContextManager = NoopContextManager;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/context.js
var require_context = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContextAPI = void 0;
	var NoopContextManager_1 = require_NoopContextManager();
	var global_utils_1 = require_global_utils();
	var diag_1 = require_diag();
	var API_NAME = "context";
	var NOOP_CONTEXT_MANAGER = new NoopContextManager_1.NoopContextManager();
	exports.ContextAPI = class ContextAPI {
		/** Empty private constructor prevents end users from constructing a new instance of the API */
		constructor() {}
		/** Get the singleton instance of the Context API */
		static getInstance() {
			if (!this._instance) this._instance = new ContextAPI();
			return this._instance;
		}
		/**
		* Set the current context manager.
		*
		* @returns true if the context manager was successfully registered, else false
		*/
		setGlobalContextManager(contextManager) {
			return (0, global_utils_1.registerGlobal)(API_NAME, contextManager, diag_1.DiagAPI.instance());
		}
		/**
		* Get the currently active context
		*/
		active() {
			return this._getContextManager().active();
		}
		/**
		* Execute a function with an active context
		*
		* @param context context to be active during function execution
		* @param fn function to execute in a context
		* @param thisArg optional receiver to be used for calling fn
		* @param args optional arguments forwarded to fn
		*/
		with(context, fn, thisArg, ...args) {
			return this._getContextManager().with(context, fn, thisArg, ...args);
		}
		/**
		* Bind a context to a target function or event emitter
		*
		* @param context context to bind to the event emitter or function. Defaults to the currently active context
		* @param target function or event emitter to bind
		*/
		bind(context, target) {
			return this._getContextManager().bind(context, target);
		}
		_getContextManager() {
			return (0, global_utils_1.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
		}
		/** Disable and remove the global context manager */
		disable() {
			this._getContextManager().disable();
			(0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/trace_flags.js
var require_trace_flags = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TraceFlags = void 0;
	(function(TraceFlags) {
		/** Represents no flag set. */
		TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
		/** Bit to represent whether trace is sampled in trace flags. */
		TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
	})(exports.TraceFlags || (exports.TraceFlags = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/invalid-span-constants.js
var require_invalid_span_constants = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = void 0;
	var trace_flags_1 = require_trace_flags();
	/**
	* @since 1.0.0
	*/
	exports.INVALID_SPANID = "0000000000000000";
	/**
	* @since 1.0.0
	*/
	exports.INVALID_TRACEID = "00000000000000000000000000000000";
	/**
	* @since 1.0.0
	*/
	exports.INVALID_SPAN_CONTEXT = {
		traceId: exports.INVALID_TRACEID,
		spanId: exports.INVALID_SPANID,
		traceFlags: trace_flags_1.TraceFlags.NONE
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/NonRecordingSpan.js
var require_NonRecordingSpan = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NonRecordingSpan = void 0;
	var invalid_span_constants_1 = require_invalid_span_constants();
	/**
	* The NonRecordingSpan is the default {@link Span} that is used when no Span
	* implementation is available. All operations are no-op including context
	* propagation.
	*/
	var NonRecordingSpan = class {
		constructor(spanContext = invalid_span_constants_1.INVALID_SPAN_CONTEXT) {
			this._spanContext = spanContext;
		}
		spanContext() {
			return this._spanContext;
		}
		setAttribute(_key, _value) {
			return this;
		}
		setAttributes(_attributes) {
			return this;
		}
		addEvent(_name, _attributes) {
			return this;
		}
		addLink(_link) {
			return this;
		}
		addLinks(_links) {
			return this;
		}
		setStatus(_status) {
			return this;
		}
		updateName(_name) {
			return this;
		}
		end(_endTime) {}
		isRecording() {
			return false;
		}
		recordException(_exception, _time) {}
	};
	exports.NonRecordingSpan = NonRecordingSpan;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/context-utils.js
var require_context_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getSpanContext = exports.setSpanContext = exports.deleteSpan = exports.setSpan = exports.getActiveSpan = exports.getSpan = void 0;
	var context_1 = require_context$1();
	var NonRecordingSpan_1 = require_NonRecordingSpan();
	var context_2 = require_context();
	/**
	* span key
	*/
	var SPAN_KEY = (0, context_1.createContextKey)("OpenTelemetry Context Key SPAN");
	/**
	* Return the span if one exists
	*
	* @param context context to get span from
	*/
	function getSpan(context) {
		return context.getValue(SPAN_KEY) || void 0;
	}
	exports.getSpan = getSpan;
	/**
	* Gets the span from the current context, if one exists.
	*/
	function getActiveSpan() {
		return getSpan(context_2.ContextAPI.getInstance().active());
	}
	exports.getActiveSpan = getActiveSpan;
	/**
	* Set the span on a context
	*
	* @param context context to use as parent
	* @param span span to set active
	*/
	function setSpan(context, span) {
		return context.setValue(SPAN_KEY, span);
	}
	exports.setSpan = setSpan;
	/**
	* Remove current span stored in the context
	*
	* @param context context to delete span from
	*/
	function deleteSpan(context) {
		return context.deleteValue(SPAN_KEY);
	}
	exports.deleteSpan = deleteSpan;
	/**
	* Wrap span context in a NoopSpan and set as span in a new
	* context
	*
	* @param context context to set active span on
	* @param spanContext span context to be wrapped
	*/
	function setSpanContext(context, spanContext) {
		return setSpan(context, new NonRecordingSpan_1.NonRecordingSpan(spanContext));
	}
	exports.setSpanContext = setSpanContext;
	/**
	* Get the span context of the span if it exists.
	*
	* @param context context to get values from
	*/
	function getSpanContext(context) {
		var _a;
		return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
	}
	exports.getSpanContext = getSpanContext;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/spancontext-utils.js
var require_spancontext_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.wrapSpanContext = exports.isSpanContextValid = exports.isValidSpanId = exports.isValidTraceId = void 0;
	var invalid_span_constants_1 = require_invalid_span_constants();
	var NonRecordingSpan_1 = require_NonRecordingSpan();
	var isHex = new Uint8Array([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1
	]);
	function isValidHex(id, length) {
		if (typeof id !== "string" || id.length !== length) return false;
		let r = 0;
		for (let i = 0; i < id.length; i += 4) r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
		return r === length;
	}
	/**
	* @since 1.0.0
	*/
	function isValidTraceId(traceId) {
		return isValidHex(traceId, 32) && traceId !== invalid_span_constants_1.INVALID_TRACEID;
	}
	exports.isValidTraceId = isValidTraceId;
	/**
	* @since 1.0.0
	*/
	function isValidSpanId(spanId) {
		return isValidHex(spanId, 16) && spanId !== invalid_span_constants_1.INVALID_SPANID;
	}
	exports.isValidSpanId = isValidSpanId;
	/**
	* Returns true if this {@link SpanContext} is valid.
	* @return true if this {@link SpanContext} is valid.
	*
	* @since 1.0.0
	*/
	function isSpanContextValid(spanContext) {
		return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
	}
	exports.isSpanContextValid = isSpanContextValid;
	/**
	* Wrap the given {@link SpanContext} in a new non-recording {@link Span}
	*
	* @param spanContext span context to be wrapped
	* @returns a new non-recording {@link Span} with the provided context
	*/
	function wrapSpanContext(spanContext) {
		return new NonRecordingSpan_1.NonRecordingSpan(spanContext);
	}
	exports.wrapSpanContext = wrapSpanContext;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js
var require_NoopTracer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopTracer = void 0;
	var context_1 = require_context();
	var context_utils_1 = require_context_utils();
	var NonRecordingSpan_1 = require_NonRecordingSpan();
	var spancontext_utils_1 = require_spancontext_utils();
	var contextApi = context_1.ContextAPI.getInstance();
	/**
	* No-op implementations of {@link Tracer}.
	*/
	var NoopTracer = class {
		startSpan(name, options, context = contextApi.active()) {
			if (Boolean(options === null || options === void 0 ? void 0 : options.root)) return new NonRecordingSpan_1.NonRecordingSpan();
			const parentFromContext = context && (0, context_utils_1.getSpanContext)(context);
			if (isSpanContext(parentFromContext) && (0, spancontext_utils_1.isSpanContextValid)(parentFromContext)) return new NonRecordingSpan_1.NonRecordingSpan(parentFromContext);
			else return new NonRecordingSpan_1.NonRecordingSpan();
		}
		startActiveSpan(name, arg2, arg3, arg4) {
			let opts;
			let ctx;
			let fn;
			if (arguments.length < 2) return;
			else if (arguments.length === 2) fn = arg2;
			else if (arguments.length === 3) {
				opts = arg2;
				fn = arg3;
			} else {
				opts = arg2;
				ctx = arg3;
				fn = arg4;
			}
			const parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
			const span = this.startSpan(name, opts, parentContext);
			const contextWithSpanSet = (0, context_utils_1.setSpan)(parentContext, span);
			return contextApi.with(contextWithSpanSet, fn, void 0, span);
		}
	};
	exports.NoopTracer = NoopTracer;
	function isSpanContext(spanContext) {
		return spanContext !== null && typeof spanContext === "object" && "spanId" in spanContext && typeof spanContext["spanId"] === "string" && "traceId" in spanContext && typeof spanContext["traceId"] === "string" && "traceFlags" in spanContext && typeof spanContext["traceFlags"] === "number";
	}
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js
var require_ProxyTracer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProxyTracer = void 0;
	var NOOP_TRACER = new (require_NoopTracer()).NoopTracer();
	/**
	* Proxy tracer provided by the proxy tracer provider
	*
	* @since 1.0.0
	*/
	var ProxyTracer = class {
		constructor(provider, name, version, options) {
			this._provider = provider;
			this.name = name;
			this.version = version;
			this.options = options;
		}
		startSpan(name, options, context) {
			return this._getTracer().startSpan(name, options, context);
		}
		startActiveSpan(_name, _options, _context, _fn) {
			const tracer = this._getTracer();
			return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
		}
		/**
		* Try to get a tracer from the proxy tracer provider.
		* If the proxy tracer provider has no delegate, return a noop tracer.
		*/
		_getTracer() {
			if (this._delegate) return this._delegate;
			const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
			if (!tracer) return NOOP_TRACER;
			this._delegate = tracer;
			return this._delegate;
		}
	};
	exports.ProxyTracer = ProxyTracer;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/NoopTracerProvider.js
var require_NoopTracerProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopTracerProvider = void 0;
	var NoopTracer_1 = require_NoopTracer();
	/**
	* An implementation of the {@link TracerProvider} which returns an impotent
	* Tracer for all calls to `getTracer`.
	*
	* All operations are no-op.
	*/
	var NoopTracerProvider = class {
		getTracer(_name, _version, _options) {
			return new NoopTracer_1.NoopTracer();
		}
	};
	exports.NoopTracerProvider = NoopTracerProvider;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/ProxyTracerProvider.js
var require_ProxyTracerProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProxyTracerProvider = void 0;
	var ProxyTracer_1 = require_ProxyTracer();
	var NOOP_TRACER_PROVIDER = new (require_NoopTracerProvider()).NoopTracerProvider();
	/**
	* Tracer provider which provides {@link ProxyTracer}s.
	*
	* Before a delegate is set, tracers provided are NoOp.
	*   When a delegate is set, traces are provided from the delegate.
	*   When a delegate is set after tracers have already been provided,
	*   all tracers already provided will use the provided delegate implementation.
	*
	* @deprecated This will be removed in the next major version.
	* @since 1.0.0
	*/
	var ProxyTracerProvider = class {
		/**
		* Get a {@link ProxyTracer}
		*/
		getTracer(name, version, options) {
			var _a;
			return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer_1.ProxyTracer(this, name, version, options);
		}
		getDelegate() {
			var _a;
			return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
		}
		/**
		* Set the delegate tracer provider
		*/
		setDelegate(delegate) {
			this._delegate = delegate;
		}
		getDelegateTracer(name, version, options) {
			var _a;
			return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
		}
	};
	exports.ProxyTracerProvider = ProxyTracerProvider;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/SamplingResult.js
var require_SamplingResult = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SamplingDecision = void 0;
	(function(SamplingDecision) {
		/**
		* `Span.isRecording() === false`, span will not be recorded and all events
		* and attributes will be dropped.
		*/
		SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
		/**
		* `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
		* MUST NOT be set.
		*/
		SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
		/**
		* `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
		* MUST be set.
		*/
		SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
	})(exports.SamplingDecision || (exports.SamplingDecision = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/span_kind.js
var require_span_kind = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SpanKind = void 0;
	(function(SpanKind) {
		/** Default value. Indicates that the span is used internally. */
		SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
		/**
		* Indicates that the span covers server-side handling of an RPC or other
		* remote request.
		*/
		SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
		/**
		* Indicates that the span covers the client-side wrapper around an RPC or
		* other remote request.
		*/
		SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
		/**
		* Indicates that the span describes producer sending a message to a
		* broker. Unlike client and server, there is no direct critical path latency
		* relationship between producer and consumer spans.
		*/
		SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
		/**
		* Indicates that the span describes consumer receiving a message from a
		* broker. Unlike client and server, there is no direct critical path latency
		* relationship between producer and consumer spans.
		*/
		SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
	})(exports.SpanKind || (exports.SpanKind = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/status.js
var require_status = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SpanStatusCode = void 0;
	(function(SpanStatusCode) {
		/**
		* The default status.
		*/
		SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
		/**
		* The operation has been validated by an Application developer or
		* Operator to have completed successfully.
		*/
		SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
		/**
		* The operation contains an error.
		*/
		SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
	})(exports.SpanStatusCode || (exports.SpanStatusCode = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/internal/tracestate-validators.js
var require_tracestate_validators = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.validateValue = exports.validateKey = void 0;
	var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
	var VALID_KEY_REGEX = new RegExp(`^(?:${`[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`}|${`[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`})$`);
	var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
	var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
	/**
	* Key is opaque string up to 256 characters printable. It MUST begin with a
	* lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
	* underscores _, dashes -, asterisks *, and forward slashes /.
	* For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
	* vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
	* see https://www.w3.org/TR/trace-context/#key
	*/
	function validateKey(key) {
		return VALID_KEY_REGEX.test(key);
	}
	exports.validateKey = validateKey;
	/**
	* Value is opaque string up to 256 characters printable ASCII RFC0020
	* characters (i.e., the range 0x20 to 0x7E) except comma , and =.
	*/
	function validateValue(value) {
		return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
	}
	exports.validateValue = validateValue;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/internal/tracestate-impl.js
var require_tracestate_impl = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TraceStateImpl = void 0;
	var tracestate_validators_1 = require_tracestate_validators();
	var MAX_TRACE_STATE_ITEMS = 32;
	var MAX_TRACE_STATE_LEN = 512;
	var LIST_MEMBERS_SEPARATOR = ",";
	var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
	exports.TraceStateImpl = class TraceStateImpl {
		constructor(rawTraceState) {
			this._internalState = /* @__PURE__ */ new Map();
			if (rawTraceState) this._parse(rawTraceState);
		}
		set(key, value) {
			const traceState = this._clone();
			if (traceState._internalState.has(key)) traceState._internalState.delete(key);
			traceState._internalState.set(key, value);
			return traceState;
		}
		unset(key) {
			const traceState = this._clone();
			traceState._internalState.delete(key);
			return traceState;
		}
		get(key) {
			return this._internalState.get(key);
		}
		serialize() {
			return Array.from(this._internalState.keys()).reduceRight((agg, key) => {
				agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + this.get(key));
				return agg;
			}, []).join(LIST_MEMBERS_SEPARATOR);
		}
		_parse(rawTraceState) {
			if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
			this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reduceRight((agg, part) => {
				const listMember = part.trim();
				const i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
				if (i !== -1) {
					const key = listMember.slice(0, i);
					const value = listMember.slice(i + 1, part.length);
					if ((0, tracestate_validators_1.validateKey)(key) && (0, tracestate_validators_1.validateValue)(value)) agg.set(key, value);
				}
				return agg;
			}, /* @__PURE__ */ new Map());
			if (this._internalState.size > MAX_TRACE_STATE_ITEMS) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
		}
		_keys() {
			return Array.from(this._internalState.keys()).reverse();
		}
		_clone() {
			const traceState = new TraceStateImpl();
			traceState._internalState = new Map(this._internalState);
			return traceState;
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/internal/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createTraceState = void 0;
	var tracestate_impl_1 = require_tracestate_impl();
	/**
	* @since 1.1.0
	*/
	function createTraceState(rawTraceState) {
		return new tracestate_impl_1.TraceStateImpl(rawTraceState);
	}
	exports.createTraceState = createTraceState;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/context-api.js
var require_context_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.context = void 0;
	/**
	* Entrypoint for context API
	* @since 1.0.0
	*/
	exports.context = require_context().ContextAPI.getInstance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag-api.js
var require_diag_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.diag = void 0;
	/**
	* Entrypoint for Diag API.
	* Defines Diagnostic handler used for internal diagnostic logging operations.
	* The default provides a Noop DiagLogger implementation which may be changed via the
	* diag.setLogger(logger: DiagLogger) function.
	*
	* @since 1.0.0
	*/
	exports.diag = require_diag().DiagAPI.instance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/metrics/NoopMeterProvider.js
var require_NoopMeterProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NOOP_METER_PROVIDER = exports.NoopMeterProvider = void 0;
	var NoopMeter_1 = require_NoopMeter();
	/**
	* An implementation of the {@link MeterProvider} which returns an impotent Meter
	* for all calls to `getMeter`
	*/
	var NoopMeterProvider = class {
		getMeter(_name, _version, _options) {
			return NoopMeter_1.NOOP_METER;
		}
	};
	exports.NoopMeterProvider = NoopMeterProvider;
	exports.NOOP_METER_PROVIDER = new NoopMeterProvider();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/metrics.js
var require_metrics = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MetricsAPI = void 0;
	var NoopMeterProvider_1 = require_NoopMeterProvider();
	var global_utils_1 = require_global_utils();
	var diag_1 = require_diag();
	var API_NAME = "metrics";
	exports.MetricsAPI = class MetricsAPI {
		/** Empty private constructor prevents end users from constructing a new instance of the API */
		constructor() {}
		/** Get the singleton instance of the Metrics API */
		static getInstance() {
			if (!this._instance) this._instance = new MetricsAPI();
			return this._instance;
		}
		/**
		* Set the current global meter provider.
		* Returns true if the meter provider was successfully registered, else false.
		*/
		setGlobalMeterProvider(provider) {
			return (0, global_utils_1.registerGlobal)(API_NAME, provider, diag_1.DiagAPI.instance());
		}
		/**
		* Returns the global meter provider.
		*/
		getMeterProvider() {
			return (0, global_utils_1.getGlobal)(API_NAME) || NoopMeterProvider_1.NOOP_METER_PROVIDER;
		}
		/**
		* Returns a meter from the global meter provider.
		*/
		getMeter(name, version, options) {
			return this.getMeterProvider().getMeter(name, version, options);
		}
		/** Remove the global meter provider */
		disable() {
			(0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/metrics-api.js
var require_metrics_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.metrics = void 0;
	/**
	* Entrypoint for metrics API
	*
	* @since 1.3.0
	*/
	exports.metrics = require_metrics().MetricsAPI.getInstance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/propagation/NoopTextMapPropagator.js
var require_NoopTextMapPropagator = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopTextMapPropagator = void 0;
	/**
	* No-op implementations of {@link TextMapPropagator}.
	*/
	var NoopTextMapPropagator = class {
		/** Noop inject function does nothing */
		inject(_context, _carrier) {}
		/** Noop extract function does nothing and returns the input context */
		extract(context, _carrier) {
			return context;
		}
		fields() {
			return [];
		}
	};
	exports.NoopTextMapPropagator = NoopTextMapPropagator;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/baggage/context-helpers.js
var require_context_helpers = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.deleteBaggage = exports.setBaggage = exports.getActiveBaggage = exports.getBaggage = void 0;
	var context_1 = require_context();
	/**
	* Baggage key
	*/
	var BAGGAGE_KEY = (0, require_context$1().createContextKey)("OpenTelemetry Baggage Key");
	/**
	* Retrieve the current baggage from the given context
	*
	* @param {Context} Context that manage all context values
	* @returns {Baggage} Extracted baggage from the context
	*/
	function getBaggage(context) {
		return context.getValue(BAGGAGE_KEY) || void 0;
	}
	exports.getBaggage = getBaggage;
	/**
	* Retrieve the current baggage from the active/current context
	*
	* @returns {Baggage} Extracted baggage from the context
	*/
	function getActiveBaggage() {
		return getBaggage(context_1.ContextAPI.getInstance().active());
	}
	exports.getActiveBaggage = getActiveBaggage;
	/**
	* Store a baggage in the given context
	*
	* @param {Context} Context that manage all context values
	* @param {Baggage} baggage that will be set in the actual context
	*/
	function setBaggage(context, baggage) {
		return context.setValue(BAGGAGE_KEY, baggage);
	}
	exports.setBaggage = setBaggage;
	/**
	* Delete the baggage stored in the given context
	*
	* @param {Context} Context that manage all context values
	*/
	function deleteBaggage(context) {
		return context.deleteValue(BAGGAGE_KEY);
	}
	exports.deleteBaggage = deleteBaggage;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/propagation.js
var require_propagation = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PropagationAPI = void 0;
	var global_utils_1 = require_global_utils();
	var NoopTextMapPropagator_1 = require_NoopTextMapPropagator();
	var TextMapPropagator_1 = require_TextMapPropagator();
	var context_helpers_1 = require_context_helpers();
	var utils_1 = require_utils$1();
	var diag_1 = require_diag();
	var API_NAME = "propagation";
	var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator_1.NoopTextMapPropagator();
	exports.PropagationAPI = class PropagationAPI {
		/** Empty private constructor prevents end users from constructing a new instance of the API */
		constructor() {
			this.createBaggage = utils_1.createBaggage;
			this.getBaggage = context_helpers_1.getBaggage;
			this.getActiveBaggage = context_helpers_1.getActiveBaggage;
			this.setBaggage = context_helpers_1.setBaggage;
			this.deleteBaggage = context_helpers_1.deleteBaggage;
		}
		/** Get the singleton instance of the Propagator API */
		static getInstance() {
			if (!this._instance) this._instance = new PropagationAPI();
			return this._instance;
		}
		/**
		* Set the current propagator.
		*
		* @returns true if the propagator was successfully registered, else false
		*/
		setGlobalPropagator(propagator) {
			return (0, global_utils_1.registerGlobal)(API_NAME, propagator, diag_1.DiagAPI.instance());
		}
		/**
		* Inject context into a carrier to be propagated inter-process
		*
		* @param context Context carrying tracing data to inject
		* @param carrier carrier to inject context into
		* @param setter Function used to set values on the carrier
		*/
		inject(context, carrier, setter = TextMapPropagator_1.defaultTextMapSetter) {
			return this._getGlobalPropagator().inject(context, carrier, setter);
		}
		/**
		* Extract context from a carrier
		*
		* @param context Context which the newly created context will inherit from
		* @param carrier Carrier to extract context from
		* @param getter Function used to extract keys from a carrier
		*/
		extract(context, carrier, getter = TextMapPropagator_1.defaultTextMapGetter) {
			return this._getGlobalPropagator().extract(context, carrier, getter);
		}
		/**
		* Return a list of all fields which may be used by the propagator.
		*/
		fields() {
			return this._getGlobalPropagator().fields();
		}
		/** Remove the global propagator */
		disable() {
			(0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
		}
		_getGlobalPropagator() {
			return (0, global_utils_1.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/propagation-api.js
var require_propagation_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.propagation = void 0;
	/**
	* Entrypoint for propagation API
	*
	* @since 1.0.0
	*/
	exports.propagation = require_propagation().PropagationAPI.getInstance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/trace.js
var require_trace = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TraceAPI = void 0;
	var global_utils_1 = require_global_utils();
	var ProxyTracerProvider_1 = require_ProxyTracerProvider();
	var spancontext_utils_1 = require_spancontext_utils();
	var context_utils_1 = require_context_utils();
	var diag_1 = require_diag();
	var API_NAME = "trace";
	exports.TraceAPI = class TraceAPI {
		/** Empty private constructor prevents end users from constructing a new instance of the API */
		constructor() {
			this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
			this.wrapSpanContext = spancontext_utils_1.wrapSpanContext;
			this.isSpanContextValid = spancontext_utils_1.isSpanContextValid;
			this.deleteSpan = context_utils_1.deleteSpan;
			this.getSpan = context_utils_1.getSpan;
			this.getActiveSpan = context_utils_1.getActiveSpan;
			this.getSpanContext = context_utils_1.getSpanContext;
			this.setSpan = context_utils_1.setSpan;
			this.setSpanContext = context_utils_1.setSpanContext;
		}
		/** Get the singleton instance of the Trace API */
		static getInstance() {
			if (!this._instance) this._instance = new TraceAPI();
			return this._instance;
		}
		/**
		* Set the current global tracer.
		*
		* @returns true if the tracer provider was successfully registered, else false
		*/
		setGlobalTracerProvider(provider) {
			const success = (0, global_utils_1.registerGlobal)(API_NAME, this._proxyTracerProvider, diag_1.DiagAPI.instance());
			if (success) this._proxyTracerProvider.setDelegate(provider);
			return success;
		}
		/**
		* Returns the global tracer provider.
		*/
		getTracerProvider() {
			return (0, global_utils_1.getGlobal)(API_NAME) || this._proxyTracerProvider;
		}
		/**
		* Returns a tracer from the global tracer provider.
		*/
		getTracer(name, version) {
			return this.getTracerProvider().getTracer(name, version);
		}
		/** Remove the global tracer provider */
		disable() {
			(0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
			this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace-api.js
var require_trace_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.trace = void 0;
	/**
	* Entrypoint for trace API
	*
	* @since 1.0.0
	*/
	exports.trace = require_trace().TraceAPI.getInstance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/index.js
var require_src = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.trace = exports.propagation = exports.metrics = exports.diag = exports.context = exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = exports.isValidSpanId = exports.isValidTraceId = exports.isSpanContextValid = exports.createTraceState = exports.TraceFlags = exports.SpanStatusCode = exports.SpanKind = exports.SamplingDecision = exports.ProxyTracerProvider = exports.ProxyTracer = exports.defaultTextMapSetter = exports.defaultTextMapGetter = exports.ValueType = exports.createNoopMeter = exports.DiagLogLevel = exports.DiagConsoleLogger = exports.ROOT_CONTEXT = exports.createContextKey = exports.baggageEntryMetadataFromString = void 0;
	var utils_1 = require_utils$1();
	Object.defineProperty(exports, "baggageEntryMetadataFromString", {
		enumerable: true,
		get: function() {
			return utils_1.baggageEntryMetadataFromString;
		}
	});
	var context_1 = require_context$1();
	Object.defineProperty(exports, "createContextKey", {
		enumerable: true,
		get: function() {
			return context_1.createContextKey;
		}
	});
	Object.defineProperty(exports, "ROOT_CONTEXT", {
		enumerable: true,
		get: function() {
			return context_1.ROOT_CONTEXT;
		}
	});
	var consoleLogger_1 = require_consoleLogger();
	Object.defineProperty(exports, "DiagConsoleLogger", {
		enumerable: true,
		get: function() {
			return consoleLogger_1.DiagConsoleLogger;
		}
	});
	var types_1 = require_types();
	Object.defineProperty(exports, "DiagLogLevel", {
		enumerable: true,
		get: function() {
			return types_1.DiagLogLevel;
		}
	});
	var NoopMeter_1 = require_NoopMeter();
	Object.defineProperty(exports, "createNoopMeter", {
		enumerable: true,
		get: function() {
			return NoopMeter_1.createNoopMeter;
		}
	});
	var Metric_1 = require_Metric();
	Object.defineProperty(exports, "ValueType", {
		enumerable: true,
		get: function() {
			return Metric_1.ValueType;
		}
	});
	var TextMapPropagator_1 = require_TextMapPropagator();
	Object.defineProperty(exports, "defaultTextMapGetter", {
		enumerable: true,
		get: function() {
			return TextMapPropagator_1.defaultTextMapGetter;
		}
	});
	Object.defineProperty(exports, "defaultTextMapSetter", {
		enumerable: true,
		get: function() {
			return TextMapPropagator_1.defaultTextMapSetter;
		}
	});
	var ProxyTracer_1 = require_ProxyTracer();
	Object.defineProperty(exports, "ProxyTracer", {
		enumerable: true,
		get: function() {
			return ProxyTracer_1.ProxyTracer;
		}
	});
	var ProxyTracerProvider_1 = require_ProxyTracerProvider();
	Object.defineProperty(exports, "ProxyTracerProvider", {
		enumerable: true,
		get: function() {
			return ProxyTracerProvider_1.ProxyTracerProvider;
		}
	});
	var SamplingResult_1 = require_SamplingResult();
	Object.defineProperty(exports, "SamplingDecision", {
		enumerable: true,
		get: function() {
			return SamplingResult_1.SamplingDecision;
		}
	});
	var span_kind_1 = require_span_kind();
	Object.defineProperty(exports, "SpanKind", {
		enumerable: true,
		get: function() {
			return span_kind_1.SpanKind;
		}
	});
	var status_1 = require_status();
	Object.defineProperty(exports, "SpanStatusCode", {
		enumerable: true,
		get: function() {
			return status_1.SpanStatusCode;
		}
	});
	var trace_flags_1 = require_trace_flags();
	Object.defineProperty(exports, "TraceFlags", {
		enumerable: true,
		get: function() {
			return trace_flags_1.TraceFlags;
		}
	});
	var utils_2 = require_utils();
	Object.defineProperty(exports, "createTraceState", {
		enumerable: true,
		get: function() {
			return utils_2.createTraceState;
		}
	});
	var spancontext_utils_1 = require_spancontext_utils();
	Object.defineProperty(exports, "isSpanContextValid", {
		enumerable: true,
		get: function() {
			return spancontext_utils_1.isSpanContextValid;
		}
	});
	Object.defineProperty(exports, "isValidTraceId", {
		enumerable: true,
		get: function() {
			return spancontext_utils_1.isValidTraceId;
		}
	});
	Object.defineProperty(exports, "isValidSpanId", {
		enumerable: true,
		get: function() {
			return spancontext_utils_1.isValidSpanId;
		}
	});
	var invalid_span_constants_1 = require_invalid_span_constants();
	Object.defineProperty(exports, "INVALID_SPANID", {
		enumerable: true,
		get: function() {
			return invalid_span_constants_1.INVALID_SPANID;
		}
	});
	Object.defineProperty(exports, "INVALID_TRACEID", {
		enumerable: true,
		get: function() {
			return invalid_span_constants_1.INVALID_TRACEID;
		}
	});
	Object.defineProperty(exports, "INVALID_SPAN_CONTEXT", {
		enumerable: true,
		get: function() {
			return invalid_span_constants_1.INVALID_SPAN_CONTEXT;
		}
	});
	var context_api_1 = require_context_api();
	Object.defineProperty(exports, "context", {
		enumerable: true,
		get: function() {
			return context_api_1.context;
		}
	});
	var diag_api_1 = require_diag_api();
	Object.defineProperty(exports, "diag", {
		enumerable: true,
		get: function() {
			return diag_api_1.diag;
		}
	});
	var metrics_api_1 = require_metrics_api();
	Object.defineProperty(exports, "metrics", {
		enumerable: true,
		get: function() {
			return metrics_api_1.metrics;
		}
	});
	var propagation_api_1 = require_propagation_api();
	Object.defineProperty(exports, "propagation", {
		enumerable: true,
		get: function() {
			return propagation_api_1.propagation;
		}
	});
	var trace_api_1 = require_trace_api();
	Object.defineProperty(exports, "trace", {
		enumerable: true,
		get: function() {
			return trace_api_1.trace;
		}
	});
	exports.default = {
		context: context_api_1.context,
		diag: diag_api_1.diag,
		metrics: metrics_api_1.metrics,
		propagation: propagation_api_1.propagation,
		trace: trace_api_1.trace
	};
}));
//#endregion
//#region node_modules/@ai-sdk/react/node_modules/ai/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name22 in all) __defProp(target, name22, {
		get: all[name22],
		enumerable: true
	});
};
var name9 = "AI_NoObjectGeneratedError";
var marker9 = `vercel.ai.error.${name9}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var NoObjectGeneratedError = class extends AISDKError {
	constructor({ message = "No object generated.", cause, text: text2, response, usage, finishReason }) {
		super({
			name: name9,
			message,
			cause
		});
		this[_a9] = true;
		this.text = text2;
		this.response = response;
		this.usage = usage;
		this.finishReason = finishReason;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker9);
	}
};
_a9 = symbol9;
var name16 = "AI_UIMessageStreamError";
var marker16 = `vercel.ai.error.${name16}`;
var symbol16 = Symbol.for(marker16);
var _a16;
var UIMessageStreamError = class extends AISDKError {
	constructor({ chunkType, chunkId, message }) {
		super({
			name: name16,
			message
		});
		this[_a16] = true;
		this.chunkType = chunkType;
		this.chunkId = chunkId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker16);
	}
};
_a16 = symbol16;
var dataContentSchema = union([
	string(),
	_instanceof(Uint8Array),
	_instanceof(ArrayBuffer),
	custom((value) => {
		var _a22, _b;
		return (_b = (_a22 = globalThis.Buffer) == null ? void 0 : _a22.isBuffer(value)) != null ? _b : false;
	}, { message: "Must be a Buffer" })
]);
var jsonValueSchema = lazy(() => union([
	_null(),
	string(),
	number(),
	boolean(),
	record(string(), jsonValueSchema.optional()),
	array$1(jsonValueSchema)
]));
var providerMetadataSchema = record(string(), record(string(), jsonValueSchema.optional()));
var textPartSchema = object$1({
	type: literal("text"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = object$1({
	type: literal("image"),
	image: union([dataContentSchema, _instanceof(URL)]),
	mediaType: string().optional(),
	providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = object$1({
	type: literal("file"),
	data: union([dataContentSchema, _instanceof(URL)]),
	filename: string().optional(),
	mediaType: string(),
	providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = object$1({
	type: literal("reasoning"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = object$1({
	type: literal("tool-call"),
	toolCallId: string(),
	toolName: string(),
	input: unknown(),
	providerOptions: providerMetadataSchema.optional(),
	providerExecuted: boolean().optional()
});
var outputSchema = discriminatedUnion("type", [
	object$1({
		type: literal("text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("execution-denied"),
		reason: string().optional(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("error-text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("error-json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("content"),
		value: array$1(union([
			object$1({
				type: literal("text"),
				text: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("media"),
				data: string(),
				mediaType: string()
			}),
			object$1({
				type: literal("file-data"),
				data: string(),
				mediaType: string(),
				filename: string().optional(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("file-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-data"),
				data: string(),
				mediaType: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("custom"),
				providerOptions: providerMetadataSchema.optional()
			})
		]))
	})
]);
var toolResultPartSchema = object$1({
	type: literal("tool-result"),
	toolCallId: string(),
	toolName: string(),
	output: outputSchema,
	providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = object$1({
	type: literal("tool-approval-request"),
	approvalId: string(),
	toolCallId: string()
});
var toolApprovalResponseSchema = object$1({
	type: literal("tool-approval-response"),
	approvalId: string(),
	approved: boolean(),
	reason: string().optional()
});
union([
	object$1({
		role: literal("system"),
		content: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("user"),
		content: union([string(), array$1(union([
			textPartSchema,
			imagePartSchema,
			filePartSchema
		]))]),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("assistant"),
		content: union([string(), array$1(union([
			textPartSchema,
			filePartSchema,
			reasoningPartSchema,
			toolCallPartSchema,
			toolResultPartSchema,
			toolApprovalRequestSchema
		]))]),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("tool"),
		content: array$1(union([toolResultPartSchema, toolApprovalResponseSchema])),
		providerOptions: providerMetadataSchema.optional()
	})
]);
function mergeObjects(base, overrides) {
	if (base === void 0 && overrides === void 0) return;
	if (base === void 0) return overrides;
	if (overrides === void 0) return base;
	const result = { ...base };
	for (const key in overrides) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (Object.prototype.hasOwnProperty.call(overrides, key)) {
			const overridesValue = overrides[key];
			if (overridesValue === void 0) continue;
			const baseValue = key in base ? base[key] : void 0;
			const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
			const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
			if (isSourceObject && isTargetObject) result[key] = mergeObjects(baseValue, overridesValue);
			else result[key] = overridesValue;
		}
	}
	return result;
}
new TextEncoder();
__export({}, {
	array: () => array,
	choice: () => choice,
	json: () => json,
	object: () => object,
	text: () => text
});
function fixJson(input) {
	const stack = ["ROOT"];
	let lastValidIndex = -1;
	let literalStart = null;
	let unicodeEscapeDigits = 0;
	function isHexDigit(char) {
		return char >= "0" && char <= "9" || char >= "A" && char <= "F" || char >= "a" && char <= "f";
	}
	function processValueStart(char, i, swapState) {
		switch (char) {
			case "\"":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_STRING");
				break;
			case "f":
			case "t":
			case "n":
				lastValidIndex = i;
				literalStart = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_LITERAL");
				break;
			case "-":
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "{":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_OBJECT_START");
				break;
			case "[":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_ARRAY_START");
				break;
		}
	}
	function processAfterObjectValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_OBJECT_AFTER_COMMA");
				break;
			case "}":
				lastValidIndex = i;
				stack.pop();
				break;
		}
	}
	function processAfterArrayValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_ARRAY_AFTER_COMMA");
				break;
			case "]":
				lastValidIndex = i;
				stack.pop();
				break;
		}
	}
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		switch (stack[stack.length - 1]) {
			case "ROOT":
				processValueStart(char, i, "FINISH");
				break;
			case "INSIDE_OBJECT_START":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
					case "}":
						lastValidIndex = i;
						stack.pop();
						break;
				}
				break;
			case "INSIDE_OBJECT_AFTER_COMMA":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
				}
				break;
			case "INSIDE_OBJECT_KEY":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_AFTER_KEY");
						break;
				}
				break;
			case "INSIDE_OBJECT_AFTER_KEY":
				switch (char) {
					case ":":
						stack.pop();
						stack.push("INSIDE_OBJECT_BEFORE_VALUE");
						break;
				}
				break;
			case "INSIDE_OBJECT_BEFORE_VALUE":
				processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
				break;
			case "INSIDE_OBJECT_AFTER_VALUE":
				processAfterObjectValue(char, i);
				break;
			case "INSIDE_STRING":
				switch (char) {
					case "\"":
						stack.pop();
						lastValidIndex = i;
						break;
					case "\\":
						stack.push("INSIDE_STRING_ESCAPE");
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_START":
				switch (char) {
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
						break;
				}
				break;
			case "INSIDE_ARRAY_AFTER_VALUE":
				switch (char) {
					case ",":
						stack.pop();
						stack.push("INSIDE_ARRAY_AFTER_COMMA");
						break;
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						break;
				}
				break;
			case "INSIDE_ARRAY_AFTER_COMMA":
				processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				break;
			case "INSIDE_STRING_ESCAPE":
				stack.pop();
				if (char === "u") {
					unicodeEscapeDigits = 0;
					stack.push("INSIDE_STRING_UNICODE_ESCAPE");
				} else lastValidIndex = i;
				break;
			case "INSIDE_STRING_UNICODE_ESCAPE":
				if (isHexDigit(char)) {
					unicodeEscapeDigits++;
					if (unicodeEscapeDigits === 4) {
						stack.pop();
						lastValidIndex = i;
					}
				}
				break;
			case "INSIDE_NUMBER":
				switch (char) {
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						lastValidIndex = i;
						break;
					case "e":
					case "E":
					case "-":
					case ".": break;
					case ",":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "}":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "]":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						break;
					default:
						stack.pop();
						break;
				}
				break;
			case "INSIDE_LITERAL": {
				const partialLiteral = input.substring(literalStart, i + 1);
				if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
					stack.pop();
					if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
					else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
				} else lastValidIndex = i;
				break;
			}
		}
	}
	let result = input.slice(0, lastValidIndex + 1);
	for (let i = stack.length - 1; i >= 0; i--) switch (stack[i]) {
		case "INSIDE_STRING":
			result += "\"";
			break;
		case "INSIDE_OBJECT_KEY":
		case "INSIDE_OBJECT_AFTER_KEY":
		case "INSIDE_OBJECT_AFTER_COMMA":
		case "INSIDE_OBJECT_START":
		case "INSIDE_OBJECT_BEFORE_VALUE":
		case "INSIDE_OBJECT_AFTER_VALUE":
			result += "}";
			break;
		case "INSIDE_ARRAY_START":
		case "INSIDE_ARRAY_AFTER_COMMA":
		case "INSIDE_ARRAY_AFTER_VALUE":
			result += "]";
			break;
		case "INSIDE_LITERAL": {
			const partialLiteral = input.substring(literalStart, input.length);
			if ("true".startsWith(partialLiteral)) result += "true".slice(partialLiteral.length);
			else if ("false".startsWith(partialLiteral)) result += "false".slice(partialLiteral.length);
			else if ("null".startsWith(partialLiteral)) result += "null".slice(partialLiteral.length);
		}
	}
	return result;
}
async function parsePartialJson(jsonText) {
	if (jsonText === void 0) return {
		value: void 0,
		state: "undefined-input"
	};
	let result = await safeParseJSON({ text: jsonText });
	if (result.success) return {
		value: result.value,
		state: "successful-parse"
	};
	result = await safeParseJSON({ text: fixJson(jsonText) });
	if (result.success) return {
		value: result.value,
		state: "repaired-parse"
	};
	return {
		value: void 0,
		state: "failed-parse"
	};
}
var text = () => ({
	name: "text",
	responseFormat: Promise.resolve({ type: "text" }),
	async parseCompleteOutput({ text: text2 }) {
		return text2;
	},
	async parsePartialOutput({ text: text2 }) {
		return { partial: text2 };
	},
	createElementStreamTransform() {}
});
var object = ({ schema: inputSchema, name: name22, description }) => {
	const schema = asSchema(inputSchema);
	return {
		name: "object",
		responseFormat: resolve(schema.jsonSchema).then((jsonSchema2) => ({
			type: "json",
			schema: jsonSchema2,
			...name22 != null && { name: name22 },
			...description != null && { description }
		})),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const validationResult = await safeValidateTypes({
				value: parseResult.value,
				schema
			});
			if (!validationResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: validationResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return validationResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
var array = ({ element: inputElementSchema, name: name22, description }) => {
	const elementSchema = asSchema(inputElementSchema);
	return {
		name: "array",
		responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema2) => {
			const { $schema, ...itemSchema } = jsonSchema2;
			return {
				type: "json",
				schema: {
					$schema: "http://json-schema.org/draft-07/schema#",
					type: "object",
					properties: { elements: {
						type: "array",
						items: itemSchema
					} },
					required: ["elements"],
					additionalProperties: false
				},
				...name22 != null && { name: name22 },
				...description != null && { description }
			};
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object with an elements array"
				}),
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			for (const element of outerValue.elements) {
				const validationResult = await safeValidateTypes({
					value: element,
					schema: elementSchema
				});
				if (!validationResult.success) throw new NoObjectGeneratedError({
					message: "No object generated: response did not match schema.",
					cause: validationResult.error,
					text: text2,
					response: context2.response,
					usage: context2.usage,
					finishReason: context2.finishReason
				});
			}
			return outerValue.elements;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) return;
					const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
					const parsedElements = [];
					for (const rawElement of rawElements) {
						const validationResult = await safeValidateTypes({
							value: rawElement,
							schema: elementSchema
						});
						if (validationResult.success) parsedElements.push(validationResult.value);
					}
					return { partial: parsedElements };
				}
			}
		},
		createElementStreamTransform() {
			let publishedElements = 0;
			return new TransformStream({ transform({ partialOutput }, controller) {
				if (partialOutput != null) for (; publishedElements < partialOutput.length; publishedElements++) controller.enqueue(partialOutput[publishedElements]);
			} });
		}
	};
};
var choice = ({ options: choiceOptions, name: name22, description }) => {
	return {
		name: "choice",
		responseFormat: Promise.resolve({
			type: "json",
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				type: "object",
				properties: { result: {
					type: "string",
					enum: choiceOptions
				} },
				required: ["result"],
				additionalProperties: false
			},
			...name22 != null && { name: name22 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object that contains a choice value."
				}),
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return outerValue.result;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") return;
					const potentialMatches = choiceOptions.filter((choiceOption) => choiceOption.startsWith(outerValue.result));
					if (result.state === "successful-parse") return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
					else return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
				}
			}
		},
		createElementStreamTransform() {}
	};
};
var json = ({ name: name22, description } = {}) => {
	return {
		name: "json",
		responseFormat: Promise.resolve({
			type: "json",
			...name22 != null && { name: name22 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return parseResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return result.value === void 0 ? void 0 : { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
TransformStream;
var toolMetadataSchema = record(string(), jsonValueSchema.optional());
var uiMessageChunkSchema = lazySchema(() => zodSchema(union([
	strictObject({
		type: literal("text-start"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("text-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("text-end"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("error"),
		errorText: string()
	}),
	strictObject({
		type: literal("tool-input-start"),
		toolCallId: string(),
		toolName: string(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-delta"),
		toolCallId: string(),
		inputTextDelta: string()
	}),
	strictObject({
		type: literal("tool-input-available"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-error"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional(),
		errorText: string(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-approval-request"),
		approvalId: string(),
		toolCallId: string(),
		signature: string().optional()
	}),
	strictObject({
		type: literal("tool-output-available"),
		toolCallId: string(),
		output: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional(),
		preliminary: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-error"),
		toolCallId: string(),
		errorText: string(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-denied"),
		toolCallId: string()
	}),
	strictObject({
		type: literal("reasoning-start"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("reasoning-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("reasoning-end"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("source-url"),
		sourceId: string(),
		url: string(),
		title: string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("source-document"),
		sourceId: string(),
		mediaType: string(),
		title: string(),
		filename: string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("file"),
		url: string(),
		mediaType: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: custom((value) => typeof value === "string" && value.startsWith("data-"), { message: "Type must start with \"data-\"" }),
		id: string().optional(),
		data: unknown(),
		transient: boolean().optional()
	}),
	strictObject({ type: literal("start-step") }),
	strictObject({ type: literal("finish-step") }),
	strictObject({
		type: literal("start"),
		messageId: string().optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("finish"),
		finishReason: _enum([
			"stop",
			"length",
			"content-filter",
			"tool-calls",
			"error",
			"other"
		]).optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("abort"),
		reason: string().optional()
	}),
	strictObject({
		type: literal("message-metadata"),
		messageMetadata: unknown()
	})
])));
function isDataUIMessageChunk(chunk) {
	return chunk.type.startsWith("data-");
}
function createIdMap() {
	return /* @__PURE__ */ Object.create(null);
}
function isStaticToolUIPart(part) {
	return part.type.startsWith("tool-");
}
function isDynamicToolUIPart(part) {
	return part.type === "dynamic-tool";
}
function isToolUIPart(part) {
	return isStaticToolUIPart(part) || isDynamicToolUIPart(part);
}
function getStaticToolName(part) {
	return part.type.split("-").slice(1).join("-");
}
function createStreamingUIMessageState({ lastMessage, messageId }) {
	return {
		message: (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage : {
			id: messageId,
			metadata: void 0,
			role: "assistant",
			parts: []
		},
		activeTextParts: createIdMap(),
		activeReasoningParts: createIdMap(),
		partialToolCalls: createIdMap()
	};
}
function processUIMessageStream({ stream, messageMetadataSchema, dataPartSchemas, runUpdateMessageJob, onError, onToolCall, onData }) {
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		await runUpdateMessageJob(async ({ state, write }) => {
			var _a22, _b, _c, _d;
			function getToolInvocation(toolCallId) {
				const toolInvocation = state.message.parts.filter(isToolUIPart).find((invocation) => invocation.toolCallId === toolCallId);
				if (toolInvocation == null) throw new UIMessageStreamError({
					chunkType: "tool-invocation",
					chunkId: toolCallId,
					message: `No tool invocation found for tool call ID "${toolCallId}".`
				});
				return toolInvocation;
			}
			function updateToolPart(options) {
				var _a23;
				const part = state.message.parts.find((part2) => isStaticToolUIPart(part2) && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = (_a23 = anyOptions.providerExecuted) != null ? _a23 : part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: `tool-${options.toolName}`,
					toolCallId: options.toolCallId,
					state: options.state,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					input: anyOptions.input,
					output: anyOptions.output,
					rawInput: anyOptions.rawInput,
					errorText: anyOptions.errorText,
					providerExecuted: anyOptions.providerExecuted,
					preliminary: anyOptions.preliminary,
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			function updateDynamicToolPart(options) {
				var _a23, _b2;
				const part = state.message.parts.find((part2) => part2.type === "dynamic-tool" && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.toolName = options.toolName;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = (_a23 = anyOptions.rawInput) != null ? _a23 : anyPart.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = (_b2 = anyOptions.providerExecuted) != null ? _b2 : part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: "dynamic-tool",
					toolName: options.toolName,
					toolCallId: options.toolCallId,
					state: options.state,
					input: anyOptions.input,
					output: anyOptions.output,
					errorText: anyOptions.errorText,
					preliminary: anyOptions.preliminary,
					providerExecuted: anyOptions.providerExecuted,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			async function updateMessageMetadata(metadata) {
				if (metadata != null) {
					const mergedMetadata = state.message.metadata != null ? mergeObjects(state.message.metadata, metadata) : metadata;
					if (messageMetadataSchema != null) await validateTypes({
						value: mergedMetadata,
						schema: messageMetadataSchema,
						context: {
							field: "message.metadata",
							entityId: state.message.id
						}
					});
					state.message.metadata = mergedMetadata;
				}
			}
			switch (chunk.type) {
				case "text-start": {
					const textPart = {
						type: "text",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeTextParts[chunk.id] = textPart;
					state.message.parts.push(textPart);
					write();
					break;
				}
				case "text-delta": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-delta",
						chunkId: chunk.id,
						message: `Received text-delta for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`
					});
					textPart.text += chunk.delta;
					textPart.providerMetadata = (_a22 = chunk.providerMetadata) != null ? _a22 : textPart.providerMetadata;
					write();
					break;
				}
				case "text-end": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-end",
						chunkId: chunk.id,
						message: `Received text-end for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`
					});
					textPart.state = "done";
					textPart.providerMetadata = (_b = chunk.providerMetadata) != null ? _b : textPart.providerMetadata;
					delete state.activeTextParts[chunk.id];
					write();
					break;
				}
				case "reasoning-start": {
					const reasoningPart = {
						type: "reasoning",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeReasoningParts[chunk.id] = reasoningPart;
					state.message.parts.push(reasoningPart);
					write();
					break;
				}
				case "reasoning-delta": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-delta",
						chunkId: chunk.id,
						message: `Received reasoning-delta for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`
					});
					reasoningPart.text += chunk.delta;
					reasoningPart.providerMetadata = (_c = chunk.providerMetadata) != null ? _c : reasoningPart.providerMetadata;
					write();
					break;
				}
				case "reasoning-end": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-end",
						chunkId: chunk.id,
						message: `Received reasoning-end for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`
					});
					reasoningPart.providerMetadata = (_d = chunk.providerMetadata) != null ? _d : reasoningPart.providerMetadata;
					reasoningPart.state = "done";
					delete state.activeReasoningParts[chunk.id];
					write();
					break;
				}
				case "file":
					state.message.parts.push({
						type: "file",
						mediaType: chunk.mediaType,
						url: chunk.url,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					write();
					break;
				case "source-url":
					state.message.parts.push({
						type: "source-url",
						sourceId: chunk.sourceId,
						url: chunk.url,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "source-document":
					state.message.parts.push({
						type: "source-document",
						sourceId: chunk.sourceId,
						mediaType: chunk.mediaType,
						title: chunk.title,
						filename: chunk.filename,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "tool-input-start": {
					const toolInvocations = state.message.parts.filter(isStaticToolUIPart);
					state.partialToolCalls[chunk.toolCallId] = {
						text: "",
						toolName: chunk.toolName,
						index: toolInvocations.length,
						dynamic: chunk.dynamic,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					};
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				}
				case "tool-input-delta": {
					const partialToolCall = state.partialToolCalls[chunk.toolCallId];
					if (partialToolCall == null) throw new UIMessageStreamError({
						chunkType: "tool-input-delta",
						chunkId: chunk.toolCallId,
						message: `Received tool-input-delta for missing tool call with ID "${chunk.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`
					});
					partialToolCall.text += chunk.inputTextDelta;
					const { value: partialArgs } = await parsePartialJson(partialToolCall.text);
					if (partialToolCall.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					write();
					break;
				}
				case "tool-input-available":
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					write();
					if (onToolCall && !chunk.providerExecuted) await onToolCall({ toolCall: chunk });
					break;
				case "tool-input-error": {
					const existingPart = state.message.parts.filter(isToolUIPart).find((p) => p.toolCallId === chunk.toolCallId);
					if (existingPart != null ? existingPart.type === "dynamic-tool" : !!chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: void 0,
						rawInput: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					write();
					break;
				}
				case "tool-approval-request": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "approval-requested";
					toolInvocation.approval = {
						id: chunk.approvalId,
						...chunk.signature != null ? { signature: chunk.signature } : {}
					};
					write();
					break;
				}
				case "tool-output-denied": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "output-denied";
					write();
					break;
				}
				case "tool-output-available": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						preliminary: chunk.preliminary,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						providerExecuted: chunk.providerExecuted,
						preliminary: chunk.preliminary,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					write();
					break;
				}
				case "tool-output-error": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-error",
						input: toolInvocation.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-error",
						input: toolInvocation.input,
						rawInput: toolInvocation.rawInput,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					write();
					break;
				}
				case "start-step":
					state.message.parts.push({ type: "step-start" });
					break;
				case "finish-step":
					state.activeTextParts = createIdMap();
					state.activeReasoningParts = createIdMap();
					break;
				case "start":
					if (chunk.messageId != null) state.message.id = chunk.messageId;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageId != null || chunk.messageMetadata != null) write();
					break;
				case "finish":
					if (chunk.finishReason != null) state.finishReason = chunk.finishReason;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "message-metadata":
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "error":
					onError?.(new Error(chunk.errorText));
					break;
				default: if (isDataUIMessageChunk(chunk)) {
					if ((dataPartSchemas == null ? void 0 : dataPartSchemas[chunk.type]) != null) {
						const partIdx = state.message.parts.findIndex((p) => "id" in p && "data" in p && p.id === chunk.id && p.type === chunk.type);
						const actualPartIdx = partIdx >= 0 ? partIdx : state.message.parts.length;
						await validateTypes({
							value: chunk.data,
							schema: dataPartSchemas[chunk.type],
							context: {
								field: `message.parts[${actualPartIdx}].data`,
								entityName: chunk.type,
								entityId: chunk.id
							}
						});
					}
					const dataChunk = chunk;
					if (dataChunk.transient) {
						onData?.(dataChunk);
						break;
					}
					const existingUIPart = dataChunk.id != null ? state.message.parts.find((chunkArg) => dataChunk.type === chunkArg.type && dataChunk.id === chunkArg.id) : void 0;
					if (existingUIPart != null) existingUIPart.data = dataChunk.data;
					else state.message.parts.push(dataChunk);
					onData?.(dataChunk);
					write();
				}
			}
			controller.enqueue(chunk);
		});
	} }));
}
async function consumeStream({ stream, onError }) {
	const reader = stream.getReader();
	try {
		while (true) {
			const { done } = await reader.read();
			if (done) break;
		}
	} catch (error) {
		onError?.(error);
	} finally {
		reader.releaseLock();
	}
}
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
var toolMetadataSchema2 = record(string(), jsonValueSchema.optional());
lazySchema(() => zodSchema(array$1(object$1({
	id: string(),
	role: _enum([
		"system",
		"user",
		"assistant"
	]),
	metadata: unknown().optional(),
	parts: array$1(union([
		object$1({
			type: literal("text"),
			text: string(),
			state: _enum(["streaming", "done"]).optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("reasoning"),
			text: string(),
			state: _enum(["streaming", "done"]).optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("source-url"),
			sourceId: string(),
			url: string(),
			title: string().optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("source-document"),
			sourceId: string(),
			mediaType: string(),
			title: string(),
			filename: string().optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("file"),
			mediaType: string(),
			filename: string().optional(),
			url: string(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({ type: literal("step-start") }),
		object$1({
			type: string().startsWith("data-"),
			id: string().optional(),
			data: unknown()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("input-streaming"),
			input: unknown().optional(),
			providerExecuted: boolean().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			output: never().optional(),
			errorText: never().optional(),
			approval: never().optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("input-available"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: never().optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("approval-requested"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: never().optional(),
				reason: never().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("approval-responded"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: boolean(),
				reason: string().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-available"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: unknown(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			preliminary: boolean().optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional(),
				signature: string().optional()
			}).optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-error"),
			input: unknown().optional(),
			rawInput: unknown().optional(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: string(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional(),
				signature: string().optional()
			}).optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-denied"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(false),
				reason: string().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("input-streaming"),
			providerExecuted: boolean().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			input: unknown().optional(),
			output: never().optional(),
			errorText: never().optional(),
			approval: never().optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("input-available"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: never().optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("approval-requested"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: never().optional(),
				reason: never().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("approval-responded"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: boolean(),
				reason: string().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-available"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: unknown(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			preliminary: boolean().optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional(),
				signature: string().optional()
			}).optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-error"),
			providerExecuted: boolean().optional(),
			input: unknown().optional(),
			rawInput: unknown().optional(),
			output: never().optional(),
			errorText: string(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional(),
				signature: string().optional()
			}).optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-denied"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(false),
				reason: string().optional(),
				signature: string().optional()
			})
		})
	])).nonempty("Message must contain at least one part")
})).nonempty("Messages array must not be empty")));
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
var SerialJobExecutor = class {
	constructor() {
		this.queue = [];
		this.isProcessing = false;
	}
	async processQueue() {
		if (this.isProcessing) return;
		this.isProcessing = true;
		while (this.queue.length > 0) {
			await this.queue[0]();
			this.queue.shift();
		}
		this.isProcessing = false;
	}
	async run(job) {
		return new Promise((resolve3, reject) => {
			this.queue.push(async () => {
				try {
					await job();
					resolve3();
				} catch (error) {
					reject(error);
				}
			});
			this.processQueue();
		});
	}
};
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
async function convertFileListToFileUIParts(files) {
	if (files == null) return [];
	if (!globalThis.FileList || !(files instanceof globalThis.FileList)) throw new Error("FileList is not supported in the current environment");
	return Promise.all(Array.from(files).map(async (file) => {
		const { name: name22, type } = file;
		return {
			type: "file",
			mediaType: type,
			filename: name22,
			url: await new Promise((resolve3, reject) => {
				const reader = new FileReader();
				reader.onload = (readerEvent) => {
					var _a22;
					resolve3((_a22 = readerEvent.target) == null ? void 0 : _a22.result);
				};
				reader.onerror = (error) => reject(error);
				reader.readAsDataURL(file);
			})
		};
	}));
}
var HttpChatTransport = class {
	constructor({ api = "/api/chat", credentials, headers, body, fetch: fetch2, prepareSendMessagesRequest, prepareReconnectToStreamRequest }) {
		this.api = api;
		this.credentials = credentials;
		this.headers = headers;
		this.body = body;
		this.fetch = fetch2;
		this.prepareSendMessagesRequest = prepareSendMessagesRequest;
		this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
	}
	async sendMessages({ abortSignal, ...options }) {
		var _a22, _b, _c, _d, _e;
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await ((_a22 = this.prepareSendMessagesRequest) == null ? void 0 : _a22.call(this, {
			api: this.api,
			id: options.chatId,
			messages: options.messages,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata,
			trigger: options.trigger,
			messageId: options.messageId
		}));
		const api = (_b = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b : this.api;
		const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const body = (preparedRequest == null ? void 0 : preparedRequest.body) !== void 0 ? preparedRequest.body : {
			...resolvedBody,
			...options.body,
			id: options.chatId,
			messages: options.messages,
			trigger: options.trigger,
			messageId: options.messageId
		};
		const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
		const response = await ((_d = this.fetch) != null ? _d : globalThis.fetch)(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...headers
			},
			body: JSON.stringify(body),
			credentials,
			signal: abortSignal
		});
		if (!response.ok) throw new Error((_e = await response.text()) != null ? _e : "Failed to fetch the chat response.");
		if (!response.body) throw new Error("The response body is empty.");
		return this.processResponseStream(response.body);
	}
	async reconnectToStream(options) {
		var _a22, _b, _c, _d, _e;
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await ((_a22 = this.prepareReconnectToStreamRequest) == null ? void 0 : _a22.call(this, {
			api: this.api,
			id: options.chatId,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata
		}));
		const api = (_b = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b : `${this.api}/${options.chatId}/stream`;
		const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
		const response = await ((_d = this.fetch) != null ? _d : globalThis.fetch)(api, {
			method: "GET",
			headers,
			credentials
		});
		if (response.status === 204) return null;
		if (!response.ok) throw new Error((_e = await response.text()) != null ? _e : "Failed to fetch the chat response.");
		if (!response.body) throw new Error("The response body is empty.");
		return this.processResponseStream(response.body);
	}
};
var DefaultChatTransport = class extends HttpChatTransport {
	constructor(options = {}) {
		super(options);
	}
	processResponseStream(stream) {
		return parseJsonEventStream({
			stream,
			schema: uiMessageChunkSchema
		}).pipeThrough(new TransformStream({ async transform(chunk, controller) {
			if (!chunk.success) throw chunk.error;
			controller.enqueue(chunk.value);
		} }));
	}
};
var AbstractChat = class {
	constructor({ generateId: generateId2 = generateId, id = generateId2(), transport = new DefaultChatTransport(), messageMetadataSchema, dataPartSchemas, state, onError, onToolCall, onFinish, onData, sendAutomaticallyWhen }) {
		this.activeResponse = void 0;
		this.jobExecutor = new SerialJobExecutor();
		/**
		* Appends or replaces a user message to the chat list. This triggers the API call to fetch
		* the assistant's response.
		*
		* If a messageId is provided, the message will be replaced.
		*/
		this.sendMessage = async (message, options) => {
			var _a22, _b, _c, _d;
			if (message == null) {
				await this.makeRequest({
					trigger: "submit-message",
					messageId: (_a22 = this.lastMessage) == null ? void 0 : _a22.id,
					...options
				});
				return;
			}
			let uiMessage;
			if ("text" in message || "files" in message) uiMessage = { parts: [...Array.isArray(message.files) ? message.files : await convertFileListToFileUIParts(message.files), ..."text" in message && message.text != null ? [{
				type: "text",
				text: message.text
			}] : []] };
			else uiMessage = message;
			if (message.messageId != null) {
				const messageIndex = this.state.messages.findIndex((m) => m.id === message.messageId);
				if (messageIndex === -1) throw new Error(`message with id ${message.messageId} not found`);
				if (this.state.messages[messageIndex].role !== "user") throw new Error(`message with id ${message.messageId} is not a user message`);
				this.state.messages = this.state.messages.slice(0, messageIndex + 1);
				this.state.replaceMessage(messageIndex, {
					...uiMessage,
					id: message.messageId,
					role: (_b = uiMessage.role) != null ? _b : "user",
					metadata: message.metadata
				});
			} else this.state.pushMessage({
				...uiMessage,
				id: (_c = uiMessage.id) != null ? _c : this.generateId(),
				role: (_d = uiMessage.role) != null ? _d : "user",
				metadata: message.metadata
			});
			await this.makeRequest({
				trigger: "submit-message",
				messageId: message.messageId,
				...options
			});
		};
		/**
		* Regenerate the assistant message with the provided message id.
		* If no message id is provided, the last assistant message will be regenerated.
		*/
		this.regenerate = async ({ messageId, ...options } = {}) => {
			const messageIndex = messageId == null ? this.state.messages.length - 1 : this.state.messages.findIndex((message) => message.id === messageId);
			if (messageIndex === -1) throw new Error(`message ${messageId} not found`);
			this.state.messages = this.state.messages.slice(0, this.messages[messageIndex].role === "assistant" ? messageIndex : messageIndex + 1);
			await this.makeRequest({
				trigger: "regenerate-message",
				messageId,
				...options
			});
		};
		/**
		* Attempt to resume an ongoing streaming response.
		*/
		this.resumeStream = async (options = {}) => {
			await this.makeRequest({
				trigger: "resume-stream",
				...options
			});
		};
		/**
		* Clear the error state and set the status to ready if the chat is in an error state.
		*/
		this.clearError = () => {
			if (this.status === "error") {
				this.state.error = void 0;
				this.setStatus({ status: "ready" });
			}
		};
		this.addToolApprovalResponse = async ({ id, approved, reason, options }) => this.jobExecutor.run(async () => {
			const messages = this.state.messages;
			const lastMessage = messages[messages.length - 1];
			const updatePart = (part) => isToolUIPart(part) && part.state === "approval-requested" && part.approval.id === id ? {
				...part,
				state: "approval-responded",
				approval: {
					id,
					approved,
					reason
				}
			} : part;
			this.state.replaceMessage(messages.length - 1, {
				...lastMessage,
				parts: lastMessage.parts.map(updatePart)
			});
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen) this.shouldSendAutomatically().then((shouldSend) => {
				var _a22;
				if (shouldSend) this.makeRequest({
					trigger: "submit-message",
					messageId: (_a22 = this.lastMessage) == null ? void 0 : _a22.id,
					...options
				});
			});
		});
		this.addToolOutput = async ({ state = "output-available", toolCallId, output, errorText, options }) => this.jobExecutor.run(async () => {
			const messages = this.state.messages;
			const lastMessage = messages[messages.length - 1];
			const updatePart = (part) => isToolUIPart(part) && part.toolCallId === toolCallId ? {
				...part,
				state,
				output,
				errorText
			} : part;
			this.state.replaceMessage(messages.length - 1, {
				...lastMessage,
				parts: lastMessage.parts.map(updatePart)
			});
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen) this.shouldSendAutomatically().then((shouldSend) => {
				var _a22;
				if (shouldSend) this.makeRequest({
					trigger: "submit-message",
					messageId: (_a22 = this.lastMessage) == null ? void 0 : _a22.id,
					...options
				});
			});
		});
		/** @deprecated Use addToolOutput */
		this.addToolResult = this.addToolOutput;
		/**
		* Abort the current request immediately, keep the generated tokens if any.
		*/
		this.stop = async () => {
			var _a22;
			if (this.status !== "streaming" && this.status !== "submitted") return;
			if ((_a22 = this.activeResponse) == null ? void 0 : _a22.abortController) this.activeResponse.abortController.abort();
		};
		this.id = id;
		this.transport = transport;
		this.generateId = generateId2;
		this.messageMetadataSchema = messageMetadataSchema;
		this.dataPartSchemas = dataPartSchemas;
		this.state = state;
		this.onError = onError;
		this.onToolCall = onToolCall;
		this.onFinish = onFinish;
		this.onData = onData;
		this.sendAutomaticallyWhen = sendAutomaticallyWhen;
	}
	/**
	* Hook status:
	*
	* - `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
	* - `streaming`: The response is actively streaming in from the API, receiving chunks of data.
	* - `ready`: The full response has been received and processed; a new user message can be submitted.
	* - `error`: An error occurred during the API request, preventing successful completion.
	*/
	get status() {
		return this.state.status;
	}
	setStatus({ status, error }) {
		if (this.status === status) return;
		this.state.status = status;
		this.state.error = error;
	}
	get error() {
		return this.state.error;
	}
	get messages() {
		return this.state.messages;
	}
	get lastMessage() {
		return this.state.messages[this.state.messages.length - 1];
	}
	set messages(messages) {
		this.state.messages = messages;
	}
	async shouldSendAutomatically() {
		if (!this.sendAutomaticallyWhen) return false;
		const result = this.sendAutomaticallyWhen({ messages: this.state.messages });
		if (result && typeof result === "object" && "then" in result) return await result;
		return result;
	}
	async makeRequest({ trigger, metadata, headers, body, messageId }) {
		var _a22, _b, _c;
		let resumeStream;
		if (trigger === "resume-stream") try {
			const reconnect = await this.transport.reconnectToStream({
				chatId: this.id,
				metadata,
				headers,
				body
			});
			if (reconnect == null) return;
			resumeStream = reconnect;
		} catch (err) {
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
			return;
		}
		this.setStatus({
			status: "submitted",
			error: void 0
		});
		const lastMessage = this.lastMessage;
		let isAbort = false;
		let isDisconnect = false;
		let isError = false;
		try {
			const activeResponse = {
				state: createStreamingUIMessageState({
					lastMessage: this.state.snapshot(lastMessage),
					messageId: this.generateId()
				}),
				abortController: new AbortController()
			};
			activeResponse.abortController.signal.addEventListener("abort", () => {
				isAbort = true;
			});
			this.activeResponse = activeResponse;
			let stream;
			if (trigger === "resume-stream") stream = resumeStream;
			else stream = await this.transport.sendMessages({
				chatId: this.id,
				messages: this.state.messages,
				abortSignal: activeResponse.abortController.signal,
				metadata,
				headers,
				body,
				trigger,
				messageId
			});
			const runUpdateMessageJob = (job) => this.jobExecutor.run(() => job({
				state: activeResponse.state,
				write: () => {
					var _a23;
					this.setStatus({ status: "streaming" });
					if (activeResponse.state.message.id === ((_a23 = this.lastMessage) == null ? void 0 : _a23.id)) this.state.replaceMessage(this.state.messages.length - 1, activeResponse.state.message);
					else this.state.pushMessage(activeResponse.state.message);
				}
			}));
			await consumeStream({
				stream: processUIMessageStream({
					stream,
					onToolCall: this.onToolCall,
					onData: this.onData,
					messageMetadataSchema: this.messageMetadataSchema,
					dataPartSchemas: this.dataPartSchemas,
					runUpdateMessageJob,
					onError: (error) => {
						throw error;
					}
				}),
				onError: (error) => {
					throw error;
				}
			});
			this.setStatus({ status: "ready" });
		} catch (err) {
			if (isAbort || err.name === "AbortError") {
				isAbort = true;
				this.setStatus({ status: "ready" });
				return null;
			}
			isError = true;
			if (err instanceof TypeError && (err.message.toLowerCase().includes("fetch") || err.message.toLowerCase().includes("network"))) isDisconnect = true;
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
		} finally {
			try {
				(_b = this.onFinish) == null || _b.call(this, {
					message: this.activeResponse.state.message,
					messages: this.state.messages,
					isAbort,
					isDisconnect,
					isError,
					finishReason: (_a22 = this.activeResponse) == null ? void 0 : _a22.state.finishReason
				});
			} catch (err) {
				console.error(err);
			}
			this.activeResponse = void 0;
		}
		if (!isError && await this.shouldSendAutomatically()) await this.makeRequest({
			trigger: "submit-message",
			messageId: (_c = this.lastMessage) == null ? void 0 : _c.id,
			metadata,
			headers,
			body
		});
	}
};
//#endregion
//#region node_modules/@ai-sdk/react/dist/index.mjs
var import_throttleit = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	function throttle(function_, wait) {
		if (typeof function_ !== "function") throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
		let timeoutId;
		let lastCallTime = 0;
		return function throttled(...arguments_) {
			clearTimeout(timeoutId);
			const now = Date.now();
			const delayForNextCall = wait - (now - lastCallTime);
			if (delayForNextCall <= 0) {
				lastCallTime = now;
				function_.apply(this, arguments_);
			} else timeoutId = setTimeout(() => {
				lastCallTime = Date.now();
				function_.apply(this, arguments_);
			}, delayForNextCall);
		};
	}
	module.exports = throttle;
})))(), 1);
var __accessCheck = (obj, member, msg) => {
	if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
	__accessCheck(obj, member, "read from private field");
	return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
	if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
	member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
	__accessCheck(obj, member, "write to private field");
	setter ? setter.call(obj, value) : member.set(obj, value);
	return value;
};
function throttle(fn, waitMs) {
	return waitMs != null ? (0, import_throttleit.default)(fn, waitMs) : fn;
}
var _messages, _status, _error, _messagesCallbacks, _statusCallbacks, _errorCallbacks, _callMessagesCallbacks, _callStatusCallbacks, _callErrorCallbacks;
var ReactChatState = class {
	constructor(initialMessages = []) {
		__privateAdd(this, _messages, void 0);
		__privateAdd(this, _status, "ready");
		__privateAdd(this, _error, void 0);
		__privateAdd(this, _messagesCallbacks, /* @__PURE__ */ new Set());
		__privateAdd(this, _statusCallbacks, /* @__PURE__ */ new Set());
		__privateAdd(this, _errorCallbacks, /* @__PURE__ */ new Set());
		this.pushMessage = (message) => {
			__privateSet(this, _messages, __privateGet(this, _messages).concat(message));
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.popMessage = () => {
			__privateSet(this, _messages, __privateGet(this, _messages).slice(0, -1));
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.replaceMessage = (index, message) => {
			__privateSet(this, _messages, [
				...__privateGet(this, _messages).slice(0, index),
				this.snapshot(message),
				...__privateGet(this, _messages).slice(index + 1)
			]);
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.snapshot = (value) => structuredClone(value);
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => {
			const callback = throttleWaitMs ? throttle(onChange, throttleWaitMs) : onChange;
			__privateGet(this, _messagesCallbacks).add(callback);
			return () => {
				__privateGet(this, _messagesCallbacks).delete(callback);
			};
		};
		this["~registerStatusCallback"] = (onChange) => {
			__privateGet(this, _statusCallbacks).add(onChange);
			return () => {
				__privateGet(this, _statusCallbacks).delete(onChange);
			};
		};
		this["~registerErrorCallback"] = (onChange) => {
			__privateGet(this, _errorCallbacks).add(onChange);
			return () => {
				__privateGet(this, _errorCallbacks).delete(onChange);
			};
		};
		__privateAdd(this, _callMessagesCallbacks, () => {
			__privateGet(this, _messagesCallbacks).forEach((callback) => callback());
		});
		__privateAdd(this, _callStatusCallbacks, () => {
			__privateGet(this, _statusCallbacks).forEach((callback) => callback());
		});
		__privateAdd(this, _callErrorCallbacks, () => {
			__privateGet(this, _errorCallbacks).forEach((callback) => callback());
		});
		__privateSet(this, _messages, initialMessages);
	}
	get status() {
		return __privateGet(this, _status);
	}
	set status(newStatus) {
		__privateSet(this, _status, newStatus);
		__privateGet(this, _callStatusCallbacks).call(this);
	}
	get error() {
		return __privateGet(this, _error);
	}
	set error(newError) {
		__privateSet(this, _error, newError);
		__privateGet(this, _callErrorCallbacks).call(this);
	}
	get messages() {
		return __privateGet(this, _messages);
	}
	set messages(newMessages) {
		__privateSet(this, _messages, [...newMessages]);
		__privateGet(this, _callMessagesCallbacks).call(this);
	}
};
_messages = /* @__PURE__ */ new WeakMap();
_status = /* @__PURE__ */ new WeakMap();
_error = /* @__PURE__ */ new WeakMap();
_messagesCallbacks = /* @__PURE__ */ new WeakMap();
_statusCallbacks = /* @__PURE__ */ new WeakMap();
_errorCallbacks = /* @__PURE__ */ new WeakMap();
_callMessagesCallbacks = /* @__PURE__ */ new WeakMap();
_callStatusCallbacks = /* @__PURE__ */ new WeakMap();
_callErrorCallbacks = /* @__PURE__ */ new WeakMap();
var _state;
var Chat = class extends AbstractChat {
	constructor({ messages, ...init }) {
		const state = new ReactChatState(messages);
		super({
			...init,
			state
		});
		__privateAdd(this, _state, void 0);
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => __privateGet(this, _state)["~registerMessagesCallback"](onChange, throttleWaitMs);
		this["~registerStatusCallback"] = (onChange) => __privateGet(this, _state)["~registerStatusCallback"](onChange);
		this["~registerErrorCallback"] = (onChange) => __privateGet(this, _state)["~registerErrorCallback"](onChange);
		__privateSet(this, _state, state);
	}
};
_state = /* @__PURE__ */ new WeakMap();
function useChat({ experimental_throttle: throttleWaitMs, resume = false, ...options } = {}) {
	const callbacksRef = (0, import_react.useRef)(!("chat" in options) ? {
		onToolCall: options.onToolCall,
		onData: options.onData,
		onFinish: options.onFinish,
		onError: options.onError,
		sendAutomaticallyWhen: options.sendAutomaticallyWhen
	} : {});
	if (!("chat" in options)) callbacksRef.current = {
		onToolCall: options.onToolCall,
		onData: options.onData,
		onFinish: options.onFinish,
		onError: options.onError,
		sendAutomaticallyWhen: options.sendAutomaticallyWhen
	};
	const optionsWithCallbacks = {
		...options,
		onToolCall: (arg) => {
			var _a, _b;
			return (_b = (_a = callbacksRef.current).onToolCall) == null ? void 0 : _b.call(_a, arg);
		},
		onData: (arg) => {
			var _a, _b;
			return (_b = (_a = callbacksRef.current).onData) == null ? void 0 : _b.call(_a, arg);
		},
		onFinish: (arg) => {
			var _a, _b;
			return (_b = (_a = callbacksRef.current).onFinish) == null ? void 0 : _b.call(_a, arg);
		},
		onError: (arg) => {
			var _a, _b;
			return (_b = (_a = callbacksRef.current).onError) == null ? void 0 : _b.call(_a, arg);
		},
		sendAutomaticallyWhen: (arg) => {
			var _a, _b, _c;
			return (_c = (_b = (_a = callbacksRef.current).sendAutomaticallyWhen) == null ? void 0 : _b.call(_a, arg)) != null ? _c : false;
		}
	};
	const chatRef = (0, import_react.useRef)("chat" in options ? options.chat : new Chat(optionsWithCallbacks));
	if ("chat" in options && options.chat !== chatRef.current || "id" in options && chatRef.current.id !== options.id) chatRef.current = "chat" in options ? options.chat : new Chat(optionsWithCallbacks);
	const messages = (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((update) => chatRef.current["~registerMessagesCallback"](update, throttleWaitMs), [throttleWaitMs, chatRef.current.id]), () => chatRef.current.messages, () => chatRef.current.messages);
	const status = (0, import_react.useSyncExternalStore)(chatRef.current["~registerStatusCallback"], () => chatRef.current.status, () => chatRef.current.status);
	const error = (0, import_react.useSyncExternalStore)(chatRef.current["~registerErrorCallback"], () => chatRef.current.error, () => chatRef.current.error);
	const setMessages = (0, import_react.useCallback)((messagesParam) => {
		if (typeof messagesParam === "function") messagesParam = messagesParam(chatRef.current.messages);
		chatRef.current.messages = messagesParam;
	}, [chatRef]);
	(0, import_react.useEffect)(() => {
		if (resume) chatRef.current.resumeStream();
	}, [resume, chatRef]);
	return {
		id: chatRef.current.id,
		messages,
		setMessages,
		sendMessage: chatRef.current.sendMessage,
		regenerate: chatRef.current.regenerate,
		clearError: chatRef.current.clearError,
		stop: chatRef.current.stop,
		error,
		resumeStream: chatRef.current.resumeStream,
		status,
		/**
		* @deprecated Use `addToolOutput` instead.
		*/
		addToolResult: chatRef.current.addToolOutput,
		addToolOutput: chatRef.current.addToolOutput,
		addToolApprovalResponse: chatRef.current.addToolApprovalResponse
	};
}
//#endregion
export { require_src as n, require_react as r, useChat as t };
