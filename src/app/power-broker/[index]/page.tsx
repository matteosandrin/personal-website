import { readFileSync } from "node:fs";
import path from "node:path";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { AUTHOR, BOOK, SOCIAL_PREVIEW, chapters } from "../chapters";
import { ChapterNav } from "./ChapterNav";

type Props = { params: Promise<{ index: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return chapters.map((_, i) => ({ index: String(i) }));
}

export async function generateMetadata({ params }: Props) {
  const { name } = chapters[Number((await params).index)];
  return pageMetadata({
    title: `${name} | ${BOOK}: Chapter Summary`,
    description: `Summary of 'Chapter ${name}' of the book '${BOOK}' by ${AUTHOR}`,
    image: SOCIAL_PREVIEW,
  });
}

// Paragraphs are separated by blank lines.
function readSummary(index: string) {
  const file = path.join(
    process.cwd(),
    "src/app/power-broker/summaries",
    `${index}.txt`,
  );
  return readFileSync(file, "utf8")
    .trim()
    .split(/\n\s*\n/);
}

export default async function Chapter({ params }: Props) {
  const { index } = await params;
  return (
    <div className="max-w-2xl">
      <PageHeader
        title={chapters[Number(index)].name}
        subtitle={`Summary of "${BOOK}"`}
        centered
        className="font-serif"
      />
      <ChapterNav index={Number(index)} />
      {readSummary(index).map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <ChapterNav index={Number(index)} />
    </div>
  );
}
