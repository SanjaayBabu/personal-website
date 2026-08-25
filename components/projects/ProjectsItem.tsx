// components/projects/ProjectsItem.tsx
import React from "react";
import Link from "next/link";
import type { ProjectsItem as ProjectType } from "@/lib/projects";

export function ProjectsItem({ item }: { item: ProjectType }) {
  return (
    <Link
      href={`/projects/${item.slug}`}
      className="group cursor-pointer block focus:outline-none rounded-md transition-colors"
      aria-label={`View project: ${item.role}`}
    >
      <div className="px-4 py-3 hover:bg-muted/5 transition-colors rounded-md">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-2 text-sm text-muted-foreground">
            {item.period}
          </div>

          <div className="lg:col-span-7 space-y-1">
            <div className="flex items-start gap-4">
              <h3 className="text-base md:text-lg font-semibold text-accent-brand">
                {item.role}
              </h3>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </span>
            </div>

            <div className="text-sm text-muted-foreground/90 font-medium">
              {item.org}
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.summary}
            </p>
          </div>

          <div className="lg:col-span-3 hidden lg:flex flex-col items-end gap-1 text-right">
            {Array.isArray(item.tags) &&
              item.tags.map((t, i) => (
                <div
                  key={i}
                  className="text-sm text-muted-foreground leading-snug max-w-[14rem]"
                  aria-hidden
                >
                  {t}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectsItem;