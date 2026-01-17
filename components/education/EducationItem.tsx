// components/education/EducationItem.tsx
import React from "react";
import type { EducationItem as EducationType } from "@/lib/education";

export function EducationItem({
  item,
  onClick,
}: {
  item: EducationType;
  onClick: (item: EducationType) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(item);
        }
      }}
      className="cursor-pointer w-full py-8 border-b border-border/50"
      aria-label={`Open details for ${item.school}`}
    >
      {/* Wrapper: left = content (flex-grow), right = fixed date column */}
      <div className="flex items-start gap-6">
        {/* LEFT: main content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium">{item.school}</h3>
          {item.location ? (
            <div className="text-sm text-muted-foreground mt-1">{item.location}</div>
          ) : null}
          {item.summary ? (
            <p className="text-sm text-muted-foreground mt-4">{item.summary}</p>
          ) : null}

<div className="mt-6 lg:hidden">
  <button
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

<div className="w-44 flex-shrink-0 text-right">
  {/* Date */}
  <div className="hidden lg:block">
    <span className="text-sm text-muted-foreground">{item.period}</span>
  </div>

  {/* View details (desktop) */}
  <div className="hidden lg:block mt-6">
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(item);
      }}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      View details →
    </button>
  </div>

  {/* Small screen date */}
  <div className="block lg:hidden mt-2">
    <span className="text-sm text-muted-foreground">{item.period}</span>
  </div>
</div>
        
      </div>
    </div>
  );
}

export default EducationItem;