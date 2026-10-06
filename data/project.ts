import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    banner: {
      type: "image",
      src: {
        // Add /works/paddysco-desktop.png and /works/paddysco-mobile.png here.
      },
      description:
        "PaddySco Sports player registration form shown on desktop and mobile.",
      panel: "#0b0e14",
    },
    category: "Sports Tech, Web App",
    title: "PaddySco Sports Scouting Network",
    description:
      "A multi-step player registration platform for a FIFA Match Agent affiliate. Players submit their football profile, position and injury history with a photo upload, under-18s route through guardian consent, and scouts review every submission from a token-gated admin dashboard.",
    techStack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    cta: {
      label: "View Live Site",
      href: "https://paddysco.vercel.app/",
    },
  },
  {
    id: 2,
    banner: {
      type: "image",
      src: {
        desktop: "/works/humanity-desktop.png",
        mobile: "/works/humanity-mobile.png",
      },
      description:
        "Olive-green background showing a fashion website mockup on a desktop and a phone, with the headline 'BOLD BY DESIGN.'",
      panel: "hsla(52, 40%, 36%, 1)",
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
  {
    id: 3,
    banner: {
      type: "image",
      src: {
        desktop: "/works/humanity-desktop.png",
        mobile: "/works/humanity-mobile.png",
      },
      description:
        "Olive-green background showing a fashion website mockup on a desktop and a phone, with the headline 'BOLD BY DESIGN.'",
      panel: "hsla(52, 40%, 36%, 1)",
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
  {
    id: 4,
    banner: {
      type: "image",
      src: {
        desktop: "/works/humanity-desktop.png",
        mobile: "/works/humanity-mobile.png",
      },
      description:
        "Olive-green background showing a fashion website mockup on a desktop and a phone, with the headline 'BOLD BY DESIGN.'",
      panel: "hsla(52, 40%, 36%, 1)",
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
