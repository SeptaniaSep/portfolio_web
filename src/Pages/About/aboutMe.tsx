import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      id="about"
      className="text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="items-center w-full max-w-5xl px-8 py-10 bg-[#252525aa] text-white rounded-xl shadow-lg backdrop-blur">
        {/* Judul */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-bold whitespace-nowrap">About Me</h2>
          <motion.div
            className="h-[2px] w-[250px] bg-yellow-500"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Isi konten */}
        <div className="flex p-8 gap-6 justify-between">
          {/* Foto */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-full border-4 border-yellow-400 p-2 shadow-lg bounce">
              <img
                src="/photo.png"
                alt="Avatar"
                className="w-50 h-50 rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Deskripsi */}
          <div className="grid gap-4">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl"
            >
              <p className="text-gray-300 leading-relaxed p-6 pl-2 pt-0 text-justify max-w-2xl mx-auto">
                Hi everyone! My name is Septania Nopa Hafidzsyah. I am a
                Fullstack Developer with experience in building web applications
                using React.js, Next.Js, Express.js, JavaScript, and PostgreSQL.
                Although I have backend skills, my focus and expertise lie more
                on the frontend, particularly in creating responsive and
                user-friendly interfaces. I am accustomed to working in a team,
                adaptable, and continuously keep up with the latest technologies
                in web development.
              </p>
            </motion.div>

            {/* Tombol */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl"
            >
              <a
                className="text-white bg-yellow-600 hover:bg-yellow-500 hover:text-black font-semibold shadow-md hover:shadow-yellow-400/70 transform hover:scale-105 transition duration-300 ease-in-out py-1.5 px-6 rounded-md mr-4"
                href="https://drive.google.com/file/d/1YpzUAKNYpHxAkOjyOiq7RDWYHKYKXJno/view?usp=drive_link"
              >
                CV Septania
              </a>

              <Link
                to="/education-experience"
                className="text-white border border-[#4e4e4eaa] bg-[#252525aa] hover:bg-[#4e4e4eaa] hover:text-black font-semibold shadow-md hover:shadow-yellow-400/70 transform hover:scale-105 transition duration-300 ease-in-out py-1.5 px-6 rounded-md"
              >
                Education & Experience
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
