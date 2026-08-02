import { Tt as stringType, wt as objectType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { n as DEFAULT_MODEL, r as MODELS } from "./ssr.mjs";
import { c as requireSupabaseAuth, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./conversations.functions-Dlg96BMn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conversations.functions-R89aeRkr.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listConversations_createServerFn_handler = createServerRpc({
	id: "79eabef20931965ec2ed18c04be6fe85fcde58ed01d1ca42f3663802df12ee15",
	name: "listConversations",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => listConversations.__executeServer(opts));
var listConversations = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listConversations_createServerFn_handler, async ({ context }) => {
	const { supabase, userId } = context;
	const { data, error } = await supabase.from("conversations").select("id, title, model, created_at, updated_at").eq("user_id", userId).order("updated_at", { ascending: false }).limit(200);
	if (error) throw new Error(error.message);
	return data ?? [];
});
var createConversation_createServerFn_handler = createServerRpc({
	id: "a0529407b4380d59c90760b1289fdf3d0150568f113b7cd308ab7252949e0065",
	name: "createConversation",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => createConversation.__executeServer(opts));
var createConversation = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ model: stringType().optional() }).parse(input ?? {})).handler(createConversation_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	const model = MODELS.find((m) => m.id === data.model)?.id ?? DEFAULT_MODEL;
	const { data: row, error } = await supabase.from("conversations").insert({
		user_id: userId,
		model,
		title: "New chat"
	}).select("id, title, model, created_at, updated_at").single();
	if (error || !row) throw new Error(error?.message ?? "Failed to create");
	return row;
});
var getConversation_createServerFn_handler = createServerRpc({
	id: "70e9610b559bdc166fe3e8a3d71267562d8997fd4f7bfd420c48811767730487",
	name: "getConversation",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => getConversation.__executeServer(opts));
var getConversation = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ conversationId: stringType().uuid() }).parse(input)).handler(getConversation_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	const { data: conv, error: convError } = await supabase.from("conversations").select("id, title, model, created_at, updated_at, user_id").eq("id", data.conversationId).maybeSingle();
	if (convError) throw new Error(convError.message);
	if (!conv || conv.user_id !== userId) throw new Error("Not found");
	const { data: rows, error: msgError } = await supabase.from("messages").select("id, role, parts, created_at").eq("conversation_id", data.conversationId).order("created_at", { ascending: true });
	if (msgError) throw new Error(msgError.message);
	const messages = (rows ?? []).map((r) => ({
		id: r.id,
		role: r.role,
		parts: r.parts ?? [],
		created_at: r.created_at
	}));
	return {
		conversation: {
			id: conv.id,
			title: conv.title,
			model: conv.model,
			created_at: conv.created_at,
			updated_at: conv.updated_at
		},
		messages
	};
});
var renameConversation_createServerFn_handler = createServerRpc({
	id: "4cd76fb3fc9b00af899a64757f059e200a7a087443191c93b3ccb75d371b4f99",
	name: "renameConversation",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => renameConversation.__executeServer(opts));
var renameConversation = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	conversationId: stringType().uuid(),
	title: stringType().min(1).max(120)
}).parse(input)).handler(renameConversation_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	const { error } = await supabase.from("conversations").update({ title: data.title }).eq("id", data.conversationId).eq("user_id", userId);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var deleteConversation_createServerFn_handler = createServerRpc({
	id: "8b7956d0cfb46d48c87de4f7c817872b933afbc78b598fc0ef118f827847683c",
	name: "deleteConversation",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => deleteConversation.__executeServer(opts));
var deleteConversation = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ conversationId: stringType().uuid() }).parse(input)).handler(deleteConversation_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	const { error } = await supabase.from("conversations").delete().eq("id", data.conversationId).eq("user_id", userId);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var updateConversationModel_createServerFn_handler = createServerRpc({
	id: "fcc75eb74c2399f3d7d36dbac05ce9ec28856a7d1eb878fa0cb6cecf29fc3ce4",
	name: "updateConversationModel",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => updateConversationModel.__executeServer(opts));
var updateConversationModel = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	conversationId: stringType().uuid(),
	model: stringType()
}).parse(input)).handler(updateConversationModel_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	const model = MODELS.find((m) => m.id === data.model)?.id ?? DEFAULT_MODEL;
	const { error } = await supabase.from("conversations").update({ model }).eq("id", data.conversationId).eq("user_id", userId);
	if (error) throw new Error(error.message);
	return { model };
});
//#endregion
export { createConversation_createServerFn_handler, deleteConversation_createServerFn_handler, getConversation_createServerFn_handler, listConversations_createServerFn_handler, renameConversation_createServerFn_handler, updateConversationModel_createServerFn_handler };
