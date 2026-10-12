import type { Metadata } from "next";
import type { Project } from "@/app/projects/projects";

export function siteDescription(text: string) {
  return `This is Matteo Sandrin's personal website. ${text}`;
}

const DEFAULT_DESCRIPTION = siteDescription(
  "I build useful software and beautiful objects.",
);
const DEFAULT_IMAGE = "/assets/img/social-preview.jpg";

type PageMetadata = {
  title: string;
  description?: string;
  // Root-relative URL of the social preview image.
  image?: string;
  // Root-relative URL of the canonical page.
  canonical?: string;
};

export function pageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  canonical,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      siteName: title,
      type: "website",
      title,
      url: "/",
      description,
      images: [{ url: image, width: 1280, height: 640, alt: description }],
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

export function projectMetadata(project: Project) {
  return pageMetadata({
    title: `${project.title} | Matteo Sandrin`,
    description: siteDescription(`This page showcases the ${project.title}`),
    image: project.preview ?? project.images?.[0],
    canonical: project.url,
  });
}
