import { FaGithub } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { Link } from "react-router-dom";
import type { Project } from "./Data/projects";

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#111] rounded-xl p-4 shadow-md border border-neutral-800 hover:shadow-yellow-500/90 transition duration-300 group">
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover h-48 w-full transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
        />
      </div>
      <Link to={`/portofolio/${project.id}`}>
        <h3 className="text-lg font-semibold text-yellow-400 mb-1 hover:underline">
          {project.title}
        </h3>
      </Link>

      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
      <p className="text-xs text-yellow-800 font-medium mb-2">
        {project.techStack}
      </p>
      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
          >
            <AiOutlineDeploymentUnit size={25} />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-700"
          >
            <FaGithub size={25} />
          </a>
        )}
      </div>
    </div>
  );
}
