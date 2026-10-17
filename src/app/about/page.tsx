import { BulletList } from "@/components/BulletList";
import { Img } from "@/components/Img";
import { TextLink } from "@/components/TextLink";
import { socials } from "@/lib/site";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  path: "/about",
  description: siteDescription(
    "This page has some information about Matteo Sandrin.",
  ),
});

export default function About() {
  return (
    <div className="flex max-w-2xl flex-col">
      <div>
        <h1>About</h1>
        <p>I was born in Milan, Italy. Now I live and work in New York.</p>
        <p>
          Currently I write software at Numeric.{" "}
          <TextLink href="/work">More about my work.</TextLink>
        </p>
        <p>
          I graduated from Columbia University with a B.S. in Computer Science.
        </p>
        <p>
          I'm currently interested in:
          <br />
          Justice (the french touch duo) • Daft Punk • The Power Broker • making
          stuff • film photography • transit • subway signage • Fellini films •
          Wes Anderson films
        </p>
        <h2>How to reach me</h2>
        <BulletList tight>
          <li>sandrin98@gmail.com (reply guaranteed!)</li>
          {socials.map((social) => (
            <li key={social.label}>
              <TextLink href={social.url} newTab>
                {social.label}
              </TextLink>
            </li>
          ))}
        </BulletList>
        <p>(last update: july 2025)</p>
        <Img src="/assets/img/matteo-about.jpg" className="mt-double" />
      </div>
    </div>
  );
}
