import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/.contentlayer/generated";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={"flex flex-col gap-2"}>
      <div className="relative w-full border border-[#171717] aspect-[1.5] overflow-hidden rounded-lg">
        <Image
          src={project.screenshot}
          alt={project.title}
          fill
          className="object-cover object-center transition-all hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold leading-none mt-1">
        {project.title}
      </h3>
      <p className="text-sm text-[#bbbbbb]">{project.description}</p>
      <div className="flex items-center justify-between mt-auto">
        <div></div>
        <div className="flex items-center gap-3">
          <a href={project.url} target="_blank" className="hover:text-blue-500">
            <ExternalLink className="h-4 w-4" />
          </a>
          <a href={project.source} target="_blank" className="hover:text-blue-500">
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
