// components/writing/WritingList.tsx
"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/writing";
import WritingPreview from "./WritingPreview";

function getYear(date?: string): string {
  if (!date) return "Undated";
  const y = new Date(date).getFullYear();
  return isNaN(y) ? "Undated" : String(y);
}

function groupByYear(posts: PostMeta[]): { year: string; posts: PostMeta[] }[] {
  const map = new Map<string, PostMeta[]>();
  for (const p of posts) {
    const y = getYear(p.date);
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(p);
  }
  // Sort years descending
  return Array.from(map.entries())
    .sort(([a], [b]) => (b === "Undated" ? -1 : a === "Undated" ? 1 : Number(b) - Number(a)))
    .map(([year, posts]) => ({ year, posts }));
}

export default function WritingList({
  posts,
  page,
  totalPages,
  onPageChange,
}: {
  posts: PostMeta[];
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  if (!posts || posts.length === 0) {
    return <div>No posts found.</div>;
  }

  // On page 1, treat the first post as featured; the rest go into the year-grouped list
  const featured = page === 1 ? posts[0] : null;
  const rest = page === 1 ? posts.slice(1) : posts;
  const groups = groupByYear(rest);

  return (
    <div className="space-y-8">
      {/* Featured card (first article, page 1 only) */}
      {featured && (
        <Link href={`/writing/${featured.slug}`} className="block">
          <WritingPreview post={featured} variant="featured" />
        </Link>
      )}

      {/* Year-grouped list */}
      {groups.map(({ year, posts: yearPosts }) => (
        <div key={year}>
          <div className="text-xs uppercase tracking-wide text-muted-foreground/60 mb-4 mt-2">
            {year}
          </div>
          <div className="space-y-6">
            {yearPosts.map((p) => (
              <Link key={p.slug} href={`/writing/${p.slug}`} className="block">
                <WritingPreview post={p} />
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 border-t border-border/40">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            ← Prev
          </button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
