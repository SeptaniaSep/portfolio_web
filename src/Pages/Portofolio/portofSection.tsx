import PortfolioCard from "./portofCard";
import { projects } from "./Data/projects"; 

export default function PortfolioSection() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-2">
          Past Project Experience
        </h2>
        <p className="text-center text-yellow-800 mb-12">
          Explore the projects I've worked on so far
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
