import { createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import * as Sentry from "@sentry/node";

// ============================================
// SENTRY INIT
// ============================================
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  profilesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
});

// ============================================
// QUERY CLIENT
// ============================================
const queryClient = new QueryClient();

// ============================================
// ROUTER
// ============================================
export const router = createRouter({
  routeTree,
  context: {
    queryClient,
    // ✅ Context add karo
  },
});

// ============================================
// HANDLE UNCAUGHT ERRORS
// ============================================
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  Sentry.captureException(error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  Sentry.captureException(reason);
});

// ============================================
// EXPORT SERVER
// ============================================
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}