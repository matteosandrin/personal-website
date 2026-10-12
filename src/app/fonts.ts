import localFont from "next/font/local";

// All weights are declared. The browser downloads only the weights a page
// uses, so do not preload them.

export const serif = localFont({
  src: [
    {
      path: "./fonts/PerfectlyNineties-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PerfectlyNineties-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/PerfectlyNineties-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/PerfectlyNineties-SemiboldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/PerfectlyNineties-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PerfectlyNineties-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/PerfectlyNineties-Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/PerfectlyNineties-ExtraboldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/PerfectlyNineties-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/PerfectlyNineties-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  preload: false,
});

export const mono = localFont({
  src: [
    { path: "./fonts/Inconsolata-ExtraLight.ttf", weight: "200" },
    { path: "./fonts/Inconsolata-Light.ttf", weight: "300" },
    { path: "./fonts/Inconsolata-Regular.ttf", weight: "400" },
    { path: "./fonts/Inconsolata-Medium.ttf", weight: "500" },
    { path: "./fonts/Inconsolata-SemiBold.ttf", weight: "600" },
    { path: "./fonts/Inconsolata-Bold.ttf", weight: "700" },
    { path: "./fonts/Inconsolata-ExtraBold.ttf", weight: "800" },
    { path: "./fonts/Inconsolata-Black.ttf", weight: "900" },
  ],
  variable: "--font-mono",
  preload: false,
});

// Not used by any page yet. Use it with the font-moma class.
export const momaSans = localFont({
  src: [
    {
      path: "./fonts/MoMASansWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MoMASansWeb-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/MoMASansWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    { path: "./fonts/MoMASansWeb-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "./fonts/MoMASansWeb-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-moma",
  preload: false,
});
