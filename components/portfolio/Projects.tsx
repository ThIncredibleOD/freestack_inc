import { projects } from "@/data/project";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold">
        Our Works
      </h2>

      <ul className="flex flex-col gap-6">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
    </section>
  );
}
