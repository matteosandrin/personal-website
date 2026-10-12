"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { JR_PIVOT, JrClock } from "./JrClock";
import { MILANO_PIVOT, MilanoClock } from "./MilanoClock";

const CLOCKS = {
  jr: { Face: JrClock, pivot: JR_PIVOT },
  milano: { Face: MilanoClock, pivot: MILANO_PIVOT },
};

// Shows a clock whose hands follow the current time. A CSS animation turns
// each hand; a negative delay starts it at the current position.
export function SvgClock({ clock }: { clock: keyof typeof CLOCKS }) {
  const { Face, pivot } = CLOCKS[clock];
  // Seconds since 12:00. Unknown until mount, so the server render shows 12:00.
  const [elapsed, setElapsed] = useState<number>();

  useEffect(() => {
    const now = new Date();
    setElapsed(
      (now.getHours() % 12) * 3600 +
        now.getMinutes() * 60 +
        now.getSeconds() +
        now.getMilliseconds() / 1000,
    );
  }, []);

  const hand = (className: string, period: number) => ({
    className: elapsed === undefined ? undefined : className,
    style: {
      transformBox: "view-box",
      transformOrigin: `${pivot.x}px ${pivot.y}px`,
      animationDelay:
        elapsed === undefined ? undefined : `-${elapsed % period}s`,
    } satisfies CSSProperties,
  });

  return (
    <Face
      hours={hand("animate-clock-hours", 12 * 3600)}
      minutes={hand("animate-clock-minutes", 3600)}
    />
  );
}
