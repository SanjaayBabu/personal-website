// components/projects/BackToProjects.tsx
import Link from "next/link";

export default function BackToProjects() {
  return (
    <div className="mb-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
      >
        &larr; Back to projects
      </Link>
    </div>
  );
}
