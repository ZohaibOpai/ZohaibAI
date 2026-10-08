export type ModelOption = {
  id: string;
  label: string;
  provider: string;
  description: string;
};

export const MODELS: ModelOption[] = [
  {
    id: "openai/gpt-oss-120b",
    label: "GPT-OSS 120B",
    provider: "Groq",
    description: "Strong all-rounder, default",
  },
  {
    id: "openai/gpt-oss-20b",
    label: "GPT-OSS 20B",
    provider: "Groq",
    description: "Fast and lightweight",
  },
  {
    id: "qwen/qwen3.6-27b",
    label: "Qwen 3.6 27B",
    provider: "Groq",
    description: "Efficient alternative (Preview)",
  },
];

export const DEFAULT_MODEL = MODELS[0].id;

export function getModel(id: string | undefined | null) {
  return MODELS.find((m) => m.id === id) ?? MODELS[0];
}