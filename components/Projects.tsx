import { projects } from "@/data"; // Assurez-vous que le chemin est correct
import React from "react";
import { cn } from "@/lib/utils"; // Importer cn
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden"> {/* Ajout de relative et overflow-hidden */}
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
          Mes{" "}
          <span className="text-purple-500">projets récents</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-6 gap-y-2 mt-10">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var mb-4"> {/* Espacement vertical réduit mb-8 -> mb-4 */}
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-zinc-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] min-h-[550px] rounded-xl p-6 border flex flex-col justify-between"> {/* Hauteur augmentée et flex pour alignement */}
                {/* Titre du projet */}
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {project.title}
                </CardItem>
                {/* Description du projet */}
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex-grow">
                  {project.des}
                </CardItem>
                {/* Fonctionnalités clés */}
                {project.keyFunction && project.keyFunction.length > 0 && (
                  <CardItem
                    as="div"
                    translateZ="60"
                    className="text-sm max-w-sm mt-4 flex-grow" 
                  >
                    <h4 className="font-semibold text-neutral-600 dark:text-white mb-1">Fonctionnalités clés :</h4>
                    <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-400 space-y-1 text-xs">
                      {project.keyFunction.map((func, idx) => (
                        <li key={idx}>{func}</li>
                      ))}
                    </ul>
                  </CardItem>
                )}
                {/* Image du projet */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.img}
                    height={800} // Maintenir pour le ratio, mais la taille est contrôlée par CSS
                    width={800}  // Maintenir pour le ratio
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={`Image du projet ${project.title}`}
                  />
                </CardItem>
                {/* Icônes des technologies et bouton d'action */}
                <div className="flex justify-between items-center mt-auto pt-4"> {/* mt-auto pour pousser vers le bas, pt-4 pour espacement */}
                  {/* Icônes des technologies */}
                  <CardItem translateZ={20} className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={icon + index} // Clé plus unique
                        className="border border-white/[.2] rounded-full bg-gray-300 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      >
                        <Image
                          src={icon}
                          alt={`icon-${index}`}
                          width={48} // Ajustez la taille au besoin
                          height={48} // Ajustez la taille au besoin
                          className="p-2" />                    </div>
                    ))}
                  </CardItem>
                  {/* Bouton d'action */}
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link || "#"} // Fallback au cas où le lien est manquant
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <MagicButton
                      title={project.linkType === "github" ? "Voir le code" : "Voir le site"}
                      icon={project.linkType === "github" ? <FaGithub /> : <FaLocationArrow />}
                      position="right"
                    />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;