import { readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

// Reads the size of an image in /public at build time.
export function getImageSize(src: string) {
  const file = path.join(process.cwd(), "public", src);
  const { width, height } = imageSize(readFileSync(file));
  return { width, height };
}
