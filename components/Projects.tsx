import { projects } from "@/data"; // Assurez-vous que le chemin est correct
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
         Mes{" "}
        <span className="text-purple-500">projets récents</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  className="flex items-center"
                >
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.link} // Lien vers GitHub ou le site déployé
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <MagicButton title="Voir le site" icon={<FaLocationArrow />} position="right" />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;