// components/writing/WritingSection.tsx
"use client";

import { useEffect, useState } from "react";
import WritingList from "./WritingList";
import type { PostMeta } from "@/lib/writing";

export default function WritingSection() {
  const [posts, setPosts] = useState<PostMeta[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // This client component will call a simple JSON api route we will add later.
  // For now it tries to fetch /api/writing (if present) and falls back gracefully.
  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/api/writing");
        if (!mounted) return;
        if (!res.ok) {
          setError(`Failed to load writing: ${res.statusText}`);
          setPosts([]);
        } else {
          const data = await res.json();
          // Expecting array of PostMeta
          setPosts(Array.isArray(data) ? data : []);
        }
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message ?? "Unknown error");
        setPosts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section aria-labelledby="writing-heading" className="mt-8">
      <div className="space-y-12">
        <div className="flex justify-between items-end">
          <h2 id="writing-heading" className="text-3xl sm:text-4xl font-light">
            Writing
          </h2>
        </div>

        {loading && <div>Loading writing…</div>}
        {error && <div className="text-red-500">Error: {error}</div>}
        {!loading && !error && posts && posts.length === 0 && <div>No posts found.</div>}
        {!loading && !error && posts && posts.length > 0 && <WritingList posts={posts} />}
      </div>
    </section>
  );
}