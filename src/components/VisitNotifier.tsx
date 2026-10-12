"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isBot, isTrackingOff, notify } from "@/lib/notify";

// Sends a visit notification 2s after each page view. Navigation is
// client-side, so this runs on each path change, not only on page load.
export function VisitNotifier() {
  const pathname = usePathname();

  useEffect(() => {
    if (isBot() || isTrackingOff()) return;
    const timer = window.setTimeout(() => notify(pathname), 2000);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
