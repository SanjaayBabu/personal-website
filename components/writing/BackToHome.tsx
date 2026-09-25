// components/writing/BackToHome.tsx
import Link from "next/link";

export default function BackToHome() {
  return (
    <div className="mb-6">
      <Link
        href="/writing"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
      >
        ← Back to writing
      </Link>
    </div>
  );
}
