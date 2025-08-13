import { cn } from "@/lib/utils"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"

const Hero = () => {
  return (
    <div className="pb-30 pt-36">
      {/* Spotlight décoratif */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:top-20 h-screen" fill="purple" />
      </div>

      {/* Fond en grille */}
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
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

      {/* Contenu principal */}
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Nom et titre */}
          <TextGenerateEffect className="text-[40px] md:text-6xl lg:text-7xl font-bold" words={"Développeur Backend"} />
          <TextGenerateEffect className="text-[20px] md:text-4xl lg:text-5xl" words={"Glenn NTOUTOUME"} />

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Passionné par la création de solutions performantes et scalables, 
            j’aide les entreprises et les particuliers à concrétiser leurs idées grâce 
            à des applications robustes et bien conçues. Ouvert aux collaborations et 
            nouveaux projets.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="#projects">
              <MagicButton
                title="Voir mes projets"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#contact">
              <MagicButton
                title="Travaillons ensemble"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
