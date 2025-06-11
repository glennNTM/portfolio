"use client";
import React from 'react';
import { skills } from '@/data'; // Importer les compétences
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconApi, // Icône pour les APIs
  IconFileCode, // Icône pour la documentation
  IconDatabase, // Icône pour les bases de données
  IconShieldLock, // Icône pour la sécurité
  IconBox, // Icône pour Docker/Containerisation
  IconTerminal2, // Fallback ou icône générique
} from "@tabler/icons-react";

const Skills = () => {
  // Mapper les icônes aux compétences si nécessaire, ou utiliser une logique pour les assigner
  // Pour cet exemple, nous allons assigner des icônes basées sur l'index ou un ID.
  const getIconForSkill = (id: number) => {
    switch (id) {
      case 1:
        return <IconApi className="h-8 w-8 text-purple-500" />;
      case 2:
        return <IconFileCode className="h-8 w-8 text-purple-500" />;
      case 3:
        return <IconDatabase className="h-8 w-8 text-purple-500" />;
      case 4:
        return <IconShieldLock className="h-8 w-8 text-purple-500" />;
      case 5:
        return <IconBox className="h-8 w-8 text-purple-500" />;
      default:
        return <IconTerminal2 className="h-8 w-8 text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-white dark:bg-black">
      {/* Fond avec grille et dégradé radial (optionnel, similaire à Projects.tsx) */}
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
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

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12">
          Mes <span className="text-purple-500">Compétences</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 py-10 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              icon={getIconForSkill(skill.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  title,
  description,
  icon,
  index, // index peut être utilisé pour des styles conditionnels si besoin
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 group/feature"
      )}
    >
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400 self-start">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <span className="text-neutral-800 dark:text-neutral-100">{title}</span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10">{description}</p>
    </div>
  );
};

export default Skills;