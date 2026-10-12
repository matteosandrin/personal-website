import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
  // Extra classes for the title.
  className?: string;
};

export function PageHeader({ title, subtitle, centered, className }: Props) {
  return (
    <div className="mb-triple">
      <h1 className={cx("mb-0", centered && "md:text-center", className)}>
        {title}
      </h1>
      {subtitle && (
        <div
          className={cx(
            "w-full leading-relaxed text-slate-500",
            centered && "md:text-center",
          )}>
          {subtitle}
        </div>
      )}
    </div>
  );
}
