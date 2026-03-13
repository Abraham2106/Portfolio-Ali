import { useEffect, useRef } from "react";

/** Pointer move payload data. */
export interface PointerMoveData {
  /** X position. */
  x: number;
  /** Y position. */
  y: number;
  /** Event target element. */
  target: Element | null;
}

/** Options for pointer listener. */
export interface PointerListenerOptions {
  /** Enables or disables the listener. */
  enabled?: boolean;
}

/** Subscribes to pointer movement events. */
export function usePointerListener(
  onMove: (data: PointerMoveData) => void,
  options: PointerListenerOptions = {}
) {
  const { enabled = true } = options;
  const onMoveRef = useRef(onMove);

  useEffect(() => {
    onMoveRef.current = onMove;
  }, [onMove]);

  useEffect(() => {
    if (!enabled) return;

    const handler = (event: MouseEvent) => {
      onMoveRef.current({
        x: event.clientX,
        y: event.clientY,
        target: event.target instanceof Element ? event.target : null,
      });
    };

    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [enabled]);
}


