// components/projects/ProjectsItem.tsx
import React from "react";
import type { ProjectsItem as ProjectType } from "@/lib/projects";

export function ProjectsItem({
  item,
  onClick,
}: {
  item: ProjectType;
  onClick: (item: ProjectType) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(item);
      }}
      className="group cursor-pointer block focus:outline-none rounded-md transition-colors"
      aria-label={`Open project ${item.role}`}
    >
      <div className="p-6 hover:bg-muted/5 transition-colors rounded-md">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Period */}
          <div className="lg:col-span-2 text-sm text-muted-foreground">
            {item.period}
          </div>

          {/* Main content */}
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-start gap-4">
              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                {item.role}
              </h3>

              {/* Hover arrow */}
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

            {/* Organisation */}
            <div className="text-sm text-muted-foreground/90 font-medium">
              {item.org}
            </div>

            {/* Summary (single source of truth) */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.summary}
            </p>

            <div className="mt-4 border-t border-border/40"></div>

            {/* Micro CTA */}
            <div className="flex items-center justify-between mt-3">
              <div />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(item);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View details →
              </button>
            </div>
          </div>

          {/* Skills / focus areas */}
          <div className="lg:col-span-3 hidden lg:flex flex-col items-end gap-2 text-right">
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
    </div>
  );
}

export default ProjectsItem;