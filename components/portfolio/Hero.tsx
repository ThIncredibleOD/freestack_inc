import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Pill from "../ui/Pill";

export default function Hero() {
  return (
    <section className="relative bg-surface bg-[url('/services/hero-background-mobile.jpg')] bg-cover bg-center md:bg-[url('/services/hero-background-desktop.png')]">
      {/* Same scrim as the services hero — see the note there. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-white via-white/80 to-white/40 md:bg-linear-to-r md:from-white md:via-white/75 md:to-transparent"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[85rem] flex-col justify-end gap-5 px-4 py-16 md:min-h-140 md:justify-center md:gap-6 md:px-8 md:py-24 lg:px-16">
        <Pill>OUR WORK</Pill>

        <h1 className="font-montserrat text-5xl/15 font-bold md:max-w-2xl md:text-6xl/18">
          Featured Deployments
        </h1>

        <span className="h-1 w-14 rounded-full bg-linear-to-r from-brand to-accent" />

        <p className="text-muted md:max-w-2xl">
          Explore how we architect scalable digital solutions and data ecosystems
          for modern sports organizations.
        </p>

        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Button href="/#" size="lg" className="group">
            Get Started
            <ArrowRight
              size={18}
              strokeWidth={3}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>

          {/* Was a dead <button>; now scrolls to the list further down the page. */}
          <Button
            href="#projects"
            variant="outline"
            size="lg"
            className="bg-white/70 backdrop-blur-sm"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
