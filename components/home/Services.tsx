import { ArrowRight, Cloud, CodeXml, PenTool, Shapes } from "lucide-react";
import Link from "next/link";

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
      icon: PenTool,
    },
    {
      id: 3,
      title: "Creative Media & Storytelling",
      description:
        "Photography, video, matchday content, graphics, interviews, and social media that showcase your teams, players, and progress..",
      icon: CodeXml,
    },
    {
      id: 4,
      title: "Branding & Communication",
      description:
        "A consistent identity and stronger online presence that help your organization present its people, achievements, and ambitions professionally.",
      icon: Cloud,
    },
  ];

  return (
    <section className="flex flex-col gap-4 md:gap-6 bg-[hsla(210,40%,98%,1)] p-4 md:p-8 lg:p-16">
      <div className="flex justify-between items-center">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold">
          Our Services
        </h2>
        <Link
          href="/#"
          className="flex items-center gap-2 md:text-lg text-[hsla(212,80%,42%,1)] hover:underline"
        >
          view full services
          <ArrowRight size={18} strokeWidth={3} />
        </Link>
      </div>

      <ul className="flex w-full flex-col gap-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <li
              key={service.id}
              className="group flex w-full gap-4 items-center border border-[hsla(207,90%,61%,1)] py-4 px-2 rounded-xl transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-[hsla(207,90%,61%,0.1)] hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-[hsla(207,90%,61%,0.1)]">
                <Icon className="size-5 md:size-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-montserrat text-xl md:text-2xl font-bold">
                  {service.title}
                </h3>
                <p className="text-sm md:text-md text-[hsla(215,16%,47%,1)]">
                  {service.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
