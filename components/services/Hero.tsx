import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import Pill from "../ui/Pill";

export default function Hero() {
  return (
    <section className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[85rem] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col items-start gap-5 md:gap-6">
          <Pill>OUR SERVICES</Pill>

          <h1 className="font-montserrat text-5xl/15 font-bold md:text-6xl/18">
            End-to-End Digital Ecosystems.
          </h1>

          <span className="h-1 w-14 rounded-full bg-linear-to-r from-brand to-accent" />

          <p className="text-muted md:max-w-xl">
            From structural web engineering to advanced sports performance data,
            we build scalable, high-performance solutions tailored for modern
            organizations and elite academies.
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

            <Button href="/#" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>

        {/*
          1440x2944 — a very tall portrait. As a `bg-cover` backdrop it was
          cropped to a thin horizontal slice on desktop, so it now sits in a
          tall frame where the whole composition reads.
        */}
        <div className="relative h-100 overflow-hidden rounded-3xl sm:h-120 lg:h-150">
          <Image
            src="/services/hero-background.jpg"
            alt=""
            fill
            loading="eager"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-top"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-ink/50 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
