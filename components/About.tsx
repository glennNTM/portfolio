import React from 'react';
import { Spotlight } from './ui/Spotlight'; // Assurez-vous que le chemin est correct
import MagicButton from './ui/MagicButton'; // Importer MagicButton
import { FaGithub, FaPaperPlane } from 'react-icons/fa'; // Importer les icônes

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Spotlight pour l'effet visuel */}
      <div>
        <Spotlight className="-top-20 -left-10 md:-left-32 md:-top-10 h-screen" fill="cyan" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-16">
          À Propos de <span className="text-purple-500">Moi</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Placeholder pour la photo */}
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-neutral-700 dark:bg-neutral-800 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl">
              {/* Vous pouvez remplacer ceci par une balise <Image /> de Next.js une fois que vous avez votre photo */}
              Photo
            </div>
          </div>

          {/* Section de texte */}
          <div className="md:col-span-2 space-y-8 text-lg text-gray-300 dark:text-neutral-300">
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Qui suis-je ?</h2>
              <p>
                [Placeholder : Décrivez-vous brièvement. Par exemple : Je suis un développeur passionné avec une expertise en X et Y, toujours curieux d'apprendre et de relever de nouveaux défis techniques...]
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Ce que je fais actuellement</h2>
              <p>
                [Placeholder : Parlez de vos activités actuelles, que ce soit un poste, des projets personnels, des études, etc. Par exemple : Actuellement, je travaille sur des projets innovants chez Z Company, où je me concentre sur le développement de solutions backend robustes...]
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Mes inspirations et objectifs</h2>
              <p>
                [Placeholder : Partagez ce qui vous motive, vos aspirations professionnelles et personnelles. Par exemple : Mon objectif est de continuer à grandir en tant que développeur, en contribuant à des projets qui ont un impact positif. Je suis inspiré par les possibilités infinies qu'offre la technologie pour résoudre des problèmes complexes...]
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
                  otherClasses="w-full sm:w-auto !bg-purple-600 hover:!bg-purple-700" // Style différent pour le deuxième bouton
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;