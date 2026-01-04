// components/writing/BackToHome.tsx
"use client";

import Link from "next/link";

export default function BackToHome() {
  return (
    <div className="mb-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
      >
        ← Back to home
      </Link>
    </div>
  );
}