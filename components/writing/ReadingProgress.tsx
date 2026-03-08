// components/writing/ReadingProgress.tsx
"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{ width: `${progress * 100}%` }}
      className="fixed top-0 left-0 h-0.5 bg-foreground z-50 pointer-events-none"
      aria-hidden
    />
  );
}
