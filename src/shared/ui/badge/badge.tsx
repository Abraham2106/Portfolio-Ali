import * as React from "react";
import { createVariants, type VariantsOf, cn } from "../../lib/variants";

/** Variants for the badge component. */
const badgeVariants = createVariants(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition",
  {
    variants: {
      variant: {
        category: "border-[var(--color-pink-100)] bg-[var(--color-pink-50)] text-[var(--color-action)]",
        neutral: "border-[rgba(30,18,20,0.1)] bg-white text-[var(--color-ink)]",
        dark: "border-[rgba(250,244,237,0.2)] bg-[rgba(30,18,20,0.75)] text-[var(--color-cream)]",
      },
    },
    defaultVariants: { variant: "category" },
  }
);

/** Props for the Badge component. */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantsOf<typeof badgeVariants> {}

/** Badge/pill component with design variants. */
export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}


