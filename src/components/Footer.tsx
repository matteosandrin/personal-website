import { TextLink } from "@/components/TextLink";
import { socials } from "@/lib/site";

const x = socials.find((s) => s.label === "x.com")!;

export function Footer() {
  return (
    <div className="w-full pb-8 pt-4 text-center text-slate-500">
      like what you see?{" "}
      <TextLink href={x.url} newTab>
        follow me!
      </TextLink>
    </div>
  );
}
