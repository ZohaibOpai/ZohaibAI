import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { createServerEntry } from "@tanstack/react-start/server-entry";
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
// EXPORT SERVER HANDLER
// ============================================
const fetch = createStartHandler(defaultStreamHandler);

export default createServerEntry({
  fetch,
});