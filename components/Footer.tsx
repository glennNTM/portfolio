import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 bg-gray-900 text-white" id="contact"> {/* Ajout d'une couleur de fond */}
      <div className="flex md:flex-row flex-col justify-between items-center px-5 sm:px-10"> {/* Centrage et padding */}
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Glenn NTOUTOUME
        </p>

        <div className="flex items-center md:gap-3 gap-6">
            <a href="https://github.com/glennNTM" target="_blank" rel="noopener noreferrer" className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-lg transition-transform duration-200 hover:scale-110"> {/* Animation hover */}
              <FaGithub color="white" />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-lg transition-transform duration-200 hover:scale-110"> {/* Animation hover */}
              {/* Remplacez par votre lien LinkedIn */}
              <FaLinkedin color="white" />
            </a>
            <a href="mailto:glennntoutoume8@gmail.com" className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-lg transition-transform duration-200 hover:scale-110"> {/* Animation hover */}
              <FaEnvelope color="white" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer