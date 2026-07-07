export type ModelOption = {
  id: string;
  label: string;
  provider: string;
  description: string;
};

export const MODELS: ModelOption[] = [
  {
    id: "llama-3.3-70b-versatile",
    label: "Llama 3.3 70B",
    provider: "Groq",
    description: "Strong all-rounder, default",
  },
  {
    id: "llama-3.1-8b-instant",
    label: "Llama 3.1 8B Instant",
    provider: "Groq",
    description: "Fast and lightweight",
  },
  {
    id: "gemma2-9b-it",
    label: "Gemma 2 9B",
    provider: "Groq",
    description: "Lightweight, efficient",
  },
];

export const DEFAULT_MODEL = MODELS[0].id;

export function getModel(id: string | undefined | null) {
  return MODELS.find((m) => m.id === id) ?? MODELS[0];
}
