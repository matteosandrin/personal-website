import type { Metadata } from "next";
import { getImageSize } from "@/lib/image-size";

export const SITE_NAME = "Matteo Sandrin";

// The root layout adds " | Matteo Sandrin" to each page title.
export const TITLE_TEMPLATE = {
  template: `%s | ${SITE_NAME}`,
  default: SITE_NAME,
};

export function siteDescription(text: string) {
  return `This is Matteo Sandrin's personal website. ${text}`;
}

const DEFAULT_DESCRIPTION = siteDescription(
  "I build useful software and beautiful objects.",
);
const DEFAULT_IMAGE = "/assets/img/social-preview.jpg";

type PageMetadata = {
  // Use { absolute } for a title without the site name.
  title: string | { absolute: string };
  // Root-relative URL of the page. It is the canonical and og:url.
  path: string;
  description?: string;
  // Root-relative URL of the social preview image.
  image?: string;
};

export function pageMetadata({
  title,
  path,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      title,
      url: path,
      description,
      images: [{ url: image, ...getImageSize(image), alt: description }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@TeoSandrin",
      title,
      description,
      images: [image],
    },
  };
}
