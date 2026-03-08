// components/writing/WritingPreview.tsx
"use client";

import type { PostMeta } from "@/lib/writing";

export default function WritingPreview({
  post,
  variant = "default",
}: {
  post: PostMeta;
  variant?: "featured" | "default";
}) {
  const { title, date, summary } = post;

  if (variant === "featured") {
    return (
      <article className="group block p-5 rounded-xl border border-border/50 bg-card/40 hover:border-border hover:bg-card/60 transition">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-wide text-foreground font-medium">
            Latest
          </span>
          {date && (
            <span className="text-xs text-muted-foreground">· {date}</span>
          )}
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold leading-snug mb-2">
          {title}
        </h3>
        {summary && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {summary}
          </p>
        )}
        <span className="inline-block mt-3 text-sm text-foreground group-hover:underline">
          Read article →
        </span>
      </article>
    );
  }

  return (
    <article className="group hover:opacity-95 transition">
      <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
      {date && <div className="text-sm text-muted-foreground mb-1">{date}</div>}
      {summary ? (
        <p className="text-sm text-muted-foreground">{summary}</p>
      ) : (
        <p className="text-sm text-muted-foreground opacity-70">Read post →</p>
      )}
    </article>
  );
}
