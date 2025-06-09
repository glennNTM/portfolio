export const navItems = [
  { name: "À propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Contact", link: "#contact" },
];


export const projects = [
  {
    id: 1,
    title: "Site de Ecole241",
    des: "Plateforme web pour l'Ecole241, présentant ses programmes et facilitant l'inscription des étudiants.",
    img: "/Ecole241.png", // Assurez-vous que cette image est dans votre dossier public
    iconLists: ["/ts.svg", "/fm.svg", "/next.svg", "/tail.svg"], // fm.svg pour Framer Motion, next.svg pour Next.js, tail.svg pour Tailwind
    link: "https://ecole241-web.vercel.app/",
    linkType: "deploy",
  },
  {
    id: 2,
    title: "Tasky",
    des: "Une application web pour gérer vos tâches, avec un système d'authentification.",
    img: "/tasky.png", // Assurez-vous que cette image est dans votre dossier public
    iconLists: ["mongodb-svgrepo-com.svg","express-svgrepo-com.svg", "/re.svg", "/nodejs-svgrepo-com.svg",], // re.svg pour React, tail.svg pour Tailwind, js pour JavaScript, express.svg pour Express
    link: "https://github.com/glennNTM/Tasky", // Lien GitHub en attendant le déploiement
    linkType: "github", // Marqué comme GitHub pour l'exemple, à changer si déployé
  },
  {
    id: 3,
    title: "Gestion des ordinateurs de Ecole241",
    des: "Realisation d'une API REST, pour la gestion des ordinateurs de Ecole 241.",
    img: "/gestionDesOrdinateurs.png", 
    iconLists: ["/python-svgrepo-com.svg", "/django-svgrepo-com.svg", "/dock.svg"], 
    link: "https://github.com/glennNTM/Backend-Gestion_des_Ordinateurs.git",
    linkType: "github",
  },
  {
    id: 4,
    title: "Promptopia",
    des: "Plateforme pour partager et récupérer des prompts pertinents.",
    img: "/promptopia.png", 
    iconLists: ["/javascript-svgrepo-com (1).svg", "/mongodb-svgrepo-com.svg", "/next.svg", "/tail.svg"],
    link: "https://github.com/glennNTM/promptopia.git",
    linkType: "github",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];