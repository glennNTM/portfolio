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
    image: "/241communities.png",
    status: "Déployé",
    keyFunction: [
      "Présentation des programmes et formations",
      "Formulaire d'inscription interactif",
      "Design responsive et moderne",
      "Informations sur les événements et actualités"
    ],
    technologies: ["/ts.svg", "/postgresql-logo-svgrepo-com.svg", "/next.svg", "/tail.svg"],
    deployLink: "https://241-communities.vercel.app/",
    githubLink: "https://github.com/glennNTM/241-communities",
  },
  {
    id: 2,
    title: "Doctely",
    des: "Plateforme web de téléconsultation médicale.",
    image: "/doctely.png",
    status: "Déployé",
    keyFunction: [
      "Téléconsultation médicale avec des médecins",
      "Ordonnances numériques",
      "Gestion des patients et des médecins",
      "Sécurité des données médicales"
    ],
    technologies: ["/postgresql-logo-svgrepo-com.svg", "/express-svgrepo-com.svg", "/re.svg", "/nodejs-svgrepo-com.svg"],
    deployLink: "https://doctely.netlify.app/",
    githubLink: "https://github.com/glennNTM/doctely",
  },
  {
    id: 3,
    title: "Tasky",
    des: "Application de gestion de tâches en ligne.",
    image: "/Macbook-Air-localhost (1).png",
    status: "En cours de développement",
    keyFunction: [
      "Création, lecture, mise à jour, suppression (CRUD) de tâches",
      "Système d'authentification des utilisateurs avec JWT",
      "Interface utilisateur responsive",
      "Sécurité contre les attaques XSS et CSRF"
    ],
    technologies: ["/mongodb-svgrepo-com.svg", "/express-svgrepo-com.svg", "/re.svg", "/nodejs-svgrepo-com.svg"],
    githubLink: "https://github.com/glennNTM/tasky",
  },
  {
    id: 4,
    title: "Macbook Landing Page",
    des: "Landing Page pour la vente de MacBooks.",
    image: "/macbook-landing-page.png",
    status: "Déployé",
    keyFunction: [
      "Design responsive et moderne",
      "Informations sur les MacBooks",
      "Animations avancées avec GSAP",
      " Objet 3D avec Three.js"
    ],
    technologies: ["/Threejs-logo.svg","gsap-logo.svg", "/re.svg","/tail.svg"],
    githubLink: "https://github.com/glennNTM/macbbook_gsap_app",
    deployLink: "https://gsapmacbook.netlify.app/",
  },
];




