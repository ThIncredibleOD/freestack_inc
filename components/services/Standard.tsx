import Image from "next/image";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Standard() {
  const standards = [
    {
      stat: "100%",
      title: "Custom Architecture",
      description:
        "Every platform is engineered from scratch. No templates, just scalable digital solutions built for elite performance.",
    },
    {
      stat: "4",
      title: "Core Disciplines",
      description:
        "Spanning digital infrastructure, media, data analysis, and branding to create a complete sports ecosystem.",
    },
    {
      stat: "10+",
      title: "Years Combined Experience",
      description:
        "A specialized core team of designers, software engineers, and media strategists driving digital innovation.",
    },
    {
      stat: "24/7",
      title: "Deployment & Support",
      description:
        "Continuous hosting management, security updates, and technical monitoring to keep your systems operational.",
    },
  ];

  return (
    <Section
      className="bg-surface"
      innerClassName="flex flex-col gap-10 md:gap-12"
    >
      <SectionHeading
        title="The FreeStack Standard"
        description="Explore the core metrics that drive our commitment to building high-performance digital ecosystems for the modern sports industry."
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {standards.map((standard, index) => {
          return (
            <li
              key={index}
              className="group flex flex-col gap-2 rounded-2xl border border-line bg-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-ink/5 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <p className="font-montserrat text-4xl font-bold text-brand md:text-5xl">
                {standard.stat}
              </p>

              <h3 className="font-montserrat text-lg font-bold">
                {standard.title}
              </h3>

              <p className="text-sm text-muted">{standard.description}</p>
            </li>
          );
        })}
      </ul>

      <div className="relative h-64 w-full overflow-hidden rounded-3xl md:h-96">
        <Image
          src="/services/standard.jpg"
          alt=""
          fill
          sizes="(min-width: 1360px) 85rem, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent"
        />
      </div>
    </Section>
  );
}
