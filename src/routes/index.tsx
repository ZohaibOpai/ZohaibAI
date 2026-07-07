import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { ArrowRight, Sparkles, Layers, MessageSquare } from "lucide-react";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zohaib AI — your unified AI workspace" },
      {
        name: "description",
        content:
          "One focused, dark, multi-model AI workspace. Chat with GPT-5, Gemini, and more — with persistent history.",
      },
      { property: "og:title", content: "Zohaib AI" },
      {
        property: "og:description",
        content: "One focused, dark, multi-model AI workspace.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate({ to: "/chat" });
    }
  }, [user, loading, navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
            <span className="font-mono text-sm font-semibold">Z</span>
          </div>
          <span className="truncate text-sm font-medium tracking-tight">Zohaib AI</span>
        </Link>
        <nav className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            to="/auth"
            className="rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground sm:px-3"
          >
            Sign in
          </Link>
          <Link
            to="/auth"
            search={{ mode: "signup" }}
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Get started
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-12 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3 text-primary" />
          Multi-model AI workspace
        </div>
        <h1 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          One quiet workspace for{" "}
          <span className="text-primary">every AI model</span> you actually use.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-sm text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
          Zohaib AI brings GPT-5, Gemini and more under a single, focused, dark
          interface. Switch models mid-thread, keep your full history, ship
          faster.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/auth"
            search={{ mode: "signup" }}
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Start chatting free
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/auth"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-surface-2"
          >
            Sign in
          </Link>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-4 text-left sm:mt-24 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-surface-2 text-primary">
                <f.icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </main>

      <section className="relative">
        <MacbookScrollDemo />
      </section>


      <footer className="mx-auto w-full max-w-6xl px-6 pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Zohaib AI
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Layers,
    title: "Multi-model, one thread",
    body: "Swap between GPT-5, Gemini 2.5 Pro, and other frontier models without losing context.",
  },
  {
    icon: MessageSquare,
    title: "Persistent history",
    body: "Every conversation is saved, searchable, and yours. Pick up exactly where you left off.",
  },
  {
    icon: Sparkles,
    title: "Built for focus",
    body: "A calm, dark, keyboard-first interface designed to disappear so your thinking can lead.",
  },
];
