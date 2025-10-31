"use client";

import { projects } from "@/data";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  // Fonction pour déterminer la couleur du statut
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Déployé":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "En cours de développement":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Terminé":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

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

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Mes <span className="text-purple-500">projets récents</span>
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 md:tracking-wider my-4 text-sm md:text-lg lg:text-xl">
          Voici une sélection de mes projets récents.
        </p>

        <div className="space-y-12 mt-16">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group"
              >
                {/* En-tête avec titre et statut */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-white mb-2 sm:mb-0">
                    {project.title}
                  </h2>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Sous-titre */}
                <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                  {project.des}
                </p>

                {/* Image principale */}
                <div className="mb-8 relative overflow-hidden rounded-2xl group-hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={project.image}
                    height={400}
                    width={1200}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={`Image du projet ${project.title}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Contenu principal centré */}
                <div className="flex flex-col items-center mb-6">
                  {/* Fonctionnalités */}
                  {project.keyFunction && project.keyFunction.length > 0 && (
                    <div className="w-full max-w-4xl mb-8">
                      <h3 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-6 text-center">
                        Fonctionnalités principales
                      </h3>
                      <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.keyFunction.map((func, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-purple-500 mr-3 mt-1 text-lg">
                              •
                            </span>
                            <span className="text-neutral-600 dark:text-neutral-300 text-base">
                              {func}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="w-full max-w-5xl">
                    <h3 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-6 text-center">
                      Technologies utilisées
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={tech + index}
                          className="flex items-center justify-center w-16 h-16 bg-neutral-100 dark:bg-neutral-300 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 group/tech"
                        >
                          <Image
                            src={tech}
                            alt={`Technologie ${index + 1}`}
                            width={32}
                            height={32}
                            className="w-8 h-8 group-hover/tech:scale-110 transition-transform duration-200"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sapce-between sm:flex-row gap-6">
                  {project.deployLink ? (
                    <>
                      <Link
                        href={project.deployLink}
                        target="_blank"
                        className="group/btn flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                      >
                        <FaExternalLinkAlt className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Voir le site
                      </Link>
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="group/btn flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                      >
                        <FaGithub className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                        Code source
                      </Link>
                    </>
                  ) : (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="group/btn flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                    >
                      <FaGithub className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                      Code source
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
