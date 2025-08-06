import { useParams } from "react-router-dom";
import PortfolioDetail from "./portofDetail";
import { projects } from "./Data/projects";

export default function PortfolioDetailWrapper() {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) return <div className="text-white p-4">Project not found</div>;

  return <PortfolioDetail project={project} />;
}
