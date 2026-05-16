"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { WorkItem } from "@/lib/work"

export function WorkModal({
  item,
  onClose,
}: {
  item: WorkItem
  onClose: () => void
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  const node = (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-card text-card-foreground border border-border shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 rounded-lg space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>

        <div>
          <h2 className="text-2xl font-medium">{item.role}</h2>
          <p className="text-muted-foreground">{item.org}</p>
        </div>

        <ul className="space-y-2 text-muted-foreground">
          {item.details.map((d, i) => (
            <li key={i}>• {d}</li>
          ))}
        </ul>
      </div>
    </div>
  )

  return createPortal(node, document.body)
}
