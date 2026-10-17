import type { MetadataRoute } from "next";
import { chapters } from "@/app/(projects)/power-broker/chapters";
import { entries, entryHref, sections } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/work",
    ...Object.values(sections).map((s) => s.path),
    ...entries.filter((e) => !e.url).map(entryHref),
    ...chapters.map((_, i) => `/power-broker/${i}`),
  ];
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}/`,
  }));
}
