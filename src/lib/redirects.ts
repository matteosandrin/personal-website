const PROJECTS = [
  "123-sign",
  "dd-sign",
  "diffusion-garden",
  "led-matrix",
  "metro-clock",
  "metrocard",
  "space-clock",
];

// Old URLs that now live somewhere else. Each key gets a static page that
// sends the visitor to its value.
export const REDIRECTS: Record<string, string> = {
  // The projects pages used to live under /objects, then under /projects.
  "/objects": "/projects",
  ...Object.fromEntries(
    PROJECTS.flatMap((slug) => [
      [`/objects/${slug}`, `/${slug}`],
      [`/projects/${slug}`, `/${slug}`],
    ]),
  ),
};
