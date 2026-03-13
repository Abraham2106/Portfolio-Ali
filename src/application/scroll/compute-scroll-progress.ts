/** Computes scroll progress as a 0..1 ratio. */
export function computeScrollProgress(scrollY: number, scrollHeight: number, viewportHeight: number): number {
  const total = Math.max(scrollHeight - viewportHeight, 0);
  return total > 0 ? Math.min(scrollY / total, 1) : 0;
}


