import React from 'react';
import { Spotlight } from './ui/Spotlight'; // Assurez-vous que le chemin est correct
import { cn } from "@/lib/utils"; // Importer cn pour les classes conditionnelles
import Image from 'next/image'; // Importer le composant Image de Next.js
import MagicButton from './ui/MagicButton'; // Importer MagicButton
import { FaGithub, FaPaperPlane } from 'react-icons/fa'; // Importer les icônes

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Nouveau fond avec grille et dégradé radial */}
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      {/* Spotlight pour l'effet visuel */}
      <div>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-16"> {/* text-black dark:text-white hérité du body */}
          À Propos de <span className="text-purple-500">Moi</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Section de la photo */}
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] relative shadow-2xl">
              <Image
                src="/pp.avif" // Assurez-vous que l'image est dans /public/pp.avif
                alt="Glenn Ntoutoume - Photo de profil"
                layout="fill" // 'fill' pour remplir le conteneur parent
                objectFit="cover" // 'cover' pour s'assurer que l'image couvre l'espace sans être déformée
                className="rounded-lg" // Coins légèrement arrondis
              />
            </div>
          </div>

          {/* Section de texte */}
          <div className="md:col-span-2 space-y-8 text-lg text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Qui suis-je ?</h2>
              <p>
                Je suis Glenn NTOUTOUME Ange-Emmanuel, étudiant en Développement Web à l&apos;École 241. Passionné par l&apos;informatique et les nouvelles technologies, je m&apos;intéresse également de près au sport, aux jeux vidéos et aux échecs.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Mes objectifs</h2>
              <p>
                Mon ambition principale est de maîtriser le développement backend et de développer des solutions robustes et performantes. Parallèlement, je souhaite continuer mon processus d&apos;apprentissage en explorant d&apos;autres domaines passionnants tels que le design et le machine learning. Collaborer avec des personnes talentueuses, voyager pour enrichir ma culture et mes connaissances et saisir de nouvelles opportunités sont également essentiels à mon épanouissement professionnel et personnel, tout comme gagner en expérience sur des projets concrets.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a href="#projects"> {/* Lien vers la section projets */}
                <MagicButton
                  title="Voir mon travail"
                  icon={<FaGithub />}
                  position="left"
                  otherClasses="w-full sm:w-auto"
                />
              </a>
              <a href="#contact"> {/* Lien vers la section contact */}
                <MagicButton
                  title="Prendre contact"
                  icon={<FaPaperPlane />}
                  position="left"
                  otherClasses="w-full sm:w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About