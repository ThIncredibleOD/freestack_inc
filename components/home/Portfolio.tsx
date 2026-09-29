import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Pill from "../ui/Pill";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Portfolio() {
  return (
    <Section
      className="bg-surface"
      innerClassName="flex flex-col gap-10 md:gap-12"
    >
      <SectionHeading
        title="Selected Work"
        action={{ label: "view all projects", href: "/#" }}
      />

      <ul>
        <li className="group grid gap-8 overflow-hidden rounded-3xl border border-line bg-white p-5 transition duration-300 ease-out hover:border-accent/50 hover:shadow-xl hover:shadow-ink/5 motion-reduce:transition-none md:p-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="flex items-end justify-center overflow-hidden rounded-2xl bg-[hsla(52,40%,36%,1)] p-8 md:p-10">
            <Image
              src="/works/humanity-desktop.png"
              width={920}
              height={657}
              alt="Peakline Sports team registration platform on desktop"
              className="w-full max-w-sm rounded-lg shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
            />
            <Image
              src="/works/humanity-mobile.png"
              width={330}
              height={658}
              alt="Peakline Sports platform on mobile"
              className="-ml-10 w-20 shrink-0 rounded-lg shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-2 motion-reduce:transition-none motion-reduce:group-hover:transform-none md:w-24"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <Pill>Football</Pill>

            <h3 className="font-montserrat text-xl font-bold md:text-2xl">
              Peakline Sports
            </h3>

            <p className="text-sm text-muted md:text-base">
              A platform for teams to register for a football foundation cup
            </p>

            <div className="flex flex-wrap gap-2">
              {["Foundation", "Football", "Sports"].map((tag) => (
                <Pill key={tag} tone="neutral" size="sm">
                  {tag}
                </Pill>
              ))}
            </div>

            <Link
              href="/#"
              className="mt-2 inline-flex items-center gap-2 font-medium text-brand transition-colors hover:text-brand-strong"
            >
              Read Case Study
              <ArrowUpRight
                size={18}
                strokeWidth={3}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </li>
      </ul>
    </Section>
  );
}
