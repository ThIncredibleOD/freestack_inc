import type { ReactNode } from "react";

type Tone = "accent" | "neutral" | "invert";
type Size = "sm" | "md";

const tones: Record<Tone, string> = {
  accent: "bg-accent/10 text-brand",
  neutral: "bg-ink/8 text-ink",
  invert: "bg-white/10 text-white ring-1 ring-white/20",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1 text-xs",
  md: "px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm",
};

type PillProps = {
  children: ReactNode;
  tone?: Tone;
  size?: Size;
  className?: string;
};

/** Small rounded label used for eyebrows, categories and tech tags. */
export default function Pill({
  children,
  tone = "accent",
  size = "md",
  className = "",
}: PillProps) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full font-semibold tracking-wide ${tones[tone]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
