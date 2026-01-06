// components/projects/ProjectsList.tsx
import React, { useCallback, useEffect } from "react";
import ProjectsItem from "./ProjectsItem";
import ProjectsModal from "./ProjectsModal";
import { ProjectsItems } from "@/lib/projects";

export function ProjectsList({
  onSelect,
}: {
  onSelect?: (item: any) => void;
}) {
  const [selected, setSelected] = React.useState<any | null>(null);

  const onClose = useCallback(() => {
    setSelected(null);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (selected) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [selected, onClose]);

  const handleSelect = useCallback(
    (item: any) => {
      setSelected(item);
      if (typeof onSelect === "function") onSelect(item);
    },
    [onSelect]
  );

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl sm:text-4xl font-light">Self-Initiated Projects</h2>
        <span className="text-sm text-muted-foreground">2022–2025</span>
      </div>

      <div className="mt-8 space-y-8">
        {ProjectsItems.map((item) => (
          <ProjectsItem key={item.id} item={item} onClick={handleSelect} />
        ))}
      </div>

      {selected ? <ProjectsModal item={selected} onClose={onClose} /> : null}
    </div>
  );
}

export default ProjectsList;