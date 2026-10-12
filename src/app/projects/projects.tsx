import type { ReactNode } from "react";
import { TextLink } from "@/components/TextLink";

export type Project = {
  url: string;
  title: string;
  subtitle?: string;
  // Thumbnail for the projects grid.
  img?: string;
  images?: string[];
  newTab?: boolean;
  // Text below the title on the project page.
  intro?: ReactNode;
  // Social preview image, if not the first image.
  preview?: string;
};

export const softwareProjects: Project[] = [
  {
    url: "/projects/diffusion-garden",
    img: "/assets/img/diffusion-garden/thumbnail.jpg",
    title: "Diffusion garden",
    subtitle: "A creative garden for image generation",
    images: ["/assets/img/diffusion-garden/diffusion-garden-01.jpg"],
    intro: (
      <div>
        Try it out now at{" "}
        <TextLink href="https://diffusion.sandr.in" newTab>
          https://diffusion.sandr.in
        </TextLink>
      </div>
    ),
  },
  {
    url: "https://shade.sandr.in",
    img: "/assets/img/shady-map-thumbnail.jpg",
    title: "shade.sandr.in",
    subtitle: "A tool for shade-aware walking directions",
    newTab: true,
  },
  {
    url: "/power-broker",
    img: "/assets/img/power-broker/thumbnail.jpg",
    title: '"The Power Broker" AI summaries',
    subtitle: "Summary by chapters of the entire book, made by AI",
  },
  {
    url: "/projects/led-matrix",
    img: "/assets/img/led-matrix/led-matrix-thumbnail.jpg",
    title: "LED subway sign",
    subtitle: "A replica of the NYC subway platform display",
    images: [
      "/assets/img/led-matrix/led-matrix-01.jpg",
      "/assets/img/led-matrix/led-matrix-02.jpg",
      "/assets/img/led-matrix/led-matrix-03.jpg",
      "/assets/img/led-matrix/led-matrix-04.jpg",
      "/assets/img/led-matrix/led-matrix-05.jpg",
      "/assets/img/led-matrix/led-matrix-06.jpg",
    ],
    intro: (
      <p>
        The display shows a real-time view of the incoming trains for either New
        York or Boston subway stops. It's powered by five 32x32 dot matrix LED
        displays daisy-chained and controlled by a Rasbperry Pi. The MTA and
        MBTA fonts were faithfully re-created pixel-by-pixel from hundreds of
        reference pictures, along with the specific copy and timing of
        announcements. The final product is an exact and functional replica of
        both the MTA's and MBTA's arrival boards. The display can also show
        currently playing songs and album art from Spotify.
      </p>
    ),
  },
];

