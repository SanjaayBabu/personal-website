import { ProjectsItem } from "@/lib/projects"

export function ProjectsModal({
  item,
  onClose,
}: {
  item: ProjectsItem
  onClose: () => void
}) {
  return (
    <div
    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fade-in-up"
    onClick={onClose}
    >

      <div 
      className="bg-background max-w-2xl w-full p-8 rounded-lg space-y-6 relative"
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
}
