import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative py-30">
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
      <div className="relative z-10 flex justify-center">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center text-center space-y-3">
          {/* Nom et titre */}
          <TextGenerateEffect
            className="text-[32px] md:text-5xl lg:text-6xl font-bold"
            words="Développeur Backend"
          />
          <TextGenerateEffect
            className="text-[18px] md:text-3xl lg:text-4xl font-medium"
            words="Glenn NTOUTOUME"
          />

          {/* Description courte */}
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Je conçois des solutions performantes et innovantes pour répondre aux
            besoins des entreprises et particuliers.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            <a href="#projects">
              <MagicButton
                title="Voir mon travail"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
