import { useEffect, useRef } from "react";

/** Subscribes to window resize events. */
export function useResizeListener(listener: () => void) {
  const listenerRef = useRef(listener);

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    const handler = () => listenerRef.current();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
}


