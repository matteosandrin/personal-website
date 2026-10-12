import { Gallery } from "@/components/Gallery";
import { ProjectLayout } from "@/components/ProjectLayout";
import { TextLink } from "@/components/TextLink";
import { getProject } from "../projects";
import { projectMetadata } from "@/lib/metadata";

const project = getProject("/projects/led-matrix");
export const metadata = projectMetadata(project);

function TrainIcon({ line }: { line: string }) {
  return (
    <img
      src={`/assets/img/led-matrix/${line}_train.svg`}
      alt={`${line.toUpperCase()} train`}
      className="mt-[-0.2rem] inline aspect-square w-4 scale-125"
    />
  );
}

export default function Page() {
  return (
    <ProjectLayout project={project}>
      <div className="mx-auto max-w-2xl">
        <div className="w-full">
          <iframe
            scrolling="no"
            src="https://led.sandr.in"
            className="aspect-[4.8] w-full"
          />
        </div>
        <p>
          The real display hangs in my home, but I've made the web simulation
          above to show what it looks like in action. It's currently showing
          arrivals based on historical data for the 86th st{" "}
          <TrainIcon line="b" /> <TrainIcon line="c" /> train station in New
          York.
        </p>
        <p>
          <TextLink
            href="https://github.com/matteosandrin/led-matrix-sign-python"
            newTab
            className="block w-full md:text-center">
            All the code for this project is on Github.
          </TextLink>
        </p>
      </div>
      <Gallery images={project.images!} />
    </ProjectLayout>
  );
}
