import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Pill from "../ui/Pill";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface bg-[url('/hero-background.png')] bg-cover bg-center">
      {/* Scrim: the photo runs bright on the left, where the headline sits. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-white via-white/85 to-white/40 md:via-white/75 md:to-transparent"
      />

      <div className="relative mx-auto flex min-h-120 w-full max-w-[85rem] flex-col justify-center gap-5 px-4 py-16 md:min-h-140 md:gap-6 md:px-8 md:py-24 lg:px-16">
        <Pill>FOOTBALL, BUILT FOR THE DIGITAL AGE</Pill>

        <h1 className="font-montserrat text-5xl/15 font-bold md:max-w-2xl md:text-6xl/18">
          A Stronger Team <br />
          <span className="text-brand">
            On and Off the <br /> Pitch
          </span>
        </h1>

        <p className="text-muted md:max-w-2xl">
          FreeStack helps football academies, clubs, and sports organizations
          bring their digital presence, media, operations, and performance
          insights together.
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

          <Button
            href="/#"
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
