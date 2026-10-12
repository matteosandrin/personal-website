import Link from "next/link";
import { BulletList } from "@/components/BulletList";
import { Img } from "@/components/Img";
import { TextLink } from "@/components/TextLink";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Matteo Sandrin" },
  path: "/",
});

export default function Home() {
  return (
    <div className="max-w-2xl">
      <Link href="/projects/metrocard">
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
          <li>
            <TextLink href="/ipod-podcasts">
              A guide to syncing podcasts to an iPod
            </TextLink>
          </li>
          <li>
            <TextLink href="/projects/diffusion-garden">
              A creative garden for image generation
            </TextLink>
          </li>
          <li>
            <TextLink href="https://shade.sandr.in">
              A tool for shade-aware walking directions
            </TextLink>
          </li>
          <li>
            <TextLink href="/power-broker">
              Chapter summaries of "The Power Broker"
            </TextLink>
          </li>
          <li>
            <TextLink href="/projects">(more fun stuff)</TextLink>
          </li>
        </BulletList>
      </div>
    </div>
  );
}
