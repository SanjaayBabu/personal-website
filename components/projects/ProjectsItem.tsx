import { ProjectsItem as Item } from "@/lib/projects"

export function PItem({
  item,
  onClick,
}: {
  item: Item
  onClick: (item: Item) => void
}) {
  return (
    <div
      onClick={() => onClick(item)}
      className="cursor-pointer grid lg:grid-cols-12 gap-6 py-8 border-b border-border/50 hover:border-border transition"
    >
      <div className="lg:col-span-2 text-muted-foreground">
        {item.period}
      </div>

      <div className="lg:col-span-7 space-y-2">
        <h3 className="text-lg font-medium">{item.role}</h3>
        <div className="text-muted-foreground">{item.org}</div>
        <p className="text-muted-foreground">{item.summary}</p>
      </div>

      <div className="lg:col-span-3 text-sm text-muted-foreground space-y-1">
        {item.tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  )
}
