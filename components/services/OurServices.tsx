import Image from "next/image";
import Pill from "../ui/Pill";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function OurServices() {
  const services = [
    {
      title: "Brand Identity & Design",
      description:
        "We craft powerful, cohesive brand identities that make modern organizations stand out. From logo design to visual systems, we build strong brand recognition.",
      category: {
        number: "01",
        label: "IDENTITY",
      },
      highlights: [
        "Visual Identity",
        "Brand Guidelines",
        "Digital Assets",
        "Social Graphics",
      ],
      img: "/services/our-services-1.png",
    },
    {
      title: "UI/UX Experience Design",
      description:
        "We design intuitive, engaging digital products with the user at the center. Our wireframing, prototyping, and UI craft ensure beautiful and seamless user experiences.",
      category: {
        number: "02",
        label: "EXPERIENCES",
      },
      highlights: [
        "User Research",
        "Wireframes & Prototyping",
        "Interface Design",
        "Usability Testing",
      ],
      img: "/services/our-services-1.png",
    },
    {
      title: "Web Development",
      description:
        "We engineer robust, responsive, and secure websites and web applications. We don't just write code; we build high-performance digital solutions.",
      category: {
        number: "03",
        label: "ENGINEERING",
      },
      highlights: [
        "Frontend & Backend",
        "Custom Platforms",
        "CMS Integration",
        "E-Commerce",
      ],
      img: "/services/our-services-1.png",
    },
    {
      title: "Deployment & Support",
      description:
        "We ensure your systems deploy smoothly and remain secure, fast, and operational. We offer continuous hosting management, optimization, and technical support.",
      category: {
        number: "04",
        label: "RELIABILITY",
      },
      highlights: [
        "Cloud Hosting & DevOps",
        "Ongoing Maintenance",
        "Technical Support",
        "Security Updates",
      ],
      img: "/services/our-services-1.png",
    },
  ];

  return (
    <Section innerClassName="flex flex-col gap-10 md:gap-12">
      <SectionHeading title="Our Services" />

      <ul className="flex flex-col gap-10 lg:gap-16">
        {services.map((service, index) => {
          return (
            <li
              key={index}
              className={`group flex flex-col gap-6 lg:items-center lg:gap-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="relative h-56 w-full overflow-hidden rounded-2xl md:h-72 lg:flex-1">
                <Image
                  src={service.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-brand/10 transition-colors duration-300 group-hover:bg-brand/20 motion-reduce:transition-none"
                />
                <span className="absolute top-4 left-4 font-montserrat text-4xl font-bold text-white/80 md:text-5xl">
                  {service.category.number}
                </span>
              </div>

              <div className="flex flex-col items-start gap-4 lg:flex-1">
                <Pill size="sm">{service.category.label}</Pill>

                <h3 className="font-montserrat text-xl font-bold md:text-2xl">
                  {service.title}
                </h3>

                <span className="h-1 w-10 rounded-full bg-linear-to-r from-brand to-accent" />

                <p className="text-muted">{service.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Pill tone="neutral" size="sm">
                        {highlight}
                      </Pill>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
