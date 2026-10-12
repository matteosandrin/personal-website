import type { ReactNode } from "react";
import { PageHeader } from "@/components/PageHeader";
import type { Project } from "@/app/projects/projects";

type Props = {
  project: Project;
  // Content below the intro. It can be wider than the intro column.
  children?: ReactNode;
};

export function ProjectLayout({ project, children }: Props) {
  return (
    <div>
      <div className="mx-auto w-full max-w-2xl">
        <PageHeader title={project.title} subtitle={project.subtitle} />
        <div className="mt-triple">{project.intro}</div>
      </div>
      {children}
    </div>
  );
}
