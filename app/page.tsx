import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MyTools from "@/components/MyTools";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Header } from "@/components/ui/Header";
import About from "@/components/About";
export default function Home() {
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
  );
}
