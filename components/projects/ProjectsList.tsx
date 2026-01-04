import { ProjectsItems } from "@/lib/projects"
import { PItem } from "./ProjectsItem"

export function ProjectsList({
  onSelect,
}: {
  onSelect: (item: any) => void
}) {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl sm:text-4xl font-light">Self-Initiated Projects</h2>
        <span className="text-sm text-muted-foreground">2022–2025</span>
      </div>

      {ProjectsItems.map((item) => (
        <PItem key={item.id} item={item} onClick={onSelect} />
      ))}
    </div>
  )
}
