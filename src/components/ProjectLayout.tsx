import type { ReactNode } from "react";
import { PageHeader } from "@/components/PageHeader";

type Props = {
  title: string;
  subtitle?: string;
  // Text below the title, in the narrow column. Put wider content, such as
  // a gallery, after the layout.
  children?: ReactNode;
};

export function ProjectLayout({ title, subtitle, children }: Props) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <PageHeader title={title} subtitle={subtitle} />
      <div className="mt-triple">{children}</div>
    </div>
  );
}
