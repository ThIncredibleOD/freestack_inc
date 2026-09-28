import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  /** Applied to the full-bleed <section> — use for backgrounds. */
  className?: string;
  /** Applied to the centred inner container — use for layout. */
  innerClassName?: string;
  id?: string;
};

/**
 * Full-bleed section with the site's shared padding rhythm and a centred
 * inner container, so backgrounds still run edge to edge while copy stays
 * readable on wide screens.
 */
export default function Section({
  children,
  className = "",
  innerClassName = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20 ${className}`}
    >
      <div className={`mx-auto w-full max-w-[85rem] ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
