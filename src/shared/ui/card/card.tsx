import * as React from "react";
import { createVariants, type VariantsOf, cn } from "../../lib/variants";

/** Variants for the card component. */
const cardVariants = createVariants(
  "rounded-[var(--radius-ui-lg)] transition",
  {
    variants: {
      variant: {
        lift: "bg-white border border-[rgba(30,18,20,0.07)] shadow-[0_2px_16px_rgba(30,18,20,0.05)]",
        flat: "bg-white border border-[rgba(30,18,20,0.08)]",
        dark: "bg-[var(--color-ink)] text-[var(--color-cream)] border border-[rgba(250,244,237,0.08)]",
      },
    },
    defaultVariants: { variant: "lift" },
  }
);

/** Props for the Card component. */
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantsOf<typeof cardVariants> {}

/** Card container with design variants. */
export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant }), className)} {...props} />;
}


