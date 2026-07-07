import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/generate-image")({
  server: {
    handlers: {
      POST: async () => {
        return new Response(
          "Image generation isn't available right now — this app currently uses Gemini's free tier, which doesn't include image generation. Text chat works normally.",
          { status: 501 },
        );
      },
    },
  },
});
