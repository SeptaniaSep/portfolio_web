import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSosmed() {
  return (
    <>
      {/* Kiri: Info Kontak & Sosmed */}
      <div className="md:w-1/2 ml-15">
        <h2 className="text-3xl font-semibold mb-8 text-white border-b border-yellow-400 inline-block pb-2">
          Get in Touch
        </h2>
        <ul className="space-y-4 mt-5">
          <li className="flex items-center gap-3">
            <div className="border rounded-full border-yellow-400 p-2">
              <FaWhatsapp className="text-yellow-400 text-3xl" />
            </div>
            <a
              href="https://wa.me/6285641557416"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300"
            >
              WhatsApp
            </a>
          </li>
          <li className="flex items-center gap-3">
            <div className="border rounded-full border-yellow-400 p-2">
              <FaInstagram className="text-yellow-400 text-3xl" />
            </div>
            <a
              href="https://www.instagram.com/niy_sep/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300"
            >
              Instagram
            </a>
          </li>
          <li className="flex items-center gap-3">
            <div className="border rounded-full border-yellow-400 p-2">
            <FaGithub className="text-yellow-400 text-3xl" />
            </div>
            <a
              href="https://github.com/SeptaniaSep"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-3">
            <div className="border rounded-full border-yellow-400 p-2">
            <FaLinkedin className="text-yellow-400 text-3xl" />
            </div>
            <a
              href="https://www.linkedin.com/in/SeptaniaNopa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
