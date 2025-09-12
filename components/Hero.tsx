import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative py-20">
      {/* Spotlight décoratif */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
        fill="purple"
      />

      {/* Fond en grille */}
      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[92vw] lg:max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center place-items-center">
            {/* Colonne gauche: contenu texte */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              {/* Grand titre */}
              <TextGenerateEffect
                className="text-[36px] md:text-6xl lg:text-7xl font-extrabold"
                words="Développeur Backend"
              />

              {/* Phrase de présentation */}
              <p className="text-sm md:text-lg lg:text-xl text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed">
                Bonjour, je suis
                <span className="ml-2 italic font-bold text-purple-600 dark:text-purple-400">
                  Glenn NTOUTOUME
                </span>
                , développeur backend, et je conçois des solutions performantes
                et innovantes pour répondre aux besoins des entreprises et des
                particuliers.
              </p>

              {/* Boutons CTA */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                <a href="#projects">
                  <MagicButton
                    title="Voir mon travail"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
            </div>

            {/* Colonne droite: image pleine hauteur, centrée et responsive */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[560px]">
              <div className="absolute inset-0 rounded-3xl border border-gray-200/70 dark:border-white/15 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-white/5 dark:via-white/10 dark:to-white/5 shadow-sm overflow-hidden flex items-center justify-center">
                <Image
                  src={
                    "/WhatsApp%20Image%202025-09-12%20at%2007.35.17_00ebfa01.jpg"
                  }
                  alt="Photo de Glenn NTOUTOUME"
                  width={700}
                  height={1000}
                  className="max-h-[92%] w-auto object-contain drop-shadow-lg"
                  priority
                />
                <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
