"use client";

import "photoswipe/style.css";
import "./Lightbox.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { type ReactNode, useEffect, useRef } from "react";

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

// Opens the <a> children in a lightbox. Each <a> must have data-pswp-width
// and data-pswp-height.
export function Lightbox({ children }: { children: ReactNode }) {
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
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <div ref={ref} className="flex max-w-7xl flex-col">
      {children}
    </div>
  );
}
