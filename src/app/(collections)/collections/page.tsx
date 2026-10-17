import { ContentGrid } from "@/components/ContentGrid";
import { entriesIn } from "@/lib/content";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Collections",
  description: siteDescription(
    "This page lists the collections that Matteo adds to over time.",
  ),
  path: "/collections",
});

export default function Collections() {
  return (
    <div className="max-w-2xl">
      <h1>Collections</h1>
      <ContentGrid entries={entriesIn("collections")} />
    </div>
  );
}
