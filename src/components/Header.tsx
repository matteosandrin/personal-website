import Link from "next/link";
import { Fragment } from "react";

const nav = [
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
  { href: "/projects", label: "projects" },
  { href: "/collections", label: "collections" },
];

export function Header() {
  return (
    <header className="px-4 md:px-12">
      <div className="mx-auto flex max-w-2xl flex-col py-4 text-xl md:w-full md:flex-row md:items-baseline md:justify-between">
        <Link href="/">Matteo Sandrin</Link>
        <nav className="flex w-fit gap-2 pt-2 font-mono text-base sm:gap-4 md:pt-0">
          {nav.map(({ href, label }, i) => (
            <Fragment key={href}>
              {i > 0 && <span className="text-slate-400">/</span>}
              <Link href={href} className="text-center hover:underline">
                {label}
              </Link>
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
}
