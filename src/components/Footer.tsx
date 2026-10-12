import { TextLink } from "@/components/TextLink";
import { X_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full pb-8 pt-4 text-center text-slate-500">
      like what you see?{" "}
      <TextLink href={X_URL} newTab>
        follow me!
      </TextLink>
    </footer>
  );
}
