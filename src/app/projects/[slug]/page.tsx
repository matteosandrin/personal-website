import { Gallery } from "@/components/Gallery";
import { ProjectLayout } from "@/components/ProjectLayout";
import { designProjects, getProject, projectMetadata } from "../projects";

// Projects with an intro and a gallery. Other projects have their own page.
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return designProjects.map((p) => ({ slug: p.url.split("/").pop()! }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return projectMetadata(getProject(`/projects/${slug}`));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProject(`/projects/${slug}`);
  const { default: Intro } = await import(`../intros/${slug}.mdx`);
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      intro={<Intro />}>
      <Gallery images={project.images!} />
    </ProjectLayout>
  );
}
