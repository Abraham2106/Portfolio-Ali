import * as React from "react";
import { createVariants, type VariantsOf, cn } from "../../lib/variants";

/** Variants for the button component. */
const buttonVariants = createVariants(
  "inline-flex items-center justify-center rounded-full transition focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-action)] text-[var(--color-cream)]",
        ghost: "border border-[rgba(30,18,20,0.2)] text-[var(--color-ink)]",
        magnetic: "bg-[var(--color-action)] text-[var(--color-cream)]",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

/** Props for the Button component. */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantsOf<typeof buttonVariants> {}

/** Button component with design variants. */
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}


