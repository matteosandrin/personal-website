import { ContentGrid } from "@/components/ContentGrid";
import { entriesIn } from "@/lib/content";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description: siteDescription("This page showcases Matteo's projects."),
  path: "/projects",
});

export default function Projects() {
  const projects = entriesIn("projects");
  return (
    <div className="max-w-2xl">
      <h1>Projects</h1>
      <ContentGrid
        title="Software"
        entries={projects.filter((p) => p.group === "Software")}
      />
      <ContentGrid
        title="Words"
        entries={projects.filter((p) => p.group === "Words")}
      />
      <ContentGrid
        title="Objects"
        entries={projects.filter((p) => p.group === "Objects")}
      />
    </div>
  );
}
