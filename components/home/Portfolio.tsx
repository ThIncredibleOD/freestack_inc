import { projects } from "@/data/project";
import ProjectCard from "../ui/ProjectCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Portfolio() {
  return (
    <Section
      className="bg-surface"
      innerClassName="flex flex-col gap-10 md:gap-12"
    >
      <SectionHeading
        title="Selected Work"
        action={{ label: "view all projects", href: "/portfolio" }}
      />

      <ul className="flex flex-col gap-6 md:gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
    </Section>
  );
}
