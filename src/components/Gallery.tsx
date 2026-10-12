"use client";

import "photoswipe/style.css";
import "./Gallery.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect, useRef } from "react";

const ARROW_SVG = `<svg class="right-arrow pswp__icn" viewBox="0 0 36 36" width="36" height="36">
  <polyline class="outer-color" points="21,29 10,18 21,7"></polyline>
  <polyline class="inner-color" points="21,29 10,18 21,7"></polyline>
</svg>`;

const CROSS = `<svg viewBox="0 0 36 36">
  <line x1="10" y1="10" x2="26" y2="26"></line>
  <line x1="26" y1="10" x2="10" y2="26"></line>
</svg>`;

const CLOSE_SVG = `<svg class="close-button pswp__icn" viewBox="0 0 36 36" width="36" height="36">
  <foreignObject class="outer-color" width="36" height="36" style="stroke-width: 2.5px">${CROSS}</foreignObject>
  <foreignObject class="inner-color" width="36" height="36" style="stroke-width: 1.5px">${CROSS}</foreignObject>
</svg>`;

// A column of images. Click an image to open it in a lightbox.
export function Gallery({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ref.current!,
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "fade",
      counter: false,
      zoom: false,
      initialZoomLevel: "fit",
      secondaryZoomLevel: 2.5,
      paddingFn: (viewportSize) => {
        const p = viewportSize.x > 768 ? 32 : 8;
        return { top: p, bottom: p, left: p, right: p };
      },
      bgOpacity: 0.8,
      arrowPrevSVG: ARROW_SVG,
      arrowNextSVG: ARROW_SVG,
      closeSVG: CLOSE_SVG,
    });
    // The lightbox shows the same file as the page, so take the size from it.
    lightbox.addFilter("domItemData", (itemData, element) => {
      const img = element.querySelector("img")!;
      return {
        ...itemData,
        width: img.naturalWidth,
        height: img.naturalHeight,
      };
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <div ref={ref} className="flex max-w-7xl flex-col">
      {images.map((url) => (
        <div key={url} className="img-container">
          <a href={url}>
            <img
              src={url}
              className="mx-auto cursor-zoom-in object-contain md:max-h-[75vh]"
              alt=""
            />
          </a>
        </div>
      ))}
    </div>
  );
}
