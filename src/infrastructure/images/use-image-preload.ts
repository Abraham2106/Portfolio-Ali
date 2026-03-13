import { useEffect, useState } from "react";
import type { LoadStatus } from "../../shared/lib/types";

/** Result of image preload hook. */
export interface ImagePreloadResult {
  /** Current status. */
  status: LoadStatus;
  /** Last error, if any. */
  error: Error | null;
}

/** Preloads an image and returns its status. */
export function useImagePreload(src: string | null): ImagePreloadResult {
  const [status, setStatus] = useState<LoadStatus>("idle");
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!src) return;
    setStatus("loading");
    const img = new Image();
    img.onload = () => setStatus("loaded");
    img.onerror = () => {
      setError(new Error("Image preload failed"));
      setStatus("error");
    };
    img.src = src;
  }, [src]);

  return { status, error };
}


