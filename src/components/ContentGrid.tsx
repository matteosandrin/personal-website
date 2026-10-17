import Link from "next/link";
import { Img } from "@/components/Img";
import { type Entry, entryPath } from "@/lib/content";

type Props = {
  title?: string;
  entries: Entry[];
};

export function ContentGrid({ title, entries }: Props) {
  return (
    <>
      {title && <h2>{title}</h2>}
      <div className="mt-single grid grid-cols-1 justify-center gap-3 md:grid-cols-2">
        {entries.map((entry) => (
          <ContentCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </>
  );
}

function ContentCard({ entry }: { entry: Entry }) {
  return (
    <Link href={entryPath(entry)} className="group">
      {entry.img ? (
        <Img
          className="aspect-square w-full object-cover object-center"
          src={entry.img}
        />
      ) : (
        // No thumbnail: show the subtitle on a plain tile.
        <div className="flex aspect-square w-full items-center justify-center bg-slate-200 p-8 text-center text-slate-500">
          {entry.subtitle}
        </div>
      )}
      <div className="mt-2 text-center font-mono group-hover:underline">
        {entry.title}
      </div>
    </Link>
  );
}
