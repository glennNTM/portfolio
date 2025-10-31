"use client";
import React from 'react'
import { cn } from "@/lib/utils"
import {
  IconApi,
  IconFileCode,
  IconDatabase,
  IconShieldLock,
  IconBox,
  IconTerminal2,
  IconGitBranch,
} from "@tabler/icons-react"

export const skills = [
  {
    id: 1,
    title: "Développement d'APIs REST",
    points: [
  
      "API REST avec Express, NextJS et Django",
      "Documentation avec Swagger",
      "Test avec Postman, Jest et Pytest",
    ],
  },
  {
    id: 2,
    title: "Gestion de Bases de Données",
    points: [
      "SQL (PostgreSQL, MySQL), NoSQL (MongoDB)",
      "ORM (Django ORM, Prisma, Mongoose)",
      "Modèle conceptuel de données (MCD)"
    ],
  },
  
  {
    id: 4,
    title: "Authentification & Sécurité",
    points: [
      "JWT, OAuth2",
      "Rate limiting, bot detection et CORS",
      "Securité contre les attaques XSS et CSRF"
    ],
  },
  {
    id: 5,
    title: "DevOps",
    points: [
      "CI/CD avec GitHub Actions",
      "Dockerisation d'applications",
      "Kubernetes"
    ],
  },
  {
    id: 6,
    title: "Frontend & Fullstack",
    points: [
      "Développement fullstack avec NextJS",
      "Frontend React avec Vite",
      "Maquettes statiques avec Figma"
    ],
  },
  {
    id: 7,
    title: "Bonnes Pratiques & outils",
    points: [
      "Utilisation de Git et GitHub",
      "Methode Scrum",
      "Code propre avec ESLint et Prettier"
    ],
  },
]

const Skills = () => {
  const getIconForSkill = (id: number) => {
    switch (id) {
      case 1: return <IconApi className="h-8 w-8 text-purple-500" />;
      case 2: return <IconFileCode className="h-8 w-8 text-purple-500" />;
      case 3: return <IconDatabase className="h-8 w-8 text-purple-500" />;
      case 4: return <IconShieldLock className="h-8 w-8 text-purple-500" />;
      case 5: return <IconBox className="h-8 w-8 text-purple-500" />;
      default: return <IconTerminal2 className="h-8 w-8 text-purple-500" />;
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-white dark:bg-black">
      {/* Fond avec grille */}
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
        <p className="text-center text-gray-700 dark:text-gray-300 md:tracking-wider my-4 text-sm md:text-lg lg:text-xl">Voici un aperçu de mes compétences en développement web. Je suis en constant apprentissage pour devenir un meilleur développeur.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 py-10 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              points={skill.points}
              icon={getIconForSkill(skill.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  title,
  points,
  icon,
}: {
  title: string;
  points: string[];
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
      )}
    >
      <div className="mb-4 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-3 text-neutral-800 dark:text-neutral-100">
        {title}
      </div>
      <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
