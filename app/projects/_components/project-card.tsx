import Link from "next/link";

import { Project } from "@/.contentlayer/generated";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      id={project._id}
      className={cn(
        "cursor-pointer h-fit",
        "flex flex-col gap-2 w-full items-start",
      )}
    >
      <div>
        
      </div>
    </Link>
  );
}
