import type { ComponentProps } from "react";
import { getImageSize } from "@/lib/image-size";

type Props = ComponentProps<"img"> & { src: string };

// An <img> for a file in /public. It sets width and height from the file, so
// the page does not move while the image loads.
export function Img({ src, alt = "", ...props }: Props) {
  const { width, height } = getImageSize(src);
  return <img src={src} width={width} height={height} alt={alt} {...props} />;
}
