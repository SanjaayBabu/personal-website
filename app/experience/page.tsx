"use client"

import { useState } from "react"
import { WorkList } from "@/components/work/WorkList"
import { WorkModal } from "@/components/work/WorkModal"
import type { WorkItem } from "@/lib/work"

export default function ExperiencePage() {
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null)

  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-16 sm:py-24">
      <WorkList onSelect={setActiveWork} />
      {activeWork && <WorkModal item={activeWork} onClose={() => setActiveWork(null)} />}
    </main>
  )
}
