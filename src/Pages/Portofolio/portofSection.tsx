import { motion } from "framer-motion";
import PortfolioCard from "./portofCard";
import { projects } from "./Data/projects";

export default function PortfolioSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay antar card
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="px-6 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Past Project Experience
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          className="text-center text-yellow-800 mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Explore the projects I've worked on so far
        </motion.p>

        {/* Grid Card */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
