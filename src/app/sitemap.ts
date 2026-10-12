import type { MetadataRoute } from "next";
import { chapters } from "@/app/power-broker/chapters";
import { designProjects, softwareProjects } from "@/app/projects/projects";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const PAGES = [
  "/",
  "/about/",
  "/work/",
  "/projects/",
  "/photo/",
  "/power-broker/",
  "/ipod-podcasts/",
  "/cars/",
  "/svgwall/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = [...softwareProjects, ...designProjects]
    .map((p) => p.url)
    .filter((url) => url.startsWith("/projects/"))
    .map((url) => `${url}/`);
  const summaries = chapters.map((_, i) => `/power-broker/${i}/`);
  return [...PAGES, ...projects, ...summaries].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
