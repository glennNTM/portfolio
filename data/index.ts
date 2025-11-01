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
    technologies: ["/postgresql-logo-svgrepo-com.svg", "/express-svgrepo-com.svg", "/re.svg", "/nodejs-icon-svgrepo-com.svg"],
    deployLink: "https://doctely.netlify.app/",
    githubLink: "https://github.com/glennNTM/doctely",
  },

  {
    id: 3,
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
    technologies: ["/Threejs-logo.svg", "gsap-logo.svg", "/re.svg", "/tail.svg"],
    githubLink: "https://github.com/glennNTM/macbbook_gsap_app",
    deployLink: "https://gsapmacbook.netlify.app/",
  },
  {
    id: 4,
    title: "SpendingApp",
    des: "Application Web de Gestion de dépenses",
    image: "/spendingApp.png",
    status: "En cours de développement",
    keyFunction: [
      "JWT & Google OAuth2 pour l'authentification",
      "Gestion des transactions",
      "Statistiques de dépenses",
    ],
    technologies: ["python-svgrepo-com.svg", "django-svgrepo-com.svg", "/postgresql-logo-svgrepo-com.svg", "react-svgrepo-com.svg"],
    githubLink: "https://github.com/glennNTM/Gestion_des_depenses",
  }
];



export const gridItems = [
  {
    id: 1,
    title: "Qui suis-je ?",
    description: "Je suis Glenn NTOUTOUME, un développeur backend passionné par la création d'applications web. Je suis en constante apprentissage pour maitriser les nouvelles technologies et améliorer mes compétences.",
    className: "bg-blue-900/20 border-blue-500/30 min-h-[300px] md:min-h-[350px] dark:bg-blue-900/20 dark:border-blue-500/30",
    imgClassName: "rounded-full mb-4",
    titleClassName: "justify-center text-blue-900 dark:text-blue-100",
    img: "/pportfolio.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ma Stack de développement",
    description: "Voici un aperçu des principaux outils et technologies que j'utilise pour donner vie à mes projets, allant du backend au frontend.",
    className: "bg-cyan-900/20 border-cyan-500/30 min-h-[400px] md:min-h-[450px] dark:bg-cyan-900/20 dark:border-cyan-500/30",
    imgClassName: "",
    titleClassName: "justify-start text-cyan-900 dark:text-cyan-100",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mes objectifs",
    description: "Mon objectif principal est de maîtriser le développement back-end et de concevoir des solutions performantes, robustes et innovantes. En parallèle, je poursuis mon apprentissage du développement front-end afin de devenir développeur full-stack.",
    className: "bg-purple-900/30 border-purple-500/40 dark:bg-purple-900/30 dark:border-purple-500/40",
    imgClassName: "",
    titleClassName: "justify-center text-purple-900 dark:text-purple-100",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Impacter le monde avec mon code",
    description: "",
    className: "h-96 md:h-full min-h-[300px] md:min-h-[500px] bg-emerald-900/30 border-emerald-500/40 overflow-hidden relative dark:border-emerald-500/40",
    imgClassName: "",
    titleClassName: "flex items-center justify-center text-emerald-100 absolute top-2 md:top-6 left-2 md:left-6 z-20 backdrop-blur-sm bg-black/30 px-2 md:px-3 py-1 md:py-2 rounded-lg border border-emerald-400/30 dark:text-emerald-900 dark:bg-white text-xs md:text-base",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

];