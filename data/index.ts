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
];



export const gridItems = [
  {
    id: 1,
    title: "Qui suis-je ?",
    description: "Je suis Glenn NTOUTOUME, un développeur backend passionné par la création d'applications web. Je suis en constante apprentissage pour maitriser les nouvelles technologies et améliorer mes compétences.",
    className: "",
    imgClassName: "rounded-full mb-4",
    titleClassName: "justify-center",
    img: "/pportfolio.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ma Stack de développement",
    description: "",
    className: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mes objectifs",
    description: "Mon objectif principal est de maîtriser le développement back-end et de concevoir des solutions performantes, robustes et innovantes. En parallèle, je poursuis mon apprentissage du développement front-end afin de devenir développeur full-stack.",
    className: " bg-black text-white border border-12 border-purple-500",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  }
];