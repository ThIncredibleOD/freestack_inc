import Image from "next/image";

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
    <section className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
      <h2 className="font-montserrat text-2xl font-bold">Our Story</h2>

      <ul className="flex flex-col gap-6">
        {ourStories.map((story, index) => {
          return (
            <li
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}  gap-4`}
            >
              <div className="flex flex-col gap-4 lg:flex-1">
                <h3 className="font-montserrat text-xl font-bold">
                  {story.title}
                </h3>
                <p className="text-[hsla(215,16%,47%,1)]">
                  {story.description}
                </p>
              </div>

              <div className="relative w-full h-60 rounded-xl overflow-hidden lg:flex-1">
                <Image src={story.img} alt="" fill className="object-cover" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
