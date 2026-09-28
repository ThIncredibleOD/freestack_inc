import {
  Camera,
  ChartNoAxesColumnIncreasing,
  CodeXml,
  Megaphone,
} from "lucide-react";

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
    <section className="bg-[hsla(210,40%,98%,1)] flex flex-col gap-6 p-4 md:p-8 lg:p-16">
      <h2 className="font-montserrat text-2xl font-bold">Our Core Areas</h2>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {areas.map((area, index) => {
          const Icon = area.icon;

          return (
            <li
              key={index}
              className="bg-[hsla(0,0%,100%,1)] flex flex-col gap-4 p-4 border-l-2 border-l-[hsla(207,90%,61%,1)] rounded-xl shadow-md"
            >
              <div className="bg-[hsla(207,90%,61%,0.1)] flex items-center justify-center h-10 w-10 rounded-full">
                <Icon />
              </div>

              <h3 className="font-montserrat text-xl font-bold">
                {area.title}
              </h3>

              <p>{area.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
