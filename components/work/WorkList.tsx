import { Lora } from "next/font/google"
import { workItems } from "@/lib/work"
import { WorkItem } from "./WorkItem"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

export function WorkList({
  onSelect,
}: {
  onSelect: (item: any) => void
}) {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <h2 className={`${lora.className} text-3xl sm:text-4xl font-light`}>Selected Work</h2>
        <span className="text-sm text-muted-foreground">2022–2025</span>
      </div>
    <div className="space-y-4">
      <h3 className="text-muted-foreground">
      Select any role to view work outputs and highlights.
      </h3>
  </div>

      {workItems.map((item) => (
        <WorkItem key={item.id} item={item} onClick={onSelect} />
      ))}
    </div>
  )
}
