import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // A page can be a page.mdx file.
  pageExtensions: ["ts", "tsx", "mdx"],
  // Emit about/index.html (not about.html), same as the old build.
  trailingSlash: true,
  images: { unoptimized: true },
  // Let the dev server send its scripts to this machine's Tailscale names.
  allowedDevOrigins: ["meerkat"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
