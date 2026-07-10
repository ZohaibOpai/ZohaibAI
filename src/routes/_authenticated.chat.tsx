import { createFileRoute, Outlet, Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  listConversations,
  createConversation,
  deleteConversation,
  renameConversation,
} from "@/lib/conversations.functions";
import { useAuth } from "@/lib/auth-context";
import {
  Plus,
  MessageSquare,
  Trash2,
  LogOut,
  Loader2,
  Pencil,
  Check,
  X,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/routes/__root";

export const Route = createFileRoute("/_authenticated/chat")({
  component: ChatLayout,
});

function ChatLayout() {
  const list = useServerFn(listConversations);
  const create = useServerFn(createConversation);
  const remove = useServerFn(deleteConversation);
  const rename = useServerFn(renameConversation);
  const qc = useQueryClient();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const params = useParams({ strict: false }) as { threadId?: string };
  const activeId = params.threadId;

  const conversationsQuery = useQuery({
    queryKey: ["conversations"],
    queryFn: () => list(),
  });

  const createMut = useMutation({
    mutationFn: () => create({ data: {} }),
    onSuccess: (row) => {
      qc.invalidateQueries({ queryKey: ["conversations"] });
      navigate({ to: "/chat/$threadId", params: { threadId: row.id } });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to create chat"),
  });

  const deleteMut = useMutation({
    mutationFn: (id: string) => remove({ data: { conversationId: id } }),
    onSuccess: (_d, id) => {
      qc.invalidateQueries({ queryKey: ["conversations"] });
      if (id === activeId) navigate({ to: "/chat" });
    },
  });

  const renameMut = useMutation({
    mutationFn: ({ id, title }: { id: string; title: string }) =>
      rename({ data: { conversationId: id, title } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["conversations"] }),
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [activeId, isMobile]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)} />
      )}

      <aside
        className={`flex w-72 shrink-0 flex-col border-r border-border bg-surface transition-transform duration-200 ${
          isMobile
            ? `fixed inset-y-0 left-0 z-50 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`
            : "relative translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/chat" className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <span className="font-mono text-sm font-semibold">Z</span>
            </div>
            <span className="text-sm font-medium">Zohaib AI</span>
          </Link>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(false)}
                className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                aria-label="Close sidebar"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="px-3">
          <button
            onClick={() => createMut.mutate()}
            disabled={createMut.isPending}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-2 text-sm font-medium hover:bg-accent disabled:opacity-60"
          >
            {createMut.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            New chat
          </button>
        </div>

        <div className="mt-4 flex-1 overflow-y-auto px-2 pb-2">
          {conversationsQuery.isLoading && (
            <div className="grid place-items-center py-8">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            </div>
          )}
          {conversationsQuery.data?.length === 0 && (
            <p className="px-3 py-6 text-center text-xs text-muted-foreground">
              No chats yet. Start a new one.
            </p>
          )}
          <ul className="space-y-0.5">
            {conversationsQuery.data?.map((c) => {
              const isActive = c.id === activeId;
              const isEditing = editingId === c.id;
              return (
                <li key={c.id}>
                  {isEditing ? (
                    <div className="flex items-center gap-1 rounded-md bg-surface-2 px-2 py-1.5">
                      <input
                        autoFocus
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            renameMut.mutate({ id: c.id, title: editValue.trim() || c.title });
                            setEditingId(null);
                          } else if (e.key === "Escape") {
                            setEditingId(null);
                          }
                        }}
                        className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                      />
                      <button
                        onClick={() => {
                          renameMut.mutate({ id: c.id, title: editValue.trim() || c.title });
                          setEditingId(null);
                        }}
                        className="rounded p-1 text-muted-foreground hover:text-foreground"
                      >
                        <Check className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="rounded p-1 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`group flex items-center gap-2 rounded-md px-2 py-1.5 ${
                        isActive ? "bg-surface-2" : "hover:bg-surface-2/60"
                      }`}
                    >
                      <Link
                        to="/chat/$threadId"
                        params={{ threadId: c.id }}
                        className="flex min-w-0 flex-1 items-center gap-2"
                      >
                        <MessageSquare className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                        <span className="truncate text-sm">{c.title}</span>
                      </Link>
                      <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition group-hover:opacity-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingId(c.id);
                            setEditValue(c.title);
                          }}
                          className="rounded p-1 text-muted-foreground hover:text-foreground"
                          aria-label="Rename"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm("Delete this conversation?")) {
                              deleteMut.mutate(c.id);
                            }
                          }}
                          className="rounded p-1 text-muted-foreground hover:text-destructive"
                          aria-label="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                  {isActive && !isEditing && (
                    <p className="px-3 pt-0.5 text-[10px] text-muted-foreground">
                      Updated {formatDistanceToNow(new Date(c.updated_at), { addSuffix: true })}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-t border-border p-3">
          <div className="flex items-center gap-2 px-1 pb-2">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-surface-2 text-xs">
              {(user?.email ?? "?")[0]?.toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs">{user?.email}</p>
            </div>
            <button
              onClick={async () => {
                await signOut();
                navigate({ to: "/" });
              }}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        {isMobile && (
          <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <span className="text-sm font-medium">Zohaib AI</span>
            <button
              onClick={toggleTheme}
              className="ml-auto rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}
