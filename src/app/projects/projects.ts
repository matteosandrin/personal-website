import { pageMetadata, siteDescription } from "@/lib/metadata";

export type Project = {
  url: string;
  title: string;
  subtitle?: string;
  // Thumbnail for the projects grid.
  img: string;
  images?: string[];
  newTab?: boolean;
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
  },
];

export function getProject(url: string): Project {
  const project = [...softwareProjects, ...designProjects].find(
    (p) => p.url === url,
  );
  if (!project) throw new Error(`Unknown project: ${url}`);
  return project;
}

export function projectMetadata(project: Project) {
  return pageMetadata({
    title: project.title,
    path: project.url,
    description: siteDescription(`This page showcases the ${project.title}`),
    image: project.preview ?? project.images?.[0],
  });
}
