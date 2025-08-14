import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiVite,
  SiNextdotjs,
  SiTypescript,
  SiShadcnui,
} from "react-icons/si";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

interface SkillItemProps {
  name: string;
  Icon: IconType;
  isHighlighted?: boolean;
}

function SkillItem({ name, Icon, isHighlighted }: SkillItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className={clsx(
        "flex items-center gap-4 border px-4 py-4 rounded-lg bg-black text-white transition-all duration-500 cursor-pointer",
        {
          "border-yellow-500 hover:scale-105 hover:border-yellow-300 hover:shadow-yellow-500/50":
            !isHighlighted,
          "border-yellow-300 scale-110 shadow-yellow-400/50 shadow-lg":
            isHighlighted,
        }
      )}
    >
      <Icon className="text-3xl text-yellow-400" />
      <span className="text-sm">{name}</span>
    </motion.div>
  );
}

const allSkills = [
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: FaJs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React JS", Icon: FaReact },
  { name: "Next JS", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Bootstrap", Icon: FaBootstrap },
  { name: "Shadcn", Icon: SiShadcnui },
  { name: "Vite", Icon: SiVite },
  { name: "Express JS", Icon: SiExpress },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Git", Icon: FaGitAlt },
  { name: "GitHub", Icon: FaGithub },
  { name: "VS Code", Icon: VscVscode },
];

export default function Skill() {
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allSkills.length);
      setHighlightIndex(randomIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <motion.div
        className="w-full max-w-4xl space-y-16 py-16 text-white rounded-xl shadow-lg backdrop-blur"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.div
            className="flex items-center gap-4 mb-6 justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold whitespace-nowrap">
              Tech Stack & Tools
            </h2>
            <div className="h-[2px] w-[200px] bg-yellow-500" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allSkills.map((item, index) => (
              <SkillItem
                key={item.name}
                name={item.name}
                Icon={item.Icon}
                isHighlighted={highlightIndex === index}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
