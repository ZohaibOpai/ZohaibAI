import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  getConversation,
  updateConversationModel,
  type StoredMessage,
} from "@/lib/conversations.functions";
import { DEFAULT_MODEL } from "@/lib/models";
import { Markdown } from "@/components/chat/markdown";
import { ModelPicker } from "@/components/chat/model-picker";
import { ArrowUp, Check, Copy, ImagePlus, Loader2, Paperclip, Sparkles, Square, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/chat/$threadId")({
  params: {
    parse: (raw) => z.object({ threadId: z.string().uuid() }).parse(raw),
    stringify: (params) => params,
  },
  component: ChatThread,
});

function ChatThread() {
  const { threadId } = Route.useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const getConv = useServerFn(getConversation);
  const updateModelFn = useServerFn(updateConversationModel);

  const convQuery = useQuery({
    queryKey: ["conversation", threadId],
    queryFn: () => getConv({ data: { conversationId: threadId } }),
    retry: false,
  });

  useEffect(() => {
    if (convQuery.error) {
      toast.error("Conversation unavailable.");
      navigate({ to: "/chat" });
    }
  }, [convQuery.error, navigate]);

  if (convQuery.isLoading) {
    return (
      <div className="grid flex-1 place-items-center">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }
  if (!convQuery.data) return null;

  return (
    <ChatThreadInner
      key={threadId}
      threadId={threadId}
      initialModel={convQuery.data.conversation.model}
      initialMessages={hydrateMessages(convQuery.data.messages)}
      onAfterFirstSend={() => qc.invalidateQueries({ queryKey: ["conversations"] })}
      onModelChange={async (model) => {
        await updateModelFn({ data: { conversationId: threadId, model } });
      }}
    />
  );
}

function hydrateMessages(rows: StoredMessage[]): UIMessage[] {
  return rows.map((r) => ({
    id: r.id,
    role: r.role,
    parts: (r.parts as UIMessage["parts"]) ?? [],
  }));
}

function ChatThreadInner({
  threadId,
  initialModel,
  initialMessages,
  onAfterFirstSend,
  onModelChange,
}: {
  threadId: string;
  initialModel: string;
  initialMessages: UIMessage[];
  onAfterFirstSend: () => void;
  onModelChange: (model: string) => Promise<void>;
}) {
  const [model, setModel] = useState(initialModel || DEFAULT_MODEL);
  const modelRef = useRef(model);
  modelRef.current = model;

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        fetch: async (url, init) => {
          const { data } = await supabase.auth.getSession();
          const token = data.session?.access_token;
          const headers = new Headers(init?.headers);
          if (token) headers.set("Authorization", `Bearer ${token}`);
          return fetch(url, { ...init, headers });
        },
        prepareSendMessagesRequest: ({ messages, body }) => ({
          body: {
            ...body,
            messages,
            conversationId: threadId,
            model: modelRef.current,
          },
        }),
      }),
    [threadId],
  );

  const { messages, sendMessage, setMessages, status, error, stop } = useChat({
    id: threadId,
    messages: initialMessages,
    transport,
    onError: (e) => {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      if (/429/.test(msg)) toast.error("Rate limited. Please try again in a moment.");
      else if (/402/.test(msg)) toast.error("AI credits exhausted. Please upgrade your plan.");
      else toast.error(msg);
    },
  });

  const [input, setInput] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [imageMode, setImageMode] = useState(false);
  const [generating, setGenerating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get user name for welcome message
  const [userName, setUserName] = useState("");
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const name = data.user?.user_metadata?.full_name ||
        data.user?.user_metadata?.name ||
        data.user?.email?.split("@")[0] || "";
      setUserName(name);
    });
  }, []);

  useEffect(() => {
    textareaRef.current?.focus();
  }, [threadId]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, status, generating]);

  const isBusy = status === "submitted" || status === "streaming" || generating;

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const next: Attachment[] = [];
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
      next.push({ name: f.name, mediaType: f.type, url: dataUrl });
    }
    if (next.length) setAttachments((prev) => [...prev, ...next]);
  }

  async function generateImage(prompt: string) {
    setGenerating(true);
    const userId = crypto.randomUUID();
    const placeholderId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { id: userId, role: "user", parts: [{ type: "text", text: prompt }] },
      {
        id: placeholderId,
        role: "assistant",
        parts: [{ type: "text", text: "Generating image…" }],
      },
    ]);
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ conversationId: threadId, prompt }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Image generation failed (${res.status})`);
      }
      const json = (await res.json()) as { imageUrl: string };
      setMessages((prev) =>
        prev.map((m) =>
          m.id === placeholderId
            ? {
                ...m,
                parts: [
                  { type: "file", mediaType: "image/png", url: json.imageUrl },
                ],
              }
            : m,
        ),
      );
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

    if (currentAttachments.length > 0) {
      const files = attachmentsToFileList(currentAttachments);
      await sendMessage({ text, files });
    } else {
      await sendMessage({ text });
    }
    if (wasEmpty) onAfterFirstSend();
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    submit();
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  const empty = messages.length === 0;

  // Get greeting based on time
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  }

  return (
    <div className="flex h-full flex-1 flex-col">
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-8">
          {empty && (
            <div className="flex flex-col items-center pt-20 text-center">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-surface text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">
                {userName ? `${getGreeting()}, ${userName.split(" ")[0]}! 👋` : "How can I help you today?"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {userName ? "I'm Zohaib AI — ask me anything!" : "Ask anything — type below to begin."}
              </p>
              <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setInput(s.prompt)}
                    className="rounded-lg border border-border bg-surface px-3 py-2.5 text-left text-sm text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                  >
                    <div className="font-medium text-foreground">{s.label}</div>
                    <div className="mt-0.5 text-xs">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <ul className="space-y-6">
            {messages.map((m) => (
              <li key={m.id}>
                <MessageView message={m} />
              </li>
            ))}
            {status === "submitted" && (
              <li>
                <div className="flex gap-3">
                  <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-surface text-primary">
                    <span className="font-mono text-[11px] font-semibold">Z</span>
                  </div>
                  <div className="flex items-center gap-1 pt-1">
                    <span className="zai-dot" />
                    <span className="zai-dot" />
                    <span className="zai-dot" />
                  </div>
                </div>
              </li>
            )}
            {error && (
              <li className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error.message}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-border bg-background/60 backdrop-blur">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 py-3"
        >
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 px-1">
              {attachments.map((a, i) => (
                <div
                  key={`${a.name}-${i}`}
                  className="group relative h-16 w-16 overflow-hidden rounded-lg border border-border bg-surface-2"
                >
                  <img src={a.url} alt={a.name} className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() =>
                      setAttachments((prev) => prev.filter((_, idx) => idx !== i))
                    }
                    className="absolute right-0.5 top-0.5 grid h-5 w-5 place-items-center rounded-full bg-background/80 text-foreground opacity-0 transition group-hover:opacity-100"
                    aria-label={`Remove ${a.name}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-end gap-2 rounded-2xl border border-border bg-surface p-2 shadow-sm focus-within:border-ring/60">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                handleFiles(e.target.files);
                e.target.value = "";
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isBusy || imageMode}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-muted-foreground hover:bg-surface-2 hover:text-foreground disabled:opacity-40"
              aria-label="Attach image"
              title="Attach image"
            >
              <Paperclip className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setImageMode((v) => !v)}
              disabled={isBusy}
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition hover:bg-surface-2 disabled:opacity-40 ${
                imageMode ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Generate image"
              title="Generate image"
            >
              <ImagePlus className="h-4 w-4" />
            </button>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder={imageMode ? "Describe an image to generate…" : "Message Zohaib AI…"}
              className="max-h-48 min-h-[36px] flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
              disabled={isBusy}
            />
            {isBusy ? (
              <button
                type="button"
                onClick={() => (generating ? null : stop())}
                disabled={generating}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground text-background hover:opacity-90 disabled:opacity-60"
                aria-label="Stop"
              >
                {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Square className="h-4 w-4" />}
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
                aria-label="Send"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="flex items-center justify-between px-1">
            <ModelPicker
              value={model}
              disabled={isBusy}
              onChange={(id) => {
                setModel(id);
                onModelChange(id).catch(() => {});
              }}
            />
            <p className="text-[10px] text-muted-foreground">
              {imageMode ? "Image mode · gpt-image-2" : "Enter to send · Shift+Enter for newline"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

type Attachment = { name: string; mediaType: string; url: string };

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result as string);
    r.onerror = () => reject(r.error);
    r.readAsDataURL(file);
  });
}

