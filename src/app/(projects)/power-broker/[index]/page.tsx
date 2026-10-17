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
  const { index } = await params;
  const { name } = chapters[Number(index)];
  return pageMetadata({
    title: `${name} | ${BOOK}: Chapter Summary`,
    path: `/power-broker/${index}`,
    description: `Summary of 'Chapter ${name}' of the book '${BOOK}' by ${AUTHOR}`,
    image: SOCIAL_PREVIEW,
  });
}

export default async function Chapter({ params }: Props) {
  const { index } = await params;
  const { default: Summary } = await import(`../summaries/${index}.mdx`);
  return (
    <div className="max-w-2xl">
      <PageHeader
        title={chapters[Number(index)].name}
        subtitle={`Summary of "${BOOK}"`}
        centered
        className="font-serif"
      />
      <ChapterNav index={Number(index)} />
      <Summary />
      <ChapterNav index={Number(index)} />
    </div>
  );
}
