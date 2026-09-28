import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function CallToAction() {
  return (
    <section className="px-4 pb-16 md:px-8 md:pb-20 lg:px-16">
      <div className="relative mx-auto w-full max-w-[85rem] overflow-hidden rounded-3xl bg-brand px-6 py-14 text-white md:px-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-ink/40 blur-3xl"
        />

        <div className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="font-montserrat max-w-2xl text-2xl font-bold md:text-4xl">
            Ready to build something structurally sound?
          </h2>

          <p className="max-w-xl text-white/85">
            Let&apos;s turn your concept into a scalable digital product from
            design to deployment.
          </p>

          <Button href="/#" variant="light" size="lg" className="group mt-2">
            Get Started
            <ArrowRight
              size={18}
              strokeWidth={3}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
