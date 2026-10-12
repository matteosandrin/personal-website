import { Gallery } from "@/components/Gallery";
import { Img } from "@/components/Img";
import { ProjectLayout } from "@/components/ProjectLayout";
import { TextLink } from "@/components/TextLink";
import { getProject, projectMetadata } from "../projects";

const project = getProject("/projects/led-matrix");
export const metadata = projectMetadata(project);

function TrainIcon({ line }: { line: string }) {
  return (
    <Img
      src={`/assets/img/led-matrix/${line}_train.svg`}
      alt={`${line.toUpperCase()} train`}
      className="mt-[-0.2rem] inline aspect-square w-4 scale-125"
    />
  );
}

export default function Page() {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      intro={
        <p>
          The display shows a real-time view of the incoming trains for either
          New York or Boston subway stops. It's powered by five 32x32 dot matrix
          LED displays daisy-chained and controlled by a Rasbperry Pi. The MTA
          and MBTA fonts were faithfully re-created pixel-by-pixel from hundreds
          of reference pictures, along with the specific copy and timing of
          announcements. The final product is an exact and functional replica of
          both the MTA's and MBTA's arrival boards. The display can also show
          currently playing songs and album art from Spotify.
        </p>
      }>
      <div className="mx-auto max-w-2xl">
        <div className="w-full">
          <iframe
            scrolling="no"
            src="https://led.sandr.in"
            className="mt-double aspect-[4.8] w-full"
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
