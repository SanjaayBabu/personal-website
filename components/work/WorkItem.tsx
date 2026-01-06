import React from "react";

export function WorkItem({
  item,
  onClick,
}: {
  item: any;
  onClick: (item: any) => void;
}) {
  const sentences = item.summary ? item.summary.split(".").map((s: string) => s.trim()).filter(Boolean) : [];
  const teaser =
    (item.teaser && item.teaser.trim()) ||
    (sentences.length > 1 ? sentences[1] + (sentences[1].endsWith(".") ? "" : ".") : "");

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(item);
      }}
      className="group cursor-pointer focus:outline-none rounded-md transition-colors"
    >
      <div className="p-6 hover:bg-muted/5 transition-colors rounded-md">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Period / date — small, muted */}
          <div className="lg:col-span-2 text-sm text-muted-foreground">
            {item.period}
          </div>

          {/* Main content */}
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-start gap-4">
              {/* Role: bigger, semibold */}
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                {item.role}
              </h3>

              {/* Larger arrow on hover */}
              <span className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden>
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </span>
            </div>

            {/* Organisation: smaller, muted, slightly tighter */}
            <div className="text-sm text-muted-foreground/90 font-medium">
              {item.org}
            </div>

            {/* Main summary: normal weight, good line-height for readability */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.summary}
            </p>

            {/* Teaser: italic, smaller, slightly more muted */}
            {teaser ? (
              <div className="text-sm italic text-muted-foreground/70 mt-1">
                {teaser}
              </div>
            ) : null}

            <div className="mt-4 border-t border-border/40"></div>

            {/* micro-link */}
            <div className="flex items-center justify-between mt-3">
              <div className="text-sm text-muted-foreground/80">
                {/* optional meta slot (kept small and muted) */}
              </div>

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

          {/* Tags / skills: right column — small uppercase pills for scannability */}
          {/* Skills / focus areas — calm, editorial metadata */}
<div className="lg:col-span-3 hidden lg:flex flex-col items-end gap-2 text-right">
  {Array.isArray(item.tags) &&
    item.tags.map((t: string, i: number) => (
      <div
        key={i}
        className="text-sm text-muted-foreground/80 leading-snug max-w-[14rem]"
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