import { type RefObject, useEffect, useState } from "react";

/** Result of an intersection observer hook. */
export interface IntersectionState {
  /** Whether the element is intersecting. */
  isIntersecting: boolean;
  /** Last entry observed. */
  entry: IntersectionObserverEntry | null;
}

/** Observes a ref element using IntersectionObserver. */
export function useIntersectionObserver<T extends Element>(
  ref: RefObject<T>,
  options: IntersectionObserverInit,
  enabled = true
): IntersectionState {
  const [state, setState] = useState<IntersectionState>({
    isIntersecting: false,
    entry: null,
  });

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setState({ isIntersecting: entry.isIntersecting, entry });
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [enabled, ref, options.root, options.rootMargin, options.threshold]);

  return state;
}


