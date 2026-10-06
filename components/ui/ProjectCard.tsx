import { Project } from "@/types/project";
import { ArrowUpRight, MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Pill from "./Pill";

type ProjectCardProps = {
  project: Project;
};

/** Project row used on the portfolio page; mirrors the featured card on the home page. */
export default function ProjectCard({ project }: ProjectCardProps) {
  const { desktop, mobile } = project.banner.src;
  const isExternal = /^https?:\/\//.test(project.cta.href);

  return (
    <li className="group grid gap-8 overflow-hidden rounded-3xl border border-line bg-white p-5 transition duration-300 ease-out hover:border-accent/50 hover:shadow-xl hover:shadow-ink/5 motion-reduce:transition-none md:p-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      {/* Panel takes the project's own brand colour; falls back to the site's ink. */}
      <div
        className="flex items-end justify-center overflow-hidden rounded-2xl bg-ink p-8 md:p-10"
        style={
          project.banner.panel
            ? { backgroundColor: project.banner.panel }
            : undefined
        }
      >
        {desktop ? (
          <>
            {/* 920x657 and 330x658 — both kept at their real ratios. */}
            <Image
              src={desktop}
              width={920}
              height={657}
              alt={project.banner.description}
              className="w-full max-w-sm rounded-lg shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
            />
            {/* Same screenshot as above, so it adds nothing for a screen reader. */}
            {mobile && (
              <Image
                src={mobile}
                width={330}
                height={658}
                alt=""
                className="-ml-10 w-20 shrink-0 rounded-lg shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-2 motion-reduce:transition-none motion-reduce:group-hover:transform-none md:w-24"
              />
            )}
          </>
        ) : (
          /* No screenshot yet — keep the panel's shape instead of a broken image. */
          <div className="flex aspect-4/3 w-full max-w-sm items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <MonitorSmartphone
              className="size-10 text-white/30"
              strokeWidth={1.5}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col items-start gap-4">
        <Pill>{project.category}</Pill>

        <h3 className="font-montserrat text-xl font-bold md:text-2xl">
          {project.title}
        </h3>

        <p className="text-sm text-muted md:text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((stack, index) => (
            <Pill key={index} tone="neutral" size="sm">
              {stack}
            </Pill>
          ))}
        </div>

        <Link
          href={project.cta.href}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-2 inline-flex items-center gap-2 font-medium text-brand transition-colors hover:text-brand-strong"
        >
          {project.cta.label}
          <ArrowUpRight
            size={18}
            strokeWidth={3}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </li>
  );
}
