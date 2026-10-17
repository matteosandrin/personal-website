import { PageHeader } from "@/components/PageHeader";
import { SvgClock } from "./SvgClock";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "SVG Wall",
  path: "/svgwall",
  description: siteDescription(
    "This page shows some SVGs that I've made for various projects.",
  ),
});

const clocks = [
  {
    src: "/assets/img/jr-clock.svg",
    caption: "The iconic JR clock found in Japanese train stations.",
  },
  {
    src: "/assets/img/milano-metro-clock.svg",
    caption: "The clock found in Milan metro stations.",
  },
];

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
        {clocks.map(({ src, caption }) => (
          <div key={src}>
            <SvgClock src={src} />
            <p className="text-center">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
