import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    banner: {
      type: "image",
      src: {
        desktop: "/works/peakline-desktop.png",
        mobile: "/works/peakline-mobile.png",
      },
      description: "Peakline Sports platform on mobile",
    },
    category: "Football",
    title: "Peakline Sports",
    description:
      "A platform for teams to register for a football foundation cup",
    techStack: ["Foundation", "Football", "Sports"],
    cta: {
      label: "Read Case Study",
      href: "/#",
    },
  },
];
