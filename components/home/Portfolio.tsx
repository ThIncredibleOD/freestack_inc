import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/project";

export default function Portfolio() {
  return (
    <section className="flex flex-col gap-6 bg-[hsla(210,40%,98%,1)] p-4 md:p-8 lg:p-16 mb-10">
      <div className="flex justify-between items-center">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold">
          Selected Work
        </h2>
        <Link
          href="/#"
          className="flex items-center gap-2 md:text-lg text-[hsla(212,80%,42%,1)] hover:underline"
        >
          view all projects
          <ArrowRight size={18} strokeWidth={3} />
        </Link>
      </div>

      <ul className="flex flex-col gap-6">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
    </section>
  );
}
