import { useState, useRef, useEffect } from "react";
import { MODELS, getModel } from "@/lib/models";
import { Check, ChevronDown } from "lucide-react";

export function ModelPicker({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (id: string) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = getModel(value);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium hover:bg-surface-2 disabled:opacity-60"
      >
        <span className="text-muted-foreground">{current.provider}</span>
        <span>{current.label}</span>
        <ChevronDown className="h-3 w-3 text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute bottom-full left-0 z-50 mb-1 w-64 overflow-hidden rounded-lg border border-border bg-popover shadow-xl">
          <ul className="max-h-80 overflow-y-auto p-1">
            {MODELS.map((m) => {
              const selected = m.id === value;
              return (
                <li key={m.id}>
                  <button
                    onClick={() => {
                      onChange(m.id);
                      setOpen(false);
                    }}
                    className={`flex w-full items-start gap-2 rounded-md px-2 py-2 text-left text-xs hover:bg-accent ${
                      selected ? "bg-accent" : ""
                    }`}
                  >
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                      {selected && <Check className="h-3 w-3 text-primary" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-medium">{m.label}</span>
                        <span className="text-[10px] text-muted-foreground">{m.provider}</span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {m.description}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
