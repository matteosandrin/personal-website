/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Emit about/index.html (not about.html), same as the old build.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
