import { useState } from "react";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import type { Project } from "./Data/projects";
import { Navigate, useNavigate } from "react-router-dom";

export default function PortfolioDetail({ project }: { project: Project }) {
  const [orientations, setOrientations] = useState<
    Record<number, "landscape" | "portrait">
  >({});

  const handleImageLoad = (
    idx: number,
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const img = e.currentTarget;
    const orientation =
      img.naturalWidth > img.naturalHeight ? "landscape" : "portrait";
    setOrientations((prev) => ({ ...prev, [idx]: orientation }));
  };

  const navigate = useNavigate();

  // fungsi untuk kembali
  const handleBack = () => {
    navigate(-1); // kembali ke halaman sebelumnya
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 backdrop-blur-md  shadow-xl border border-neutral-800 p-6">
      {/* Tombol Kembali */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6"
      >
        <FaArrowLeft size={20} />
        <span>Kembali</span>
      </button>
      <div className="py-6 px-20">
        <div>
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-yellow-400 tracking-tight mb-10">
            {project.title}
          </h2>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
            {/* Left (Tech stack + links) */}
            <div className="flex-[2] space-y-6 border-r border-neutral-700 pr-6">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.split(",").map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-yellow-800/20 border border-yellow-500/20 text-yellow-300 text-xs rounded-full"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <AiOutlineDeploymentUnit size={22} />
                    <span className="text-sm font-medium">Live Site</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub size={22} />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right (Images + Description) */}
            <div className="flex-[7] space-y-6 pl-6">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
                {project.imageUrls.map((url, idx) => {
                  const orientation = orientations[idx];
                  const maxWidthClass =
                    orientation === "landscape"
                      ? "max-w-xl"
                      : orientation === "portrait"
                      ? "max-w-xs"
                      : "max-w-full";

                  return (
                    <div key={idx} className="rounded-xl overflow-hidden group">
                      <img
                        src={url}
                        alt={`Preview ${idx + 1}`}
                        onLoad={(e) => handleImageLoad(idx, e)}
                        className={`w-full h-auto object-cover transition-all duration-200 group-hover:scale-105 group-hover:brightness-110 rounded-2xl ${maxWidthClass}`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
