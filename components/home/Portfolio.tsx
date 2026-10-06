import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Pill from "../ui/Pill";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "@/data/project";
import ProjectCard from "../ui/ProjectCard";

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

      <ul>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
    </Section>
  );
}
