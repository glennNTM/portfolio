"use client";

import { projects } from "@/data";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Mes <span className="text-purple-500 font-bold">realisations</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          Voici quelques-uns de mes projets récents.
        </p>

        {/* Cartes larges en une colonne */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, projectIdx) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-full lg:flex">
                  {/* Image à gauche, large et bien visible */}
                  <div className="relative w-full lg:w-7/12 h-64 sm:h-80 lg:h-[420px] overflow-hidden">
                    <Image
                      src={
                        Array.isArray(project.imgList)
                          ? project.imgList[0]
                          : project.imgList
                      }
                      height={840}
                      width={1260}
                      className="w-full h-full object-cover lg:object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      alt={`Image du projet ${project.title}`}
                      priority={projectIdx < 2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/0 lg:to-transparent" />
                  </div>

                  {/* Contenu à droite */}
                  <div className="w-full lg:w-5/12 p-6 sm:p-8 flex flex-col">
                    {/* Titre */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    {/* Description détaillée */}
                    <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base mb-5 leading-relaxed">
                      {project.des}
                    </p>

                    {/* Fonctionnalités clés - liste complète */}
                    {project.keyFunction && project.keyFunction.length > 0 && (
                      <div className="mb-5">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                          Fonctionnalités clés
                        </h4>
                        <ul className="space-y-1.5 max-h-56 overflow-auto pr-1">
                          {project.keyFunction.map((func, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-700 dark:text-gray-200 text-sm"
                            >
                              <span className="mt-2 w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0" />
                              <span>{func}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.iconLists.map((icon, index) => (
                          <div
                            key={icon + index}
                            className="w-12 h-12 sm:w-14 sm:h-14 bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-200"
                          >
                            <Image
                              src={icon}
                              alt={`icon-${index}`}
                              width={48}
                              height={48}
                              className="p-2"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="mt-auto flex gap-3">
                      <Link
                        href={
                          project.linkType === "github"
                            ? project.link
                            : `https://github.com/glennNTM/${project.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`
                        }
                        target="_blank"
                        className="flex-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/20 rounded-lg px-4 py-2 text-gray-900 dark:text-white text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
                          <FaGithub size={16} />
                          <span>Code</span>
                        </div>
                      </Link>

                      <Link
                        href={
                          project.linkType === "deploy"
                            ? project.link
                            : `https://${project.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}.vercel.app`
                        }
                        target="_blank"
                        className="flex-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-purple-500/90 hover:bg-purple-500 border border-purple-400/50 rounded-lg px-4 py-2 text-white text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
                          <FaExternalLinkAlt size={14} />
                          <span>Site</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
