// components/writing/WritingList.tsx
"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/writing";
import WritingPreview from "./WritingPreview";

export default function WritingList({ posts }: { posts: PostMeta[] }) {
  if (!posts || posts.length === 0) {
    return <div>No posts found.</div>;
  }

  return (
    <div className="space-y-8">
      {posts.map((p) => (
        <Link key={p.slug} href={`/writing/${p.slug}`} className="block">
          <WritingPreview post={p} />
        </Link>
      ))}
    </div>
  );
}