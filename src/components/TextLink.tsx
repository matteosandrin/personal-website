import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Props = {
  href: string;
  newTab?: boolean;
  className?: string;
  children: ReactNode;
};

export function TextLink({ href, newTab, className, children }: Props) {
  return (
    <Link
      href={href}
      className={cx(
        "text-blue-700 underline decoration-blue-700/40 underline-offset-4 transition-colors hover:decoration-blue-700",
        className,
      )}
      target={newTab ? "_blank" : undefined}>
      {children}
    </Link>
  );
}
