// components/projects/BackToProjects.tsx
"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function BackToProjects() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/#projects");
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (!el) return;
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      el.focus?.();
    }, 100);
  };

  return (
    <div className="mb-6">
      <a
        href="/#projects"
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
      >
        &larr; Back to projects
      </a>
    </div>
  );
}
