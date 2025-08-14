import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import MyTools from "@/components/MyTools"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import { FaUser, FaCode, FaGithub, FaPhone, FaTools } from "react-icons/fa"
import { navItems } from "@/data" 
import { JSX } from "react"
import { Header } from "@/components/ui/Header"

export default function Home() {
  // Mapper les noms d'icônes aux composants d'icônes réels
  const iconMap: { [key: string]: JSX.Element } = {
    FaUser: <FaUser className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />,
    FaCode: <FaCode className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />,
    FaGithub: <FaGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />,
    FaPhone: <FaPhone className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />,
    FaTools: <FaTools className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />, // Ajoutez FaTools
  }

  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <Header />
        <Hero />
        <About />
        <Skills />
        <MyTools />
        <Projects />
        <Contact />

    </main>
  )
}
