// components/writing/BackToHome.tsx
"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function BackToHome() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Navigate to home with writing hash
    router.push("/#writing");

    // After navigation, scroll with offset (same pattern as tag scroll)
    setTimeout(() => {
      const el = document.getElementById("writing-heading");
      if (!el) return;

      const yOffset = -80; // adjust to taste
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      el.focus?.();
    }, 100);
  };

  return (
    <div className="mb-6">
      <a
        href="/#writing"
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
      >
        ← Back to writing
      </a>
    </div>
  );
}