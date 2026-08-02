import { o as __toESM } from "../../_runtime.mjs";
import { n as require_src } from "../@ai-sdk/react+[...].mjs";
import { $ as applySdkMetadata, $n as fill, $t as generateSentryTraceHeader, A as getProviderMetadataAttributes, An as timestampInSeconds, At as withActiveSpan$1, B as dirname, Bn as safeDateNow, Bt as hasSpansEnabled, C as instrumentGoogleGenAIClient, Cn as getTraceContextFromScope, Ct as isTracingSuppressed$1, D as instrumentOpenAiClient, Dn as getDefaultCurrentScope, Dt as startSpan$2, E as ANTHROPIC_AI_INTEGRATION_NAME, En as setAsyncContextStrategy, Et as startNewTrace$1, F as GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, Fn as snipLine, Ft as logSpanStart, G as inboundFiltersIntegration, Gn as markSpanAsTracerProviderSpan, Gt as getActiveSpan$1, H as triggerHandlers, Hn as _INTERNAL_setDeferSegmentSpanCapture, Ht as SentryNonRecordingSpan, I as GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, In as stringify, It as getDynamicSamplingContextFromScope, J as SPAN_KIND, Jn as spanShouldInferOtelSource, Jt as spanIsSampled, K as functionToStringIntegration, Kn as markSpanForOtelSourceInference, Kt as getRootSpan$1, L as _INTERNAL_flushLogsBuffer, Ln as truncate, Lt as getDynamicSamplingContextFromSpan, M as _INTERNAL_getSpanContextForToolCallId, Mn as generateTraceId, Mt as serializeEnvelope, N as getTruncatedJsonString, Nn as parseSemver, Nt as sampleSpan, O as OPENAI_INTEGRATION_NAME, On as getDefaultIsolationScope, Ot as startSpanManual$1, P as shouldEnableTruncation, Pn as isMatchingPattern, Pt as logSpanEnd, Q as getTraceData$1, Qn as addNonEnumerableProperty, Qt as spanToTraceContext, R as conversationIdIntegration, Rn as createStackParser, Rt as hasSpanStreamingEnabled, S as LANGCHAIN_INTEGRATION_NAME, Sn as getIsolationScope, St as continueTrace$1, T as instrumentAnthropicAiClient, Tn as getAsyncContextStrategy, Tt as startInactiveSpan$1, U as requestDataIntegration, Un as debounce, Ut as addChildSpanToSpan, V as maybeInstrument, Vn as safeMathRandom, Vt as handleCallbackErrors, W as linkedErrorsIntegration, Wn as getCapturedScopesOnSpan, Wt as convertSpanLinksForEnvelope, X as httpHeadersToSpanAttributes, Xn as derefWeakRef, Xt as spanTimeInputToSeconds, Y as spanKindToName, Yn as spanSourceWasExplicitlySet, Yt as spanIsSentrySpan, Z as shouldPropagateTraceForUrl, Zn as makeWeakRef, Zt as spanToJSON, _ as instrumentCreateReactAgent, _n as SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, _t as flush, a as getRequestOptions, an as baggageHeaderToDynamicSamplingContext, ar as consoleSandbox, at as envToBool, b as createLangChainCallbackHandler, bn as getClient, bt as bindScopeToEmitter, c as HTTP_ON_SERVER_REQUEST, cn as parseBaggageHeader, cr as getMainCarrier, ct as _INTERNAL_skipAiProviderWrapping, d as patchExpressModule, dn as SEMANTIC_ATTRIBUTE_CACHE_HIT, dt as getIntegrationsToSetup, en as generateTraceparentHeader, er as markFunctionWrapped, et as getSanitizedUrlString, f as nodeStackLineParser, fn as SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE, ft as createTransport, g as getBreadcrumbLogLevelFromHttpStatusCode, gn as SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, gt as endSession, h as replaceExports, hn as SEMANTIC_ATTRIBUTE_SENTRY_OP, ht as captureException, i as getHttpClientSubscriptions, in as SENTRY_BAGGAGE_KEY_PREFIX, ir as CONSOLE_LEVELS, it as stripUrlQueryAndFragment, j as _INTERNAL_cleanupToolCallSpanContext, jn as generateSpanId, jt as timedEventsToMeasurements, k as addVercelAiProcessors, kn as _setSpanForScope, kt as suppressTracing$1, l as _sanitizeSqlQuery, ln as getSpanStatusFromHttpCode, lr as GLOBAL_OBJ, lt as defineIntegration, m as LRUMap, mn as SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME, mt as captureEvent, n as getHttpServerSubscriptions, nn as shouldContinueTrace, nr as isObjectLike, nt as parseUrl, o as getRequestUrlFromClientRequest, on as dynamicSamplingContextToSentryBaggageHeader, or as debug, ot as _INTERNAL_clearAiProviderSkips, p as ServerRuntimeClient, pn as SEMANTIC_ATTRIBUTE_CACHE_KEY, pt as waitForTracingChannelBinding, q as addBreadcrumb, qn as setCapturedScopesOnSpan, qt as getStatusMessage, r as patchHttpModuleClient, rn as parseSampleRate, rr as isThenable, rt as stripDataUrlContent, s as HTTP_ON_CLIENT_REQUEST, sn as mergeBaggageHeaders, sr as originalConsoleMethods, st as _INTERNAL_shouldSkipAiProviderWrapping, t as instrumentLangChainEmbeddings, tn as propagationContextFromHeaders, tr as isError, tt as parseStringToURLObject, u as instrumentPostgresJsSql, un as GEN_AI_CONVERSATION_ID_ATTRIBUTE, ur as SDK_VERSION, ut as extendIntegration, v as instrumentLangGraph$1, vn as SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, vt as startSession, w as GOOGLE_GENAI_INTEGRATION_NAME, wn as withScope, wt as spanIsIgnored, x as _INTERNAL_mergeLangChainCallbackHandler, xn as getCurrentScope, xt as _INTERNAL_startInactiveSpan, y as LANGGRAPH_INTEGRATION_NAME, yn as SEMANTIC_ATTRIBUTE_URL_FULL, yt as safeSetSpanJSONAttributes, z as consoleIntegration$1, zn as stackParserFromStackParserOptions, zt as shouldIgnoreSpan$1 } from "../sentry__core.mjs";
import { $ as Ya, A as Ma, At as za, B as Qu, C as Is, Ct as qr, D as Ku, Dt as ws, E as Kt, Et as tc, F as Pa, G as Tl, H as Rs, J as Vr, L as Pt, M as Nt, N as Oa, Ot as wt, P as Ol, Q as Xo, R as Qo, S as Il, Tt as sa, U as Sl, V as Ra, W as Ss, X as Wa, Y as Vu, Z as Wo, _ as Gr, _t as oa, a as Ba, at as au, b as Hu, bt as pu, c as Dl, ct as fp, d as Ec, dt as ka, et as Yr, f as El, ft as la, g as Go, gt as ns, h as Gn, ht as ml, i as As, it as ar, k as Lt, kt as xs, l as Dt, lt as jr, m as Ga, mt as ma, n as i_, nt as Zo, ot as dl, p as Fr, pt as lu, q as Ts, r as k, rt as Zr, s as Ct, st as fl, t as b, tt as Yu, u as Ea, ut as jt, v as Gt, vt as ou, w as Ka, wt as rc, x as Ia, xt as qa, y as Ht, yt as pa, z as Qt } from "../sentry__conventions.mjs";
import { b as suppressTracing$2, d as SDK_INFO, n as RPCType, r as setRPCMetadata, v as W3CBaggagePropagator, y as isTracingSuppressed$2 } from "../@opentelemetry/core+[...].mjs";
import { a as registerInstrumentations, i as safeExecuteInTheMiddle, n as InstrumentationBase, r as isWrapped, t as InstrumentationNodeModuleDefinition } from "../opentelemetry__instrumentation.mjs";
import { o as SamplingDecision } from "../opentelemetry__sdk-trace.mjs";
import { t as BasicTracerProvider } from "../opentelemetry__sdk-trace-base.mjs";
import * as http from "node:http";
import { Readable } from "node:stream";
import * as https from "node:https";
import { normalize } from "path";
import { EventEmitter, errorMonitor } from "node:events";
import * as diagnosticsChannel from "node:diagnostics_channel";
import { subscribe, unsubscribe } from "node:diagnostics_channel";
import { createAddHookMessageChannel } from "import-in-the-middle";
import * as diagch from "diagnostics_channel";
import { URL as URL$1 } from "url";
import { AsyncLocalStorage } from "node:async_hooks";
import { execFile } from "node:child_process";
import { createReadStream, readFile, readFileSync, readdir } from "node:fs";
import * as os from "node:os";
import { join, posix, sep } from "node:path";
import * as util from "node:util";
import { promisify } from "node:util";
import { createInterface } from "node:readline";
import { Worker } from "node:worker_threads";
import { isMainThread, threadId } from "worker_threads";
import { createGzip } from "node:zlib";
import * as net from "node:net";
import * as tls from "node:tls";
import * as moduleModule from "module";
import { EventEmitter as EventEmitter$1 } from "events";
//#region node_modules/@sentry/node-core/build/esm/debug-build.js
var import_src = /* @__PURE__ */ __toESM(require_src());
var DEBUG_BUILD$3 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/http/httpServerIntegration.js
var HTTP_SERVER_INSTRUMENTED_KEY = (0, import_src.createContextKey)("sentry_http_server_instrumented");
var INTEGRATION_NAME$36 = "Http.Server";
function addStartSpanCallback(request, callback) {
	addNonEnumerableProperty(request, "_startSpanCallback", new WeakRef(callback));
}
var _httpServerIntegration = ((options = {}) => {
	const _options = {
		sessions: options.sessions ?? true,
		sessionFlushingDelayMS: options.sessionFlushingDelayMS ?? 6e4,
		maxRequestBodySize: options.maxRequestBodySize ?? "medium",
		spans: false,
		ignoreRequestBody: options.ignoreRequestBody,
		/**
		* Hook called by core's `instrumentServer` to wrap the upstream
		* `emit('request')` call.
		*
		* We use it to extract OTel context from request headers and re-enter
		* the OTel context before the framework sees the request, so subsequent
		* spans (eg from `httpServerSpansIntegration`) attach to the right trace.
		*/
		wrapServerEmitRequest(request, response, normalizedRequest, next) {
			const client = getClient();
			if (!client) return next();
			if (import_src.context.active().getValue(HTTP_SERVER_INSTRUMENTED_KEY)) return next();
			const ctx = import_src.propagation.extract(import_src.context.active(), normalizedRequest.headers).setValue(HTTP_SERVER_INSTRUMENTED_KEY, true);
			import_src.context.with(ctx, () => {
				client.emit("httpServerRequest", request, response, normalizedRequest);
				const callback = request._startSpanCallback?.deref();
				if (callback) callback(() => {
					next();
					return true;
				});
				else next();
			});
		}
	};
	return {
		name: INTEGRATION_NAME$36,
		setupOnce() {
			const { [HTTP_ON_SERVER_REQUEST]: onHttpServerRequestStart } = getHttpServerSubscriptions(_options);
			subscribe(HTTP_ON_SERVER_REQUEST, onHttpServerRequestStart);
		},
		afterAllSetup(client) {
			if (DEBUG_BUILD$3 && client.getIntegrationByName("Http")) debug.warn("It seems that you have manually added `httpServerIntegration` while `httpIntegration` is also present. Make sure to remove `httpServerIntegration` when adding `httpIntegration`.");
		}
	};
});
var httpServerIntegration = _httpServerIntegration;
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/http/httpServerSpansIntegration.js
var INTEGRATION_NAME$35 = "Http.ServerSpans";
var _httpServerSpansIntegration = ((options = {}) => {
	const ignoreStaticAssets = options.ignoreStaticAssets ?? true;
	const ignoreIncomingRequests = options.ignoreIncomingRequests;
	const ignoreStatusCodes = options.ignoreStatusCodes ?? [
		[401, 404],
		[301, 303],
		[305, 399]
	];
	const { onSpanCreated } = options;
	const { requestHook, responseHook, applyCustomAttributesOnSpan } = options.instrumentation ?? {};
	return {
		name: INTEGRATION_NAME$35,
		setup(client) {
			if (typeof __SENTRY_TRACING__ !== "undefined" && !__SENTRY_TRACING__) return;
			client.on("httpServerRequest", (_request, _response, normalizedRequest) => {
				const request = _request;
				const response = _response;
				const startSpan = (next) => {
					if (shouldIgnoreSpansForIncomingRequest(request, {
						ignoreStaticAssets,
						ignoreIncomingRequests
					})) {
						DEBUG_BUILD$3 && debug.log(INTEGRATION_NAME$35, "Skipping span creation for incoming request", request.url);
						return next();
					}
					const fullUrl = normalizedRequest.url || request.url || "/";
					const urlObj = parseStringToURLObject(fullUrl);
					const headers = request.headers;
					const userAgent = headers["user-agent"];
					const ips = headers["x-forwarded-for"];
					const httpVersion = request.httpVersion;
					const host = headers.host;
					const hostname = host?.replace(/^(.*)(:[0-9]{1,5})/, "$1") || "localhost";
					const scheme = fullUrl.startsWith("https") ? "https" : "http";
					const method = normalizedRequest.method || request.method?.toUpperCase() || "GET";
					const httpTargetWithoutQueryFragment = urlObj ? urlObj.pathname : stripUrlQueryAndFragment(fullUrl);
					const span = startInactiveSpan$1({
						name: `${method} ${httpTargetWithoutQueryFragment}`,
						kind: SPAN_KIND.SERVER,
						attributes: {
							[SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.server",
							[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.http",
							[rc]: isKnownPrefetchRequest(request) || void 0,
							[ws]: fullUrl,
							[Ka]: normalizedRequest.method,
							[xs]: urlObj ? `${urlObj.pathname}${urlObj.search}` : httpTargetWithoutQueryFragment,
							[za]: host,
							[Sl]: hostname,
							[Wa]: typeof ips === "string" ? ips.split(",")[0] : void 0,
							[Rs]: userAgent,
							[Is]: scheme,
							[Ba]: httpVersion,
							[Dl]: httpVersion?.toUpperCase() === "QUIC" ? "ip_udp" : "ip_tcp",
							...getRequestContentLengthAttribute(request),
							...httpHeadersToSpanAttributes(normalizedRequest.headers || {}, client.getDataCollectionOptions())
						}
					});
					requestHook?.(span, request);
					responseHook?.(span, response);
					applyCustomAttributesOnSpan?.(span, request, response);
					onSpanCreated?.(span, request, response);
					const rpcMetadata = {
						type: RPCType.HTTP,
						span
					};
					return withActiveSpan$1(span, () => {
						return import_src.context.with(setRPCMetadata(import_src.context.active(), rpcMetadata), () => {
							bindScopeToEmitter(request);
							bindScopeToEmitter(response);
							let isEnded = false;
							function endSpan(status) {
								if (isEnded) return;
								isEnded = true;
								const newAttributes = getIncomingRequestAttributesOnResponse(request, response, rpcMetadata);
								span.setAttributes(newAttributes);
								span.setStatus(status);
								span.end();
								const route = newAttributes["http.route"];
								if (route) getIsolationScope().setTransactionName(`${request.method?.toUpperCase() || "GET"} ${route}`);
							}
							response.on("close", () => {
								endSpan(getSpanStatusFromHttpCode(response.statusCode));
							});
							response.on(errorMonitor, () => {
								const httpStatus = getSpanStatusFromHttpCode(response.statusCode);
								endSpan(httpStatus.code === 2 ? httpStatus : { code: 2 });
							});
							return next();
						});
					});
				};
				addStartSpanCallback(request, startSpan);
			});
		},
		processEvent(event) {
			if (event.type === "transaction") {
				const statusCode = event.contexts?.trace?.data?.["http.response.status_code"];
				if (typeof statusCode === "number") {
					if (shouldFilterStatusCode(statusCode, ignoreStatusCodes)) {
						DEBUG_BUILD$3 && debug.log("Dropping transaction due to status code", statusCode);
						return null;
					}
					event.contexts = {
						...event.contexts,
						response: {
							...event.contexts?.response,
							status_code: statusCode
						}
					};
				}
			}
			return event;
		},
		afterAllSetup(client) {
			if (!DEBUG_BUILD$3) return;
			if (client.getIntegrationByName("Http")) debug.warn("It seems that you have manually added `httpServerSpansIntegration` while `httpIntegration` is also present. Make sure to remove `httpIntegration` when adding `httpServerSpansIntegration`.");
			if (!client.getIntegrationByName("Http.Server")) debug.error("It seems that you have manually added `httpServerSpansIntegration` without adding `httpServerIntegration`. This is a requiement for spans to be created - please add the `httpServerIntegration` integration.");
		}
	};
});
var httpServerSpansIntegration = _httpServerSpansIntegration;
function isKnownPrefetchRequest(req) {
	return req.headers["next-router-prefetch"] === "1";
}
function isStaticAssetRequest(urlPath) {
	const path = stripUrlQueryAndFragment(urlPath);
	if (path.match(/\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot|webp|avif)$/)) return true;
	if (path.match(/^\/(robots\.txt|sitemap\.xml|manifest\.json|browserconfig\.xml)$/)) return true;
	return false;
}
function shouldIgnoreSpansForIncomingRequest(request, { ignoreStaticAssets, ignoreIncomingRequests }) {
	if (isTracingSuppressed$1()) return true;
	const urlPath = request.url;
	const method = request.method?.toUpperCase();
	if (method === "OPTIONS" || method === "HEAD" || !urlPath) return true;
	if (ignoreStaticAssets && method === "GET" && isStaticAssetRequest(urlPath)) return true;
	if (ignoreIncomingRequests?.(urlPath, request)) return true;
	return false;
}
function getRequestContentLengthAttribute(request) {
	const length = getContentLength(request.headers);
	if (length == null) return {};
	if (isCompressed(request.headers)) return { ["http.request_content_length"]: length };
	else return { ["http.request_content_length_uncompressed"]: length };
}
function getContentLength(headers) {
	const contentLengthHeader = headers["content-length"];
	if (contentLengthHeader === void 0) return null;
	const contentLength = parseInt(contentLengthHeader, 10);
	if (isNaN(contentLength)) return null;
	return contentLength;
}
function isCompressed(headers) {
	const encoding = headers["content-encoding"];
	return !!encoding && encoding !== "identity";
}
function getIncomingRequestAttributesOnResponse(request, response, rpcMetadata) {
	const { socket } = request;
	const { statusCode, statusMessage } = response;
	const newAttributes = {
		[Ss]: statusCode,
		[As]: statusCode,
		"http.status_text": statusMessage?.toUpperCase()
	};
	if (socket) {
		const { localAddress, localPort, remoteAddress, remotePort } = socket;
		newAttributes[fl] = localAddress;
		newAttributes[El] = localPort;
		newAttributes[Tl] = remoteAddress;
		newAttributes[Ol] = remotePort;
	}
	newAttributes[As] = statusCode;
	newAttributes["http.status_text"] = (statusMessage || "").toUpperCase();
	if (rpcMetadata?.type === RPCType.HTTP && rpcMetadata.route !== void 0) newAttributes[Ts] = rpcMetadata.route;
	return newAttributes;
}
function shouldFilterStatusCode(statusCode, dropForStatusCodes) {
	return dropForStatusCodes.some((code) => {
		if (typeof code === "number") return code === statusCode;
		const [min, max] = code;
		return statusCode >= min && statusCode <= max;
	});
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/nodeVersion.js
var NODE_VERSION = parseSemver(process.versions.node);
var NODE_MAJOR = NODE_VERSION.major;
var NODE_MINOR = NODE_VERSION.minor;
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/http/SentryHttpInstrumentation.js
var FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL = NODE_VERSION.major === 22 && NODE_VERSION.minor >= 12 || NODE_VERSION.major === 23 && NODE_VERSION.minor >= 2 || NODE_VERSION.major >= 24;
function instrumentHttpOutgoingRequests(instrumentationOptions = {}) {
	const { outgoingRequestApplyCustomAttributes: applyCustomAttributesOnSpan, ...options } = instrumentationOptions;
	const patchOptions = {
		propagateTrace: options.propagateTraceInOutgoingRequests ?? true,
		applyCustomAttributesOnSpan,
		...options,
		spans: options.createSpansForOutgoingRequests !== false && (options.spans ?? true),
		ignoreOutgoingRequests(url, request) {
			return isTracingSuppressed$1() || !!options.ignoreOutgoingRequests?.(url, getRequestOptions(request));
		},
		outgoingRequestHook(span, request) {
			options.outgoingRequestHook?.(span, request);
			const originalOnce = request.once;
			request.once = new Proxy(originalOnce, { apply(target, thisArg, args) {
				const [event] = args;
				if (event !== "response") return target.apply(thisArg, args);
				const parentContext = import_src.context.active();
				const requestContext = import_src.trace.setSpan(parentContext, span);
				return import_src.context.with(requestContext, () => {
					return target.apply(thisArg, args);
				});
			} });
		},
		outgoingResponseHook(span, response) {
			options.outgoingResponseHook?.(span, response);
		},
		errorMonitor,
		http
	};
	if (FULLY_SUPPORTS_HTTP_DIAGNOSTICS_CHANNEL) instrumentHttpOutgoingRequestsViaChannel(patchOptions);
	else instrumentHttpOutgoingRequestsViaMonkeyPatching(patchOptions);
}
var _currentListener;
function instrumentHttpOutgoingRequestsViaChannel(options) {
	const { [HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated } = getHttpClientSubscriptions(options);
	if (_currentListener) unsubscribe(HTTP_ON_CLIENT_REQUEST, _currentListener);
	subscribe(HTTP_ON_CLIENT_REQUEST, onHttpClientRequestCreated);
	_currentListener = onHttpClientRequestCreated;
}
function instrumentHttpOutgoingRequestsViaMonkeyPatching(options) {
	patchHttpModuleClient(http, options);
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/utils/outgoingFetchRequest.js
var SENTRY_TRACE_HEADER$1 = "sentry-trace";
var SENTRY_BAGGAGE_HEADER$1 = "baggage";
var W3C_TRACEPARENT_HEADER = "traceparent";
function addTracePropagationHeadersToFetchRequest(request, propagationDecisionMap, span) {
	const url = getAbsoluteUrl$1(request.origin, request.path);
	const { tracePropagationTargets, propagateTraceparent } = getClient()?.getOptions() || {};
	if (!shouldPropagateTraceForUrl(url, tracePropagationTargets, propagationDecisionMap)) return;
	const spanForTraceHeaders = span && spanIsIgnored(span) && getActiveSpan$1() ? void 0 : span;
	const addedHeaders = spanForTraceHeaders ? withActiveSpan$1(spanForTraceHeaders, () => getTraceData$1({ propagateTraceparent })) : getTraceData$1({ propagateTraceparent });
	if (!addedHeaders) return;
	const { "sentry-trace": sentryTrace, baggage, traceparent } = addedHeaders;
	const requestHeaders = Array.isArray(request.headers) ? normalizeUndiciHeaderPairs(request.headers) : stringToArrayHeaders(request.headers);
	_deduplicateArrayHeader(requestHeaders, SENTRY_TRACE_HEADER$1);
	_deduplicateArrayHeader(requestHeaders, SENTRY_BAGGAGE_HEADER$1);
	if (propagateTraceparent) _deduplicateArrayHeader(requestHeaders, W3C_TRACEPARENT_HEADER);
	if (!(_findExistingHeaderIndex(requestHeaders, SENTRY_TRACE_HEADER$1) !== -1)) {
		if (sentryTrace) requestHeaders.push(SENTRY_TRACE_HEADER$1, sentryTrace);
		if (traceparent && _findExistingHeaderIndex(requestHeaders, "traceparent") === -1) requestHeaders.push("traceparent", traceparent);
		const existingBaggageIndex = _findExistingHeaderIndex(requestHeaders, SENTRY_BAGGAGE_HEADER$1);
		if (baggage && existingBaggageIndex === -1) requestHeaders.push(SENTRY_BAGGAGE_HEADER$1, baggage);
		else if (baggage) {
			const existingBaggageValue = requestHeaders[existingBaggageIndex + 1];
			const merged = mergeBaggageHeaders(existingBaggageValue, baggage);
			if (merged) requestHeaders[existingBaggageIndex + 1] = merged;
		}
	}
	if (Array.isArray(request.headers)) request.headers.splice(0, request.headers.length, ...requestHeaders);
	else request.headers = arrayToStringHeaders(requestHeaders);
}
function normalizeUndiciHeaderPairs(headers) {
	const out = [];
	for (let i = 0; i < headers.length; i++) {
		const entry = headers[i];
		if (i % 2 === 0) out.push(typeof entry === "string" ? entry : String(entry));
		else out.push(Array.isArray(entry) ? entry.join(", ") : entry ?? "");
	}
	return out;
}
function stringToArrayHeaders(requestHeaders) {
	const headersArray = requestHeaders.split("\r\n");
	const headers = [];
	for (const header of headersArray) try {
		const colonIndex = header.indexOf(":");
		if (colonIndex === -1) continue;
		const key = header.slice(0, colonIndex).trim();
		const value = header.slice(colonIndex + 1).trim();
		if (key) headers.push(key, value);
	} catch {
		debug.warn(`Failed to convert string request header to array header: ${header}`);
	}
	return headers;
}
function arrayToStringHeaders(headers) {
	const headerPairs = [];
	for (let i = 0; i < headers.length; i += 2) {
		const key = headers[i];
		const value = headers[i + 1];
		if (!key || value == null) continue;
		headerPairs.push(`${key}: ${value}`);
	}
	if (!headerPairs.length) return "";
	return headerPairs.join("\r\n").concat("\r\n");
}
function _deduplicateArrayHeader(headers, headerName) {
	let firstIndex = -1;
	for (let i = 0; i < headers.length; i += 2) {
		if (headers[i] !== headerName) continue;
		if (firstIndex === -1) {
			firstIndex = i;
			continue;
		}
		const firstHeaderValue = headers[firstIndex + 1];
		if (headerName === SENTRY_BAGGAGE_HEADER$1 && firstHeaderValue) {
			const merged = mergeBaggageHeaders(headers[i + 1], firstHeaderValue);
			if (merged) headers[firstIndex + 1] = merged;
		}
		headers.splice(i, 2);
		i -= 2;
	}
}
function _findExistingHeaderIndex(headers, name) {
	return headers.findIndex((header, i) => i % 2 === 0 && header === name);
}
function addFetchRequestBreadcrumb(request, response) {
	const data = getBreadcrumbData(request);
	const statusCode = response.statusCode;
	const level = getBreadcrumbLogLevelFromHttpStatusCode(statusCode);
	addBreadcrumb({
		category: "http",
		data: {
			status_code: statusCode,
			...data
		},
		type: "http",
		level
	}, {
		event: "response",
		request,
		response
	});
}
function getBreadcrumbData(request) {
	try {
		const parsedUrl = parseUrl(getAbsoluteUrl$1(request.origin, request.path));
		const data = {
			url: getSanitizedUrlString(parsedUrl),
			"http.method": request.method || "GET"
		};
		if (parsedUrl.search) data["http.query"] = parsedUrl.search;
		if (parsedUrl.hash) data["http.fragment"] = parsedUrl.hash;
		return data;
	} catch {
		return {};
	}
}
function getAbsoluteUrl$1(origin, path = "/") {
	try {
		return new URL(path, origin).toString();
	} catch {
		const url = `${origin}`;
		if (url.endsWith("/") && path.startsWith("/")) return `${url}${path.slice(1)}`;
		if (!url.endsWith("/") && !path.startsWith("/")) return `${url}/${path}`;
		return `${url}${path}`;
	}
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/node-fetch/undici-instrumentation.js
var ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
var _channelSubs = [];
var spanFromReq = /* @__PURE__ */ new WeakMap();
var ignoreRequestMap = /* @__PURE__ */ new WeakMap();
var propagationDecisionMap = new LRUMap(100);
function instrumentUndici(config = {}) {
	if (_channelSubs.length) return;
	subscribeToChannel("undici:request:create", (message) => onRequestCreated(config, message));
	subscribeToChannel("undici:client:sendHeaders", (message) => onRequestHeaders(config, message));
	subscribeToChannel("undici:request:headers", (message) => onResponseHeaders(config, message));
	subscribeToChannel("undici:request:trailers", (message) => onDone(message));
	subscribeToChannel("undici:request:error", (message) => onError(message));
}
function safeExecute(fn, onError2) {
	try {
		return fn();
	} catch (error) {
		onError2(error);
		return;
	}
}
function subscribeToChannel(diagnosticChannel, onMessage) {
	const [major = 0, minor = 0] = process.version.replace("v", "").split(".").map((n) => Number(n));
	if (major > 18 || major === 18 && minor >= 19) _channelSubs.push(diagch.subscribe?.(diagnosticChannel, onMessage));
	else _channelSubs.push(diagch.channel(diagnosticChannel).subscribe(onMessage));
}
function parseRequestHeaders(request) {
	const result = /* @__PURE__ */ new Map();
	if (Array.isArray(request.headers)) for (let i = 0; i < request.headers.length; i += 2) {
		const key = request.headers[i];
		const value = request.headers[i + 1];
		if (typeof key === "string" && value !== void 0) result.set(key.toLowerCase(), value);
	}
	else if (typeof request.headers === "string") {
		const headers = request.headers.split("\r\n");
		for (const line of headers) {
			if (!line) continue;
			const colonIndex = line.indexOf(":");
			if (colonIndex === -1) continue;
			const key = line.substring(0, colonIndex).toLowerCase();
			const value = line.substring(colonIndex + 1).trim();
			const allValues = result.get(key);
			if (allValues && Array.isArray(allValues)) allValues.push(value);
			else if (allValues) result.set(key, [allValues, value]);
			else result.set(key, value);
		}
	}
	return result;
}
function onRequestCreated(config, { request }) {
	const url = getAbsoluteUrl(request.origin, request.path);
	const ignoredByCallback = safeExecute(() => !!config.ignoreOutgoingRequests?.(url), (e) => e && DEBUG_BUILD$3 && debug.error("caught ignoreOutgoingRequests error: ", e));
	const ignoreForBreadcrumbs = isTracingSuppressed$1() || !!ignoredByCallback;
	ignoreRequestMap.set(request, ignoreForBreadcrumbs);
	if (!config.spans) {
		if (config.tracePropagation !== false && !ignoreForBreadcrumbs) addTracePropagationHeadersToFetchRequest(request, propagationDecisionMap);
		return;
	}
	if (request.method === "CONNECT" || ignoredByCallback) return;
	let requestUrl;
	try {
		requestUrl = new URL$1(request.path, request.origin);
	} catch (err) {
		DEBUG_BUILD$3 && debug.warn("could not determine url.full:", err);
		return;
	}
	const urlScheme = requestUrl.protocol.replace(":", "");
	const requestMethod = getRequestMethod(request.method);
	const attributes = {
		[ns]: requestMethod,
		[ATTR_HTTP_REQUEST_METHOD_ORIGINAL]: request.method,
		[Yu]: requestUrl.toString(),
		[Vu]: requestUrl.pathname,
		[Hu]: requestUrl.search,
		[Ku]: urlScheme,
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.node_fetch"
	};
	if (url.startsWith("data:")) {
		const sanitizedUrl = stripDataUrlContent(url);
		attributes["http.url"] = sanitizedUrl;
		attributes[Yu] = sanitizedUrl;
		attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME] = `${request.method || "GET"} ${sanitizedUrl}`;
	}
	const schemePorts = {
		https: "443",
		http: "80"
	};
	const serverAddress = requestUrl.hostname;
	const serverPort = requestUrl.port || schemePorts[urlScheme];
	attributes[au] = serverAddress;
	if (serverPort && !isNaN(Number(serverPort))) attributes[ou] = Number(serverPort);
	const userAgentValues = parseRequestHeaders(request).get("user-agent");
	if (userAgentValues) attributes[Qu] = Array.isArray(userAgentValues) ? userAgentValues[userAgentValues.length - 1] : userAgentValues;
	const client = getClient();
	const span = startInactiveSpan$1({
		name: requestMethod === "_OTHER" ? "HTTP" : requestMethod,
		kind: SPAN_KIND.CLIENT,
		attributes,
		onlyIfParent: !client || !hasSpanStreamingEnabled(client)
	});
	safeExecute(() => config.requestHook?.(span, request), (e) => e && DEBUG_BUILD$3 && debug.error("caught requestHook error: ", e));
	addTracePropagationHeadersToFetchRequest(request, propagationDecisionMap, span);
	spanFromReq.set(request, span);
}
function onRequestHeaders(config, { request, socket }) {
	const span = spanFromReq.get(request);
	if (!span) return;
	const { remoteAddress, remotePort } = socket;
	const spanAttributes = {
		[dl]: remoteAddress,
		[ml]: remotePort
	};
	if (config.headersToSpanAttributes?.requestHeaders) {
		const headersToAttribs = new Set(config.headersToSpanAttributes.requestHeaders.map((n) => n.toLowerCase()));
		const headersMap = parseRequestHeaders(request);
		for (const [name, value] of headersMap.entries()) if (headersToAttribs.has(name)) {
			const attrValue = Array.isArray(value) ? value : [value];
			spanAttributes[`http.request.header.${name}`] = attrValue;
		}
	}
	span.setAttributes(spanAttributes);
}
function onResponseHeaders(config, { request, response }) {
	if (config.breadcrumbs !== false && !ignoreRequestMap.get(request)) addFetchRequestBreadcrumb(request, response);
	const span = spanFromReq.get(request);
	if (!span) return;
	const spanAttributes = { [Ss]: response.statusCode };
	safeExecute(() => config.responseHook?.(span, {
		request,
		response
	}), (e) => e && DEBUG_BUILD$3 && debug.error("caught responseHook error: ", e));
	if (config.headersToSpanAttributes?.responseHeaders) {
		const headersToAttribs = /* @__PURE__ */ new Set();
		config.headersToSpanAttributes?.responseHeaders.forEach((name) => headersToAttribs.add(name.toLowerCase()));
		for (let idx = 0; idx < response.headers.length; idx = idx + 2) {
			const nameBuf = response.headers[idx];
			const valueBuf = response.headers[idx + 1];
			if (nameBuf === void 0 || valueBuf === void 0) continue;
			const name = nameBuf.toString().toLowerCase();
			const value = valueBuf;
			if (headersToAttribs.has(name)) {
				const attrName = `http.response.header.${name}`;
				if (!Object.prototype.hasOwnProperty.call(spanAttributes, attrName)) spanAttributes[attrName] = [value.toString()];
				else spanAttributes[attrName].push(value.toString());
			}
		}
	}
	span.setAttributes(spanAttributes);
	if (response.statusCode >= 400) span.setStatus(getSpanStatusFromHttpCode(response.statusCode));
}
function onDone({ request }) {
	const span = spanFromReq.get(request);
	if (!span) return;
	span.end();
	spanFromReq.delete(request);
}
function onError({ request, error }) {
	const span = spanFromReq.get(request);
	if (!span) return;
	span.setStatus({
		code: 2,
		message: error.message
	});
	span.end();
	spanFromReq.delete(request);
}
function getRequestMethod(original) {
	if (original.toUpperCase() in {
		CONNECT: true,
		OPTIONS: true,
		HEAD: true,
		GET: true,
		POST: true,
		PUT: true,
		PATCH: true,
		DELETE: true,
		TRACE: true,
		QUERY: true
	}) return original.toUpperCase();
	return "_OTHER";
}
function getAbsoluteUrl(origin, path = "/") {
	const url = `${origin}`;
	if (url.endsWith("/") && path.startsWith("/")) return `${url}${path.slice(1)}`;
	if (!url.endsWith("/") && !path.startsWith("/")) return `${url}/${path}`;
	return `${url}${path}`;
}
//#endregion
//#region node_modules/@sentry/opentelemetry/build/esm/asyncContextStrategy-CL7X6mXf.js
var SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE = "sentry.parentIsRemote";
var SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = "sentry.graphql.operation";
function getParentSpanId(span) {
	if ("parentSpanId" in span) return span.parentSpanId;
	else if ("parentSpanContext" in span) return span.parentSpanContext?.spanId;
}
function spanHasAttributes(span) {
	return isObjectLike(span.attributes);
}
function spanHasKind(span) {
	return typeof span.kind === "number";
}
function spanHasStatus(span) {
	return !!span.status;
}
function spanHasName(span) {
	return !!span.name;
}
function getRequestSpanData(span) {
	if (!spanHasAttributes(span)) return {};
	const maybeUrlAttribute = span.attributes["url.full"] || span.attributes["http.url"];
	const data = {
		url: maybeUrlAttribute,
		"http.method": span.attributes["http.request.method"] || span.attributes["http.method"]
	};
	if (!data["http.method"] && data.url) data["http.method"] = "GET";
	try {
		if (typeof maybeUrlAttribute === "string") {
			const url = parseUrl(maybeUrlAttribute);
			data.url = getSanitizedUrlString(url);
			if (url.search) data["http.query"] = url.search;
			if (url.hash) data["http.fragment"] = url.hash;
		}
	} catch {}
	return data;
}
function getSpanKind(span) {
	if (spanHasKind(span)) return span.kind;
	return import_src.SpanKind.INTERNAL;
}
var SENTRY_TRACE_HEADER = "sentry-trace";
var SENTRY_BAGGAGE_HEADER = "baggage";
var SENTRY_TRACE_STATE_DSC = "sentry.dsc";
var SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING = "sentry.sampled_not_recording";
var SENTRY_TRACE_STATE_URL = "sentry.url";
var SENTRY_TRACE_STATE_SAMPLE_RAND = "sentry.sample_rand";
var SENTRY_TRACE_STATE_SAMPLE_RATE = "sentry.sample_rate";
var SENTRY_TRACE_STATE_CHILD_IGNORED = "sentry.ignored";
var SENTRY_TRACE_STATE_SEGMENT_IGNORED = "sentry.segment_ignored";
var SENTRY_SCOPES_CONTEXT_KEY = (0, import_src.createContextKey)("sentry_scopes");
var SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY = (0, import_src.createContextKey)("sentry_fork_isolation_scope");
var SENTRY_FORK_SET_SCOPE_CONTEXT_KEY = (0, import_src.createContextKey)("sentry_fork_set_scope");
var SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY = (0, import_src.createContextKey)("sentry_fork_set_isolation_scope");
var SCOPE_CONTEXT_FIELD = "_scopeContext";
function getScopesFromContext(context) {
	return context.getValue(SENTRY_SCOPES_CONTEXT_KEY);
}
function setScopesOnContext(context, scopes) {
	return context.setValue(SENTRY_SCOPES_CONTEXT_KEY, scopes);
}
function setContextOnScope(scope, context) {
	addNonEnumerableProperty(scope, SCOPE_CONTEXT_FIELD, makeWeakRef(context));
}
function getContextFromScope(scope) {
	return derefWeakRef(scope[SCOPE_CONTEXT_FIELD]);
}
function getSamplingDecision(spanContext) {
	const { traceFlags, traceState } = spanContext;
	const sampledNotRecording = traceState ? traceState.get(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING) === "1" : false;
	if (traceFlags === import_src.TraceFlags.SAMPLED) return true;
	if (sampledNotRecording) return false;
	const dscString = traceState ? traceState.get(SENTRY_TRACE_STATE_DSC) : void 0;
	const dsc = dscString ? baggageHeaderToDynamicSamplingContext(dscString) : void 0;
	if (dsc?.sampled === "true") return true;
	if (dsc?.sampled === "false") return false;
}
function getSampledForPropagation(span, client) {
	const spanContext = span.spanContext();
	const rootSpan = getRootSpan$1(span);
	const samplingDecision = getSamplingDecision(spanContext);
	if (samplingDecision !== void 0) return samplingDecision;
	if (spanIsIgnored(rootSpan)) return false;
	if (!hasSpansEnabled(client?.getOptions()) || spanContext.isRemote || !spanIsSentrySpan(rootSpan)) return;
	return spanIsSampled(span);
}
function inferSpanData(spanName, attributes, kind) {
	const httpMethod = attributes["http.request.method"] || attributes["http.method"];
	if (httpMethod) return descriptionForHttpMethod({
		attributes,
		name: spanName,
		kind
	}, httpMethod);
	const dbSystem = attributes["db.system.name"] || attributes["db.system"];
	const opIsCache = typeof attributes["sentry.op"] === "string" && attributes["sentry.op"].startsWith("cache.");
	if (dbSystem && !opIsCache) return descriptionForDbSystem({
		attributes,
		name: spanName
	});
	const customSourceOrRoute = attributes["sentry.source"] === "custom" ? "custom" : "route";
	if (attributes["rpc.service"]) return {
		...getUserUpdatedNameAndSource(spanName, attributes, "route"),
		op: "rpc"
	};
	if (attributes["messaging.system"]) return {
		...getUserUpdatedNameAndSource(spanName, attributes, customSourceOrRoute),
		op: "message"
	};
	const faasTrigger = attributes[ar];
	if (faasTrigger) return {
		...getUserUpdatedNameAndSource(spanName, attributes, customSourceOrRoute),
		op: faasTrigger.toString()
	};
	return {
		op: void 0,
		description: spanName,
		source: "custom"
	};
}
function parseSpanDescription(span) {
	let attributes;
	let name;
	if (spanHasAttributes(span)) {
		attributes = span.attributes;
		name = spanHasName(span) ? span.name : "<unknown>";
	} else {
		const json = typeof span.spanContext === "function" ? spanToJSON(span) : void 0;
		attributes = json?.data || {};
		name = spanHasName(span) ? span.name : json?.description || "<unknown>";
	}
	const kind = getSpanKind(span);
	return inferSpanData(name, attributes, kind);
}
function descriptionForDbSystem({ attributes, name }) {
	const userDefinedName = attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
	if (typeof userDefinedName === "string") return {
		op: "db",
		description: userDefinedName,
		source: attributes["sentry.source"] || "custom"
	};
	if (attributes["sentry.source"] === "custom") return {
		op: "db",
		description: name,
		source: "custom"
	};
	const statement = attributes[Ht];
	return {
		op: "db",
		description: statement ? statement.toString() : name,
		source: "task"
	};
}
function descriptionForHttpMethod({ name, kind, attributes }, httpMethod) {
	const opParts = ["http"];
	switch (kind) {
		case import_src.SpanKind.CLIENT:
			opParts.push("client");
			break;
		case import_src.SpanKind.SERVER:
			opParts.push("server");
			break;
	}
	if (attributes["sentry.http.prefetch"]) opParts.push("prefetch");
	const { urlPath, url, query, fragment, hasRoute } = getSanitizedUrl(attributes, kind);
	if (!urlPath) return {
		...getUserUpdatedNameAndSource(name, attributes),
		op: opParts.join(".")
	};
	const graphqlOperationsAttribute = attributes[SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION];
	const baseDescription = `${httpMethod} ${urlPath}`;
	const inferredDescription = graphqlOperationsAttribute ? `${baseDescription} (${getGraphqlOperationNamesFromAttribute$2(graphqlOperationsAttribute)})` : baseDescription;
	const inferredSource = hasRoute || urlPath === "/" ? "route" : "url";
	const data = {};
	if (url) data.url = url;
	if (query) data["http.query"] = query.slice(1);
	if (fragment) data["http.fragment"] = fragment.slice(1);
	const isClientOrServerKind = kind === import_src.SpanKind.CLIENT || kind === import_src.SpanKind.SERVER;
	const isManualSpan = !`${attributes["sentry.origin"] || "manual"}`.startsWith("auto");
	const alreadyHasCustomSource = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom";
	const customSpanName = attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
	const { description, source } = !alreadyHasCustomSource && customSpanName == null && (isClientOrServerKind || !isManualSpan) ? {
		description: inferredDescription,
		source: inferredSource
	} : getUserUpdatedNameAndSource(name, attributes);
	return {
		op: opParts.join("."),
		description,
		source,
		data
	};
}
function getGraphqlOperationNamesFromAttribute$2(attr) {
	if (Array.isArray(attr)) {
		const sorted = attr.slice().sort();
		if (sorted.length <= 5) return sorted.join(", ");
		else return `${sorted.slice(0, 5).join(", ")}, +${sorted.length - 5}`;
	}
	return `${attr}`;
}
function getSanitizedUrl(attributes, kind) {
	const httpTarget = attributes[xs];
	const httpUrl = attributes["http.url"] || attributes["url.full"];
	const httpRoute = attributes[Ts];
	const parsedUrl = typeof httpUrl === "string" ? parseUrl(httpUrl) : void 0;
	const url = parsedUrl ? getSanitizedUrlString(parsedUrl) : void 0;
	const query = parsedUrl?.search || void 0;
	const fragment = parsedUrl?.hash || void 0;
	if (typeof httpRoute === "string") return {
		urlPath: httpRoute,
		url,
		query,
		fragment,
		hasRoute: true
	};
	if (kind === import_src.SpanKind.SERVER && typeof httpTarget === "string") return {
		urlPath: stripUrlQueryAndFragment(httpTarget),
		url,
		query,
		fragment,
		hasRoute: false
	};
	if (parsedUrl) return {
		urlPath: url,
		url,
		query,
		fragment,
		hasRoute: false
	};
	if (typeof httpTarget === "string") return {
		urlPath: stripUrlQueryAndFragment(httpTarget),
		url,
		query,
		fragment,
		hasRoute: false
	};
	return {
		urlPath: void 0,
		url,
		query,
		fragment,
		hasRoute: false
	};
}
function getUserUpdatedNameAndSource(originalName, attributes, fallbackSource = "custom") {
	const source = attributes["sentry.source"] || fallbackSource;
	const description = attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
	if (description && typeof description === "string") return {
		description,
		source
	};
	return {
		description: originalName,
		source
	};
}
function enhanceDscWithOpenTelemetryRootSpanName(client) {
	client.on("createDsc", (dsc, rootSpan) => {
		if (!rootSpan) return;
		const jsonSpan = spanToJSON(rootSpan);
		const source = jsonSpan.data[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
		const sampled = getSampledForPropagation(rootSpan, client);
		if (sampled === false) delete dsc.transaction;
		else if (jsonSpan.description) {
			const { description } = parseSpanDescription(rootSpan);
			if (source !== "url" && description) dsc.transaction = description;
		}
		if (hasSpansEnabled()) dsc.sampled = sampled == void 0 ? void 0 : String(sampled);
	});
}
function getActiveSpan() {
	return import_src.trace.getActiveSpan();
}
var DEBUG_BUILD$2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
var TraceState = class TraceState {
	constructor() {
		this._internalState = /* @__PURE__ */ new Map();
	}
	/** @inheritDoc */
	set(key, value) {
		const next = this._clone();
		if (next._internalState.has(key)) next._internalState.delete(key);
		next._internalState.set(key, value);
		return next;
	}
	/** @inheritDoc */
	unset(key) {
		const next = this._clone();
		next._internalState.delete(key);
		return next;
	}
	/** @inheritDoc */
	get(key) {
		return this._internalState.get(key);
	}
	/** @inheritDoc */
	serialize() {
		return Array.from(this._internalState.keys()).reverse().map((key) => `${key}=${this._internalState.get(key)}`).join(",");
	}
	_clone() {
		const next = new TraceState();
		next._internalState = new Map(this._internalState);
		return next;
	}
};
function makeTraceState({ dsc, sampled }) {
	const dscString = dsc ? dynamicSamplingContextToSentryBaggageHeader(dsc) : void 0;
	const traceStateBase = new TraceState();
	const traceStateWithDsc = dscString ? traceStateBase.set(SENTRY_TRACE_STATE_DSC, dscString) : traceStateBase;
	return sampled === false ? traceStateWithDsc.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, "1") : traceStateWithDsc;
}
var setupElements = /* @__PURE__ */ new Set();
function openTelemetrySetupCheck() {
	return Array.from(setupElements);
}
function setIsSetup(element) {
	setupElements.add(element);
}
var SentryPropagator = class extends W3CBaggagePropagator {
	constructor() {
		super();
		setIsSetup("SentryPropagator");
		this._urlMatchesTargetsMap = new LRUMap(100);
	}
	/**
	* @inheritDoc
	*/
	inject(context2, carrier, setter) {
		if (isTracingSuppressed$2(context2)) {
			DEBUG_BUILD$2 && debug.log("[Tracing] Not injecting trace data for url because tracing is suppressed.");
			return;
		}
		const activeSpan = import_src.trace.getSpan(context2);
		const url = activeSpan && getCurrentURL(activeSpan);
		const { tracePropagationTargets, propagateTraceparent } = getClient()?.getOptions() || {};
		if (!shouldPropagateTraceForUrl(url, tracePropagationTargets, this._urlMatchesTargetsMap)) {
			DEBUG_BUILD$2 && debug.log("[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:", url);
			return;
		}
		const existingBaggageHeader = getExistingBaggage(carrier);
		const existingSentryTraceHeader = getExistingSentryTrace(carrier);
		let baggage = import_src.propagation.getBaggage(context2) || import_src.propagation.createBaggage({});
		const { dynamicSamplingContext, traceId, spanId, sampled } = getInjectionData(context2);
		if (existingBaggageHeader) {
			const baggageEntries = parseBaggageHeader(existingBaggageHeader);
			if (baggageEntries) Object.entries(baggageEntries).forEach(([key, value]) => {
				if (!existingSentryTraceHeader && key.startsWith("sentry-")) return;
				baggage = baggage.setEntry(key, { value });
			});
		}
		if (!existingSentryTraceHeader && dynamicSamplingContext) baggage = Object.entries(dynamicSamplingContext).reduce((b, [dscKey, dscValue]) => {
			if (dscValue) return b.setEntry(`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`, { value: dscValue });
			return b;
		}, baggage);
		if (!existingSentryTraceHeader && traceId && traceId !== import_src.INVALID_TRACEID) {
			setter.set(carrier, SENTRY_TRACE_HEADER, generateSentryTraceHeader(traceId, spanId, sampled));
			if (propagateTraceparent) setter.set(carrier, "traceparent", generateTraceparentHeader(traceId, spanId, sampled));
		}
		super.inject(import_src.propagation.setBaggage(context2, baggage), carrier, setter);
	}
	/**
	* @inheritDoc
	*/
	extract(context2, carrier, getter) {
		const maybeSentryTraceHeader = getter.get(carrier, SENTRY_TRACE_HEADER);
		const baggage = getter.get(carrier, SENTRY_BAGGAGE_HEADER);
		return ensureScopesOnContext(getContextWithRemoteActiveSpan(context2, {
			sentryTrace: maybeSentryTraceHeader ? Array.isArray(maybeSentryTraceHeader) ? maybeSentryTraceHeader[0] : maybeSentryTraceHeader : void 0,
			baggage
		}));
	}
	/**
	* @inheritDoc
	*/
	fields() {
		return [
			SENTRY_TRACE_HEADER,
			SENTRY_BAGGAGE_HEADER,
			"traceparent"
		];
	}
};
function getInjectionData(context2, options = {}) {
	const span = import_src.trace.getSpan(context2);
	if (span?.spanContext().isRemote) {
		const spanContext = span.spanContext();
		return {
			dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
			traceId: spanContext.traceId,
			spanId: void 0,
			sampled: getSamplingDecision(spanContext)
		};
	}
	if (span) {
		const spanContext = span.spanContext();
		return {
			dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
			traceId: spanContext.traceId,
			spanId: spanContext.spanId,
			sampled: getSampledForPropagation(span, options.client)
		};
	}
	const scope = options.scope || getScopesFromContext(context2)?.scope || getCurrentScope();
	const client = options.client || getClient();
	const propagationContext = scope.getPropagationContext();
	return {
		dynamicSamplingContext: client ? getDynamicSamplingContextFromScope(client, scope) : void 0,
		traceId: propagationContext.traceId,
		spanId: propagationContext.propagationSpanId,
		sampled: propagationContext.sampled
	};
}
function getContextWithRemoteActiveSpan(ctx, { sentryTrace, baggage }) {
	const { traceId, parentSpanId, sampled, dsc } = propagationContextFromHeaders(sentryTrace, baggage);
	const client = getClient();
	const incomingDsc = baggageHeaderToDynamicSamplingContext(baggage);
	if (!parentSpanId || client && !shouldContinueTrace(client, incomingDsc?.org_id)) return ctx;
	const spanContext = generateRemoteSpanContext({
		traceId,
		spanId: parentSpanId,
		sampled,
		dsc
	});
	return import_src.trace.setSpanContext(ctx, spanContext);
}
function continueTraceAsRemoteSpan(ctx, options, callback) {
	const ctxWithSpanContext = ensureScopesOnContext(getContextWithRemoteActiveSpan(ctx, options));
	return import_src.context.with(ctxWithSpanContext, callback);
}
function ensureScopesOnContext(ctx) {
	const scopes = getScopesFromContext(ctx);
	return setScopesOnContext(ctx, {
		scope: scopes ? scopes.scope : getCurrentScope().clone(),
		isolationScope: scopes ? scopes.isolationScope : getIsolationScope()
	});
}
function getExistingBaggage(carrier) {
	try {
		const baggage = carrier[SENTRY_BAGGAGE_HEADER];
		return Array.isArray(baggage) ? baggage.join(",") : baggage;
	} catch {
		return;
	}
}
function getExistingSentryTrace(carrier) {
	try {
		return carrier[SENTRY_TRACE_HEADER];
	} catch {
		return;
	}
}
function getCurrentURL(span) {
	const spanData = spanToJSON(span).data;
	const urlAttribute = spanData["http.url"] || spanData["url.full"];
	if (typeof urlAttribute === "string") return urlAttribute;
	const urlTraceState = span.spanContext().traceState?.get(SENTRY_TRACE_STATE_URL);
	if (urlTraceState) return urlTraceState;
}
function generateRemoteSpanContext({ spanId, traceId, sampled, dsc }) {
	const traceState = makeTraceState({
		dsc,
		sampled
	});
	return {
		traceId,
		spanId,
		isRemote: true,
		traceFlags: sampled ? import_src.TraceFlags.SAMPLED : import_src.TraceFlags.NONE,
		traceState
	};
}
function _startSpan(options, callback, autoEnd) {
	const tracer = getTracer();
	const { name, parentSpan: customParentSpan } = options;
	return getActiveSpanWrapper(customParentSpan)(() => {
		const activeCtx = getContext(options.scope, options.forceTransaction);
		const missingRequiredParent = options.onlyIfParent && !import_src.trace.getSpan(activeCtx);
		const ctx = missingRequiredParent ? suppressTracing$2(activeCtx) : activeCtx;
		if (missingRequiredParent) getClient()?.recordDroppedEvent("no_parent_span", "span");
		const spanOptions = getSpanOptions(options);
		if (!hasSpansEnabled()) {
			const suppressedCtx = isTracingSuppressed$2(ctx) ? ctx : suppressTracing$2(ctx);
			return import_src.context.with(suppressedCtx, () => {
				return tracer.startActiveSpan(name, spanOptions, suppressedCtx, (span) => {
					patchSpanEnd(span);
					return import_src.context.with(activeCtx, () => {
						return handleCallbackErrors(() => callback(span), () => {
							if (spanToJSON(span).status === void 0) span.setStatus({ code: import_src.SpanStatusCode.ERROR });
						}, autoEnd ? () => span.end() : void 0);
					});
				});
			});
		}
		return tracer.startActiveSpan(name, spanOptions, ctx, (span) => {
			patchSpanEnd(span);
			return handleCallbackErrors(() => callback(span), () => {
				if (spanToJSON(span).status === void 0) span.setStatus({ code: import_src.SpanStatusCode.ERROR });
			}, autoEnd ? () => span.end() : void 0);
		});
	});
}
function startSpan$1(options, callback) {
	return _startSpan(options, callback, true);
}
function startSpanManual(options, callback) {
	return _startSpan(options, (span) => callback(span, () => span.end()), false);
}
function startInactiveSpan(options) {
	const tracer = getTracer();
	const { name, parentSpan: customParentSpan } = options;
	return getActiveSpanWrapper(customParentSpan)(() => {
		const activeCtx = getContext(options.scope, options.forceTransaction);
		const missingRequiredParent = options.onlyIfParent && !import_src.trace.getSpan(activeCtx);
		let ctx = missingRequiredParent ? suppressTracing$2(activeCtx) : activeCtx;
		if (missingRequiredParent) getClient()?.recordDroppedEvent("no_parent_span", "span");
		const spanOptions = getSpanOptions(options);
		if (!hasSpansEnabled()) ctx = isTracingSuppressed$2(ctx) ? ctx : suppressTracing$2(ctx);
		const span = tracer.startSpan(name, spanOptions, ctx);
		patchSpanEnd(span);
		return span;
	});
}
function withActiveSpan(span, callback) {
	const newContextWithActiveSpan = span ? import_src.trace.setSpan(import_src.context.active(), span) : import_src.trace.deleteSpan(import_src.context.active());
	return import_src.context.with(newContextWithActiveSpan, () => callback(getCurrentScope()));
}
function getTracer() {
	return getClient()?.tracer || import_src.trace.getTracer("@sentry/opentelemetry", "10.66.0");
}
function getSpanOptions(options) {
	const { startTime, attributes, kind, op, links } = options;
	const fixedStartTime = typeof startTime === "number" ? ensureTimestampInMilliseconds(startTime) : startTime;
	return {
		attributes: op ? {
			[SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
			...attributes
		} : attributes,
		kind,
		links,
		startTime: fixedStartTime
	};
}
function ensureTimestampInMilliseconds(timestamp) {
	return timestamp < 9999999999 ? timestamp * 1e3 : timestamp;
}
function patchSpanEnd(span) {
	const originalEnd = span.end.bind(span);
	span.end = (endTime) => {
		return originalEnd(typeof endTime === "number" ? ensureTimestampInMilliseconds(endTime) : endTime);
	};
}
function getContext(scope, forceTransaction) {
	const ctx = getContextForScope(scope);
	const parentSpan = import_src.trace.getSpan(ctx);
	if (!parentSpan) return ctx;
	if (!forceTransaction) return ctx;
	const ctxWithoutSpan = import_src.trace.deleteSpan(ctx);
	const { spanId, traceId } = parentSpan.spanContext();
	const sampled = getSamplingDecision(parentSpan.spanContext());
	const traceState = makeTraceState({
		dsc: getDynamicSamplingContextFromSpan(getRootSpan$1(parentSpan)),
		sampled
	});
	const spanOptions = {
		traceId,
		spanId,
		isRemote: true,
		traceFlags: sampled ? import_src.TraceFlags.SAMPLED : import_src.TraceFlags.NONE,
		traceState
	};
	return import_src.trace.setSpanContext(ctxWithoutSpan, spanOptions);
}
function getContextForScope(scope) {
	if (scope) {
		const ctx = getContextFromScope(scope);
		if (ctx) return ctx;
	}
	return import_src.context.active();
}
function continueTrace(options, callback) {
	return continueTraceAsRemoteSpan(import_src.context.active(), options, callback);
}
function startNewTrace(callback) {
	const traceId = generateTraceId();
	const spanContext = {
		traceId,
		spanId: generateSpanId(),
		isRemote: true,
		traceFlags: import_src.TraceFlags.NONE
	};
	const ctxWithTrace = import_src.trace.setSpanContext(import_src.context.active(), spanContext);
	return import_src.context.with(ctxWithTrace, () => {
		getCurrentScope().setPropagationContext({
			traceId,
			sampleRand: safeMathRandom()
		});
		return callback();
	});
}
function getTraceContextForScope(client, scope) {
	const ctx = getContextFromScope(scope);
	const span = ctx && import_src.trace.getSpan(ctx);
	const traceContext = span ? spanToTraceContext(span) : getTraceContextFromScope(scope);
	return [span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope), traceContext];
}
function getActiveSpanWrapper(parentSpan) {
	return parentSpan !== void 0 ? (callback) => {
		return withActiveSpan(parentSpan, callback);
	} : (callback) => callback();
}
function suppressTracing(callback) {
	const ctx = suppressTracing$2(import_src.context.active());
	return import_src.context.with(ctx, callback);
}
function isTracingSuppressed(scope) {
	const ctx = scope ? getContextFromScope(scope) : import_src.context.active();
	return ctx ? isTracingSuppressed$2(ctx) : false;
}
function setupEventContextTrace(client) {
	client.on("preprocessEvent", (event) => {
		const span = getActiveSpan();
		if (!span || event.type === "transaction") return;
		event.contexts = {
			trace: spanToTraceContext(span),
			...event.contexts
		};
		event.sdkProcessingMetadata = {
			dynamicSamplingContext: getDynamicSamplingContextFromSpan(getRootSpan$1(span)),
			...event.sdkProcessingMetadata
		};
		return event;
	});
}
function buildContextWithSentryScopes(context, activeContext) {
	const span = import_src.trace.getSpan(context);
	let effectiveContext;
	if (span?.spanContext().traceState?.get("sentry.ignored") === "1") {
		const contextWithoutSpan = import_src.trace.deleteSpan(context);
		const parentSpan = import_src.trace.getSpan(activeContext);
		effectiveContext = parentSpan ? import_src.trace.setSpan(contextWithoutSpan, parentSpan) : contextWithoutSpan;
	} else effectiveContext = context;
	const currentScopes = getScopesFromContext(effectiveContext);
	const currentScope = currentScopes?.scope || getCurrentScope();
	const currentIsolationScope = currentScopes?.isolationScope || getIsolationScope();
	const shouldForkIsolationScope = effectiveContext.getValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY) === true;
	const scope = effectiveContext.getValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY);
	const isolationScope = effectiveContext.getValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
	const newCurrentScope = scope || currentScope.clone();
	const scopes = {
		scope: newCurrentScope,
		isolationScope: isolationScope || (shouldForkIsolationScope ? currentIsolationScope.clone() : currentIsolationScope)
	};
	const ctx2 = setScopesOnContext(effectiveContext, scopes).deleteValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
	setContextOnScope(newCurrentScope, ctx2);
	return ctx2;
}
function groupSpansWithParents(spans) {
	const nodeMap = /* @__PURE__ */ new Map();
	for (const span of spans) createOrUpdateSpanNodeAndRefs(nodeMap, span);
	return Array.from(nodeMap, function([_id, spanNode]) {
		return spanNode;
	});
}
function getLocalParentId(span) {
	return !(span.attributes[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE] === true) ? getParentSpanId(span) : void 0;
}
function createOrUpdateSpanNodeAndRefs(nodeMap, span) {
	const id = span.spanContext().spanId;
	const parentId = getLocalParentId(span);
	if (!parentId) {
		createOrUpdateNode(nodeMap, {
			id,
			span,
			children: []
		});
		return;
	}
	const parentNode = createOrGetParentNode(nodeMap, parentId);
	const node = createOrUpdateNode(nodeMap, {
		id,
		span,
		parentNode,
		children: []
	});
	parentNode.children.push(node);
}
function createOrGetParentNode(nodeMap, id) {
	const existing = nodeMap.get(id);
	if (existing) return existing;
	return createOrUpdateNode(nodeMap, {
		id,
		children: []
	});
}
function createOrUpdateNode(nodeMap, spanNode) {
	const existing = nodeMap.get(spanNode.id);
	if (existing?.span) return existing;
	if (existing && !existing.span) {
		existing.span = spanNode.span;
		existing.parentNode = spanNode.parentNode;
		return existing;
	}
	nodeMap.set(spanNode.id, spanNode);
	return spanNode;
}
var canonicalGrpcErrorCodesMap = {
	"1": "cancelled",
	"2": "unknown_error",
	"3": "invalid_argument",
	"4": "deadline_exceeded",
	"5": "not_found",
	"6": "already_exists",
	"7": "permission_denied",
	"8": "resource_exhausted",
	"9": "failed_precondition",
	"10": "aborted",
	"11": "out_of_range",
	"12": "unimplemented",
	"13": "internal_error",
	"14": "unavailable",
	"15": "data_loss",
	"16": "unauthenticated"
};
var isStatusErrorMessageValid = (message) => {
	return Object.values(canonicalGrpcErrorCodesMap).includes(message);
};
function mapStatus(span) {
	const attributes = spanHasAttributes(span) ? span.attributes : {};
	const status = spanHasStatus(span) ? span.status : void 0;
	if (status) {
		if (status.code === import_src.SpanStatusCode.OK) return { code: 1 };
		else if (status.code === import_src.SpanStatusCode.ERROR) {
			if (typeof status.message === "undefined") {
				const inferredStatus2 = inferStatusFromAttributes(attributes);
				if (inferredStatus2) return inferredStatus2;
			}
			if (status.message && isStatusErrorMessageValid(status.message)) return {
				code: 2,
				message: status.message
			};
			else return {
				code: 2,
				message: "internal_error"
			};
		}
	}
	const inferredStatus = inferStatusFromAttributes(attributes);
	if (inferredStatus) return inferredStatus;
	if (status?.code === import_src.SpanStatusCode.UNSET) return { code: 1 };
	else return {
		code: 2,
		message: "unknown_error"
	};
}
function inferStatusFromAttributes(attributes) {
	const httpCodeAttribute = attributes["http.response.status_code"] || attributes["http.status_code"];
	const grpcCodeAttribute = attributes[fp];
	const numberHttpCode = typeof httpCodeAttribute === "number" ? httpCodeAttribute : typeof httpCodeAttribute === "string" ? parseInt(httpCodeAttribute) : void 0;
	if (typeof numberHttpCode === "number") return getSpanStatusFromHttpCode(numberHttpCode);
	if (typeof grpcCodeAttribute === "string") return {
		code: 2,
		message: canonicalGrpcErrorCodesMap[grpcCodeAttribute] || "unknown_error"
	};
}
var MAX_SPAN_COUNT = 1e3;
var DEFAULT_TIMEOUT = 300;
var SENT_SPANS_MAX_SIZE = 1e4;
var SentrySpanExporter = class {
	constructor(options) {
		this._finishedSpanBucketSize = options?.timeout || DEFAULT_TIMEOUT;
		this._finishedSpanBuckets = new Array(this._finishedSpanBucketSize).fill(void 0);
		this._lastCleanupTimestampInS = Math.floor(safeDateNow() / 1e3);
		this._spansToBucketEntry = /* @__PURE__ */ new WeakMap();
		this._sentSpans = new LRUMap(SENT_SPANS_MAX_SIZE);
		this._debouncedFlush = debounce(this.flush.bind(this), 1, { maxWait: 100 });
	}
	/**
	* Export a single span.
	* This is called by the span processor whenever a span is ended.
	*/
	export(span) {
		const currentTimestampInS = Math.floor(safeDateNow() / 1e3);
		if (this._lastCleanupTimestampInS !== currentTimestampInS) {
			let droppedSpanCount = 0;
			this._finishedSpanBuckets.forEach((bucket, i) => {
				if (bucket && bucket.timestampInS <= currentTimestampInS - this._finishedSpanBucketSize) {
					droppedSpanCount += bucket.spans.size;
					this._finishedSpanBuckets[i] = void 0;
				}
			});
			if (droppedSpanCount > 0) DEBUG_BUILD$2 && debug.log(`SpanExporter dropped ${droppedSpanCount} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`);
			this._lastCleanupTimestampInS = currentTimestampInS;
		}
		const currentBucketIndex = currentTimestampInS % this._finishedSpanBucketSize;
		const currentBucket = this._finishedSpanBuckets[currentBucketIndex] || {
			timestampInS: currentTimestampInS,
			spans: /* @__PURE__ */ new Set()
		};
		this._finishedSpanBuckets[currentBucketIndex] = currentBucket;
		currentBucket.spans.add(span);
		this._spansToBucketEntry.set(span, currentBucket);
		const localParentId = getLocalParentId(span);
		if (!localParentId || this._sentSpans.get(localParentId)) this._debouncedFlush();
	}
	/**
	* Try to flush any pending spans immediately.
	* This is called internally by the exporter (via _debouncedFlush),
	* but can also be triggered externally if we force-flush.
	*/
	flush() {
		const finishedSpans = this._finishedSpanBuckets.flatMap((bucket) => bucket ? Array.from(bucket.spans) : []);
		const sentSpans = this._maybeSend(finishedSpans);
		const sentSpanCount = sentSpans.size;
		const remainingOpenSpanCount = finishedSpans.length - sentSpanCount;
		DEBUG_BUILD$2 && debug.log(`SpanExporter exported ${sentSpanCount} spans, ${remainingOpenSpanCount} spans are waiting for their parent spans to finish`);
		for (const span of sentSpans) {
			this._sentSpans.set(span.spanContext().spanId, 1);
			const bucketEntry = this._spansToBucketEntry.get(span);
			if (bucketEntry) bucketEntry.spans.delete(span);
		}
		this._debouncedFlush.cancel();
	}
	/**
	* Clear the exporter.
	* This is called when the span processor is shut down.
	*/
	clear() {
		this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0);
		this._sentSpans.clear();
		this._debouncedFlush.cancel();
	}
	/**
	* Send the given spans, but only if they are part of a finished transaction.
	*
	* Returns the sent spans.
	* Spans remain unsent when their parent span is not yet finished.
	* This will happen regularly, as child spans are generally finished before their parents.
	* But it _could_ also happen because, for whatever reason, a parent span was lost.
	* In this case, we'll eventually need to clean this up.
	*/
	_maybeSend(spans) {
		const grouped = groupSpansWithParents(spans);
		const sentSpans = /* @__PURE__ */ new Set();
		const rootNodes = this._getCompletedRootNodes(grouped);
		for (const root of rootNodes) {
			const span = root.span;
			sentSpans.add(span);
			const transactionEvent = createTransactionForOtelSpan(span);
			if (root.parentNode && this._sentSpans.get(root.parentNode.id)) {
				const traceData = transactionEvent.contexts?.trace?.data;
				if (traceData) traceData["sentry.parent_span_already_sent"] = true;
			}
			const spans2 = transactionEvent.spans || [];
			let hasGenAiSpans = false;
			for (const child of root.children) if (createAndFinishSpanForOtelSpan(child, spans2, sentSpans)) hasGenAiSpans = true;
			transactionEvent.spans = spans2.length > MAX_SPAN_COUNT ? spans2.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans2;
			if (hasGenAiSpans) transactionEvent.sdkProcessingMetadata = {
				...transactionEvent.sdkProcessingMetadata,
				hasGenAiSpans: true
			};
			const measurements = timedEventsToMeasurements(span.events);
			if (measurements) transactionEvent.measurements = measurements;
			captureEvent(transactionEvent);
		}
		return sentSpans;
	}
	/** Check if a node is a completed root node or a node whose parent has already been sent */
	_nodeIsCompletedRootNodeOrHasSentParent(node) {
		return !!node.span && (!node.parentNode || !!this._sentSpans.get(node.parentNode.id));
	}
	/** Get all completed root nodes from a list of nodes */
	_getCompletedRootNodes(nodes) {
		return nodes.filter((node) => this._nodeIsCompletedRootNodeOrHasSentParent(node));
	}
};
function parseSpan(span) {
	const attributes = span.attributes;
	return {
		origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
		op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
		source: attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]
	};
}
function createTransactionForOtelSpan(span) {
	const { op, description, data, origin = "manual", source } = getSpanData(span);
	const capturedSpanScopes = getCapturedScopesOnSpan(span);
	const sampleRate = span.attributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
	const attributes = {
		[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: source,
		[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate,
		[SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
		...data,
		...removeSentryAttributes(span.attributes)
	};
	const { links } = span;
	const { traceId: trace_id, spanId: span_id } = span.spanContext();
	const traceContext = {
		parent_span_id: getParentSpanId(span),
		span_id,
		trace_id,
		data: attributes,
		origin,
		op,
		status: getStatusMessage(mapStatus(span)),
		links: convertSpanLinksForEnvelope(links)
	};
	const statusCode = attributes[Ss];
	const responseContext = typeof statusCode === "number" ? { response: { status_code: statusCode } } : void 0;
	return {
		contexts: {
			trace: traceContext,
			otel: { resource: span.resource.attributes },
			...responseContext
		},
		spans: [],
		start_timestamp: spanTimeInputToSeconds(span.startTime),
		timestamp: spanTimeInputToSeconds(span.endTime),
		transaction: description,
		type: "transaction",
		sdkProcessingMetadata: {
			capturedSpanScope: capturedSpanScopes.scope,
			capturedSpanIsolationScope: capturedSpanScopes.isolationScope,
			sampleRate,
			dynamicSamplingContext: getDynamicSamplingContextFromSpan(span)
		},
		...source && { transaction_info: { source } }
	};
}
function createAndFinishSpanForOtelSpan(node, spans, sentSpans) {
	const span = node.span;
	if (span) sentSpans.add(span);
	if (!span) {
		let hasGenAiSpans2 = false;
		node.children.forEach((child) => {
			if (createAndFinishSpanForOtelSpan(child, spans, sentSpans)) hasGenAiSpans2 = true;
		});
		return hasGenAiSpans2;
	}
	const span_id = span.spanContext().spanId;
	const trace_id = span.spanContext().traceId;
	const parentSpanId = getParentSpanId(span);
	const { attributes, startTime, endTime, links } = span;
	const { op, description, data, origin = "manual" } = getSpanData(span);
	const allData = {
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
		[SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
		...removeSentryAttributes(attributes),
		...data
	};
	const status = mapStatus(span);
	const spanJSON = {
		span_id,
		trace_id,
		data: allData,
		description,
		parent_span_id: parentSpanId,
		start_timestamp: spanTimeInputToSeconds(startTime),
		timestamp: spanTimeInputToSeconds(endTime) || void 0,
		status: getStatusMessage(status),
		op,
		origin,
		measurements: timedEventsToMeasurements(span.events),
		links: convertSpanLinksForEnvelope(links)
	};
	spans.push(spanJSON);
	let hasGenAiSpans = !!op?.startsWith("gen_ai.");
	node.children.forEach((child) => {
		if (createAndFinishSpanForOtelSpan(child, spans, sentSpans)) hasGenAiSpans = true;
	});
	return hasGenAiSpans;
}
function getSpanData(span) {
	const { op: definedOp, source: definedSource, origin } = parseSpan(span);
	const { op: inferredOp, description, source: inferredSource, data: inferredData } = parseSpanDescription(span);
	return {
		op: definedOp || inferredOp,
		description,
		source: definedSource || inferredSource,
		origin,
		data: {
			...inferredData,
			...getData(span)
		}
	};
}
function removeSentryAttributes(data) {
	const cleanedData = { ...data };
	delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
	delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE];
	delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
	return cleanedData;
}
function getData(span) {
	const attributes = span.attributes;
	const data = {};
	if (span.kind !== import_src.SpanKind.INTERNAL) data["otel.kind"] = import_src.SpanKind[span.kind];
	const maybeHttpStatusCodeAttribute = attributes[As];
	if (maybeHttpStatusCodeAttribute) data[Ss] = maybeHttpStatusCodeAttribute;
	const requestData = getRequestSpanData(span);
	if (requestData.url) data.url = requestData.url;
	if (requestData["http.query"]) data["http.query"] = requestData["http.query"].slice(1);
	if (requestData["http.fragment"]) data["http.fragment"] = requestData["http.fragment"].slice(1);
	return data;
}
function backfillStreamedSpanDataFromOtel(spanJSON, hint) {
	const attributes = spanJSON.attributes ?? {};
	const kind = hint?.spanKind ?? SPAN_KIND.INTERNAL;
	const { op, description, source, data } = inferSpanData(spanJSON.name, attributes, kind);
	spanJSON.name = description;
	safeSetSpanJSONAttributes(spanJSON, {
		[SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
		[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: source,
		[Ec]: "manual",
		...data
	});
	if (kind !== SPAN_KIND.INTERNAL) safeSetSpanJSONAttributes(spanJSON, { "otel.kind": spanKindToName(kind) });
}
var SentrySpanProcessor = class {
	constructor(options) {
		this._unsubscribePreprocessSpan = void 0;
		setIsSetup("SentrySpanProcessor");
		this._exporter = new SentrySpanExporter(options);
		this._client = options?.client ?? getClient();
		if (this._client && hasSpanStreamingEnabled(this._client)) this._unsubscribePreprocessSpan = this._client.on("preprocessSpan", backfillStreamedSpanDataFromOtel);
	}
	/**
	* @inheritDoc
	*/
	async forceFlush() {
		this._exporter.flush();
	}
	/**
	* @inheritDoc
	*/
	async shutdown() {
		this._unsubscribePreprocessSpan?.();
		this._exporter.clear();
	}
	/**
	* @inheritDoc
	*/
	onStart(span, parentContext) {
		const parentSpan = import_src.trace.getSpan(parentContext);
		let scopes = getScopesFromContext(parentContext);
		if (parentSpan && !parentSpan.spanContext().isRemote) addChildSpanToSpan(parentSpan, span);
		if (parentSpan?.spanContext().isRemote) span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE, true);
		if (parentContext === import_src.ROOT_CONTEXT) scopes = {
			scope: getDefaultCurrentScope(),
			isolationScope: getDefaultIsolationScope()
		};
		if (scopes) setCapturedScopesOnSpan(span, scopes.scope, scopes.isolationScope);
		logSpanStart(span);
		this._client?.emit("spanStart", span);
	}
	/** @inheritDoc */
	onEnd(span) {
		logSpanEnd(span);
		this._client?.emit("spanEnd", span);
		if (this._client && hasSpanStreamingEnabled(this._client)) this._client.emit("afterSpanEnd", span);
		else this._exporter.export(span);
	}
};
var SentrySampler = class {
	constructor(client) {
		this._client = client;
		this._isSpanStreaming = hasSpanStreamingEnabled(client);
		setIsSetup("SentrySampler");
	}
	/** @inheritDoc */
	shouldSample(context, traceId, spanName, spanKind, spanAttributes, _links) {
		const options = this._client.getOptions();
		const { ignoreSpans } = options;
		const parentSpan = getValidSpan(context);
		const parentContext = parentSpan?.spanContext();
		if (!hasSpansEnabled(options)) return wrapSamplingDecision({
			decision: void 0,
			context,
			spanAttributes
		});
		const maybeSpanHttpMethod = spanAttributes["http.method"] || spanAttributes["http.request.method"];
		if (spanKind === import_src.SpanKind.CLIENT && maybeSpanHttpMethod && (!parentSpan || parentContext?.isRemote)) {
			if (!this._isSpanStreaming) {
				this._client.recordDroppedEvent("no_parent_span", "span");
				return wrapSamplingDecision({
					decision: void 0,
					context,
					spanAttributes
				});
			}
		}
		const parentSampled = parentSpan ? getParentSampled(parentSpan, traceId, spanName) : void 0;
		if (!(!parentSpan || parentContext?.isRemote)) {
			if (this._isSpanStreaming) {
				if (parentSampled) {
					if (ignoreSpans?.length) {
						const { description: inferredChildName, op: childOp } = inferSpanData(spanName, spanAttributes, spanKind);
						if (shouldIgnoreSpan$1({
							description: inferredChildName,
							op: spanAttributes["sentry.op"] ?? childOp,
							attributes: spanAttributes
						}, ignoreSpans)) {
							this._client.recordDroppedEvent("ignored", "span");
							return wrapSamplingDecision({
								decision: SamplingDecision.NOT_RECORD,
								context,
								spanAttributes,
								ignoredChildSpan: true
							});
						}
					}
				}
				if (!parentSampled) {
					const parentSegmentIgnored = parentContext?.traceState?.get(SENTRY_TRACE_STATE_SEGMENT_IGNORED) === "1";
					this._client.recordDroppedEvent(parentSegmentIgnored ? "ignored" : "sample_rate", "span");
				}
			}
			return wrapSamplingDecision({
				decision: parentSampled ? SamplingDecision.RECORD_AND_SAMPLED : SamplingDecision.NOT_RECORD,
				context,
				spanAttributes
			});
		}
		const { description: inferredSpanName, data: inferredAttributes, op } = inferSpanData(spanName, spanAttributes, spanKind);
		const mergedAttributes = {
			...inferredAttributes,
			...spanAttributes
		};
		if (op) mergedAttributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] = op;
		if (this._isSpanStreaming && ignoreSpans?.length && shouldIgnoreSpan$1({
			description: inferredSpanName,
			op: mergedAttributes["sentry.op"] ?? op,
			attributes: mergedAttributes
		}, ignoreSpans)) {
			this._client.recordDroppedEvent("ignored", "span");
			return wrapSamplingDecision({
				decision: SamplingDecision.NOT_RECORD,
				context,
				spanAttributes,
				ignoredSegmentSpan: true
			});
		}
		const mutableSamplingDecision = { decision: true };
		this._client.emit("beforeSampling", {
			spanAttributes: mergedAttributes,
			spanName: inferredSpanName,
			parentSampled,
			parentContext
		}, mutableSamplingDecision);
		if (!mutableSamplingDecision.decision) return wrapSamplingDecision({
			decision: void 0,
			context,
			spanAttributes
		});
		const { isolationScope } = getScopesFromContext(context) ?? {};
		const dscString = parentContext?.traceState ? parentContext.traceState.get(SENTRY_TRACE_STATE_DSC) : void 0;
		const dsc = dscString ? baggageHeaderToDynamicSamplingContext(dscString) : void 0;
		const sampleRand = parseSampleRate(dsc?.sample_rand) ?? safeMathRandom();
		const [sampled, sampleRate, localSampleRateWasApplied] = sampleSpan(options, {
			name: inferredSpanName,
			attributes: mergedAttributes,
			normalizedRequest: isolationScope?.getScopeData().sdkProcessingMetadata.normalizedRequest,
			parentSampled,
			parentSampleRate: parseSampleRate(dsc?.sample_rate)
		}, sampleRand);
		const method = `${maybeSpanHttpMethod}`.toUpperCase();
		if (method === "OPTIONS" || method === "HEAD") {
			DEBUG_BUILD$2 && debug.log(`[Tracing] Not sampling span because HTTP method is '${method}' for ${spanName}`);
			return wrapSamplingDecision({
				decision: SamplingDecision.NOT_RECORD,
				context,
				spanAttributes,
				sampleRand,
				downstreamTraceSampleRate: 0
			});
		}
		if (!sampled && parentSampled === void 0) {
			DEBUG_BUILD$2 && debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
			this._client.recordDroppedEvent("sample_rate", this._isSpanStreaming ? "span" : "transaction");
		}
		return {
			...wrapSamplingDecision({
				decision: sampled ? SamplingDecision.RECORD_AND_SAMPLED : SamplingDecision.NOT_RECORD,
				context,
				spanAttributes,
				sampleRand,
				downstreamTraceSampleRate: localSampleRateWasApplied ? sampleRate : void 0
			}),
			attributes: { [SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: localSampleRateWasApplied ? sampleRate : void 0 }
		};
	}
	/** Returns the sampler name or short description with the configuration. */
	toString() {
		return "SentrySampler";
	}
};
function getParentSampled(parentSpan, traceId, spanName) {
	const parentContext = parentSpan.spanContext();
	if ((0, import_src.isSpanContextValid)(parentContext) && parentContext.traceId === traceId) {
		if (parentContext.isRemote) {
			const parentSampled2 = getSamplingDecision(parentSpan.spanContext());
			DEBUG_BUILD$2 && debug.log(`[Tracing] Inheriting remote parent's sampled decision for ${spanName}: ${parentSampled2}`);
			return parentSampled2;
		}
		const parentSampled = getSamplingDecision(parentContext);
		DEBUG_BUILD$2 && debug.log(`[Tracing] Inheriting parent's sampled decision for ${spanName}: ${parentSampled}`);
		return parentSampled;
	}
}
function wrapSamplingDecision({ decision, context, spanAttributes, sampleRand, downstreamTraceSampleRate, ignoredChildSpan, ignoredSegmentSpan }) {
	let traceState = getBaseTraceState(context, spanAttributes);
	if (downstreamTraceSampleRate !== void 0) traceState = traceState.set(SENTRY_TRACE_STATE_SAMPLE_RATE, `${downstreamTraceSampleRate}`);
	if (sampleRand !== void 0) traceState = traceState.set(SENTRY_TRACE_STATE_SAMPLE_RAND, `${sampleRand}`);
	if (ignoredChildSpan) traceState = traceState.set(SENTRY_TRACE_STATE_CHILD_IGNORED, "1");
	if (ignoredSegmentSpan) traceState = traceState.set(SENTRY_TRACE_STATE_SEGMENT_IGNORED, "1");
	if (decision == void 0) return {
		decision: SamplingDecision.NOT_RECORD,
		traceState
	};
	if (decision === SamplingDecision.NOT_RECORD) return {
		decision,
		traceState: traceState.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, "1")
	};
	return {
		decision,
		traceState
	};
}
function getBaseTraceState(context, spanAttributes) {
	let traceState = (import_src.trace.getSpan(context)?.spanContext())?.traceState || new TraceState();
	const url = spanAttributes["http.url"] || spanAttributes["url.full"];
	if (url && typeof url === "string") traceState = traceState.set(SENTRY_TRACE_STATE_URL, url);
	return traceState;
}
function getValidSpan(context) {
	const span = import_src.trace.getSpan(context);
	return span && (0, import_src.isSpanContextValid)(span.spanContext()) ? span : void 0;
}
function applyOtelSpanData(span, options = {}) {
	const spanJSON = spanToJSON(span);
	const attributes = spanJSON.data;
	const kind = span.kind ?? import_src.SpanKind.INTERNAL;
	const mayInferSource = spanShouldInferOtelSource(span);
	const hasCustomSpanName = attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME] !== void 0;
	const canInferSource = mayInferSource && !hasCustomSpanName && !spanSourceWasExplicitlySet(span);
	const attributesForInference = canInferSource && attributes["sentry.source"] === "custom" ? {
		...attributes,
		[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: void 0
	} : attributes;
	const inferred = inferSpanData(spanJSON.description || "<unknown>", attributesForInference, kind);
	if (kind !== import_src.SpanKind.INTERNAL && attributes["otel.kind"] === void 0) span.setAttribute("otel.kind", import_src.SpanKind[kind]);
	if (inferred.op && attributes["sentry.op"] === void 0) span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, inferred.op);
	if (inferred.source !== void 0 && inferred.source !== "custom" && (options.finalizeStatus || inferred.source !== "url") && (spanJSON.parent_span_id === void 0 || kind === import_src.SpanKind.SERVER) && (attributes["sentry.source"] === void 0 || canInferSource)) span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, inferred.source);
	if (inferred.data) Object.entries(inferred.data).forEach(([key, value]) => {
		if (value !== void 0 && attributes[key] === void 0) span.setAttribute(key, value);
	});
	if (options.finalizeStatus) {
		applyOtelCompatibilityAttributes(span, attributes);
		const client = getClient();
		applyOtelSpanStatus(span, attributes, spanJSON.status, !!client && hasSpanStreamingEnabled(client));
	}
	if (mayInferSource && inferred.description !== spanJSON.description && (attributes["sentry.source"] !== "custom" || canInferSource)) span.updateName(inferred.description);
}
function applyOtelSpanKind(span, kind) {
	addNonEnumerableProperty(span, "kind", kind ?? import_src.SpanKind.INTERNAL);
}
function applyOtelSpanStatus(span, attributes, status, spanStreamingEnabled) {
	if (status === void 0) {
		span.setStatus(inferStatusFromAttributes(attributes) || { code: 1 });
		return;
	}
	if (!spanStreamingEnabled && status !== "ok" && !isStatusErrorMessageValid(status)) span.setStatus({
		code: 2,
		message: "internal_error"
	});
}
function applyOtelCompatibilityAttributes(span, attributes) {
	const legacyHttpStatusCode = attributes[As];
	if (attributes["http.response.status_code"] === void 0 && legacyHttpStatusCode !== void 0) {
		span.setAttribute(Ss, legacyHttpStatusCode);
		attributes[Ss] = legacyHttpStatusCode;
	}
}
var SentryTracer = class {
	/** @inheritdoc */
	startSpan(name, options = {}, ctx) {
		const parentContext = ctx || import_src.context.active();
		const parentSpan = options.root ? void 0 : import_src.trace.getSpan(parentContext);
		if (isTracingSuppressed$2(parentContext)) return this._createNonRecordingSpan(parentSpan);
		const span = this._startSentrySpan(name, options, parentSpan, ctx !== void 0);
		markSpanAsTracerProviderSpan(span);
		applyOtelSpanKind(span, options.kind);
		if (options.attributes?.["sentry.source"] === void 0) markSpanForOtelSourceInference(span);
		applyOtelSpanData(span);
		return span;
	}
	startActiveSpan(name, optionsOrFn, contextOrFn, fn) {
		const options = typeof optionsOrFn === "function" ? {} : optionsOrFn;
		const ctx = typeof contextOrFn === "function" || contextOrFn === void 0 ? import_src.context.active() : contextOrFn;
		const callback = typeof optionsOrFn === "function" ? optionsOrFn : typeof contextOrFn === "function" ? contextOrFn : fn;
		const span = this.startSpan(name, options, ctx);
		const capturedIsolationScope = getCapturedScopesOnSpan(span).isolationScope;
		const withCapturedIsolationScope = (contextToFork) => capturedIsolationScope ? contextToFork.setValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY, capturedIsolationScope) : contextToFork;
		if (spanIsIgnored(span) && import_src.trace.getSpan(ctx)) return import_src.context.with(withCapturedIsolationScope(ctx), () => callback(span));
		return import_src.context.with(withCapturedIsolationScope(import_src.trace.setSpan(ctx, span)), () => {
			_setSpanForScope(getCurrentScope(), span);
			return callback(span);
		});
	}
	_startSentrySpan(name, options, parentSpan, hasExplicitContext) {
		const sentryOptions = {
			name,
			attributes: options.attributes,
			links: options.links,
			startTime: options.startTime
		};
		if (options.root) return startNewTrace$1(() => _INTERNAL_startInactiveSpan({
			...sentryOptions,
			parentSpan: null
		}));
		if (parentSpan?.spanContext().isRemote) return this._startRootSpanWithRemoteParent(sentryOptions, parentSpan);
		if (parentSpan) return _INTERNAL_startInactiveSpan({
			...sentryOptions,
			parentSpan
		});
		return startNewTrace$1(() => _INTERNAL_startInactiveSpan({
			...sentryOptions,
			parentSpan: hasExplicitContext ? null : void 0
		}));
	}
	_startRootSpanWithRemoteParent(options, parentSpan) {
		const { spanId, traceId, traceState } = parentSpan.spanContext();
		const dsc = getDynamicSamplingContextFromSpan(parentSpan);
		const sampleRand = typeof dsc.sample_rand === "string" ? Number(dsc.sample_rand) : void 0;
		const hasIncomingDsc = !!traceState?.get(SENTRY_TRACE_STATE_DSC);
		return withScope((scope) => {
			scope.setPropagationContext({
				traceId,
				parentSpanId: spanId,
				sampled: getSamplingDecision(parentSpan.spanContext()),
				dsc: hasIncomingDsc ? dsc : void 0,
				sampleRand: typeof sampleRand === "number" && !Number.isNaN(sampleRand) ? sampleRand : safeMathRandom()
			});
			_setSpanForScope(scope, void 0);
			return _INTERNAL_startInactiveSpan({
				...options,
				parentSpan: null
			});
		});
	}
	_createNonRecordingSpan(parentSpan) {
		const span = new SentryNonRecordingSpan({ traceId: parentSpan?.spanContext().traceId });
		if (parentSpan) addChildSpanToSpan(parentSpan, span);
		setCapturedScopesOnSpan(span, getCurrentScope(), getIsolationScope());
		return span;
	}
};
var SentryTracerProvider = class {
	constructor(options = {}) {
		this._tracers = /* @__PURE__ */ new Map();
		this.resource = options.resource;
	}
	/** @inheritdoc */
	getTracer(name, version, options) {
		const key = JSON.stringify([
			name,
			version,
			options
		]);
		const cachedTracer = this._tracers.get(key);
		if (cachedTracer) return cachedTracer;
		const tracer = new SentryTracer();
		this._tracers.set(key, tracer);
		return tracer;
	}
	/** Compatibility with SDK tracer providers. */
	forceFlush() {
		return Promise.resolve();
	}
	/** Compatibility with SDK tracer providers. */
	shutdown() {
		return Promise.resolve();
	}
};
var ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
var ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
var ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
var SEMRESATTRS_SERVICE_NAMESPACE = "service.namespace";
var SentryResource = class SentryResource {
	constructor(attributes) {
		this._attributes = attributes;
	}
	get attributes() {
		return this._attributes;
	}
	merge(other) {
		if (!other) return this;
		return new SentryResource({
			...this._attributes,
			...other.attributes
		});
	}
	getRawAttributes() {
		return Object.entries(this._attributes);
	}
};
function parseOtelResourceAttributes(raw) {
	if (!raw) return {};
	const result = {};
	for (const pair of raw.split(",")) {
		const eq = pair.indexOf("=");
		if (eq === -1) continue;
		const key = pair.substring(0, eq).trim();
		const value = pair.substring(eq + 1).trim();
		if (key) try {
			result[key] = decodeURIComponent(value);
		} catch {
			result[key] = value;
		}
	}
	return result;
}
function getSentryResource(serviceNameFallback) {
	const env = typeof process !== "undefined" ? process.env : {};
	const otelServiceName = env.OTEL_SERVICE_NAME;
	const otelResourceAttrs = parseOtelResourceAttributes(env.OTEL_RESOURCE_ATTRIBUTES);
	return new SentryResource({
		[SEMRESATTRS_SERVICE_NAMESPACE]: "sentry",
		[lu]: serviceNameFallback,
		...otelResourceAttrs,
		...otelServiceName ? { [lu]: otelServiceName } : {},
		[pu]: SDK_VERSION,
		[ATTR_TELEMETRY_SDK_LANGUAGE]: SDK_INFO[ATTR_TELEMETRY_SDK_LANGUAGE],
		[ATTR_TELEMETRY_SDK_NAME]: SDK_INFO[ATTR_TELEMETRY_SDK_NAME],
		[ATTR_TELEMETRY_SDK_VERSION]: SDK_INFO[ATTR_TELEMETRY_SDK_VERSION]
	});
}
function getTraceData({ span, scope, client, propagateTraceparent } = {}) {
	let ctx = (scope && getContextFromScope(scope)) ?? import_src.context.active();
	if (span) {
		const { scope: scope2 } = getCapturedScopesOnSpan(span);
		ctx = scope2 && getContextFromScope(scope2) || import_src.trace.setSpan(import_src.context.active(), span);
	}
	const { traceId, spanId, sampled, dynamicSamplingContext } = getInjectionData(ctx, {
		scope,
		client
	});
	const traceData = {
		"sentry-trace": generateSentryTraceHeader(traceId, spanId, sampled),
		baggage: dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext)
	};
	if (propagateTraceparent) traceData.traceparent = generateTraceparentHeader(traceId, spanId, sampled);
	return traceData;
}
function setOpenTelemetryContextAsyncContextStrategy(options) {
	function getScopes() {
		const scopes = getScopesFromContext(import_src.context.active());
		if (scopes) return scopes;
		return {
			scope: getDefaultCurrentScope(),
			isolationScope: getDefaultIsolationScope()
		};
	}
	function withScope(callback) {
		const ctx = import_src.context.active();
		return import_src.context.with(ctx, () => {
			return callback(getCurrentScope());
		});
	}
	function withSetScope(scope, callback) {
		const ctx = getContextFromScope(scope) || import_src.context.active();
		return import_src.context.with(ctx.setValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY, scope), () => {
			return callback(scope);
		});
	}
	function withIsolationScope(callback) {
		const ctx = import_src.context.active();
		return import_src.context.with(ctx.setValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY, true), () => {
			return callback(getIsolationScope());
		});
	}
	function withSetIsolationScope(isolationScope, callback) {
		const ctx = import_src.context.active();
		return import_src.context.with(ctx.setValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY, isolationScope), () => {
			return callback(getIsolationScope());
		});
	}
	function getCurrentScope() {
		return getScopes().scope;
	}
	function getIsolationScope() {
		return getScopes().isolationScope;
	}
	setAsyncContextStrategy({
		withScope,
		withSetScope,
		withSetIsolationScope,
		withIsolationScope,
		getCurrentScope,
		getIsolationScope,
		startSpan: startSpan$1,
		startSpanManual,
		startInactiveSpan,
		getActiveSpan,
		suppressTracing,
		isTracingSuppressed,
		getTraceData,
		continueTrace,
		startNewTrace,
		withActiveSpan,
		getTracingChannelBinding: options?.getTracingChannelBinding
	});
}
//#endregion
//#region node_modules/@sentry/opentelemetry/build/esm/index.js
var ADD_LISTENER_METHODS = [
	"addListener",
	"on",
	"once",
	"prependListener",
	"prependOnceListener"
];
var SentryAsyncLocalStorageContextManager = class {
	constructor() {
		this._kOtListeners = /* @__PURE__ */ Symbol("OtListeners");
		this._wrapped = false;
		setIsSetup("SentryContextManager");
		this._asyncLocalStorage = getAsyncContextStrategy(getMainCarrier()).getTracingChannelBinding?.()?.asyncLocalStorage ?? new AsyncLocalStorage();
	}
	active() {
		return this._asyncLocalStorage.getStore() ?? import_src.ROOT_CONTEXT;
	}
	with(context, fn, thisArg, ...args) {
		const ctx2 = buildContextWithSentryScopes(context, this.active());
		const cb = thisArg == null ? fn : fn.bind(thisArg);
		return this._asyncLocalStorage.run(ctx2, cb, ...args);
	}
	enable() {
		return this;
	}
	disable() {
		this._asyncLocalStorage.disable();
		return this;
	}
	bind(context, target) {
		if (target instanceof EventEmitter) return this._bindEventEmitter(context, target);
		if (typeof target === "function") return this._bindFunction(context, target);
		return target;
	}
	/**
	* Gets underlying AsyncLocalStorage and symbol to allow lookup of scope.
	* This is Sentry-specific.
	*/
	getAsyncLocalStorageLookup() {
		return {
			asyncLocalStorage: this._asyncLocalStorage,
			contextSymbol: SENTRY_SCOPES_CONTEXT_KEY
		};
	}
	_bindFunction(context, target) {
		const managerWith = this.with.bind(this);
		const contextWrapper = function(...args) {
			return managerWith(context, () => target.apply(this, args));
		};
		Object.defineProperty(contextWrapper, "length", {
			enumerable: false,
			configurable: true,
			writable: false,
			value: target.length
		});
		return contextWrapper;
	}
	_bindEventEmitter(context, ee) {
		if (this._getPatchMap(ee) !== void 0) return ee;
		this._createPatchMap(ee);
		for (const methodName of ADD_LISTENER_METHODS) {
			if (ee[methodName] === void 0) continue;
			ee[methodName] = this._patchAddListener(ee, ee[methodName], context);
		}
		if (typeof ee.removeListener === "function") ee.removeListener = this._patchRemoveListener(ee, ee.removeListener);
		if (typeof ee.off === "function") ee.off = this._patchRemoveListener(ee, ee.off);
		if (typeof ee.removeAllListeners === "function") ee.removeAllListeners = this._patchRemoveAllListeners(ee, ee.removeAllListeners);
		return ee;
	}
	_patchRemoveListener(ee, original) {
		const contextManager = this;
		return function(event, listener) {
			const events = contextManager._getPatchMap(ee)?.[event];
			if (events === void 0) return original.call(this, event, listener);
			const patchedListener = events.get(listener);
			return original.call(this, event, patchedListener || listener);
		};
	}
	_patchRemoveAllListeners(ee, original) {
		const contextManager = this;
		return function(event) {
			const map = contextManager._getPatchMap(ee);
			if (map !== void 0) {
				if (arguments.length === 0) contextManager._createPatchMap(ee);
				else if (event !== void 0 && map[event] !== void 0) delete map[event];
			}
			return original.apply(this, arguments);
		};
	}
	_patchAddListener(ee, original, context) {
		const contextManager = this;
		return function(event, listener) {
			if (contextManager._wrapped) return original.call(this, event, listener);
			let map = contextManager._getPatchMap(ee);
			if (map === void 0) map = contextManager._createPatchMap(ee);
			let listeners = map[event];
			if (listeners === void 0) {
				listeners = /* @__PURE__ */ new WeakMap();
				map[event] = listeners;
			}
			const patchedListener = contextManager.bind(context, listener);
			listeners.set(listener, patchedListener);
			contextManager._wrapped = true;
			try {
				return original.call(this, event, patchedListener);
			} finally {
				contextManager._wrapped = false;
			}
		};
	}
	_createPatchMap(ee) {
		const map = /* @__PURE__ */ Object.create(null);
		ee[this._kOtListeners] = map;
		return map;
	}
	_getPatchMap(ee) {
		return ee[this._kOtListeners];
	}
};
function setNodeOpenTelemetryContextAsyncContextStrategy(options) {
	setOpenTelemetryContextAsyncContextStrategy({ getTracingChannelBinding: !options?.skipOpenTelemetrySetup ? getDefaultAsyncLocalStorageFactory() : getCustomAsyncLocalStorageFactory() });
}
function getDefaultAsyncLocalStorageFactory() {
	const defaultAsyncLocalStorage = new AsyncLocalStorage();
	return () => {
		return {
			asyncLocalStorage: defaultAsyncLocalStorage,
			getStoreWithActiveSpan
		};
	};
}
function getCustomAsyncLocalStorageFactory() {
	return () => {
		try {
			const asyncLocalStorage = import_src.context._getContextManager()?.getAsyncLocalStorageLookup().asyncLocalStorage;
			return asyncLocalStorage ? {
				asyncLocalStorage,
				getStoreWithActiveSpan
			} : void 0;
		} catch {
			return;
		}
	};
}
function getStoreWithActiveSpan(span) {
	const activeContext = import_src.context.active();
	return spanIsIgnored(span) && getRootSpan$1(span) !== span || span.spanContext().traceState?.get("sentry.ignored") === "1" ? activeContext : import_src.trace.setSpan(activeContext, span);
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/otel/contextManager.js
var SentryContextManager = SentryAsyncLocalStorageContextManager;
//#endregion
//#region node_modules/@sentry/node-core/build/esm/otel/logger.js
function setupOpenTelemetryLogger() {
	import_src.diag.disable();
	import_src.diag.setLogger({
		error: debug.error,
		warn: debug.warn,
		info: debug.log,
		debug: debug.log,
		verbose: debug.log
	}, import_src.DiagLogLevel.DEBUG);
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/otel/instrument.js
var INSTRUMENTED = {};
function generateInstrumentOnce(name, creatorOrClass, optionsCallback) {
	if (optionsCallback) return _generateInstrumentOnceWithOptions(name, creatorOrClass, optionsCallback);
	return _generateInstrumentOnce(name, creatorOrClass);
}
function _generateInstrumentOnce(name, creator) {
	return Object.assign((options) => {
		const instrumented = INSTRUMENTED[name];
		if (instrumented) {
			if (options) instrumented.setConfig(options);
			return instrumented;
		}
		const instrumentation = creator(options);
		INSTRUMENTED[name] = instrumentation;
		registerInstrumentations({ instrumentations: [instrumentation] });
		return instrumentation;
	}, { id: name });
}
function _generateInstrumentOnceWithOptions(name, instrumentationClass, optionsCallback) {
	return Object.assign((_options) => {
		const options = optionsCallback(_options);
		const instrumented = INSTRUMENTED[name];
		if (instrumented) {
			instrumented.setConfig(options);
			return instrumented;
		}
		const instrumentation = new instrumentationClass(options);
		INSTRUMENTED[name] = instrumentation;
		registerInstrumentations({ instrumentations: [instrumentation] });
		return instrumentation;
	}, { id: name });
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/childProcess.js
var INTEGRATION_NAME$34 = "ChildProcess";
var childProcessIntegration = defineIntegration((options = {}) => {
	return {
		name: INTEGRATION_NAME$34,
		setup() {
			diagnosticsChannel.channel("child_process").subscribe((event) => {
				if (isObjectLike(event) && "process" in event) captureChildProcessEvents(event.process, options);
			});
			diagnosticsChannel.channel("worker_threads").subscribe((event) => {
				if (isObjectLike(event) && "worker" in event) captureWorkerThreadEvents(event.worker, options);
			});
		}
	};
});
function captureChildProcessEvents(child, options) {
	let hasExited = false;
	let data;
	child.on("spawn", () => {
		if (child.spawnfile === "/usr/bin/sw_vers") {
			hasExited = true;
			return;
		}
		data = { spawnfile: child.spawnfile };
		if (options.includeChildProcessArgs) data.spawnargs = child.spawnargs;
	}).on("exit", (code) => {
		if (!hasExited) {
			hasExited = true;
			if (code !== null && code !== 0) addBreadcrumb({
				category: "child_process",
				message: `Child process exited with code '${code}'`,
				level: code === 0 ? "info" : "warning",
				data
			});
		}
	}).on("error", (error) => {
		if (!hasExited) {
			hasExited = true;
			addBreadcrumb({
				category: "child_process",
				message: `Child process errored with '${error.message}'`,
				level: "error",
				data
			});
		}
	});
}
function captureWorkerThreadEvents(worker, options) {
	let threadId;
	worker.on("online", () => {
		threadId = worker.threadId;
	}).on("error", (error) => {
		if (options.captureWorkerErrors !== false) captureException(error, { mechanism: {
			type: "auto.child_process.worker_thread",
			handled: false,
			data: { threadId: String(threadId) }
		} });
		else addBreadcrumb({
			category: "worker_thread",
			message: `Worker thread errored with '${error.message}'`,
			level: "error",
			data: { threadId }
		});
	});
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/context.js
var readFileAsync = promisify(readFile);
var readDirAsync = promisify(readdir);
var INTEGRATION_NAME$33 = "Context";
var _nodeContextIntegration = ((options = {}) => {
	const _options = {
		app: true,
		os: true,
		device: true,
		culture: true,
		cloudResource: true,
		...options
	};
	const appContext = _options.app ? getAppContext() : void 0;
	const deviceContext = _options.device ? getDeviceContext(_options.device) : void 0;
	const cultureContext = _options.culture ? getCultureContext() : void 0;
	const cloudResourceContext = _options.cloudResource ? getCloudResourceContext() : void 0;
	const osContextPromise = _options.os ? getOsContext() : void 0;
	const cachedSpanAttributes = {
		"process.runtime.engine.name": "v8",
		"process.runtime.engine.version": process.versions.v8,
		...contextsToSpanAttributes({
			app: appContext,
			device: deviceContext,
			culture: cultureContext,
			cloud_resource: cloudResourceContext
		})
	};
	if (osContextPromise) osContextPromise.then((osCtx) => Object.assign(cachedSpanAttributes, contextsToSpanAttributes({ os: osCtx }))).catch(() => {});
	const contextsPromise = (async () => {
		const contexts = {};
		if (osContextPromise) contexts.os = await osContextPromise;
		if (appContext) contexts.app = appContext;
		if (deviceContext) contexts.device = deviceContext;
		if (cultureContext) contexts.culture = cultureContext;
		if (cloudResourceContext) contexts.cloud_resource = cloudResourceContext;
		return contexts;
	})();
	async function addContext(event) {
		const updatedContext = _updateContext(await contextsPromise);
		event.contexts = {
			...event.contexts,
			app: {
				...updatedContext.app,
				...event.contexts?.app
			},
			os: {
				...updatedContext.os,
				...event.contexts?.os
			},
			device: {
				...updatedContext.device,
				...event.contexts?.device
			},
			culture: {
				...updatedContext.culture,
				...event.contexts?.culture
			},
			cloud_resource: {
				...updatedContext.cloud_resource,
				...event.contexts?.cloud_resource
			}
		};
		return event;
	}
	return {
		name: INTEGRATION_NAME$33,
		processEvent(event) {
			return addContext(event);
		},
		processSegmentSpan(span) {
			safeSetSpanJSONAttributes(span, cachedSpanAttributes);
			safeSetSpanJSONAttributes(span, getDynamicSpanAttributes(appContext, deviceContext));
		}
	};
});
var nodeContextIntegration = defineIntegration(_nodeContextIntegration);
function _updateContext(contexts) {
	if (contexts.app?.app_memory) contexts.app.app_memory = process.memoryUsage().rss;
	if (contexts.app?.free_memory && typeof process.availableMemory === "function") {
		const freeMemory = process.availableMemory?.();
		if (freeMemory != null) contexts.app.free_memory = freeMemory;
	}
	if (contexts.device?.free_memory) contexts.device.free_memory = os.freemem();
	return contexts;
}
function contextsToSpanAttributes(contexts) {
	const attrs = {};
	const { app, device, os: osCtx, culture, cloud_resource } = contexts;
	if (app) {
		if (app.app_start_time) attrs["app.start_time"] = app.app_start_time;
	}
	if (device) {
		if (device.arch) attrs["device.archs"] = [device.arch];
		if (device.boot_time) attrs["device.boot_time"] = device.boot_time;
		if (device.memory_size != null) attrs["device.memory_size"] = device.memory_size;
		if (device.processor_count != null) attrs["device.processor_count"] = device.processor_count;
		if (device.cpu_description) attrs["device.cpu_description"] = device.cpu_description;
		if (device.processor_frequency != null) attrs["device.processor_frequency"] = device.processor_frequency;
	}
	if (osCtx) {
		if (osCtx.name) attrs["os.name"] = osCtx.name;
		if (osCtx.version) attrs["os.version"] = osCtx.version;
		if (osCtx.kernel_version) attrs["os.kernel_version"] = osCtx.kernel_version;
		if (osCtx.build) attrs["os.build"] = osCtx.build;
	}
	if (culture) {
		if (culture.locale) attrs["culture.locale"] = culture.locale;
		if (culture.timezone) attrs["culture.timezone"] = culture.timezone;
	}
	if (cloud_resource) {
		for (const [key, value] of Object.entries(cloud_resource)) if (value != null) attrs[key] = value;
	}
	return attrs;
}
function getDynamicSpanAttributes(appContext, deviceContext) {
	const attrs = {};
	if (appContext) {
		attrs["app.memory"] = process.memoryUsage().rss;
		if (typeof process.availableMemory === "function") {
			const freeMemory = process.availableMemory?.();
			if (freeMemory != null) attrs["app.free_memory"] = freeMemory;
		}
	}
	if (deviceContext?.free_memory != null) attrs["device.free_memory"] = os.freemem();
	return attrs;
}
async function getOsContext() {
	const platformId = os.platform();
	switch (platformId) {
		case "darwin": return getDarwinInfo();
		case "linux": return getLinuxInfo();
		default: return {
			name: PLATFORM_NAMES[platformId] || platformId,
			version: os.release()
		};
	}
}
function getCultureContext() {
	try {
		if (typeof process.versions.icu !== "string") return;
		const january = /* @__PURE__ */ new Date(9e8);
		if (new Intl.DateTimeFormat("es", { month: "long" }).format(january) === "enero") {
			const options = Intl.DateTimeFormat().resolvedOptions();
			return {
				locale: options.locale,
				timezone: options.timeZone
			};
		}
	} catch {}
}
function getAppContext() {
	const app_memory = process.memoryUsage().rss;
	const appContext = {
		app_start_time: (/* @__PURE__ */ new Date(Date.now() - process.uptime() * 1e3)).toISOString(),
		app_memory
	};
	if (typeof process.availableMemory === "function") {
		const freeMemory = process.availableMemory?.();
		if (freeMemory != null) appContext.free_memory = freeMemory;
	}
	return appContext;
}
function getDeviceContext(deviceOpt) {
	const device = {};
	let uptime;
	try {
		uptime = os.uptime();
	} catch {}
	if (typeof uptime === "number") device.boot_time = (/* @__PURE__ */ new Date(Date.now() - uptime * 1e3)).toISOString();
	device.arch = os.arch();
	if (deviceOpt === true || deviceOpt.memory) {
		device.memory_size = os.totalmem();
		device.free_memory = os.freemem();
	}
	if (deviceOpt === true || deviceOpt.cpu) {
		const cpuInfo = os.cpus();
		const firstCpu = cpuInfo?.[0];
		if (firstCpu) {
			device.processor_count = cpuInfo.length;
			device.cpu_description = firstCpu.model;
			device.processor_frequency = firstCpu.speed;
		}
	}
	return device;
}
var PLATFORM_NAMES = {
	aix: "IBM AIX",
	freebsd: "FreeBSD",
	openbsd: "OpenBSD",
	sunos: "SunOS",
	win32: "Windows",
	ohos: "OpenHarmony",
	android: "Android"
};
var LINUX_DISTROS = [
	{
		name: "fedora-release",
		distros: ["Fedora"]
	},
	{
		name: "redhat-release",
		distros: ["Red Hat Linux", "Centos"]
	},
	{
		name: "redhat_version",
		distros: ["Red Hat Linux"]
	},
	{
		name: "SuSE-release",
		distros: ["SUSE Linux"]
	},
	{
		name: "lsb-release",
		distros: ["Ubuntu Linux", "Arch Linux"]
	},
	{
		name: "debian_version",
		distros: ["Debian"]
	},
	{
		name: "debian_release",
		distros: ["Debian"]
	},
	{
		name: "arch-release",
		distros: ["Arch Linux"]
	},
	{
		name: "gentoo-release",
		distros: ["Gentoo Linux"]
	},
	{
		name: "novell-release",
		distros: ["SUSE Linux"]
	},
	{
		name: "alpine-release",
		distros: ["Alpine Linux"]
	}
];
var LINUX_VERSIONS = {
	alpine: (content) => content,
	arch: (content) => matchFirst(/distrib_release=(.*)/, content),
	centos: (content) => matchFirst(/release ([^ ]+)/, content),
	debian: (content) => content,
	fedora: (content) => matchFirst(/release (..)/, content),
	mint: (content) => matchFirst(/distrib_release=(.*)/, content),
	red: (content) => matchFirst(/release ([^ ]+)/, content),
	suse: (content) => matchFirst(/VERSION = (.*)\n/, content),
	ubuntu: (content) => matchFirst(/distrib_release=(.*)/, content)
};
function matchFirst(regex, text) {
	const match = regex.exec(text);
	return match ? match[1] : void 0;
}
async function getDarwinInfo() {
	const darwinInfo = {
		kernel_version: os.release(),
		name: "Mac OS X",
		version: `10.${Number(os.release().split(".")[0]) - 4}`
	};
	try {
		const output = await new Promise((resolve, reject) => {
			execFile("/usr/bin/sw_vers", (error, stdout) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(stdout);
			});
		});
		darwinInfo.name = matchFirst(/^ProductName:\s+(.*)$/m, output);
		darwinInfo.version = matchFirst(/^ProductVersion:\s+(.*)$/m, output);
		darwinInfo.build = matchFirst(/^BuildVersion:\s+(.*)$/m, output);
	} catch {}
	return darwinInfo;
}
function getLinuxDistroId(name) {
	return name.split(" ")[0].toLowerCase();
}
async function getLinuxInfo() {
	const linuxInfo = {
		kernel_version: os.release(),
		name: "Linux"
	};
	try {
		const etcFiles = await readDirAsync("/etc");
		const distroFile = LINUX_DISTROS.find((file) => etcFiles.includes(file.name));
		if (!distroFile) return linuxInfo;
		const contents = (await readFileAsync(join("/etc", distroFile.name), { encoding: "utf-8" })).toLowerCase();
		const { distros } = distroFile;
		linuxInfo.name = distros.find((d) => contents.indexOf(getLinuxDistroId(d)) >= 0) || distros[0];
		linuxInfo.version = LINUX_VERSIONS[getLinuxDistroId(linuxInfo.name)]?.(contents);
	} catch {}
	return linuxInfo;
}
function getCloudResourceContext() {
	if (process.env.VERCEL) return {
		"cloud.provider": "vercel",
		"cloud.region": process.env.VERCEL_REGION
	};
	else if (process.env.AWS_REGION) return {
		"cloud.provider": "aws",
		"cloud.region": process.env.AWS_REGION,
		"cloud.platform": process.env.AWS_EXECUTION_ENV
	};
	else if (process.env.GCP_PROJECT) return { "cloud.provider": "gcp" };
	else if (process.env.ALIYUN_REGION_ID) return {
		"cloud.provider": "alibaba_cloud",
		"cloud.region": process.env.ALIYUN_REGION_ID
	};
	else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) return {
		"cloud.provider": "azure",
		"cloud.region": process.env.REGION_NAME
	};
	else if (process.env.IBM_CLOUD_REGION) return {
		"cloud.provider": "ibm_cloud",
		"cloud.region": process.env.IBM_CLOUD_REGION
	};
	else if (process.env.TENCENTCLOUD_REGION) return {
		"cloud.provider": "tencent_cloud",
		"cloud.region": process.env.TENCENTCLOUD_REGION,
		"cloud.account.id": process.env.TENCENTCLOUD_APPID,
		"cloud.availability_zone": process.env.TENCENTCLOUD_ZONE
	};
	else if (process.env.NETLIFY) return { "cloud.provider": "netlify" };
	else if (process.env.FLY_REGION) return {
		"cloud.provider": "fly.io",
		"cloud.region": process.env.FLY_REGION
	};
	else if (process.env.DYNO) return { "cloud.provider": "heroku" };
	else return;
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/contextlines.js
var LRU_FILE_CONTENTS_CACHE = new LRUMap(10);
var LRU_FILE_CONTENTS_FS_READ_FAILED = new LRUMap(20);
var DEFAULT_LINES_OF_CONTEXT = 7;
var INTEGRATION_NAME$32 = "ContextLines";
function emplace(map, key, contents) {
	const value = map.get(key);
	if (value === void 0) {
		map.set(key, contents);
		return contents;
	}
	return value;
}
function shouldSkipContextLinesForFile(path) {
	if (path.startsWith("node:")) return true;
	if (path.endsWith(".min.js")) return true;
	if (path.endsWith(".min.cjs")) return true;
	if (path.endsWith(".min.mjs")) return true;
	if (path.startsWith("data:")) return true;
	return false;
}
function shouldSkipContextLinesForFrame(frame) {
	if (frame.lineno !== void 0 && frame.lineno > 1e4) return true;
	if (frame.colno !== void 0 && frame.colno > 1e3) return true;
	return false;
}
function rangeExistsInContentCache(file, range) {
	const contents = LRU_FILE_CONTENTS_CACHE.get(file);
	if (contents === void 0) return false;
	for (let i = range[0]; i <= range[1]; i++) if (contents[i] === void 0) return false;
	return true;
}
function makeLineReaderRanges(lines, linecontext) {
	if (!lines.length) return [];
	let i = 0;
	const line = lines[0];
	if (typeof line !== "number") return [];
	let current = makeContextRange(line, linecontext);
	const out = [];
	while (true) {
		if (i === lines.length - 1) {
			out.push(current);
			break;
		}
		const next = lines[i + 1];
		if (typeof next !== "number") break;
		if (next <= current[1]) current[1] = next + linecontext;
		else {
			out.push(current);
			current = makeContextRange(next, linecontext);
		}
		i++;
	}
	return out;
}
function getContextLinesFromFile(path, ranges, output) {
	return new Promise((resolve, _reject) => {
		const stream = createReadStream(path);
		const lineReaded = createInterface({ input: stream });
		function destroyStreamAndResolve() {
			stream.destroy();
			resolve();
		}
		let lineNumber = 0;
		let currentRangeIndex = 0;
		const range = ranges[currentRangeIndex];
		if (range === void 0) {
			destroyStreamAndResolve();
			return;
		}
		let rangeStart = range[0];
		let rangeEnd = range[1];
		function onStreamError(e) {
			LRU_FILE_CONTENTS_FS_READ_FAILED.set(path, 1);
			DEBUG_BUILD$3 && debug.error(`Failed to read file: ${path}. Error: ${e}`);
			lineReaded.close();
			lineReaded.removeAllListeners();
			destroyStreamAndResolve();
		}
		stream.on("error", onStreamError);
		lineReaded.on("error", onStreamError);
		lineReaded.on("close", destroyStreamAndResolve);
		lineReaded.on("line", (line) => {
			lineNumber++;
			if (lineNumber < rangeStart) return;
			output[lineNumber] = snipLine(line, 0);
			if (lineNumber >= rangeEnd) {
				if (currentRangeIndex === ranges.length - 1) {
					lineReaded.close();
					lineReaded.removeAllListeners();
					return;
				}
				currentRangeIndex++;
				const range2 = ranges[currentRangeIndex];
				if (range2 === void 0) {
					lineReaded.close();
					lineReaded.removeAllListeners();
					return;
				}
				rangeStart = range2[0];
				rangeEnd = range2[1];
			}
		});
	});
}
async function addSourceContext(event, contextLines) {
	const filesToLines = {};
	if (contextLines > 0 && event.exception?.values) for (const exception of event.exception.values) {
		if (!exception.stacktrace?.frames?.length) continue;
		for (let i = exception.stacktrace.frames.length - 1; i >= 0; i--) {
			const frame = exception.stacktrace.frames[i];
			const filename = frame?.filename;
			if (!frame || typeof filename !== "string" || typeof frame.lineno !== "number" || shouldSkipContextLinesForFile(filename) || shouldSkipContextLinesForFrame(frame)) continue;
			if (!filesToLines[filename]) filesToLines[filename] = [];
			filesToLines[filename].push(frame.lineno);
		}
	}
	const files = Object.keys(filesToLines);
	if (files.length == 0) return event;
	const readlinePromises = [];
	for (const file of files) {
		if (LRU_FILE_CONTENTS_FS_READ_FAILED.get(file)) continue;
		const filesToLineRanges = filesToLines[file];
		if (!filesToLineRanges) continue;
		filesToLineRanges.sort((a, b) => a - b);
		const ranges = makeLineReaderRanges(filesToLineRanges, contextLines);
		if (ranges.every((r) => rangeExistsInContentCache(file, r))) continue;
		const cache = emplace(LRU_FILE_CONTENTS_CACHE, file, {});
		readlinePromises.push(getContextLinesFromFile(file, ranges, cache));
	}
	await Promise.all(readlinePromises).catch(() => {
		DEBUG_BUILD$3 && debug.log("Failed to read one or more source files and resolve context lines");
	});
	if (contextLines > 0 && event.exception?.values) {
		for (const exception of event.exception.values) if (exception.stacktrace?.frames && exception.stacktrace.frames.length > 0) addSourceContextToFrames(exception.stacktrace.frames, contextLines, LRU_FILE_CONTENTS_CACHE);
	}
	return event;
}
function addSourceContextToFrames(frames, contextLines, cache) {
	for (const frame of frames) if (frame.filename && frame.context_line === void 0 && typeof frame.lineno === "number") {
		const contents = cache.get(frame.filename);
		if (contents === void 0) continue;
		addContextToFrame(frame.lineno, frame, contextLines, contents);
	}
}
function clearLineContext(frame) {
	delete frame.pre_context;
	delete frame.context_line;
	delete frame.post_context;
}
function addContextToFrame(lineno, frame, contextLines, contents) {
	if (frame.lineno === void 0 || contents === void 0) {
		DEBUG_BUILD$3 && debug.error("Cannot resolve context for frame with no lineno or file contents");
		return;
	}
	frame.pre_context = [];
	for (let i = makeRangeStart(lineno, contextLines); i < lineno; i++) {
		const line = contents[i];
		if (line === void 0) {
			clearLineContext(frame);
			DEBUG_BUILD$3 && debug.error(`Could not find line ${i} in file ${frame.filename}`);
			return;
		}
		frame.pre_context.push(line);
	}
	if (contents[lineno] === void 0) {
		clearLineContext(frame);
		DEBUG_BUILD$3 && debug.error(`Could not find line ${lineno} in file ${frame.filename}`);
		return;
	}
	frame.context_line = contents[lineno];
	const end = makeRangeEnd(lineno, contextLines);
	frame.post_context = [];
	for (let i = lineno + 1; i <= end; i++) {
		const line = contents[i];
		if (line === void 0) break;
		frame.post_context.push(line);
	}
}
function makeRangeStart(line, linecontext) {
	return Math.max(1, line - linecontext);
}
function makeRangeEnd(line, linecontext) {
	return line + linecontext;
}
function makeContextRange(line, linecontext) {
	return [makeRangeStart(line, linecontext), makeRangeEnd(line, linecontext)];
}
var _contextLinesIntegration = ((options = {}) => {
	return {
		name: INTEGRATION_NAME$32,
		processEvent(event, _hint, client) {
			return addSourceContext(event, options.frameContextLines ?? client?.getDataCollectionOptions().frameContextLines ?? DEFAULT_LINES_OF_CONTEXT);
		}
	};
});
var contextLinesIntegration = defineIntegration(_contextLinesIntegration);
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/http/index.js
var INTEGRATION_NAME$31 = "Http";
Object.assign(instrumentHttpOutgoingRequests, { id: `${INTEGRATION_NAME$31}.sentry` });
var httpIntegration$1 = defineIntegration((options = {}) => {
	const spans = options.spans ?? false;
	const disableIncomingRequestSpans = options.disableIncomingRequestSpans ?? false;
	const enabledServerSpans = spans && !disableIncomingRequestSpans;
	const serverOptions = {
		sessions: options.trackIncomingRequestsAsSessions,
		sessionFlushingDelayMS: options.sessionFlushingDelayMS,
		ignoreRequestBody: options.ignoreIncomingRequestBody,
		maxRequestBodySize: options.maxIncomingRequestBodySize
	};
	const serverSpansOptions = {
		ignoreIncomingRequests: options.ignoreIncomingRequests,
		ignoreStaticAssets: options.ignoreStaticAssets,
		ignoreStatusCodes: options.dropSpansForIncomingRequestStatusCodes
	};
	const httpInstrumentationOptions = {
		breadcrumbs: options.breadcrumbs,
		propagateTraceInOutgoingRequests: options.tracePropagation ?? true,
		ignoreOutgoingRequests: options.ignoreOutgoingRequests,
		spans
	};
	const server = httpServerIntegration(serverOptions);
	const serverSpans = httpServerSpansIntegration(serverSpansOptions);
	return {
		name: INTEGRATION_NAME$31,
		setup(client) {
			if (enabledServerSpans) serverSpans.setup(client);
		},
		setupOnce() {
			server.setupOnce();
			instrumentHttpOutgoingRequests(httpInstrumentationOptions);
		},
		processEvent(event) {
			return serverSpans.processEvent(event);
		}
	};
});
//#endregion
//#region node_modules/@sentry/node-core/build/esm/utils/debug.js
var cachedDebuggerEnabled;
async function isDebuggerEnabled() {
	if (cachedDebuggerEnabled === void 0) try {
		cachedDebuggerEnabled = !!(await import("node:inspector")).url();
	} catch {
		cachedDebuggerEnabled = false;
	}
	return cachedDebuggerEnabled;
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/local-variables/common.js
var LOCAL_VARIABLES_KEY = "__SENTRY_ERROR_LOCAL_VARIABLES__";
function createRateLimiter(maxPerSecond, enable, disable) {
	let count = 0;
	let retrySeconds = 5;
	let disabledTimeout = 0;
	setInterval(() => {
		if (disabledTimeout === 0) {
			if (count > maxPerSecond) {
				retrySeconds *= 2;
				disable(retrySeconds);
				if (retrySeconds > 86400) retrySeconds = 86400;
				disabledTimeout = retrySeconds;
			}
		} else {
			disabledTimeout -= 1;
			if (disabledTimeout === 0) enable();
		}
		count = 0;
	}, 1e3).unref();
	return () => {
		count += 1;
	};
}
function isAnonymous(name) {
	return name !== void 0 && (name.length === 0 || name === "?" || name === "<anonymous>");
}
function functionNamesMatch(a, b) {
	return a === b || `Object.${a}` === b || a === `Object.${b}` || isAnonymous(a) && isAnonymous(b);
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/local-variables/local-variables-async.js
var base64WorkerScript = "LyohIEBzZW50cnkvbm9kZS1jb3JlIDEwLjY2LjAgKDMyM2NiZjYpIHwgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdCAqLwppbXBvcnR7U2Vzc2lvbiBhcyBlfWZyb20ibm9kZTppbnNwZWN0b3IvcHJvbWlzZXMiO2ltcG9ydHt3b3JrZXJEYXRhIGFzIHR9ZnJvbSJub2RlOndvcmtlcl90aHJlYWRzIjtjb25zdCBuPWdsb2JhbFRoaXMsaT17fTtjb25zdCBvPSJfX1NFTlRSWV9FUlJPUl9MT0NBTF9WQVJJQUJMRVNfXyI7Y29uc3QgYT10O2Z1bmN0aW9uIHMoLi4uZSl7YS5kZWJ1ZyYmZnVuY3Rpb24oZSl7aWYoISgiY29uc29sZSJpbiBuKSlyZXR1cm4gZSgpO2NvbnN0IHQ9bi5jb25zb2xlLG89e30sYT1PYmplY3Qua2V5cyhpKTthLmZvckVhY2goZT0+e2NvbnN0IG49aVtlXTtvW2VdPXRbZV0sdFtlXT1ufSk7dHJ5e3JldHVybiBlKCl9ZmluYWxseXthLmZvckVhY2goZT0+e3RbZV09b1tlXX0pfX0oKCk9PmNvbnNvbGUubG9nKCJbTG9jYWxWYXJpYWJsZXMgV29ya2VyXSIsLi4uZSkpfWFzeW5jIGZ1bmN0aW9uIGMoZSx0LG4saSl7Y29uc3Qgbz1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pO2lbbl09by5yZXN1bHQuZmlsdGVyKGU9PiJsZW5ndGgiIT09ZS5uYW1lJiYhaXNOYU4ocGFyc2VJbnQoZS5uYW1lLDEwKSkpLnNvcnQoKGUsdCk9PnBhcnNlSW50KGUubmFtZSwxMCktcGFyc2VJbnQodC5uYW1lLDEwKSkubWFwKGU9PmUudmFsdWU/LnZhbHVlKX1hc3luYyBmdW5jdGlvbiByKGUsdCxuLGkpe2NvbnN0IG89YXdhaXQgZS5wb3N0KCJSdW50aW1lLmdldFByb3BlcnRpZXMiLHtvYmplY3RJZDp0LG93blByb3BlcnRpZXM6ITB9KTtpW25dPW8ucmVzdWx0Lm1hcChlPT5bZS5uYW1lLGUudmFsdWU/LnZhbHVlXSkucmVkdWNlKChlLFt0LG5dKT0+KGVbdF09bixlKSx7fSl9ZnVuY3Rpb24gdShlLHQpe2UudmFsdWUmJigidmFsdWUiaW4gZS52YWx1ZT92b2lkIDA9PT1lLnZhbHVlLnZhbHVlfHxudWxsPT09ZS52YWx1ZS52YWx1ZT90W2UubmFtZV09YDwke2UudmFsdWUudmFsdWV9PmA6dFtlLm5hbWVdPWUudmFsdWUudmFsdWU6ImRlc2NyaXB0aW9uImluIGUudmFsdWUmJiJmdW5jdGlvbiIhPT1lLnZhbHVlLnR5cGU/dFtlLm5hbWVdPWA8JHtlLnZhbHVlLmRlc2NyaXB0aW9ufT5gOiJ1bmRlZmluZWQiPT09ZS52YWx1ZS50eXBlJiYodFtlLm5hbWVdPSI8dW5kZWZpbmVkPiIpKX1hc3luYyBmdW5jdGlvbiBsKGUsdCl7Y29uc3Qgbj1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pLGk9e307Zm9yKGNvbnN0IHQgb2Ygbi5yZXN1bHQpaWYodC52YWx1ZT8ub2JqZWN0SWQmJiJBcnJheSI9PT10LnZhbHVlLmNsYXNzTmFtZSl7Y29uc3Qgbj10LnZhbHVlLm9iamVjdElkO2F3YWl0IGMoZSxuLHQubmFtZSxpKX1lbHNlIGlmKHQudmFsdWU/Lm9iamVjdElkJiYiT2JqZWN0Ij09PXQudmFsdWUuY2xhc3NOYW1lKXtjb25zdCBuPXQudmFsdWUub2JqZWN0SWQ7YXdhaXQgcihlLG4sdC5uYW1lLGkpfWVsc2UgdC52YWx1ZSYmdSh0LGkpO3JldHVybiBpfWxldCBmOyhhc3luYyBmdW5jdGlvbigpe2NvbnN0IHQ9bmV3IGU7dC5jb25uZWN0VG9NYWluVGhyZWFkKCkscygiQ29ubmVjdGVkIHRvIG1haW4gdGhyZWFkIik7bGV0IG49ITE7dC5vbigiRGVidWdnZXIucmVzdW1lZCIsKCk9PntuPSExfSksdC5vbigiRGVidWdnZXIucGF1c2VkIixlPT57bj0hMCxhc3luYyBmdW5jdGlvbihlLHtyZWFzb246dCxkYXRhOntvYmplY3RJZDpufSxjYWxsRnJhbWVzOml9KXtpZigiZXhjZXB0aW9uIiE9PXQmJiJwcm9taXNlUmVqZWN0aW9uIiE9PXQpcmV0dXJuO2lmKGY/LigpLG51bGw9PW4pcmV0dXJuO2NvbnN0IGE9W107Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0Kyspe2NvbnN0e3Njb3BlQ2hhaW46bixmdW5jdGlvbk5hbWU6byx0aGlzOnN9PWlbdF0sYz1uLmZpbmQoZT0+ImxvY2FsIj09PWUudHlwZSkscj0iZ2xvYmFsIiE9PXMuY2xhc3NOYW1lJiZzLmNsYXNzTmFtZT9gJHtzLmNsYXNzTmFtZX0uJHtvfWA6bztpZih2b2lkIDA9PT1jPy5vYmplY3Qub2JqZWN0SWQpYVt0XT17ZnVuY3Rpb246cn07ZWxzZXtjb25zdCBuPWF3YWl0IGwoZSxjLm9iamVjdC5vYmplY3RJZCk7YVt0XT17ZnVuY3Rpb246cix2YXJzOm59fX1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuY2FsbEZ1bmN0aW9uT24iLHtmdW5jdGlvbkRlY2xhcmF0aW9uOmBmdW5jdGlvbigpIHsgdGhpcy4ke299ID0gdGhpcy4ke299IHx8ICR7SlNPTi5zdHJpbmdpZnkoYSl9OyB9YCxzaWxlbnQ6ITAsb2JqZWN0SWQ6bn0pLGF3YWl0IGUucG9zdCgiUnVudGltZS5yZWxlYXNlT2JqZWN0Iix7b2JqZWN0SWQ6bn0pfSh0LGUucGFyYW1zKS50aGVuKGFzeW5jKCk9PntuJiZhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnJlc3VtZSIpfSxhc3luYyBlPT57biYmYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5yZXN1bWUiKX0pfSksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5lbmFibGUiKTtjb25zdCBpPSExIT09YS5jYXB0dXJlQWxsRXhjZXB0aW9ucztpZihhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnNldFBhdXNlT25FeGNlcHRpb25zIix7c3RhdGU6aT8iYWxsIjoidW5jYXVnaHQifSksaSl7Y29uc3QgZT1hLm1heEV4Y2VwdGlvbnNQZXJTZWNvbmR8fDUwO2Y9ZnVuY3Rpb24oZSx0LG4pe2xldCBpPTAsbz01LGE9MDtyZXR1cm4gc2V0SW50ZXJ2YWwoKCk9PnswPT09YT9pPmUmJihvKj0yLG4obyksbz44NjQwMCYmKG89ODY0MDApLGE9byk6KGEtPTEsMD09PWEmJnQoKSksaT0wfSwxZTMpLnVucmVmKCksKCk9PntpKz0xfX0oZSxhc3luYygpPT57cygiUmF0ZS1saW1pdCBsaWZ0ZWQuIiksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJhbGwifSl9LGFzeW5jIGU9PntzKGBSYXRlLWxpbWl0IGV4Y2VlZGVkLiBEaXNhYmxpbmcgY2FwdHVyaW5nIG9mIGNhdWdodCBleGNlcHRpb25zIGZvciAke2V9IHNlY29uZHMuYCksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJ1bmNhdWdodCJ9KX0pfX0pKCkuY2F0Y2goZT0+e3MoIkZhaWxlZCB0byBzdGFydCBkZWJ1Z2dlciIsZSl9KSxzZXRJbnRlcnZhbCgoKT0+e30sMWU0KTs=";
function log(...args) {
	debug.log("[LocalVariables]", ...args);
}
var localVariablesAsyncIntegration = defineIntegration(((integrationOptions = {}) => {
	function addLocalVariablesToException(exception, localVariables) {
		const frames = (exception.stacktrace?.frames || []).filter((frame) => frame.function !== "new Promise");
		for (let i = 0; i < frames.length; i++) {
			const frameIndex = frames.length - i - 1;
			const frameLocalVariables = localVariables[i];
			const frame = frames[frameIndex];
			if (!frame || !frameLocalVariables) break;
			if (frameLocalVariables.vars === void 0 || frame.in_app === false && integrationOptions.includeOutOfAppFrames !== true || !functionNamesMatch(frame.function, frameLocalVariables.function)) continue;
			frame.vars = frameLocalVariables.vars;
		}
	}
	function addLocalVariablesToEvent(event, hint) {
		if (hint.originalException && typeof hint.originalException === "object" && "__SENTRY_ERROR_LOCAL_VARIABLES__" in hint.originalException && Array.isArray(hint.originalException["__SENTRY_ERROR_LOCAL_VARIABLES__"])) {
			for (const exception of event.exception?.values || []) addLocalVariablesToException(exception, hint.originalException[LOCAL_VARIABLES_KEY]);
			hint.originalException[LOCAL_VARIABLES_KEY] = void 0;
		}
		return event;
	}
	async function startInspector() {
		const inspector = await import("node:inspector");
		if (!inspector.url()) inspector.open(0);
	}
	function startWorker(options) {
		const worker = new Worker(new URL(`data:application/javascript;base64,${base64WorkerScript}`), {
			workerData: options,
			execArgv: [],
			env: {
				...process.env,
				NODE_OPTIONS: void 0
			}
		});
		process.on("exit", () => {
			worker.terminate();
		});
		worker.once("error", (err) => {
			log("Worker error", err);
		});
		worker.once("exit", (code) => {
			log("Worker exit", code);
		});
		worker.unref();
	}
	return {
		name: "LocalVariablesAsync",
		async setup(client) {
			if (!client.getOptions().includeLocalVariables) return;
			if (await isDebuggerEnabled()) {
				debug.warn("Local variables capture has been disabled because the debugger was already enabled");
				return;
			}
			const options = {
				...integrationOptions,
				debug: debug.isEnabled()
			};
			startInspector().then(() => {
				try {
					startWorker(options);
				} catch (e) {
					debug.error("Failed to start worker", e);
				}
			}, (e) => {
				debug.error("Failed to start inspector", e);
			});
		},
		processEvent(event, hint) {
			return addLocalVariablesToEvent(event, hint);
		}
	};
}));
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/local-variables/local-variables-sync.js
function hashFrames(frames) {
	if (frames === void 0) return;
	return frames.slice(-10).reduce((acc, frame) => `${acc},${frame.function},${frame.lineno},${frame.colno}`, "");
}
function hashFromStack(stackParser, stack) {
	if (stack === void 0) return;
	return hashFrames(stackParser(stack, 1));
}
function createCallbackList(complete) {
	let callbacks = [];
	let completedCalled = false;
	function checkedComplete(result) {
		callbacks = [];
		if (completedCalled) return;
		completedCalled = true;
		complete(result);
	}
	callbacks.push(checkedComplete);
	function add(fn) {
		callbacks.push(fn);
	}
	function next(result) {
		const popped = callbacks.pop() || checkedComplete;
		try {
			popped(result);
		} catch {
			checkedComplete(result);
		}
	}
	return {
		add,
		next
	};
}
var AsyncSession = class AsyncSession {
	/** Throws if inspector API is not available */
	constructor(_session) {
		this._session = _session;
	}
	static async create(orDefault) {
		if (orDefault) return orDefault;
		return new AsyncSession(new (await (import("node:inspector"))).Session());
	}
	/** @inheritdoc */
	configureAndConnect(onPause, captureAll) {
		this._session.connect();
		this._session.on("Debugger.paused", (event) => {
			onPause(event, () => {
				this._session.post("Debugger.resume");
			});
		});
		this._session.post("Debugger.enable");
		this._session.post("Debugger.setPauseOnExceptions", { state: captureAll ? "all" : "uncaught" });
	}
	setPauseOnExceptions(captureAll) {
		this._session.post("Debugger.setPauseOnExceptions", { state: captureAll ? "all" : "uncaught" });
	}
	/** @inheritdoc */
	getLocalVariables(objectId, complete) {
		this._getProperties(objectId, (props) => {
			const { add, next } = createCallbackList(complete);
			for (const prop of props) if (prop.value?.objectId && prop.value.className === "Array") {
				const id = prop.value.objectId;
				add((vars) => this._unrollArray(id, prop.name, vars, next));
			} else if (prop.value?.objectId && prop.value.className === "Object") {
				const id = prop.value.objectId;
				add((vars) => this._unrollObject(id, prop.name, vars, next));
			} else if (prop.value) add((vars) => this._unrollOther(prop, vars, next));
			next({});
		});
	}
	/**
	* Gets all the PropertyDescriptors of an object
	*/
	_getProperties(objectId, next) {
		this._session.post("Runtime.getProperties", {
			objectId,
			ownProperties: true
		}, (err, params) => {
			if (err) next([]);
			else next(params.result);
		});
	}
	/**
	* Unrolls an array property
	*/
	_unrollArray(objectId, name, vars, next) {
		this._getProperties(objectId, (props) => {
			vars[name] = props.filter((v) => v.name !== "length" && !isNaN(parseInt(v.name, 10))).sort((a, b) => parseInt(a.name, 10) - parseInt(b.name, 10)).map((v) => v.value?.value);
			next(vars);
		});
	}
	/**
	* Unrolls an object property
	*/
	_unrollObject(objectId, name, vars, next) {
		this._getProperties(objectId, (props) => {
			vars[name] = props.map((v) => [v.name, v.value?.value]).reduce((obj, [key, val]) => {
				obj[key] = val;
				return obj;
			}, {});
			next(vars);
		});
	}
	/**
	* Unrolls other properties
	*/
	_unrollOther(prop, vars, next) {
		if (prop.value) {
			if ("value" in prop.value) if (prop.value.value === void 0 || prop.value.value === null) vars[prop.name] = `<${prop.value.value}>`;
			else vars[prop.name] = prop.value.value;
			else if ("description" in prop.value && prop.value.type !== "function") vars[prop.name] = `<${prop.value.description}>`;
			else if (prop.value.type === "undefined") vars[prop.name] = "<undefined>";
		}
		next(vars);
	}
};
var INTEGRATION_NAME$30 = "LocalVariables";
var _localVariablesSyncIntegration = ((options = {}, sessionOverride) => {
	const cachedFrames = new LRUMap(20);
	let rateLimiter;
	let shouldProcessEvent = false;
	function addLocalVariablesToException(exception) {
		const hash = hashFrames(exception.stacktrace?.frames);
		if (hash === void 0) return;
		const cachedFrame = cachedFrames.remove(hash);
		if (cachedFrame === void 0) return;
		const frames = (exception.stacktrace?.frames || []).filter((frame) => frame.function !== "new Promise");
		for (let i = 0; i < frames.length; i++) {
			const frameIndex = frames.length - i - 1;
			const cachedFrameVariable = cachedFrame[i];
			const frameVariable = frames[frameIndex];
			if (!frameVariable || !cachedFrameVariable) break;
			if (cachedFrameVariable.vars === void 0 || frameVariable.in_app === false && options.includeOutOfAppFrames !== true || !functionNamesMatch(frameVariable.function, cachedFrameVariable.function)) continue;
			frameVariable.vars = cachedFrameVariable.vars;
		}
	}
	function addLocalVariablesToEvent(event) {
		for (const exception of event.exception?.values || []) addLocalVariablesToException(exception);
		return event;
	}
	let setupPromise;
	async function setup() {
		const clientOptions = getClient()?.getOptions();
		if (!clientOptions?.includeLocalVariables) return;
		if (NODE_MAJOR < 18) {
			debug.log("The `LocalVariables` integration is only supported on Node >= v18.");
			return;
		}
		if (await isDebuggerEnabled()) {
			debug.warn("Local variables capture has been disabled because the debugger was already enabled");
			return;
		}
		try {
			const session = await AsyncSession.create(sessionOverride);
			const handlePaused = (stackParser, { params: { reason, data, callFrames } }, complete) => {
				if (reason !== "exception" && reason !== "promiseRejection") {
					complete();
					return;
				}
				rateLimiter?.();
				const exceptionHash = hashFromStack(stackParser, data.description);
				if (exceptionHash == void 0) {
					complete();
					return;
				}
				const { add, next } = createCallbackList((frames) => {
					cachedFrames.set(exceptionHash, frames);
					complete();
				});
				for (let i = 0; i < Math.min(callFrames.length, 5); i++) {
					const { scopeChain, functionName, this: obj } = callFrames[i];
					const localScope = scopeChain.find((scope) => scope.type === "local");
					const fn = obj.className === "global" || !obj.className ? functionName : `${obj.className}.${functionName}`;
					if (localScope?.object.objectId === void 0) add((frames) => {
						frames[i] = { function: fn };
						next(frames);
					});
					else {
						const id = localScope.object.objectId;
						add((frames) => session.getLocalVariables(id, (vars) => {
							frames[i] = {
								function: fn,
								vars
							};
							next(frames);
						}));
					}
				}
				next([]);
			};
			const captureAll = options.captureAllExceptions !== false;
			session.configureAndConnect((ev, complete) => handlePaused(clientOptions.stackParser, ev, complete), captureAll);
			if (captureAll) rateLimiter = createRateLimiter(options.maxExceptionsPerSecond || 50, () => {
				debug.log("Local variables rate-limit lifted.");
				session.setPauseOnExceptions(true);
			}, (seconds) => {
				debug.log(`Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${seconds} seconds.`);
				session.setPauseOnExceptions(false);
			});
			shouldProcessEvent = true;
		} catch (error) {
			debug.log("The `LocalVariables` integration failed to start.", error);
		}
	}
	return {
		name: INTEGRATION_NAME$30,
		setupOnce() {
			setupPromise = setup();
		},
		async processEvent(event) {
			await setupPromise;
			if (shouldProcessEvent) return addLocalVariablesToEvent(event);
			return event;
		},
		_getCachedFramesCount() {
			return cachedFrames.size;
		},
		_getFirstCachedFrame() {
			return cachedFrames.values()[0];
		}
	};
});
var localVariablesSyncIntegration = defineIntegration(_localVariablesSyncIntegration);
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/local-variables/index.js
var localVariablesIntegration = (options = {}) => {
	return NODE_VERSION.major < 19 ? localVariablesSyncIntegration(options) : localVariablesAsyncIntegration(options);
};
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/modules.js
var moduleCache;
var INTEGRATION_NAME$29 = "Modules";
function getServerModules() {
	if (typeof __SENTRY_SERVER_MODULES__ !== "undefined") return __SENTRY_SERVER_MODULES__;
	return GLOBAL_OBJ.__SENTRY_SERVER_MODULES__ ?? {};
}
var _modulesIntegration = (() => {
	return {
		name: INTEGRATION_NAME$29,
		processEvent(event) {
			event.modules = {
				...event.modules,
				..._getModules()
			};
			return event;
		},
		getModules: _getModules
	};
});
var modulesIntegration = _modulesIntegration;
function collectModules() {
	return {
		...getServerModules(),
		...getModulesFromPackageJson()
	};
}
function _getModules() {
	if (!moduleCache) moduleCache = collectModules();
	return moduleCache;
}
function getPackageJson() {
	try {
		const filePath = join(process.cwd(), "package.json");
		return JSON.parse(readFileSync(filePath, "utf8"));
	} catch {
		return {};
	}
}
function getModulesFromPackageJson() {
	const packageJson = getPackageJson();
	return {
		...packageJson.dependencies,
		...packageJson.devDependencies
	};
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/node-fetch/index.js
var _nativeNodeFetchIntegration$1 = ((options = {}) => {
	return {
		name: "NodeFetch",
		setupOnce() {
			instrumentUndici(options);
		}
	};
});
var nativeNodeFetchIntegration$1 = defineIntegration(_nativeNodeFetchIntegration$1);
//#endregion
//#region node_modules/@sentry/node-core/build/esm/utils/errorhandling.js
var DEFAULT_SHUTDOWN_TIMEOUT = 2e3;
function logAndExitProcess(error) {
	consoleSandbox(() => {
		console.error(error);
	});
	const client = getClient();
	if (client === void 0) {
		DEBUG_BUILD$3 && debug.warn("No NodeClient was defined, we are exiting the process now.");
		global.process.exit(1);
		return;
	}
	const options = client.getOptions();
	const timeout = options?.shutdownTimeout && options.shutdownTimeout > 0 ? options.shutdownTimeout : DEFAULT_SHUTDOWN_TIMEOUT;
	client.close(timeout).then((result) => {
		if (!result) DEBUG_BUILD$3 && debug.warn("We reached the timeout for emptying the request buffer, still exiting now!");
		global.process.exit(1);
	}, (error2) => {
		DEBUG_BUILD$3 && debug.error(error2);
	});
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/onuncaughtexception.js
var INTEGRATION_NAME$28 = "OnUncaughtException";
var onUncaughtExceptionIntegration = defineIntegration((options = {}) => {
	const optionsWithDefaults = {
		exitEvenIfOtherHandlersAreRegistered: false,
		...options
	};
	return {
		name: INTEGRATION_NAME$28,
		setup(client) {
			if (!isMainThread) return;
			global.process.on("uncaughtException", makeErrorHandler(client, optionsWithDefaults));
		}
	};
});
function makeErrorHandler(client, options) {
	const timeout = 2e3;
	let caughtFirstError = false;
	let caughtSecondError = false;
	let calledFatalError = false;
	let firstError;
	const clientOptions = client.getOptions();
	return Object.assign((error) => {
		let onFatalError = logAndExitProcess;
		if (options.onFatalError) onFatalError = options.onFatalError;
		else if (clientOptions.onFatalError) onFatalError = clientOptions.onFatalError;
		const processWouldExit = global.process.listeners("uncaughtException").filter((listener) => {
			return listener.name !== "domainUncaughtExceptionClear" && listener._errorHandler !== true;
		}).length === 0;
		const shouldApplyFatalHandlingLogic = options.exitEvenIfOtherHandlersAreRegistered || processWouldExit;
		if (!caughtFirstError) {
			firstError = error;
			caughtFirstError = true;
			if (getClient() === client) captureException(error, {
				originalException: error,
				captureContext: { level: "fatal" },
				mechanism: {
					handled: false,
					type: "auto.node.onuncaughtexception"
				}
			});
			if (!calledFatalError && shouldApplyFatalHandlingLogic) {
				calledFatalError = true;
				onFatalError(error);
			}
		} else if (shouldApplyFatalHandlingLogic) {
			if (calledFatalError) {
				DEBUG_BUILD$3 && debug.warn("uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown");
				logAndExitProcess(error);
			} else if (!caughtSecondError) {
				caughtSecondError = true;
				setTimeout(() => {
					if (!calledFatalError) {
						calledFatalError = true;
						onFatalError(firstError, error);
					}
				}, timeout);
			}
		}
	}, { _errorHandler: true });
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/onunhandledrejection.js
var INTEGRATION_NAME$27 = "OnUnhandledRejection";
var DEFAULT_IGNORES = [{ name: "AI_NoOutputGeneratedError" }, { name: "AbortError" }];
var _onUnhandledRejectionIntegration = ((options = {}) => {
	const opts = {
		mode: options.mode ?? "warn",
		ignore: [...DEFAULT_IGNORES, ...options.ignore ?? []]
	};
	return {
		name: INTEGRATION_NAME$27,
		setup(client) {
			global.process.on("unhandledRejection", makeUnhandledPromiseHandler(client, opts));
		}
	};
});
var onUnhandledRejectionIntegration = defineIntegration(_onUnhandledRejectionIntegration);
function extractErrorInfo(reason) {
	if (!isObjectLike(reason)) return {
		name: "",
		message: String(reason ?? "")
	};
	const errorLike = reason;
	return {
		name: typeof errorLike.name === "string" ? errorLike.name : "",
		message: typeof errorLike.message === "string" ? errorLike.message : String(reason)
	};
}
function isMatchingReason(matcher, errorInfo) {
	const nameMatches = matcher.name === void 0 || isMatchingPattern(errorInfo.name, matcher.name, true);
	const messageMatches = matcher.message === void 0 || isMatchingPattern(errorInfo.message, matcher.message);
	return nameMatches && messageMatches;
}
function matchesIgnore(list, reason) {
	const errorInfo = extractErrorInfo(reason);
	return list.some((matcher) => isMatchingReason(matcher, errorInfo));
}
function makeUnhandledPromiseHandler(client, options) {
	return function sendUnhandledPromise(reason, _promise) {
		if (getClient() !== client) return;
		if (matchesIgnore(options.ignore ?? [], reason)) return;
		const level = options.mode === "strict" ? "fatal" : "error";
		const activeSpanForError = isObjectLike(reason) ? reason._sentry_active_span : void 0;
		(activeSpanForError ? (fn) => withActiveSpan$1(activeSpanForError, fn) : (fn) => fn())(() => {
			captureException(reason, {
				originalException: reason,
				captureContext: {
					extra: { unhandledPromiseRejection: true },
					level
				},
				mechanism: {
					handled: false,
					type: "auto.node.onunhandledrejection"
				}
			});
		});
		handleRejection(reason, options.mode);
	};
}
function handleRejection(reason, mode) {
	const rejectionWarning = "This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:";
	if (mode === "warn") consoleSandbox(() => {
		console.warn(rejectionWarning);
		console.error(isObjectLike(reason) && "stack" in reason ? reason.stack : reason);
	});
	else if (mode === "strict") {
		consoleSandbox(() => {
			console.warn(rejectionWarning);
		});
		logAndExitProcess(reason);
	}
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/processSession.js
var INTEGRATION_NAME$26 = "ProcessSession";
var processSessionIntegration = defineIntegration(() => {
	return {
		name: INTEGRATION_NAME$26,
		setupOnce() {
			startSession();
			process.on("beforeExit", () => {
				if (getIsolationScope().getSession()?.status !== "ok") endSession();
			});
		}
	};
});
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/spotlight.js
var INTEGRATION_NAME$25 = "Spotlight";
var _spotlightIntegration = ((options = {}) => {
	const _options = { sidecarUrl: options.sidecarUrl || "http://localhost:8969/stream" };
	return {
		name: INTEGRATION_NAME$25,
		setup(client) {
			try {
				debug.warn("[Spotlight] It seems you're not in dev mode. Do you really want to have Spotlight enabled?");
			} catch {}
			connectToSpotlight(client, _options);
		}
	};
});
var spotlightIntegration = defineIntegration(_spotlightIntegration);
function connectToSpotlight(client, options) {
	const spotlightUrl = parseSidecarUrl(options.sidecarUrl);
	if (!spotlightUrl) return;
	let failedRequests = 0;
	client.on("beforeEnvelope", (envelope) => {
		if (failedRequests > 3) {
			debug.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests");
			return;
		}
		const serializedEnvelope = serializeEnvelope(envelope);
		suppressTracing$1(() => {
			const req = http.request({
				method: "POST",
				path: spotlightUrl.pathname,
				hostname: spotlightUrl.hostname,
				port: spotlightUrl.port,
				headers: { "Content-Type": "application/x-sentry-envelope" }
			}, (res) => {
				if (res.statusCode && res.statusCode >= 200 && res.statusCode < 400) failedRequests = 0;
				res.on("data", () => {});
				res.on("end", () => {});
				res.setEncoding("utf8");
			});
			req.on("error", () => {
				failedRequests++;
				debug.warn("[Spotlight] Failed to send envelope to Spotlight Sidecar");
			});
			req.write(serializedEnvelope);
			req.end();
		});
	});
}
function parseSidecarUrl(url) {
	try {
		return new URL(`${url}`);
	} catch {
		debug.warn(`[Spotlight] Invalid sidecar URL: ${url}`);
		return;
	}
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/console.js
var consoleIntegration = defineIntegration((options = {}) => {
	return {
		name: "Console",
		setup(client) {
			if (process.env.LAMBDA_TASK_ROOT) maybeInstrument("console", instrumentConsoleLambda);
			consoleIntegration$1({
				...options,
				filter: [...options.filter || [], "[DEP0205] DeprecationWarning"]
			}).setup?.(client);
		}
	};
});
function instrumentConsoleLambda() {
	const consoleObj = GLOBAL_OBJ?.console;
	if (!consoleObj) return;
	CONSOLE_LEVELS.forEach((level) => {
		if (level in consoleObj) patchWithDefineProperty(consoleObj, level);
	});
}
function patchWithDefineProperty(consoleObj, level) {
	const nativeMethod = consoleObj[level];
	originalConsoleMethods[level] = nativeMethod;
	let delegate = nativeMethod;
	let savedDelegate;
	let isExecuting = false;
	const wrapper = function(...args) {
		if (isExecuting) {
			nativeMethod.apply(consoleObj, args);
			return;
		}
		isExecuting = true;
		try {
			triggerHandlers("console", {
				args,
				level
			});
			delegate.apply(consoleObj, args);
		} finally {
			isExecuting = false;
		}
	};
	markFunctionWrapped(wrapper, nativeMethod);
	const sandboxBypass = nativeMethod.bind(consoleObj);
	originalConsoleMethods[level] = sandboxBypass;
	try {
		let current = wrapper;
		Object.defineProperty(consoleObj, level, {
			configurable: true,
			enumerable: true,
			get() {
				return current;
			},
			set(newValue) {
				if (newValue === wrapper) {
					if (savedDelegate !== void 0) {
						delegate = savedDelegate;
						savedDelegate = void 0;
					}
					current = wrapper;
				} else if (newValue === sandboxBypass) {
					savedDelegate = delegate;
					current = sandboxBypass;
				} else if (typeof newValue === "function" && !newValue.__sentry_original__) {
					delegate = newValue;
					current = wrapper;
				} else current = newValue;
			}
		});
	} catch {
		fill(consoleObj, level, function(originalConsoleMethod) {
			originalConsoleMethods[level] = originalConsoleMethod;
			return function(...args) {
				triggerHandlers("console", {
					args,
					level
				});
				originalConsoleMethods[level]?.apply(this, args);
			};
		});
	}
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/integrations/systemError.js
var INTEGRATION_NAME$24 = "NodeSystemError";
function isSystemError(error) {
	if (!(error instanceof Error)) return false;
	if (!("errno" in error) || typeof error.errno !== "number") return false;
	if (typeof util.getSystemErrorMap !== "function") return false;
	return util.getSystemErrorMap().has(error.errno);
}
var systemErrorIntegration = defineIntegration((options = {}) => {
	return {
		name: INTEGRATION_NAME$24,
		processEvent: (event, hint, client) => {
			if (!isSystemError(hint.originalException)) return event;
			const error = hint.originalException;
			const errorContext = { ...error };
			if (!client.getDataCollectionOptions().userInfo && options.includePaths !== true) {
				delete errorContext.path;
				delete errorContext.dest;
			}
			event.contexts = {
				...event.contexts,
				node_system_error: errorContext
			};
			for (const exception of event.exception?.values || []) if (exception.value) {
				if (error.path && exception.value.includes(error.path)) exception.value = exception.value.replace(`'${error.path}'`, "").trim();
				if (error.dest && exception.value.includes(error.dest)) exception.value = exception.value.replace(`'${error.dest}'`, "").trim();
			}
			return event;
		}
	};
});
//#endregion
//#region node_modules/@sentry/node-core/build/esm/proxy/base.js
var _a;
var INTERNAL = /* @__PURE__ */ Symbol("AgentBaseInternalState");
var Agent = class extends (_a = http.Agent, _a) {
	constructor(opts) {
		super(opts);
		this[INTERNAL] = {};
	}
	/**
	* Determine whether this is an `http` or `https` request.
	*/
	isSecureEndpoint(options) {
		if (options) {
			if (typeof options.secureEndpoint === "boolean") return options.secureEndpoint;
			if (typeof options.protocol === "string") return options.protocol === "https:";
		}
		const { stack } = /* @__PURE__ */ new Error();
		if (typeof stack !== "string") return false;
		return stack.split("\n").some((l) => l.indexOf("(https.js:") !== -1 || l.indexOf("node:https:") !== -1);
	}
	createSocket(req, options, cb) {
		const connectOpts = {
			...options,
			secureEndpoint: this.isSecureEndpoint(options)
		};
		Promise.resolve().then(() => this.connect(req, connectOpts)).then((socket) => {
			if (socket instanceof http.Agent) return socket.addRequest(req, connectOpts);
			this[INTERNAL].currentSocket = socket;
			super.createSocket(req, options, cb);
		}, cb);
	}
	createConnection() {
		const socket = this[INTERNAL].currentSocket;
		this[INTERNAL].currentSocket = void 0;
		if (!socket) throw new Error("No socket was returned in the `connect()` function");
		return socket;
	}
	get defaultPort() {
		return this[INTERNAL].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
	}
	set defaultPort(v) {
		if (this[INTERNAL]) this[INTERNAL].defaultPort = v;
	}
	get protocol() {
		return this[INTERNAL].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
	}
	set protocol(v) {
		if (this[INTERNAL]) this[INTERNAL].protocol = v;
	}
};
//#endregion
//#region node_modules/@sentry/node-core/build/esm/proxy/parse-proxy-response.js
function debugLog$1(...args) {
	debug.log("[https-proxy-agent:parse-proxy-response]", ...args);
}
function parseProxyResponse(socket) {
	return new Promise((resolve, reject) => {
		let buffersLength = 0;
		const buffers = [];
		function read() {
			const b = socket.read();
			if (b) ondata(b);
			else socket.once("readable", read);
		}
		function cleanup() {
			socket.removeListener("end", onend);
			socket.removeListener("error", onerror);
			socket.removeListener("readable", read);
		}
		function onend() {
			cleanup();
			debugLog$1("onend");
			reject(/* @__PURE__ */ new Error("Proxy connection ended before receiving CONNECT response"));
		}
		function onerror(err) {
			cleanup();
			debugLog$1("onerror %o", err);
			reject(err);
		}
		function ondata(b) {
			buffers.push(b);
			buffersLength += b.length;
			const buffered = Buffer.concat(buffers, buffersLength);
			const endOfHeaders = buffered.indexOf("\r\n\r\n");
			if (endOfHeaders === -1) {
				debugLog$1("have not received end of HTTP headers yet...");
				read();
				return;
			}
			const headerParts = buffered.subarray(0, endOfHeaders).toString("ascii").split("\r\n");
			const firstLine = headerParts.shift();
			if (!firstLine) {
				socket.destroy();
				return reject(/* @__PURE__ */ new Error("No header received from proxy CONNECT response"));
			}
			const firstLineParts = firstLine.split(" ");
			const statusCode = +(firstLineParts[1] || 0);
			const statusText = firstLineParts.slice(2).join(" ");
			const headers = {};
			for (const header of headerParts) {
				if (!header) continue;
				const firstColon = header.indexOf(":");
				if (firstColon === -1) {
					socket.destroy();
					return reject(/* @__PURE__ */ new Error(`Invalid header from proxy CONNECT response: "${header}"`));
				}
				const key = header.slice(0, firstColon).toLowerCase();
				const value = header.slice(firstColon + 1).trimStart();
				const current = headers[key];
				if (typeof current === "string") headers[key] = [current, value];
				else if (Array.isArray(current)) current.push(value);
				else headers[key] = value;
			}
			debugLog$1("got proxy server response: %o %o", firstLine, headers);
			cleanup();
			resolve({
				connect: {
					statusCode,
					statusText,
					headers
				},
				buffered
			});
		}
		socket.on("error", onerror);
		socket.on("end", onend);
		read();
	});
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/proxy/index.js
function debugLog(...args) {
	debug.log("[https-proxy-agent]", ...args);
}
var HttpsProxyAgent = class extends Agent {
	constructor(proxy, opts) {
		super(opts);
		this.options = {};
		this.proxy = typeof proxy === "string" ? new URL(proxy) : proxy;
		this.proxyHeaders = opts?.headers ?? {};
		debugLog("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
		const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
		const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
		this.connectOpts = {
			ALPNProtocols: ["http/1.1"],
			...opts ? omit(opts, "headers") : null,
			host,
			port
		};
	}
	/**
	* Called when the node-core HTTP client library is creating a
	* new HTTP request.
	*/
	async connect(req, opts) {
		const { proxy } = this;
		if (!opts.host) throw new TypeError("No \"host\" provided");
		let socket;
		if (proxy.protocol === "https:") {
			debugLog("Creating `tls.Socket`: %o", this.connectOpts);
			const servername = this.connectOpts.servername || this.connectOpts.host;
			socket = tls.connect({
				...this.connectOpts,
				servername: servername && net.isIP(servername) ? void 0 : servername
			});
		} else {
			debugLog("Creating `net.Socket`: %o", this.connectOpts);
			socket = net.connect(this.connectOpts);
		}
		const headers = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
		const host = net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
		let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r
`;
		if (proxy.username || proxy.password) {
			const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
			headers["Proxy-Authorization"] = `Basic ${Buffer.from(auth).toString("base64")}`;
		}
		headers.Host = `${host}:${opts.port}`;
		if (!headers["Proxy-Connection"]) headers["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
		for (const name of Object.keys(headers)) payload += `${name}: ${headers[name]}\r
`;
		const proxyResponsePromise = parseProxyResponse(socket);
		socket.write(`${payload}\r
`);
		const { connect, buffered } = await proxyResponsePromise;
		req.emit("proxyConnect", connect);
		this.emit("proxyConnect", connect, req);
		if (connect.statusCode === 200) {
			req.once("socket", resume);
			if (opts.secureEndpoint) {
				debugLog("Upgrading socket connection to TLS");
				const servername = opts.servername || opts.host;
				return tls.connect({
					...omit(opts, "host", "path", "port"),
					socket,
					servername: net.isIP(servername) ? void 0 : servername
				});
			}
			return socket;
		}
		socket.destroy();
		const fakeSocket = new net.Socket({ writable: false });
		fakeSocket.readable = true;
		req.once("socket", (s) => {
			debugLog("Replaying proxy buffer for failed request");
			s.push(buffered);
			s.push(null);
		});
		return fakeSocket;
	}
};
HttpsProxyAgent.protocols = ["http", "https"];
function resume(socket) {
	socket.resume();
}
function omit(obj, ...keys) {
	const ret = {};
	let key;
	for (key in obj) if (!keys.includes(key)) ret[key] = obj[key];
	return ret;
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/transports/http.js
var GZIP_THRESHOLD = 1024 * 32;
function streamFromBody(body) {
	return new Readable({ read() {
		this.push(body);
		this.push(null);
	} });
}
function makeNodeTransport(options) {
	let urlSegments;
	try {
		urlSegments = new URL(options.url);
	} catch (_e) {
		consoleSandbox(() => {
			console.warn("[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.");
		});
		return createTransport(options, () => Promise.resolve({}));
	}
	const isHttps = urlSegments.protocol === "https:";
	const proxy = applyNoProxyOption(urlSegments, options.proxy || (isHttps ? process.env.https_proxy : void 0) || process.env.http_proxy);
	const nativeHttpModule = isHttps ? https : http;
	const keepAlive = options.keepAlive === void 0 ? false : options.keepAlive;
	const agent = proxy ? new HttpsProxyAgent(proxy) : new nativeHttpModule.Agent({
		keepAlive,
		maxSockets: 30,
		timeout: 2e3
	});
	return createTransport(options, createRequestExecutor(options, options.httpModule ?? nativeHttpModule, agent));
}
function applyNoProxyOption(transportUrlSegments, proxy) {
	const { no_proxy } = process.env;
	if (no_proxy?.split(",").some((exemption) => transportUrlSegments.host.endsWith(exemption) || transportUrlSegments.hostname.endsWith(exemption))) return;
	else return proxy;
}
function createRequestExecutor(options, httpModule, agent) {
	const { hostname, pathname, port, protocol, search } = new URL(options.url);
	return function makeRequest(request) {
		return new Promise((resolve, reject) => {
			suppressTracing$1(() => {
				let body = streamFromBody(request.body);
				const headers = { ...options.headers };
				if (request.body.length > GZIP_THRESHOLD) {
					headers["content-encoding"] = "gzip";
					body = body.pipe(createGzip());
				}
				const hostnameIsIPv6 = hostname.startsWith("[");
				const req = httpModule.request({
					method: "POST",
					agent,
					headers,
					hostname: hostnameIsIPv6 ? hostname.slice(1, -1) : hostname,
					path: `${pathname}${search}`,
					port,
					protocol,
					ca: options.caCerts
				}, (res) => {
					res.on("data", () => {});
					res.on("end", () => {});
					res.setEncoding("utf8");
					const retryAfterHeader = res.headers["retry-after"] ?? null;
					const rateLimitsHeader = res.headers["x-sentry-rate-limits"] ?? null;
					resolve({
						statusCode: res.statusCode,
						headers: {
							"retry-after": retryAfterHeader,
							"x-sentry-rate-limits": Array.isArray(rateLimitsHeader) ? rateLimitsHeader[0] || null : rateLimitsHeader
						}
					});
				});
				req.on("error", reject);
				body.pipe(req);
			});
		});
	};
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/utils/spotlight.js
function getSpotlightConfig(optionsSpotlight) {
	if (optionsSpotlight === false) return false;
	if (typeof optionsSpotlight === "string") return optionsSpotlight;
	const envBool = envToBool(process.env.SENTRY_SPOTLIGHT, { strict: true });
	const envUrl = envBool === null && process.env.SENTRY_SPOTLIGHT ? process.env.SENTRY_SPOTLIGHT : void 0;
	return optionsSpotlight === true ? envUrl ?? true : envBool ?? envUrl;
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/utils/module.js
function normalizeWindowsPath(path) {
	return path.replace(/^[A-Z]:/, "").replace(/\\/g, "/");
}
function createGetModuleFromFilename(basePath = process.argv[1] ? dirname(process.argv[1]) : process.cwd(), isWindows = sep === "\\") {
	const normalizedBase = isWindows ? normalizeWindowsPath(basePath) : basePath;
	return (filename) => {
		if (!filename) return;
		const normalizedFilename = isWindows ? normalizeWindowsPath(filename) : filename;
		let { dir, base: file, ext } = posix.parse(normalizedFilename);
		if (ext === ".js" || ext === ".mjs" || ext === ".cjs") file = file.slice(0, ext.length * -1);
		const decodedFile = decodeURIComponent(file);
		if (!dir) dir = ".";
		const n = dir.lastIndexOf("/node_modules");
		if (n > -1) return `${dir.slice(n + 14).replace(/\//g, ".")}:${decodedFile}`;
		if (dir.startsWith(normalizedBase)) {
			const moduleName = dir.slice(normalizedBase.length + 1).replace(/\//g, ".");
			return moduleName ? `${moduleName}:${decodedFile}` : decodedFile;
		}
		return decodedFile;
	};
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/sdk/api.js
function getSentryRelease(fallback) {
	if (process.env.SENTRY_RELEASE) return process.env.SENTRY_RELEASE;
	if (GLOBAL_OBJ.SENTRY_RELEASE?.id) return GLOBAL_OBJ.SENTRY_RELEASE.id;
	const possibleReleaseNameOfGitProvider = process.env["GITHUB_SHA"] || process.env["CI_MERGE_REQUEST_SOURCE_BRANCH_SHA"] || process.env["CI_BUILD_REF"] || process.env["CI_COMMIT_SHA"] || process.env["BITBUCKET_COMMIT"];
	const possibleReleaseNameOfCiProvidersWithSpecificEnvVar = process.env["APPVEYOR_PULL_REQUEST_HEAD_COMMIT"] || process.env["APPVEYOR_REPO_COMMIT"] || process.env["CODEBUILD_RESOLVED_SOURCE_VERSION"] || process.env["AWS_COMMIT_ID"] || process.env["BUILD_SOURCEVERSION"] || process.env["GIT_CLONE_COMMIT_HASH"] || process.env["BUDDY_EXECUTION_REVISION"] || process.env["BUILDKITE_COMMIT"] || process.env["CIRCLE_SHA1"] || process.env["CIRRUS_CHANGE_IN_REPO"] || process.env["CF_REVISION"] || process.env["CM_COMMIT"] || process.env["CF_PAGES_COMMIT_SHA"] || process.env["DRONE_COMMIT_SHA"] || process.env["FC_GIT_COMMIT_SHA"] || process.env["HEROKU_TEST_RUN_COMMIT_VERSION"] || process.env["HEROKU_BUILD_COMMIT"] || process.env["HEROKU_SLUG_COMMIT"] || process.env["RAILWAY_GIT_COMMIT_SHA"] || process.env["RENDER_GIT_COMMIT"] || process.env["SEMAPHORE_GIT_SHA"] || process.env["TRAVIS_PULL_REQUEST_SHA"] || process.env["VERCEL_GIT_COMMIT_SHA"] || process.env["VERCEL_GITHUB_COMMIT_SHA"] || process.env["VERCEL_GITLAB_COMMIT_SHA"] || process.env["VERCEL_BITBUCKET_COMMIT_SHA"] || process.env["ZEIT_GITHUB_COMMIT_SHA"] || process.env["ZEIT_GITLAB_COMMIT_SHA"] || process.env["ZEIT_BITBUCKET_COMMIT_SHA"];
	const possibleReleaseNameOfCiProvidersWithGenericEnvVar = process.env["CI_COMMIT_ID"] || process.env["SOURCE_COMMIT"] || process.env["SOURCE_VERSION"] || process.env["GIT_COMMIT"] || process.env["COMMIT_REF"] || process.env["BUILD_VCS_NUMBER"] || process.env["CI_COMMIT_SHA"];
	return possibleReleaseNameOfGitProvider || possibleReleaseNameOfCiProvidersWithSpecificEnvVar || possibleReleaseNameOfCiProvidersWithGenericEnvVar || fallback;
}
var defaultStackParser = createStackParser(nodeStackLineParser(createGetModuleFromFilename()));
//#endregion
//#region node_modules/@sentry/node-core/build/esm/sdk/client.js
var DEFAULT_CLIENT_REPORT_FLUSH_INTERVAL_MS = 6e4;
var NodeClient = class extends ServerRuntimeClient {
	constructor(options) {
		const serverName = options.includeServerName === false ? void 0 : options.serverName || global.process.env.SENTRY_NAME || os.hostname();
		const clientOptions = {
			...options,
			platform: "node",
			runtime: options.runtime || {
				name: "node",
				version: global.process.version
			},
			serverName
		};
		if (options.openTelemetryInstrumentations) registerInstrumentations({ instrumentations: options.openTelemetryInstrumentations });
		applySdkMetadata(clientOptions, "node");
		debug.log(`Initializing Sentry: process: ${process.pid}, thread: ${isMainThread ? "main" : `worker-${threadId}`}.`);
		super(clientOptions);
		if (this.getOptions().enableLogs) {
			this._logOnExitFlushListener = () => {
				_INTERNAL_flushLogsBuffer(this);
			};
			if (serverName) this.on("beforeCaptureLog", (log) => {
				log.attributes = {
					...log.attributes,
					"server.address": serverName
				};
			});
			process.on("beforeExit", this._logOnExitFlushListener);
		}
		_INTERNAL_setDeferSegmentSpanCapture(this);
	}
	/** Get the OTEL tracer. */
	get tracer() {
		if (this._tracer) return this._tracer;
		const name = "@sentry/node";
		const version = SDK_VERSION;
		const tracer = import_src.trace.getTracer(name, version);
		this._tracer = tracer;
		return tracer;
	}
	/** @inheritDoc */
	async flush(timeout) {
		await this.traceProvider?.forceFlush();
		if (this.getOptions().sendClientReports) this._flushOutcomes();
		return super.flush(timeout);
	}
	/** @inheritDoc */
	async close(timeout) {
		if (this._clientReportInterval) clearInterval(this._clientReportInterval);
		if (this._clientReportOnExitFlushListener) process.off("beforeExit", this._clientReportOnExitFlushListener);
		if (this._logOnExitFlushListener) process.off("beforeExit", this._logOnExitFlushListener);
		const allEventsSent = await super.close(timeout);
		if (this.traceProvider) await this.traceProvider.shutdown();
		return allEventsSent;
	}
	/**
	* Will start tracking client reports for this client.
	*
	* NOTICE: This method will create an interval that is periodically called and attach a `process.on('beforeExit')`
	* hook. To clean up these resources, call `.close()` when you no longer intend to use the client. Not doing so will
	* result in a memory leak.
	*/
	startClientReportTracking() {
		const clientOptions = this.getOptions();
		if (clientOptions.sendClientReports) {
			this._clientReportOnExitFlushListener = () => {
				this._flushOutcomes();
			};
			this._clientReportInterval = setInterval(() => {
				DEBUG_BUILD$3 && debug.log("Flushing client reports based on interval.");
				this._flushOutcomes();
			}, clientOptions.clientReportFlushInterval ?? DEFAULT_CLIENT_REPORT_FLUSH_INTERVAL_MS).unref();
			process.on("beforeExit", this._clientReportOnExitFlushListener);
		}
	}
	/** @inheritDoc */
	_setupIntegrations() {
		_INTERNAL_clearAiProviderSkips();
		super._setupIntegrations();
	}
	/** Custom implementation for OTEL, so we can handle scope-span linking. */
	_getTraceInfoFromScope(scope) {
		if (!scope) return [void 0, void 0];
		return getTraceContextForScope(this, scope);
	}
};
//#endregion
//#region node_modules/@sentry/node-core/build/esm/utils/detection.js
var hasWarnedAboutNodeVersion;
function supportsEsmLoaderHooks() {
	if (NODE_MAJOR >= 21 || NODE_MAJOR === 20 && NODE_MINOR >= 6 || NODE_MAJOR === 18 && NODE_MINOR >= 19) return true;
	if (!hasWarnedAboutNodeVersion) {
		hasWarnedAboutNodeVersion = true;
		consoleSandbox(() => {
			console.warn(`[Sentry] You are using Node.js v${process.versions.node} in ESM mode ("import syntax"). The Sentry Node.js SDK is not compatible with ESM in Node.js versions before 18.19.0 or before 20.6.0. Please either build your application with CommonJS ("require() syntax"), or upgrade your Node.js version.`);
		});
	}
	return false;
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/sdk/esmLoader.js
function initializeEsmLoader() {
	if (!supportsEsmLoaderHooks()) return;
	if (!GLOBAL_OBJ._sentryEsmLoaderHookRegistered) {
		GLOBAL_OBJ._sentryEsmLoaderHookRegistered = true;
		try {
			const { addHookMessagePort } = createAddHookMessageChannel();
			moduleModule.register("import-in-the-middle/hook.mjs", import.meta.url, {
				data: {
					addHookMessagePort,
					include: []
				},
				transferList: [addHookMessagePort]
			});
		} catch (error) {
			debug.warn("Failed to register 'import-in-the-middle' hook", error);
		}
	}
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/sdk/index.js
function getDefaultIntegrations$1() {
	return [
		inboundFiltersIntegration(),
		functionToStringIntegration(),
		linkedErrorsIntegration(),
		requestDataIntegration(),
		systemErrorIntegration(),
		conversationIdIntegration(),
		consoleIntegration(),
		httpIntegration$1(),
		nativeNodeFetchIntegration$1(),
		onUncaughtExceptionIntegration(),
		onUnhandledRejectionIntegration(),
		contextLinesIntegration(),
		localVariablesIntegration(),
		nodeContextIntegration(),
		childProcessIntegration(),
		processSessionIntegration(),
		modulesIntegration()
	];
}
function init$1(options = {}) {
	return _init$1(options, getDefaultIntegrations$1);
}
function _init$1(_options = {}, getDefaultIntegrationsImpl) {
	const options = getClientOptions(_options, getDefaultIntegrationsImpl);
	if (options.debug === true) if (DEBUG_BUILD$3) debug.enable();
	else consoleSandbox(() => {
		console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
	});
	if (options.registerEsmLoaderHooks !== false) initializeEsmLoader();
	setNodeOpenTelemetryContextAsyncContextStrategy(options);
	getCurrentScope().update(options.initialScope);
	if (options.spotlight && !options.integrations.some(({ name }) => name === "Spotlight")) options.integrations.push(spotlightIntegration({ sidecarUrl: typeof options.spotlight === "string" ? options.spotlight : void 0 }));
	applySdkMetadata(options, "node-core");
	const client = new NodeClient(options);
	getCurrentScope().setClient(client);
	client.init();
	debug.log(`SDK initialized from ESM`);
	client.startClientReportTracking();
	updateScopeFromEnvVariables();
	enhanceDscWithOpenTelemetryRootSpanName(client);
	setupEventContextTrace(client);
	if (process.env.VERCEL) process.on("SIGTERM", async () => {
		await client.flush(200);
	});
	return client;
}
function validateOpenTelemetrySetup() {
	if (!DEBUG_BUILD$3) return;
	const setup = openTelemetrySetupCheck();
	const required = ["SentryContextManager", "SentryPropagator"];
	const hasSentryTracerProvider = setup.includes("SentryTracerProvider");
	if (hasSpansEnabled() && !hasSentryTracerProvider) required.push("SentrySpanProcessor");
	for (const k of required) if (!setup.includes(k)) debug.error(`You have to set up the ${k}. Without this, the OpenTelemetry & Sentry integration will not work properly.`);
	if (!hasSentryTracerProvider && !setup.includes("SentrySampler")) debug.warn("You have to set up the SentrySampler. Without this, the OpenTelemetry & Sentry integration may still work, but sample rates set for the Sentry SDK will not be respected. If you use a custom sampler, make sure to use `wrapSamplingDecision`.");
}
function getClientOptions(options, getDefaultIntegrationsImpl) {
	const release = getRelease(options.release);
	const spotlight = getSpotlightConfig(options.spotlight);
	const tracesSampleRate = getTracesSampleRate(options.tracesSampleRate);
	const mergedOptions = {
		...options,
		dsn: options.dsn ?? process.env.SENTRY_DSN,
		environment: options.environment ?? process.env.SENTRY_ENVIRONMENT,
		sendClientReports: options.sendClientReports ?? true,
		transport: options.transport ?? makeNodeTransport,
		stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
		release,
		tracesSampleRate,
		spotlight,
		debug: envToBool(options.debug ?? process.env.SENTRY_DEBUG)
	};
	const integrations = options.integrations;
	const resolvedIntegrations = getIntegrationsToSetup({
		defaultIntegrations: options.defaultIntegrations ?? getDefaultIntegrationsImpl(mergedOptions),
		integrations
	});
	return {
		...mergedOptions,
		integrations: resolvedIntegrations
	};
}
function getRelease(release) {
	if (release !== void 0) return release;
	const detectedRelease = getSentryRelease();
	if (detectedRelease !== void 0) return detectedRelease;
}
function getTracesSampleRate(tracesSampleRate) {
	if (tracesSampleRate !== void 0) return tracesSampleRate;
	const sampleRateFromEnv = process.env.SENTRY_TRACES_SAMPLE_RATE;
	if (!sampleRateFromEnv) return;
	const parsed = parseFloat(sampleRateFromEnv);
	return isFinite(parsed) ? parsed : void 0;
}
function updateScopeFromEnvVariables() {
	if (envToBool(process.env.SENTRY_USE_ENVIRONMENT) !== false) {
		const sentryTraceEnv = process.env.SENTRY_TRACE;
		const baggageEnv = process.env.SENTRY_BAGGAGE;
		const propagationContext = propagationContextFromHeaders(sentryTraceEnv, baggageEnv);
		getCurrentScope().setPropagationContext(propagationContext);
	}
}
//#endregion
//#region node_modules/@sentry/node-core/build/esm/utils/addOriginToSpan.js
function addOriginToSpan(span, origin) {
	span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, origin);
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/http.js
var INTEGRATION_NAME$23 = "Http";
Object.assign(instrumentHttpOutgoingRequests, { id: `${INTEGRATION_NAME$23}.sentry` });
var httpIntegration = defineIntegration((options = {}) => {
	const spans = options.spans ?? true;
	const disableIncomingRequestSpans = options.disableIncomingRequestSpans;
	const enableServerSpans = spans && !disableIncomingRequestSpans;
	const serverOptions = {
		sessions: options.trackIncomingRequestsAsSessions,
		sessionFlushingDelayMS: options.sessionFlushingDelayMS,
		ignoreRequestBody: options.ignoreIncomingRequestBody,
		maxRequestBodySize: options.maxIncomingRequestBodySize
	};
	const serverSpansOptions = {
		ignoreIncomingRequests: options.ignoreIncomingRequests,
		ignoreStaticAssets: options.ignoreStaticAssets,
		ignoreStatusCodes: options.dropSpansForIncomingRequestStatusCodes,
		instrumentation: options.instrumentation,
		onSpanCreated: options.incomingRequestSpanHook
	};
	const server = httpServerIntegration(serverOptions);
	const serverSpans = httpServerSpansIntegration(serverSpansOptions);
	return {
		name: INTEGRATION_NAME$23,
		setup(client) {
			const clientOptions = client.getOptions();
			if (enableServerSpans && hasSpansEnabled(clientOptions)) serverSpans.setup(client);
		},
		setupOnce() {
			server.setupOnce();
			instrumentHttpOutgoingRequests({
				breadcrumbs: options.breadcrumbs,
				spans,
				propagateTraceInOutgoingRequests: options.tracePropagation ?? true,
				createSpansForOutgoingRequests: spans,
				ignoreOutgoingRequests: options.ignoreOutgoingRequests,
				outgoingRequestHook: (span, request) => {
					const url = getRequestUrlFromClientRequest(request);
					if (url.startsWith("data:")) {
						const sanitizedUrl = stripDataUrlContent(url);
						span.setAttribute("http.url", sanitizedUrl);
						span.setAttribute(SEMANTIC_ATTRIBUTE_URL_FULL, sanitizedUrl);
						span.updateName(`${request.method || "GET"} ${sanitizedUrl}`);
					}
					options.instrumentation?.requestHook?.(span, request);
				},
				outgoingResponseHook: options.instrumentation?.responseHook,
				outgoingRequestApplyCustomAttributes: options.instrumentation?.applyCustomAttributesOnSpan
			});
		},
		processEvent(event) {
			return serverSpans.processEvent(event);
		}
	};
});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/node-fetch.js
var _nativeNodeFetchIntegration = ((options = {}) => {
	return {
		name: "NodeFetch",
		setupOnce() {
			const clientOptions = getClient()?.getOptions();
			instrumentUndici({
				...options,
				spans: _shouldInstrumentSpans(options, clientOptions)
			});
		}
	};
});
var nativeNodeFetchIntegration = defineIntegration(_nativeNodeFetchIntegration);
function _shouldInstrumentSpans(options, clientOptions = {}) {
	return options.spans ?? (!clientOptions.skipOpenTelemetrySetup && hasSpansEnabled(clientOptions));
}
//#endregion
//#region node_modules/@sentry/node/build/esm/debug-build.js
var DEBUG_BUILD$1 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/@sentry/node/build/esm/utils/setHttpServerSpanRouteAttribute.js
function setHttpServerSpanRouteAttribute(route) {
	const activeSpan = getActiveSpan$1();
	if (!activeSpan) return;
	const rootSpan = getRootSpan$1(activeSpan);
	if (!rootSpan) return;
	if (spanToJSON(rootSpan).data["sentry.op"] !== "http.server") return;
	rootSpan.setAttribute("http.route", route);
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/express.js
var INTEGRATION_NAME$22 = "Express";
var SUPPORTED_VERSIONS$4 = [">=4.0.0 <6"];
var instrumentExpress = generateInstrumentOnce(INTEGRATION_NAME$22, (options) => new ExpressInstrumentation(options));
var ExpressInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super("sentry-express", SDK_VERSION, config);
	}
	init() {
		return new InstrumentationNodeModuleDefinition("express", SUPPORTED_VERSIONS$4, (express) => {
			try {
				patchExpressModule(express, () => ({
					...this.getConfig(),
					onRouteResolved(route) {
						if (route) setHttpServerSpanRouteAttribute(route);
					}
				}));
			} catch (e) {
				DEBUG_BUILD$1 && debug.error("Failed to patch express module:", e);
			}
			return express;
		}, (express) => express);
	}
};
var _expressIntegration = ((options) => {
	return {
		name: INTEGRATION_NAME$22,
		setupOnce() {
			instrumentExpress(options);
		}
	};
});
var expressIntegration = defineIntegration(_expressIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/fastify/v3/enums/AttributeNames.js
var AttributeNames$6 = /* @__PURE__ */ ((AttributeNames2) => {
	AttributeNames2["FASTIFY_NAME"] = "fastify.name";
	AttributeNames2["FASTIFY_TYPE"] = "fastify.type";
	AttributeNames2["HOOK_NAME"] = "hook.name";
	AttributeNames2["PLUGIN_NAME"] = "plugin.name";
	return AttributeNames2;
})(AttributeNames$6 || {});
var FastifyTypes = /* @__PURE__ */ ((FastifyTypes2) => {
	FastifyTypes2["MIDDLEWARE"] = "middleware";
	FastifyTypes2["REQUEST_HANDLER"] = "request_handler";
	return FastifyTypes2;
})(FastifyTypes || {});
var FastifyNames = /* @__PURE__ */ ((FastifyNames2) => {
	FastifyNames2["MIDDLEWARE"] = "middleware";
	FastifyNames2["REQUEST_HANDLER"] = "request handler";
	return FastifyNames2;
})(FastifyNames || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/fastify/v3/constants.js
var spanRequestSymbol = /* @__PURE__ */ Symbol("opentelemetry.instrumentation.fastify.request_active_span");
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/fastify/v3/utils.js
function startSpan(reply, tracer, spanName, spanAttributes = {}) {
	const span = tracer.startSpan(spanName, { attributes: spanAttributes });
	const spans = reply[spanRequestSymbol] || [];
	spans.push(span);
	Object.defineProperty(reply, spanRequestSymbol, {
		enumerable: false,
		configurable: true,
		value: spans
	});
	return span;
}
function endSpan$4(reply, err) {
	const spans = reply[spanRequestSymbol] || [];
	if (!spans.length) return;
	spans.forEach((span) => {
		if (err) {
			span.setStatus({
				code: import_src.SpanStatusCode.ERROR,
				message: err.message
			});
			span.recordException(err);
		}
		span.end();
	});
	delete reply[spanRequestSymbol];
}
function safeExecuteInTheMiddleMaybePromise(execute, onFinish, preventThrowingError) {
	let error;
	let result = void 0;
	try {
		result = execute();
		if (isPromise$1(result)) result.then((res) => onFinish(void 0, res), (err) => onFinish(err));
	} catch (e) {
		error = e;
	} finally {
		if (!isPromise$1(result)) {
			onFinish(error, result);
			if (error && true) throw error;
		}
		return result;
	}
}
function isPromise$1(val) {
	return typeof val === "object" && val && typeof Object.getOwnPropertyDescriptor(val, "then")?.value === "function" || false;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/fastify/v3/instrumentation.js
var PACKAGE_NAME$18 = "@sentry/instrumentation-fastify-v3";
var ANONYMOUS_NAME$1 = "anonymous";
var hooksNamesToWrap = /* @__PURE__ */ new Set([
	"onTimeout",
	"onRequest",
	"preParsing",
	"preValidation",
	"preSerialization",
	"preHandler",
	"onSend",
	"onResponse",
	"onError"
]);
var FastifyInstrumentationV3 = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$18, SDK_VERSION, config);
	}
	init() {
		return [new InstrumentationNodeModuleDefinition("fastify", [">=3.0.0 <3.21.0"], (moduleExports) => {
			return this._patchConstructor(moduleExports);
		})];
	}
	_hookOnRequest() {
		const instrumentation = this;
		return function onRequest(request, reply, done) {
			if (!instrumentation.isEnabled()) return done();
			instrumentation._wrap(reply, "send", instrumentation._patchSend());
			const anyRequest = request;
			const routeName = anyRequest.routeOptions ? anyRequest.routeOptions.url : request.routerPath;
			if (routeName) setHttpServerSpanRouteAttribute(routeName);
			const method = request.method || "GET";
			getIsolationScope().setTransactionName(`${method} ${routeName}`);
			done();
		};
	}
	_wrapHandler(pluginName, hookName, original, syncFunctionWithDone) {
		const instrumentation = this;
		this._diag.debug("Patching fastify route.handler function");
		return function(...args) {
			if (!instrumentation.isEnabled()) return original.apply(this, args);
			const name = original.name || pluginName || ANONYMOUS_NAME$1;
			const spanName = `${FastifyNames.MIDDLEWARE} - ${name}`;
			const reply = args[1];
			const span = startSpan(reply, instrumentation.tracer, spanName, {
				[AttributeNames$6.FASTIFY_TYPE]: FastifyTypes.MIDDLEWARE,
				[AttributeNames$6.PLUGIN_NAME]: pluginName,
				[AttributeNames$6.HOOK_NAME]: hookName
			});
			const origDone = syncFunctionWithDone && args[args.length - 1];
			if (origDone) args[args.length - 1] = function(...doneArgs) {
				endSpan$4(reply);
				origDone.apply(this, doneArgs);
			};
			return import_src.context.with(import_src.trace.setSpan(import_src.context.active(), span), () => {
				return safeExecuteInTheMiddleMaybePromise(() => {
					return original.apply(this, args);
				}, (err) => {
					if (err instanceof Error) {
						span.setStatus({
							code: import_src.SpanStatusCode.ERROR,
							message: err.message
						});
						span.recordException(err);
					}
					if (!syncFunctionWithDone) endSpan$4(reply);
				});
			});
		};
	}
	_wrapAddHook() {
		const instrumentation = this;
		this._diag.debug("Patching fastify server.addHook function");
		return function(original) {
			return function wrappedAddHook(...args) {
				const name = args[0];
				const handler = args[1];
				const pluginName = this.pluginName;
				if (!hooksNamesToWrap.has(name)) return original.apply(this, args);
				const syncFunctionWithDone = typeof args[args.length - 1] === "function" && handler.constructor.name !== "AsyncFunction";
				return original.apply(this, [name, instrumentation._wrapHandler(pluginName, name, handler, syncFunctionWithDone)]);
			};
		};
	}
	_patchConstructor(moduleExports) {
		const instrumentation = this;
		function fastify(...args) {
			const app = moduleExports.fastify.apply(this, args);
			app.addHook("onRequest", instrumentation._hookOnRequest());
			app.addHook("preHandler", instrumentation._hookPreHandler());
			instrumentClient();
			instrumentation._wrap(app, "addHook", instrumentation._wrapAddHook());
			return app;
		}
		if (moduleExports.errorCodes !== void 0) fastify.errorCodes = moduleExports.errorCodes;
		fastify.fastify = fastify;
		fastify.default = fastify;
		return fastify;
	}
	_patchSend() {
		const instrumentation = this;
		this._diag.debug("Patching fastify reply.send function");
		return function patchSend(original) {
			return function send(...args) {
				const maybeError = args[0];
				if (!instrumentation.isEnabled()) return original.apply(this, args);
				return safeExecuteInTheMiddle(() => {
					return original.apply(this, args);
				}, (err) => {
					if (!err && maybeError instanceof Error) err = maybeError;
					endSpan$4(this, err);
				});
			};
		};
	}
	_hookPreHandler() {
		const instrumentation = this;
		this._diag.debug("Patching fastify preHandler function");
		return function preHandler(request, reply, done) {
			if (!instrumentation.isEnabled()) return done();
			const anyRequest = request;
			const handler = anyRequest.routeOptions?.handler || anyRequest.context?.handler;
			const handlerName = handler?.name.startsWith("bound ") ? handler.name.substring(6) : handler?.name;
			const spanName = `${FastifyNames.REQUEST_HANDLER} - ${handlerName || this.pluginName || ANONYMOUS_NAME$1}`;
			const spanAttributes = {
				[AttributeNames$6.PLUGIN_NAME]: this.pluginName,
				[AttributeNames$6.FASTIFY_TYPE]: FastifyTypes.REQUEST_HANDLER,
				[Ts]: anyRequest.routeOptions ? anyRequest.routeOptions.url : request.routerPath
			};
			if (handlerName) spanAttributes[AttributeNames$6.FASTIFY_NAME] = handlerName;
			const span = startSpan(reply, instrumentation.tracer, spanName, spanAttributes);
			addFastifyV3SpanAttributes(span);
			const { requestHook } = instrumentation.getConfig();
			if (requestHook) safeExecuteInTheMiddle(() => requestHook(span, { request }), (e) => {
				if (e) instrumentation._diag.error("request hook failed", e);
			}, true);
			return import_src.context.with(import_src.trace.setSpan(import_src.context.active(), span), () => {
				done();
			});
		};
	}
};
function instrumentClient() {
	const client = getClient();
	if (client) client.on("spanStart", (span) => {
		addFastifyV3SpanAttributes(span);
	});
}
function addFastifyV3SpanAttributes(span) {
	const attributes = spanToJSON(span).data;
	const type = attributes["fastify.type"];
	if (attributes["sentry.op"] || !type) return;
	span.setAttributes({
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.fastify",
		[SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.fastify`
	});
	const name = attributes["fastify.name"] || attributes["plugin.name"] || attributes["hook.name"];
	if (typeof name === "string") {
		const updatedName = name.replace(/^fastify -> /, "").replace(/^@fastify\/otel -> /, "");
		span.updateName(updatedName);
	}
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/debug-build.js
var DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/tracing-channel.js
var NOOP = () => {};
function bindTracingChannelToSpan(channel, getSpan, opts) {
	const handle = bindSpanToChannelStore(channel, getSpan, opts);
	const beforeSpanEnd = opts?.beforeSpanEnd;
	const deferSpanEnd = opts?.deferSpanEnd;
	const getErrorHint = (e) => {
		if (typeof opts?.captureError === "function") return opts.captureError(e);
		return { mechanism: {
			type: "auto.diagnostic_channels.bind_span",
			handled: false
		} };
	};
	const annotateSpanError = (span, error) => {
		if (opts?.captureError) captureException(error, getErrorHint(error));
		const { message, attributes } = getErrorInfo(error);
		span.setStatus({
			code: 2,
			message
		});
		span.setAttributes(attributes);
	};
	const makeDeferredEnd = (span, data) => {
		let ended = false;
		return (error) => {
			if (ended) return;
			ended = true;
			if (error !== void 0) annotateSpanError(span, error);
			endBoundSpan(data, beforeSpanEnd);
		};
	};
	const subscribers = {
		start: NOOP,
		asyncStart: NOOP,
		end(data) {
			if ("error" in data || "result" in data) {
				const span = data._sentrySpan;
				if (span && deferSpanEnd?.({
					span,
					data,
					end: makeDeferredEnd(span, data)
				})) return;
				endBoundSpan(data, beforeSpanEnd);
			}
		},
		error(data) {
			const span = data._sentrySpan;
			if (!span) return;
			annotateSpanError(span, data.error);
		},
		asyncEnd(data) {
			const span = data._sentrySpan;
			if (span && deferSpanEnd?.({
				span,
				data,
				end: makeDeferredEnd(span, data)
			})) return;
			endBoundSpan(data, beforeSpanEnd);
		}
	};
	handle.channel.subscribe(subscribers);
	return {
		channel: handle.channel,
		unbind: () => {
			handle.channel.unsubscribe(subscribers);
			handle.unbind();
		}
	};
}
function bindSpanToChannelStore(channel, getSpan, opts) {
	const binding = getAsyncContextStrategy(getMainCarrier()).getTracingChannelBinding?.();
	if (!binding) {
		DEBUG_BUILD && debug.log("[TracingChannel] Could not access async context binding.");
		return {
			channel,
			unbind: NOOP
		};
	}
	const asyncLocalStorage = binding.asyncLocalStorage;
	channel.start.bindStore(asyncLocalStorage, (data) => {
		data._sentryCallerStore = asyncLocalStorage.getStore();
		const span = !opts?.requiresParentSpan || getActiveSpan$1() ? getSpan(data) : void 0;
		if (!span) return data._sentryCallerStore;
		data._sentrySpan = span;
		return binding.getStoreWithActiveSpan(span);
	});
	channel.asyncStart.bindStore(asyncLocalStorage, (data) => {
		return data._sentryCallerStore;
	});
	return {
		channel,
		unbind: () => {
			channel.start.unbindStore(asyncLocalStorage);
			channel.asyncStart.unbindStore(asyncLocalStorage);
		}
	};
}
function endBoundSpan(data, beforeSpanEnd) {
	const span = data._sentrySpan;
	if (!span) return;
	beforeSpanEnd?.(span, data);
	span.end();
}
function getErrorInfo(error) {
	const errorIsObject = isObjectLike(error);
	const raw = errorIsObject ? "message" in error ? error.message : void 0 : error;
	const message = raw ? String(raw) : void 0;
	const type = errorIsObject && "name" in error ? String(error.name) : "unknown";
	return {
		message,
		attributes: { [Gn]: type }
	};
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/graphql/utils.js
var ORIGINAL_DESCRIPTION_ATTRIBUTE = "original-description";
var REDACTED_LITERAL_KINDS = /* @__PURE__ */ new Set([
	"Int",
	"Float",
	"String",
	"BlockString"
]);
function renameRootSpanWithOperation(span, operationType, operationName) {
	const rootSpan = getRootSpan$1(span);
	if (rootSpan === span) return;
	const rootSpanJson = spanToJSON(rootSpan);
	const newOperation = operationName ? `${operationType} ${operationName}` : operationType;
	const existingOperations = rootSpanJson.data[tc];
	let operations;
	if (Array.isArray(existingOperations)) operations = [...existingOperations, newOperation];
	else if (typeof existingOperations === "string") operations = [existingOperations, newOperation];
	else operations = newOperation;
	rootSpan.setAttribute(tc, operations);
	const originalDescription = rootSpanJson.data[ORIGINAL_DESCRIPTION_ATTRIBUTE] ?? rootSpanJson.description;
	if (!rootSpanJson.data[ORIGINAL_DESCRIPTION_ATTRIBUTE]) rootSpan.setAttribute(ORIGINAL_DESCRIPTION_ATTRIBUTE, originalDescription);
	rootSpan.updateName(`${originalDescription} (${getGraphqlOperationNamesFromAttribute$1(operations)})`);
}
function getGraphqlOperationNamesFromAttribute$1(attr) {
	if (Array.isArray(attr)) {
		const sorted = attr.slice().sort();
		if (sorted.length <= 5) return sorted.join(", ");
		return `${sorted.slice(0, 5).join(", ")}, +${sorted.length - 5}`;
	}
	return attr;
}
function getOperationSpanName(operationType, operationName, fallbackName) {
	if (operationType && operationName) return `${operationType} ${operationName}`;
	if (operationType) return operationType;
	return fallbackName;
}
function hasResultErrors(result) {
	if (isObjectLike(result) && "errors" in result) {
		const errors = result.errors;
		return Array.isArray(errors) && errors.length > 0;
	}
	return false;
}
function redactGraphqlDocument(document) {
	const loc = document?.loc;
	const body = loc?.source?.body;
	if (typeof body !== "string" || !loc?.startToken) return;
	try {
		const ranges = [];
		for (let token = loc.startToken; token; token = token.next) if (REDACTED_LITERAL_KINDS.has(token.kind)) ranges.push({
			start: token.start,
			end: token.end,
			kind: token.kind
		});
		let out = body;
		for (let i = ranges.length - 1; i >= 0; i--) {
			const { start, end, kind } = ranges[i];
			const replacement = kind === "String" || kind === "BlockString" ? "\"*\"" : "*";
			out = out.slice(0, start) + replacement + out.slice(end);
		}
		return out;
	} catch {
		return;
	}
}
function collectGraphqlDocument(document) {
	if (getClient()?.getDataCollectionOptions().graphQL.document !== true) return;
	return redactGraphqlDocument(document);
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/graphql/graphql-dc-subscriber.js
var GRAPHQL_DC_CHANNEL_PARSE = "graphql:parse";
var GRAPHQL_DC_CHANNEL_VALIDATE = "graphql:validate";
var GRAPHQL_DC_CHANNEL_EXECUTE = "graphql:execute";
var GRAPHQL_DC_CHANNEL_SUBSCRIBE = "graphql:subscribe";
var GRAPHQL_DC_CHANNEL_RESOLVE = "graphql:resolve";
var ORIGIN$13 = "auto.graphql.diagnostic_channel";
var SPAN_NAME_PARSE = "graphql.parse";
var SPAN_NAME_VALIDATE = "graphql.validate";
var SPAN_NAME_EXECUTE = "graphql.execute";
var SPAN_NAME_SUBSCRIBE = "graphql.subscribe";
var SPAN_NAME_RESOLVE = "graphql.resolve";
var GRAPHQL_FIELD_NAME = "graphql.field.name";
var GRAPHQL_FIELD_PATH = "graphql.field.path";
var GRAPHQL_FIELD_TYPE = "graphql.field.type";
var GRAPHQL_PARENT_NAME = "graphql.parent.name";
function subscribeGraphqlDiagnosticChannels(tracingChannel, options = {}) {
	const ignoreResolveSpans = options.ignoreResolveSpans !== false;
	const ignoreTrivialResolveSpans = options.ignoreTrivialResolveSpans !== false;
	const useOperationNameForRootSpan = options.useOperationNameForRootSpan !== false;
	setupParseChannel(tracingChannel);
	setupValidateChannel(tracingChannel);
	setupOperationChannel(tracingChannel, GRAPHQL_DC_CHANNEL_EXECUTE, SPAN_NAME_EXECUTE, useOperationNameForRootSpan);
	setupOperationChannel(tracingChannel, GRAPHQL_DC_CHANNEL_SUBSCRIBE, SPAN_NAME_SUBSCRIBE, useOperationNameForRootSpan);
	if (!ignoreResolveSpans) setupResolveChannel(tracingChannel, ignoreTrivialResolveSpans);
}
function setupParseChannel(tracingChannel) {
	bindTracingChannelToSpan(tracingChannel(GRAPHQL_DC_CHANNEL_PARSE), () => startInactiveSpan$1({
		name: SPAN_NAME_PARSE,
		attributes: {
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$13,
			[SEMANTIC_ATTRIBUTE_SENTRY_OP]: i_
		}
	}));
}
function setupValidateChannel(tracingChannel) {
	bindTracingChannelToSpan(tracingChannel(GRAPHQL_DC_CHANNEL_VALIDATE), (data) => {
		return startInactiveSpan$1({
			name: SPAN_NAME_VALIDATE,
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$13,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: i_,
				[qa]: collectGraphqlDocument(data.document)
			}
		});
	}, { beforeSpanEnd: (span, data) => {
		if (Array.isArray(data.result) && data.result.length > 0) span.setStatus({
			code: 2,
			message: "invalid_argument"
		});
	} });
}
function setupOperationChannel(tracingChannel, channelName, fallbackName, useOperationNameForRootSpan) {
	bindTracingChannelToSpan(tracingChannel(channelName), (data) => {
		const span = startInactiveSpan$1({
			name: getOperationSpanName(data.operationType, data.operationName, fallbackName),
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$13,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: i_,
				[Ya]: data.operationType,
				[Ga]: data.operationName || void 0,
				[qa]: collectGraphqlDocument(data.document)
			}
		});
		if (useOperationNameForRootSpan && data.operationType) renameRootSpanWithOperation(span, data.operationType, data.operationName);
		return span;
	}, { beforeSpanEnd: (span, data) => {
		if (hasResultErrors(data.result)) span.setStatus({
			code: 2,
			message: "internal_error"
		});
	} });
}
function setupResolveChannel(tracingChannel, ignoreTrivialResolveSpans) {
	bindTracingChannelToSpan(tracingChannel(GRAPHQL_DC_CHANNEL_RESOLVE), (data) => {
		if (ignoreTrivialResolveSpans && data.isDefaultResolver) return;
		return startInactiveSpan$1({
			name: `${SPAN_NAME_RESOLVE} ${data.fieldPath}`,
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$13,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: i_,
				[GRAPHQL_FIELD_NAME]: data.fieldName,
				[GRAPHQL_FIELD_PATH]: data.fieldPath,
				[GRAPHQL_FIELD_TYPE]: data.fieldType,
				[GRAPHQL_PARENT_NAME]: data.parentType
			}
		});
	});
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/graphql/index.js
var _graphqlIntegration$1 = ((options = {}) => {
	return {
		name: "Graphql",
		setupOnce() {
			if (!diagnosticsChannel.tracingChannel) return;
			waitForTracingChannelBinding(() => {
				subscribeGraphqlDiagnosticChannels(diagnosticsChannel.tracingChannel, options);
			});
		}
	};
});
var graphqlIntegration$1 = defineIntegration(_graphqlIntegration$1);
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/mongoose/mongoose-dc-subscriber.js
var MONGOOSE_DC_CHANNEL_QUERY = "mongoose:query";
var MONGOOSE_DC_CHANNEL_AGGREGATE = "mongoose:aggregate";
var MONGOOSE_DC_CHANNEL_MODEL_SAVE = "mongoose:model:save";
var MONGOOSE_DC_CHANNEL_MODEL_INSERT_MANY = "mongoose:model:insertMany";
var MONGOOSE_DC_CHANNEL_MODEL_BULK_WRITE = "mongoose:model:bulkWrite";
var MONGOOSE_DC_CHANNEL_CURSOR_NEXT = "mongoose:cursor:next";
var ORIGIN$12 = "auto.db.mongoose.diagnostic_channel";
var DB_SYSTEM_NAME_VALUE_MONGODB = "mongodb";
var MAX_REDACTION_DEPTH = 10;
var subscribed = false;
function subscribeMongooseDiagnosticChannels(tracingChannel) {
	if (subscribed) return;
	subscribed = true;
	try {
		setupChannel(tracingChannel, MONGOOSE_DC_CHANNEL_QUERY);
		setupChannel(tracingChannel, MONGOOSE_DC_CHANNEL_AGGREGATE);
		setupChannel(tracingChannel, MONGOOSE_DC_CHANNEL_MODEL_SAVE);
		setupChannel(tracingChannel, MONGOOSE_DC_CHANNEL_MODEL_INSERT_MANY);
		setupChannel(tracingChannel, MONGOOSE_DC_CHANNEL_MODEL_BULK_WRITE);
		setupChannel(tracingChannel, MONGOOSE_DC_CHANNEL_CURSOR_NEXT);
	} catch {
		DEBUG_BUILD && debug.log("Mongoose node:diagnostics_channel subscription failed.");
	}
}
function setupChannel(tracingChannel, channelName) {
	bindTracingChannelToSpan(tracingChannel(channelName), (data) => {
		const collection = data.collection;
		const queryText = redactMongoQuery(data.args?.pipeline ?? data.args?.filter);
		const batchSize = getBatchSize(data);
		return startInactiveSpan$1({
			name: collection ? `mongoose.${collection}.${data.operation}` : `mongoose.${data.operation}`,
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$12,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
				[jt]: DB_SYSTEM_NAME_VALUE_MONGODB,
				[Lt]: data.operation,
				[wt]: collection ?? void 0,
				[Ct]: data.database ?? void 0,
				[Gt]: queryText ?? void 0,
				[Dt]: batchSize ?? void 0,
				[au]: data.serverAddress ?? void 0,
				[ou]: data.serverPort ?? void 0
			}
		});
	});
}
function getBatchSize(data) {
	const args = data.args;
	const batch = data.operation === "insertMany" ? args?.docs : data.operation === "bulkWrite" ? args?.ops : void 0;
	return Array.isArray(batch) && batch.length > 1 ? batch.length : void 0;
}
function redactMongoQuery(value) {
	if (value == null) return;
	try {
		const redacted = redactValue(value, 0);
		const text = JSON.stringify(redacted);
		return text == null || text === "{}" || text === "[]" ? void 0 : text;
	} catch {
		return;
	}
}
function redactValue(value, depth) {
	if (depth > MAX_REDACTION_DEPTH) return "?";
	if (Array.isArray(value)) return value.map((item) => redactValue(item, depth + 1));
	if (isObjectLike(value)) {
		const out = {};
		for (const key of Object.keys(value)) out[key] = redactValue(value[key], depth + 1);
		return out;
	}
	return "?";
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/mongoose/index.js
var _mongooseIntegration$1 = (() => {
	return {
		name: "Mongoose",
		setupOnce() {
			if (!diagnosticsChannel.tracingChannel) return;
			waitForTracingChannelBinding(() => {
				subscribeMongooseDiagnosticChannels(diagnosticsChannel.tracingChannel);
			});
		}
	};
});
var mongooseIntegration$1 = defineIntegration(_mongooseIntegration$1);
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/mysql2/mysql2-dc-subscriber.js
var MYSQL2_DC_CHANNEL_QUERY = "mysql2:query";
var MYSQL2_DC_CHANNEL_EXECUTE = "mysql2:execute";
var MYSQL2_DC_CHANNEL_CONNECT = "mysql2:connect";
var MYSQL2_DC_CHANNEL_POOL_CONNECT = "mysql2:pool:connect";
var ORIGIN$11 = "auto.db.mysql2.diagnostic_channel";
var DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
var SQL_OPERATION_RE = /^\s*(\w+)/;
function subscribeMysql2DiagnosticChannels(tracingChannel) {
	setupQueryChannel(tracingChannel, MYSQL2_DC_CHANNEL_QUERY);
	setupQueryChannel(tracingChannel, MYSQL2_DC_CHANNEL_EXECUTE);
	setupConnectChannel$1(tracingChannel, MYSQL2_DC_CHANNEL_CONNECT, "mysql2.connect");
	setupConnectChannel$1(tracingChannel, MYSQL2_DC_CHANNEL_POOL_CONNECT, "mysql2.pool.connect");
}
function setupQueryChannel(tracingChannel, channelName) {
	bindTracingChannelToSpan(tracingChannel(channelName), (data) => {
		const queryText = data.query ? _sanitizeSqlQuery(data.query) : void 0;
		const operation = queryText?.match(SQL_OPERATION_RE)?.[1]?.toUpperCase();
		return startInactiveSpan$1({
			name: queryText || "mysql2.query",
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$11,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
				[jt]: DB_SYSTEM_NAME_VALUE_MYSQL,
				[Gt]: queryText,
				[Lt]: operation,
				[Ct]: data.database || void 0,
				[au]: data.serverAddress,
				[ou]: data.serverPort
			}
		});
	}, { requiresParentSpan: true });
}
function setupConnectChannel$1(tracingChannel, channelName, spanName) {
	bindTracingChannelToSpan(tracingChannel(channelName), (data) => {
		return startInactiveSpan$1({
			name: spanName,
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$11,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
				[jt]: DB_SYSTEM_NAME_VALUE_MYSQL,
				[Ct]: data.database || void 0,
				[au]: data.serverAddress,
				[ou]: data.serverPort
			}
		});
	}, { requiresParentSpan: true });
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/mysql2/index.js
var _mysql2Integration$1 = (() => {
	return {
		name: "Mysql2",
		setupOnce() {
			if (!diagnosticsChannel.tracingChannel) return;
			waitForTracingChannelBinding(() => {
				subscribeMysql2DiagnosticChannels(diagnosticsChannel.tracingChannel);
			});
		}
	};
});
var mysql2Integration$1 = defineIntegration(_mysql2Integration$1);
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/prisma/global.js
var majorVersion = "7";
var GLOBAL_INSTRUMENTATION_KEY = "PRISMA_INSTRUMENTATION";
var GLOBAL_VERSIONED_INSTRUMENTATION_KEY = `V${majorVersion}_PRISMA_INSTRUMENTATION`;
var globalThisWithPrismaInstrumentation = globalThis;
function setGlobalTracingHelper(helper) {
	const globalValue = { helper };
	globalThisWithPrismaInstrumentation[GLOBAL_VERSIONED_INSTRUMENTATION_KEY] = globalValue;
	globalThisWithPrismaInstrumentation[GLOBAL_INSTRUMENTATION_KEY] = globalValue;
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/prisma/tracing-helper.js
var showAllTraces = (() => {
	try {
		return process.env.PRISMA_SHOW_ALL_TRACES === "true";
	} catch {
		return false;
	}
})();
var nonSampledTraceParent = `00-10-10-00`;
var PRISMA_ORIGIN = "auto.db.otel.prisma";
var MAX_TRACKED_PRISMA_SPANS = 1e3;
var prismaSpanRegistry = new LRUMap(MAX_TRACKED_PRISMA_SPANS);
var pendingEngineSpans = [];
function registerPrismaSpan(id, span) {
	prismaSpanRegistry.set(id, span);
}
function buildSpanAttributes(name, attributes) {
	const merged = {
		...attributes,
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: PRISMA_ORIGIN
	};
	if (name === "prisma:engine:db_query" && merged["db.system"] == null) merged[Kt] = "prisma";
	return merged;
}
function buildSpanName(name, attributes) {
	const queryText = attributes["db.query.text"];
	if ((name === "prisma:engine:db_query" || name === "prisma:client:db_query") && typeof queryText === "string") return queryText;
	return name;
}
function createResolvedEngineSpans() {
	let createdSpan = true;
	while (createdSpan) {
		createdSpan = false;
		for (let i = pendingEngineSpans.length - 1; i >= 0; i--) {
			const engineSpan = pendingEngineSpans[i];
			const parentSpan = prismaSpanRegistry.get(engineSpan.parent_span_id);
			if (!parentSpan) continue;
			const attributes = buildSpanAttributes(engineSpan.name, engineSpan.attributes);
			const span = startInactiveSpan$1({
				name: buildSpanName(engineSpan.name, attributes),
				attributes,
				kind: engineSpan.kind === "client" ? SPAN_KIND.CLIENT : SPAN_KIND.INTERNAL,
				startTime: engineSpan.start_time,
				parentSpan
			});
			registerPrismaSpan(engineSpan.span_id, span);
			if (engineSpan.links) span.addLinks(engineSpan.links.flatMap((link) => {
				const linkedSpan = prismaSpanRegistry.get(link.span_id);
				return linkedSpan ? [{ context: linkedSpan.spanContext() }] : [];
			}));
			span.end(engineSpan.end_time);
			pendingEngineSpans.splice(i, 1);
			createdSpan = true;
		}
	}
}
var ActiveTracingHelper = class {
	constructor({ ignoreSpanTypes }) {
		this.ignoreSpanTypes = ignoreSpanTypes;
	}
	isEnabled() {
		return true;
	}
	getTraceParent(span) {
		const spanContext = (span ?? getActiveSpan$1())?.spanContext();
		if (spanContext) return `00-${spanContext.traceId}-${spanContext.spanId}-0${spanContext.traceFlags}`;
		return nonSampledTraceParent;
	}
	dispatchEngineSpans(spans) {
		const linkIds = /* @__PURE__ */ new Map();
		const roots = spans.filter((span) => span.parentId === null);
		for (const root of roots) dispatchEngineSpan(root, spans, linkIds, this.ignoreSpanTypes);
	}
	/**
	* Prisma v5 broke the tracing helper interface with the v6 major, replacing `createEngineSpan` with
	* `dispatchEngineSpans`. We implement the v6/v7 interface (`dispatchEngineSpans`) but also keep this
	* v5-only method so the same helper doesn't blow up in Prisma 5 users' faces, minting v5 engine spans
	* through Sentry's span APIs instead of crashing.
	*/
	createEngineSpan(engineSpanEvent) {
		pendingEngineSpans.push(...engineSpanEvent.spans);
		createResolvedEngineSpans();
		const overflow = pendingEngineSpans.length - MAX_TRACKED_PRISMA_SPANS;
		if (overflow > 0) {
			DEBUG_BUILD && debug.log(`[Prisma] Dropping ${overflow} unresolved v5 engine span(s) whose parent was never registered.`);
			pendingEngineSpans.splice(0, overflow);
		}
	}
	getActiveContext() {
		return getActiveSpan$1();
	}
	runInChildSpan(nameOrOptions, callback) {
		const options = typeof nameOrOptions === "string" ? { name: nameOrOptions } : nameOrOptions;
		if (options.internal && !showAllTraces) return callback();
		const name = `prisma:client:${options.name}`;
		if (shouldIgnoreSpan(name, this.ignoreSpanTypes)) return callback();
		const parentSpan = getActiveSpan$1();
		const attributes = buildSpanAttributes(name, options.attributes);
		const spanOptions = {
			name: buildSpanName(name, attributes),
			attributes,
			kind: options.kind,
			links: options.links,
			startTime: options.startTime,
			parentSpan
		};
		if (options.active === false) {
			const span = startInactiveSpan$1(spanOptions);
			registerPrismaSpan(span.spanContext().spanId, span);
			return endSpan$3(span, () => callback(span, parentSpan));
		}
		return startSpanManual$1(spanOptions, (span) => {
			registerPrismaSpan(span.spanContext().spanId, span);
			return endSpan$3(span, () => callback(span, parentSpan));
		});
	}
};
function dispatchEngineSpan(engineSpan, allSpans, linkIds, ignoreSpanTypes) {
	if (shouldIgnoreSpan(engineSpan.name, ignoreSpanTypes)) return;
	const attributes = buildSpanAttributes(engineSpan.name, engineSpan.attributes);
	startSpanManual$1({
		name: buildSpanName(engineSpan.name, attributes),
		attributes,
		kind: engineSpan.kind === "client" ? SPAN_KIND.CLIENT : SPAN_KIND.INTERNAL,
		startTime: engineSpan.startTime
	}, (span) => {
		linkIds.set(engineSpan.id, span.spanContext().spanId);
		if (engineSpan.links) span.addLinks(engineSpan.links.flatMap((link) => {
			const linkedId = linkIds.get(link);
			if (!linkedId) return [];
			return { context: {
				spanId: linkedId,
				traceId: span.spanContext().traceId,
				traceFlags: span.spanContext().traceFlags
			} };
		}));
		const children = allSpans.filter((s) => s.parentId === engineSpan.id);
		for (const child of children) dispatchEngineSpan(child, allSpans, linkIds, ignoreSpanTypes);
		span.end(engineSpan.endTime);
	});
}
function endSpan$3(span, run) {
	let result;
	try {
		result = run();
	} catch (reason) {
		span.end();
		throw reason;
	}
	if (isPromiseLike(result)) return result.then((value) => {
		span.end();
		return value;
	}, (reason) => {
		span.end();
		throw reason;
	});
	span.end();
	return result;
}
function isPromiseLike(value) {
	return value != null && typeof value["then"] === "function";
}
function shouldIgnoreSpan(spanName, ignoreSpanTypes) {
	return ignoreSpanTypes.some((pattern) => typeof pattern === "string" ? pattern === spanName : pattern.test(spanName));
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/prisma/index.js
var INTEGRATION_NAME$21 = "Prisma";
function instrumentPrisma(options) {
	setGlobalTracingHelper(new ActiveTracingHelper({ ignoreSpanTypes: options?.instrumentationConfig?.ignoreSpanTypes ?? [] }));
}
var _prismaIntegration = ((options) => {
	return {
		name: INTEGRATION_NAME$21,
		setupOnce() {
			instrumentPrisma(options);
		}
	};
});
var prismaIntegration = defineIntegration(_prismaIntegration);
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/redis/redis-dc-subscriber.js
var REDIS_DC_CHANNEL_COMMAND = "node-redis:command";
var REDIS_DC_CHANNEL_BATCH = "node-redis:batch";
var REDIS_DC_CHANNEL_CONNECT = "node-redis:connect";
var IOREDIS_DC_CHANNEL_COMMAND = "ioredis:command";
var IOREDIS_DC_CHANNEL_CONNECT = "ioredis:connect";
var ORIGIN$10 = "auto.db.redis.diagnostic_channel";
var DB_SYSTEM_NAME_VALUE_REDIS = "redis";
function subscribeRedisDiagnosticChannels(tracingChannel, responseHook) {
	setupCommandChannel(tracingChannel, REDIS_DC_CHANNEL_COMMAND, (data) => data.args.slice(1), responseHook);
	setupBatchChannel(tracingChannel, REDIS_DC_CHANNEL_BATCH, (data) => data.batchMode === "PIPELINE" ? "PIPELINE" : "MULTI");
	setupConnectChannel(tracingChannel, REDIS_DC_CHANNEL_CONNECT);
	setupCommandChannel(tracingChannel, IOREDIS_DC_CHANNEL_COMMAND, (data) => data.args, responseHook);
	setupConnectChannel(tracingChannel, IOREDIS_DC_CHANNEL_CONNECT);
}
function setupCommandChannel(tracingChannel, channelName, getCommandArgs, responseHook) {
	bindTracingChannelToSpan(tracingChannel(channelName), (data) => {
		const args = getCommandArgs(data);
		const statement = args.length ? `${data.command} ${args.join(" ")}` : data.command;
		return startInactiveSpan$1({
			name: `redis-${data.command}`,
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$10,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
				[jt]: DB_SYSTEM_NAME_VALUE_REDIS,
				[Gt]: statement,
				...data.serverAddress != null ? { [au]: data.serverAddress } : {},
				...data.serverPort != null ? { [ou]: data.serverPort } : {}
			}
		});
	}, {
		captureError: false,
		beforeSpanEnd(span, data) {
			if ("error" in data) return;
			runResponseHook$1(responseHook, span, data.command, getCommandArgs(data), data.result);
		}
	});
}
function setupBatchChannel(tracingChannel, channelName, getOperationName) {
	bindTracingChannelToSpan(tracingChannel(channelName), (data) => {
		return startInactiveSpan$1({
			name: getOperationName(data),
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$10,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
				[jt]: DB_SYSTEM_NAME_VALUE_REDIS,
				...Number(data.batchSize) > 1 ? { [Dt]: data.batchSize } : {},
				...data.serverAddress != null ? { [au]: data.serverAddress } : {},
				...data.serverPort != null ? { [ou]: data.serverPort } : {}
			}
		});
	}, { captureError: false });
}
function setupConnectChannel(tracingChannel, channelName) {
	bindTracingChannelToSpan(tracingChannel(channelName), (data) => {
		return startInactiveSpan$1({
			name: "redis-connect",
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$10,
				[SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis.connect",
				[jt]: DB_SYSTEM_NAME_VALUE_REDIS,
				...data.serverAddress != null ? { [au]: data.serverAddress } : {},
				...data.serverPort != null ? { [ou]: data.serverPort } : {}
			}
		});
	}, { captureError: false });
}
function runResponseHook$1(hook, span, command, args, result) {
	if (!hook) return;
	try {
		hook(span, command, args, result);
	} catch {}
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/redis/index.js
var _redisIntegration$1 = ((options = {}) => {
	return {
		name: "Redis",
		setupOnce() {
			if (!diagnosticsChannel.tracingChannel) return;
			waitForTracingChannelBinding(() => {
				subscribeRedisDiagnosticChannels(diagnosticsChannel.tracingChannel, options.responseHook);
			});
		}
	};
});
var redisIntegration$1 = defineIntegration(_redisIntegration$1);
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/redis/redis-statement-serializer.js
var serializationSubsets = [
	{
		regex: /^ECHO/i,
		args: 0
	},
	{
		regex: /^(LPUSH|MSET|PFA|PUBLISH|RPUSH|SADD|SET|SPUBLISH|XADD|ZADD)/i,
		args: 1
	},
	{
		regex: /^(HSET|HMSET|LSET|LINSERT)/i,
		args: 2
	},
	{
		regex: /^(ACL|BIT|B[LRZ]|CLIENT|CLUSTER|CONFIG|COMMAND|DECR|DEL|EVAL|EX|FUNCTION|GEO|GET|HINCR|HMGET|HSCAN|INCR|L[TRLM]|MEMORY|P[EFISTU]|RPOP|S[CDIMORSU]|XACK|X[CDGILPRT]|Z[CDILMPRS])/i,
		args: -1
	}
];
var defaultDbStatementSerializer = (cmdName, cmdArgs) => {
	if (Array.isArray(cmdArgs) && cmdArgs.length) {
		const nArgsToSerialize = serializationSubsets.find(({ regex }) => regex.test(cmdName))?.args ?? 0;
		const argsToSerialize = nArgsToSerialize >= 0 ? cmdArgs.slice(0, nArgsToSerialize) : cmdArgs.slice();
		if (cmdArgs.length > argsToSerialize.length) argsToSerialize.push(`[${cmdArgs.length - nArgsToSerialize} other arguments]`);
		return `${cmdName} ${argsToSerialize.join(" ")}`;
	}
	return cmdName;
};
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/vercel-ai/util.js
function asString(value) {
	return typeof value === "string" ? value : void 0;
}
function asNumber(value) {
	return typeof value === "number" && !isNaN(value) ? value : void 0;
}
function sum(a, b) {
	return a === void 0 && b === void 0 ? void 0 : (a ?? 0) + (b ?? 0);
}
function isReadableStream(value) {
	return isObjectLike(value) && typeof value.pipeThrough === "function" && typeof value.getReader === "function";
}
function tapModelCallStream(stream, onFinal, onError) {
	const reader = stream.getReader();
	const state = { toolCalls: [] };
	let text = "";
	let settled = false;
	const finalize = () => {
		if (settled) return;
		settled = true;
		if (text) state.text = text;
		onFinal(state);
	};
	const fail = (error) => {
		if (settled) return;
		settled = true;
		onError(error);
	};
	return new ReadableStream({
		async pull(controller) {
			try {
				const { done, value } = await reader.read();
				if (done) {
					finalize();
					controller.close();
					return;
				}
				text += accumulateChunk(state, value) ?? "";
				controller.enqueue(value);
			} catch (error) {
				fail(error);
				controller.error(error);
			}
		},
		cancel(reason) {
			finalize();
			return reader.cancel(reason);
		}
	});
}
function accumulateChunk(state, chunk) {
	if (!isObjectLike(chunk)) return;
	const { type, delta, textDelta, id, modelId, toolCallId, toolName, input, args, finishReason, usage, providerMetadata } = chunk;
	switch (type) {
		case "text-delta": {
			const textChunk = delta ?? textDelta;
			return typeof textChunk === "string" ? textChunk : void 0;
		}
		case "tool-call":
			state.toolCalls.push({
				toolCallId,
				toolName,
				input: input ?? args
			});
			return;
		case "response-metadata":
			if (typeof id === "string") state.responseId = id;
			if (typeof modelId === "string") state.responseModel = modelId;
			return;
		case "finish":
			state.finishReason = finishReason;
			state.usage = usage;
			if (providerMetadata !== void 0) state.providerMetadata = providerMetadata;
			return;
		default: return;
	}
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/vercel-ai/vercel-ai-dc-subscriber.js
var AI_SDK_TELEMETRY_TRACING_CHANNEL = "ai:telemetry";
var ORIGIN$9 = "auto.vercelai.channel";
var GEN_AI_TOOL_CALL_ID_ATTRIBUTE = "gen_ai.tool.call.id";
var GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE = "gen_ai.tool.description";
var GEN_AI_EMBEDDINGS_OPERATION = "embeddings";
var GEN_AI_RERANK_OPERATION = "rerank";
var GEN_AI_GENERATE_CONTENT_OPERATION = "generate_content";
var VERCEL_AI_OPERATION_ID_ATTRIBUTE = "vercel.ai.operationId";
var VERCEL_AI_MODEL_PROVIDER_ATTRIBUTE = "vercel.ai.model.provider";
var VERCEL_AI_SETTINGS_MAX_RETRIES_ATTRIBUTE = "vercel.ai.settings.maxRetries";
var operationIdByCallId = /* @__PURE__ */ new Map();
var toolDescriptionsByCallId = /* @__PURE__ */ new Map();
var invokeAgentSpanByCallId = /* @__PURE__ */ new Map();
var ROOT_OPERATION_TYPES = /* @__PURE__ */ new Set([
	"generateText",
	"streamText",
	"generateObject",
	"embed",
	"embedMany",
	"rerank"
]);
function clearOperationId(data) {
	if (!ROOT_OPERATION_TYPES.has(data.type)) return;
	const callId = asString(data.event.callId);
	if (callId) clearOperationCallId(callId);
}
function clearOperationCallId(callId) {
	operationIdByCallId.delete(callId);
	toolDescriptionsByCallId.delete(callId);
	invokeAgentSpanByCallId.delete(callId);
}
function recordToolDescriptions(callId, tools) {
	if (!callId || !Array.isArray(tools)) return;
	let descriptions = toolDescriptionsByCallId.get(callId);
	for (const tool of tools) if (isObjectLike(tool) && typeof tool.name === "string" && typeof tool.description === "string") {
		descriptions = descriptions ?? /* @__PURE__ */ new Map();
		if (!descriptions.has(tool.name)) descriptions.set(tool.name, tool.description);
	}
	if (descriptions) toolDescriptionsByCallId.set(callId, descriptions);
}
function resolveToolDescription(callId, toolName, tools) {
	const fromMap = callId ? toolDescriptionsByCallId.get(callId)?.get(toolName) : void 0;
	if (fromMap) return fromMap;
	if (Array.isArray(tools)) {
		const match = tools.find((tool) => isObjectLike(tool) && tool.name === toolName);
		return isObjectLike(match) ? asString(match.description) : void 0;
	}
	if (isObjectLike(tools)) {
		const tool = tools[toolName];
		return isObjectLike(tool) ? asString(tool.description) : void 0;
	}
}
function subscribeVercelAiTracingChannel(tracingChannel, options = {}) {
	bindTracingChannelToSpan(tracingChannel(AI_SDK_TELEMETRY_TRACING_CHANNEL), (data) => createSpanFromMessage(data, options), {
		beforeSpanEnd: (span, data) => {
			enrichSpanOnEnd(span, data, options);
			clearOperationId(data);
		},
		deferSpanEnd: ({ data, end }) => deferStreamedModelCallEnd(data, options, end)
	});
}
function deferStreamedModelCallEnd(data, options, end) {
	if (data.type !== "languageModelCall" || !isObjectLike(data.result)) return false;
	const result = data.result;
	const stream = result.stream;
	if (!isReadableStream(stream)) return false;
	const callId = asString(data.event.callId);
	const { recordOutputs } = getRecordingOptions(data.event, options);
	result.stream = tapModelCallStream(stream, (final) => {
		data.result = {
			...result,
			...streamedResultToChannelResult(final)
		};
		end();
		enrichInvokeAgentFromStream(callId, final, recordOutputs);
	}, (error) => end(error));
	return true;
}
function streamedResultToChannelResult(final) {
	const content = [];
	if (final.text) content.push({
		type: "text",
		text: final.text
	});
	for (const toolCall of final.toolCalls) content.push({
		type: "tool-call",
		...toolCall
	});
	return {
		content,
		...final.usage !== void 0 ? { usage: final.usage } : {},
		...final.finishReason !== void 0 ? { finishReason: final.finishReason } : {},
		...final.providerMetadata !== void 0 ? { providerMetadata: final.providerMetadata } : {},
		...final.responseId || final.responseModel ? { response: {
			...final.responseId ? { id: final.responseId } : {},
			...final.responseModel ? { modelId: final.responseModel } : {}
		} } : {}
	};
}
function enrichInvokeAgentFromStream(callId, final, recordOutputs) {
	const span = callId ? invokeAgentSpanByCallId.get(callId) : void 0;
	if (!span) return;
	const usage = isObjectLike(final.usage) ? final.usage : void 0;
	if (usage) {
		const input = tokenCount(usage.inputTokens) ?? tokenCount(usage.promptTokens) ?? tokenCount(usage.tokens);
		const output = tokenCount(usage.outputTokens) ?? tokenCount(usage.completionTokens);
		addTokensToSpan(span, Ra, input);
		addTokensToSpan(span, Pa, output);
		addTokensToSpan(span, Ma, tokenCount(usage.totalTokens) ?? sum(input, output));
	}
	if (recordOutputs) {
		const outputMessages = buildOutputMessages(partsFromTextAndToolCalls(final.text, final.toolCalls), getFinishReason({ finishReason: final.finishReason }));
		if (outputMessages) span.setAttribute(Fr, outputMessages);
	}
}
function addTokensToSpan(span, attribute, value) {
	if (value === void 0) return;
	const current = spanToJSON(span).data[attribute];
	span.setAttribute(attribute, (typeof current === "number" ? current : 0) + value);
}
function createSpanFromMessage(data, channelOptions) {
	const { type, event } = data;
	if (type === "step" || !event || typeof event !== "object") return;
	const { recordInputs, enableTruncation } = getRecordingOptions(event, channelOptions);
	const provider = asString(event.provider);
	const modelId = asString(event.modelId);
	const callId = asString(event.callId);
	const maxRetries = asNumber(event.maxRetries);
	if (recordInputs) recordToolDescriptions(callId, event.tools);
	const baseAttributes = {
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$9,
		...provider ? {
			[ma]: provider,
			[VERCEL_AI_MODEL_PROVIDER_ATTRIBUTE]: provider
		} : {},
		...modelId ? { [Zr]: modelId } : {},
		...maxRetries !== void 0 ? { [VERCEL_AI_SETTINGS_MAX_RETRIES_ATTRIBUTE]: maxRetries } : {}
	};
	switch (type) {
		case "generateText":
		case "streamText":
		case "generateObject": return buildInvokeAgentSpan(event, baseAttributes, recordInputs, enableTruncation, callId, type === "streamText");
		case "languageModelCall": return buildModelCallSpan(event, baseAttributes, recordInputs, enableTruncation, callId, modelId);
		case "executeTool": return buildToolSpan(event, recordInputs);
		case "embed":
		case "embedMany": {
			const input = type === "embedMany" ? event.values : event.value;
			return startGenAiSpan(GEN_AI_EMBEDDINGS_OPERATION, modelId, {
				...baseAttributes,
				...recordInputs && input !== void 0 ? { [qr]: stringify(input) } : {}
			});
		}
		case "rerank": return startGenAiSpan(GEN_AI_RERANK_OPERATION, modelId, baseAttributes);
		default: return;
	}
}
function startGenAiSpan(operation, suffix, attributes) {
	return startInactiveSpan$1({
		name: suffix ? `${operation} ${suffix}` : operation,
		op: `gen_ai.${operation}`,
		attributes: {
			[Vr]: operation,
			...attributes
		}
	});
}
function buildInvokeAgentSpan(event, baseAttributes, recordInputs, enableTruncation, callId, isStream) {
	const functionId = asString(event.functionId);
	const operationId = asString(event.operationId) ?? (isStream ? "ai.streamText" : "ai.generateText");
	if (callId) operationIdByCallId.set(callId, {
		operationId,
		isStream
	});
	const span = startGenAiSpan(k, functionId, {
		...baseAttributes,
		[VERCEL_AI_OPERATION_ID_ATTRIBUTE]: operationId,
		[pa]: isStream,
		...functionId ? { [Gr]: functionId } : {},
		...recordInputs ? buildInputMessageAttributes(event, enableTruncation) : {}
	});
	if (isStream && callId) invokeAgentSpanByCallId.set(callId, span);
	return span;
}
function buildModelCallSpan(event, baseAttributes, recordInputs, enableTruncation, callId, modelId) {
	const parent = callId ? operationIdByCallId.get(callId) : void 0;
	const operationId = parent ? `${parent.operationId}.${parent.isStream ? "doStream" : "doGenerate"}` : "ai.generateText.doGenerate";
	return startGenAiSpan(GEN_AI_GENERATE_CONTENT_OPERATION, modelId, {
		...baseAttributes,
		[VERCEL_AI_OPERATION_ID_ATTRIBUTE]: operationId,
		...recordInputs ? buildInputMessageAttributes(event, enableTruncation) : {},
		...recordInputs && Array.isArray(event.tools) ? { [jr]: stringify(event.tools) } : {}
	});
}
function buildToolSpan(event, recordInputs) {
	const toolCall = isObjectLike(event.toolCall) ? event.toolCall : {};
	const toolName = asString(toolCall.toolName);
	const toolCallId = asString(event.toolCallId) ?? asString(toolCall.toolCallId);
	const toolInput = toolCall.input ?? toolCall.args;
	const description = recordInputs && toolName ? resolveToolDescription(asString(event.callId), toolName, event.tools) : void 0;
	return startGenAiSpan(b, toolName, {
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$9,
		[ka]: "function",
		...toolName ? { [Ia]: toolName } : {},
		...toolCallId ? { [GEN_AI_TOOL_CALL_ID_ATTRIBUTE]: toolCallId } : {},
		...description ? { [GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE]: description } : {},
		...recordInputs && toolInput !== void 0 ? { [Ea]: stringify(toolInput) } : {}
	});
}
function enrichSpanOnEnd(span, data, channelOptions) {
	const { type, result } = data;
	if (!isObjectLike(result)) return;
	const { recordOutputs } = getRecordingOptions(data.event, channelOptions);
	if (type === "executeTool") {
		if (recordOutputs) span.setAttribute(Oa, stringify(result.output ?? result));
		const output = isObjectLike(result.output) ? result.output : void 0;
		if (output?.type === "tool-error") captureToolError(span, data, output.error);
		return;
	}
	const usage = isObjectLike(result.usage) ? result.usage : void 0;
	if (usage) {
		const inputTokens = tokenCount(usage.inputTokens) ?? tokenCount(usage.promptTokens) ?? tokenCount(usage.tokens);
		const outputTokens = tokenCount(usage.outputTokens) ?? tokenCount(usage.completionTokens);
		const totalTokens = tokenCount(usage.totalTokens) ?? sum(inputTokens, outputTokens);
		if (inputTokens !== void 0) span.setAttribute(Ra, inputTokens);
		if (outputTokens !== void 0) span.setAttribute(Pa, outputTokens);
		if (totalTokens !== void 0) span.setAttribute(Ma, totalTokens);
	}
	const finishReason = getFinishReason(result);
	if (finishReason && type === "languageModelCall") span.setAttribute(sa, stringify([finishReason]));
	const response = isObjectLike(result.response) ? result.response : void 0;
	const responseId = asString(response?.id) ?? asString(result.responseId);
	if (responseId) span.setAttribute(oa, responseId);
	const responseModel = asString(response?.modelId) ?? asString(data.event.modelId);
	if (responseModel) span.setAttribute(la, responseModel);
	const providerMetadata = result.providerMetadata;
	const providerAttributes = getProviderMetadataAttributes(providerMetadata);
	if ("gen_ai.conversation.id" in providerAttributes && spanToJSON(span).data["gen_ai.conversation.id"]) delete providerAttributes[GEN_AI_CONVERSATION_ID_ATTRIBUTE];
	span.setAttributes(providerAttributes);
	if (recordOutputs) {
		const outputMessages = buildOutputMessages(type === "languageModelCall" && Array.isArray(result.content) ? partsFromContent(result.content) : partsFromTextAndToolCalls(result.text, result.toolCalls), finishReason);
		if (outputMessages) span.setAttribute(Fr, outputMessages);
	}
}
function normalizeFinishReason(finishReason) {
	return finishReason === "tool-calls" ? "tool_call" : finishReason ?? "stop";
}
function getFinishReason(result) {
	const finishReason = result.finishReason;
	if (typeof finishReason === "string") return finishReason;
	return isObjectLike(finishReason) ? asString(finishReason.unified) : void 0;
}
function tokenCount(value) {
	return asNumber(value) ?? (isObjectLike(value) ? asNumber(value.total) : void 0);
}
function buildOutputMessages(parts, finishReason) {
	if (!parts.length) return;
	return stringify([{
		role: "assistant",
		parts,
		finish_reason: normalizeFinishReason(finishReason)
	}]);
}
function toolCallPart(toolCall) {
	const args = toolCall.input ?? toolCall.args;
	return {
		type: "tool_call",
		id: asString(toolCall.toolCallId),
		name: asString(toolCall.toolName),
		arguments: typeof args === "string" ? args : stringify(args ?? {})
	};
}
function partsFromContent(content) {
	const parts = [];
	for (const item of content) {
		if (!isObjectLike(item)) continue;
		if (item.type === "text" && typeof item.text === "string") parts.push({
			type: "text",
			content: item.text
		});
		else if (item.type === "tool-call") parts.push(toolCallPart(item));
	}
	return parts;
}
function partsFromTextAndToolCalls(text, toolCalls) {
	const parts = [];
	if (typeof text === "string" && text.length) parts.push({
		type: "text",
		content: text
	});
	if (Array.isArray(toolCalls)) {
		for (const toolCall of toolCalls) if (isObjectLike(toolCall)) parts.push(toolCallPart(toolCall));
	}
	return parts;
}
function captureToolError(span, data, error) {
	span.setStatus({
		code: 2,
		message: error instanceof Error ? error.message : "tool_error"
	});
	const toolCall = isObjectLike(data.event.toolCall) ? data.event.toolCall : {};
	const toolName = asString(toolCall.toolName);
	const toolCallId = asString(data.event.toolCallId) ?? asString(toolCall.toolCallId);
	withScope((scope) => {
		scope.setContext("trace", spanToTraceContext(span));
		if (toolName) scope.setTag("vercel.ai.tool.name", toolName);
		if (toolCallId) scope.setTag("vercel.ai.tool.callId", toolCallId);
		scope.setLevel("error");
		captureException(error instanceof Error ? error : new Error(typeof error === "string" ? error : "Tool execution failed"), { mechanism: {
			type: "auto.vercelai.channel",
			handled: false
		} });
	});
}
function getRecordingOptions(event, channelOptions) {
	const genAI = getClient()?.getDataCollectionOptions().genAI;
	return {
		recordInputs: resolveRecording(channelOptions.recordInputs, event.recordInputs, genAI?.inputs),
		recordOutputs: resolveRecording(channelOptions.recordOutputs, event.recordOutputs, genAI?.outputs),
		enableTruncation: shouldEnableTruncation(channelOptions.enableTruncation)
	};
}
function resolveRecording(integrationOption, perCallOption, globalDefault) {
	if (typeof integrationOption === "boolean") return integrationOption;
	if (typeof perCallOption === "boolean") return perCallOption;
	return globalDefault === true;
}
function buildInputMessageAttributes(event, enableTruncation) {
	const attributes = {};
	const instructions = asString(event.instructions);
	if (instructions) attributes[GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE] = stringify([{
		type: "text",
		content: instructions
	}]);
	const messages = event.messages ?? event.prompt;
	if (messages !== void 0) {
		attributes[Yr] = enableTruncation ? getTruncatedJsonString(messages) : stringify(messages);
		attributes[GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = Array.isArray(messages) ? messages.length : 1;
	}
	return attributes;
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/vercel-ai/index.js
var _vercelAiIntegration = ((options = {}) => {
	return {
		name: "VercelAI",
		setupOnce() {
			if (!diagnosticsChannel.tracingChannel) return;
			waitForTracingChannelBinding(() => {
				subscribeVercelAiTracingChannel(diagnosticsChannel.tracingChannel, options);
			});
		}
	};
});
var vercelAiIntegration = defineIntegration(_vercelAiIntegration);
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/integrations/tracing-channel/fastify/instrumentation.js
var PACKAGE_NAME$17 = "@sentry/instrumentation-fastify";
var SUPPORTED_VERSIONS$3 = ">=3.21.0 <6";
var ORIGIN$8 = "auto.http.otel.fastify";
var HOOK_OP = "hook.fastify";
var REQUEST_HANDLER_OP = "request_handler.fastify";
var FASTIFY_HOOKS = [
	"onRequest",
	"preParsing",
	"preValidation",
	"preHandler",
	"preSerialization",
	"onSend",
	"onResponse",
	"onError"
];
var ATTRIBUTE_HOOK_NAME = "hook.name";
var ATTRIBUTE_FASTIFY_TYPE = "fastify.type";
var ATTRIBUTE_HOOK_CALLBACK_NAME = "hook.callback.name";
var ATTRIBUTE_FASTIFY_ROOT = "fastify.root";
var HOOK_TYPE_ROUTE = "route-hook";
var HOOK_TYPE_INSTANCE = "hook";
var HOOK_TYPE_HANDLER = "request-handler";
var ANONYMOUS_FUNCTION_NAME = "anonymous";
var kRequestSpan = /* @__PURE__ */ Symbol("sentry fastify request span");
var kAddHookOriginal = /* @__PURE__ */ Symbol("sentry fastify addHook original");
var kSetNotFoundOriginal = /* @__PURE__ */ Symbol("sentry fastify setNotFoundHandler original");
function getRequestRouteUrl(request) {
	return request.routeOptions?.url ?? request.routerPath;
}
function getRequestRouteConfig(request) {
	return request.routeOptions?.config ?? request.routeConfig;
}
function isFastifyRequest(arg) {
	return isObjectLike(arg) && !!arg.method && !!arg.url && (!!arg.routeOptions || "routerPath" in arg);
}
function fastifyOtelPlugin(instance, _opts, done) {
	instance.decorate(kAddHookOriginal, instance.addHook);
	instance.decorate(kSetNotFoundOriginal, instance.setNotFoundHandler);
	instance.decorateRequest("opentelemetry", function opentelemetry() {
		return { span: this[kRequestSpan] };
	});
	instance.decorateRequest(kRequestSpan, null);
	instance.addHook("onRoute", otelWireRoute);
	instance.addHook("onRequest", startRequestSpanHook);
	instance.addHook("onResponse", finalizeNotFoundSpanHook);
	instance.addHook = addHookPatched;
	instance.setNotFoundHandler = setNotFoundHandlerPatched;
	done();
}
var pluginSymbols = fastifyOtelPlugin;
pluginSymbols[/* @__PURE__ */ Symbol.for("skip-override")] = true;
pluginSymbols[/* @__PURE__ */ Symbol.for("fastify.display-name")] = PACKAGE_NAME$17;
pluginSymbols[/* @__PURE__ */ Symbol.for("plugin-meta")] = {
	fastify: SUPPORTED_VERSIONS$3,
	name: PACKAGE_NAME$17
};
function otelWireRoute(routeOptions) {
	if (routeOptions.config?.otel === false) return;
	for (const hook of FASTIFY_HOOKS) {
		const handlerLike = routeOptions[hook];
		if (typeof handlerLike === "function") routeOptions[hook] = handlerWrapper(handlerLike, hook, routeHookAttributes(this.pluginName, hook, handlerLike, routeOptions.url));
		else if (Array.isArray(handlerLike)) routeOptions[hook] = handlerLike.map((handler) => handlerWrapper(handler, hook, routeHookAttributes(this.pluginName, hook, handler, routeOptions.url)));
	}
	routeOptions.onSend = appendRouteHook(routeOptions.onSend, finalizeResponseSpanHook);
	routeOptions.onError = appendRouteHook(routeOptions.onError, recordErrorInSpanHook);
	routeOptions.handler = handlerWrapper(routeOptions.handler, "handler", {
		[ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - route-handler`,
		[ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_HANDLER,
		[Ts]: routeOptions.url,
		[ATTRIBUTE_HOOK_CALLBACK_NAME]: routeOptions.handler.name.length > 0 ? routeOptions.handler.name : ANONYMOUS_FUNCTION_NAME
	});
}
function routeHookAttributes(pluginName, hook, handler, url) {
	return {
		[ATTRIBUTE_HOOK_NAME]: `${pluginName} - route -> ${hook}`,
		[ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_ROUTE,
		[Ts]: url,
		[ATTRIBUTE_HOOK_CALLBACK_NAME]: handler.name?.length > 0 ? handler.name : ANONYMOUS_FUNCTION_NAME
	};
}
function appendRouteHook(existing, hook) {
	if (existing == null) return hook;
	return Array.isArray(existing) ? [...existing, hook] : [existing, hook];
}
function startRequestSpanHook(request, _reply, hookDone) {
	if (getRequestRouteConfig(request)?.otel === false) return hookDone();
	const attributes = {
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$8,
		[ATTRIBUTE_FASTIFY_ROOT]: PACKAGE_NAME$17,
		[ns]: request.method,
		[Vu]: request.url
	};
	const route = getRequestRouteUrl(request);
	if (route != null) {
		attributes[Ts] = route;
		const activeSpan = getActiveSpan$1();
		const rootSpan = activeSpan && getRootSpan$1(activeSpan);
		if (rootSpan && spanToJSON(rootSpan).data["sentry.op"] === "http.server") rootSpan.setAttribute(Ts, route);
	}
	const requestSpan = startInactiveSpan$1({
		name: "request",
		op: REQUEST_HANDLER_OP,
		attributes
	});
	request[kRequestSpan] = requestSpan;
	withActiveSpan$1(requestSpan, () => {
		hookDone();
	});
}
function finalizeNotFoundSpanHook(request, reply, hookDone) {
	const span = request[kRequestSpan];
	if (span != null) {
		span.setAttributes({ [Ss]: reply.statusCode });
		span.end();
	}
	request[kRequestSpan] = null;
	hookDone();
}
function finalizeResponseSpanHook(request, reply, payload, hookDone) {
	const span = request[kRequestSpan];
	if (span != null) {
		if (reply.statusCode >= 500) span.setStatus({ code: 2 });
		span.setAttributes({ [Ss]: reply.statusCode });
		span.end();
	}
	request[kRequestSpan] = null;
	hookDone(null, payload);
}
function recordErrorInSpanHook(request, _reply, error, hookDone) {
	const span = request[kRequestSpan];
	if (span != null) span.setStatus({
		code: 2,
		message: error.message
	});
	hookDone();
}
function addHookPatched(name, hook) {
	const addHookOriginal = this[kAddHookOriginal];
	if (FASTIFY_HOOKS.includes(name)) return addHookOriginal.call(this, name, handlerWrapper(hook, name, {
		[ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - ${name}`,
		[ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
		[ATTRIBUTE_HOOK_CALLBACK_NAME]: hook.name?.length > 0 ? hook.name : ANONYMOUS_FUNCTION_NAME
	}));
	return addHookOriginal.call(this, name, hook);
}
function setNotFoundHandlerPatched(hooks, handler) {
	const setNotFoundHandlerOriginal = this[kSetNotFoundOriginal];
	if (typeof hooks === "function") {
		setNotFoundHandlerOriginal.call(this, handlerWrapper(hooks, "notFoundHandler", {
			[ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - not-found-handler`,
			[ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
			[ATTRIBUTE_HOOK_CALLBACK_NAME]: hooks.name?.length > 0 ? hooks.name : ANONYMOUS_FUNCTION_NAME
		}));
		return;
	}
	if (hooks.preValidation != null) hooks.preValidation = handlerWrapper(hooks.preValidation, "notFoundHandler - preValidation", {
		[ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - not-found-handler - preValidation`,
		[ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
		[ATTRIBUTE_HOOK_CALLBACK_NAME]: hooks.preValidation.name?.length > 0 ? hooks.preValidation.name : ANONYMOUS_FUNCTION_NAME
	});
	if (hooks.preHandler != null) hooks.preHandler = handlerWrapper(hooks.preHandler, "notFoundHandler - preHandler", {
		[ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - not-found-handler - preHandler`,
		[ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
		[ATTRIBUTE_HOOK_CALLBACK_NAME]: hooks.preHandler.name?.length > 0 ? hooks.preHandler.name : ANONYMOUS_FUNCTION_NAME
	});
	if (handler == null) {
		setNotFoundHandlerOriginal.call(this, hooks);
		return;
	}
	setNotFoundHandlerOriginal.call(this, hooks, handlerWrapper(handler, "notFoundHandler", {
		[ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - not-found-handler`,
		[ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
		[ATTRIBUTE_HOOK_CALLBACK_NAME]: handler.name?.length > 0 ? handler.name : ANONYMOUS_FUNCTION_NAME
	}));
}
function getRequestFromArgs(args) {
	for (const arg of args) if (isFastifyRequest(arg)) return arg;
	return null;
}
function handlerWrapper(handler, hookName, spanAttributes = {}) {
	return function handlerWrapped(...args) {
		const request = getRequestFromArgs(args);
		if (request === null || getRequestRouteConfig(request)?.otel === false) return handler.call(this, ...args);
		const parentSpan = request[kRequestSpan] ?? void 0;
		const handlerName = handler.name?.length > 0 ? handler.name : this.pluginName ?? ANONYMOUS_FUNCTION_NAME;
		const hookType = spanAttributes[ATTRIBUTE_FASTIFY_TYPE];
		const op = hookType === HOOK_TYPE_INSTANCE ? HOOK_OP : hookType === HOOK_TYPE_HANDLER ? REQUEST_HANDLER_OP : void 0;
		return startSpan$2({
			name: op ? stripFastifyPrefix(spanAttributes[ATTRIBUTE_HOOK_NAME]) : `${hookName} - ${handlerName}`,
			op,
			attributes: {
				...spanAttributes,
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$8
			},
			parentSpan
		}, () => handler.call(this, ...args));
	};
}
function stripFastifyPrefix(hookName = "") {
	return hookName.replace(/^fastify -> /, "").replace(/^@fastify\/otel -> /, "").replace(/^@sentry\/instrumentation-fastify -> /, "");
}
function instrumentOnRequest(fastify) {
	fastify.addHook("onRequest", async (request, _reply) => {
		const routeName = getRequestRouteUrl(request);
		const method = request.method || "GET";
		getIsolationScope().setTransactionName(`${method} ${routeName}`);
	});
}
var _isInstrumented = false;
var instrumentFastify = Object.assign(function instrumentFastify2() {
	if (_isInstrumented) return;
	_isInstrumented = true;
	diagnosticsChannel.subscribe("fastify.initialization", (message) => {
		const fastifyInstance = message.fastify;
		fastifyInstance?.register(fastifyOtelPlugin).after((err) => {
			if (err) DEBUG_BUILD && debug.error("Failed to setup Fastify instrumentation", err);
			else if (fastifyInstance) instrumentOnRequest(fastifyInstance);
		});
	});
}, { id: "Fastify.v5" });
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/integrations/tracing-channel/fastify/utils.js
var INTEGRATION_NAME$20 = "Fastify";
function defaultShouldHandleError(_error, _request, reply) {
	const statusCode = reply.statusCode;
	return statusCode >= 500 || statusCode <= 299;
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/integrations/tracing-channel/fastify/errors.js
function getFastifyIntegration() {
	return getClient()?.getIntegrationByName(INTEGRATION_NAME$20);
}
function subscribeToFastifyErrorChannel() {
	diagnosticsChannel.subscribe("tracing:fastify.request.handler:error", (message) => {
		const { error, request, reply } = message;
		handleFastifyError.call(handleFastifyError, error, request, reply, "diagnostics-channel");
	});
}
function handleFastifyError(error, request, reply, handlerOrigin) {
	const shouldHandleError = getFastifyIntegration()?.getShouldHandleError() || defaultShouldHandleError;
	if (handlerOrigin === "diagnostics-channel") this.diagnosticsChannelExists = true;
	if (this.diagnosticsChannelExists && handlerOrigin === "onError-hook") {
		DEBUG_BUILD && debug.warn("Fastify error handler was already registered via diagnostics channel.", "You can safely remove `setupFastifyErrorHandler` call and set `shouldHandleError` on the integration options.");
		return;
	}
	if (shouldHandleError(error, request, reply)) captureException(error, { mechanism: {
		handled: false,
		type: "auto.function.fastify"
	} });
}
//#endregion
//#region node_modules/@sentry/server-utils/build/esm/integrations/tracing-channel/fastify/index.js
var _fastifyIntegration$1 = (({ shouldHandleError }) => {
	let _shouldHandleError;
	return {
		name: INTEGRATION_NAME$20,
		setupOnce() {
			_shouldHandleError = shouldHandleError || defaultShouldHandleError;
			subscribeToFastifyErrorChannel();
			instrumentFastify();
		},
		getShouldHandleError() {
			return _shouldHandleError;
		},
		setShouldHandleError(shouldHandleError2) {
			_shouldHandleError = shouldHandleError2;
		}
	};
});
var fastifyIntegration$1 = defineIntegration((options = {}) => _fastifyIntegration$1(options));
var instrumentFastifyV3 = generateInstrumentOnce(`Fastify.v3`, () => new FastifyInstrumentationV3());
var _fastifyIntegration = ((options) => {
	return extendIntegration(fastifyIntegration$1(options), { setupOnce() {
		instrumentFastifyV3();
	} });
});
var fastifyIntegration = defineIntegration((options = {}) => _fastifyIntegration(options));
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/InstrumentationNodeModuleFile.js
var InstrumentationNodeModuleFile = class {
	constructor(name, supportedVersions, patch, unpatch) {
		this.name = normalize(name);
		this.supportedVersions = supportedVersions;
		this.patch = patch;
		this.unpatch = unpatch;
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/graphql/vendored/enum.js
var AllowedOperationTypes = /* @__PURE__ */ ((AllowedOperationTypes2) => {
	AllowedOperationTypes2["QUERY"] = "query";
	AllowedOperationTypes2["MUTATION"] = "mutation";
	AllowedOperationTypes2["SUBSCRIPTION"] = "subscription";
	return AllowedOperationTypes2;
})(AllowedOperationTypes || {});
var TokenKind = /* @__PURE__ */ ((TokenKind2) => {
	TokenKind2["SOF"] = "<SOF>";
	TokenKind2["EOF"] = "<EOF>";
	TokenKind2["BANG"] = "!";
	TokenKind2["DOLLAR"] = "$";
	TokenKind2["AMP"] = "&";
	TokenKind2["PAREN_L"] = "(";
	TokenKind2["PAREN_R"] = ")";
	TokenKind2["SPREAD"] = "...";
	TokenKind2["COLON"] = ":";
	TokenKind2["EQUALS"] = "=";
	TokenKind2["AT"] = "@";
	TokenKind2["BRACKET_L"] = "[";
	TokenKind2["BRACKET_R"] = "]";
	TokenKind2["BRACE_L"] = "{";
	TokenKind2["PIPE"] = "|";
	TokenKind2["BRACE_R"] = "}";
	TokenKind2["NAME"] = "Name";
	TokenKind2["INT"] = "Int";
	TokenKind2["FLOAT"] = "Float";
	TokenKind2["STRING"] = "String";
	TokenKind2["BLOCK_STRING"] = "BlockString";
	TokenKind2["COMMENT"] = "Comment";
	return TokenKind2;
})(TokenKind || {});
var SpanNames$1 = /* @__PURE__ */ ((SpanNames2) => {
	SpanNames2["EXECUTE"] = "graphql.execute";
	SpanNames2["PARSE"] = "graphql.parse";
	SpanNames2["RESOLVE"] = "graphql.resolve";
	SpanNames2["VALIDATE"] = "graphql.validate";
	SpanNames2["SCHEMA_VALIDATE"] = "graphql.validateSchema";
	SpanNames2["SCHEMA_PARSE"] = "graphql.parseSchema";
	return SpanNames2;
})(SpanNames$1 || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/graphql/vendored/enums/AttributeNames.js
var AttributeNames$5 = /* @__PURE__ */ ((AttributeNames2) => {
	AttributeNames2["SOURCE"] = "graphql.source";
	AttributeNames2["FIELD_NAME"] = "graphql.field.name";
	AttributeNames2["FIELD_PATH"] = "graphql.field.path";
	AttributeNames2["FIELD_TYPE"] = "graphql.field.type";
	AttributeNames2["PARENT_NAME"] = "graphql.parent.name";
	AttributeNames2["OPERATION_TYPE"] = "graphql.operation.type";
	AttributeNames2["OPERATION_NAME"] = "graphql.operation.name";
	return AttributeNames2;
})(AttributeNames$5 || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/graphql/vendored/symbols.js
var OTEL_PATCHED_SYMBOL = /* @__PURE__ */ Symbol.for("opentelemetry.patched");
var OTEL_GRAPHQL_DATA_SYMBOL = /* @__PURE__ */ Symbol.for("opentelemetry.graphql_data");
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/graphql/vendored/internal-types.js
var OPERATION_NOT_SUPPORTED = "Operation$operationName$not supported";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/graphql/vendored/utils.js
var OPERATION_VALUES = Object.values(AllowedOperationTypes);
var isPromise = (value) => {
	return typeof value?.then === "function";
};
function addSpanSource(span, loc, start, end) {
	if (getClient()?.getDataCollectionOptions().graphQL.document === true) {
		const source = getSourceFromLocation(loc, start, end);
		span.setAttribute(AttributeNames$5.SOURCE, source);
	}
}
function createFieldIfNotExists(contextValue, info, path) {
	let field = getField(contextValue, path);
	if (field) return {
		field,
		spanAdded: false
	};
	field = { span: createResolverSpan(contextValue, info, path, getParentFieldSpan(contextValue, path)) };
	addField(contextValue, path, field);
	return {
		field,
		spanAdded: true
	};
}
function createResolverSpan(contextValue, info, path, parentSpan) {
	const attributes = {
		[AttributeNames$5.FIELD_NAME]: info.fieldName,
		[AttributeNames$5.FIELD_PATH]: path.join("."),
		[AttributeNames$5.FIELD_TYPE]: info.returnType.toString(),
		[AttributeNames$5.PARENT_NAME]: info.parentType.name
	};
	const span = startInactiveSpan$1({
		name: `${SpanNames$1.RESOLVE} ${attributes[AttributeNames$5.FIELD_PATH]}`,
		attributes,
		parentSpan
	});
	const document = contextValue[OTEL_GRAPHQL_DATA_SYMBOL].source;
	const fieldNode = info.fieldNodes.find((fieldNode2) => fieldNode2.kind === "Field");
	if (fieldNode) addSpanSource(span, document.loc, fieldNode.loc?.start, fieldNode.loc?.end);
	return span;
}
function endSpan$2(span, error) {
	if (error) span.setStatus({
		code: 2,
		message: error.message
	});
	span.end();
}
function getOperation(document, operationName) {
	if (!document || !Array.isArray(document.definitions)) return;
	if (operationName) return document.definitions.filter((definition) => OPERATION_VALUES.indexOf(definition?.operation) !== -1).find((definition) => operationName === definition?.name?.value);
	else return document.definitions.find((definition) => OPERATION_VALUES.indexOf(definition?.operation) !== -1);
}
function addField(contextValue, path, field) {
	return contextValue[OTEL_GRAPHQL_DATA_SYMBOL].fields[path.join(".")] = field;
}
function getField(contextValue, path) {
	return contextValue[OTEL_GRAPHQL_DATA_SYMBOL].fields[path.join(".")];
}
function getParentFieldSpan(contextValue, path) {
	for (let i = path.length - 1; i > 0; i--) {
		const field = getField(contextValue, path.slice(0, i));
		if (field) return field.span;
	}
	return getRootSpan(contextValue);
}
function getRootSpan(contextValue) {
	return contextValue[OTEL_GRAPHQL_DATA_SYMBOL].span;
}
function pathToArray(path) {
	const flattened = [];
	let curr = path;
	while (curr) {
		flattened.push(String(curr.key));
		curr = curr.prev;
	}
	return flattened.reverse();
}
function repeatBreak(i) {
	return repeatChar("\n", i);
}
function repeatSpace(i) {
	return repeatChar(" ", i);
}
function repeatChar(char, to) {
	let text = "";
	for (let i = 0; i < to; i++) text += char;
	return text;
}
var KindsToBeRemoved = [
	TokenKind.FLOAT,
	TokenKind.STRING,
	TokenKind.INT,
	TokenKind.BLOCK_STRING
];
function getSourceFromLocation(loc, inputStart, inputEnd) {
	let source = "";
	if (loc?.startToken) {
		const start = typeof inputStart === "number" ? inputStart : loc.start;
		const end = typeof inputEnd === "number" ? inputEnd : loc.end;
		let next = loc.startToken.next;
		let previousLine = 1;
		while (next) {
			if (next.start < start) {
				next = next.next;
				previousLine = next?.line;
				continue;
			}
			if (next.end > end) {
				next = next.next;
				previousLine = next?.line;
				continue;
			}
			let value = next.value || next.kind;
			let space = "";
			if (KindsToBeRemoved.indexOf(next.kind) >= 0) value = "*";
			if (next.kind === TokenKind.STRING) value = `"${value}"`;
			if (next.kind === TokenKind.EOF) value = "";
			if (next.line > previousLine) {
				source += repeatBreak(next.line - previousLine);
				previousLine = next.line;
				space = repeatSpace(next.column - 1);
			} else if (next.line === next.prev?.line) space = repeatSpace(next.start - (next.prev?.end || 0));
			source += space + value;
			if (next) next = next.next;
		}
	}
	return source;
}
function wrapFields(type, getConfig) {
	if (!type || type[OTEL_PATCHED_SYMBOL]) return;
	const fields = type.getFields();
	type[OTEL_PATCHED_SYMBOL] = true;
	Object.keys(fields).forEach((key) => {
		const field = fields[key];
		if (!field) return;
		if (field.resolve) field.resolve = wrapFieldResolver(getConfig, field.resolve);
		if (field.type) {
			const unwrappedTypes = unwrapType(field.type);
			for (const unwrappedType of unwrappedTypes) wrapFields(unwrappedType, getConfig);
		}
	});
}
function unwrapType(type) {
	if ("ofType" in type) return unwrapType(type.ofType);
	if (isGraphQLUnionType(type)) return type.getTypes();
	if (isGraphQLObjectType(type)) return [type];
	return [];
}
function isGraphQLUnionType(type) {
	return "getTypes" in type && typeof type.getTypes === "function";
}
function isGraphQLObjectType(type) {
	return "getFields" in type && typeof type.getFields === "function";
}
var handleResolveSpanError = (resolveSpan, err, shouldEndSpan) => {
	if (!shouldEndSpan) return;
	resolveSpan.setStatus({
		code: 2,
		message: err.message
	});
	resolveSpan.end();
};
var handleResolveSpanSuccess = (resolveSpan, shouldEndSpan) => {
	if (!shouldEndSpan) return;
	resolveSpan.end();
};
function wrapFieldResolver(getConfig, fieldResolver, isDefaultResolver = false) {
	if (wrappedFieldResolver[OTEL_PATCHED_SYMBOL] || typeof fieldResolver !== "function") return fieldResolver;
	function wrappedFieldResolver(source, args, contextValue, info) {
		if (!fieldResolver) return;
		if (getConfig().ignoreTrivialResolveSpans && isDefaultResolver && (isObjectLike(source) || typeof source === "function")) {
			if (typeof source[info.fieldName] !== "function") return fieldResolver.call(this, source, args, contextValue, info);
		}
		if (!contextValue[OTEL_GRAPHQL_DATA_SYMBOL]) return fieldResolver.call(this, source, args, contextValue, info);
		const { field, spanAdded } = createFieldIfNotExists(contextValue, info, pathToArray(info?.path));
		const span = field.span;
		const shouldEndSpan = spanAdded;
		return withActiveSpan$1(span, () => {
			try {
				const res = fieldResolver.call(this, source, args, contextValue, info);
				if (isPromise(res)) return res.then((r) => {
					handleResolveSpanSuccess(span, shouldEndSpan);
					return r;
				}, (err) => {
					handleResolveSpanError(span, err, shouldEndSpan);
					throw err;
				});
				else {
					handleResolveSpanSuccess(span, shouldEndSpan);
					return res;
				}
			} catch (err) {
				handleResolveSpanError(span, err, shouldEndSpan);
				throw err;
			}
		});
	}
	wrappedFieldResolver[OTEL_PATCHED_SYMBOL] = true;
	return wrappedFieldResolver;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/graphql/vendored/instrumentation.js
var PACKAGE_NAME$16 = "@sentry/instrumentation-graphql";
var ORIGIN$7 = "auto.graphql.otel.graphql";
var DEFAULT_CONFIG = { ignoreResolveSpans: false };
var supportedVersions$7 = [">=14.0.0 <17"];
var GraphQLInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$16, SDK_VERSION, {
			...DEFAULT_CONFIG,
			...config
		});
	}
	setConfig(config = {}) {
		super.setConfig({
			...DEFAULT_CONFIG,
			...config
		});
	}
	init() {
		const module = new InstrumentationNodeModuleDefinition("graphql", supportedVersions$7);
		module.files.push(this._addPatchingExecute());
		module.files.push(this._addPatchingParser());
		module.files.push(this._addPatchingValidate());
		return module;
	}
	_addPatchingExecute() {
		return new InstrumentationNodeModuleFile("graphql/execution/execute.js", supportedVersions$7, (moduleExports) => {
			if (isWrapped(moduleExports.execute)) this._unwrap(moduleExports, "execute");
			this._wrap(moduleExports, "execute", this._patchExecute(moduleExports.defaultFieldResolver));
			return moduleExports;
		}, (moduleExports) => {
			if (moduleExports) this._unwrap(moduleExports, "execute");
		});
	}
	_addPatchingParser() {
		return new InstrumentationNodeModuleFile("graphql/language/parser.js", supportedVersions$7, (moduleExports) => {
			if (isWrapped(moduleExports.parse)) this._unwrap(moduleExports, "parse");
			this._wrap(moduleExports, "parse", this._patchParse());
			return moduleExports;
		}, (moduleExports) => {
			if (moduleExports) this._unwrap(moduleExports, "parse");
		});
	}
	_addPatchingValidate() {
		return new InstrumentationNodeModuleFile("graphql/validation/validate.js", supportedVersions$7, (moduleExports) => {
			if (isWrapped(moduleExports.validate)) this._unwrap(moduleExports, "validate");
			this._wrap(moduleExports, "validate", this._patchValidate());
			return moduleExports;
		}, (moduleExports) => {
			if (moduleExports) this._unwrap(moduleExports, "validate");
		});
	}
	_patchExecute(defaultFieldResolved) {
		const instrumentation = this;
		return function execute(original) {
			return function patchExecute() {
				let processedArgs;
				if (arguments.length >= 2) {
					const args = arguments;
					processedArgs = instrumentation._wrapExecuteArgs(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], defaultFieldResolved);
				} else {
					const args = arguments[0];
					processedArgs = instrumentation._wrapExecuteArgs(args.schema, args.document, args.rootValue, args.contextValue, args.variableValues, args.operationName, args.fieldResolver, args.typeResolver, defaultFieldResolved);
				}
				const operation = getOperation(processedArgs.document, processedArgs.operationName);
				const span = instrumentation._createExecuteSpan(operation, processedArgs);
				processedArgs.contextValue[OTEL_GRAPHQL_DATA_SYMBOL] = {
					source: processedArgs.document ? processedArgs.document || processedArgs.document[OTEL_GRAPHQL_DATA_SYMBOL] : void 0,
					span,
					fields: {}
				};
				return withActiveSpan$1(span, () => {
					return safeExecuteInTheMiddle(() => {
						return original.apply(this, [processedArgs]);
					}, (err, result) => {
						instrumentation._handleExecutionResult(span, err, result);
					});
				});
			};
		};
	}
	_handleExecutionResult(span, err, result) {
		if (result === void 0 || err) {
			endSpan$2(span, err);
			return;
		}
		if (isPromise(result)) result.then((resultData) => {
			this._updateSpanFromResult(span, resultData);
			endSpan$2(span);
		}, (error) => {
			endSpan$2(span, error);
		});
		else {
			this._updateSpanFromResult(span, result);
			endSpan$2(span);
		}
	}
	/**
	* Applies Sentry-specific span mutations based on the GraphQL execution result:
	* - Marks the execute span as errored if the result contains errors (and no status was set yet)
	* - Optionally renames the containing root span to include the GraphQL operation name(s)
	*/
	_updateSpanFromResult(span, result) {
		if (result.errors?.length && !spanToJSON(span).status) span.setStatus({ code: 2 });
		if (!this.getConfig().useOperationNameForRootSpan) return;
		const attributes = spanToJSON(span).data;
		const operationType = attributes[AttributeNames$5.OPERATION_TYPE];
		const operationName = attributes[AttributeNames$5.OPERATION_NAME];
		if (!operationType) return;
		const rootSpan = getRootSpan$1(span);
		const existingOperations = spanToJSON(rootSpan).data["sentry.graphql.operation"] || [];
		const newOperation = operationName ? `${operationType} ${operationName}` : `${operationType}`;
		if (Array.isArray(existingOperations)) {
			existingOperations.push(newOperation);
			rootSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, existingOperations);
		} else if (typeof existingOperations === "string") rootSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, [existingOperations, newOperation]);
		else rootSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, newOperation);
		if (!spanToJSON(rootSpan).data["original-description"]) rootSpan.setAttribute("original-description", spanToJSON(rootSpan).description);
		rootSpan.updateName(`${spanToJSON(rootSpan).data["original-description"]} (${getGraphqlOperationNamesFromAttribute(existingOperations)})`);
	}
	_patchParse() {
		const instrumentation = this;
		return function parse(original) {
			return function patchParse(source, options) {
				return instrumentation._parse(this, original, source, options);
			};
		};
	}
	_patchValidate() {
		const instrumentation = this;
		return function validate(original) {
			return function patchValidate(schema, documentAST, rules, options, typeInfo) {
				return instrumentation._validate(this, original, schema, documentAST, rules, typeInfo, options);
			};
		};
	}
	_parse(obj, original, source, options) {
		const span = startInactiveSpan$1({ name: SpanNames$1.PARSE });
		return withActiveSpan$1(span, () => {
			return safeExecuteInTheMiddle(() => {
				return original.call(obj, source, options);
			}, (err, result) => {
				if (result) {
					if (!getOperation(result)) span.updateName(SpanNames$1.SCHEMA_PARSE);
					else if (result.loc) addSpanSource(span, result.loc);
				}
				endSpan$2(span, err);
			});
		});
	}
	_validate(obj, original, schema, documentAST, rules, typeInfo, options) {
		const span = startInactiveSpan$1({ name: SpanNames$1.VALIDATE });
		return withActiveSpan$1(span, () => {
			return safeExecuteInTheMiddle(() => {
				return original.call(obj, schema, documentAST, rules, options, typeInfo);
			}, (err, _errors) => {
				if (!documentAST.loc) span.updateName(SpanNames$1.SCHEMA_VALIDATE);
				endSpan$2(span, err);
			});
		});
	}
	_createExecuteSpan(operation, processedArgs) {
		const span = startInactiveSpan$1({
			name: SpanNames$1.EXECUTE,
			attributes: { [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$7 }
		});
		if (operation) {
			const { operation: operationType, name: nameNode } = operation;
			span.setAttribute(AttributeNames$5.OPERATION_TYPE, operationType);
			const operationName = nameNode?.value;
			if (operationName) {
				span.setAttribute(AttributeNames$5.OPERATION_NAME, operationName);
				span.updateName(`${operationType} ${operationName}`);
			} else span.updateName(operationType);
		} else {
			let operationName = " ";
			if (processedArgs.operationName) operationName = ` "${processedArgs.operationName}" `;
			operationName = OPERATION_NOT_SUPPORTED.replace("$operationName$", operationName);
			span.setAttribute(AttributeNames$5.OPERATION_NAME, operationName);
		}
		if (processedArgs.document?.loc) addSpanSource(span, processedArgs.document.loc);
		return span;
	}
	_wrapExecuteArgs(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver, defaultFieldResolved) {
		if (!contextValue) contextValue = {};
		if (contextValue[OTEL_GRAPHQL_DATA_SYMBOL] || this.getConfig().ignoreResolveSpans) return {
			schema,
			document,
			rootValue,
			contextValue,
			variableValues,
			operationName,
			fieldResolver,
			typeResolver
		};
		fieldResolver = wrapFieldResolver(() => this.getConfig(), fieldResolver ?? defaultFieldResolved, fieldResolver == null);
		if (schema) {
			wrapFields(schema.getQueryType(), () => this.getConfig());
			wrapFields(schema.getMutationType(), () => this.getConfig());
		}
		return {
			schema,
			document,
			rootValue,
			contextValue,
			variableValues,
			operationName,
			fieldResolver,
			typeResolver
		};
	}
};
function getGraphqlOperationNamesFromAttribute(attr) {
	if (Array.isArray(attr)) {
		const sorted = attr.slice().sort();
		if (sorted.length <= 5) return sorted.join(", ");
		else return `${sorted.slice(0, 5).join(", ")}, +${sorted.length - 5}`;
	}
	return `${attr}`;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/graphql/index.js
var INTEGRATION_NAME$18 = "Graphql";
var instrumentGraphql = generateInstrumentOnce(INTEGRATION_NAME$18, GraphQLInstrumentation, (_options) => getOptionsWithDefaults(_options));
var _graphqlIntegration = ((options = {}) => {
	return extendIntegration(graphqlIntegration$1(getOptionsWithDefaults(options)), {
		name: INTEGRATION_NAME$18,
		setupOnce() {
			instrumentGraphql(getOptionsWithDefaults(options));
		}
	});
});
var graphqlIntegration = defineIntegration(_graphqlIntegration);
function getOptionsWithDefaults(options) {
	return {
		ignoreResolveSpans: true,
		ignoreTrivialResolveSpans: true,
		useOperationNameForRootSpan: true,
		...options
	};
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/kafka/vendored/semconv.js
var ATTR_MESSAGING_DESTINATION_PARTITION_ID = "messaging.destination.partition.id";
var ATTR_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message.key";
var ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE = "messaging.kafka.message.tombstone";
var ATTR_MESSAGING_KAFKA_OFFSET = "messaging.kafka.offset";
var MESSAGING_OPERATION_TYPE_VALUE_PROCESS = "process";
var MESSAGING_OPERATION_TYPE_VALUE_RECEIVE = "receive";
var MESSAGING_OPERATION_TYPE_VALUE_SEND = "send";
var MESSAGING_SYSTEM_VALUE_KAFKA = "kafka";
var ERROR_TYPE_VALUE_OTHER = "_OTHER";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/kafka/vendored/utils.js
var PRODUCER_ORIGIN = "auto.kafkajs.otel.producer";
var CONSUMER_ORIGIN$1 = "auto.kafkajs.otel.consumer";
function getHeaderAsString$1(headers, key) {
	const value = headers?.[key];
	if (value == null) return;
	return Array.isArray(value) ? value[0]?.toString() : value.toString();
}
function getLinksFromHeaders(headers) {
	const sentryTrace = getHeaderAsString$1(headers, "sentry-trace");
	if (!sentryTrace) return;
	const { traceId, parentSpanId, sampled } = propagationContextFromHeaders(sentryTrace, getHeaderAsString$1(headers, "baggage"));
	if (!parentSpanId) return;
	return [{ context: {
		traceId,
		spanId: parentSpanId,
		isRemote: true,
		traceFlags: sampled ? import_src.TraceFlags.SAMPLED : import_src.TraceFlags.NONE
	} }];
}
function startConsumerSpan({ topic, message, operationType, links, attributes }) {
	const operationName = operationType === "receive" ? "poll" : operationType;
	return startInactiveSpan$1({
		name: `${operationName} ${topic}`,
		kind: operationType === "receive" ? SPAN_KIND.CLIENT : SPAN_KIND.CONSUMER,
		links,
		attributes: {
			...attributes,
			[Zo]: MESSAGING_SYSTEM_VALUE_KAFKA,
			[Wo]: topic,
			[Xo]: operationType,
			[Qo]: operationName,
			[ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: message?.key ? String(message.key) : void 0,
			[ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]: message?.key && message.value === null ? true : void 0,
			[ATTR_MESSAGING_KAFKA_OFFSET]: message?.offset,
			...message ? { [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: CONSUMER_ORIGIN$1 } : {}
		}
	});
}
function startProducerSpan(topic, message) {
	const span = startInactiveSpan$1({
		name: `send ${topic}`,
		kind: SPAN_KIND.PRODUCER,
		attributes: {
			[Zo]: MESSAGING_SYSTEM_VALUE_KAFKA,
			[Wo]: topic,
			[ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: message.key ? String(message.key) : void 0,
			[ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]: message.key && message.value === null ? true : void 0,
			[ATTR_MESSAGING_DESTINATION_PARTITION_ID]: message.partition !== void 0 ? String(message.partition) : void 0,
			[Qo]: "send",
			[Xo]: MESSAGING_OPERATION_TYPE_VALUE_SEND,
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: PRODUCER_ORIGIN
		}
	});
	message.headers = message.headers ?? {};
	const traceData = getTraceData$1({ span });
	if (traceData["sentry-trace"]) message.headers["sentry-trace"] = traceData["sentry-trace"];
	if (traceData.baggage) message.headers["baggage"] = traceData.baggage;
	return span;
}
function endSpansOnPromise(spans, sendPromise) {
	return Promise.resolve(sendPromise).catch((reason) => {
		let errorMessage;
		let errorType = ERROR_TYPE_VALUE_OTHER;
		if (typeof reason === "string" || reason === void 0) errorMessage = reason;
		else if (typeof reason === "object" && Object.prototype.hasOwnProperty.call(reason, "message")) {
			errorMessage = reason.message;
			errorType = reason.constructor.name;
		}
		spans.forEach((span) => {
			span.setAttribute(Gn, errorType);
			span.setStatus({
				code: 2,
				message: errorMessage
			});
		});
		throw reason;
	}).finally(() => {
		spans.forEach((span) => span.end());
	});
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/kafka/vendored/instrumentation.js
var PACKAGE_NAME$15 = "@sentry/instrumentation-kafkajs";
var KafkaJsInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$15, SDK_VERSION, config);
	}
	init() {
		const unpatch = (moduleExports) => {
			if (isWrapped(moduleExports?.Kafka?.prototype.producer)) this._unwrap(moduleExports.Kafka.prototype, "producer");
			if (isWrapped(moduleExports?.Kafka?.prototype.consumer)) this._unwrap(moduleExports.Kafka.prototype, "consumer");
		};
		return new InstrumentationNodeModuleDefinition("kafkajs", [">=0.3.0 <3"], (moduleExports) => {
			unpatch(moduleExports);
			this._wrap(moduleExports?.Kafka?.prototype, "producer", this._getProducerPatch());
			this._wrap(moduleExports?.Kafka?.prototype, "consumer", this._getConsumerPatch());
			return moduleExports;
		}, unpatch);
	}
	_getConsumerPatch() {
		const instrumentation = this;
		return (original) => {
			return function consumer(...args) {
				const newConsumer = original.apply(this, args);
				if (isWrapped(newConsumer.run)) instrumentation._unwrap(newConsumer, "run");
				instrumentation._wrap(newConsumer, "run", instrumentation._getConsumerRunPatch());
				return newConsumer;
			};
		};
	}
	_getProducerPatch() {
		const instrumentation = this;
		return (original) => {
			return function consumer(...args) {
				const newProducer = original.apply(this, args);
				if (isWrapped(newProducer.sendBatch)) instrumentation._unwrap(newProducer, "sendBatch");
				instrumentation._wrap(newProducer, "sendBatch", instrumentation._getSendBatchPatch());
				if (isWrapped(newProducer.send)) instrumentation._unwrap(newProducer, "send");
				instrumentation._wrap(newProducer, "send", instrumentation._getSendPatch());
				if (isWrapped(newProducer.transaction)) instrumentation._unwrap(newProducer, "transaction");
				instrumentation._wrap(newProducer, "transaction", instrumentation._getProducerTransactionPatch());
				return newProducer;
			};
		};
	}
	_getConsumerRunPatch() {
		const instrumentation = this;
		return (original) => {
			return function run(...args) {
				const config = args[0];
				if (config?.eachMessage) {
					if (isWrapped(config.eachMessage)) instrumentation._unwrap(config, "eachMessage");
					instrumentation._wrap(config, "eachMessage", instrumentation._getConsumerEachMessagePatch());
				}
				if (config?.eachBatch) {
					if (isWrapped(config.eachBatch)) instrumentation._unwrap(config, "eachBatch");
					instrumentation._wrap(config, "eachBatch", instrumentation._getConsumerEachBatchPatch());
				}
				return original.call(this, config);
			};
		};
	}
	_getConsumerEachMessagePatch() {
		return (original) => {
			return function eachMessage(...args) {
				const payload = args[0];
				return continueTrace$1({
					sentryTrace: getHeaderAsString$1(payload.message.headers, "sentry-trace"),
					baggage: getHeaderAsString$1(payload.message.headers, "baggage")
				}, () => {
					const span = startConsumerSpan({
						topic: payload.topic,
						message: payload.message,
						operationType: MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
						attributes: { [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.partition) }
					});
					const eachMessagePromise = withActiveSpan$1(span, () => {
						return original.apply(this, args);
					});
					return endSpansOnPromise([span], eachMessagePromise);
				});
			};
		};
	}
	_getConsumerEachBatchPatch() {
		return (original) => {
			return function eachBatch(...args) {
				const payload = args[0];
				const receivingSpan = startNewTrace$1(() => startConsumerSpan({
					topic: payload.batch.topic,
					message: void 0,
					operationType: MESSAGING_OPERATION_TYPE_VALUE_RECEIVE,
					attributes: {
						[Go]: payload.batch.messages.length,
						[ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.batch.partition)
					}
				}));
				return withActiveSpan$1(receivingSpan, () => {
					const spans = [receivingSpan];
					payload.batch.messages.forEach((message) => {
						spans.push(startConsumerSpan({
							topic: payload.batch.topic,
							message,
							operationType: MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
							links: getLinksFromHeaders(message.headers),
							attributes: { [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.batch.partition) }
						}));
					});
					return endSpansOnPromise(spans, original.apply(this, args));
				});
			};
		};
	}
	_getProducerTransactionPatch() {
		const instrumentation = this;
		return (original) => {
			return function transaction(...args) {
				const transactionSpan = startInactiveSpan$1({ name: "transaction" });
				const transactionPromise = original.apply(this, args);
				transactionPromise.then((transaction2) => {
					const originalSend = transaction2.send;
					transaction2.send = function send(...args2) {
						return withActiveSpan$1(transactionSpan, () => {
							return instrumentation._getSendPatch()(originalSend).apply(this, args2).catch((err) => {
								transactionSpan.setStatus({
									code: 2,
									message: err?.message
								});
								throw err;
							});
						});
					};
					const originalSendBatch = transaction2.sendBatch;
					transaction2.sendBatch = function sendBatch(...args2) {
						return withActiveSpan$1(transactionSpan, () => {
							return instrumentation._getSendBatchPatch()(originalSendBatch).apply(this, args2).catch((err) => {
								transactionSpan.setStatus({
									code: 2,
									message: err?.message
								});
								throw err;
							});
						});
					};
					const originalCommit = transaction2.commit;
					transaction2.commit = function commit(...args2) {
						const originCommitPromise = originalCommit.apply(this, args2).then(() => {
							transactionSpan.setStatus({ code: 1 });
						});
						return endSpansOnPromise([transactionSpan], originCommitPromise);
					};
					const originalAbort = transaction2.abort;
					transaction2.abort = function abort(...args2) {
						const originAbortPromise = originalAbort.apply(this, args2);
						return endSpansOnPromise([transactionSpan], originAbortPromise);
					};
				}).catch((err) => {
					transactionSpan.setStatus({
						code: 2,
						message: err?.message
					});
					transactionSpan.end();
				});
				return transactionPromise;
			};
		};
	}
	_getSendBatchPatch() {
		return (original) => {
			return function sendBatch(...args) {
				const messages = args[0].topicMessages || [];
				const spans = [];
				messages.forEach((topicMessage) => {
					topicMessage.messages.forEach((message) => {
						spans.push(startProducerSpan(topicMessage.topic, message));
					});
				});
				return endSpansOnPromise(spans, original.apply(this, args));
			};
		};
	}
	_getSendPatch() {
		return (original) => {
			return function send(...args) {
				const record = args[0];
				return endSpansOnPromise(record.messages.map((message) => {
					return startProducerSpan(record.topic, message);
				}), original.apply(this, args));
			};
		};
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/kafka/index.js
var INTEGRATION_NAME$17 = "Kafka";
var instrumentKafka = generateInstrumentOnce(INTEGRATION_NAME$17, () => new KafkaJsInstrumentation());
var _kafkaIntegration = (() => {
	return {
		name: INTEGRATION_NAME$17,
		setupOnce() {
			instrumentKafka();
		}
	};
});
var kafkaIntegration = defineIntegration(_kafkaIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/lrumemoizer/vendored/instrumentation.js
var PACKAGE_NAME$14 = "@sentry/instrumentation-lru-memoizer";
var LruMemoizerInstrumentation = class extends InstrumentationBase {
	constructor() {
		super(PACKAGE_NAME$14, SDK_VERSION, {});
	}
	init() {
		return [new InstrumentationNodeModuleDefinition("lru-memoizer", [">=1.3 <4"], (moduleExports) => {
			const asyncMemoizer = function(...args) {
				const origMemoizer = moduleExports.apply(this, args);
				return function(...memoizerArgs) {
					const origCallback = memoizerArgs.pop();
					const scope = getCurrentScope();
					const callbackWithContext = typeof origCallback === "function" ? function(...callbackArgs) {
						return withScope(scope, () => origCallback.apply(this, callbackArgs));
					} : origCallback;
					return origMemoizer.apply(this, [...memoizerArgs, callbackWithContext]);
				};
			};
			return Object.assign(asyncMemoizer, { sync: moduleExports.sync });
		}, void 0)];
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/lrumemoizer/index.js
var INTEGRATION_NAME$16 = "LruMemoizer";
var instrumentLruMemoizer = generateInstrumentOnce(INTEGRATION_NAME$16, () => new LruMemoizerInstrumentation());
var _lruMemoizerIntegration = (() => {
	return {
		name: INTEGRATION_NAME$16,
		setupOnce() {
			instrumentLruMemoizer();
		}
	};
});
var lruMemoizerIntegration = defineIntegration(_lruMemoizerIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongo/vendored/internal-types.js
var MongodbCommandType = /* @__PURE__ */ ((MongodbCommandType2) => {
	MongodbCommandType2["CREATE_INDEXES"] = "createIndexes";
	MongodbCommandType2["FIND_AND_MODIFY"] = "findAndModify";
	MongodbCommandType2["IS_MASTER"] = "isMaster";
	MongodbCommandType2["COUNT"] = "count";
	MongodbCommandType2["AGGREGATE"] = "aggregate";
	MongodbCommandType2["UNKNOWN"] = "unknown";
	return MongodbCommandType2;
})(MongodbCommandType || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongo/vendored/semconv.js
var ATTR_DB_CONNECTION_STRING$4 = "db.connection_string";
var ATTR_DB_MONGODB_COLLECTION$1 = "db.mongodb.collection";
var DB_SYSTEM_VALUE_MONGODB = "mongodb";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongo/vendored/utils.js
var ORIGIN$6 = "auto.db.otel.mongo";
function serializeDbStatement(commandObj) {
	return JSON.stringify(scrubStatement(commandObj));
}
function scrubStatement(value) {
	if (Array.isArray(value)) return value.map((element) => scrubStatement(element));
	if (isCommandObj(value)) return Object.entries(value).map(([key, element]) => [key, scrubStatement(element)]).reduce((prev, current) => {
		if (isCommandEntry(current)) prev[current[0]] = current[1];
		return prev;
	}, {});
	return "?";
}
function isCommandObj(value) {
	return isObjectLike(value) && !isBuffer(value);
}
function isBuffer(value) {
	return typeof Buffer !== "undefined" && Buffer.isBuffer(value);
}
function isCommandEntry(value) {
	return Array.isArray(value);
}
function getCommandType(command) {
	if (command.createIndexes !== void 0) return MongodbCommandType.CREATE_INDEXES;
	else if (command.findandmodify !== void 0) return MongodbCommandType.FIND_AND_MODIFY;
	else if (command.ismaster !== void 0) return MongodbCommandType.IS_MASTER;
	else if (command.count !== void 0) return MongodbCommandType.COUNT;
	else if (command.aggregate !== void 0) return MongodbCommandType.AGGREGATE;
	else return MongodbCommandType.UNKNOWN;
}
function getV4SpanAttributes(connectionCtx, ns, command, operation) {
	let host, port;
	if (connectionCtx) {
		const hostParts = typeof connectionCtx.address === "string" ? connectionCtx.address.split(":") : "";
		if (hostParts.length === 2) {
			host = hostParts[0];
			port = hostParts[1];
		}
	}
	let commandObj;
	if (command?.documents && command.documents[0]) commandObj = command.documents[0];
	else if (command?.cursors) commandObj = command.cursors;
	else commandObj = command;
	return getSpanAttributes(ns.db, ns.collection, host, port, commandObj, operation);
}
function getV3SpanAttributes(ns, topology, command, operation) {
	let host;
	let port;
	if (topology?.s) {
		host = topology.s.options?.host ?? topology.s.host;
		port = (topology.s.options?.port ?? topology.s.port)?.toString();
		if (host == null || port == null) {
			const address = topology.description?.address;
			if (address) {
				const addressSegments = address.split(":");
				host = addressSegments[0];
				port = addressSegments[1];
			}
		}
	}
	const [dbName, dbCollection] = ns.toString().split(".");
	const commandObj = command?.query ?? command?.q ?? command;
	return getSpanAttributes(dbName, dbCollection, host, port, commandObj, operation);
}
function getSpanAttributes(dbName, dbCollection, host, port, commandObj, operation) {
	const attributes = {
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$6,
		[Kt]: DB_SYSTEM_VALUE_MONGODB,
		[Nt]: dbName,
		[ATTR_DB_MONGODB_COLLECTION$1]: dbCollection,
		[Pt]: operation,
		[ATTR_DB_CONNECTION_STRING$4]: `mongodb://${host}:${port}/${dbName}`
	};
	if (host && port) {
		attributes[Il] = host;
		const portNumber = parseInt(port, 10);
		if (!isNaN(portNumber)) attributes[Ol] = portNumber;
	}
	if (commandObj) try {
		attributes[Ht] = serializeDbStatement(commandObj);
	} catch {}
	return attributes;
}
function startMongoSpan(attributes) {
	return startInactiveSpan$1({
		name: `mongodb.${attributes["db.operation"] || "command"}`,
		kind: SPAN_KIND.CLIENT,
		attributes
	});
}
function patchEnd(span, resultHandler) {
	const parentSpan = getActiveSpan$1();
	let spanEnded = false;
	return function patchedEnd(...args) {
		if (!spanEnded) {
			spanEnded = true;
			const error = args[0];
			if (span) {
				if (error instanceof Error) span.setStatus({
					code: 2,
					message: error.message
				});
				span.end();
			}
		}
		return withActiveSpan$1(parentSpan ?? null, () => resultHandler.apply(this, args));
	};
}
function shouldSkipInstrumentation$1() {
	return !getActiveSpan$1();
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongo/vendored/patches.js
function getV3PatchOperation(operationName) {
	return (original) => {
		return function patchedServerCommand(server, ns, ops, options, callback) {
			const resultHandler = typeof options === "function" ? options : callback;
			if (shouldSkipInstrumentation$1() || typeof resultHandler !== "function" || typeof ops !== "object") if (typeof options === "function") return original.call(this, server, ns, ops, options);
			else return original.call(this, server, ns, ops, options, callback);
			const patchedCallback = patchEnd(startMongoSpan(getV3SpanAttributes(ns, server, ops[0], operationName)), resultHandler);
			if (typeof options === "function") return original.call(this, server, ns, ops, patchedCallback);
			else return original.call(this, server, ns, ops, options, patchedCallback);
		};
	};
}
function getV3PatchCommand() {
	return (original) => {
		return function patchedServerCommand(server, ns, cmd, options, callback) {
			const resultHandler = typeof options === "function" ? options : callback;
			if (shouldSkipInstrumentation$1() || typeof resultHandler !== "function" || typeof cmd !== "object") if (typeof options === "function") return original.call(this, server, ns, cmd, options);
			else return original.call(this, server, ns, cmd, options, callback);
			const commandType = getCommandType(cmd);
			const patchedCallback = patchEnd(startMongoSpan(getV3SpanAttributes(ns, server, cmd, commandType === MongodbCommandType.UNKNOWN ? void 0 : commandType)), resultHandler);
			if (typeof options === "function") return original.call(this, server, ns, cmd, patchedCallback);
			else return original.call(this, server, ns, cmd, options, patchedCallback);
		};
	};
}
function getV4PatchCommandCallback() {
	return (original) => {
		return function patchedV4ServerCommand(ns, cmd, options, callback) {
			const resultHandler = callback;
			const commandType = Object.keys(cmd)[0];
			if (typeof cmd !== "object" || cmd.ismaster || cmd.hello) return original.call(this, ns, cmd, options, callback);
			let span = void 0;
			if (!shouldSkipInstrumentation$1()) span = startMongoSpan(getV4SpanAttributes(this, ns, cmd, commandType));
			const patchedCallback = patchEnd(span, resultHandler);
			return original.call(this, ns, cmd, options, patchedCallback);
		};
	};
}
function getV4PatchCommandPromise() {
	return (original) => {
		return function patchedV4ServerCommand(...args) {
			const [ns, cmd] = args;
			const commandType = Object.keys(cmd)[0];
			const resultHandler = () => void 0;
			if (typeof cmd !== "object" || cmd.ismaster || cmd.hello) return original.apply(this, args);
			let span = void 0;
			if (!shouldSkipInstrumentation$1()) span = startMongoSpan(getV4SpanAttributes(this, ns, cmd, commandType));
			const patchedCallback = patchEnd(span, resultHandler);
			const result = original.apply(this, args);
			result.then((res) => patchedCallback(null, res), (err) => patchedCallback(err));
			return result;
		};
	};
}
function getV3PatchFind() {
	return (original) => {
		return function patchedServerCommand(server, ns, cmd, cursorState, options, callback) {
			const resultHandler = typeof options === "function" ? options : callback;
			if (shouldSkipInstrumentation$1() || typeof resultHandler !== "function" || typeof cmd !== "object") if (typeof options === "function") return original.call(this, server, ns, cmd, cursorState, options);
			else return original.call(this, server, ns, cmd, cursorState, options, callback);
			const patchedCallback = patchEnd(startMongoSpan(getV3SpanAttributes(ns, server, cmd, "find")), resultHandler);
			if (typeof options === "function") return original.call(this, server, ns, cmd, cursorState, patchedCallback);
			else return original.call(this, server, ns, cmd, cursorState, options, patchedCallback);
		};
	};
}
function getV3PatchCursor() {
	return (original) => {
		return function patchedServerCommand(server, ns, cursorState, batchSize, options, callback) {
			const resultHandler = typeof options === "function" ? options : callback;
			if (shouldSkipInstrumentation$1() || typeof resultHandler !== "function") if (typeof options === "function") return original.call(this, server, ns, cursorState, batchSize, options);
			else return original.call(this, server, ns, cursorState, batchSize, options, callback);
			const patchedCallback = patchEnd(startMongoSpan(getV3SpanAttributes(ns, server, cursorState.cmd, "getMore")), resultHandler);
			if (typeof options === "function") return original.call(this, server, ns, cursorState, batchSize, patchedCallback);
			else return original.call(this, server, ns, cursorState, batchSize, options, patchedCallback);
		};
	};
}
function getV4ConnectionPoolCheckOut() {
	return (original) => {
		return function patchedCheckout(callback) {
			const parentSpan = getActiveSpan$1();
			return original.call(this, function(...args) {
				return withActiveSpan$1(parentSpan ?? null, () => callback.apply(this, args));
			});
		};
	};
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongo/vendored/instrumentation.js
var PACKAGE_NAME$13 = "@sentry/instrumentation-mongodb";
var MongoDBInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$13, SDK_VERSION, config);
	}
	init() {
		const { v3PatchConnection, v3UnpatchConnection } = this._getV3ConnectionPatches();
		const { v4PatchConnectionCallback, v4PatchConnectionPromise, v4UnpatchConnection } = this._getV4ConnectionPatches();
		const { v4PatchConnectionPool, v4UnpatchConnectionPool } = this._getV4ConnectionPoolPatches();
		return [new InstrumentationNodeModuleDefinition("mongodb", [">=3.3.0 <4"], void 0, void 0, [new InstrumentationNodeModuleFile("mongodb/lib/core/wireprotocol/index.js", [">=3.3.0 <4"], v3PatchConnection, v3UnpatchConnection)]), new InstrumentationNodeModuleDefinition("mongodb", [">=4.0.0 <8"], void 0, void 0, [
			new InstrumentationNodeModuleFile("mongodb/lib/cmap/connection.js", [">=4.0.0 <6.4"], v4PatchConnectionCallback, v4UnpatchConnection),
			new InstrumentationNodeModuleFile("mongodb/lib/cmap/connection.js", [">=6.4.0 <8"], v4PatchConnectionPromise, v4UnpatchConnection),
			new InstrumentationNodeModuleFile("mongodb/lib/cmap/connection_pool.js", [">=4.0.0 <6.4"], v4PatchConnectionPool, v4UnpatchConnectionPool)
		])];
	}
	_getV3ConnectionPatches() {
		return {
			v3PatchConnection: (moduleExports) => {
				if (isWrapped(moduleExports.insert)) this._unwrap(moduleExports, "insert");
				this._wrap(moduleExports, "insert", getV3PatchOperation("insert"));
				if (isWrapped(moduleExports.remove)) this._unwrap(moduleExports, "remove");
				this._wrap(moduleExports, "remove", getV3PatchOperation("remove"));
				if (isWrapped(moduleExports.update)) this._unwrap(moduleExports, "update");
				this._wrap(moduleExports, "update", getV3PatchOperation("update"));
				if (isWrapped(moduleExports.command)) this._unwrap(moduleExports, "command");
				this._wrap(moduleExports, "command", getV3PatchCommand());
				if (isWrapped(moduleExports.query)) this._unwrap(moduleExports, "query");
				this._wrap(moduleExports, "query", getV3PatchFind());
				if (isWrapped(moduleExports.getMore)) this._unwrap(moduleExports, "getMore");
				this._wrap(moduleExports, "getMore", getV3PatchCursor());
				return moduleExports;
			},
			v3UnpatchConnection: (moduleExports) => {
				if (moduleExports === void 0) return;
				this._unwrap(moduleExports, "insert");
				this._unwrap(moduleExports, "remove");
				this._unwrap(moduleExports, "update");
				this._unwrap(moduleExports, "command");
				this._unwrap(moduleExports, "query");
				this._unwrap(moduleExports, "getMore");
			}
		};
	}
	_getV4ConnectionPoolPatches() {
		return {
			v4PatchConnectionPool: (moduleExports) => {
				const poolPrototype = moduleExports.ConnectionPool.prototype;
				if (isWrapped(poolPrototype.checkOut)) this._unwrap(poolPrototype, "checkOut");
				this._wrap(poolPrototype, "checkOut", getV4ConnectionPoolCheckOut());
				return moduleExports;
			},
			v4UnpatchConnectionPool: (moduleExports) => {
				if (moduleExports === void 0) return;
				this._unwrap(moduleExports.ConnectionPool.prototype, "checkOut");
			}
		};
	}
	_getV4ConnectionPatches() {
		return {
			v4PatchConnectionCallback: (moduleExports) => {
				if (isWrapped(moduleExports.Connection.prototype.command)) this._unwrap(moduleExports.Connection.prototype, "command");
				this._wrap(moduleExports.Connection.prototype, "command", getV4PatchCommandCallback());
				return moduleExports;
			},
			v4PatchConnectionPromise: (moduleExports) => {
				if (isWrapped(moduleExports.Connection.prototype.command)) this._unwrap(moduleExports.Connection.prototype, "command");
				this._wrap(moduleExports.Connection.prototype, "command", getV4PatchCommandPromise());
				return moduleExports;
			},
			v4UnpatchConnection: (moduleExports) => {
				if (moduleExports === void 0) return;
				this._unwrap(moduleExports.Connection.prototype, "command");
			}
		};
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongo/index.js
var INTEGRATION_NAME$15 = "Mongo";
var instrumentMongo = generateInstrumentOnce(INTEGRATION_NAME$15, () => new MongoDBInstrumentation());
var _mongoIntegration = (() => {
	return {
		name: INTEGRATION_NAME$15,
		setupOnce() {
			instrumentMongo();
		}
	};
});
var mongoIntegration = defineIntegration(_mongoIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongoose/vendored/semconv.js
var ATTR_DB_MONGODB_COLLECTION = "db.mongodb.collection";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongoose/vendored/utils.js
function getAttributesFromCollection(collection) {
	return {
		[ATTR_DB_MONGODB_COLLECTION]: collection.name,
		[Nt]: collection.conn.name,
		[Qt]: collection.conn.user,
		[Il]: collection.conn.host,
		[Ol]: collection.conn.port
	};
}
function setErrorStatus(span, error) {
	span.setStatus({
		code: 2,
		message: `${error.message} ${error.code ? `
Mongoose Error Code: ${error.code}` : ""}`
	});
}
function handlePromiseResponse(execResponse, span) {
	if (!(execResponse instanceof Promise)) {
		span.end();
		return execResponse;
	}
	return execResponse.catch((err) => {
		setErrorStatus(span, err);
		throw err;
	}).finally(() => span.end());
}
function handleCallbackResponse(callback, exec, originalThis, span, args) {
	let callbackArgumentIndex = 0;
	if (args.length === 2) callbackArgumentIndex = 1;
	else if (args.length === 3) callbackArgumentIndex = 2;
	args[callbackArgumentIndex] = (err, response) => {
		if (err) setErrorStatus(span, err);
		span.end();
		return callback(err, response);
	};
	return exec.apply(originalThis, args);
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongoose/vendored/mongoose.js
var PACKAGE_NAME$12 = "@sentry/instrumentation-mongoose";
var ORIGIN$5 = "auto.db.otel.mongoose";
var contextCaptureFunctionsCommon = [
	"deleteOne",
	"deleteMany",
	"find",
	"findOne",
	"estimatedDocumentCount",
	"countDocuments",
	"distinct",
	"where",
	"$where",
	"findOneAndUpdate",
	"findOneAndDelete",
	"findOneAndReplace"
];
var contextCaptureFunctions6 = [
	"remove",
	"count",
	"findOneAndRemove",
	...contextCaptureFunctionsCommon
];
var contextCaptureFunctions7 = [
	"count",
	"findOneAndRemove",
	...contextCaptureFunctionsCommon
];
var contextCaptureFunctions8 = [...contextCaptureFunctionsCommon];
function getContextCaptureFunctions(moduleVersion) {
	if (!moduleVersion) return contextCaptureFunctionsCommon;
	else if (moduleVersion.startsWith("6.") || moduleVersion.startsWith("5.")) return contextCaptureFunctions6;
	else if (moduleVersion.startsWith("7.")) return contextCaptureFunctions7;
	else return contextCaptureFunctions8;
}
function instrumentRemove(moduleVersion) {
	return moduleVersion && (moduleVersion.startsWith("5.") || moduleVersion.startsWith("6.")) || false;
}
function needsDocumentMethodPatch(moduleVersion) {
	if (!moduleVersion || !moduleVersion.startsWith("8.")) return false;
	return parseInt(moduleVersion.split(".")[1], 10) >= 21;
}
var _STORED_PARENT_SPAN = /* @__PURE__ */ Symbol("stored-parent-span");
var _ALREADY_INSTRUMENTED = /* @__PURE__ */ Symbol("already-instrumented");
var MongooseInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$12, SDK_VERSION, config);
	}
	init() {
		return new InstrumentationNodeModuleDefinition("mongoose", [">=5.9.7 <9.7.0"], this.patch.bind(this), this.unpatch.bind(this));
	}
	patch(module, moduleVersion) {
		const moduleExports = module[Symbol.toStringTag] === "Module" && module.default ? module.default : module;
		this._wrap(moduleExports.Model.prototype, "save", this.patchOnModelMethods("save"));
		moduleExports.Model.prototype.$save = moduleExports.Model.prototype.save;
		if (instrumentRemove(moduleVersion)) this._wrap(moduleExports.Model.prototype, "remove", this.patchOnModelMethods("remove"));
		if (needsDocumentMethodPatch(moduleVersion)) {
			this._wrap(moduleExports.Model.prototype, "updateOne", this._patchDocumentUpdateMethods("updateOne"));
			this._wrap(moduleExports.Model.prototype, "deleteOne", this._patchDocumentUpdateMethods("deleteOne"));
		}
		this._wrap(moduleExports.Query.prototype, "exec", this.patchQueryExec());
		this._wrap(moduleExports.Aggregate.prototype, "exec", this.patchAggregateExec());
		getContextCaptureFunctions(moduleVersion).forEach((funcName) => {
			this._wrap(moduleExports.Query.prototype, funcName, this.patchAndCaptureSpanContext(funcName));
		});
		this._wrap(moduleExports.Model, "aggregate", this.patchModelAggregate());
		this._wrap(moduleExports.Model, "insertMany", this.patchModelStatic("insertMany"));
		this._wrap(moduleExports.Model, "bulkWrite", this.patchModelStatic("bulkWrite"));
		return moduleExports;
	}
	unpatch(module, moduleVersion) {
		const moduleExports = module[Symbol.toStringTag] === "Module" && module.default ? module.default : module;
		const contextCaptureFunctions = getContextCaptureFunctions(moduleVersion);
		this._unwrap(moduleExports.Model.prototype, "save");
		moduleExports.Model.prototype.$save = moduleExports.Model.prototype.save;
		if (instrumentRemove(moduleVersion)) this._unwrap(moduleExports.Model.prototype, "remove");
		if (needsDocumentMethodPatch(moduleVersion)) {
			this._unwrap(moduleExports.Model.prototype, "updateOne");
			this._unwrap(moduleExports.Model.prototype, "deleteOne");
		}
		this._unwrap(moduleExports.Query.prototype, "exec");
		this._unwrap(moduleExports.Aggregate.prototype, "exec");
		contextCaptureFunctions.forEach((funcName) => {
			this._unwrap(moduleExports.Query.prototype, funcName);
		});
		this._unwrap(moduleExports.Model, "aggregate");
		this._unwrap(moduleExports.Model, "insertMany");
		this._unwrap(moduleExports.Model, "bulkWrite");
	}
	patchAggregateExec() {
		const self = this;
		return (originalAggregate) => {
			return function exec(callback) {
				const parentSpan = this[_STORED_PARENT_SPAN];
				const span = self._startSpan(this._model.collection, this._model?.modelName, "aggregate", parentSpan);
				return self._handleResponse(span, originalAggregate, this, arguments, callback);
			};
		};
	}
	patchQueryExec() {
		const self = this;
		return (originalExec) => {
			return function exec(callback) {
				if (this[_ALREADY_INSTRUMENTED]) return originalExec.apply(this, arguments);
				const parentSpan = this[_STORED_PARENT_SPAN];
				const span = self._startSpan(this.mongooseCollection, this.model.modelName, this.op, parentSpan);
				return self._handleResponse(span, originalExec, this, arguments, callback);
			};
		};
	}
	patchOnModelMethods(op) {
		const self = this;
		return (originalOnModelFunction) => {
			return function method(options, callback) {
				const span = self._startSpan(this.constructor.collection, this.constructor.modelName, op);
				if (options instanceof Function) callback = options;
				return self._handleResponse(span, originalOnModelFunction, this, arguments, callback);
			};
		};
	}
	_patchDocumentUpdateMethods(op) {
		const self = this;
		return (originalMethod) => {
			return function method(update, options, callback) {
				let actualCallback = callback;
				if (typeof update === "function") actualCallback = update;
				else if (typeof options === "function") actualCallback = options;
				const span = self._startSpan(this.constructor.collection, this.constructor.modelName, op);
				const result = self._handleResponse(span, originalMethod, this, arguments, actualCallback);
				if (result && typeof result === "object") result[_ALREADY_INSTRUMENTED] = true;
				return result;
			};
		};
	}
	patchModelStatic(op) {
		const self = this;
		return (original) => {
			return function patchedStatic(docsOrOps, options, callback) {
				if (typeof options === "function") callback = options;
				const span = self._startSpan(this.collection, this.modelName, op);
				return self._handleResponse(span, original, this, arguments, callback);
			};
		};
	}
	patchModelAggregate() {
		return (original) => {
			return function captureSpanContext() {
				const currentSpan = getActiveSpan$1();
				const aggregate = original.apply(this, arguments);
				if (aggregate) aggregate[_STORED_PARENT_SPAN] = currentSpan;
				return aggregate;
			};
		};
	}
	patchAndCaptureSpanContext(_funcName) {
		return (original) => {
			return function captureSpanContext() {
				this[_STORED_PARENT_SPAN] = getActiveSpan$1();
				return original.apply(this, arguments);
			};
		};
	}
	_startSpan(collection, modelName, operation, parentSpan) {
		const attributes = {
			...getAttributesFromCollection(collection),
			[Pt]: operation,
			[Kt]: "mongoose",
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$5
		};
		return startInactiveSpan$1({
			name: `mongoose.${modelName}.${operation}`,
			kind: SPAN_KIND.CLIENT,
			attributes,
			parentSpan
		});
	}
	_handleResponse(span, exec, originalThis, args, callback) {
		return withActiveSpan$1(span, () => {
			if (callback instanceof Function) return handleCallbackResponse(callback, exec, originalThis, span, args);
			else return handlePromiseResponse(exec.apply(originalThis, args), span);
		});
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mongoose/index.js
var INTEGRATION_NAME$14 = "Mongoose";
var instrumentMongoose = generateInstrumentOnce(INTEGRATION_NAME$14, () => new MongooseInstrumentation());
var _mongooseIntegration = (() => {
	return extendIntegration(mongooseIntegration$1(), {
		name: INTEGRATION_NAME$14,
		setupOnce() {
			instrumentMongoose();
		}
	});
});
var mongooseIntegration = defineIntegration(_mongooseIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mysql/vendored/semconv.js
var ATTR_DB_CONNECTION_STRING$3 = "db.connection_string";
var DB_SYSTEM_VALUE_MYSQL$1 = "mysql";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mysql/vendored/utils.js
function getConfig$1(config) {
	const { host, port, database, user } = config?.connectionConfig || config || {};
	return {
		host,
		port,
		database,
		user
	};
}
function getJDBCString$1(host, port, database) {
	let jdbcString = `jdbc:mysql://${host || "localhost"}`;
	if (typeof port === "number") jdbcString += `:${port}`;
	if (typeof database === "string") jdbcString += `/${database}`;
	return jdbcString;
}
function getDbQueryText(query) {
	if (typeof query === "string") return query;
	else return query.sql;
}
function getSpanName$2(query) {
	const rawQuery = typeof query === "object" ? query.sql : query;
	const firstSpace = rawQuery?.indexOf(" ");
	if (typeof firstSpace === "number" && firstSpace !== -1) return rawQuery?.substring(0, firstSpace);
	return rawQuery;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mysql/vendored/instrumentation.js
var PACKAGE_NAME$11 = "@sentry/instrumentation-mysql";
var ORIGIN$4 = "auto.db.otel.mysql";
var MySQLInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$11, SDK_VERSION, config);
	}
	init() {
		return [new InstrumentationNodeModuleDefinition("mysql", [">=2.0.0 <3"], (moduleExports) => {
			if (isWrapped(moduleExports.createConnection)) this._unwrap(moduleExports, "createConnection");
			this._wrap(moduleExports, "createConnection", this._patchCreateConnection());
			if (isWrapped(moduleExports.createPool)) this._unwrap(moduleExports, "createPool");
			this._wrap(moduleExports, "createPool", this._patchCreatePool());
			if (isWrapped(moduleExports.createPoolCluster)) this._unwrap(moduleExports, "createPoolCluster");
			this._wrap(moduleExports, "createPoolCluster", this._patchCreatePoolCluster());
			return moduleExports;
		}, (moduleExports) => {
			if (moduleExports === void 0) return;
			this._unwrap(moduleExports, "createConnection");
			this._unwrap(moduleExports, "createPool");
			this._unwrap(moduleExports, "createPoolCluster");
		})];
	}
	_patchCreateConnection() {
		return (originalCreateConnection) => {
			const thisPlugin = this;
			return function createConnection(_connectionUri) {
				const originalResult = originalCreateConnection(...arguments);
				thisPlugin._wrap(originalResult, "query", thisPlugin._patchQuery(originalResult));
				return originalResult;
			};
		};
	}
	_patchCreatePool() {
		return (originalCreatePool) => {
			const thisPlugin = this;
			return function createPool(_config) {
				const pool = originalCreatePool(...arguments);
				thisPlugin._wrap(pool, "query", thisPlugin._patchQuery(pool));
				thisPlugin._wrap(pool, "getConnection", thisPlugin._patchGetConnection(pool));
				return pool;
			};
		};
	}
	_patchCreatePoolCluster() {
		return (originalCreatePoolCluster) => {
			const thisPlugin = this;
			return function createPool(_config) {
				const cluster = originalCreatePoolCluster(...arguments);
				thisPlugin._wrap(cluster, "getConnection", thisPlugin._patchGetConnection(cluster));
				return cluster;
			};
		};
	}
	_patchGetConnection(pool) {
		return (originalGetConnection) => {
			const thisPlugin = this;
			return function getConnection(arg1, arg2, arg3) {
				if (!thisPlugin["_enabled"]) {
					thisPlugin._unwrap(pool, "getConnection");
					return originalGetConnection.apply(pool, arguments);
				}
				if (arguments.length === 1 && typeof arg1 === "function") {
					const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg1);
					return originalGetConnection.call(pool, patchFn);
				}
				if (arguments.length === 2 && typeof arg2 === "function") {
					const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg2);
					return originalGetConnection.call(pool, arg1, patchFn);
				}
				if (arguments.length === 3 && typeof arg3 === "function") {
					const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg3);
					return originalGetConnection.call(pool, arg1, arg2, patchFn);
				}
				return originalGetConnection.apply(pool, arguments);
			};
		};
	}
	_getConnectionCallbackPatchFn(cb) {
		const thisPlugin = this;
		const scope = getCurrentScope();
		return function(err, connection) {
			if (connection) {
				if (!isWrapped(connection.query)) thisPlugin._wrap(connection, "query", thisPlugin._patchQuery(connection));
			}
			if (typeof cb === "function") withScope(scope, () => cb.call(this, err, connection));
		};
	}
	_patchQuery(connection) {
		return (originalQuery) => {
			const thisPlugin = this;
			return function query(query, _valuesOrCallback, _callback) {
				if (!thisPlugin["_enabled"]) {
					thisPlugin._unwrap(connection, "query");
					return originalQuery.apply(connection, arguments);
				}
				const { host, port, database, user } = getConfig$1(connection.config);
				const portNumber = parseInt(String(port), 10);
				const attributes = {
					[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$4,
					[Kt]: DB_SYSTEM_VALUE_MYSQL$1,
					[ATTR_DB_CONNECTION_STRING$3]: getJDBCString$1(host, port, database),
					[Nt]: database,
					[Qt]: user,
					[Ht]: getDbQueryText(query),
					[Il]: host
				};
				if (!isNaN(portNumber)) attributes[Ol] = portNumber;
				const span = startInactiveSpan$1({
					name: getSpanName$2(query),
					kind: SPAN_KIND.CLIENT,
					attributes
				});
				const cbIndex = Array.from(arguments).findIndex((arg) => typeof arg === "function");
				const scope = getCurrentScope();
				if (cbIndex === -1) {
					const streamableQuery = withActiveSpan$1(span, () => {
						return originalQuery.apply(connection, arguments);
					});
					bindScopeToEmitter(streamableQuery, scope);
					return streamableQuery.on("error", (err) => {
						span.setStatus({
							code: 2,
							message: err.message
						});
					}).on("end", () => {
						span.end();
					});
				} else {
					thisPlugin._wrap(arguments, cbIndex, thisPlugin._patchCallbackQuery(span, scope));
					return withActiveSpan$1(span, () => {
						return originalQuery.apply(connection, arguments);
					});
				}
			};
		};
	}
	_patchCallbackQuery(span, scope) {
		return (originalCallback) => {
			return function(err, _results, _fields) {
				if (err) span.setStatus({
					code: 2,
					message: err.message
				});
				span.end();
				return withScope(scope, () => originalCallback(...arguments));
			};
		};
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mysql/index.js
var INTEGRATION_NAME$13 = "Mysql";
var instrumentMysql = generateInstrumentOnce(INTEGRATION_NAME$13, () => new MySQLInstrumentation({}));
var _mysqlIntegration = (() => {
	return {
		name: INTEGRATION_NAME$13,
		setupOnce() {
			instrumentMysql();
		}
	};
});
var mysqlIntegration = defineIntegration(_mysqlIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mysql2/vendored/semconv.js
var ATTR_DB_CONNECTION_STRING$2 = "db.connection_string";
var DB_SYSTEM_VALUE_MYSQL = "mysql";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mysql2/vendored/utils.js
function getConnectionAttributes(config) {
	const { host, port, database, user } = getConfig(config);
	const attrs = {
		[ATTR_DB_CONNECTION_STRING$2]: getJDBCString(host, port, database),
		[Nt]: database,
		[Qt]: user,
		[Il]: host
	};
	const portNumber = parseInt(port, 10);
	if (!isNaN(portNumber)) attrs[Ol] = portNumber;
	return attrs;
}
function getConfig(config) {
	const { host, port, database, user } = config?.connectionConfig || config || {};
	return {
		host,
		port,
		database,
		user
	};
}
function getJDBCString(host, port, database) {
	let jdbcString = `jdbc:mysql://${host || "localhost"}`;
	if (typeof port === "number") jdbcString += `:${port}`;
	if (typeof database === "string") jdbcString += `/${database}`;
	return jdbcString;
}
function getQueryText(query, format, values) {
	const [querySql, queryValues] = typeof query === "string" ? [query, values] : [query.sql, hasValues(query) ? values || query.values : values];
	try {
		if (format && queryValues) return format(querySql, queryValues);
		else return querySql;
	} catch {
		return "Could not determine the query due to an error in formatting";
	}
}
function hasValues(obj) {
	return "values" in obj;
}
function getSpanName$1(query) {
	const rawQuery = typeof query === "object" ? query.sql : query;
	const firstSpace = rawQuery?.indexOf(" ");
	if (typeof firstSpace === "number" && firstSpace !== -1) return rawQuery?.substring(0, firstSpace);
	return rawQuery;
}
var once$1 = (fn) => {
	let called = false;
	return (...args) => {
		if (called) return;
		called = true;
		return fn(...args);
	};
};
function getConnectionPrototypeToInstrument(connection) {
	const connectionPrototype = connection.prototype;
	const basePrototype = Object.getPrototypeOf(connectionPrototype);
	if (typeof basePrototype?.query === "function" && typeof basePrototype?.execute === "function") return basePrototype;
	return connectionPrototype;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mysql2/vendored/instrumentation.js
var PACKAGE_NAME$10 = "@sentry/instrumentation-mysql2";
var ORIGIN$3 = "auto.db.otel.mysql2";
var supportedVersions$6 = [">=1.4.2 <3.20.0"];
var MySQL2Instrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$10, SDK_VERSION, config);
	}
	init() {
		let format;
		function setFormatFunction(moduleExports) {
			if (!format && moduleExports.format) format = moduleExports.format;
		}
		const patch = (ConnectionPrototype) => {
			if (isWrapped(ConnectionPrototype.query)) this._unwrap(ConnectionPrototype, "query");
			this._wrap(ConnectionPrototype, "query", this._patchQuery(format));
			if (isWrapped(ConnectionPrototype.execute)) this._unwrap(ConnectionPrototype, "execute");
			this._wrap(ConnectionPrototype, "execute", this._patchQuery(format));
		};
		const unpatch = (ConnectionPrototype) => {
			this._unwrap(ConnectionPrototype, "query");
			this._unwrap(ConnectionPrototype, "execute");
		};
		return [new InstrumentationNodeModuleDefinition("mysql2", supportedVersions$6, (moduleExports) => {
			setFormatFunction(moduleExports);
			return moduleExports;
		}, () => {}, [new InstrumentationNodeModuleFile("mysql2/promise.js", supportedVersions$6, (moduleExports) => {
			setFormatFunction(moduleExports);
			return moduleExports;
		}, () => {}), new InstrumentationNodeModuleFile("mysql2/lib/connection.js", supportedVersions$6, (moduleExports) => {
			patch(getConnectionPrototypeToInstrument(moduleExports));
			return moduleExports;
		}, (moduleExports) => {
			if (moduleExports === void 0) return;
			unpatch(getConnectionPrototypeToInstrument(moduleExports));
		})])];
	}
	_patchQuery(format) {
		const thisPlugin = this;
		return (originalQuery) => {
			return function query(query, _valuesOrCallback, _callback) {
				let values;
				if (Array.isArray(_valuesOrCallback)) values = _valuesOrCallback;
				else if (arguments[2]) values = [_valuesOrCallback];
				const attributes = {
					...getConnectionAttributes(this.config),
					[Kt]: DB_SYSTEM_VALUE_MYSQL,
					[Ht]: getQueryText(query, format, values),
					[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$3
				};
				const span = startInactiveSpan$1({
					name: getSpanName$1(query),
					kind: SPAN_KIND.CLIENT,
					attributes
				});
				const endSpan = once$1((err) => {
					if (err) span.setStatus({
						code: 2,
						message: err.message
					});
					span.end();
				});
				if (arguments.length === 1) {
					if (typeof query.onResult === "function") thisPlugin._wrap(query, "onResult", thisPlugin._patchCallbackQuery(endSpan));
					const streamableQuery = originalQuery.apply(this, arguments);
					streamableQuery.once("error", (err) => {
						endSpan(err);
					}).once("result", () => {
						endSpan();
					});
					return streamableQuery;
				}
				if (typeof arguments[1] === "function") thisPlugin._wrap(arguments, 1, thisPlugin._patchCallbackQuery(endSpan));
				else if (typeof arguments[2] === "function") thisPlugin._wrap(arguments, 2, thisPlugin._patchCallbackQuery(endSpan));
				return originalQuery.apply(this, arguments);
			};
		};
	}
	_patchCallbackQuery(endSpan) {
		return (originalCallback) => {
			return function(...args) {
				endSpan(args[0]);
				return originalCallback(...args);
			};
		};
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/mysql2/index.js
var INTEGRATION_NAME$12 = "Mysql2";
var instrumentMysql2 = generateInstrumentOnce(INTEGRATION_NAME$12, () => new MySQL2Instrumentation());
var _mysql2Integration = (() => {
	return extendIntegration(mysql2Integration$1(), {
		name: INTEGRATION_NAME$12,
		setupOnce() {
			instrumentMysql2();
		}
	});
});
var mysql2Integration = defineIntegration(_mysql2Integration);
//#endregion
//#region node_modules/@sentry/node/build/esm/sdk/diagnosticsChannelInjection.js
var loader;
var cached;
function isDiagnosticsChannelInjectionEnabled() {
	return !!loader;
}
function resolveDiagnosticsChannelInjection() {
	if (!loader) return;
	return cached ?? (cached = loader());
}
//#endregion
//#region node_modules/@sentry/node/build/esm/utils/redisCache.js
var SINGLE_ARG_COMMANDS = [
	"get",
	"set",
	"setex"
];
var GET_COMMANDS = ["get", "mget"];
var SET_COMMANDS = ["set", "setex"];
function isInCommands(redisCommands, command) {
	return redisCommands.includes(command.toLowerCase());
}
function getCacheOperation(command) {
	if (isInCommands(GET_COMMANDS, command)) return "cache.get";
	else if (isInCommands(SET_COMMANDS, command)) return "cache.put";
	else return;
}
function keyHasPrefix(key, prefixes) {
	return prefixes.some((prefix) => key.startsWith(prefix));
}
function getCacheKeySafely(redisCommand, cmdArgs) {
	try {
		if (cmdArgs.length === 0) return;
		const processArg = (arg) => {
			if (typeof arg === "string" || typeof arg === "number" || Buffer.isBuffer(arg)) return [arg.toString()];
			else if (Array.isArray(arg)) return flatten(arg.map((arg2) => processArg(arg2)));
			else return ["<unknown>"];
		};
		const firstArg = cmdArgs[0];
		if (isInCommands(SINGLE_ARG_COMMANDS, redisCommand) && firstArg != null) return processArg(firstArg);
		return flatten(cmdArgs.map((arg) => processArg(arg)));
	} catch {
		return;
	}
}
function shouldConsiderForCache(redisCommand, keys, prefixes) {
	if (!getCacheOperation(redisCommand)) return false;
	for (const key of keys) if (keyHasPrefix(key, prefixes)) return true;
	return false;
}
function calculateCacheItemSize(response) {
	const getSize = (value) => {
		try {
			if (Buffer.isBuffer(value)) return value.byteLength;
			else if (typeof value === "string") return value.length;
			else if (typeof value === "number") return value.toString().length;
			else if (value === null || value === void 0) return 0;
			return JSON.stringify(value).length;
		} catch {
			return;
		}
	};
	return Array.isArray(response) ? response.reduce((acc, curr) => {
		const size = getSize(curr);
		return typeof size === "number" ? acc !== void 0 ? acc + size : size : acc;
	}, 0) : getSize(response);
}
function flatten(input) {
	const result = [];
	const flattenHelper = (input2) => {
		input2.forEach((el) => {
			if (Array.isArray(el)) flattenHelper(el);
			else result.push(el);
		});
	};
	flattenHelper(input);
	return result;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/redis/cache.js
var _redisOptions = {};
function setRedisOptions(options) {
	_redisOptions = options;
}
var cacheResponseHook = (span, redisCommand, cmdArgs, response) => {
	const safeKey = getCacheKeySafely(redisCommand, cmdArgs);
	const cacheOperation = getCacheOperation(redisCommand);
	if (!safeKey || !cacheOperation || !_redisOptions.cachePrefixes || !shouldConsiderForCache(redisCommand, safeKey, _redisOptions.cachePrefixes)) return;
	const spanData = spanToJSON(span).data;
	const networkPeerAddress = spanData["net.peer.name"] ?? spanData["server.address"];
	const networkPeerPort = spanData["net.peer.port"] ?? spanData["server.port"];
	if (networkPeerPort && networkPeerAddress) span.setAttributes({
		"network.peer.address": networkPeerAddress,
		"network.peer.port": networkPeerPort
	});
	const cacheItemSize = calculateCacheItemSize(response);
	if (cacheItemSize) span.setAttribute(SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE, cacheItemSize);
	if (isInCommands(GET_COMMANDS, redisCommand) && cacheItemSize !== void 0) span.setAttribute(SEMANTIC_ATTRIBUTE_CACHE_HIT, cacheItemSize > 0);
	span.setAttributes({
		[SEMANTIC_ATTRIBUTE_SENTRY_OP]: cacheOperation,
		[SEMANTIC_ATTRIBUTE_CACHE_KEY]: safeKey
	});
	const spanDescription = safeKey.join(", ");
	span.updateName(_redisOptions.maxCacheKeyLength ? truncate(spanDescription, _redisOptions.maxCacheKeyLength) : spanDescription);
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/redis/vendored/semconv.js
var ATTR_DB_CONNECTION_STRING$1 = "db.connection_string";
var DB_SYSTEM_VALUE_REDIS = "redis";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/redis/vendored/ioredis-instrumentation.js
var PACKAGE_NAME$9 = "@sentry/instrumentation-ioredis";
var ORIGIN$2 = "auto.db.otel.redis";
var SUPPORTED_VERSIONS$2 = [">=2.0.0 <5.11.0"];
function endSpan$1(span, err) {
	if (err) span.setStatus({
		code: 2,
		message: err.message
	});
	span.end();
}
var IORedisInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$9, SDK_VERSION, config);
	}
	init() {
		return [new InstrumentationNodeModuleDefinition("ioredis", SUPPORTED_VERSIONS$2, (module) => {
			const moduleExports = module[Symbol.toStringTag] === "Module" && module.default ? module.default : module;
			if (isWrapped(moduleExports.prototype.sendCommand)) this._unwrap(moduleExports.prototype, "sendCommand");
			this._wrap(moduleExports.prototype, "sendCommand", this._patchSendCommand());
			if (isWrapped(moduleExports.prototype.connect)) this._unwrap(moduleExports.prototype, "connect");
			this._wrap(moduleExports.prototype, "connect", this._patchConnection());
			return module;
		}, (module) => {
			if (module === void 0) return;
			const moduleExports = module[Symbol.toStringTag] === "Module" && module.default ? module.default : module;
			this._unwrap(moduleExports.prototype, "sendCommand");
			this._unwrap(moduleExports.prototype, "connect");
		})];
	}
	_patchSendCommand() {
		const instrumentation = this;
		return (original) => {
			return function(...args) {
				const cmd = args[0];
				if (args.length < 1 || typeof cmd !== "object" || !getActiveSpan$1()) return original.apply(this, args);
				const { host, port } = this.options;
				const attributes = {
					[Kt]: DB_SYSTEM_VALUE_REDIS,
					[Ht]: defaultDbStatementSerializer(cmd.name, cmd.args),
					[ATTR_DB_CONNECTION_STRING$1]: `redis://${host}:${port}`,
					[Il]: host,
					[Ol]: port,
					[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$2
				};
				const span = startInactiveSpan$1({
					name: cmd.name,
					kind: SPAN_KIND.CLIENT,
					attributes
				});
				try {
					const result = original.apply(this, args);
					const origResolve = cmd.resolve;
					cmd.resolve = function(response) {
						instrumentation._callResponseHook(span, cmd, response);
						endSpan$1(span, null);
						origResolve(response);
					};
					const origReject = cmd.reject;
					cmd.reject = function(err) {
						endSpan$1(span, err);
						origReject(err);
					};
					return result;
				} catch (error) {
					endSpan$1(span, error);
					throw error;
				}
			};
		};
	}
	_patchConnection() {
		return (original) => {
			return function(...args) {
				if (!getActiveSpan$1()) return original.apply(this, args);
				const { host, port } = this.options;
				const attributes = {
					[Kt]: DB_SYSTEM_VALUE_REDIS,
					[Ht]: "connect",
					[ATTR_DB_CONNECTION_STRING$1]: `redis://${host}:${port}`,
					[Il]: host,
					[Ol]: port,
					[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$2
				};
				const span = startInactiveSpan$1({
					name: "connect",
					kind: SPAN_KIND.CLIENT,
					attributes
				});
				try {
					const result = original.apply(this, args);
					if (result instanceof Promise) return result.then((value) => {
						endSpan$1(span, null);
						return value;
					}, (error) => {
						endSpan$1(span, error);
						return Promise.reject(error);
					});
					endSpan$1(span, null);
					return result;
				} catch (error) {
					endSpan$1(span, error);
					throw error;
				}
			};
		};
	}
	_callResponseHook(span, cmd, response) {
		const { responseHook } = this.getConfig();
		if (!responseHook) return;
		try {
			responseHook(span, cmd.name, cmd.args, response);
		} catch {}
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/redis/vendored/redis-instrumentation.js
var PACKAGE_NAME$8 = "@sentry/instrumentation-redis";
var ORIGIN$1 = "auto.db.otel.redis";
var OTEL_OPEN_SPANS = /* @__PURE__ */ Symbol("opentelemetry.instrumentation.redis.open_spans");
var MULTI_COMMAND_OPTIONS = /* @__PURE__ */ Symbol("opentelemetry.instrumentation.redis.multi_command_options");
function endSpan(span, err) {
	if (err) span.setStatus({
		code: 2,
		message: err.message
	});
	span.end();
}
function runResponseHook(responseHook, span, commandName, commandArgs, response) {
	if (!responseHook) return;
	try {
		responseHook(span, commandName, commandArgs, response);
	} catch {}
}
function removeCredentialsFromDBConnectionStringAttribute(url) {
	if (typeof url !== "string" || !url) return;
	try {
		const u = new URL(url);
		u.searchParams.delete("user_pwd");
		u.username = "";
		u.password = "";
		return u.href;
	} catch (err) {
		DEBUG_BUILD$1 && debug.error("failed to sanitize redis connection url", err);
	}
}
function getClientAttributes(options) {
	return {
		[Kt]: DB_SYSTEM_VALUE_REDIS,
		[Il]: options?.socket?.host,
		[Ol]: options?.socket?.port,
		[ATTR_DB_CONNECTION_STRING$1]: removeCredentialsFromDBConnectionStringAttribute(options?.url),
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$1
	};
}
var _RedisInstrumentationV2_V3 = class _RedisInstrumentationV2_V3 extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$8, SDK_VERSION, config);
	}
	init() {
		return [new InstrumentationNodeModuleDefinition("redis", [">=2.6.0 <4"], (moduleExports) => {
			if (isWrapped(moduleExports.RedisClient.prototype["internal_send_command"])) this._unwrap(moduleExports.RedisClient.prototype, "internal_send_command");
			this._wrap(moduleExports.RedisClient.prototype, "internal_send_command", this._getPatchInternalSendCommand());
			return moduleExports;
		}, (moduleExports) => {
			if (moduleExports === void 0) return;
			this._unwrap(moduleExports.RedisClient.prototype, "internal_send_command");
		})];
	}
	_getPatchInternalSendCommand() {
		const instrumentation = this;
		return function internal_send_command(original) {
			return function internal_send_command_trace(cmd) {
				if (arguments.length !== 1 || typeof cmd !== "object") return original.apply(this, arguments);
				const attributes = {
					[Kt]: DB_SYSTEM_VALUE_REDIS,
					[Ht]: defaultDbStatementSerializer(cmd.command, cmd.args),
					[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN$1
				};
				if (this.connection_options) {
					attributes[Il] = this.connection_options.host;
					attributes[Ol] = this.connection_options.port;
				}
				if (this.address) attributes[ATTR_DB_CONNECTION_STRING$1] = `redis://${this.address}`;
				const span = startInactiveSpan$1({
					name: `${_RedisInstrumentationV2_V3.COMPONENT}-${cmd.command}`,
					kind: SPAN_KIND.CLIENT,
					attributes
				});
				const originalCallback = arguments[0].callback;
				if (originalCallback) {
					const parentSpan = getActiveSpan$1();
					arguments[0].callback = function callback(err, reply) {
						runResponseHook(instrumentation.getConfig().responseHook, span, cmd.command, cmd.args, reply);
						endSpan(span, err);
						return withActiveSpan$1(parentSpan ?? null, () => originalCallback.apply(this, arguments));
					};
				}
				try {
					return original.apply(this, arguments);
				} catch (rethrow) {
					endSpan(span, rethrow);
					throw rethrow;
				}
			};
		};
	}
};
_RedisInstrumentationV2_V3.COMPONENT = "redis";
var RedisInstrumentationV2_V3 = _RedisInstrumentationV2_V3;
var _RedisInstrumentationV4_V5 = class _RedisInstrumentationV4_V5 extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$8, SDK_VERSION, config);
	}
	init() {
		return [this._getInstrumentationNodeModuleDefinition("@redis/client"), this._getInstrumentationNodeModuleDefinition("@node-redis/client")];
	}
	_getInstrumentationNodeModuleDefinition(basePackageName) {
		return new InstrumentationNodeModuleDefinition(basePackageName, ["^1.0.0", ">=5.0.0 <5.12.0"], (moduleExports) => moduleExports, () => {}, [
			new InstrumentationNodeModuleFile(`${basePackageName}/dist/lib/commander.js`, ["^1.0.0"], (moduleExports, moduleVersion) => {
				const transformCommandArguments = moduleExports.transformCommandArguments;
				if (!transformCommandArguments) {
					DEBUG_BUILD$1 && debug.error("internal instrumentation error, missing transformCommandArguments function");
					return moduleExports;
				}
				const functionToPatch = moduleVersion?.startsWith("1.0.") ? "extendWithCommands" : "attachCommands";
				if (isWrapped(moduleExports?.[functionToPatch])) this._unwrap(moduleExports, functionToPatch);
				this._wrap(moduleExports, functionToPatch, this._getPatchExtendWithCommands(transformCommandArguments));
				return moduleExports;
			}, (moduleExports) => {
				if (isWrapped(moduleExports?.extendWithCommands)) this._unwrap(moduleExports, "extendWithCommands");
				if (isWrapped(moduleExports?.attachCommands)) this._unwrap(moduleExports, "attachCommands");
			}),
			new InstrumentationNodeModuleFile(`${basePackageName}/dist/lib/client/multi-command.js`, ["^1.0.0", ">=5.0.0 <5.12.0"], (moduleExports) => {
				const redisClientMultiCommandPrototype = moduleExports?.default?.prototype;
				if (isWrapped(redisClientMultiCommandPrototype?.exec)) this._unwrap(redisClientMultiCommandPrototype, "exec");
				this._wrap(redisClientMultiCommandPrototype, "exec", this._getPatchMultiCommandsExec());
				if (isWrapped(redisClientMultiCommandPrototype?.execAsPipeline)) this._unwrap(redisClientMultiCommandPrototype, "execAsPipeline");
				this._wrap(redisClientMultiCommandPrototype, "execAsPipeline", this._getPatchMultiCommandsExec());
				if (isWrapped(redisClientMultiCommandPrototype?.addCommand)) this._unwrap(redisClientMultiCommandPrototype, "addCommand");
				this._wrap(redisClientMultiCommandPrototype, "addCommand", this._getPatchMultiCommandsAddCommand());
				return moduleExports;
			}, (moduleExports) => {
				const redisClientMultiCommandPrototype = moduleExports?.default?.prototype;
				if (isWrapped(redisClientMultiCommandPrototype?.exec)) this._unwrap(redisClientMultiCommandPrototype, "exec");
				if (isWrapped(redisClientMultiCommandPrototype?.execAsPipeline)) this._unwrap(redisClientMultiCommandPrototype, "execAsPipeline");
				if (isWrapped(redisClientMultiCommandPrototype?.addCommand)) this._unwrap(redisClientMultiCommandPrototype, "addCommand");
			}),
			new InstrumentationNodeModuleFile(`${basePackageName}/dist/lib/client/index.js`, ["^1.0.0", ">=5.0.0 <5.12.0"], (moduleExports) => {
				const redisClientPrototype = moduleExports?.default?.prototype;
				if (redisClientPrototype?.multi) {
					if (isWrapped(redisClientPrototype?.multi)) this._unwrap(redisClientPrototype, "multi");
					this._wrap(redisClientPrototype, "multi", this._getPatchRedisClientMulti());
				}
				if (redisClientPrototype?.MULTI) {
					if (isWrapped(redisClientPrototype?.MULTI)) this._unwrap(redisClientPrototype, "MULTI");
					this._wrap(redisClientPrototype, "MULTI", this._getPatchRedisClientMulti());
				}
				if (isWrapped(redisClientPrototype?.sendCommand)) this._unwrap(redisClientPrototype, "sendCommand");
				this._wrap(redisClientPrototype, "sendCommand", this._getPatchRedisClientSendCommand());
				if (isWrapped(redisClientPrototype?.connect)) this._unwrap(redisClientPrototype, "connect");
				this._wrap(redisClientPrototype, "connect", this._getPatchedClientConnect());
				return moduleExports;
			}, (moduleExports) => {
				const redisClientPrototype = moduleExports?.default?.prototype;
				if (isWrapped(redisClientPrototype?.multi)) this._unwrap(redisClientPrototype, "multi");
				if (isWrapped(redisClientPrototype?.MULTI)) this._unwrap(redisClientPrototype, "MULTI");
				if (isWrapped(redisClientPrototype?.sendCommand)) this._unwrap(redisClientPrototype, "sendCommand");
				if (isWrapped(redisClientPrototype?.connect)) this._unwrap(redisClientPrototype, "connect");
			})
		]);
	}
	_getPatchExtendWithCommands(transformCommandArguments) {
		const plugin = this;
		return function extendWithCommandsPatchWrapper(original) {
			return function extendWithCommandsPatch(config) {
				if (config?.BaseClass?.name !== "RedisClient") return original.apply(this, arguments);
				const origExecutor = config.executor;
				config.executor = function(command, args) {
					const redisCommandArguments = transformCommandArguments(command, args).args;
					return plugin._traceClientCommand(origExecutor, this, arguments, redisCommandArguments);
				};
				return original.apply(this, arguments);
			};
		};
	}
	_getPatchMultiCommandsExec() {
		const plugin = this;
		return function execPatchWrapper(original) {
			return function execPatch() {
				const execRes = original.apply(this, arguments);
				if (typeof execRes?.then !== "function") {
					DEBUG_BUILD$1 && debug.error("non-promise result when patching exec/execAsPipeline");
					return execRes;
				}
				return execRes.then((redisRes) => {
					const openSpans = this[OTEL_OPEN_SPANS];
					plugin._endSpansWithRedisReplies(openSpans, redisRes);
					return redisRes;
				}).catch((err) => {
					const openSpans = this[OTEL_OPEN_SPANS];
					if (!openSpans) DEBUG_BUILD$1 && debug.error("cannot find open spans to end for multi/pipeline");
					else {
						const replies = err.constructor.name === "MultiErrorReply" ? err.replies : new Array(openSpans.length).fill(err);
						plugin._endSpansWithRedisReplies(openSpans, replies);
					}
					return Promise.reject(err);
				});
			};
		};
	}
	_getPatchMultiCommandsAddCommand() {
		const plugin = this;
		return function addCommandWrapper(original) {
			return function addCommandPatch(args) {
				return plugin._traceClientCommand(original, this, arguments, args);
			};
		};
	}
	_getPatchRedisClientMulti() {
		return function multiPatchWrapper(original) {
			return function multiPatch() {
				const multiRes = original.apply(this, arguments);
				multiRes[MULTI_COMMAND_OPTIONS] = this.options;
				return multiRes;
			};
		};
	}
	_getPatchRedisClientSendCommand() {
		const plugin = this;
		return function sendCommandWrapper(original) {
			return function sendCommandPatch(args) {
				return plugin._traceClientCommand(original, this, arguments, args);
			};
		};
	}
	_getPatchedClientConnect() {
		return function connectWrapper(original) {
			return function patchedConnect() {
				const attributes = getClientAttributes(this.options);
				const span = startInactiveSpan$1({
					name: `${_RedisInstrumentationV4_V5.COMPONENT}-connect`,
					kind: SPAN_KIND.CLIENT,
					attributes
				});
				return withActiveSpan$1(span, () => original.apply(this)).then((result) => {
					span.end();
					return result;
				}, (error) => {
					endSpan(span, error);
					return Promise.reject(error);
				});
			};
		};
	}
	_traceClientCommand(origFunction, origThis, origArguments, redisCommandArguments) {
		const clientOptions = origThis.options || origThis[MULTI_COMMAND_OPTIONS];
		const commandName = redisCommandArguments[0];
		const commandArgs = redisCommandArguments.slice(1);
		const attributes = getClientAttributes(clientOptions);
		const dbStatement = defaultDbStatementSerializer(commandName, commandArgs);
		if (dbStatement != null) attributes[Ht] = dbStatement;
		const span = startInactiveSpan$1({
			name: `${_RedisInstrumentationV4_V5.COMPONENT}-${commandName}`,
			kind: SPAN_KIND.CLIENT,
			attributes
		});
		const res = withActiveSpan$1(span, () => origFunction.apply(origThis, origArguments));
		if (res instanceof Promise) res.then((redisRes) => {
			this._endSpanWithResponse(span, commandName, commandArgs, redisRes, void 0);
		}, (err) => {
			this._endSpanWithResponse(span, commandName, commandArgs, null, err);
		});
		else {
			const redisClientMultiCommand = res;
			redisClientMultiCommand[OTEL_OPEN_SPANS] = redisClientMultiCommand[OTEL_OPEN_SPANS] || [];
			redisClientMultiCommand[OTEL_OPEN_SPANS].push({
				span,
				commandName,
				commandArgs
			});
		}
		return res;
	}
	_endSpansWithRedisReplies(openSpans, replies) {
		if (!openSpans) {
			DEBUG_BUILD$1 && debug.error("cannot find open spans to end for redis multi/pipeline");
			return;
		}
		if (replies.length !== openSpans.length) {
			DEBUG_BUILD$1 && debug.error("number of multi command spans does not match response from redis");
			return;
		}
		for (let i = 0; i < openSpans.length; i++) {
			const { span, commandName, commandArgs } = openSpans[i];
			const currCommandRes = replies[i];
			const [res, err] = currCommandRes instanceof Error ? [null, currCommandRes] : [currCommandRes, void 0];
			this._endSpanWithResponse(span, commandName, commandArgs, res, err);
		}
	}
	_endSpanWithResponse(span, commandName, commandArgs, response, error) {
		if (!error) runResponseHook(this.getConfig().responseHook, span, commandName, commandArgs, response);
		endSpan(span, error);
	}
};
_RedisInstrumentationV4_V5.COMPONENT = "redis";
var RedisInstrumentationV4_V5 = _RedisInstrumentationV4_V5;
var RedisInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$8, SDK_VERSION, config);
		this.initialized = false;
		this.instrumentationV2_V3 = new RedisInstrumentationV2_V3(this.getConfig());
		this.instrumentationV4_V5 = new RedisInstrumentationV4_V5(this.getConfig());
		this.initialized = true;
	}
	setConfig(config = {}) {
		super.setConfig(config);
		if (!this.initialized) return;
		this.instrumentationV2_V3.setConfig(config);
		this.instrumentationV4_V5.setConfig(config);
	}
	init() {}
	getModuleDefinitions() {
		return [...this.instrumentationV2_V3.getModuleDefinitions(), ...this.instrumentationV4_V5.getModuleDefinitions()];
	}
	setTracerProvider(tracerProvider) {
		super.setTracerProvider(tracerProvider);
		if (!this.initialized) return;
		this.instrumentationV2_V3.setTracerProvider(tracerProvider);
		this.instrumentationV4_V5.setTracerProvider(tracerProvider);
	}
	enable() {
		super.enable();
		if (!this.initialized) return;
		this.instrumentationV2_V3.enable();
		this.instrumentationV4_V5.enable();
	}
	disable() {
		super.disable();
		if (!this.initialized) return;
		this.instrumentationV2_V3.disable();
		this.instrumentationV4_V5.disable();
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/redis/index.js
var INTEGRATION_NAME$11 = "Redis";
var instrumentIORedis = generateInstrumentOnce(`${INTEGRATION_NAME$11}.IORedis`, () => {
	return new IORedisInstrumentation({ responseHook: cacheResponseHook });
});
var instrumentRedisModule = generateInstrumentOnce(`${INTEGRATION_NAME$11}.Redis`, () => {
	return new RedisInstrumentation({ responseHook: cacheResponseHook });
});
var instrumentRedis = Object.assign(() => {
	if (!isDiagnosticsChannelInjectionEnabled() || !diagnosticsChannel.tracingChannel) {
		instrumentIORedis();
		instrumentRedisModule();
	}
}, { id: INTEGRATION_NAME$11 });
var _redisIntegration = ((options = {}) => {
	return extendIntegration(redisIntegration$1({ responseHook: cacheResponseHook }), {
		name: INTEGRATION_NAME$11,
		setupOnce() {
			setRedisOptions(options);
			instrumentRedis();
		}
	});
});
var redisIntegration = defineIntegration(_redisIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/postgres/vendored/enums/SpanNames.js
var SpanNames = /* @__PURE__ */ ((SpanNames2) => {
	SpanNames2["QUERY_PREFIX"] = "pg.query";
	SpanNames2["CONNECT"] = "pg.connect";
	SpanNames2["POOL_CONNECT"] = "pg-pool.connect";
	return SpanNames2;
})(SpanNames || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/postgres/vendored/enums/AttributeNames.js
var AttributeNames$4 = /* @__PURE__ */ ((AttributeNames2) => {
	AttributeNames2["PG_PLAN"] = "db.postgresql.plan";
	AttributeNames2["IDLE_TIMEOUT_MILLIS"] = "db.postgresql.idle.timeout.millis";
	AttributeNames2["MAX_CLIENT"] = "db.postgresql.max.client";
	return AttributeNames2;
})(AttributeNames$4 || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/postgres/vendored/semconv.js
var ATTR_DB_CONNECTION_STRING = "db.connection_string";
var DB_SYSTEM_VALUE_POSTGRESQL = "postgresql";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/postgres/vendored/utils.js
var ORIGIN = "auto.db.otel.postgres";
function getQuerySpanName(dbName, queryConfig) {
	if (!queryConfig) return SpanNames.QUERY_PREFIX;
	const command = typeof queryConfig.name === "string" && queryConfig.name ? queryConfig.name : parseNormalizedOperationName(queryConfig.text);
	return `${SpanNames.QUERY_PREFIX}:${command}${dbName ? ` ${dbName}` : ""}`;
}
function parseNormalizedOperationName(queryText) {
	const trimmedQuery = queryText.trim();
	const indexOfFirstSpace = trimmedQuery.indexOf(" ");
	let sqlCommand = indexOfFirstSpace === -1 ? trimmedQuery : trimmedQuery.slice(0, indexOfFirstSpace);
	sqlCommand = sqlCommand.toUpperCase();
	return sqlCommand.endsWith(";") ? sqlCommand.slice(0, -1) : sqlCommand;
}
function parseAndMaskConnectionString(connectionString) {
	try {
		const url = new URL(connectionString);
		url.username = "";
		url.password = "";
		return url.toString();
	} catch {
		return "postgresql://localhost:5432/";
	}
}
function getConnectionString(params) {
	if ("connectionString" in params && params.connectionString) return parseAndMaskConnectionString(params.connectionString);
	return `postgresql://${params.host || "localhost"}:${params.port || 5432}/${params.database || ""}`;
}
function getPort$1(port) {
	if (Number.isInteger(port)) return port;
}
function getSemanticAttributesFromConnection(params) {
	return {
		[Kt]: DB_SYSTEM_VALUE_POSTGRESQL,
		[Nt]: params.database,
		[ATTR_DB_CONNECTION_STRING]: getConnectionString(params),
		[Qt]: params.user,
		[Il]: params.host,
		[Ol]: getPort$1(params.port)
	};
}
function getSemanticAttributesFromPoolConnection(params) {
	let url;
	try {
		url = params.connectionString ? new URL(params.connectionString) : void 0;
	} catch {
		url = void 0;
	}
	return {
		[AttributeNames$4.IDLE_TIMEOUT_MILLIS]: params.idleTimeoutMillis,
		[AttributeNames$4.MAX_CLIENT]: params.maxClient,
		[Kt]: DB_SYSTEM_VALUE_POSTGRESQL,
		[Nt]: url?.pathname.slice(1) ?? params.database,
		[ATTR_DB_CONNECTION_STRING]: getConnectionString(params),
		[Il]: url?.hostname ?? params.host,
		[Ol]: Number(url?.port) || getPort$1(params.port),
		[Qt]: url?.username ?? params.user
	};
}
function shouldSkipInstrumentation() {
	return getActiveSpan$1() === void 0;
}
function handleConfigQuery(queryConfig) {
	const { connectionParameters } = this;
	const dbName = connectionParameters.database;
	const span = startInactiveSpan$1({
		name: getQuerySpanName(dbName, queryConfig),
		kind: SPAN_KIND.CLIENT,
		attributes: {
			...getSemanticAttributesFromConnection(connectionParameters),
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN
		}
	});
	if (!queryConfig) return span;
	if (queryConfig.text) span.setAttribute(Ht, queryConfig.text);
	if (typeof queryConfig.name === "string") span.setAttribute(AttributeNames$4.PG_PLAN, queryConfig.name);
	return span;
}
function patchCallback(span, cb) {
	return function patchedCallback(err, res) {
		if (err) span.setStatus({
			code: 2,
			message: err.message
		});
		span.end();
		cb.call(this, err, res);
	};
}
function patchCallbackPGPool(span, cb) {
	return function patchedCallback(err, res, done) {
		if (err) span.setStatus({
			code: 2,
			message: err.message
		});
		span.end();
		cb.call(this, err, res, done);
	};
}
function patchClientConnectCallback(span, cb) {
	return function patchedClientConnectCallback(...args) {
		const err = args[0];
		if (err instanceof Error) span.setStatus({
			code: 2,
			message: err.message
		});
		span.end();
		cb.apply(this, args);
	};
}
function getErrorMessage(e) {
	return typeof e === "object" && e !== null && "message" in e ? String(e.message) : void 0;
}
function isObjectWithTextString(it) {
	return typeof it === "object" && typeof it?.text === "string";
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/postgres/vendored/instrumentation.js
var PACKAGE_NAME$7 = "@sentry/instrumentation-pg";
function extractModuleExports(module) {
	return module[Symbol.toStringTag] === "Module" ? module.default : module;
}
function bindCallbackToSpan(parentSpan, callback) {
	return function(...args) {
		return withActiveSpan$1(parentSpan, () => callback.apply(this, args));
	};
}
var PgInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$7, SDK_VERSION, config);
	}
	init() {
		const SUPPORTED_PG_VERSIONS = [">=8.0.3 <9"];
		const SUPPORTED_PG_POOL_VERSIONS = [">=2.0.0 <4"];
		const modulePgNativeClient = new InstrumentationNodeModuleFile("pg/lib/native/client.js", SUPPORTED_PG_VERSIONS, this._patchPgClient.bind(this), this._unpatchPgClient.bind(this));
		return [new InstrumentationNodeModuleDefinition("pg", SUPPORTED_PG_VERSIONS, (module) => {
			const moduleExports = extractModuleExports(module);
			this._patchPgClient(moduleExports.Client);
			return module;
		}, (module) => {
			const moduleExports = extractModuleExports(module);
			this._unpatchPgClient(moduleExports.Client);
			return module;
		}, [new InstrumentationNodeModuleFile("pg/lib/client.js", SUPPORTED_PG_VERSIONS, this._patchPgClient.bind(this), this._unpatchPgClient.bind(this)), modulePgNativeClient]), new InstrumentationNodeModuleDefinition("pg-pool", SUPPORTED_PG_POOL_VERSIONS, (module) => {
			const moduleExports = extractModuleExports(module);
			if (isWrapped(moduleExports.prototype.connect)) this._unwrap(moduleExports.prototype, "connect");
			this._wrap(moduleExports.prototype, "connect", this._getPoolConnectPatch());
			return moduleExports;
		}, (module) => {
			const moduleExports = extractModuleExports(module);
			if (isWrapped(moduleExports.prototype.connect)) this._unwrap(moduleExports.prototype, "connect");
		})];
	}
	_patchPgClient(module) {
		if (!module) return;
		const moduleExports = extractModuleExports(module);
		if (isWrapped(moduleExports.prototype.query)) this._unwrap(moduleExports.prototype, "query");
		if (isWrapped(moduleExports.prototype.connect)) this._unwrap(moduleExports.prototype, "connect");
		this._wrap(moduleExports.prototype, "query", this._getClientQueryPatch());
		this._wrap(moduleExports.prototype, "connect", this._getClientConnectPatch());
		return module;
	}
	_unpatchPgClient(module) {
		const moduleExports = extractModuleExports(module);
		if (isWrapped(moduleExports.prototype.query)) this._unwrap(moduleExports.prototype, "query");
		if (isWrapped(moduleExports.prototype.connect)) this._unwrap(moduleExports.prototype, "connect");
		return module;
	}
	_getClientConnectPatch() {
		const plugin = this;
		return (original) => {
			return function connect(callback) {
				if (shouldSkipInstrumentation() || plugin.getConfig().ignoreConnectSpans) return original.call(this, callback);
				const span = startInactiveSpan$1({
					name: SpanNames.CONNECT,
					kind: SPAN_KIND.CLIENT,
					attributes: getSemanticAttributesFromConnection(this)
				});
				let cb = callback;
				if (cb) {
					const parentSpan = getActiveSpan$1();
					cb = patchClientConnectCallback(span, cb);
					if (parentSpan) cb = bindCallbackToSpan(parentSpan, cb);
				}
				return handleConnectResult(span, withActiveSpan$1(span, () => {
					return original.call(this, cb);
				}));
			};
		};
	}
	_getClientQueryPatch() {
		return (original) => {
			this._diag.debug("Patching pg.Client.prototype.query");
			return function query(...args) {
				if (shouldSkipInstrumentation()) return original.apply(this, args);
				const arg0 = args[0];
				const firstArgIsString = typeof arg0 === "string";
				const firstArgIsQueryObjectWithText = isObjectWithTextString(arg0);
				const queryConfig = firstArgIsString ? {
					text: arg0,
					values: Array.isArray(args[1]) ? args[1] : void 0
				} : firstArgIsQueryObjectWithText ? {
					...arg0,
					name: arg0.name,
					text: arg0.text,
					values: arg0.values ?? (Array.isArray(args[1]) ? args[1] : void 0)
				} : void 0;
				const span = handleConfigQuery.call(this, queryConfig);
				if (args.length > 0) {
					const parentSpan = getActiveSpan$1();
					if (typeof args[args.length - 1] === "function") {
						args[args.length - 1] = patchCallback(span, args[args.length - 1]);
						if (parentSpan) args[args.length - 1] = bindCallbackToSpan(parentSpan, args[args.length - 1]);
					} else if (typeof queryConfig?.callback === "function") {
						let callback = patchCallback(span, queryConfig.callback);
						if (parentSpan) callback = bindCallbackToSpan(parentSpan, callback);
						args[0].callback = callback;
					}
				}
				let result;
				try {
					result = original.apply(this, args);
				} catch (e) {
					span.setStatus({
						code: 2,
						message: getErrorMessage(e)
					});
					span.end();
					throw e;
				}
				if (result instanceof Promise) return result.then((result2) => {
					span.end();
					return result2;
				}).catch((error) => {
					span.setStatus({
						code: 2,
						message: getErrorMessage(error)
					});
					span.end();
					return Promise.reject(error);
				});
				return result;
			};
		};
	}
	_getPoolConnectPatch() {
		const plugin = this;
		return (originalConnect) => {
			return function connect(callback) {
				if (shouldSkipInstrumentation() || plugin.getConfig().ignoreConnectSpans) return originalConnect.call(this, callback);
				const span = startInactiveSpan$1({
					name: SpanNames.POOL_CONNECT,
					kind: SPAN_KIND.CLIENT,
					attributes: getSemanticAttributesFromPoolConnection(this.options)
				});
				let cb = callback;
				if (cb) {
					const parentSpan = getActiveSpan$1();
					cb = patchCallbackPGPool(span, cb);
					if (parentSpan) cb = bindCallbackToSpan(parentSpan, cb);
				}
				return handleConnectResult(span, withActiveSpan$1(span, () => {
					return originalConnect.call(this, cb);
				}));
			};
		};
	}
};
function handleConnectResult(span, connectResult) {
	if (!(connectResult instanceof Promise)) return connectResult;
	return connectResult.then((result) => {
		span.end();
		return result;
	}).catch((error) => {
		span.setStatus({
			code: 2,
			message: getErrorMessage(error)
		});
		span.end();
		return Promise.reject(error);
	});
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/postgres/index.js
var INTEGRATION_NAME$10 = "Postgres";
var instrumentPostgres = generateInstrumentOnce(INTEGRATION_NAME$10, PgInstrumentation, (options) => ({ ignoreConnectSpans: options?.ignoreConnectSpans ?? false }));
var _postgresIntegration = ((options) => {
	return {
		name: INTEGRATION_NAME$10,
		setupOnce() {
			instrumentPostgres(options);
		}
	};
});
var postgresIntegration = defineIntegration(_postgresIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/postgresjs.js
var INTEGRATION_NAME$9 = "PostgresJs";
var SUPPORTED_VERSIONS$1 = [">=3.0.0 <4"];
var ATTR_DB_RESPONSE_STATUS_CODE = "db.response.status_code";
var SQL_OPERATION_REGEX = /^(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)/i;
var QUERY_FROM_INSTRUMENTED_SQL = /* @__PURE__ */ Symbol.for("sentry.query.from.instrumented.sql");
var instrumentPostgresJs = generateInstrumentOnce(INTEGRATION_NAME$9, (options) => new PostgresJsInstrumentation({
	requireParentSpan: options?.requireParentSpan ?? true,
	requestHook: options?.requestHook
}));
var PostgresJsInstrumentation = class extends InstrumentationBase {
	constructor(config) {
		super("sentry-postgres-js", SDK_VERSION, config);
	}
	/**
	* Initializes the instrumentation by patching the postgres module.
	* Uses two complementary approaches:
	* 1. Main function wrapper: instruments sql instances created AFTER instrumentation is set up (CJS + ESM)
	* 2. Query.prototype patch: fallback for sql instances created BEFORE instrumentation (CJS only)
	*/
	init() {
		const module = new InstrumentationNodeModuleDefinition("postgres", SUPPORTED_VERSIONS$1, (exports) => {
			try {
				return this._patchPostgres(exports);
			} catch (e) {
				DEBUG_BUILD$1 && debug.error("Failed to patch postgres module:", e);
				return exports;
			}
		}, (exports) => exports);
		[
			"src",
			"cf/src",
			"cjs/src"
		].forEach((path) => {
			module.files.push(new InstrumentationNodeModuleFile(`postgres/${path}/query.js`, SUPPORTED_VERSIONS$1, this._patchQueryPrototype.bind(this), this._unpatchQueryPrototype.bind(this)));
		});
		return module;
	}
	/**
	* Patches the postgres module by wrapping the main export function.
	* This intercepts the creation of sql instances and instruments them.
	*/
	_patchPostgres(exports) {
		const isFunction = typeof exports === "function";
		const Original = isFunction ? exports : exports.default;
		if (typeof Original !== "function") {
			DEBUG_BUILD$1 && debug.warn("postgres module does not export a function. Skipping instrumentation.");
			return exports;
		}
		const self = this;
		const WrappedPostgres = function(...args) {
			const sql = Reflect.construct(Original, args);
			if (!sql || typeof sql !== "function") {
				DEBUG_BUILD$1 && debug.warn("postgres() did not return a valid instance");
				return sql;
			}
			const config = self.getConfig();
			return instrumentPostgresJsSql(sql, {
				requireParentSpan: config.requireParentSpan,
				requestHook: config.requestHook
			});
		};
		Object.setPrototypeOf(WrappedPostgres, Original);
		Object.setPrototypeOf(WrappedPostgres.prototype, Original.prototype);
		for (const key of Object.getOwnPropertyNames(Original)) if (![
			"length",
			"name",
			"prototype"
		].includes(key)) {
			const descriptor = Object.getOwnPropertyDescriptor(Original, key);
			if (descriptor) Object.defineProperty(WrappedPostgres, key, descriptor);
		}
		if (isFunction) return WrappedPostgres;
		else {
			replaceExports(exports, "default", WrappedPostgres);
			return exports;
		}
	}
	/**
	* Determines whether a span should be created based on the current context.
	* If `requireParentSpan` is set to true in the configuration, a span will
	* only be created if there is a parent span available.
	*/
	_shouldCreateSpans() {
		const config = this.getConfig();
		return import_src.trace.getSpan(import_src.context.active()) !== void 0 || !config.requireParentSpan;
	}
	/**
	* Extracts DB operation name from SQL query and sets it on the span.
	*/
	_setOperationName(span, sanitizedQuery, command) {
		if (command) {
			span.setAttribute(Lt, command);
			return;
		}
		const operationMatch = sanitizedQuery?.match(SQL_OPERATION_REGEX);
		if (operationMatch?.[1]) span.setAttribute(Lt, operationMatch[1].toUpperCase());
	}
	/**
	* Reconstructs the full SQL query from template strings with PostgreSQL placeholders.
	*
	* For sql`SELECT * FROM users WHERE id = ${123} AND name = ${'foo'}`:
	*   strings = ["SELECT * FROM users WHERE id = ", " AND name = ", ""]
	*   returns: "SELECT * FROM users WHERE id = $1 AND name = $2"
	*/
	_reconstructQuery(strings) {
		if (!strings?.length) return;
		if (strings.length === 1) return strings[0] || void 0;
		return strings.reduce((acc, str, i) => i === 0 ? str : `${acc}$${i}${str}`, "");
	}
	/**
	* Sanitize SQL query as per the OTEL semantic conventions
	* https://opentelemetry.io/docs/specs/semconv/database/database-spans/#sanitization-of-dbquerytext
	*
	* PostgreSQL $n placeholders are preserved per OTEL spec - they're parameterized queries,
	* not sensitive literals. Only actual values (strings, numbers, booleans) are sanitized.
	*/
	_sanitizeSqlQuery(sqlQuery) {
		if (!sqlQuery) return "Unknown SQL Query";
		return sqlQuery.replace(/--.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/;\s*$/, "").replace(/\s+/g, " ").trim().replace(/\bX'[0-9A-Fa-f]*'/gi, "?").replace(/\bB'[01]*'/gi, "?").replace(/'(?:[^']|'')*'/g, "?").replace(/\b0x[0-9A-Fa-f]+/gi, "?").replace(/\b(?:TRUE|FALSE)\b/gi, "?").replace(/-?\b\d+\.?\d*[eE][+-]?\d+\b/g, "?").replace(/-?\b\d+\.\d+\b/g, "?").replace(/-?\.\d+\b/g, "?").replace(/(?<!\$)-?\b\d+\b/g, "?").replace(/\bIN\b\s*\(\s*\?(?:\s*,\s*\?)*\s*\)/gi, "IN (?)").replace(/\bIN\b\s*\(\s*\$\d+(?:\s*,\s*\$\d+)*\s*\)/gi, "IN ($?)");
	}
	/**
	* Fallback patch for Query.prototype.handle to instrument queries from pre-existing sql instances.
	* This catches queries from sql instances created BEFORE Sentry was initialized (CJS only).
	*
	* Note: Queries from pre-existing instances won't have connection context (database, host, port)
	* because the sql instance wasn't created through our instrumented wrapper.
	*/
	_patchQueryPrototype(moduleExports) {
		const self = this;
		const originalHandle = moduleExports.Query.prototype.handle;
		moduleExports.Query.prototype.handle = async function(...args) {
			if (this.executed || this[QUERY_FROM_INSTRUMENTED_SQL]) return originalHandle.apply(this, args);
			if (!self._shouldCreateSpans()) return originalHandle.apply(this, args);
			const fullQuery = self._reconstructQuery(this.strings);
			const sanitizedSqlQuery = self._sanitizeSqlQuery(fullQuery);
			return startSpanManual$1({
				name: sanitizedSqlQuery || "postgresjs.query",
				op: "db"
			}, (span) => {
				addOriginToSpan(span, "auto.db.postgresjs");
				span.setAttributes({
					[jt]: "postgres",
					[Gt]: sanitizedSqlQuery
				});
				const { requestHook } = self.getConfig();
				if (requestHook) safeExecuteInTheMiddle(() => requestHook(span, sanitizedSqlQuery, void 0), (e) => {
					if (e) {
						span.setAttribute("sentry.hook.error", "requestHook failed");
						DEBUG_BUILD$1 && debug.error(`Error in requestHook for ${INTEGRATION_NAME$9} integration:`, e);
					}
				}, true);
				const originalResolve = this.resolve;
				this.resolve = new Proxy(originalResolve, { apply: (resolveTarget, resolveThisArg, resolveArgs) => {
					try {
						self._setOperationName(span, sanitizedSqlQuery, resolveArgs?.[0]?.command);
						span.end();
					} catch (e) {
						DEBUG_BUILD$1 && debug.error("Error ending span in resolve callback:", e);
					}
					return Reflect.apply(resolveTarget, resolveThisArg, resolveArgs);
				} });
				const originalReject = this.reject;
				this.reject = new Proxy(originalReject, { apply: (rejectTarget, rejectThisArg, rejectArgs) => {
					try {
						span.setStatus({
							code: 2,
							message: rejectArgs?.[0]?.message || "unknown_error"
						});
						span.setAttribute(ATTR_DB_RESPONSE_STATUS_CODE, rejectArgs?.[0]?.code || "unknown");
						span.setAttribute(Gn, rejectArgs?.[0]?.name || "unknown");
						self._setOperationName(span, sanitizedSqlQuery);
						span.end();
					} catch (e) {
						DEBUG_BUILD$1 && debug.error("Error ending span in reject callback:", e);
					}
					return Reflect.apply(rejectTarget, rejectThisArg, rejectArgs);
				} });
				try {
					return originalHandle.apply(this, args);
				} catch (e) {
					span.setStatus({
						code: 2,
						message: e instanceof Error ? e.message : "unknown_error"
					});
					span.end();
					throw e;
				}
			});
		};
		moduleExports.Query.prototype.handle.__sentry_original__ = originalHandle;
		return moduleExports;
	}
	/**
	* Restores the original Query.prototype.handle method.
	*/
	_unpatchQueryPrototype(moduleExports) {
		if (moduleExports.Query.prototype.handle.__sentry_original__) moduleExports.Query.prototype.handle = moduleExports.Query.prototype.handle.__sentry_original__;
		return moduleExports;
	}
};
var _postgresJsIntegration = ((options) => {
	return {
		name: INTEGRATION_NAME$9,
		setupOnce() {
			instrumentPostgresJs(options);
		}
	};
});
var postgresJsIntegration = defineIntegration(_postgresJsIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/hapi/vendored/enums/AttributeNames.js
var AttributeNames$3 = /* @__PURE__ */ ((AttributeNames2) => {
	AttributeNames2["HAPI_TYPE"] = "hapi.type";
	AttributeNames2["PLUGIN_NAME"] = "hapi.plugin.name";
	AttributeNames2["EXT_TYPE"] = "server.ext.type";
	return AttributeNames2;
})(AttributeNames$3 || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/hapi/vendored/internal-types.js
var HapiComponentName = "@hapi/hapi";
var handlerPatched = /* @__PURE__ */ Symbol("hapi-handler-patched");
var HapiLayerType = {
	ROUTER: "router",
	PLUGIN: "plugin",
	EXT: "server.ext"
};
var HapiLifecycleMethodNames = /* @__PURE__ */ new Set([
	"onPreAuth",
	"onCredentials",
	"onPostAuth",
	"onPreHandler",
	"onPostHandler",
	"onPreResponse",
	"onRequest"
]);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/hapi/vendored/utils.js
function getPluginName(plugin) {
	if (plugin.name) return plugin.name;
	else return plugin.pkg.name;
}
var isLifecycleExtType = (variableToCheck) => {
	return typeof variableToCheck === "string" && HapiLifecycleMethodNames.has(variableToCheck);
};
var isLifecycleExtEventObj = (variableToCheck) => {
	const event = variableToCheck?.type;
	return event !== void 0 && isLifecycleExtType(event);
};
var isDirectExtInput = (variableToCheck) => {
	return Array.isArray(variableToCheck) && variableToCheck.length <= 3 && isLifecycleExtType(variableToCheck[0]) && typeof variableToCheck[1] === "function";
};
var isPatchableExtMethod = (variableToCheck) => {
	return !Array.isArray(variableToCheck);
};
var getRouteMetadata = (route, pluginName) => {
	const attributes = {
		[Ts]: route.path,
		[Ka]: route.method
	};
	let name;
	if (pluginName) {
		attributes[AttributeNames$3.HAPI_TYPE] = HapiLayerType.PLUGIN;
		attributes[AttributeNames$3.PLUGIN_NAME] = pluginName;
		name = `${pluginName}: route - ${route.path}`;
	} else {
		attributes[AttributeNames$3.HAPI_TYPE] = HapiLayerType.ROUTER;
		name = `route - ${route.path}`;
	}
	return {
		attributes,
		name
	};
};
var getExtMetadata = (extPoint, pluginName, methodName) => {
	let baseName = `ext - ${extPoint}`;
	if (methodName && methodName !== "method") baseName = `ext - ${extPoint} - ${methodName}`;
	if (pluginName) return {
		attributes: {
			[AttributeNames$3.EXT_TYPE]: extPoint,
			[AttributeNames$3.HAPI_TYPE]: HapiLayerType.EXT,
			[AttributeNames$3.PLUGIN_NAME]: pluginName
		},
		name: `${pluginName}: ${baseName}`
	};
	return {
		attributes: {
			[AttributeNames$3.EXT_TYPE]: extPoint,
			[AttributeNames$3.HAPI_TYPE]: HapiLayerType.EXT
		},
		name: baseName
	};
};
var getPluginFromInput = (pluginObj) => {
	if ("plugin" in pluginObj) {
		if ("plugin" in pluginObj.plugin) return pluginObj.plugin.plugin;
		return pluginObj.plugin;
	}
	return pluginObj;
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/hapi/vendored/instrumentation.js
var PACKAGE_NAME$6 = "@sentry/instrumentation-hapi";
var HapiInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$6, SDK_VERSION, config);
	}
	init() {
		return new InstrumentationNodeModuleDefinition(HapiComponentName, [">=17.0.0 <22"], (module) => {
			const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
			if (!isWrapped(moduleExports.server)) this._wrap(moduleExports, "server", this._getServerPatch.bind(this));
			if (!isWrapped(moduleExports.Server)) this._wrap(moduleExports, "Server", this._getServerPatch.bind(this));
			return moduleExports;
		}, (module) => {
			const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
			this._massUnwrap([moduleExports], ["server", "Server"]);
		});
	}
	/**
	* Patches the Hapi.server and Hapi.Server functions in order to instrument
	* the server.route, server.ext, and server.register functions via calls to the
	* @function _getServerRoutePatch, @function _getServerExtPatch, and
	* @function _getServerRegisterPatch functions
	* @param original - the original Hapi Server creation function
	*/
	_getServerPatch(original) {
		const instrumentation = this;
		const self = this;
		return function server(opts) {
			const newServer = original.apply(this, [opts]);
			self._wrap(newServer, "route", (originalRouter) => {
				return instrumentation._getServerRoutePatch.bind(instrumentation)(originalRouter);
			});
			self._wrap(newServer, "ext", (originalExtHandler) => {
				return instrumentation._getServerExtPatch.bind(instrumentation)(originalExtHandler);
			});
			self._wrap(newServer, "register", instrumentation._getServerRegisterPatch.bind(instrumentation));
			return newServer;
		};
	}
	/**
	* Patches the plugin register function used by the Hapi Server. This function
	* goes through each plugin that is being registered and adds instrumentation
	* via a call to the @function _wrapRegisterHandler function.
	* @param {RegisterFunction<T>} original - the original register function which
	* registers each plugin on the server
	*/
	_getServerRegisterPatch(original) {
		const instrumentation = this;
		return function register(pluginInput, options) {
			if (Array.isArray(pluginInput)) for (const pluginObj of pluginInput) {
				const plugin = getPluginFromInput(pluginObj);
				instrumentation._wrapRegisterHandler(plugin);
			}
			else {
				const plugin = getPluginFromInput(pluginInput);
				instrumentation._wrapRegisterHandler(plugin);
			}
			return original.apply(this, [pluginInput, options]);
		};
	}
	/**
	* Patches the Server.ext function which adds extension methods to the specified
	* point along the request lifecycle. This function accepts the full range of
	* accepted input into the standard Hapi `server.ext` function. For each extension,
	* it adds instrumentation to the handler via a call to the @function _wrapExtMethods
	* function.
	* @param original - the original ext function which adds the extension method to the server
	* @param {string} [pluginName] - if present, represents the name of the plugin responsible
	* for adding this server extension. Else, signifies that the extension was added directly
	*/
	_getServerExtPatch(original, pluginName) {
		const instrumentation = this;
		return function ext(...args) {
			if (Array.isArray(args[0])) {
				const eventsList = args[0];
				for (let i = 0; i < eventsList.length; i++) {
					const eventObj = eventsList[i];
					if (isLifecycleExtType(eventObj.type)) {
						const lifecycleEventObj = eventObj;
						lifecycleEventObj.method = instrumentation._wrapExtMethods(lifecycleEventObj.method, eventObj.type, pluginName);
						eventsList[i] = lifecycleEventObj;
					}
				}
				return original.apply(this, args);
			} else if (isDirectExtInput(args)) {
				const extInput = args;
				const method = extInput[1];
				const handler = instrumentation._wrapExtMethods(method, extInput[0], pluginName);
				return original.apply(this, [
					extInput[0],
					handler,
					extInput[2]
				]);
			} else if (isLifecycleExtEventObj(args[0])) {
				const lifecycleEventObj = args[0];
				lifecycleEventObj.method = instrumentation._wrapExtMethods(lifecycleEventObj.method, lifecycleEventObj.type, pluginName);
				return original.call(this, lifecycleEventObj);
			}
			return original.apply(this, args);
		};
	}
	/**
	* Patches the Server.route function. This function accepts either one or an array
	* of Hapi.ServerRoute objects and adds instrumentation on each route via a call to
	* the @function _wrapRouteHandler function.
	* @param {HapiServerRouteInputMethod} original - the original route function which adds
	* the route to the server
	* @param {string} [pluginName] - if present, represents the name of the plugin responsible
	* for adding this server route. Else, signifies that the route was added directly
	*/
	_getServerRoutePatch(original, pluginName) {
		const instrumentation = this;
		return function route(route) {
			if (Array.isArray(route)) for (let i = 0; i < route.length; i++) {
				const newRoute = instrumentation._wrapRouteHandler.call(instrumentation, route[i], pluginName);
				route[i] = newRoute;
			}
			else route = instrumentation._wrapRouteHandler.call(instrumentation, route, pluginName);
			return original.apply(this, [route]);
		};
	}
	/**
	* Wraps newly registered plugins to add instrumentation to the plugin's clone of
	* the original server. Specifically, wraps the server.route and server.ext functions
	* via calls to @function _getServerRoutePatch and @function _getServerExtPatch
	* @param {Hapi.Plugin<T>} plugin - the new plugin which is being instrumented
	*/
	_wrapRegisterHandler(plugin) {
		const instrumentation = this;
		const pluginName = getPluginName(plugin);
		const oldRegister = plugin.register;
		const self = this;
		const newRegisterHandler = function(server, options) {
			self._wrap(server, "route", (original) => {
				return instrumentation._getServerRoutePatch.bind(instrumentation)(original, pluginName);
			});
			self._wrap(server, "ext", (originalExtHandler) => {
				return instrumentation._getServerExtPatch.bind(instrumentation)(originalExtHandler, pluginName);
			});
			return oldRegister.call(this, server, options);
		};
		plugin.register = newRegisterHandler;
	}
	/**
	* Wraps request extension methods to add instrumentation to each new extension handler.
	* Patches each individual extension in order to create the
	* span and propagate context. It does not create spans when there is no parent span.
	* @param {PatchableExtMethod | PatchableExtMethod[]} method - the request extension
	* handler which is being instrumented
	* @param {Hapi.ServerRequestExtType} extPoint - the point in the Hapi request lifecycle
	* which this extension targets
	* @param {string} [pluginName] - if present, represents the name of the plugin responsible
	* for adding this server route. Else, signifies that the route was added directly
	*/
	_wrapExtMethods(method, extPoint, pluginName) {
		const instrumentation = this;
		if (method instanceof Array) {
			for (let i = 0; i < method.length; i++) method[i] = instrumentation._wrapExtMethods(method[i], extPoint);
			return method;
		} else if (isPatchableExtMethod(method)) {
			if (method[handlerPatched] === true) return method;
			method[handlerPatched] = true;
			const newHandler = function(...params) {
				if (import_src.trace.getSpan(import_src.context.active()) === void 0) return method.apply(this, params);
				const metadata = getExtMetadata(extPoint, pluginName, method.name);
				return startSpan$2({
					name: metadata.name,
					op: `${metadata.attributes[AttributeNames$3.HAPI_TYPE]}.hapi`,
					attributes: {
						...metadata.attributes,
						[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hapi"
					}
				}, () => method.apply(void 0, params));
			};
			return newHandler;
		}
		return method;
	}
	/**
	* Patches each individual route handler method in order to create the
	* span and propagate context. It does not create spans when there is no parent span.
	* @param {PatchableServerRoute} route - the route handler which is being instrumented
	* @param {string} [pluginName] - if present, represents the name of the plugin responsible
	* for adding this server route. Else, signifies that the route was added directly
	*/
	_wrapRouteHandler(route, pluginName) {
		if (route[handlerPatched] === true) return route;
		route[handlerPatched] = true;
		const wrapHandler = (oldHandler) => {
			return function(...params) {
				if (import_src.trace.getSpan(import_src.context.active()) === void 0) return oldHandler.call(this, ...params);
				setHttpServerSpanRouteAttribute(route.path);
				const metadata = getRouteMetadata(route, pluginName);
				return startSpan$2({
					name: metadata.name,
					op: `${metadata.attributes[AttributeNames$3.HAPI_TYPE]}.hapi`,
					attributes: {
						...metadata.attributes,
						[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hapi"
					}
				}, () => oldHandler.call(this, ...params));
			};
		};
		if (typeof route.handler === "function") route.handler = wrapHandler(route.handler);
		else if (typeof route.options === "function") {
			const oldOptions = route.options;
			route.options = function(server) {
				const options = oldOptions(server);
				if (typeof options.handler === "function") options.handler = wrapHandler(options.handler);
				return options;
			};
		} else if (typeof route.options?.handler === "function") route.options.handler = wrapHandler(route.options.handler);
		return route;
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/hapi/index.js
var INTEGRATION_NAME$8 = "Hapi";
var instrumentHapi = generateInstrumentOnce(INTEGRATION_NAME$8, () => new HapiInstrumentation());
var _hapiIntegration = (() => {
	return {
		name: INTEGRATION_NAME$8,
		setupOnce() {
			instrumentHapi();
		}
	};
});
var hapiIntegration = defineIntegration(_hapiIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/hono/constants.js
var AttributeNames$2 = {
	HONO_TYPE: "hono.type",
	HONO_NAME: "hono.name"
};
var HonoTypes = {
	MIDDLEWARE: "middleware",
	REQUEST_HANDLER: "request_handler"
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/hono/instrumentation.js
var PACKAGE_NAME$5 = "@sentry/instrumentation-hono";
var PACKAGE_VERSION = "0.0.1";
var HonoInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$5, PACKAGE_VERSION, config);
	}
	/**
	* Initialize the instrumentation.
	*/
	init() {
		return [new InstrumentationNodeModuleDefinition("hono", [">=4.0.0 <5"], (moduleExports) => this._patch(moduleExports))];
	}
	/**
	* Patches the module exports to instrument Hono.
	*/
	_patch(moduleExports) {
		const instrumentation = this;
		class WrappedHono extends moduleExports.Hono {
			constructor(...args) {
				super(...args);
				instrumentation._wrap(this, "get", instrumentation._patchHandler());
				instrumentation._wrap(this, "post", instrumentation._patchHandler());
				instrumentation._wrap(this, "put", instrumentation._patchHandler());
				instrumentation._wrap(this, "delete", instrumentation._patchHandler());
				instrumentation._wrap(this, "options", instrumentation._patchHandler());
				instrumentation._wrap(this, "patch", instrumentation._patchHandler());
				instrumentation._wrap(this, "all", instrumentation._patchHandler());
				instrumentation._wrap(this, "on", instrumentation._patchOnHandler());
				instrumentation._wrap(this, "use", instrumentation._patchMiddlewareHandler());
			}
		}
		try {
			moduleExports.Hono = WrappedHono;
		} catch {
			return {
				...moduleExports,
				Hono: WrappedHono
			};
		}
		return moduleExports;
	}
	/**
	* Patches the route handler to instrument it.
	*/
	_patchHandler() {
		const instrumentation = this;
		return function(original) {
			return function wrappedHandler(...args) {
				if (typeof args[0] === "string") {
					const path = args[0];
					if (args.length === 1) return original.apply(this, [path]);
					const handlers = args.slice(1);
					return original.apply(this, [path, ...handlers.map((handler) => instrumentation._wrapHandler(handler))]);
				}
				return original.apply(this, args.map((handler) => instrumentation._wrapHandler(handler)));
			};
		};
	}
	/**
	* Patches the 'on' handler to instrument it.
	*/
	_patchOnHandler() {
		const instrumentation = this;
		return function(original) {
			return function wrappedHandler(...args) {
				const handlers = args.slice(2);
				return original.apply(this, [...args.slice(0, 2), ...handlers.map((handler) => instrumentation._wrapHandler(handler))]);
			};
		};
	}
	/**
	* Patches the middleware handler to instrument it.
	*/
	_patchMiddlewareHandler() {
		const instrumentation = this;
		return function(original) {
			return function wrappedHandler(...args) {
				if (typeof args[0] === "string") {
					const path = args[0];
					if (args.length === 1) return original.apply(this, [path]);
					const handlers = args.slice(1);
					return original.apply(this, [path, ...handlers.map((handler) => instrumentation._wrapHandler(handler))]);
				}
				return original.apply(this, args.map((handler) => instrumentation._wrapHandler(handler)));
			};
		};
	}
	/**
	* Wraps a handler or middleware handler to apply instrumentation.
	*/
	_wrapHandler(handler) {
		const instrumentation = this;
		return function(c, next) {
			if (!instrumentation.isEnabled()) return handler.apply(this, [c, next]);
			const path = c.req.path;
			const span = instrumentation.tracer.startSpan(path);
			return import_src.context.with(import_src.trace.setSpan(import_src.context.active(), span), () => {
				return instrumentation._safeExecute(() => {
					const result = handler.apply(this, [c, next]);
					if (isThenable(result)) return result.then((result2) => {
						const type = instrumentation._determineHandlerType(result2);
						span.setAttributes({
							[AttributeNames$2.HONO_TYPE]: type,
							[AttributeNames$2.HONO_NAME]: type === HonoTypes.REQUEST_HANDLER ? path : handler.name || "anonymous"
						});
						instrumentation.getConfig().responseHook?.(span);
						return result2;
					});
					else {
						const type = instrumentation._determineHandlerType(result);
						span.setAttributes({
							[AttributeNames$2.HONO_TYPE]: type,
							[AttributeNames$2.HONO_NAME]: type === HonoTypes.REQUEST_HANDLER ? path : handler.name || "anonymous"
						});
						instrumentation.getConfig().responseHook?.(span);
						return result;
					}
				}, () => span.end(), (error) => {
					instrumentation._handleError(span, error);
					span.end();
				});
			});
		};
	}
	/**
	* Safely executes a function and handles errors.
	*/
	_safeExecute(execute, onSuccess, onFailure) {
		try {
			const result = execute();
			if (isThenable(result)) result.then(() => onSuccess(), (error) => onFailure(error));
			else onSuccess();
			return result;
		} catch (error) {
			onFailure(error);
			throw error;
		}
	}
	/**
	* Determines the handler type based on the result.
	* @param result
	* @private
	*/
	_determineHandlerType(result) {
		return result === void 0 ? HonoTypes.MIDDLEWARE : HonoTypes.REQUEST_HANDLER;
	}
	/**
	* Handles errors by setting the span status and recording the exception.
	*/
	_handleError(span, error) {
		if (error instanceof Error) {
			span.setStatus({
				code: import_src.SpanStatusCode.ERROR,
				message: error.message
			});
			span.recordException(error);
		}
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/hono/index.js
var INTEGRATION_NAME$7 = "Hono";
function addHonoSpanAttributes(span) {
	const attributes = spanToJSON(span).data;
	const type = attributes[AttributeNames$2.HONO_TYPE];
	if (attributes["sentry.op"] || !type) return;
	span.setAttributes({
		[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hono",
		[SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.hono`
	});
	const name = attributes[AttributeNames$2.HONO_NAME];
	if (typeof name === "string") span.updateName(name);
	if (getIsolationScope() === getDefaultIsolationScope()) {
		DEBUG_BUILD$1 && debug.warn("Isolation scope is default isolation scope - skipping setting transactionName");
		return;
	}
	const route = attributes[Ts];
	const method = attributes[ns];
	if (typeof route === "string" && typeof method === "string") getIsolationScope().setTransactionName(`${method} ${route}`);
}
var instrumentHono = generateInstrumentOnce(INTEGRATION_NAME$7, () => new HonoInstrumentation({ responseHook: (span) => {
	addHonoSpanAttributes(span);
} }));
var _honoIntegration = (() => {
	return {
		name: INTEGRATION_NAME$7,
		setupOnce() {
			instrumentHono();
		}
	};
});
var honoIntegration = defineIntegration(_honoIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/koa/vendored/types.js
var KoaLayerType = /* @__PURE__ */ ((KoaLayerType2) => {
	KoaLayerType2["ROUTER"] = "router";
	KoaLayerType2["MIDDLEWARE"] = "middleware";
	return KoaLayerType2;
})(KoaLayerType || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/koa/vendored/enums/AttributeNames.js
var AttributeNames$1 = /* @__PURE__ */ ((AttributeNames2) => {
	AttributeNames2["KOA_TYPE"] = "koa.type";
	AttributeNames2["KOA_NAME"] = "koa.name";
	return AttributeNames2;
})(AttributeNames$1 || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/koa/vendored/utils.js
var getMiddlewareMetadata = (context, layer, isRouter, layerPath) => {
	if (isRouter) return {
		attributes: {
			[AttributeNames$1.KOA_NAME]: layerPath?.toString(),
			[AttributeNames$1.KOA_TYPE]: KoaLayerType.ROUTER,
			[Ts]: layerPath?.toString()
		},
		name: context._matchedRouteName || `router - ${layerPath}`
	};
	else return {
		attributes: {
			[AttributeNames$1.KOA_NAME]: layer.name ?? "middleware",
			[AttributeNames$1.KOA_TYPE]: KoaLayerType.MIDDLEWARE
		},
		name: `middleware - ${layer.name}`
	};
};
var isLayerIgnored = (type, config) => {
	return !!(Array.isArray(config?.ignoreLayersType) && config?.ignoreLayersType?.includes(type));
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/koa/vendored/internal-types.js
var kLayerPatched = /* @__PURE__ */ Symbol("koa-layer-patched");
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/koa/vendored/instrumentation.js
var PACKAGE_NAME$4 = "@sentry/instrumentation-koa";
var KoaInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$4, SDK_VERSION, config);
	}
	init() {
		return new InstrumentationNodeModuleDefinition("koa", [">=2.0.0 <4"], (module) => {
			const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
			if (moduleExports == null) return moduleExports;
			if (isWrapped(moduleExports.prototype.use)) this._unwrap(moduleExports.prototype, "use");
			this._wrap(moduleExports.prototype, "use", this._getKoaUsePatch.bind(this));
			return module;
		}, (module) => {
			const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
			if (moduleExports && isWrapped(moduleExports.prototype.use)) this._unwrap(moduleExports.prototype, "use");
		});
	}
	/**
	* Patches the Koa.use function in order to instrument each original
	* middleware layer which is introduced
	* @param {KoaMiddleware} middleware - the original middleware function
	*/
	_getKoaUsePatch(original) {
		const patchRouterDispatch = this._patchRouterDispatch.bind(this);
		const patchLayer = this._patchLayer.bind(this);
		return function use(middlewareFunction) {
			const patchedFunction = middlewareFunction.router ? patchRouterDispatch(middlewareFunction) : patchLayer(middlewareFunction, false);
			return original.apply(this, [patchedFunction]);
		};
	}
	/**
	* Patches the dispatch function used by @koa/router. This function
	* goes through each routed middleware and adds instrumentation via a call
	* to the @function _patchLayer function.
	* @param {KoaMiddleware} dispatchLayer - the original dispatch function which dispatches
	* routed middleware
	*/
	_patchRouterDispatch(dispatchLayer) {
		const routesStack = dispatchLayer.router?.stack ?? [];
		for (const pathLayer of routesStack) {
			const path = pathLayer.path;
			const pathStack = pathLayer.stack;
			for (let j = 0; j < pathStack.length; j++) {
				const routedMiddleware = pathStack[j];
				pathStack[j] = this._patchLayer(routedMiddleware, true, path);
			}
		}
		return dispatchLayer;
	}
	/**
	* Patches each individual @param middlewareLayer function in order to create the
	* span and propagate context. It does not create spans when there is no parent span.
	* @param {KoaMiddleware} middlewareLayer - the original middleware function.
	* @param {boolean} isRouter - tracks whether the original middleware function
	* was dispatched by the router originally
	* @param {string?} layerPath - if present, provides additional data from the
	* router about the routed path which the middleware is attached to
	*/
	_patchLayer(middlewareLayer, isRouter, layerPath) {
		const layerType = isRouter ? KoaLayerType.ROUTER : KoaLayerType.MIDDLEWARE;
		if (middlewareLayer[kLayerPatched] === true || isLayerIgnored(layerType, this.getConfig())) return middlewareLayer;
		if (middlewareLayer.constructor.name === "GeneratorFunction" || middlewareLayer.constructor.name === "AsyncGeneratorFunction") return middlewareLayer;
		middlewareLayer[kLayerPatched] = true;
		return (context, next) => {
			if (import_src.trace.getSpan(import_src.context.active()) === void 0) return middlewareLayer(context, next);
			const metadata = getMiddlewareMetadata(context, middlewareLayer, isRouter, layerPath);
			if (context._matchedRoute) setHttpServerSpanRouteAttribute(context._matchedRoute.toString());
			const koaName = metadata.attributes[AttributeNames$1.KOA_NAME];
			return startSpan$2({
				name: typeof koaName === "string" ? koaName || "< unknown >" : metadata.name,
				op: `${layerType}.koa`,
				attributes: {
					...metadata.attributes,
					[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.koa"
				}
			}, () => {
				const route = metadata.attributes[Ts];
				if (getIsolationScope() === getDefaultIsolationScope()) DEBUG_BUILD$1 && debug.warn("Isolation scope is default isolation scope - skipping setting transactionName");
				else if (route) {
					const method = context.request?.method?.toUpperCase() || "GET";
					getIsolationScope().setTransactionName(`${method} ${route}`);
				}
				return middlewareLayer(context, next);
			});
		};
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/koa/index.js
var INTEGRATION_NAME$6 = "Koa";
var instrumentKoa = generateInstrumentOnce(INTEGRATION_NAME$6, KoaInstrumentation, (options = {}) => {
	return { ignoreLayersType: options.ignoreLayersType };
});
var _koaIntegration = ((options = {}) => {
	return {
		name: INTEGRATION_NAME$6,
		setupOnce() {
			instrumentKoa(options);
		}
	};
});
var koaIntegration = defineIntegration(_koaIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/connect/vendored/enums/AttributeNames.js
var AttributeNames = /* @__PURE__ */ ((AttributeNames2) => {
	AttributeNames2["CONNECT_TYPE"] = "connect.type";
	AttributeNames2["CONNECT_NAME"] = "connect.name";
	return AttributeNames2;
})(AttributeNames || {});
var ConnectTypes = /* @__PURE__ */ ((ConnectTypes2) => {
	ConnectTypes2["MIDDLEWARE"] = "middleware";
	ConnectTypes2["REQUEST_HANDLER"] = "request_handler";
	return ConnectTypes2;
})(ConnectTypes || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/connect/vendored/internal-types.js
var _LAYERS_STORE_PROPERTY = /* @__PURE__ */ Symbol("opentelemetry.instrumentation-connect.request-route-stack");
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/connect/vendored/utils.js
var addNewStackLayer = (request) => {
	if (Array.isArray(request[_LAYERS_STORE_PROPERTY]) === false) Object.defineProperty(request, _LAYERS_STORE_PROPERTY, {
		enumerable: false,
		value: []
	});
	request[_LAYERS_STORE_PROPERTY].push("/");
	const stackLength = request[_LAYERS_STORE_PROPERTY].length;
	return () => {
		if (stackLength === request[_LAYERS_STORE_PROPERTY].length) request[_LAYERS_STORE_PROPERTY].pop();
		else DEBUG_BUILD$1 && debug.warn("Connect: Trying to pop the stack multiple time");
	};
};
var replaceCurrentStackRoute = (request, newRoute) => {
	if (newRoute) request[_LAYERS_STORE_PROPERTY].splice(-1, 1, newRoute);
};
var generateRoute = (request) => {
	return request[_LAYERS_STORE_PROPERTY].reduce((acc, sub) => acc.replace(/\/+$/, "") + sub);
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/connect/vendored/instrumentation.js
var PACKAGE_NAME$3 = "@sentry/instrumentation-connect";
var ANONYMOUS_NAME = "anonymous";
var ConnectInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$3, SDK_VERSION, config);
	}
	init() {
		return [new InstrumentationNodeModuleDefinition("connect", [">=3.0.0 <4"], (moduleExports) => {
			return this._patchConstructor(moduleExports);
		})];
	}
	_patchApp(patchedApp) {
		if (!isWrapped(patchedApp.use)) this._wrap(patchedApp, "use", this._patchUse.bind(this));
		if (!isWrapped(patchedApp.handle)) this._wrap(patchedApp, "handle", this._patchHandle.bind(this));
	}
	_patchConstructor(original) {
		const patchApp = this._patchApp.bind(this);
		return function(...args) {
			const app = Reflect.apply(original, this, args);
			patchApp(app);
			return app;
		};
	}
	_patchNext(next, span, finishSpan) {
		return function nextFunction(err) {
			if (isError(err)) span.setStatus({
				code: 2,
				message: "internal_error"
			});
			const result = next.apply(this, [err]);
			finishSpan();
			return result;
		};
	}
	_startSpan(routeName, middleWare) {
		const connectType = routeName ? ConnectTypes.REQUEST_HANDLER : ConnectTypes.MIDDLEWARE;
		const connectName = routeName || middleWare.name || ANONYMOUS_NAME;
		return startInactiveSpan$1({
			name: connectName,
			op: `${connectType}.connect`,
			attributes: {
				[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.connect",
				[Ts]: routeName.length > 0 ? routeName : "/",
				[AttributeNames.CONNECT_TYPE]: connectType,
				[AttributeNames.CONNECT_NAME]: connectName
			}
		});
	}
	_patchMiddleware(routeName, middleWare) {
		const isEnabled = this.isEnabled.bind(this);
		const startSpan = this._startSpan.bind(this);
		const patchNext = this._patchNext.bind(this);
		const isErrorMiddleware = middleWare.length === 4;
		function patchedMiddleware() {
			if (!isEnabled()) return Reflect.apply(middleWare, this, arguments);
			const [reqArgIdx, resArgIdx, nextArgIdx] = isErrorMiddleware ? [
				1,
				2,
				3
			] : [
				0,
				1,
				2
			];
			const req = arguments[reqArgIdx];
			const res = arguments[resArgIdx];
			const next = arguments[nextArgIdx];
			replaceCurrentStackRoute(req, routeName);
			if (routeName) setHttpServerSpanRouteAttribute(generateRoute(req));
			const span = startSpan(routeName, middleWare);
			let spanFinished = false;
			function finishSpan() {
				if (!spanFinished) {
					spanFinished = true;
					span.end();
				}
				res.removeListener("close", finishSpan);
			}
			res.addListener("close", finishSpan);
			arguments[nextArgIdx] = patchNext(next, span, finishSpan);
			try {
				return Reflect.apply(middleWare, this, arguments);
			} catch (e) {
				span.setStatus({
					code: 2,
					message: "internal_error"
				});
				finishSpan();
				throw e;
			}
		}
		Object.defineProperty(patchedMiddleware, "length", {
			value: middleWare.length,
			writable: false,
			configurable: true
		});
		return patchedMiddleware;
	}
	_patchUse(original) {
		const patchMiddleware = this._patchMiddleware.bind(this);
		return function(...args) {
			const middleWare = args[args.length - 1];
			const routeName = args[args.length - 2] || "";
			args[args.length - 1] = patchMiddleware(routeName, middleWare);
			return original.apply(this, args);
		};
	}
	_patchHandle(original) {
		const patchOut = this._patchOut.bind(this);
		return function() {
			const [reqIdx, outIdx] = [0, 2];
			const req = arguments[reqIdx];
			const out = arguments[outIdx];
			const completeStack = addNewStackLayer(req);
			if (typeof out === "function") arguments[outIdx] = patchOut(out, completeStack);
			return Reflect.apply(original, this, arguments);
		};
	}
	_patchOut(out, completeStack) {
		return function nextFunction(...args) {
			completeStack();
			return Reflect.apply(out, this, args);
		};
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/connect/index.js
var INTEGRATION_NAME$5 = "Connect";
var instrumentConnect = generateInstrumentOnce(INTEGRATION_NAME$5, () => new ConnectInstrumentation());
var _connectIntegration = (() => {
	return {
		name: INTEGRATION_NAME$5,
		setupOnce() {
			instrumentConnect();
		}
	};
});
var connectIntegration = defineIntegration(_connectIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/tedious/vendored/semconv.js
var ATTR_DB_SQL_TABLE = "db.sql.table";
var DB_SYSTEM_VALUE_MSSQL = "mssql";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/tedious/vendored/utils.js
function getSpanName(operation, db, sql, bulkLoadTable) {
	if (operation === "execBulkLoad" && bulkLoadTable && db) return `${operation} ${bulkLoadTable} ${db}`;
	if (operation === "callProcedure") {
		if (db) return `${operation} ${sql} ${db}`;
		return `${operation} ${sql}`;
	}
	if (db) return `${operation} ${db}`;
	return `${operation}`;
}
var once = (fn) => {
	let called = false;
	return (...args) => {
		if (called) return;
		called = true;
		return fn(...args);
	};
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/tedious/vendored/instrumentation.js
var PACKAGE_NAME$2 = "@sentry/instrumentation-tedious";
var CURRENT_DATABASE = /* @__PURE__ */ Symbol("opentelemetry.instrumentation-tedious.current-database");
var PATCHED_METHODS = [
	"callProcedure",
	"execSql",
	"execSqlBatch",
	"execBulkLoad",
	"prepare",
	"execute"
];
function setDatabase(databaseName) {
	Object.defineProperty(this, CURRENT_DATABASE, {
		value: databaseName,
		writable: true
	});
}
var _TediousInstrumentation = class _TediousInstrumentation extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$2, SDK_VERSION, config);
	}
	init() {
		return [new InstrumentationNodeModuleDefinition(_TediousInstrumentation.COMPONENT, [">=1.11.0 <20"], (moduleExports) => {
			const ConnectionPrototype = moduleExports.Connection.prototype;
			for (const method of PATCHED_METHODS) {
				if (isWrapped(ConnectionPrototype[method])) this._unwrap(ConnectionPrototype, method);
				this._wrap(ConnectionPrototype, method, this._patchQuery(method));
			}
			if (isWrapped(ConnectionPrototype.connect)) this._unwrap(ConnectionPrototype, "connect");
			this._wrap(ConnectionPrototype, "connect", this._patchConnect);
			return moduleExports;
		}, (moduleExports) => {
			if (moduleExports === void 0) return;
			const ConnectionPrototype = moduleExports.Connection.prototype;
			for (const method of PATCHED_METHODS) this._unwrap(ConnectionPrototype, method);
			this._unwrap(ConnectionPrototype, "connect");
		})];
	}
	_patchConnect(original) {
		return function patchedConnect() {
			setDatabase.call(this, this.config?.options?.database);
			this.removeListener("databaseChange", setDatabase);
			this.on("databaseChange", setDatabase);
			this.once("end", () => {
				this.removeListener("databaseChange", setDatabase);
			});
			return original.apply(this, arguments);
		};
	}
	_patchQuery(operation) {
		return (originalMethod) => {
			const thisPlugin = this;
			function patchedMethod(request) {
				if (!(request instanceof EventEmitter$1)) {
					thisPlugin._diag.warn(`Unexpected invocation of patched ${operation} method. Span not recorded`);
					return originalMethod.apply(this, arguments);
				}
				let procCount = 0;
				let statementCount = 0;
				const incrementStatementCount = () => statementCount++;
				const incrementProcCount = () => procCount++;
				const databaseName = this[CURRENT_DATABASE];
				const sql = ((request2) => {
					if (request2.sqlTextOrProcedure === "sp_prepare" && request2.parametersByName?.stmt?.value) return request2.parametersByName.stmt.value;
					return request2.sqlTextOrProcedure;
				})(request);
				const attributes = {
					[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.tedious",
					[Kt]: DB_SYSTEM_VALUE_MSSQL,
					[Nt]: databaseName,
					[Qt]: this.config?.userName ?? this.config?.authentication?.options?.userName,
					[Ht]: sql,
					[ATTR_DB_SQL_TABLE]: request.table,
					[Il]: this.config?.server,
					[Ol]: this.config?.options?.port
				};
				const span = startInactiveSpan$1({
					name: getSpanName(operation, databaseName, sql, request.table),
					kind: SPAN_KIND.CLIENT,
					attributes
				});
				const endSpan = once((err) => {
					request.removeListener("done", incrementStatementCount);
					request.removeListener("doneInProc", incrementStatementCount);
					request.removeListener("doneProc", incrementProcCount);
					request.removeListener("error", endSpan);
					this.removeListener("end", endSpan);
					span.setAttribute("tedious.procedure_count", procCount);
					span.setAttribute("tedious.statement_count", statementCount);
					if (err) span.setStatus({
						code: 2,
						message: err.message
					});
					span.end();
				});
				request.on("done", incrementStatementCount);
				request.on("doneInProc", incrementStatementCount);
				request.on("doneProc", incrementProcCount);
				request.once("error", endSpan);
				this.on("end", endSpan);
				if (typeof request.callback === "function") thisPlugin._wrap(request, "callback", thisPlugin._patchCallbackQuery(endSpan));
				else thisPlugin._diag.error("Expected request.callback to be a function");
				return withActiveSpan$1(span, () => originalMethod.apply(this, arguments));
			}
			Object.defineProperty(patchedMethod, "length", {
				value: originalMethod.length,
				writable: false
			});
			return patchedMethod;
		};
	}
	_patchCallbackQuery(endSpan) {
		return (originalCallback) => {
			return function(err, _rowCount, _rows) {
				endSpan(err);
				return originalCallback.apply(this, arguments);
			};
		};
	}
};
_TediousInstrumentation.COMPONENT = "tedious";
var TediousInstrumentation = _TediousInstrumentation;
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/tedious/index.js
var INTEGRATION_NAME$4 = "Tedious";
var instrumentTedious = generateInstrumentOnce(INTEGRATION_NAME$4, () => new TediousInstrumentation({}));
var _tediousIntegration = (() => {
	return {
		name: INTEGRATION_NAME$4,
		setupOnce() {
			instrumentTedious();
		}
	};
});
var tediousIntegration = defineIntegration(_tediousIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/genericPool/vendored/instrumentation.js
var MODULE_NAME = "generic-pool";
var PACKAGE_NAME$1 = "@sentry/instrumentation-generic-pool";
var GenericPoolInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME$1, SDK_VERSION, config);
		this._isDisabled = false;
	}
	init() {
		return [
			new InstrumentationNodeModuleDefinition(MODULE_NAME, [">=3.0.0 <4"], (moduleExports) => {
				const Pool = moduleExports.Pool;
				if (isWrapped(Pool.prototype.acquire)) this._unwrap(Pool.prototype, "acquire");
				this._wrap(Pool.prototype, "acquire", this._acquirePatcher.bind(this));
				return moduleExports;
			}, (moduleExports) => {
				const Pool = moduleExports.Pool;
				this._unwrap(Pool.prototype, "acquire");
				return moduleExports;
			}),
			new InstrumentationNodeModuleDefinition(MODULE_NAME, [">=2.4.0 <3"], (moduleExports) => {
				const Pool = moduleExports.Pool;
				if (isWrapped(Pool.prototype.acquire)) this._unwrap(Pool.prototype, "acquire");
				this._wrap(Pool.prototype, "acquire", this._acquireWithCallbacksPatcher.bind(this));
				return moduleExports;
			}, (moduleExports) => {
				const Pool = moduleExports.Pool;
				this._unwrap(Pool.prototype, "acquire");
				return moduleExports;
			}),
			new InstrumentationNodeModuleDefinition(MODULE_NAME, [">=2.0.0 <2.4"], (moduleExports) => {
				this._isDisabled = false;
				if (isWrapped(moduleExports.Pool)) this._unwrap(moduleExports, "Pool");
				this._wrap(moduleExports, "Pool", this._poolWrapper.bind(this));
				return moduleExports;
			}, (moduleExports) => {
				this._isDisabled = true;
				return moduleExports;
			})
		];
	}
	_acquirePatcher(original) {
		return function wrapped_acquire(...args) {
			return startSpan$2({
				name: "generic-pool.acquire",
				attributes: { [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.generic_pool" }
			}, () => {
				return original.call(this, ...args);
			});
		};
	}
	_poolWrapper(original) {
		const wrap = this._wrap.bind(this);
		const acquireWithCallbacksPatcher = this._acquireWithCallbacksPatcher.bind(this);
		return function wrapped_pool(...args) {
			const pool = original.apply(this, args);
			wrap(pool, "acquire", acquireWithCallbacksPatcher);
			return pool;
		};
	}
	_acquireWithCallbacksPatcher(original) {
		const isDisabled = () => this._isDisabled;
		return function wrapped_acquire(cb, priority) {
			if (isDisabled()) return original.call(this, cb, priority);
			return startSpanManual$1({
				name: "generic-pool.acquire",
				attributes: { [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.generic_pool" }
			}, (span) => {
				original.call(this, (err, client) => {
					if (err) span.setStatus({
						code: 2,
						message: "internal_error"
					});
					span.end();
					if (cb) cb(err, client);
				}, priority);
			});
		};
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/genericPool/index.js
var INTEGRATION_NAME$3 = "GenericPool";
var instrumentGenericPool = generateInstrumentOnce(INTEGRATION_NAME$3, () => new GenericPoolInstrumentation({}));
var _genericPoolIntegration = (() => {
	return {
		name: INTEGRATION_NAME$3,
		setupOnce() {
			instrumentGenericPool();
		}
	};
});
var genericPoolIntegration = defineIntegration(_genericPoolIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/amqplib/vendored/types.js
var EndOperation = /* @__PURE__ */ ((EndOperation2) => {
	EndOperation2["AutoAck"] = "auto ack";
	EndOperation2["Ack"] = "ack";
	EndOperation2["AckAll"] = "ackAll";
	EndOperation2["Reject"] = "reject";
	EndOperation2["Nack"] = "nack";
	EndOperation2["NackAll"] = "nackAll";
	EndOperation2["ChannelClosed"] = "channel closed";
	EndOperation2["ChannelError"] = "channel error";
	EndOperation2["InstrumentationTimeout"] = "instrumentation timeout";
	return EndOperation2;
})(EndOperation || {});
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/amqplib/vendored/semconv.js
var ATTR_MESSAGING_OPERATION = "messaging.operation";
var ATTR_MESSAGING_DESTINATION = "messaging.destination";
var ATTR_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
var ATTR_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
var ATTR_MESSAGING_PROTOCOL = "messaging.protocol";
var ATTR_MESSAGING_PROTOCOL_VERSION = "messaging.protocol_version";
var ATTR_MESSAGING_URL = "messaging.url";
var OLD_ATTR_MESSAGING_MESSAGE_ID = "messaging.message_id";
var ATTR_MESSAGING_CONVERSATION_ID = "messaging.conversation_id";
var MESSAGING_DESTINATION_KIND_VALUE_TOPIC = "topic";
var MESSAGING_OPERATION_VALUE_PROCESS = "process";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/amqplib/vendored/utils.js
var PUBLISHER_ORIGIN = "auto.amqplib.otel.publisher";
var CONSUMER_ORIGIN = "auto.amqplib.otel.consumer";
var MESSAGE_STORED_SPAN = /* @__PURE__ */ Symbol("opentelemetry.amqplib.message.stored-span");
var CHANNEL_SPANS_NOT_ENDED = /* @__PURE__ */ Symbol("opentelemetry.amqplib.channel.spans-not-ended");
var CHANNEL_CONSUME_TIMEOUT_TIMER = /* @__PURE__ */ Symbol("opentelemetry.amqplib.channel.consumer-timeout-timer");
var CONNECTION_ATTRIBUTES = /* @__PURE__ */ Symbol("opentelemetry.amqplib.connection.attributes");
var CHANNEL_IS_CONFIRM_PUBLISHING = /* @__PURE__ */ Symbol("sentry.amqplib.channel.is-confirm-publishing");
var normalizeExchange = (exchangeName) => exchangeName !== "" ? exchangeName : "<default>";
var censorPassword = (url) => {
	return url.replace(/:[^:@/]*@/, ":***@");
};
var getPort = (portFromUrl, resolvedProtocol) => {
	return portFromUrl || (resolvedProtocol === "AMQP" ? 5672 : 5671);
};
var getProtocol = (protocolFromUrl) => {
	const resolvedProtocol = protocolFromUrl || "amqp";
	return (resolvedProtocol.endsWith(":") ? resolvedProtocol.substring(0, resolvedProtocol.length - 1) : resolvedProtocol).toUpperCase();
};
var getHostname = (hostnameFromUrl) => {
	return hostnameFromUrl || "localhost";
};
var getConnectionAttributesFromServer = (conn) => {
	const product = conn.serverProperties.product?.toLowerCase?.();
	if (product) return { [Zo]: product };
	else return {};
};
var getConnectionAttributesFromUrl = (url) => {
	const attributes = { [ATTR_MESSAGING_PROTOCOL_VERSION]: "0.9.1" };
	const resolvedUrl = url || "amqp://localhost";
	if (typeof resolvedUrl === "object") {
		const connectOptions = resolvedUrl;
		const protocol = getProtocol(connectOptions?.protocol);
		attributes[ATTR_MESSAGING_PROTOCOL] = protocol;
		attributes[Il] = getHostname(connectOptions?.hostname);
		attributes[Ol] = getPort(connectOptions.port, protocol);
	} else {
		const censoredUrl = censorPassword(resolvedUrl);
		attributes[ATTR_MESSAGING_URL] = censoredUrl;
		try {
			const urlParts = new URL(censoredUrl);
			const protocol = getProtocol(urlParts.protocol);
			attributes[ATTR_MESSAGING_PROTOCOL] = protocol;
			attributes[Il] = getHostname(urlParts.hostname);
			attributes[Ol] = getPort(urlParts.port ? parseInt(urlParts.port) : void 0, protocol);
		} catch {}
	}
	return attributes;
};
function getHeaderAsString(headers, key) {
	const value = headers?.[key];
	if (value == null) return;
	return Array.isArray(value) ? String(value[0]) : String(value);
}
function startPublishSpan(exchange, routingKey, channel, options) {
	const span = startInactiveSpan$1({
		name: `publish ${normalizeExchange(exchange)}`,
		kind: import_src.SpanKind.PRODUCER,
		attributes: {
			...channel.connection[CONNECTION_ATTRIBUTES],
			[ATTR_MESSAGING_DESTINATION]: exchange,
			[ATTR_MESSAGING_DESTINATION_KIND]: MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
			[ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: routingKey,
			[OLD_ATTR_MESSAGING_MESSAGE_ID]: options?.messageId,
			[ATTR_MESSAGING_CONVERSATION_ID]: options?.correlationId,
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: PUBLISHER_ORIGIN
		}
	});
	const modifiedOptions = options ?? {};
	modifiedOptions.headers = modifiedOptions.headers ?? {};
	const traceData = getTraceData$1({ span });
	if (traceData["sentry-trace"]) modifiedOptions.headers["sentry-trace"] = traceData["sentry-trace"];
	if (traceData.baggage) modifiedOptions.headers["baggage"] = traceData.baggage;
	return {
		span,
		modifiedOptions
	};
}
function startConsumeSpan(queue, msg, channel) {
	return startInactiveSpan$1({
		name: `${queue} process`,
		kind: import_src.SpanKind.CONSUMER,
		attributes: {
			...channel?.connection?.[CONNECTION_ATTRIBUTES],
			[ATTR_MESSAGING_DESTINATION]: msg.fields?.exchange,
			[ATTR_MESSAGING_DESTINATION_KIND]: MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
			[ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: msg.fields?.routingKey,
			[ATTR_MESSAGING_OPERATION]: MESSAGING_OPERATION_VALUE_PROCESS,
			[OLD_ATTR_MESSAGING_MESSAGE_ID]: msg?.properties.messageId,
			[ATTR_MESSAGING_CONVERSATION_ID]: msg?.properties.correlationId,
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: CONSUMER_ORIGIN
		}
	});
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/amqplib/vendored/patches.js
var CONSUME_TIMEOUT_MS = 1e3 * 60;
function endConsumerSpan(message, isRejected, operation, requeue) {
	const storedSpan = message[MESSAGE_STORED_SPAN];
	if (!storedSpan) return;
	if (isRejected !== false) storedSpan.setStatus({
		code: 2,
		message: operation !== EndOperation.ChannelClosed && operation !== EndOperation.ChannelError ? `${operation} called on message${requeue === true ? " with requeue" : requeue === false ? " without requeue" : ""}` : operation
	});
	storedSpan.end();
	message[MESSAGE_STORED_SPAN] = void 0;
}
function endAllSpansOnChannel(channel, isRejected, operation, requeue) {
	(channel[CHANNEL_SPANS_NOT_ENDED] ?? []).forEach((msgDetails) => {
		endConsumerSpan(msgDetails.msg, isRejected, operation, requeue);
	});
	channel[CHANNEL_SPANS_NOT_ENDED] = [];
}
function checkConsumeTimeoutOnChannel(channel) {
	const currentTime = timestampInSeconds();
	const spansNotEnded = channel[CHANNEL_SPANS_NOT_ENDED] ?? [];
	let i;
	for (i = 0; i < spansNotEnded.length; i++) {
		const currMessage = spansNotEnded[i];
		if ((currentTime - currMessage.timeOfConsume) * 1e3 < CONSUME_TIMEOUT_MS) break;
		endConsumerSpan(currMessage.msg, null, EndOperation.InstrumentationTimeout, true);
	}
	spansNotEnded.splice(0, i);
}
function getConnectPatch(original) {
	return function patchedConnect(url, socketOptions, openCallback) {
		return original.call(this, url, socketOptions, function(err, conn) {
			if (err == null) {
				const urlAttributes = getConnectionAttributesFromUrl(url);
				const serverAttributes = getConnectionAttributesFromServer(conn);
				conn[CONNECTION_ATTRIBUTES] = {
					...urlAttributes,
					...serverAttributes
				};
			}
			openCallback.apply(this, arguments);
		});
	};
}
function getChannelEmitPatch(original) {
	return function emit(eventName) {
		if (eventName === "close") {
			endAllSpansOnChannel(this, true, EndOperation.ChannelClosed, void 0);
			const activeTimer = this[CHANNEL_CONSUME_TIMEOUT_TIMER];
			if (activeTimer) clearInterval(activeTimer);
			this[CHANNEL_CONSUME_TIMEOUT_TIMER] = void 0;
		} else if (eventName === "error") endAllSpansOnChannel(this, true, EndOperation.ChannelError, void 0);
		return original.apply(this, arguments);
	};
}
function getAckAllPatch(isRejected, endOperation) {
	return (original) => function ackAll(requeueOrEmpty) {
		endAllSpansOnChannel(this, isRejected, endOperation, requeueOrEmpty);
		return original.apply(this, arguments);
	};
}
function getAckPatch(isRejected, endOperation) {
	return (original) => function ack(message, allUpToOrRequeue, requeue) {
		const channel = this;
		const requeueResolved = endOperation === EndOperation.Reject ? allUpToOrRequeue : requeue;
		const spansNotEnded = channel[CHANNEL_SPANS_NOT_ENDED] ?? [];
		const msgIndex = spansNotEnded.findIndex((msgDetails) => msgDetails.msg === message);
		if (msgIndex < 0) endConsumerSpan(message, isRejected, endOperation, requeueResolved);
		else if (endOperation !== EndOperation.Reject && allUpToOrRequeue) {
			for (let i = 0; i <= msgIndex; i++) endConsumerSpan(spansNotEnded[i].msg, isRejected, endOperation, requeueResolved);
			spansNotEnded.splice(0, msgIndex + 1);
		} else {
			endConsumerSpan(message, isRejected, endOperation, requeueResolved);
			spansNotEnded.splice(msgIndex, 1);
		}
		return original.apply(this, arguments);
	};
}
function getConsumePatch(original) {
	return function consume(queue, onMessage, options) {
		const channel = this;
		if (!Object.prototype.hasOwnProperty.call(channel, CHANNEL_SPANS_NOT_ENDED)) {
			const timer = setInterval(() => {
				checkConsumeTimeoutOnChannel(channel);
			}, CONSUME_TIMEOUT_MS);
			timer.unref();
			channel[CHANNEL_CONSUME_TIMEOUT_TIMER] = timer;
			channel[CHANNEL_SPANS_NOT_ENDED] = [];
		}
		const patchedOnMessage = function(msg) {
			if (!msg) return onMessage.call(this, msg);
			const headers = msg.properties.headers ?? {};
			continueTrace$1({
				sentryTrace: getHeaderAsString(headers, "sentry-trace"),
				baggage: getHeaderAsString(headers, "baggage")
			}, () => {
				const span = startConsumeSpan(queue, msg, channel);
				if (!options?.noAck) {
					channel[CHANNEL_SPANS_NOT_ENDED].push({
						msg,
						timeOfConsume: timestampInSeconds()
					});
					msg[MESSAGE_STORED_SPAN] = span;
				}
				withActiveSpan$1(span, () => {
					onMessage.call(this, msg);
				});
				if (options?.noAck) span.end();
			});
		};
		const callArgs = Array.prototype.slice.call(arguments);
		callArgs[1] = patchedOnMessage;
		return original.apply(this, callArgs);
	};
}
function getConfirmedPublishPatch(original) {
	return function confirmedPublish(exchange, routingKey, content, options, callback) {
		const channel = this;
		const { span, modifiedOptions } = startPublishSpan(exchange, routingKey, channel, options);
		const patchedOnConfirm = function(err, ok) {
			try {
				withActiveSpan$1(span, () => {
					callback?.call(this, err, ok);
				});
			} finally {
				if (err) span.setStatus({
					code: 2,
					message: "message confirmation has been nack'ed"
				});
				span.end();
			}
		};
		const argumentsCopy = [...arguments];
		argumentsCopy[3] = modifiedOptions;
		argumentsCopy[4] = patchedOnConfirm;
		channel[CHANNEL_IS_CONFIRM_PUBLISHING] = true;
		try {
			return original.apply(this, argumentsCopy);
		} finally {
			channel[CHANNEL_IS_CONFIRM_PUBLISHING] = false;
		}
	};
}
function getPublishPatch(original) {
	return function publish(exchange, routingKey, content, options) {
		if (this[CHANNEL_IS_CONFIRM_PUBLISHING]) return original.apply(this, arguments);
		const { span, modifiedOptions } = startPublishSpan(exchange, routingKey, this, options);
		const argumentsCopy = [...arguments];
		argumentsCopy[3] = modifiedOptions;
		const originalRes = original.apply(this, argumentsCopy);
		span.end();
		return originalRes;
	};
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/amqplib/vendored/instrumentation.js
var PACKAGE_NAME = "@sentry/instrumentation-amqplib";
var supportedVersions$5 = [">=0.5.5 <2"];
var AmqplibInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super(PACKAGE_NAME, SDK_VERSION, config);
	}
	init() {
		const channelModelModuleFile = new InstrumentationNodeModuleFile("amqplib/lib/channel_model.js", supportedVersions$5, this.patchChannelModel.bind(this), this.unpatchChannelModel.bind(this));
		const callbackModelModuleFile = new InstrumentationNodeModuleFile("amqplib/lib/callback_model.js", supportedVersions$5, this.patchChannelModel.bind(this), this.unpatchChannelModel.bind(this));
		return new InstrumentationNodeModuleDefinition("amqplib", supportedVersions$5, void 0, void 0, [
			channelModelModuleFile,
			new InstrumentationNodeModuleFile("amqplib/lib/connect.js", supportedVersions$5, this.patchConnect.bind(this), this.unpatchConnect.bind(this)),
			callbackModelModuleFile
		]);
	}
	patchConnect(moduleExports) {
		const unpatchedExports = this.unpatchConnect(moduleExports);
		if (!isWrapped(unpatchedExports.connect)) this._wrap(unpatchedExports, "connect", getConnectPatch);
		return unpatchedExports;
	}
	unpatchConnect(moduleExports) {
		if (isWrapped(moduleExports.connect)) this._unwrap(moduleExports, "connect");
		return moduleExports;
	}
	patchChannelModel(moduleExports) {
		if (!isWrapped(moduleExports.Channel.prototype.publish)) this._wrap(moduleExports.Channel.prototype, "publish", getPublishPatch);
		if (!isWrapped(moduleExports.Channel.prototype.consume)) this._wrap(moduleExports.Channel.prototype, "consume", getConsumePatch);
		if (!isWrapped(moduleExports.Channel.prototype.ack)) this._wrap(moduleExports.Channel.prototype, "ack", getAckPatch(false, EndOperation.Ack));
		if (!isWrapped(moduleExports.Channel.prototype.nack)) this._wrap(moduleExports.Channel.prototype, "nack", getAckPatch(true, EndOperation.Nack));
		if (!isWrapped(moduleExports.Channel.prototype.reject)) this._wrap(moduleExports.Channel.prototype, "reject", getAckPatch(true, EndOperation.Reject));
		if (!isWrapped(moduleExports.Channel.prototype.ackAll)) this._wrap(moduleExports.Channel.prototype, "ackAll", getAckAllPatch(false, EndOperation.AckAll));
		if (!isWrapped(moduleExports.Channel.prototype.nackAll)) this._wrap(moduleExports.Channel.prototype, "nackAll", getAckAllPatch(true, EndOperation.NackAll));
		if (!isWrapped(moduleExports.Channel.prototype.emit)) this._wrap(moduleExports.Channel.prototype, "emit", getChannelEmitPatch);
		if (!isWrapped(moduleExports.ConfirmChannel.prototype.publish)) this._wrap(moduleExports.ConfirmChannel.prototype, "publish", getConfirmedPublishPatch);
		return moduleExports;
	}
	unpatchChannelModel(moduleExports) {
		if (isWrapped(moduleExports.Channel.prototype.publish)) this._unwrap(moduleExports.Channel.prototype, "publish");
		if (isWrapped(moduleExports.Channel.prototype.consume)) this._unwrap(moduleExports.Channel.prototype, "consume");
		if (isWrapped(moduleExports.Channel.prototype.ack)) this._unwrap(moduleExports.Channel.prototype, "ack");
		if (isWrapped(moduleExports.Channel.prototype.nack)) this._unwrap(moduleExports.Channel.prototype, "nack");
		if (isWrapped(moduleExports.Channel.prototype.reject)) this._unwrap(moduleExports.Channel.prototype, "reject");
		if (isWrapped(moduleExports.Channel.prototype.ackAll)) this._unwrap(moduleExports.Channel.prototype, "ackAll");
		if (isWrapped(moduleExports.Channel.prototype.nackAll)) this._unwrap(moduleExports.Channel.prototype, "nackAll");
		if (isWrapped(moduleExports.Channel.prototype.emit)) this._unwrap(moduleExports.Channel.prototype, "emit");
		if (isWrapped(moduleExports.ConfirmChannel.prototype.publish)) this._unwrap(moduleExports.ConfirmChannel.prototype, "publish");
		return moduleExports;
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/amqplib/index.js
var INTEGRATION_NAME$2 = "Amqplib";
var instrumentAmqplib = generateInstrumentOnce(INTEGRATION_NAME$2, () => new AmqplibInstrumentation());
var _amqplibIntegration = (() => {
	return {
		name: INTEGRATION_NAME$2,
		setupOnce() {
			instrumentAmqplib();
		}
	};
});
var amqplibIntegration = defineIntegration(_amqplibIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/vercelai/constants.js
var INTEGRATION_NAME$1 = "VercelAI";
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/vercelai/instrumentation.js
var SUPPORTED_VERSIONS = [">=3.0.0 <7"];
var INSTRUMENTED_METHODS = [
	"generateText",
	"streamText",
	"generateObject",
	"streamObject",
	"embed",
	"embedMany",
	"rerank"
];
function isToolError(obj) {
	if (typeof obj !== "object" || obj === null) return false;
	const candidate = obj;
	return "type" in candidate && "error" in candidate && "toolName" in candidate && "toolCallId" in candidate && candidate.type === "tool-error" && candidate.error instanceof Error;
}
function processToolCallResults(result) {
	if (typeof result !== "object" || result === null || !("content" in result)) return;
	const resultObj = result;
	if (!Array.isArray(resultObj.content)) return;
	captureToolErrors(resultObj.content);
	cleanupToolCallSpanContexts(resultObj.content);
}
function captureToolErrors(content) {
	for (const item of content) {
		if (!isToolError(item)) continue;
		const spanContext = _INTERNAL_getSpanContextForToolCallId(item.toolCallId);
		if (spanContext) withScope((scope) => {
			scope.setContext("trace", {
				trace_id: spanContext.traceId,
				span_id: spanContext.spanId
			});
			scope.setTag("vercel.ai.tool.name", item.toolName);
			scope.setTag("vercel.ai.tool.callId", item.toolCallId);
			scope.setLevel("error");
			captureException(item.error, { mechanism: {
				type: "auto.vercelai.otel",
				handled: false
			} });
		});
		else withScope((scope) => {
			scope.setTag("vercel.ai.tool.name", item.toolName);
			scope.setTag("vercel.ai.tool.callId", item.toolCallId);
			scope.setLevel("error");
			captureException(item.error, { mechanism: {
				type: "auto.vercelai.otel",
				handled: false
			} });
		});
	}
}
function cleanupToolCallSpanContexts(content) {
	for (const item of content) if (typeof item === "object" && item !== null && "toolCallId" in item && typeof item.toolCallId === "string") _INTERNAL_cleanupToolCallSpanContext(item.toolCallId);
}
function determineRecordingSettings(integrationRecordingOptions, methodTelemetryOptions, telemetryExplicitlyEnabled, defaultInputsEnabled, defaultOutputsEnabled) {
	return {
		recordInputs: integrationRecordingOptions?.recordInputs !== void 0 ? integrationRecordingOptions.recordInputs : methodTelemetryOptions.recordInputs !== void 0 ? methodTelemetryOptions.recordInputs : telemetryExplicitlyEnabled === true ? true : defaultInputsEnabled,
		recordOutputs: integrationRecordingOptions?.recordOutputs !== void 0 ? integrationRecordingOptions.recordOutputs : methodTelemetryOptions.recordOutputs !== void 0 ? methodTelemetryOptions.recordOutputs : telemetryExplicitlyEnabled === true ? true : defaultOutputsEnabled
	};
}
var SentryVercelAiInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super("@sentry/instrumentation-vercel-ai", SDK_VERSION, config);
		this._isPatched = false;
		this._callbacks = [];
	}
	/**
	* Initializes the instrumentation by defining the modules to be patched.
	*/
	init() {
		return new InstrumentationNodeModuleDefinition("ai", SUPPORTED_VERSIONS, this._patch.bind(this));
	}
	/**
	* Call the provided callback when the module is patched.
	* If it has already been patched, the callback will be called immediately.
	*/
	callWhenPatched(callback) {
		if (this._isPatched) callback();
		else this._callbacks.push(callback);
	}
	/**
	* Patches module exports to enable Vercel AI telemetry.
	*/
	_patch(moduleExports) {
		this._isPatched = true;
		this._callbacks.forEach((callback) => callback());
		this._callbacks = [];
		const generatePatch = (originalMethod) => {
			return new Proxy(originalMethod, { apply: (target, thisArg, args) => {
				const existingExperimentalTelemetry = args[0].experimental_telemetry || {};
				const isEnabled = existingExperimentalTelemetry.isEnabled;
				const client = getClient();
				const integration = client?.getIntegrationByName(INTEGRATION_NAME$1);
				const integrationOptions = integration?.options;
				const genAI = integration ? client?.getDataCollectionOptions().genAI : void 0;
				const { recordInputs, recordOutputs } = determineRecordingSettings(integrationOptions, existingExperimentalTelemetry, isEnabled, Boolean(genAI?.inputs), Boolean(genAI?.outputs));
				args[0].experimental_telemetry = {
					...existingExperimentalTelemetry,
					isEnabled: isEnabled !== void 0 ? isEnabled : true,
					recordInputs,
					recordOutputs
				};
				return handleCallbackErrors(() => Reflect.apply(target, thisArg, args), (error) => {
					if (error && typeof error === "object") addNonEnumerableProperty(error, "_sentry_active_span", getActiveSpan$1());
				}, () => {}, (result) => {
					processToolCallResults(result);
				});
			} });
		};
		if (Object.prototype.toString.call(moduleExports) === "[object Module]") {
			for (const method of INSTRUMENTED_METHODS) if (moduleExports[method] != null) moduleExports[method] = generatePatch(moduleExports[method]);
			return moduleExports;
		} else {
			const patchedModuleExports = INSTRUMENTED_METHODS.reduce((acc, curr) => {
				if (moduleExports[curr] != null) acc[curr] = generatePatch(moduleExports[curr]);
				return acc;
			}, {});
			return {
				...moduleExports,
				...patchedModuleExports
			};
		}
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/vercelai/index.js
var instrumentVercelAi = generateInstrumentOnce(INTEGRATION_NAME$1, () => new SentryVercelAiInstrumentation({}));
function shouldForceIntegration(client) {
	return !!client.getIntegrationByName("Modules")?.getModules?.()?.ai;
}
var _vercelAIIntegration = ((options = {}) => {
	let instrumentation;
	return extendIntegration(vercelAiIntegration(options), {
		options,
		setupOnce() {
			instrumentation = instrumentVercelAi();
		},
		afterAllSetup(client) {
			if (options.force ?? shouldForceIntegration(client)) addVercelAiProcessors(client);
			else instrumentation?.callWhenPatched(() => addVercelAiProcessors(client));
		}
	});
});
var vercelAIIntegration = defineIntegration(_vercelAIIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/openai/instrumentation.js
var supportedVersions$4 = [">=4.0.0 <7"];
var SentryOpenAiInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super("@sentry/instrumentation-openai", SDK_VERSION, config);
	}
	/**
	* Initializes the instrumentation by defining the modules to be patched.
	*/
	init() {
		return new InstrumentationNodeModuleDefinition("openai", supportedVersions$4, this._patch.bind(this));
	}
	/**
	* Core patch logic applying instrumentation to the OpenAI and AzureOpenAI client constructors.
	*/
	_patch(exports) {
		let result = exports;
		result = this._patchClient(result, "OpenAI");
		result = this._patchClient(result, "AzureOpenAI");
		return result;
	}
	/**
	* Patch logic applying instrumentation to the specified client constructor.
	*/
	_patchClient(exports, exportKey) {
		const Original = exports[exportKey];
		if (!Original) return exports;
		const config = this.getConfig();
		const WrappedOpenAI = function(...args) {
			if (_INTERNAL_shouldSkipAiProviderWrapping("OpenAI")) return Reflect.construct(Original, args);
			return instrumentOpenAiClient(Reflect.construct(Original, args), config);
		};
		Object.setPrototypeOf(WrappedOpenAI, Original);
		Object.setPrototypeOf(WrappedOpenAI.prototype, Original.prototype);
		for (const key of Object.getOwnPropertyNames(Original)) if (![
			"length",
			"name",
			"prototype"
		].includes(key)) {
			const descriptor = Object.getOwnPropertyDescriptor(Original, key);
			if (descriptor) Object.defineProperty(WrappedOpenAI, key, descriptor);
		}
		try {
			exports[exportKey] = WrappedOpenAI;
		} catch {
			Object.defineProperty(exports, exportKey, {
				value: WrappedOpenAI,
				writable: true,
				configurable: true,
				enumerable: true
			});
		}
		if (exports.default === Original) try {
			exports.default = WrappedOpenAI;
		} catch {
			Object.defineProperty(exports, "default", {
				value: WrappedOpenAI,
				writable: true,
				configurable: true,
				enumerable: true
			});
		}
		return exports;
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/openai/index.js
var instrumentOpenAi = generateInstrumentOnce(OPENAI_INTEGRATION_NAME, (options) => new SentryOpenAiInstrumentation(options));
var _openAiIntegration = ((options = {}) => {
	return {
		name: OPENAI_INTEGRATION_NAME,
		setupOnce() {
			instrumentOpenAi(options);
		}
	};
});
var openAIIntegration = defineIntegration(_openAiIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/anthropic-ai/instrumentation.js
var supportedVersions$3 = [">=0.19.2 <1.0.0"];
var SentryAnthropicAiInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super("@sentry/instrumentation-anthropic-ai", SDK_VERSION, config);
	}
	/**
	* Initializes the instrumentation by defining the modules to be patched.
	*/
	init() {
		return new InstrumentationNodeModuleDefinition("@anthropic-ai/sdk", supportedVersions$3, this._patch.bind(this));
	}
	/**
	* Core patch logic applying instrumentation to the Anthropic AI client constructor.
	*/
	_patch(exports) {
		const Original = exports.Anthropic;
		const config = this.getConfig();
		const WrappedAnthropic = function(...args) {
			if (_INTERNAL_shouldSkipAiProviderWrapping("Anthropic_AI")) return Reflect.construct(Original, args);
			return instrumentAnthropicAiClient(Reflect.construct(Original, args), config);
		};
		Object.setPrototypeOf(WrappedAnthropic, Original);
		Object.setPrototypeOf(WrappedAnthropic.prototype, Original.prototype);
		for (const key of Object.getOwnPropertyNames(Original)) if (![
			"length",
			"name",
			"prototype"
		].includes(key)) {
			const descriptor = Object.getOwnPropertyDescriptor(Original, key);
			if (descriptor) Object.defineProperty(WrappedAnthropic, key, descriptor);
		}
		try {
			exports.Anthropic = WrappedAnthropic;
		} catch {
			Object.defineProperty(exports, "Anthropic", {
				value: WrappedAnthropic,
				writable: true,
				configurable: true,
				enumerable: true
			});
		}
		if (exports.default === Original) try {
			exports.default = WrappedAnthropic;
		} catch {
			Object.defineProperty(exports, "default", {
				value: WrappedAnthropic,
				writable: true,
				configurable: true,
				enumerable: true
			});
		}
		return exports;
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/anthropic-ai/index.js
var instrumentAnthropicAi = generateInstrumentOnce(ANTHROPIC_AI_INTEGRATION_NAME, (options) => new SentryAnthropicAiInstrumentation(options));
var _anthropicAIIntegration = ((options = {}) => {
	return {
		name: ANTHROPIC_AI_INTEGRATION_NAME,
		options,
		setupOnce() {
			instrumentAnthropicAi(options);
		}
	};
});
var anthropicAIIntegration = defineIntegration(_anthropicAIIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/google-genai/instrumentation.js
var supportedVersions$2 = [">=0.10.0 <2"];
var SentryGoogleGenAiInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super("@sentry/instrumentation-google-genai", SDK_VERSION, config);
	}
	/**
	* Initializes the instrumentation by defining the modules to be patched.
	*/
	init() {
		return new InstrumentationNodeModuleDefinition("@google/genai", supportedVersions$2, (exports) => this._patch(exports), (exports) => exports, [new InstrumentationNodeModuleFile("@google/genai/dist/node/index.cjs", supportedVersions$2, (exports) => this._patch(exports), (exports) => exports)]);
	}
	/**
	* Core patch logic applying instrumentation to the Google GenAI client constructor.
	*/
	_patch(exports) {
		const Original = exports.GoogleGenAI;
		const config = this.getConfig();
		if (typeof Original !== "function") return exports;
		const WrappedGoogleGenAI = function(...args) {
			if (_INTERNAL_shouldSkipAiProviderWrapping("Google_GenAI")) return Reflect.construct(Original, args);
			return instrumentGoogleGenAIClient(Reflect.construct(Original, args), config);
		};
		Object.setPrototypeOf(WrappedGoogleGenAI, Original);
		Object.setPrototypeOf(WrappedGoogleGenAI.prototype, Original.prototype);
		for (const key of Object.getOwnPropertyNames(Original)) if (![
			"length",
			"name",
			"prototype"
		].includes(key)) {
			const descriptor = Object.getOwnPropertyDescriptor(Original, key);
			if (descriptor) Object.defineProperty(WrappedGoogleGenAI, key, descriptor);
		}
		replaceExports(exports, "GoogleGenAI", WrappedGoogleGenAI);
		return exports;
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/google-genai/index.js
var instrumentGoogleGenAI = generateInstrumentOnce(GOOGLE_GENAI_INTEGRATION_NAME, (options) => new SentryGoogleGenAiInstrumentation(options));
var _googleGenAIIntegration = ((options = {}) => {
	return {
		name: GOOGLE_GENAI_INTEGRATION_NAME,
		setupOnce() {
			instrumentGoogleGenAI(options);
		}
	};
});
var googleGenAIIntegration = defineIntegration(_googleGenAIIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/langchain/instrumentation.js
var supportedVersions$1 = [">=0.1.0 <2.0.0"];
function wrapRunnableMethod(originalMethod, sentryHandler, _methodName) {
	return new Proxy(originalMethod, { apply(target, thisArg, args) {
		const optionsIndex = 1;
		let options = args[optionsIndex];
		if (!options || typeof options !== "object" || Array.isArray(options)) {
			options = {};
			args[optionsIndex] = options;
		}
		options.callbacks = _INTERNAL_mergeLangChainCallbackHandler(options.callbacks, sentryHandler);
		return Reflect.apply(target, thisArg, args);
	} });
}
var SentryLangChainInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super("@sentry/instrumentation-langchain", SDK_VERSION, config);
	}
	/**
	* Initializes the instrumentation by defining the modules to be patched.
	* We patch the BaseChatModel class methods to inject callbacks
	*
	* We hook into provider packages (@langchain/anthropic, @langchain/openai, etc.)
	* because @langchain/core is often bundled and not loaded as a separate module
	*/
	init() {
		const modules = [];
		for (const packageName of [
			"@langchain/anthropic",
			"@langchain/openai",
			"@langchain/google-genai",
			"@langchain/mistralai",
			"@langchain/google-vertexai",
			"@langchain/groq"
		]) modules.push(new InstrumentationNodeModuleDefinition(packageName, supportedVersions$1, this._patch.bind(this), (exports) => exports, [new InstrumentationNodeModuleFile(`${packageName}/dist/index.cjs`, supportedVersions$1, this._patch.bind(this), (exports) => exports)]));
		modules.push(new InstrumentationNodeModuleDefinition("langchain", supportedVersions$1, this._patch.bind(this), (exports) => exports, [new InstrumentationNodeModuleFile("langchain/dist/chat_models/universal.cjs", supportedVersions$1, this._patch.bind(this), (exports) => exports)]));
		return modules;
	}
	/**
	* Core patch logic - patches chat model and embedding methods
	* This is called when a LangChain provider package is loaded
	*/
	_patch(exports) {
		_INTERNAL_skipAiProviderWrapping([
			OPENAI_INTEGRATION_NAME,
			ANTHROPIC_AI_INTEGRATION_NAME,
			GOOGLE_GENAI_INTEGRATION_NAME
		]);
		const config = this.getConfig();
		const sentryHandler = createLangChainCallbackHandler(config);
		this._patchRunnableMethods(exports, sentryHandler);
		this._patchEmbeddingsMethods(exports, config);
		return exports;
	}
	/**
	* Patches chat model methods (invoke, stream, batch) to inject Sentry callbacks
	* Finds a chat model class from the provider package exports and patches its prototype methods
	*/
	_patchRunnableMethods(exports, sentryHandler) {
		const knownChatModelNames = [
			"ChatAnthropic",
			"ChatOpenAI",
			"ChatGoogleGenerativeAI",
			"ChatMistralAI",
			"ChatVertexAI",
			"ChatGroq",
			"ConfigurableModel"
		];
		const exportsToPatch = exports.universal_exports ?? exports;
		const chatModelClass = Object.values(exportsToPatch).find((exp) => {
			return typeof exp === "function" && knownChatModelNames.includes(exp.name);
		});
		if (!chatModelClass) return;
		const targetProto = chatModelClass.prototype;
		if (targetProto.__sentry_patched__) return;
		targetProto.__sentry_patched__ = true;
		for (const methodName of [
			"invoke",
			"stream",
			"batch"
		]) {
			const method = targetProto[methodName];
			if (typeof method === "function") targetProto[methodName] = wrapRunnableMethod(method, sentryHandler);
		}
	}
	/**
	* Patches embedding class methods (embedQuery, embedDocuments) to create Sentry spans.
	*
	* Unlike chat models which use LangChain's callback system, the Embeddings base class
	* has no callback support. We wrap the methods directly on the prototype.
	*
	* Instruments any exported class whose prototype has both embedQuery and embedDocuments as functions.
	*/
	_patchEmbeddingsMethods(exports, options) {
		const exportsToPatch = exports.universal_exports ?? exports;
		for (const exp of Object.values(exportsToPatch)) {
			if (typeof exp !== "function" || !exp.prototype) continue;
			const proto = exp.prototype;
			if (typeof proto.embedQuery !== "function" || typeof proto.embedDocuments !== "function") continue;
			if (proto.__sentry_patched__) continue;
			proto.__sentry_patched__ = true;
			instrumentLangChainEmbeddings(proto, options);
		}
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/langchain/index.js
var instrumentLangChain = generateInstrumentOnce(LANGCHAIN_INTEGRATION_NAME, (options) => new SentryLangChainInstrumentation(options));
var _langChainIntegration = ((options = {}) => {
	return {
		name: LANGCHAIN_INTEGRATION_NAME,
		setupOnce() {
			instrumentLangChain(options);
		}
	};
});
var langChainIntegration = defineIntegration(_langChainIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/langgraph/instrumentation.js
var supportedVersions = [">=0.0.0 <2.0.0"];
var SentryLangGraphInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super("@sentry/instrumentation-langgraph", SDK_VERSION, config);
	}
	/**
	* Initializes the instrumentation by defining the modules to be patched.
	*/
	init() {
		return [new InstrumentationNodeModuleDefinition("@langchain/langgraph", supportedVersions, this._patch.bind(this), (exports) => exports, [new InstrumentationNodeModuleFile(
			/**
			* In CJS, LangGraph packages re-export from dist/index.cjs files.
			* Patching only the root module sometimes misses the real implementation or
			* gets overwritten when that file is loaded. We add a file-level patch so that
			* _patch runs again on the concrete implementation
			*/
			"@langchain/langgraph/dist/index.cjs",
			supportedVersions,
			this._patch.bind(this),
			(exports) => exports
		), new InstrumentationNodeModuleFile(
			/**
			* In CJS, the prebuilt submodule re-exports from dist/prebuilt/index.cjs.
			* We add a file-level patch under the main module so that CJS require()
			* of @langchain/langgraph/prebuilt gets patched.
			*/
			"@langchain/langgraph/dist/prebuilt/index.cjs",
			supportedVersions,
			this._patch.bind(this),
			(exports) => exports
		)]), new InstrumentationNodeModuleDefinition("@langchain/langgraph/prebuilt", supportedVersions, this._patch.bind(this), (exports) => exports, [new InstrumentationNodeModuleFile(
			/**
			* In CJS, the prebuilt submodule re-exports from dist/prebuilt/index.cjs.
			* We add file-level patches so _patch runs on the concrete implementation.
			*/
			"@langchain/langgraph/dist/prebuilt/index.cjs",
			supportedVersions,
			this._patch.bind(this),
			(exports) => exports
		)])];
	}
	/**
	* Core patch logic applying instrumentation to the LangGraph module.
	*/
	_patch(exports) {
		const genAI = getClient()?.getDataCollectionOptions().genAI;
		const options = {
			...this.getConfig(),
			recordInputs: this.getConfig().recordInputs ?? genAI?.inputs ?? false,
			recordOutputs: this.getConfig().recordOutputs ?? genAI?.outputs ?? false
		};
		if (exports.StateGraph && typeof exports.StateGraph === "function") instrumentLangGraph$1(exports.StateGraph.prototype, options);
		if (exports.createReactAgent && typeof exports.createReactAgent === "function") {
			const originalCreateReactAgent = exports.createReactAgent;
			Object.defineProperty(exports, "createReactAgent", {
				value: instrumentCreateReactAgent(originalCreateReactAgent, options),
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		return exports;
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/langgraph/index.js
var instrumentLangGraph = generateInstrumentOnce(LANGGRAPH_INTEGRATION_NAME, (options) => new SentryLangGraphInstrumentation(options));
var _langGraphIntegration = ((options = {}) => {
	return {
		name: LANGGRAPH_INTEGRATION_NAME,
		setupOnce() {
			instrumentLangGraph(options);
		}
	};
});
var langGraphIntegration = defineIntegration(_langGraphIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/firebase/otel/patches/firestore.js
function patchFirestore(firestoreSupportedVersions, wrap, unwrap) {
	const moduleFirestoreCJS = new InstrumentationNodeModuleDefinition("@firebase/firestore", firestoreSupportedVersions, (moduleExports) => wrapMethods(moduleExports, wrap, unwrap));
	for (const file of [
		"@firebase/firestore/dist/lite/index.node.cjs.js",
		"@firebase/firestore/dist/lite/index.node.mjs.js",
		"@firebase/firestore/dist/lite/index.rn.esm2017.js",
		"@firebase/firestore/dist/lite/index.cjs.js"
	]) moduleFirestoreCJS.files.push(new InstrumentationNodeModuleFile(file, firestoreSupportedVersions, (moduleExports) => wrapMethods(moduleExports, wrap, unwrap), (moduleExports) => unwrapMethods(moduleExports, unwrap)));
	return moduleFirestoreCJS;
}
function wrapMethods(moduleExports, wrap, unwrap) {
	unwrapMethods(moduleExports, unwrap);
	wrap(moduleExports, "addDoc", patchAddDoc());
	wrap(moduleExports, "getDocs", patchGetDocs());
	wrap(moduleExports, "setDoc", patchSetDoc());
	wrap(moduleExports, "deleteDoc", patchDeleteDoc());
	return moduleExports;
}
function unwrapMethods(moduleExports, unwrap) {
	for (const method of [
		"addDoc",
		"getDocs",
		"setDoc",
		"deleteDoc"
	]) if (isWrapped(moduleExports[method])) unwrap(moduleExports, method);
	return moduleExports;
}
function patchAddDoc() {
	return function addDoc(original) {
		return function(reference, data) {
			return startFirestoreSpan("addDoc", reference, () => original(reference, data));
		};
	};
}
function patchDeleteDoc() {
	return function deleteDoc(original) {
		return function(reference) {
			return startFirestoreSpan("deleteDoc", reference.parent || reference, () => original(reference));
		};
	};
}
function patchGetDocs() {
	return function getDocs(original) {
		return function(reference) {
			return startFirestoreSpan("getDocs", reference, () => original(reference));
		};
	};
}
function patchSetDoc() {
	return function setDoc(original) {
		return function(reference, data, options) {
			return startFirestoreSpan("setDoc", reference.parent || reference, () => {
				return typeof options !== "undefined" ? original(reference, data, options) : original(reference, data);
			});
		};
	};
}
function startFirestoreSpan(spanName, reference, callback) {
	return startSpan$2({
		name: `${spanName} ${reference.path}`,
		op: "db.query",
		kind: SPAN_KIND.CLIENT,
		attributes: {
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.firebase.otel.firestore",
			[Lt]: spanName,
			...buildAttributes(reference)
		}
	}, callback);
}
function getPortAndAddress(settings) {
	let address;
	let port;
	if (typeof settings.host === "string") if (settings.host.startsWith("[")) {
		if (settings.host.endsWith("]")) address = settings.host.replace(/^\[|\]$/g, "");
		else if (settings.host.includes("]:")) {
			const lastColonIndex = settings.host.lastIndexOf(":");
			if (lastColonIndex !== -1) {
				address = settings.host.slice(1, lastColonIndex).replace(/^\[|\]$/g, "");
				port = settings.host.slice(lastColonIndex + 1);
			}
		}
	} else if (net.isIPv6(settings.host)) address = settings.host;
	else {
		const lastColonIndex = settings.host.lastIndexOf(":");
		if (lastColonIndex !== -1) {
			address = settings.host.slice(0, lastColonIndex);
			port = settings.host.slice(lastColonIndex + 1);
		} else address = settings.host;
	}
	return {
		address,
		port: port ? parseInt(port, 10) : void 0
	};
}
function buildAttributes(reference) {
	const firestoreApp = reference.firestore.app;
	const firestoreOptions = firestoreApp.options;
	const settings = (reference.firestore.toJSON() || {}).settings || {};
	const attributes = {
		[wt]: reference.path,
		[Ct]: firestoreApp.name,
		[jt]: "firebase.firestore",
		"firebase.firestore.type": reference.type,
		"firebase.firestore.options.projectId": firestoreOptions.projectId,
		"firebase.firestore.options.appId": firestoreOptions.appId,
		"firebase.firestore.options.messagingSenderId": firestoreOptions.messagingSenderId,
		"firebase.firestore.options.storageBucket": firestoreOptions.storageBucket
	};
	const { address, port } = getPortAndAddress(settings);
	if (address) attributes[au] = address;
	if (port) attributes[ou] = port;
	return attributes;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/firebase/otel/patches/functions.js
function patchFunctions(functionsSupportedVersions, wrap, unwrap) {
	const moduleFunctionsCJS = new InstrumentationNodeModuleDefinition("firebase-functions", functionsSupportedVersions);
	[
		{
			name: "firebase-functions/lib/v2/providers/https.js",
			triggerType: "function"
		},
		{
			name: "firebase-functions/lib/v2/providers/firestore.js",
			triggerType: "firestore"
		},
		{
			name: "firebase-functions/lib/v2/providers/scheduler.js",
			triggerType: "scheduler"
		},
		{
			name: "firebase-functions/lib/v2/storage.js",
			triggerType: "storage"
		}
	].forEach(({ name, triggerType }) => {
		moduleFunctionsCJS.files.push(new InstrumentationNodeModuleFile(name, functionsSupportedVersions, (moduleExports) => wrapCommonFunctions(moduleExports, wrap, unwrap, triggerType), (moduleExports) => unwrapCommonFunctions(moduleExports, unwrap)));
	});
	return moduleFunctionsCJS;
}
function patchV2Functions(triggerType) {
	return function v2FunctionsWrapper(original) {
		return function(...args) {
			const handler = typeof args[0] === "function" ? args[0] : args[1];
			const documentOrOptions = typeof args[0] === "function" ? void 0 : args[0];
			if (!handler) return original.call(this, ...args);
			const wrappedHandler = async function(...handlerArgs) {
				const functionName = process.env.FUNCTION_TARGET || process.env.K_SERVICE || "unknown";
				const attributes = {
					[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.firebase.otel.functions",
					"faas.name": functionName,
					"faas.trigger": triggerType,
					"faas.provider": "firebase"
				};
				if (process.env.GCLOUD_PROJECT) attributes["cloud.project_id"] = process.env.GCLOUD_PROJECT;
				if (process.env.EVENTARC_CLOUD_EVENT_SOURCE) attributes["cloud.event_source"] = process.env.EVENTARC_CLOUD_EVENT_SOURCE;
				return startSpanManual$1({
					name: `firebase.function.${triggerType}`,
					op: "http.request",
					kind: SPAN_KIND.SERVER,
					attributes
				}, async (span) => {
					try {
						const result = await handler.apply(this, handlerArgs);
						span.end();
						return result;
					} catch (error) {
						span.setStatus({ code: 2 });
						captureException(error, { mechanism: {
							type: "auto.firebase.otel.functions",
							handled: false
						} });
						span.end();
						await flush(2e3);
						throw error;
					}
				});
			};
			if (documentOrOptions) return original.call(this, documentOrOptions, wrappedHandler);
			else return original.call(this, wrappedHandler);
		};
	};
}
function wrapCommonFunctions(moduleExports, wrap, unwrap, triggerType) {
	unwrapCommonFunctions(moduleExports, unwrap);
	switch (triggerType) {
		case "function":
			wrap(moduleExports, "onRequest", patchV2Functions("http.request"));
			wrap(moduleExports, "onCall", patchV2Functions("http.call"));
			break;
		case "firestore":
			wrap(moduleExports, "onDocumentCreated", patchV2Functions("firestore.document.created"));
			wrap(moduleExports, "onDocumentUpdated", patchV2Functions("firestore.document.updated"));
			wrap(moduleExports, "onDocumentDeleted", patchV2Functions("firestore.document.deleted"));
			wrap(moduleExports, "onDocumentWritten", patchV2Functions("firestore.document.written"));
			wrap(moduleExports, "onDocumentCreatedWithAuthContext", patchV2Functions("firestore.document.created"));
			wrap(moduleExports, "onDocumentUpdatedWithAuthContext", patchV2Functions("firestore.document.updated"));
			wrap(moduleExports, "onDocumentDeletedWithAuthContext", patchV2Functions("firestore.document.deleted"));
			wrap(moduleExports, "onDocumentWrittenWithAuthContext", patchV2Functions("firestore.document.written"));
			break;
		case "scheduler":
			wrap(moduleExports, "onSchedule", patchV2Functions("scheduler.scheduled"));
			break;
		case "storage":
			wrap(moduleExports, "onObjectFinalized", patchV2Functions("storage.object.finalized"));
			wrap(moduleExports, "onObjectArchived", patchV2Functions("storage.object.archived"));
			wrap(moduleExports, "onObjectDeleted", patchV2Functions("storage.object.deleted"));
			wrap(moduleExports, "onObjectMetadataUpdated", patchV2Functions("storage.object.metadataUpdated"));
			break;
	}
	return moduleExports;
}
function unwrapCommonFunctions(moduleExports, unwrap) {
	for (const method of [
		"onSchedule",
		"onRequest",
		"onCall",
		"onObjectFinalized",
		"onObjectArchived",
		"onObjectDeleted",
		"onObjectMetadataUpdated",
		"onDocumentCreated",
		"onDocumentUpdated",
		"onDocumentDeleted",
		"onDocumentWritten",
		"onDocumentCreatedWithAuthContext",
		"onDocumentUpdatedWithAuthContext",
		"onDocumentDeletedWithAuthContext",
		"onDocumentWrittenWithAuthContext"
	]) if (isWrapped(moduleExports[method])) unwrap(moduleExports, method);
	return moduleExports;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/firebase/otel/firebaseInstrumentation.js
var firestoreSupportedVersions = [">=3.0.0 <5"];
var functionsSupportedVersions = [">=6.0.0 <7"];
var FirebaseInstrumentation = class extends InstrumentationBase {
	constructor(config = {}) {
		super("@sentry/instrumentation-firebase", SDK_VERSION, config);
	}
	/**
	*
	* @protected
	*/
	init() {
		const modules = [];
		modules.push(patchFirestore(firestoreSupportedVersions, this._wrap, this._unwrap));
		modules.push(patchFunctions(functionsSupportedVersions, this._wrap, this._unwrap));
		return modules;
	}
};
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/firebase/firebase.js
var INTEGRATION_NAME = "Firebase";
var instrumentFirebase = generateInstrumentOnce(INTEGRATION_NAME, () => new FirebaseInstrumentation());
var _firebaseIntegration = (() => {
	return {
		name: INTEGRATION_NAME,
		setupOnce() {
			instrumentFirebase();
		}
	};
});
var firebaseIntegration = defineIntegration(_firebaseIntegration);
//#endregion
//#region node_modules/@sentry/node/build/esm/integrations/tracing/index.js
function getAutoPerformanceIntegrations() {
	return [
		expressIntegration(),
		fastifyIntegration(),
		graphqlIntegration(),
		honoIntegration(),
		mongoIntegration(),
		mongooseIntegration(),
		mysqlIntegration(),
		mysql2Integration(),
		redisIntegration(),
		postgresIntegration(),
		prismaIntegration(),
		hapiIntegration(),
		koaIntegration(),
		connectIntegration(),
		tediousIntegration(),
		genericPoolIntegration(),
		kafkaIntegration(),
		amqplibIntegration(),
		lruMemoizerIntegration(),
		langChainIntegration(),
		langGraphIntegration(),
		vercelAIIntegration(),
		openAIIntegration(),
		anthropicAIIntegration(),
		googleGenAIIntegration(),
		postgresJsIntegration(),
		firebaseIntegration()
	];
}
//#endregion
//#region node_modules/@sentry/node/build/esm/sdk/initOtel.js
var MAX_MAX_SPAN_WAIT_DURATION = 1e6;
function initOpenTelemetry(client, options = {}) {
	if (client.getOptions().debug) setupOpenTelemetryLogger();
	const [provider, asyncLocalStorageLookup] = setupOtel(client, options);
	client.traceProvider = provider;
	client.asyncLocalStorageLookup = asyncLocalStorageLookup;
}
function setupOtel(client, options = {}) {
	if (!(client.getOptions().openTelemetryBasicTracerProvider || !!options.spanProcessors?.length)) return setupSentryTracerProvider(client);
	const provider = new BasicTracerProvider({
		sampler: new SentrySampler(client),
		resource: getSentryResource("node"),
		forceFlushTimeoutMillis: 500,
		spanProcessors: [new SentrySpanProcessor({
			timeout: _clampSpanProcessorTimeout(client.getOptions().maxSpanWaitDuration),
			client
		}), ...options.spanProcessors || []]
	});
	import_src.trace.setGlobalTracerProvider(provider);
	import_src.propagation.setGlobalPropagator(new SentryPropagator());
	const ctxManager = new SentryContextManager();
	import_src.context.setGlobalContextManager(ctxManager);
	return [provider, ctxManager.getAsyncLocalStorageLookup()];
}
function setupSentryTracerProvider(client) {
	const provider = new SentryTracerProvider({ resource: getSentryResource("node") });
	if (!import_src.trace.setGlobalTracerProvider(provider)) {
		DEBUG_BUILD$1 && debug.warn("Could not register SentryTracerProvider because another OpenTelemetry tracer provider is already registered.");
		return [void 0, void 0];
	}
	setIsSetup("SentryTracerProvider");
	import_src.propagation.setGlobalPropagator(new SentryPropagator());
	const ctxManager = new SentryContextManager();
	import_src.context.setGlobalContextManager(ctxManager);
	client.on("spanEnd", (span) => {
		applyOtelSpanData(span, { finalizeStatus: true });
	});
	if (hasSpanStreamingEnabled(client)) client.on("preprocessSpan", backfillStreamedSpanDataFromOtel);
	client.on("preprocessEvent", (event) => {
		if (event.type !== "transaction") return;
		event.contexts = {
			...event.contexts,
			otel: {
				resource: provider.resource?.attributes,
				...event.contexts?.otel
			}
		};
	});
	return [provider, ctxManager.getAsyncLocalStorageLookup()];
}
function _clampSpanProcessorTimeout(maxSpanWaitDuration) {
	if (maxSpanWaitDuration == null) return;
	if (maxSpanWaitDuration > MAX_MAX_SPAN_WAIT_DURATION) {
		DEBUG_BUILD$1 && debug.warn(`\`maxSpanWaitDuration\` is too high, using the maximum value of ${MAX_MAX_SPAN_WAIT_DURATION}`);
		return MAX_MAX_SPAN_WAIT_DURATION;
	} else if (maxSpanWaitDuration <= 0 || Number.isNaN(maxSpanWaitDuration)) {
		DEBUG_BUILD$1 && debug.warn("`maxSpanWaitDuration` must be a positive number, using default value instead.");
		return;
	}
	return maxSpanWaitDuration;
}
//#endregion
//#region node_modules/@sentry/node/build/esm/sdk/index.js
function getDefaultIntegrationsWithoutPerformance() {
	return getDefaultIntegrations$1().filter((integration) => integration.name !== "Http" && integration.name !== "NodeFetch").concat(httpIntegration(), nativeNodeFetchIntegration());
}
function getDefaultIntegrations(options) {
	return [...getDefaultIntegrationsWithoutPerformance(), ...hasSpansEnabled(options) ? getAutoPerformanceIntegrations() : []];
}
function init(options = {}) {
	return _init(options, getDefaultIntegrations);
}
function _init(options = {}, getDefaultIntegrationsImpl) {
	applySdkMetadata(options, "node");
	const diagnosticsChannelInjection = isDiagnosticsChannelInjectionEnabled() && hasSpansEnabled(options) ? resolveDiagnosticsChannelInjection() : void 0;
	if (diagnosticsChannelInjection) diagnosticsChannelInjection.register();
	let defaultIntegrations = options.defaultIntegrations ?? getDefaultIntegrationsImpl(options);
	if (diagnosticsChannelInjection && Array.isArray(defaultIntegrations) && defaultIntegrations.length > 0) {
		const replaced = new Set(diagnosticsChannelInjection.replacedOtelIntegrationNames);
		defaultIntegrations = [...defaultIntegrations.filter((integration) => !replaced.has(integration.name)), ...diagnosticsChannelInjection.integrations];
	}
	const client = init$1({
		...options,
		defaultIntegrations
	});
	if (client && !options.skipOpenTelemetrySetup) {
		initOpenTelemetry(client, { spanProcessors: options.openTelemetrySpanProcessors });
		validateOpenTelemetrySetup();
	}
	if (diagnosticsChannelInjection) diagnosticsChannelInjection.detect();
	return client;
}
//#endregion
export { init as t };
