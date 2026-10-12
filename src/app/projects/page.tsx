import { ProjectGrid } from "./ProjectGrid";
import { BulletList } from "@/components/BulletList";
import { TextLink } from "@/components/TextLink";
import { designProjects, softwareProjects } from "./projects";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description: siteDescription("This page showcases Matteo's projects."),
  path: "/projects",
});

const experiments = [
  { href: "/ipod-podcasts", label: "A guide to syncing podcasts to an iPod." },
  {
    href: "https://trainlog.sandr.in",
    label: "A web app to track all subway cars I've ridden.",
  },
  { href: "/cars", label: "A list of all the cars I've ever driven." },
  {
    href: "/svgwall",
    label: "A list of all the SVGs I've made for various projects.",
  },
];

export default function Projects() {
  return (
    <div className="max-w-2xl">
      <h1>Projects</h1>
      <ProjectGrid title="Software" projects={softwareProjects} />
      {/* The zero-width space lets the title wrap after the "+". */}
      <ProjectGrid title={"Design+​art"} projects={designProjects} />
      <div>
        <h2>Experiments</h2>
        <BulletList>
          {experiments.map(({ href, label }) => (
            <li key={href}>
              <TextLink href={href}>{label}</TextLink>
            </li>
          ))}
        </BulletList>
      </div>
    </div>
  );
}
