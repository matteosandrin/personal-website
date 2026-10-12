import Link from "next/link";
import { chapters } from "../chapters";

const linkClass = "font-mono tracking-wider hover:underline";

// Links to the previous chapter, the index and the next chapter.
export function ChapterNav({ index }: { index: number }) {
  return (
    <div className="mt-triple flex justify-between gap-2">
      {index > 0 && (
        <div className="w-1/4">
          <Link href={`/power-broker/${index - 1}`} className={linkClass}>
            ← previous
          </Link>
        </div>
      )}
      <Link href="/power-broker" className={linkClass}>
        index
      </Link>
      {index < chapters.length - 1 && (
        <div className="w-1/4 text-right">
          <Link href={`/power-broker/${index + 1}`} className={linkClass}>
            next →
          </Link>
        </div>
      )}
    </div>
  );
}
