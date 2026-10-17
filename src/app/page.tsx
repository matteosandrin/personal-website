import Link from "next/link";
import { BulletList } from "@/components/BulletList";
import { Img } from "@/components/Img";
import { TextLink } from "@/components/TextLink";
import { entryHref, latestEntries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Matteo Sandrin" },
  path: "/",
});

export default function Home() {
  return (
    <div className="max-w-2xl">
      <Link href="/metrocard">
        <div className="group relative">
          <Img
            className="w-full group-hover:hidden"
            src="/assets/img/metrocard/metrocard-splash.png"
          />
          <Img
            className="hidden w-full group-hover:block"
            src="/assets/img/metrocard/metrocard-splash-back.png"
          />
        </div>
      </Link>
      <div className="mx-auto mt-double w-fit">
        <p>Some things I've made recently:</p>
        <BulletList>
          {latestEntries(4).map((entry) => (
            <li key={entry.slug}>
              <TextLink href={entryHref(entry)} newTab={!!entry.url}>
                {entry.subtitle}
              </TextLink>
            </li>
          ))}
          <li>
            <TextLink href="/projects">(more fun stuff)</TextLink>
          </li>
        </BulletList>
      </div>
    </div>
  );
}
