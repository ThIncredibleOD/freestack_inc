import { Project } from "@/types/project";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li
      key={project.id}
      className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
    >
      <div className="bg-[hsla(52,40%,36%,1)] flex items-center justify-center w-fit p-8 rounded-xl">
        <div className="">
          <Image
            src={project.banner.src.desktop}
            height={250}
            width={250}
            alt={project.banner.description}
          />
        </div>
        <div className="-ml-10 mt-10">
          <Image
            src={project.banner.src.mobile}
            height={80}
            width={80}
            alt={project.banner.description}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-4">
        <div className="text-sm md:text-md bg-[hsla(207,90%,61%,0.1)] py-1 px-2 w-fit md:py-2 md:px-4 rounded-full">
          {project.category}
        </div>
        <h3 className="font-montserrat text-xl md:text-2xl font-bold">
          {project.title}
        </h3>
        <p className="text-sm md:text-md text-[hsla(215,16%,47%,1)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {project.techStack.map((stack, index) => (
            <div
              key={index}
              className="bg-[hsla(212,52%,14%,0.1)] w-fit py-1 px-2 md:py-2 md:px-4 rounded-full"
            >
              {stack}
            </div>
          ))}
        </div>

        <Link
          href={project.cta.href}
          className="flex gap-2 items-center text-[hsla(212,80%,42%,1)] hover:underline mt-5 md:mt-0"
        >
          {project.cta.label}
          <ArrowUpRight size={18} strokeWidth={3} />
        </Link>
      </div>
    </li>
  );
}
