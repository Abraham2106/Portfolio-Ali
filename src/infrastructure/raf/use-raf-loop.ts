import { useEffect, useRef } from "react";

/** Options for RAF loop. */
export interface RafOptions {
  /** Enables or disables the loop. */
  enabled?: boolean;
}

/** Runs a RAF loop while enabled. */
export function useRafLoop(callback: (time: number) => void, options: RafOptions = {}) {
  const { enabled = true } = options;
  const callbackRef = useRef(callback);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    const tick = (time: number) => {
      callbackRef.current(time);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);
}


