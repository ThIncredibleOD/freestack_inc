import Image from "next/image";
import Pill from "../ui/Pill";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section
      className="bg-surface"
      innerClassName="flex flex-col gap-6 md:gap-8"
    >
      <Pill>ABOUT FREESTACK</Pill>

      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center md:gap-12">
        <div className="flex flex-col gap-4 md:flex-2 md:gap-6">
          <h1 className="font-montserrat text-5xl/15 font-bold md:max-w-2xl md:text-6xl/18">
            Architects of The Digital Experience.
          </h1>

          <span className="h-1 w-14 rounded-full bg-linear-to-r from-brand to-accent" />

          <p className="text-muted md:max-w-2xl">
            FreeStack Inc. is a Nigerian technology and digital solutions
            company helping football academies, clubs, and sports organizations
            build their digital presence and improve how they operate. We bring
            together digital platforms, creative media, communication, and
            performance analysis sto solve practical challenges across the
            sports ecosystem.
          </p>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-ink p-10 md:flex-1 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
          />

          {/* 1938x812 — kept at its real 2.39:1 ratio instead of a 400x400 square. */}
          <Image
            src="/logo-white.png"
            width={480}
            height={201}
            alt="FreeStack"
            className="relative w-full max-w-70"
          />
        </div>
      </div>
    </Section>
  );
}
