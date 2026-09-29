import {
  Camera,
  ChartNoAxesColumnIncreasing,
  CodeXml,
  Megaphone,
} from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function CoreAreas() {
  const areas = [
    {
      title: "Digital Infrastructure",
      description:
        "Websites, Digital Platforms, Databases, Registration Systems, and Digital Player Profiles.",
      icon: CodeXml,
    },
    {
      title: "Creative & Media",
      description:
        "Photography, Videography, Matchday Content, Graphics, Social Media Management, Interviews, and Storytelling.",
      icon: Camera,
    },
    {
      title: "Performance & Data Analysis",
      description:
        "Match Statistics, Player Performance Reports, Opposition Analysis, Video Analysis, and Data-Driven Player Development.",
      icon: ChartNoAxesColumnIncreasing,
    },
    {
      title: "Digital Branding & Communication",
      description:
        "Strengthening an Academy’s Online Presence and Presenting its Players, Teams, Achievements, and Activities Professionally.",
      icon: Megaphone,
    },
  ];

  return (
    <Section
      className="bg-surface"
      innerClassName="flex flex-col gap-10 md:gap-12"
    >
      <SectionHeading title="Our Core Areas" />

      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {areas.map((area, index) => {
          const Icon = area.icon;

          return (
            <li
              key={index}
              className="group flex flex-col gap-4 rounded-2xl border-l-2 border-l-accent bg-white p-6 shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:border-l-brand hover:shadow-xl hover:shadow-ink/5 motion-reduce:transition-none motion-reduce:hover:transform-none md:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="size-6" />
              </div>

              <h3 className="font-montserrat text-xl font-bold">
                {area.title}
              </h3>

              <p className="text-muted">{area.description}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
