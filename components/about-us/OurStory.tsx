import Image from "next/image";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function OurStory() {
  const ourStories = [
    {
      title: "Why We Do This",
      description:
        "Running a modern football organization takes more than a website or social media page. Academies and clubs need reliable ways to manage information, share their work, communicate with families and supporters, and help coaches and players learn from performance. FreeStack brings these needs together. We combine software, media, branding, and analysis so organizations can spend less time working across disconnected tools and more time building their teams and opportunities for players.",
      img: "/about-us/story-1.jpg",
    },
    {
      title: "Engineering the Sports Ecosystem",
      description:
        "This drive for integrated, data-driven solutions led us to our core specialization within the sports industry. We provide specialized solutions designed to help football academies, clubs, and sports organizations operate more professionally, build their digital identity, and leverage performance data. Our approach goes beyond simply managing social media or building websites. We build a complete digital ecosystem that supports an academy’s media, technology, communication, player development, and performance analysis.",
      img: "/about-us/story-2.jpg",
    },
  ];

  return (
    <Section innerClassName="flex flex-col gap-10 md:gap-12">
      <SectionHeading title="Our Story" />

      <ul className="flex flex-col gap-10 lg:gap-16">
        {ourStories.map((story, index) => {
          return (
            <li
              key={index}
              className={`group flex flex-col gap-6 lg:items-center lg:gap-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex flex-col items-start gap-4 lg:flex-1">
                <span className="font-montserrat text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-montserrat text-xl font-bold md:text-2xl">
                  {story.title}
                </h3>

                <span className="h-1 w-10 rounded-full bg-linear-to-r from-brand to-accent" />

                <p className="text-muted">{story.description}</p>
              </div>

              <div className="relative h-60 w-full overflow-hidden rounded-2xl md:h-80 lg:flex-1">
                <Image
                  src={story.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-ink/40 to-transparent"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
