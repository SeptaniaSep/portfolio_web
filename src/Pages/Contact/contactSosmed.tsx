import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSosmed() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="md:w-1/2 ml-15"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // animasi aktif saat masuk viewport
      viewport={{ once: true, amount: 0.2 }} // hanya sekali, aktif kalau 20% elemen masuk
    >
      <motion.h2
        className="text-3xl font-semibold mb-8 text-white border-b border-yellow-400 inline-block pb-2"
        variants={itemVariants}
      >
        Get in Touch
      </motion.h2>

      <motion.ul className="space-y-4 mt-5">
        {[
          {
            icon: <FaWhatsapp className="text-yellow-400 text-3xl" />,
            link: "https://wa.me/6285641557416",
            label: "WhatsApp",
          },
          {
            icon: <FaInstagram className="text-yellow-400 text-3xl" />,
            link: "https://www.instagram.com/niy_sep/",
            label: "Instagram",
          },
          {
            icon: <FaGithub className="text-yellow-400 text-3xl" />,
            link: "https://github.com/SeptaniaSep",
            label: "GitHub",
          },
          {
            icon: <FaLinkedin className="text-yellow-400 text-3xl" />,
            link: "https://www.linkedin.com/in/SeptaniaNopa",
            label: "LinkedIn",
          },
        ].map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-3"
            variants={itemVariants}
          >
            <motion.div
              className="border rounded-full border-yellow-400 p-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 transition-colors"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
