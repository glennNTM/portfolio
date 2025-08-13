import Image from "next/image"
import { HoverEffect } from "./ui/card-hover-effect"
import { cn } from "@/lib/utils"

const Tools = () => {
  const techtools = [
    {
      description: <Image src="/python-svgrepo-com.svg" alt="Python" className="w-10 h-10" width={40} height={40} />,

    },
    {
      description: <Image src="/django-svgrepo-com.svg" alt="Django" className="w-10 h-10" width={40} height={40} />,

    },
    {
      description: <Image src="/javascript-svgrepo-com (1).svg" alt="JavaScript" className="w-10 h-10" width={40} height={40} />,

    },
    {
      description: <Image src="/ts.svg" alt="TypeScript" className="w-10 h-10" width={40} height={40} />,
    },
    {
      description: <Image src="/express-svgrepo-com.svg" alt="TypeScript" className="w-10 h-10" width={40} height={40} />,
    },
    {
      description: <Image src="/figma-svgrepo-com.svg" alt="TypeScript" className="w-10 h-10" width={40} height={40} />,
    },
    {
      description: <Image src="/react-svgrepo-com.svg" alt="React" className="w-10 h-10" width={40} height={40} />,
    },
    {
      description: <Image src="/next.svg" alt="Next.js" className="w-10 h-10" width={40} height={40} />,
    },
    {
      description: <Image src="/tail.svg" alt="Tailwind CSS" className="w-10 h-10" width={40} height={40} />,
    },

    {
      description: <Image src="/github.svg" alt="GitHub" className="w-10 h-10" width={40} height={40} />,
    },

  ]

  return (
    <>
      <section id="tools" className="py-20 relative overflow-hidden"> {/* Ajout de relative et overflow-hidden */}
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

        <div className="relative z-10 px-4 sm:px-6 lg:px-8"> {/* Conteneur pour le contenu au-dessus du fond */}
          <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl"> {/* text-black dark:text-white hérité */}
            Ma <span className="text-purple-500">Stack de developement</span>
          </h1>
          <p className="text-center text-gray-700 dark:text-gray-300 md:tracking-wider my-4 text-sm md:text-lg lg:text-xl">
            Voici un aperçu des principaux outils et technologies que j&apos;utilise pour donner vie à mes projets, allant du backend au frontend.
          </p>
          <div className="mt-12">
            <HoverEffect items={techtools} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools
