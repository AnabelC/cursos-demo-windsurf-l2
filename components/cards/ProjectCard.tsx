import { cardStyles, aspectRatios, textStyles } from "@/lib/styles";
import type { Project } from "@/lib/data/projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={cardStyles.base}>
      <div className={`w-full ${aspectRatios.standard} bg-gray-300 dark:bg-gray-700 flex items-center justify-center`}>
        <span className={`${textStyles.muted} text-sm`}>Proyecto {project.id}</span>
      </div>
      <div className={cardStyles.padding.small}>
        <h3 className="font-bold mb-2 text-sm md:text-base">{project.title}</h3>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
      </div>
    </div>
  );
}
