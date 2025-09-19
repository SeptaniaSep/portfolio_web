import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PiOfficeChairBold, PiStudentBold } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import { motion } from "framer-motion";

export default function EducationExperience() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-8 bg-gradient-to-b from-black to-gray-900">
      {/* Tombol Kembali */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6"
      >
        <FaArrowLeft size={20} />
        <span>Kembali</span>
      </button>

      <div className="grid gap-4 px-20 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Education & Experience
        </h1>

        {/* Work Experience */}
        <div className="flex gap-4 w-full">
          {/* Icon dengan animasi bounce */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <PiOfficeChairBold size={100} />
          </motion.div>

          {/* Section dengan animasi fade-in */}
          <motion.section
            className="mb-10 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-b border-yellow-500 pb-2 mb-4 w-full">
              <h2 className="text-2xl font-semibold">Work Experience</h2>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-yellow-400">
                    Institut Agama Islam Riyadhotul Mutjahidin Ngabar
                  </h3>
                  <p className="italic">Faculty Administrative Staff</p>
                </div>
                <p className="text-yellow-400 text-sm whitespace-nowrap">
                  Ponorogo, Feb 2021 – Jan 2022
                </p>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                <li>
                  Managed and maintained comprehensive student administrative
                  records, including enrollment and graduation data.
                </li>
                <li>
                  Organized and optimized class schedules in coordination with
                  lecturers.
                </li>
                <li>
                  Facilitated smooth faculty administrative operations through
                  effective communication.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-yellow-400">
                    Statistics Indonesia (BPS)
                  </h3>
                  <p className="italic">
                    Fieldwork Partner (Fixed-term contracts)
                  </p>
                </div>
                <p className="text-yellow-400 text-sm whitespace-nowrap">
                  Ponorogo, May 2020 – Apr 2023
                </p>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                <li>
                  Executed comprehensive field data collection across
                  demographic, economic, and agricultural sectors.
                </li>
                <li>
                  Conducted structured interviews and streamlined digital data
                  entry.
                </li>
                <li>
                  Compiled and delivered detailed survey reports to government
                  departments.
                </li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Formal Education */}
        <div className="flex gap-4 w-full">
          {/* Icon bounce */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <PiStudentBold size={100} />
          </motion.div>

          {/* Section fade-in */}
          <motion.section
            className="mb-10 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-b border-yellow-500 pb-2 mb-4 w-full">
              <h2 className="text-2xl font-semibold">Formal Education</h2>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-yellow-400">
                    Muhammadiyah University of Ponorogo
                  </h3>
                  <p className="italic">
                    Bachelor’s Degree in Informatics Engineering
                  </p>
                  <p className="text-sm">GPA: 3.47/4.00</p>
                </div>
                <p className="text-yellow-400 text-sm whitespace-nowrap">
                  Ponorogo, Sep 2019 – Oct 2024
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-yellow-400">
                    MA PP Wali Songo Ngabar
                  </h3>
                  <p className="italic">Social Science</p>
                </div>
                <p className="text-yellow-400 text-sm whitespace-nowrap">
                  Ponorogo, Jul 2015 – Apr 2019
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Non-formal Education */}
        {/* Non-formal Education */}
<div className="flex gap-4 w-full">
  {/* Icon bounce */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 1.2 }}
  >
    <TbCertificate size={100} />
  </motion.div>

  {/* Section fade-in */}
  <motion.section
    className="mb-10 w-full"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="border-b border-yellow-500 pb-2 mb-4 w-full">
      <h2 className="text-2xl font-semibold">Non-formal Education</h2>
    </div>

    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-yellow-400">
            Bootcamp DumbWays Indonesia
          </h3>
          <p className="italic">Full Stack Developer</p>
        </div>
        <p className="text-yellow-400 text-sm whitespace-nowrap">
          Depok, Jan 2025 – Jul 2025
        </p>
      </div>
      <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
        <li>
          Learned full-stack web development using React.js, Express.js,
          Node.js, and PostgreSQL.
        </li>
        <li>
          Built mini projects and a final project with responsive and fully
          integrated web applications.
        </li>
        <li>
          Hands-on experience with Git and GitHub for version control and
          collaboration.
        </li>
      </ul>
    </div>
  </motion.section>
</div>
      </div>
    </div>
  );
}
