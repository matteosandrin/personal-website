import type { ReactNode } from "react";
import { PageHeader } from "@/components/PageHeader";

type Props = {
  title: string;
  subtitle?: string;
  // Text below the title, in the narrow column.
  intro?: ReactNode;
  // Content below the intro. It can be wider than the intro column.
  children?: ReactNode;
};

export function ProjectLayout({ title, subtitle, intro, children }: Props) {
  return (
    <div>
      <div className="mx-auto w-full max-w-2xl">
        <PageHeader title={title} subtitle={subtitle} />
        <div className="mt-triple">{intro}</div>
      </div>
      {children}
    </div>
  );
}
