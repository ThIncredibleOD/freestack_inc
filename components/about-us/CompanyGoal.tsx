import { Target } from "lucide-react";

export default function CompanyGoal() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
      <section className="relative mx-auto w-full max-w-[85rem] overflow-hidden rounded-3xl bg-ink px-6 py-12 text-white md:px-12 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        />

        <div className="relative flex flex-col items-start gap-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Target className="size-6 text-accent" />
          </span>

          <h2 className="font-montserrat text-2xl font-bold md:text-3xl">
            The FreeStack Goal
          </h2>

          <span className="h-1 w-14 rounded-full bg-linear-to-r from-accent to-white/40" />

          <p className="max-w-3xl text-muted-invert md:text-lg">
            We want sports organizations to be more organized, visible,
            data-informed, and equipped to develop their players. We create
            connected, practical solutions that help teams communicate
            professionally, understand performance, and build sustainable
            digital operations.
          </p>
        </div>
      </section>
    </div>
  );
}
