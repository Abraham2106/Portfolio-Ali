import { useEffect, useRef } from "react";

/** Options for scroll listener behavior. */
export interface ScrollListenerOptions {
  /** Whether the listener is passive. */
  passive?: boolean;
  /** Throttle interval in milliseconds. */
  throttleMs?: number;
}

/** Subscribes to scroll events and invokes the listener with scrollY. */
export function useScrollListener(
  listener: (scrollY: number) => void,
  options: ScrollListenerOptions = {}
) {
  const { passive = true, throttleMs } = options;
  const listenerRef = useRef(listener);
  const lastCallRef = useRef(0);

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    const onScroll = () => {
      if (typeof throttleMs === "number") {
        const now = performance.now();
        if (now - lastCallRef.current < throttleMs) return;
        lastCallRef.current = now;
      }
      listenerRef.current(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [passive, throttleMs]);
}


