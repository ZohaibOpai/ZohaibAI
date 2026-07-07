import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { createConversation } from "@/lib/conversations.functions";
import { Sparkles, Plus, Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/chat/")({
  component: ChatEmpty,
});

function ChatEmpty() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const create = useServerFn(createConversation);
  const createMut = useMutation({
    mutationFn: () => create({ data: {} }),
    onSuccess: (row) => {
      qc.invalidateQueries({ queryKey: ["conversations"] });
      navigate({ to: "/chat/$threadId", params: { threadId: row.id } });
    },
  });

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-surface text-primary">
        <Sparkles className="h-6 w-6" />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">Start a conversation</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Ask anything — code, writing, research, planning. Switch between models
        any time without losing your thread.
      </p>
      <button
        onClick={() => createMut.mutate()}
        disabled={createMut.isPending}
        className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
      >
        {createMut.isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Plus className="h-4 w-4" />
        )}
        New chat
      </button>
    </div>
  );
}
