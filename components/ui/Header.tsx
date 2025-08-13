"use client"

import Link from "next/link"
import { useState } from "react"
import { FaUser, FaCode, FaGithub, FaPhone, FaBars, FaTimes, FaDownload } from "react-icons/fa"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const cvPath = "/cv/CV-Portfolio.pdf"

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navLinks = [
    { name: "À propos", href: "#about", icon: <FaUser /> },
    { name: "Compétences", href: "#skills", icon: <FaCode /> },
    { name: "Projets", href: "#projects", icon: <FaGithub /> },
    { name: "Contact", href: "#contact", icon: <FaPhone /> },
  ]

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-transparent backdrop-blur-md">
      {/* Logo: <GlennNTM /> */}
      <Link
        href="/"
        aria-label="Accueil - Glenn NTM Portfolio"
        className="group inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md"
      >
        <span className="font-mono text-xl sm:text-2xl font-semibold 
                         bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white 
                         bg-clip-text text-transparent tracking-tight">
          {/* Pour afficher les chevrons en JSX on échappe avec &lt; et &gt; */}
          &lt;GlennNTM /&gt;
        </span>
      </Link>

      {/* Navigation centrée (desktop) */}
      <nav className="hidden md:flex space-x-6 items-center absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-violet-500 transition-colors"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </nav>

      {/* Bouton CV à droite (desktop) */}
      <div className="hidden md:block">
        <a
          href={cvPath}
          download="CV de Glenn - Développeur Backend.pdf"
          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <FaDownload size={16} className="mr-2" />
          Télécharger mon CV
        </a>
      </div>

      {/* Bouton menu mobile */}
      <button
        className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-md"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg shadow-lg rounded-lg p-4 space-y-4 z-50 w-56 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-violet-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <a
            href={cvPath}
            download="CV de Glenn - Développeur Backend.pdf"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <FaDownload size={16} />
            Télécharger mon CV
          </a>
        </div>
      )}
    </header>
  )
}
