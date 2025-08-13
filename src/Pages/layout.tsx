import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/Components/ui/navbar";
import { Home } from "./Homee/home";
import About from "./About/about";
import Portofolio from "./Portofolio/portofolio";
import Contact from "./Contact/contact";

export function Layout() {
  const [activeSection, setActiveSection] = useState("Home");

  const options = { threshold: 0.6 };
  const [homeRef, homeInView] = useInView(options);
  const [aboutRef, aboutInView] = useInView(options);
  const [portfolioRef, portfolioInView] = useInView(options);
  const [contactRef, contactInView] = useInView(options);

  useEffect(() => {
    if (homeInView) setActiveSection("Home");
    else if (aboutInView) setActiveSection("About");
    else if (portfolioInView) setActiveSection("Portfolio");
    else if (contactInView) setActiveSection("Contact");
  }, [homeInView, aboutInView, portfolioInView, contactInView]);

  return (
    <div className="bg-black text-white font-sans overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <Navbar active={activeSection} />

      <section
        ref={homeRef}
        id="home"
        className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900"
      >
        <Home />
      </section>

      <section
        ref={aboutRef}
        id="about"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <About />
      </section>

      <section
        ref={portfolioRef}
        id="portfolio"
        className="min-h-screen bg-gradient-to-b from-gray-950 to-black"
      >
        <Portofolio />
      </section>

      <section
        ref={contactRef}
        id="contact"
        className="min-h-screen bg-gradient-to-b from-black to-gray-950"
      >
        <Contact />
      </section>
    </div>
  );
}
