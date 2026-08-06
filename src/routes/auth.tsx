import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Eye, EyeOff } from "lucide-react";

const searchSchema = z.object({
  mode: z.enum(["signin", "signup"]).optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign in · Zohaib AI" },
      { name: "description", content: "Sign in or create your Zohaib AI account." },
    ],
  }),
  component: AuthPage,
});

type Mode = "signin" | "signup";
type Strength = "Weak" | "Medium" | "Strong";

const REMEMBER_ME_KEY = "zohaib-ai:remember-me";
const REMEMBER_EMAIL_KEY = "zohaib-ai:remembered-email";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required.")
  .max(255, "Email is too long.")
  .email("Please enter a valid email address.");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .max(72, "Password must be 72 characters or fewer.");

function checkPasswordStrength(password: string): Strength {
  if (password.length < 8) return "Weak";

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-[\]\\/+=~`';]/.test(password);
  const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

  if (score >= 4 && password.length >= 12) return "Strong";
  if (score >= 3) return "Medium";
  return "Weak";
}

/** Maps raw Supabase/auth errors to friendly, non-leaky messages. */
function friendlyAuthError(err: unknown): string {
  const message = err instanceof Error ? err.message : String(err ?? "");
  const m = message.toLowerCase();

  if (m.includes("invalid login credentials")) return "Incorrect email or password.";
  if (m.includes("email not confirmed")) return "Please verify your email before signing in.";
  if (m.includes("user already registered") || m.includes("already been registered"))
    return "An account with this email already exists. Try signing in instead.";
  if (m.includes("password should be at least")) return "Password must be at least 8 characters.";
  if (m.includes("weak password")) return "That password is too weak. Try a longer one.";
  if (m.includes("email address") && m.includes("invalid"))
    return "Please enter a valid email address.";
  if (m.includes("rate limit") || m.includes("too many"))
    return "Too many attempts. Please wait a moment and try again.";
  if (m.includes("failed to fetch") || m.includes("network"))
    return "Network error. Check your connection and try again.";
  if (m.includes("provider is not enabled"))
    return "Google sign-in isn't enabled yet. Please use email and password.";
  if (m.includes("popup") && m.includes("closed")) return "Google sign-in was cancelled.";
  return message || "Authentication failed. Please try again.";
}

function AuthPage() {
  const { mode: initialMode } = Route.useSearch();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const [mode, setMode] = useState<Mode>(initialMode ?? "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [verificationSent, setVerificationSent] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});

  const busy = submitting || googleLoading || resetting;
  const passwordStrength = useMemo(() => checkPasswordStrength(password), [password]);

  // Restore "remember me" preference + email.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const remembered = window.localStorage.getItem(REMEMBER_ME_KEY);
    if (remembered !== null) setRememberMe(remembered === "true");
    const savedEmail = window.localStorage.getItem(REMEMBER_EMAIL_KEY);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  // Keep local mode in sync with ?mode= (routing untouched).
  useEffect(() => {
    if (initialMode) setMode(initialMode);
  }, [initialMode]);

  // Auto redirect after a successful session exists (password, OAuth, or auto-login).
  useEffect(() => {
    if (!authLoading && user) {
      navigate({ to: "/chat" });
    }
  }, [authLoading, user, navigate]);

  function resetForm(keepEmail: boolean) {
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setAcceptedTerms(false);
    setFieldErrors({});
    if (!keepEmail) setEmail("");
  }

  function switchMode(next: Mode) {
    if (busy) return;
    setMode(next);
    setPassword("");
    setConfirmPassword("");
    setAcceptedTerms(false);
    setFieldErrors({});
    setVerificationSent(null);
  }

  function validate(): boolean {
    const errors: typeof fieldErrors = {};

    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) errors.email = emailResult.error.issues[0]?.message;

    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) errors.password = passwordResult.error.issues[0]?.message;

    if (mode === "signup") {
      if (!confirmPassword) {
        errors.confirmPassword = "Please confirm your password.";
      } else if (confirmPassword !== password) {
        errors.confirmPassword = "Passwords do not match.";
      }
      if (!acceptedTerms) {
        errors.terms = "Please accept the Terms & Privacy Policy.";
      }
    }

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      toast.error(Object.values(errors)[0]);
      return false;
    }
    return true;
  }

  function persistRememberMe(nextEmail: string) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(REMEMBER_ME_KEY, String(rememberMe));
    if (rememberMe) {
      window.localStorage.setItem(REMEMBER_EMAIL_KEY, nextEmail);
    } else {
      window.localStorage.removeItem(REMEMBER_EMAIL_KEY);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (!validate()) return;

    const normalizedEmail = email.trim();
    setSubmitting(true);
    setVerificationSent(null);

    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;

        persistRememberMe(normalizedEmail);

        if (data?.session) {
          // Email confirmation disabled → user is signed in immediately.
          toast.success("Welcome to Zohaib AI!");
          resetForm(rememberMe);
          navigate({ to: "/chat" });
        } else {
          // Email confirmation enabled → show verification message.
          setVerificationSent(normalizedEmail);
          toast.success("Account created. Check your inbox to verify your email.");
          resetForm(true);
          setMode("signin");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });
        if (error) throw error;

        persistRememberMe(normalizedEmail);
        toast.success("Signed in.");
        resetForm(rememberMe);
        // Redirect handled by the auth effect once the session lands.
      }
    } catch (err) {
      toast.error(friendlyAuthError(err));
    } finally {
      setSubmitting(false);
    }
  }

  async function handleGoogle() {
    if (busy) return;
    setGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/chat`,
        },
      });
      if (error) throw error;
      // Browser redirects to Google; on return the auth effect handles navigation.
    } catch (err) {
      toast.error(friendlyAuthError(err));
      setGoogleLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (busy) return;

    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      const message = emailResult.error.issues[0]?.message ?? "Please enter your email first.";
      setFieldErrors((prev) => ({ ...prev, email: message }));
      toast.error(message);
      return;
    }

    setResetting(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(emailResult.data, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      toast.success("Password reset email sent. Check your inbox.");
    } catch (err) {
      toast.error(friendlyAuthError(err));
    } finally {
      setResetting(false);
    }
  }

  const strengthPercent =
    password.length === 0
      ? 0
      : passwordStrength === "Strong"
        ? 100
        : passwordStrength === "Medium"
          ? 66
          : 33;

  return (
    <div className="relative grid min-h-screen place-items-center px-4 py-10">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="w-full max-w-sm">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <span className="font-mono text-base font-semibold">Z</span>
          </div>
          <span className="text-base font-medium tracking-tight">Zohaib AI</span>
        </Link>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h1 className="text-xl font-semibold tracking-tight">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Sign in to continue your conversations."
              : "Start chatting in seconds. No credit card needed."}
          </p>

          {verificationSent && (
            <div className="mt-4 rounded-md border border-border bg-surface-2 p-3 text-xs text-muted-foreground">
              We sent a verification link to{" "}
              <span className="font-medium text-foreground">{verificationSent}</span>. Confirm your
              email, then sign in.
            </div>
          )}

          <button
            type="button"
            onClick={handleGoogle}
            disabled={busy}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-2 text-sm font-medium hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
          >
            {googleLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <GoogleIcon />}
            {googleLoading ? "Connecting to Google..." : "Continue with Google"}
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            or
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3" noValidate>
            <div>
              <label
                htmlFor="auth-email"
                className="mb-1 block text-xs font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                id="auth-email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                maxLength={255}
                disabled={busy}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFieldErrors((prev) => ({ ...prev, email: undefined }));
                }}
                aria-invalid={Boolean(fieldErrors.email)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/40 disabled:opacity-60"
                placeholder="you@example.com"
              />
              {fieldErrors.email && (
                <p className="mt-1 text-xs text-destructive">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="auth-password"
                className="mb-1 block text-xs font-medium text-muted-foreground"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="auth-password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  maxLength={72}
                  disabled={busy}
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setFieldErrors((prev) => ({
                      ...prev,
                      password: undefined,
                      confirmPassword: undefined,
                    }));
                  }}
                  aria-invalid={Boolean(fieldErrors.password)}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 pr-10 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/40 disabled:opacity-60"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  disabled={busy}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground disabled:opacity-60"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {fieldErrors.password && (
                <p className="mt-1 text-xs text-destructive">{fieldErrors.password}</p>
              )}

              {mode === "signup" && password.length > 0 && (
                <div className="mt-2">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className={`h-full transition-all ${
                        passwordStrength === "Strong"
                          ? "bg-green-500"
                          : passwordStrength === "Medium"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                      style={{ width: `${strengthPercent}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Password strength:
                    <span
                      className={`ml-1 font-medium ${
                        passwordStrength === "Strong"
                          ? "text-green-500"
                          : passwordStrength === "Medium"
                            ? "text-yellow-500"
                            : "text-red-500"
                      }`}
                    >
                      {passwordStrength}
                    </span>
                  </p>
                </div>
              )}
            </div>

            {mode === "signup" && (
              <div>
                <label
                  htmlFor="auth-confirm-password"
                  className="mb-1 block text-xs font-medium text-muted-foreground"
                >
                  Confirm password
                </label>
                <input
                  id="auth-confirm-password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  maxLength={72}
                  disabled={busy}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setFieldErrors((prev) => ({ ...prev, confirmPassword: undefined }));
                  }}
                  aria-invalid={Boolean(fieldErrors.confirmPassword)}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/40 disabled:opacity-60"
                  placeholder="••••••••"
                />
                {fieldErrors.confirmPassword && (
                  <p className="mt-1 text-xs text-destructive">{fieldErrors.confirmPassword}</p>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  disabled={busy}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-border accent-primary"
                />
                Remember me
              </label>

              {mode === "signin" && (
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={busy}
                  className="text-xs text-primary hover:underline disabled:opacity-60"
                >
                  {resetting ? "Sending..." : "Forgot password?"}
                </button>
              )}
            </div>

            {mode === "signup" && (
              <div>
                <label className="flex items-start gap-2 text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    disabled={busy}
                    onChange={(e) => {
                      setAcceptedTerms(e.target.checked);
                      setFieldErrors((prev) => ({ ...prev, terms: undefined }));
                    }}
                    className="mt-0.5 h-3.5 w-3.5 rounded border-border accent-primary"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="/terms" className="text-foreground underline-offset-2 hover:underline">
                      Terms
                    </a>{" "}
                    &amp;{" "}
                    <a
                      href="/privacy"
                      className="text-foreground underline-offset-2 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                {fieldErrors.terms && (
                  <p className="mt-1 text-xs text-destructive">{fieldErrors.terms}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={busy}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting
                ? mode === "signin"
                  ? "Signing in..."
                  : "Creating account..."
                : mode === "signin"
                  ? "Sign In"
                  : "Create Account"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            {mode === "signin" ? (
              <>
                New here?{" "}
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => switchMode("signup")}
                  className="text-foreground underline-offset-2 hover:underline disabled:opacity-60"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have one?{" "}
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => switchMode("signin")}
                  className="text-foreground underline-offset-2 hover:underline disabled:opacity-60"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z"
      />
    </svg>
  );
}
