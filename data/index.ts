import {
  IconApi, // Icône pour les APIs
  IconFileCode, // Icône pour la documentation
  IconDatabase, // Icône pour les bases de données
  IconShieldLock, // Icône pour la sécurité
  IconBox, // Icône pour Docker/Containerisation
  IconTerminal2, // Fallback ou icône générique
} from "@tabler/icons-react"

export const navItems = [
  { name: "À propos", link: "#about", icon: "FaUser" }, // Icône pour la section "À propos"
  { name: "Compétences", link: "#skills", icon: "FaCode" }, // Icône pour la section "Compétences"
  { name: "Outils", link: "#tools", icon: "FaTools" }, // Icône pour la section "Outils"
  { name: "Projets", link: "#projects", icon: "FaGithub" }, // Icône pour la section "Projets"
  { name: "Contact", link: "#contact", icon: "FaPhone" }, // Icône pour la section "Contact"
];



export const projects = [
  {
    id: 1,
    title: "Site de Ecole241",
    des: "Plateforme web pour l'Ecole241, présentant ses programmes et facilitant l'inscription des étudiants.",
    img: "/Ecole241.png", // Assurez-vous que cette image est dans votre dossier public
    keyFunction: ["Présentation des programmes et formations", "Formulaire d'inscription interactif", "Design responsive et moderne", "Informations sur les événements et actualités"],
    iconLists: ["/ts.svg", "/fm.svg", "/next.svg", "/tail.svg"], // fm.svg pour Framer Motion, next.svg pour Next.js, tail.svg pour Tailwind
    link: "https://ecole241-web.vercel.app/",
    linkType: "deploy",
  },
  {
    id: 2,
    title: "Tasky",
    des: "Une application web pour gérer vos tâches, avec un système d'authentification.",
    img: "/tasky.png", // Assurez-vous que cette image est dans votre dossier public
    keyFunction: ["Création, lecture, mise à jour, suppression (CRUD) de tâches", "Système d'authentification des utilisateurs avec JWT", "Authentification OAuth 2.0 via Google et GitHub", "Interface utilisateur responsive"],
    iconLists: ["mongodb-svgrepo-com.svg","express-svgrepo-com.svg", "/re.svg", "/nodejs-svgrepo-com.svg",], // re.svg pour React, tail.svg pour Tailwind, js pour JavaScript, express.svg pour Express
    link: "https://github.com/glennNTM/Tasky", // Lien GitHub en attendant le déploiement
    linkType: "github", // Marqué comme GitHub pour l'exemple, à changer si déployé
  },
  {
    id: 3,
    title: "Gestion des ordinateurs de Ecole241",
    des: "Realisation d'une API REST, pour la gestion des ordinateurs de Ecole 241.",
    img: "/gestionDesOrdinateurs.png",
    keyFunction: ["Endpoints API pour la gestion CRUD des ordinateurs", "Suivi de l'état et de l'attribution des machines", "Système d'authentification des utilisateurs avec JWT"],
    iconLists: ["/python-svgrepo-com.svg", "/django-svgrepo-com.svg", "/dock.svg"], 
    link: "https://github.com/glennNTM/Backend-Gestion_des_Ordinateurs.git",
    linkType: "github",
  },
  {
    id: 4,
    title: "Promptopia",
    des: "Plateforme pour partager et récupérer des prompts pertinents.",
    img: "/promptopia.png",
    keyFunction: ["Partage et découverte de prompts pour IA", "Recherche et filtrage de prompts par tag", "Authentification OAuth 2.0 via Google"],
    iconLists: ["/javascript-svgrepo-com (1).svg", "/mongodb-svgrepo-com.svg", "/next.svg", "/tail.svg"],
    link: "https://github.com/glennNTM/promptopia.git",
    linkType: "github",
  },
]


export const skills = [
  {
    id: 1,
    title: "Développement d'APIs REST",
    description: "Conception et développement d'APIs REST avec Express, NextJS et Django. Gestion des middlewares, des controllers, validation des données.",
  },
  {
    id: 2,
    title: "Documentation d'API (Swagger)",
    description: "Documentation d'API complète avec Swagger pour une meilleure compréhension et intégration.",
  },
  {
    id: 3,
    title: "Modélisation de Bases de Données",
    description: "Conception de schémas optimisés, gestion des relations complexes avec SQLite, MySQL, PostgreSQL et MongoDB, . Utilisation des ORMs (Django ORM, Prisma, Mongoose) et optimisation des requêtes.",
  },
  {
    id: 4,
    title: "Authentification & Sécurité",
    description: "Implémentation de systèmes d'authentification (JWT, OAuth2), hashage sécurisé des mots de passe, gestion des rôles et permissions. Sécurisation complète des endpoints contre les vulnérabilités courantes.",
  },
  {
    id: 5,
    title: "Containerisation Docker",
    description: "Dockerisation d'applications pour un environnement de développement et de déploiement cohérent. Création de Dockerfiles optimisés et utilisation de services Docker avec Docker Compose.",
  }
]
