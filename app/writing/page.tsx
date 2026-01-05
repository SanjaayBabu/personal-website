// app/writing/page.tsx
import React from "react";
import { getAllPostsMeta } from "@/lib/writing";
import WritingPreview from "@/components/writing/WritingPreview";

export default async function WritingIndexPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Writing</h1>
      <div className="space-y-8">
        {posts.map((p) => (
          <WritingPreview key={p.slug} post={p} />
        ))}
      </div>
    </main>
  );
}