"use client";

import React, { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function MailingListSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error ?? "Subscription failed"
        );
      }

      setState("success");
      setEmail("");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-border/50 bg-card/40 px-6 py-5 text-center">
        <p className="text-sm font-medium">You&apos;re subscribed.</p>
        <p className="mt-1 text-xs text-muted-foreground">
          New articles will land in your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border/50 bg-card/40 px-6 py-5">
      <p className="text-sm font-medium mb-1">Get new articles by email</p>
      <p className="mb-4 text-xs text-muted-foreground">
        No spam. Unsubscribe any time.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={state === "loading"}
          aria-label="Email address"
          className="flex-1 rounded-lg border border-border/60 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={state === "loading" || !email.trim()}
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {state === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {state === "error" && (
        <p className="mt-2 text-xs text-destructive">{errorMsg}</p>
      )}
    </div>
  );
}
