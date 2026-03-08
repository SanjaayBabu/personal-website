// components/writing/RelatedPosts.tsx
import Link from "next/link";
import type { PostMeta } from "@/lib/writing";

export default function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <aside className="mt-10 pt-8 border-t border-border/40">
      <h2 className="text-xs uppercase tracking-wide text-muted-foreground mb-4">
        You might also like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/writing/${p.slug}`}
            className="group block p-4 rounded-lg border border-border/40 hover:border-border transition"
          >
            <h3 className="text-sm font-medium leading-snug group-hover:underline">
              {p.title}
            </h3>
            {p.date && (
              <p className="mt-1 text-xs text-muted-foreground">{p.date}</p>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
}
