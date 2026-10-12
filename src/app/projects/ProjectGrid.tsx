import Link from "next/link";
import type { Project } from "./projects";

type Props = {
  title: string;
  projects: Project[];
};

export function ProjectGrid({ title, projects }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <div className="mt-single grid grid-cols-1 justify-center gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.url} project={project} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.url}
      target={project.newTab ? "_blank" : undefined}
      className="group">
      <img
        className="aspect-square w-full object-cover object-center"
        src={project.img}
        alt=""
      />
      <div className="mt-2 text-center font-mono group-hover:underline">
        {project.title}
      </div>
    </Link>
  );
}
