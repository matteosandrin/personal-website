import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Props = {
  // Less space between items.
  tight?: boolean;
  className?: string;
  children: ReactNode;
};

export function BulletList({ tight, className, children }: Props) {
  return (
    <ul
      className={cx(
        "list-disc pl-6",
        tight ? "space-y-1" : "space-y-2",
        className,
      )}>
      {children}
    </ul>
  );
}
