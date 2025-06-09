import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaUser, FaCode, FaGithub, FaPhone } from "react-icons/fa"; // Icônes mises à jour

export default function Home() {
  const dockItems = [
    {
      title: "Profil",
      href: "#about", // Lien vers la section "À propos"
      icon: <FaUser className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
    },
    {
      title: "Compétences",
      href: "#skills", // Lien vers la section "Compétences" (Assurez-vous que l'id existe)
      icon: <FaCode className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
    },
    {
      title: "Projets",
      href: "#projects", // Lien vers la section "Projets"
      icon: <FaGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
    },
    {
      title: "Contact",
      href: "#contact", // Lien vers la section "Contact"
      icon: <FaPhone className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
    }
  ]
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingDock
          items={dockItems}
          desktopClassName="fixed top-1/2 left-6 -translate-y-1/2 z-[100]" // Positionné à gauche, centré verticalement
          mobileClassName="fixed bottom-8 right-8 z-[100]" // Le mobile reste inchangé
        />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
