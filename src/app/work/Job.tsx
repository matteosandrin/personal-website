import type { ReactNode } from "react";

type Props = {
  company: string;
  role: string;
  children: ReactNode;
};

export function Job({ company, role, children }: Props) {
  return (
    <div>
      <h2>{company}</h2>
      <div className="text-sm text-slate-500">{role}</div>
      {children}
    </div>
  );
}
