import { execFileSync } from "node:child_process";

type Props = {
  // File or folder path from the repo root.
  path: string;
  className?: string;
};

// Shows the date of the last git commit that changed `path`, read at build time.
export function LastUpdate({ path, className }: Props) {
  const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", path], {
    encoding: "utf8",
  }).trim();
  // A file with no commits yet has no git date. Use today.
  const date = iso ? new Date(iso) : new Date();
  const label = date
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toLowerCase();
  return <p className={className}>(last update: {label})</p>;
}
