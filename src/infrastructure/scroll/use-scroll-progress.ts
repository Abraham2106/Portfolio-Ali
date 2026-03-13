import { useState } from "react";
import { computeScrollProgress } from "../../application/scroll/compute-scroll-progress";
import { useScrollListener, type ScrollListenerOptions } from "./use-scroll-listener";

/** Returns scroll progress (0..1) based on page scroll. */
export function useScrollProgress(options: ScrollListenerOptions = {}): number {
  const [progress, setProgress] = useState(0);

  useScrollListener(() => {
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    setProgress(computeScrollProgress(scrollY, scrollHeight, viewportHeight));
  }, options);

  return progress;
}


