import Image from "next/image";

export default function Team() {
  const members = [
    {
      name: "Ayinde Eyitayo Odunayo",
<<<<<<< HEAD
      title: "Founder",
=======
      title: "Director",
>>>>>>> 9bb7112b998fcce9d6731567c215711a773c6769
      description:
        "Architecting seamless user experiences and scalable design systems for modern sports platforms.",
      pic: "/about-us/ayinde-eyitayo-odunayo.jpg",
    },
    {
      name: "Victory Uchechukwu",
      title: "Chief Operations Officer",
      description:
        "Architecting seamless user experiences and scalable design systems for modern sports platforms. (short Bio)",
      pic: "",
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
    <section className="bg-[url('/about-us/team-background.jpg')] bg-cover bg-center flex flex-col gap-6 p-4 md:p-8 lg:p-16 mb-10">
      <h2 className="font-montserrat text-white text-2xl font-bold">
        Meet The Team
      </h2>

      <ul className="flex flex-wrap lg:justify-between gap-6">
        {members.map((member, index) => {
          return (
            <li
              key={index}
              className="bg-[hsla(212,52%,14%,1)] flex flex-col gap-4 p-12 rounded-2xl w-full lg:w-[calc(50%-12px)] max-w-137.5"
            >
              <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-black">
                {member.pic ? (
                  <Image
                    src={member.pic}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                ) : null}
              </div>

              <h3 className="font-montserrat text-white text-xl font-bold">
                {member.name}
              </h3>

              <p className="text-[hsla(207,90%,61%,1)] font-bold">
                {member.title}
              </p>

              <p className="text-[hsla(0,0%,100%,0.8)]">
                Architecting seamless user experiences and scalable design
                systems for modern sports platforms. (short Bio)
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