function dataUrlToFile(dataUrl: string, name: string, mediaType: string): File {
  const [, base64 = ""] = dataUrl.split(",");
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new File([bytes], name, { type: mediaType });
}

function attachmentsToFileList(items: Attachment[]): FileList {
  const dt = new DataTransfer();
  for (const a of items) dt.items.add(dataUrlToFile(a.url, a.name, a.mediaType));
  return dt.files;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-2 flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-surface-2 hover:text-foreground transition"
      title="Copy response"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-green-500" />
          <span className="text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

function MessageView({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";
  const text = message.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("");
  const files = message.parts.filter(
    (p): p is { type: "file"; mediaType: string; url: string } =>
      p.type === "file" && typeof (p as { url?: string }).url === "string",
  );

  if (isUser) {
    return (
      <div className="flex flex-col items-end gap-2">
        {files.length > 0 && (
          <div className="flex flex-wrap justify-end gap-2">
            {files.map((f, i) => (
              <img
                key={i}
                src={f.url}
                alt="attachment"
                className="max-h-48 max-w-xs rounded-xl border border-border object-cover"
              />
            ))}
          </div>
        )}
        {text && (
          <div className="max-w-[80%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground whitespace-pre-wrap">
            {text}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-surface text-primary">
        <span className="font-mono text-[11px] font-semibold">Z</span>
      </div>
      <div className="min-w-0 flex-1 space-y-1">
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {files.map((f, i) => (
              <a
                key={i}
                href={f.url}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-xl border border-border"
              >
                <img
                  src={f.url}
                  alt="generated"
                  className="max-h-96 max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        )}
        {text && (
          <>
            <Markdown text={text} />
            <CopyButton text={text} />
          </>
        )}
      </div>
    </div>
  );
}

const SUGGESTIONS = [
  {
    label: "✍️ Write for me",
    desc: "Email, essay, story, or post",
    prompt: "Write a professional email to a client following up on a project",
  },
  {
    label: "💻 Help with code",
    desc: "Debug, explain, or write code",
    prompt: "Help me debug this JavaScript code:",
  },
  {
    label: "🧠 Explain a topic",
    desc: "Make anything easy to understand",
    prompt: "Explain how the internet works in simple terms",
  },
  {
    label: "🌍 Translate text",
    desc: "Any language, instantly",
    prompt: "Translate this to Urdu:",
  },
];