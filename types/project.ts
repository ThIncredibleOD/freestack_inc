/** A banner screenshot plus its real pixel size, so the card never distorts it. */
export type BannerImage = {
  url: string;
  width: number;
  height: number;
};

export type Project = {
  id: number;
  banner: {
    type: "image";
    src: {
      /** Omit until a screenshot exists — ProjectCard falls back to a placeholder. */
      desktop?: BannerImage;
      mobile?: BannerImage;
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
