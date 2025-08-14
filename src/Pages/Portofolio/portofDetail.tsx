import { useState } from "react";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import type { Project } from "./Data/projects";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  const handleBack = () => {
    navigate(-1);
  };

  const imageSizeClasses: Record<string, string> = {
    landscape: "w-full max-w-[600px] h-auto max-h-[400px]",
    portrait: "w-auto max-w-[250px] h-auto max-h-[500px]",
    default: "w-full h-auto max-w-full",
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 backdrop-blur-md shadow-xl border border-neutral-800 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Tombol Kembali */}
      <motion.button
        onClick={handleBack}
        className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft size={20} />
        <span>Kembali</span>
      </motion.button>

      <div className="py-6 px-20">
        <div>
          {/* Title */}
          <motion.h2
            className="text-4xl font-extrabold text-yellow-400 tracking-tight mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h2>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
            {/* Left */}
            <div className="flex-[2] space-y-6 border-r border-neutral-700 pr-6">
              {/* Tech Stack */}
              <div>
                <h1 className="text-amber-50 font-semibold mb-2">
                  Tech Stack:
                </h1>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                >
                  {project.techStack.split(",").map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-7 py-1 bg-yellow-800/20 border border-yellow-500/20 text-yellow-300 text-xs rounded-full"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      {tech.trim()}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3 pt-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <AiOutlineDeploymentUnit size={22} />
                    <span className="text-sm font-medium">Live Site</span>
                  </motion.a>
                )}
                {project.repoUrl && (
                  <motion.a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaGithub size={22} />
                    <span className="text-sm font-medium">Source Code</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Right */}
            <div className="flex-[7] space-y-6 pl-6">
              {/* Image Gallery */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 }
                  }
                }}
              >
                {project.imageUrls.map((url, idx) => {
                  const orientation = orientations[idx];
                  const sizeClass =
                    imageSizeClasses[orientation] || imageSizeClasses.default;

                  return (
                    <motion.div
                      key={idx}
                      className="overflow-hidden group flex justify-center items-center"
                      variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={url}
                        alt={`Preview ${idx + 1}`}
                        onLoad={(e) => handleImageLoad(idx, e)}
                        className={`object-cover transition-all duration-200 group-hover:scale-105 group-hover:brightness-110 ${sizeClass}`}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-base leading-relaxed text-justify"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
