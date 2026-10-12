import { PageHeader } from "@/components/PageHeader";
import { SvgClock } from "./SvgClock";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Wall of SVGs",
  path: "/svgwall",
  description: siteDescription(
    "This page shows some SVGs that I've made for various projects.",
  ),
});

const clocks = [
  {
    clock: "jr",
    caption: "The iconic JR clock found in Japanese train stations.",
  },
  {
    clock: "milano",
    caption: "The clock found in Milan metro stations.",
  },
] as const;

export default function SvgWall() {
  return (
    <div className="max-w-2xl">
      <PageHeader
        title="SVG Wall"
        subtitle="A collection of SVGs I've made for various projects"
      />
      <p>
        I've had the fortune of working on plenty of vector graphics for my
        projects. However, at the end of a project, those SVGs end up trapped
        within the depths of my hard drive. I wanted to have a space to showcase
        these images with no specific agenda, other than admiring their beauty.
        Enjoy!
      </p>
      <div className="mt-triple flex flex-col gap-8">
        {clocks.map(({ clock, caption }) => (
          <div key={clock}>
            <SvgClock clock={clock} />
            <p className="text-center">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
