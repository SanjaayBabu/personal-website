// components/writing/WritingSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import WritingList from "./WritingList";
import type { PostMeta } from "@/lib/writing";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * WritingSection with URL persistence and auto-scroll-to-section behaviour.
 *
 * Behaviour:
 * - Reads ?tag=... from URL and selects that tag on load.
 * - When a tag is selected, updates the URL and appends #writing so the browser
 *   will scroll to the section (only when a tag is present).
 * - Does NOT append #writing (or scroll) when no tag is selected.
 */

export default function WritingSection() {
  const [posts, setPosts] = useState<PostMeta[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

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

  // Initialize selectedTag from URL ?tag=... (runs when search params change)
  useEffect(() => {
    const param = searchParams?.get?.("tag") ?? null;
    const normalized = param && param !== "" ? param : null;
    setSelectedTag(normalized);

    // Only auto-scroll if a tag is present in the URL (so plain visits don't jump).
    if (normalized) {
      // Slight delay ensures the DOM has rendered.
      setTimeout(() => {
        const el = document.getElementById("writing-heading");
        if (el) {
          const yOffset = -80; // adjust this value to taste (px)
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
          (el as HTMLElement).focus?.();
        }
      }, 60);
    }
  }, [searchParams]);

  // Gather unique tags (stable via useMemo)
  const allTags = useMemo(() => {
    if (!posts) return [];
    const s = new Set<string>();
    posts.forEach((p) => {
      (p.tags || []).forEach((t) => {
        if (t && String(t).trim()) s.add(String(t).trim());
      });
    });
    return Array.from(s);
  }, [posts]);

  // Filtered posts based on selectedTag
  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    if (!selectedTag) return posts;
    return posts.filter((p) => (p.tags || []).map(String).includes(selectedTag));
  }, [posts, selectedTag]);

  // Update URL when tag changes (preserve current path).
  // - When a tag is selected we push a new URL: /path?tag=foo#writing (shareable).
  // - When clearing the tag (selectedTag === null) we keep `#writing` but
  //   update the URL via history.replaceState to avoid scrolling to top or
  //   creating an extra history entry.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const pathname = window.location.pathname;

    if (!selectedTag) {
      // Keep the hash so the browser does not jump to top.
      const urlWithHash = `${pathname}#writing`;
      // Use replaceState so we don't insert another entry into history.
      // This prevents Back from feeling noisy while also avoiding scroll.
      window.history.replaceState(null, "", urlWithHash);
    } else {
      // Push a shareable URL for the selected tag and include the hash
      // so opening the link in a new tab lands on the writing section.
      router.push(`${pathname}?tag=${encodeURIComponent(selectedTag)}#writing`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTag]);

  return (
    <section aria-labelledby="writing-heading" className="mt-8">
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <h2
            id="writing-heading"
            tabIndex={-1}
            className="text-3xl sm:text-4xl font-light"
          >
            Writing
          </h2>
        </div>

        {/* Tag bar */}
        <div>
          {loading && <div>Loading tags…</div>}
          {error && <div className="text-red-500">Error: {error}</div>}
          {!loading && !error && posts && (
            <div className="flex flex-wrap gap-3 items-center">
              <TagButton
                active={selectedTag === null}
                onClick={() => setSelectedTag(null)}
              >
                All
              </TagButton>

              {allTags.length > 0 ? (
                allTags.map((t) => (
                  <TagButton
                    key={t}
                    active={selectedTag === t}
                    onClick={() => setSelectedTag(selectedTag === t ? null : t)}
                  >
                    {t}
                  </TagButton>
                ))
              ) : (
                <div className="text-sm text-muted-foreground">No tags yet</div>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        {loading && <div>Loading writing…</div>}
        {!loading && !error && filteredPosts && filteredPosts.length === 0 && (
          <div>No posts found for this tag.</div>
        )}
        {!loading && !error && filteredPosts && filteredPosts.length > 0 && (
          <WritingList posts={filteredPosts} />
        )}
      </div>
    </section>
  );
}

/** Small TagButton subcomponent to keep this file self-contained */
function TagButton({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm px-3 py-1 rounded-full border transition ${
        active
          ? "bg-accent/10 border-accent text-accent"
          : "bg-transparent border-border/40 text-muted-foreground hover:bg-card/10"
      }`}
    >
      {children}
    </button>
  );
}