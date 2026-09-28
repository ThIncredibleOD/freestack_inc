import Image from "next/image";

export default function OurStory() {
  const ourStories = [
    {
      title: "Building Modern Organizations",
      description:
        "FreeStack Inc. began as a technology and digital solutions company focused on helping organizations build, manage, and improve their digital presence and operations. We realized that modern brands need more than just standard design—they need a unified approach that combines technology, media, creative solutions, and data to solve practical challenges.",
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

      <ul className="flex flex-col gap-6 lg:gap-10">
        {ourStories.map((story, index) => {
          return (
            <li
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}  gap-4 lg:gap-8`}
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
