export type Project = {
  id: number;
  banner: {
    type: "image";
    src: {
      desktop: string;
      mobile: string;
    };
    description: string;
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
