export const navItems = [
  { name: "À propos", link: "#about", icon: "FaUser" }, // Icône pour la section "À propos"
  { name: "Compétences", link: "#skills", icon: "FaCode" }, // Icône pour la section "Compétences"
  { name: "Projets", link: "#projects", icon: "FaGithub" }, // Icône pour la section "Projets"
  { name: "Contact", link: "#contact", icon: "FaPhone" }, // Icône pour la section "Contact"
];



export const projects = [
  {
    id: 1,
    title: "Site de Ecole241 Communities",
    des: "Plateforme web LMS pour le programme communities d'Ecole241.",
    imgList: ["/Macbook-Air-241-communities.vercel.app (1).png", "/Macbook-Air-241-communities.vercel.app.png"], // Slider prêt pour plusieurs images
    keyFunction: [
      "Présentation des programmes et formations",
      "Formulaire d'inscription interactif",
      "Design responsive et moderne",
      "Informations sur les événements et actualités"
    ],
    iconLists: ["/ts.svg", "/postgresql-logo-svgrepo-com.svg", "/next.svg", "/tail.svg"],
    link: "https://241-communities.vercel.app/",
    linkType: "deploy",
  },
{
    id: 2,
    title: "Doctely",
    des: "Plateforme web de teleconsultation medicale.",
    imgList: ["/Macbook-Air-localhost.png", "/doctelyscreenshot2.png"],
    keyFunction: [
      "Teleconsultation medicale avec des medecins",
      "Ordonnaces numériques",
      "Gestion des patients et des médecins",
      "Securité des données médicales"
    ],
    iconLists: ["/postgresql-logo-svgrepo-com.svg", "/express-svgrepo-com.svg", "/re.svg", "/nodejs-svgrepo-com.svg"], 
    link: "https://doctely.netlify.app/",
    linkType: "deploy",
  },
  {
    id: 3,
    title: "Tasky",
    des: "Application de gestion de tâches en ligne.",
    imgList: ["/Macbook-Air-localhost (1).png"],
    keyFunction: [
      "Création, lecture, mise à jour, suppression (CRUD) de tâches",
      "Système d'authentification des utilisateurs avec JWT",
      "Interface utilisateur responsive",
      "Securité contre les attaques XSS et CSRF"
    ],
    iconLists: ["mongodb-svgrepo-com.svg","express-svgrepo-com.svg", "/re.svg", "/nodejs-svgrepo-com.svg"],
    link: "https://github.com/glennNTM/Tasky",
    linkType: "github", 
  },

  {
    id: 4,
    title: "Promptopia",
    des: "Plateforme pour partager et récupérer des prompts pertinents.",
    imgList: ["/promptopia.png"],
    keyFunction: [
      "Partage et découverte de prompts pour IA",
      "Recherche et filtrage de prompts par tag",
      "Authentification OAuth 2.0 via Google"
    ],
    iconLists: ["/javascript-svgrepo-com (1).svg", "/mongodb-svgrepo-com.svg", "/next.svg", "/tail.svg"],
    link: "https://github.com/glennNTM/promptopia.git",
    linkType: "github",
  },
];




