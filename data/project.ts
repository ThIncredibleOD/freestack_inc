import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    banner: {
      type: "image",
      src: {
        desktop: {
          url: "/works/paddysco-desktop.png",
          width: 1280,
          height: 1127,
        },
        mobile: { url: "/works/paddysco-mobile.png", width: 585, height: 1184 },
      },
      description:
        "PaddySco Sports player registration form, step 1 of 4, shown on desktop and mobile.",
      panel: "#1a5ea7",
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
        desktop: { url: "/works/peakline-desktop.png", width: 1026, height: 903 },
        mobile: { url: "/works/peakline-mobile.png", width: 585, height: 1184 },
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
