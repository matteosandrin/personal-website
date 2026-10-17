import { pageMetadata, siteDescription } from "@/lib/metadata";

export type Section = "projects" | "collections";

export const sections: Record<Section, { title: string; path: string }> = {
  projects: { title: "Projects", path: "/projects" },
  collections: { title: "Collections", path: "/collections" },
};

export type Entry = {
  // The page URL is "/<slug>". Put the page in src/app/(<section>)/<slug>.
  // Entries with a "url" have no page.
  slug: string;
  section: Section;
  // Group in the projects index. Only for projects.
  group?: "Software" | "Objects" | "Words";
  title: string;
  subtitle: string;
  // ISO date (YYYY-MM-DD) the entry was added. The home page uses it.
  date: string;
  // Thumbnail for the index grids.
  img?: string;
  images?: string[];
  // Social preview image, if not the first image.
  preview?: string;
  // Live site, for projects that run somewhere else. Links go here.
  url?: string;
};

// Each index shows its entries in this order.
export const entries: Entry[] = [
  {
    slug: "diffusion-garden",
    section: "projects",
    group: "Software",
    title: "Diffusion garden",
    subtitle: "A creative garden for image generation",
    date: "2025-12-07",
    img: "/assets/img/diffusion-garden/thumbnail.jpg",
    images: ["/assets/img/diffusion-garden/diffusion-garden-01.jpg"],
  },
  {
    slug: "shade",
    section: "projects",
    group: "Software",
    title: "Shady walking directions",
    subtitle: "A tool for shade-aware walking directions",
    date: "2025-10-02",
    img: "/assets/img/shady-map-thumbnail.jpg",
    url: "https://shade.sandr.in",
  },
  {
    slug: "trainlog",
    section: "projects",
    group: "Software",
    title: "Train car logger",
    subtitle: "A web app to track all subway cars I've ridden",
    date: "2025-11-19",
    img: "/assets/img/trainlog/trainlog-thumbnail.jpg",
    url: "https://trainlog.sandr.in",
  },
  {
    slug: "led-matrix",
    section: "projects",
    group: "Software",
    title: "LED subway sign",
    subtitle: "A replica of the NYC subway platform display",
    date: "2024-09-21",
    img: "/assets/img/led-matrix/led-matrix-thumbnail.jpg",
    images: [
      "/assets/img/led-matrix/led-matrix-01.jpg",
      "/assets/img/led-matrix/led-matrix-02.jpg",
      "/assets/img/led-matrix/led-matrix-03.jpg",
      "/assets/img/led-matrix/led-matrix-04.jpg",
      "/assets/img/led-matrix/led-matrix-05.jpg",
      "/assets/img/led-matrix/led-matrix-06.jpg",
    ],
  },
  {
    slug: "metro-clock",
    section: "projects",
    group: "Objects",
    title: "Milan metro clock",
    subtitle: "A replica of the clock from Milan's Metro",
    date: "2023-06-25",
    img: "/assets/img/metro-clock/metro-clock-thumbnail.jpg",
    images: [
      "/assets/img/metro-clock/metro-clock-01.jpg",
      "/assets/img/metro-clock/metro-clock-02.jpg",
      "/assets/img/metro-clock/metro-clock-03.jpg",
      "/assets/img/metro-clock/metro-clock-04.jpg",
    ],
    preview: "/assets/img/metro-clock/metro-clock-02.jpg",
  },
  {
    slug: "dd-sign",
    section: "projects",
    group: "Objects",
    title: "Dunkin sign",
    subtitle: "A piece of original, restored Dunkin neon signage",
    date: "2024-09-21",
    img: "/assets/img/dd-sign/dd-sign-thumbnail.jpg",
    images: [
      "/assets/img/dd-sign/dd-sign-01.jpg",
      "/assets/img/dd-sign/dd-sign-02.jpg",
      "/assets/img/dd-sign/dd-sign-03.jpg",
    ],
  },
  {
    slug: "123-sign",
    section: "projects",
    group: "Objects",
    title: "123 sign",
    subtitle: "A painting inspired by 96th street subway station",
    date: "2024-09-21",
    img: "/assets/img/123-sign/123-sign-thumbnail.jpg",
    images: [
      "/assets/img/123-sign/123-sign-01.jpg",
      "/assets/img/123-sign/123-sign-02.jpg",
      "/assets/img/123-sign/123-sign-03.jpg",
    ],
  },
  {
    slug: "metrocard",
    section: "projects",
    group: "Objects",
    title: "Metrocard XXL",
    subtitle: "Large replica of the iconic NYC subway card",
    date: "2023-06-25",
    img: "/assets/img/metrocard/metrocard-thumbnail.jpg",
    images: [
      "/assets/img/metrocard/metrocard-01.jpg",
      "/assets/img/metrocard/metrocard-02.jpg",
      "/assets/img/metrocard/metrocard-03.jpg",
    ],
  },
  {
    slug: "space-clock",
    section: "projects",
    group: "Objects",
    title: "Space clock",
    subtitle: "A trusted timekeeper for outer space",
    date: "2023-06-25",
    img: "/assets/img/space-clock/space-clock-thumbnail.jpg",
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
  {
    slug: "ipod-podcasts",
    section: "projects",
    group: "Words",
    title: "How to sync podcasts to an iPod",
    subtitle: "A guide to syncing podcasts to an iPod",
    date: "2026-10-11",
    img: "/assets/img/ipod-podcasts/ipod-podcasts-thumbnail.jpg",
  },
  {
    slug: "power-broker",
    section: "projects",
    group: "Words",
    title: '"The Power Broker" AI summaries',
    subtitle: 'Chapter summaries of "The Power Broker"',
    date: "2025-07-25",
    img: "/assets/img/power-broker/thumbnail.jpg",
  },
  {
    slug: "cars",
    section: "collections",
    title: "Cars",
    subtitle: "A list of all the cars I've ever driven",
    date: "2024-12-03",
    img: "/assets/img/cars/cars-thumbnail.jpg",
  },
  {
    slug: "photo",
    section: "collections",
    title: "Photos",
    subtitle: "A selection of pictures I've shot on film",
    date: "2023-06-25",
    img: "/assets/img/film/film-thumbnail.jpg",
  },
  {
    slug: "svgwall",
    section: "collections",
    title: "SVGs",
    subtitle: "A collection of SVGs I've made for various projects",
    date: "2025-03-07",
    img: "/assets/img/svgwall/svgwall-thumbnail.jpg",
  },
];

// All pages share the root, so two entries must not use the same slug.
const seen = new Set<string>();
for (const { slug } of entries) {
  if (seen.has(slug)) throw new Error(`Duplicate slug: ${slug}`);
  seen.add(slug);
}

export function entryHref(entry: Entry) {
  return entry.url ?? `/${entry.slug}`;
}

export function getEntry(slug: string): Entry {
  const entry = entries.find((e) => e.slug === slug);
  if (!entry) throw new Error(`Unknown entry: ${slug}`);
  return entry;
}

export function entriesIn(section: Section) {
  return entries.filter((e) => e.section === section);
}

// The newest entries across all sections.
export function latestEntries(count: number) {
  return [...entries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

export function entryMetadata(entry: Entry) {
  return pageMetadata({
    title: entry.title,
    path: entryHref(entry),
    description: siteDescription(`This page showcases the ${entry.title}`),
    image: entry.preview ?? entry.images?.[0],
  });
}
