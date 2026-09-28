import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-strong hover:shadow-lg hover:shadow-brand/20",
  outline:
    "border border-line text-ink hover:border-brand hover:bg-brand/5 hover:text-brand",
  light: "bg-white text-ink shadow-sm hover:bg-surface hover:shadow-lg",
  ghost: "text-brand hover:bg-brand/8",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-6 py-3 text-base md:px-8 md:py-3.5 md:text-lg",
};

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition duration-200 active:scale-[0.98]";

type ButtonProps = {
  children: ReactNode;
  /** Renders a `next/link` instead of a `<button>`. */
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  "aria-label"?: string;
};

/** Shared call-to-action, rendered as a link when `href` is given. */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
