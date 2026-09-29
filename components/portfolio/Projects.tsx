import { projects } from "@/data/project";
import ProjectCard from "../ui/ProjectCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  return (
    <Section id="projects" innerClassName="flex flex-col gap-10 md:gap-12">
      <SectionHeading title="Our Works" />

      <ul className="flex flex-col gap-6 md:gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
    </Section>
  );
}
