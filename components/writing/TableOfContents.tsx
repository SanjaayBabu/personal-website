"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/headings";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const makeIntersectionObserver = () => {
      const elements = headings
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      if (elements.length === 0) return null;

      const io = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible.length > 0) setActiveId(visible[0].target.id);
        },
        { rootMargin: "-10% 0% -70% 0%", threshold: 0 }
      );
      elements.forEach((el) => io.observe(el));
      return io;
    };

    // MDXPost loads lazily (ssr:false), so headings may not be in DOM yet.
    // Use a MutationObserver to retry once they appear.
    let io = makeIntersectionObserver();
    if (io) return () => io!.disconnect();

    const mo = new MutationObserver(() => {
      const obs = makeIntersectionObserver();
      if (obs) {
        io = obs;
        mo.disconnect();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io?.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        On this page
      </p>
      <ul className="space-y-0.5">
        {headings.map(({ id, text, depth }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                setActiveId(id);
              }}
              className={[
                "block py-1 text-sm leading-snug transition-colors duration-150",
                depth >= 3 ? "pl-3" : "",
                activeId === id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