export const designProjects: Project[] = [
  {
    url: "/projects/metro-clock",
    img: "/assets/img/metro-clock/metro-clock-thumbnail.jpg",
    title: "Milan metro clock",
    subtitle: "A replica of the clock from Milan's Metro",
    images: [
      "/assets/img/metro-clock/metro-clock-01.jpg",
      "/assets/img/metro-clock/metro-clock-02.jpg",
      "/assets/img/metro-clock/metro-clock-03.jpg",
      "/assets/img/metro-clock/metro-clock-04.jpg",
    ],
    preview: "/assets/img/metro-clock/metro-clock-02.jpg",
    intro: (
      <>
        <p>
          Growing up in Milan, the Metro played an integral role in my daily
          life, shuttling me between home, school, and many nights out. I was
          fascinated by the distinctive signage that Bob Noorda had designed in
          the 1960s for the Milan Metro. A bespoke clock designed by Noorda
          himself could be found in every station, with its railway-style dial,
          bold sans-serif numerals, and chunky red hands.
        </p>
        <p>
          I found this clock delightful and nostalgic. Unable to find one for
          sale, I decided to create a replica of my own. Using an existing 30in
          clock as a base, the dial is painstakingly recreated with spray
          acrylic paint. The red hands are 3D printed, thoroughly sanded and
          coated with layers of durable enamel paint. The shorter end of the
          minute hand is filled with steel bearings, counteracting the weight of
          its 15in wingspan.
        </p>
      </>
    ),
  },
  {
    url: "/projects/dd-sign",
    img: "/assets/img/dd-sign/dd-sign-thumbnail.jpg",
    title: "Dunkin sign",
    subtitle: "A piece of original, restored Dunkin neon signage",
    images: [
      "/assets/img/dd-sign/dd-sign-01.jpg",
      "/assets/img/dd-sign/dd-sign-02.jpg",
      "/assets/img/dd-sign/dd-sign-03.jpg",
    ],
    intro: (
      <p>
        I found this original Dunkin Donuts neon sign in an antique shop in
        Rhode Island, laying non-functional in a corner. It was originally
        manufactured in 2009 in Virginia. I cleaned up the inside, dirty after
        years of outdoors service, and I redid the internal wiring from scratch.
        The sign originally came with cool white neon bulbs, but I changed them
        out for moody warm white ones.
      </p>
    ),
  },
  {
    url: "/projects/123-sign",
    img: "/assets/img/123-sign/123-sign-thumbnail.jpg",
    title: "123 sign",
    subtitle: "A painting inspired by 96th street subway station",
    images: [
      "/assets/img/123-sign/123-sign-01.jpg",
      "/assets/img/123-sign/123-sign-02.jpg",
      "/assets/img/123-sign/123-sign-03.jpg",
    ],
    intro: (
      <p>
        When I lived in New York in college, I would often take the 1 train
        downtown from 116th street, then change to the 2 or 3 train at 96th
        street. This painting memorializes the station's sign into six square
        panels of acrylic on canvas. I chose to paint this sign because I think
        of this station as a liminal checkpoint of sorts, a threshold between
        the sleepy upper Manhattan and the bustling downtown.
      </p>
    ),
  },
  {
    url: "/projects/metrocard",
    img: "/assets/img/metrocard/metrocard-thumbnail.jpg",
    title: "Metrocard XXL",
    subtitle: "Large replica of the iconic NYC subway card",
    images: [
      "/assets/img/metrocard/metrocard-01.jpg",
      "/assets/img/metrocard/metrocard-02.jpg",
      "/assets/img/metrocard/metrocard-03.jpg",
    ],
    intro: (
      <>
        <p>
          In November 2022, the MTA announced the discontinuation of the
          MetroCard from NYC subways. As a frequent subway rider, I had grown
          fond of its iconic design and felt a pang of sadness thinking it would
          be gone forever. I decided to manufacture a wall-sized replica of the
          MetroCard, in an effort to pay tribute to and preserve its timeless
          design.
        </p>
        <p>
          The “METROCARD XXL” measures a staggering 48in by 32in, fourteen times
          its original. The sturdy plywood base is finished with rounded corners
          and the iconic lanyard hole. Every detail is faithfully reproduced
          with multiple layers of spray acrylic paint, creating a flawlessly
          flat and industrial aesthetic.
        </p>
      </>
    ),
  },
  {
    url: "/projects/space-clock",
    img: "/assets/img/space-clock/space-clock-thumbnail.jpg",
    title: "Space clock",
    subtitle: "A trusted timekeeper for outer space",
    images: [
      "/assets/img/space-clock/space-clock-01.jpg",
      "/assets/img/space-clock/space-clock-02.jpg",
      "/assets/img/space-clock/space-clock-03.jpg",
      "/assets/img/space-clock/space-clock-04.jpg",
      "/assets/img/space-clock/space-clock-05.jpg",
      "/assets/img/space-clock/space-clock-detail-01.jpg",
      "/assets/img/space-clock/space-clock-detail-02.jpg",
      "/assets/img/space-clock/space-clock-detail-03.jpg",
    ],
    intro: (
      <>
        <p>
          This object began its life as a General Electric model F1-8147 bedside
          alarm clock. When I found it on the shelves of a thrift store, I was
          struck by the space age look of its vacuum-fluorescent display and by
          the boxy 80s silhouette of it shell. Inspiration struck: this clock
          was destined for space. I pictured it at ease on the dashboard of the{" "}
          <TextLink href="https://youtu.be/0ZoSYsNADtY?t=91" newTab>
            Pan-American Lunar Shuttle
          </TextLink>
          , from the film "2001: A Space Odyssey".
        </p>
        <p>
          To bring this vision to life, the clock is stripped down to its bare
          components. Every button is cleaned and resoldered. The shell is
          sanded, primed and painted a lunar shade of white. The iconic NASA
          logo is carefully applied to both sides, while the alarm control
          switch is painted a vibrant red to match. Finally, the display rim and
          raised labeling are touched up for contrast.
        </p>
      </>
    ),
  },
];

export function getProject(url: string): Project {
  const project = [...softwareProjects, ...designProjects].find(
    (p) => p.url === url,
  );
  if (!project) throw new Error(`Unknown project: ${url}`);
  return project;
}
