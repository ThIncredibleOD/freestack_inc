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
      description:
        "Olive-green background showing a fashion website mockup on a desktop and a phone, with the headline 'BOLD BY DESIGN.'",
    },
    category: "Ecommerce, Branding",
    title: "Humanity Fashion Website",
    description:
      "Crafting a memorable digital identity and a blazing-fast, high-converting checkout experience for a global apparel brand.",
    techStack: ["Branding", "Figma", "Next.js"],
    cta: {
      label: "Read Case Study",
      href: "",
    },
  },
];
