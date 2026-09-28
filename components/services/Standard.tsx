import Image from "next/image";

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
    <section className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold">
        The FreeStack Standard
      </h2>
      <p className="text-[hsla(215,16%,47%,1)] md:max-w-2xl">
        Explore the core metrics that drive our commitment to building
        high-performance digital ecosystems for the modern sports industry.
      </p>

      <div className="flex flex-col gap-4 lg:flex-row">
        <ul className="flex flex-col gap-6 lg:flex-1 lg:grid lg:grid-cols-2">
          {standards.map((standard, index) => {
            return (
              <li key={index} className="flex flex-col gap-2">
                <p className="font-montserrat text-[hsla(212,80%,42%,1)] font-bold text-4xl">
                  {standard.stat}
                </p>
                <h3 className="font-montserrat text-lg font-bold">
                  {standard.title}
                </h3>
                <p className="text-[hsla(215,16%,47%,1)] md:max-w-2xl">
                  {standard.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="relative h-80 w-full overflow-hidden rounded-xl lg:flex-1">
          <Image
            src="/services/standard.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
