// components/writing/PostNav.tsx
import Link from "next/link";
import type { PostMeta } from "@/lib/writing";

export default function PostNav({
  prev,
  next,
}: {
  prev: PostMeta | null;
  next: PostMeta | null;
}) {
  if (!prev && !next) return null;

  return (
    <nav
      className="mt-12 pt-8 border-t border-border/40 flex justify-between gap-8"
      aria-label="Article navigation"
    >
      <div className="flex-1">
        {prev && (
          <Link
            href={`/writing/${prev.slug}`}
            className="group flex flex-col gap-1"
          >
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              ← Older
            </span>
            <span className="text-sm font-medium text-foreground group-hover:underline line-clamp-2">
              {prev.title}
            </span>
          </Link>
        )}
      </div>

      <div className="flex-1 flex flex-col items-end text-right">
        {next && (
          <Link
            href={`/writing/${next.slug}`}
            className="group flex flex-col gap-1 items-end"
          >
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Newer →
            </span>
            <span className="text-sm font-medium text-foreground group-hover:underline line-clamp-2">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
