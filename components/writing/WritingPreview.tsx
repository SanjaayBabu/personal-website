// components/writing/WritingPreview.tsx
"use client";

import type { PostMeta } from "@/lib/writing";

export default function WritingPreview({ post }: { post: PostMeta }) {
  const { title, date, summary } = post;
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