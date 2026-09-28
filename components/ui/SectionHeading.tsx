import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Pill from "./Pill";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
  className?: string;
};

/** Section title block: eyebrow, heading, accent rule and optional "view all" link. */
export default function SectionHeading({
  title,
  eyebrow,
  description,
  action,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="flex flex-col items-start gap-3">
        {eyebrow && <Pill tone={dark ? "invert" : "accent"}>{eyebrow}</Pill>}

        <h2
          className={`font-montserrat text-2xl font-bold md:text-3xl lg:text-4xl ${dark ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>

        <span className="h-1 w-14 rounded-full bg-linear-to-r from-brand to-accent" />

        {description && (
          <p className={`max-w-2xl ${dark ? "text-muted-invert" : "text-muted"}`}>
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className={`group inline-flex shrink-0 items-center gap-2 font-medium transition-colors md:text-lg ${dark ? "text-accent hover:text-white" : "text-brand hover:text-brand-strong"}`}
        >
          {action.label}
          <ArrowRight
            size={18}
            strokeWidth={3}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}
