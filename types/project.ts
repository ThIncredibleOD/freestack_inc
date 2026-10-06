export type Project = {
  id: number;
  banner: {
    type: "image";
    src: {
      /** Omit until a screenshot exists — ProjectCard falls back to a placeholder. */
      desktop?: string;
      mobile?: string;
    };
    description: string;
    /** Panel colour behind the mockups — the project's own brand colour, not a site token. */
    panel?: string;
  };
  category: string;
  title: string;
  description: string;
  techStack: string[];
  cta: {
    label: string;
    href: string;
  };
};
