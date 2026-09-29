import { User } from "lucide-react";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

export default function Team() {
  const members = [
    {
      name: "Ayinde Eyitayo Odunayo",
      title: "Director",
      description: "H",
      pic: "/about-us/ayinde-eyitayo-odunayo.jpg",
    },
    {
      name: "Victory Uchechukwu",
      title: "Chief Operations Officer",
      description:
        "COO at FreeStack Inc & Full-Stack Engineer. Passionate about operational execution, scalable backend architecture, and building user-centric, high-performance web products",
      pic: "/about-us/Victory.jpg",
    },
    {
      name: "",
      title: "Senior Developer",
      description:
        "Architecting seamless user experiences and scalable design systems for modern sports platforms. (short Bio)",
      pic: "",
    },
  ];

  return (
    <section className="relative bg-[url('/about-us/team-background.jpg')] bg-cover bg-center">
      {/* Dim the pitch photo so the white heading and cards stay readable. */}
      <div aria-hidden className="absolute inset-0 bg-ink/60" />

      <div className="relative mx-auto flex w-full max-w-[85rem] flex-col gap-10 px-4 py-12 md:gap-12 md:px-8 md:py-16 lg:px-16 lg:py-20">
        <SectionHeading title="Meet The Team" tone="dark" />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => {
            return (
              <li
                key={index}
                className="group flex flex-col gap-4 rounded-2xl bg-ink p-5 ring-1 ring-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 hover:ring-accent/40 motion-reduce:transition-none motion-reduce:hover:transform-none md:p-6"
              >
                {/* Both headshots are portrait, so the frame is too. */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-white/5">
                  {member.pic ? (
                    <Image
                      src={member.pic}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 430px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <User
                        className="size-12 text-white/25"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  {member.name && (
                    <h3 className="font-montserrat text-xl font-bold text-white">
                      {member.name}
                    </h3>
                  )}

                  <p className="font-semibold text-accent">{member.title}</p>
                </div>

                <p className="text-sm text-muted-invert">
                  {member.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
