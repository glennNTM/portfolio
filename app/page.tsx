import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import MyTools from "@/components/MyTools"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import { FloatingDock } from "@/components/ui/floating-dock"
import { FaUser, FaCode, FaGithub, FaPhone, FaTools } from "react-icons/fa" // Importez FaTools
import { navItems } from "@/data" // Importez navItems
import { JSX } from "react"

export default function Home() {
  // Mapper les noms d'icônes aux composants d'icônes réels
  const iconMap: { [key: string]: JSX.Element } = {
    FaUser: <FaUser className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />,
    FaCode: <FaCode className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />,
    FaGithub: <FaGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />,
    FaPhone: <FaPhone className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />,
    FaTools: <FaTools className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />, // Ajoutez FaTools
  };

  // Créer les items du dock en utilisant navItems et le mapping d'icônes
  const dockItems = navItems.map(item => ({
    title: item.name,
    href: item.link,
    icon: iconMap[item.icon] || <FaCode className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />, // Fallback si l'icône n'est pas trouvée
  }));

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
        <MyTools />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
