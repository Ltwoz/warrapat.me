import { allProjects } from "@/.contentlayer/generated";
import ProjectCard from "./_components/project-card";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h1 className="font-bold text-2xl">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-4">
        {allProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
