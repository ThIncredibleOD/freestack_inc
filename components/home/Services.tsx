import {
  Camera,
  ChartNoAxesColumnIncreasing,
  Megaphone,
  Shapes,
} from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Digital Platforms & Operations",
      description:
        "Websites, registration systems, databases, and digital player profiles that make your organization easier to manage and discover.",
      icon: Shapes,
    },
    {
      id: 2,
      title: "Performance & Data Analysis",
      description:
        "Match and player statistics, video analysis, opposition reports, and clear insights to support coaching and player development.",
      icon: ChartNoAxesColumnIncreasing,
    },
    {
      id: 3,
      title: "Creative Media & Storytelling",
      description:
        "Photography, video, matchday content, graphics, interviews, and social media that showcase your teams, players, and progress..",
      icon: Camera,
    },
    {
      id: 4,
      title: "Branding & Communication",
      description:
        "A consistent identity and stronger online presence that help your organization present its people, achievements, and ambitions professionally.",
      icon: Megaphone,
    },
  ];

  return (
    <Section
      className="bg-surface"
      innerClassName="flex flex-col gap-10 md:gap-12"
    >
      <SectionHeading
        title="Our Services"
        action={{ label: "view full services", href: "/services" }}
      />

      <ul className="grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <li
              key={service.id}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-ink/5 motion-reduce:transition-none motion-reduce:hover:transform-none md:p-8"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-brand to-accent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
              />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="size-6" />
              </div>

              <h3 className="font-montserrat text-xl font-bold md:text-2xl">
                {service.title}
              </h3>

              <p className="text-sm text-muted md:text-base">
                {service.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
