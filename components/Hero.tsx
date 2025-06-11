import { cn } from "@/lib/utils"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"

const Hero = () => {
    return (
        <div className="pb-30 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:top-20 h-screen" fill="purple" />

            </div>
            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    {/* Texte déplacé ici */}
                    <TextGenerateEffect className="text-center text-[40px] md:text-6xl lg:text-7xl" words={"Développeur Backend"} />
                    <TextGenerateEffect className="text-center text-[20px] md:text-4xl lg:text-5xl" words={"Glenn NTOUTOUME"} />

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
    )
}

export default Hero