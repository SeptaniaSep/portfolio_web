import { FiGithub } from "react-icons/fi";

type NavbarProps = {
  active: string;
};

const Navbar = ({ active }: { active: string }) => {
  return (
    <nav className="flex justify-between items-center bg-[#2c2c2c] p-5 text-white fixed top-0 left-0 right-0 z-50">
      <div className="font-mono text-xl text-yellow-400">Septania Nopa();</div>
      <ul className="flex gap-8">
        {["Home", "About", "Portfolio", "Contact"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer ${
              active === item ? "border-b-2 border-yellow-400" : ""
            }`}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/SeptaniaSep"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub size={25} />
      </a>
    </nav>
  );
};

export default Navbar;
