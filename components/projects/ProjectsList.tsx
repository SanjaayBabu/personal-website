// components/projects/ProjectsList.tsx
import React from "react";
import ProjectsItem from "./ProjectsItem";
import { ProjectsItems } from "@/lib/projects";

export function ProjectsList() {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl sm:text-4xl font-light">Self-Initiated Projects</h2>
        <span className="text-sm text-muted-foreground">2022–2025</span>
      </div>

      <div className="mt-8 space-y-8">
        {ProjectsItems.map((item) => (
          <ProjectsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;