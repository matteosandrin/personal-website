"use client";

import { useEffect, useRef } from "react";

// Shows a clock SVG and turns its hands to the current time. The SVG must
// have #background, #hours_hand and #minutes_hand elements.
export function SvgClock({ src }: { src: string }) {
  const ref = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    let timer: number | undefined;
    const start = () => {
      const svg = ref.current?.contentDocument;
      if (!svg) return;
      const box = (
        svg.getElementById("background") as unknown as SVGGraphicsElement
      ).getBBox();
      const pivot = `${box.width / 2} ${box.height / 2}`;
      const hours = svg.getElementById("hours_hand")!;
      const minutes = svg.getElementById("minutes_hand")!;
      const tick = () => {
        const now = new Date();
        const minuteSec =
          now.getMinutes() * 60 +
          now.getSeconds() +
          now.getMilliseconds() / 1000;
        const hourSec = (now.getHours() % 12) * 3600 + minuteSec;
        minutes.setAttribute(
          "transform",
          `rotate(${(minuteSec / 3600) * 360} ${pivot})`,
        );
        hours.setAttribute(
          "transform",
          `rotate(${(hourSec / 43200) * 360} ${pivot})`,
        );
      };
      tick();
      timer = window.setInterval(tick, 100);
    };
    const object = ref.current!;
    // The SVG can finish loading before React attaches the listener.
    if (object.contentDocument?.getElementById("background")) start();
    else object.addEventListener("load", start, { once: true });
    return () => {
      object.removeEventListener("load", start);
      window.clearInterval(timer);
    };
  }, []);

  return <object ref={ref} data={src} type="image/svg+xml" />;
}
