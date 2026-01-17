// components/projects/ProjectsModal.tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import type { EducationItem as EducationType } from "@/lib/education";

/**
 * EducationModal (portal) — mounts at document.body so overlay covers the whole viewport
 * and is never clipped by ancestor stacking contexts or transforms.
 *
 * Also disables body scroll while open.
 */
export default function EducationModal({
  item,
  onClose,
}: {
  item: EducationType;
  onClose: () => void;
}) {
  useEffect(() => {
    // prevent background scroll while modal is open
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous || "";
    };
  }, []);

  // modal content (no change to layout you already liked)
  const modal = (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fade-in-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Education details: ${item?.school ?? "Education"}`}
    >
      <div
        className="bg-background max-w-2xl w-full p-8 rounded-lg space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "75vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-medium">{item.school}</h2>
            <p className="text-muted-foreground mt-1">{item.location}</p>
            <div className="text-xs text-muted-foreground/80 mt-2">
              Click outside or press Esc to close
            </div>
          </div>

          <div>
            <button
              onClick={onClose}
              className="text-sm text-muted-foreground hover:text-foreground"
              aria-label="Close education details"
            >
              Close
            </button>
          </div>
        </div>

        <hr className="border-border/40" />

        {/* Body */}
        <div className="text-muted-foreground space-y-4">
          {item.summary && (
            <p className="text-sm leading-relaxed">{item.summary}</p>
          )}

          {Array.isArray(item.details) && item.details.length > 0 && (
            <ul className="list-disc pl-5 space-y-3 text-sm">
              {item.details.map((d, i) => (
                <li key={i} className="leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  // Create portal to body (guards against SSR by checking document)
  if (typeof document !== "undefined") {
    return ReactDOM.createPortal(modal, document.body);
  }
  return null;
}