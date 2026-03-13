import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../ui/shadcn/utils";

/** Creates typed variants with class merging. */
export const createVariants = cva;

/** Extracts variant prop types for a given cva config. */
export type VariantsOf<T extends (...args: any[]) => string> = VariantProps<T>;

/** Merges class names. */
export { cn };


