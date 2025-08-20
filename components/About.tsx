import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { cn } from "@/lib/utils";
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fond en grille */}
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

      {/* Effet Spotlight */}
      <div>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-16">
          À Propos de <span className="text-purple-500">Moi</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Photo */}
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] relative shadow-2xl">
              <Image
                src="/pportfolio.png"
                alt="Glenn Ntoutoume - Photo de profil"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="md:col-span-2 space-y-8 text-lg text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Qui suis-je ?</h2>
              <p>
                Je suis <strong>Glenn NTOUTOUME Ange-Emmanuel</strong>, développeur back-end et membre de la promotion 10 de <strong>l’École 241</strong>. 
                Passionné par l’informatique et les nouvelles technologies, je nourris également un intérêt marqué pour le sport, les jeux vidéo et les échecs.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Mes objectifs</h2>
              <p>
                Mon objectif principal est de maîtriser le développement back-end et de concevoir des solutions <strong>performantes</strong>, 
                <strong> robustes</strong> et <strong>innovantes</strong>. 
                En parallèle, je poursuis mon apprentissage du développement front-end afin de devenir développeur full-stack.
                J’aspire également à collaborer avec des personnes talentueuses, à voyager pour enrichir ma culture et mes connaissances, 
                et à saisir de nouvelles opportunités. 
                Gagner en expérience sur des projets concrets reste une priorité pour mon évolution professionnelle et personnelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
