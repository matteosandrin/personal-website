import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Props = {
  tip: ReactNode;
  // A wide tip spans the nearest positioned ancestor (e.g. a relative <p>),
  // so long text wraps inside it.
  wide?: boolean;
  children: ReactNode;
};

// Shows the tip above the children on hover or focus.
export function Tooltip({ tip, wide, children }: Props) {
  return (
    <span
      tabIndex={0}
      className={cx(
        "group",
        wide
          ? "cursor-help underline decoration-slate-400 decoration-dotted underline-offset-4"
          : "relative",
      )}>
      {children}
      {/* The visibility transition keeps the tip on screen while it fades out.
          The bottom padding of a wide tip keeps the hover on the way up. */}
      <span
        className={cx(
          "invisible absolute z-10 opacity-0 transition-[opacity,visibility] duration-300 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100",
          wide
            ? "left-0 right-0 mx-auto w-fit -translate-y-full pb-2"
            : "-top-10 left-1/2 -translate-x-1/2 whitespace-nowrap",
        )}>
        <span
          className={cx(
            "block rounded-lg bg-gray-900 px-3 py-2 text-sm text-white",
            wide
              ? "cursor-text select-text break-all font-mono"
              : "font-medium",
          )}>
          {tip}
        </span>
        {!wide && (
          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
        )}
      </span>
    </span>
  );
}
