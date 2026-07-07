import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import type { Json } from "@/integrations/supabase/types";
import { DEFAULT_MODEL, MODELS } from "@/lib/models";

export type StoredMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  parts: Json;
  created_at: string;
};

export const listConversations = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { data, error } = await supabase
      .from("conversations")
      .select("id, title, model, created_at, updated_at")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false })
      .limit(200);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const createConversation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        model: z.string().optional(),
      })
      .parse(input ?? {}),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const model = MODELS.find((m) => m.id === data.model)?.id ?? DEFAULT_MODEL;
    const { data: row, error } = await supabase
      .from("conversations")
      .insert({ user_id: userId, model, title: "New chat" })
      .select("id, title, model, created_at, updated_at")
      .single();
    if (error || !row) throw new Error(error?.message ?? "Failed to create");
    return row;
  });

export const getConversation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ conversationId: z.string().uuid() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: conv, error: convError } = await supabase
      .from("conversations")
      .select("id, title, model, created_at, updated_at, user_id")
      .eq("id", data.conversationId)
      .maybeSingle();
    if (convError) throw new Error(convError.message);
    if (!conv || conv.user_id !== userId) throw new Error("Not found");

    const { data: rows, error: msgError } = await supabase
      .from("messages")
      .select("id, role, parts, created_at")
      .eq("conversation_id", data.conversationId)
      .order("created_at", { ascending: true });
    if (msgError) throw new Error(msgError.message);

    const messages: StoredMessage[] = (rows ?? []).map((r) => ({
      id: r.id,
      role: r.role as StoredMessage["role"],
      parts: (r.parts as Json) ?? [],
      created_at: r.created_at,
    }));

    return {
      conversation: {
        id: conv.id,
        title: conv.title,
        model: conv.model,
        created_at: conv.created_at,
        updated_at: conv.updated_at,
      },
      messages,
    };
  });

export const renameConversation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        conversationId: z.string().uuid(),
        title: z.string().min(1).max(120),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("conversations")
      .update({ title: data.title })
      .eq("id", data.conversationId)
      .eq("user_id", userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteConversation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ conversationId: z.string().uuid() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("conversations")
      .delete()
      .eq("id", data.conversationId)
      .eq("user_id", userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const updateConversationModel = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        conversationId: z.string().uuid(),
        model: z.string(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const model = MODELS.find((m) => m.id === data.model)?.id ?? DEFAULT_MODEL;
    const { error } = await supabase
      .from("conversations")
      .update({ model })
      .eq("id", data.conversationId)
      .eq("user_id", userId);
    if (error) throw new Error(error.message);
    return { model };
  });
