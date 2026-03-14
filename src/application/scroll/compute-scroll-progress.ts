/** Computes scroll progress as a 0..1 ratio. */
export function computeScrollProgress(scrollY: number, scrollHeight: number, viewportHeight: number): number {
  const total = Math.max(scrollHeight - viewportHeight, 0);
  return total > 0 ? Math.min(Math.max(scrollY / total, 0), 1) : 0;
}


