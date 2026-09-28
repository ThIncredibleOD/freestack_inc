import Image from "next/image";

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
    <section className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold">
        Our Services
      </h2>

      <ul className="flex flex-col gap-6 lg:gap-10">
        {services.map((service, index) => {
          return (
            <li
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-4 lg:gap-8`}
            >
              <div className="relative w-full h-50 rounded-xl overflow-hidden lg:flex-1">
                <Image
                  src={service.img}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-[hsla(212,80%,42%,0.08)] transition-colors duration-300 group-hover:bg-[hsla(212,80%,42%,0.2)] motion-reduce:transition-none" />
              </div>
              <div className="flex flex-col gap-4 lg:flex-1">
                <div className="text-sm md:text-md bg-[hsla(207,90%,61%,0.1)] w-fit py-1 px-2 md:py-2 md:px-4 rounded-full">
                  {service.category.number} / {service.category.label}
                </div>
                <h3 className="font-montserrat text-xl font-bold">
                  {service.title}
                </h3>
                <p className="text-[hsla(215,16%,47%,1)]">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 ">
                  {service.highlights.map((highlight, i) => {
                    return (
                      <div key={i} className="flex gap-2 items-center">
                        <p className=" text-sm">{highlight}</p>
                        <p
                          className={`${i === service.highlights.length - 1 ? "hidden" : "block"}`}
                        >
                          &bull;
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
