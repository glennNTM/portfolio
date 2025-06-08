export const navItems = [
  { name: "À propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Je priorise la collaboration avec le client, favorisant une communication ouverte",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Je suis très flexible avec les communications跨fuseaux horaires",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ma stack technique",
    description: "J'essaie constamment de m'améliorer",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionné de technologie avec un amour pour le développement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actuellement en train de créer une bibliothèque d'animation JS",
    description: "Le Scoop Interne",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Voulez-vous démarrer un projet ensemble ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
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
    iconLists: ["mongodb-svgrepo-com.svg", "/re.svg", "/javascript-svgrepo-com (1).svg",], // re.svg pour React, tail.svg pour Tailwind, js pour JavaScript, express.svg pour Express
    link: "https://github.com/glennNTM/Tasky", // Lien GitHub en attendant le déploiement
    linkType: "github", // Marqué comme GitHub pour l'exemple, à changer si déployé
  },
  {
    id: 3,
    title: "Plateforme de gestion des ordinateurs de Ecole241",
    des: "Realisation d'une API REST, pour la gestion des ordinateurs de Ecole 241.",
    img: "/gestionDesOrdinateurs.png", // Assurez-vous que cette image est dans votre dossier public
    iconLists: ["/python-svgrepo-com.svg", "/django-svgrepo-com.svg", "/re.svg", "/tail.svg"], // Python, Django, React, Tailwind
    link: "https://github.com/glennNTM/Backend-Gestion_des_Ordinateurs.git",
    linkType: "github",
  },
  {
    id: 4,
    title: "Promptopia",
    des: "Plateforme pour partager et récupérer des prompts pertinents.",
    img: "/promptopia.png", // Assurez-vous que cette image est dans votre dossier public
    iconLists: ["/javascript-svgrepo-com (1).svg", "/mongodb-svgrepo-com.svg", "/next.svg", "/tail.svg"],
    link: "https://github.com/glennNTM/promptopia.git",
    linkType: "github",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborer avec Adrian a été un plaisir absolu. Son professionnalisme, sa ponctualité et son dévouement à fournir des résultats exceptionnels étaient évidents tout au long de notre projet. L'enthousiasme d'Adrian pour chaque facette du développement se démarque vraiment. Si vous cherchez à améliorer votre site web et à rehausser votre marque, Adrian est le partenaire idéal.",
    name: "Michel Dupont",
    title: "Directeur de AlphaStream Technologies",
  },
  {
    quote:
      "Collaborer avec Adrian a été un plaisir absolu. Son professionnalisme, sa ponctualité et son dévouement à fournir des résultats exceptionnels étaient évidents tout au long de notre projet. L'enthousiasme d'Adrian pour chaque facette du développement se démarque vraiment. Si vous cherchez à améliorer votre site web et à rehausser votre marque, Adrian est le partenaire idéal.",
    name: "Michel Dupont",
    title: "Directeur de AlphaStream Technologies",
  },
  {
    quote:
      "Collaborer avec Adrian a été un plaisir absolu. Son professionnalisme, sa ponctualité et son dévouement à fournir des résultats exceptionnels étaient évidents tout au long de notre projet. L'enthousiasme d'Adrian pour chaque facette du développement se démarque vraiment. Si vous cherchez à améliorer votre site web et à rehausser votre marque, Adrian est le partenaire idéal.",
    name: "Michel Dupont",
    title: "Directeur de AlphaStream Technologies",
  },
  {
    quote:
      "Collaborer avec Adrian a été un plaisir absolu. Son professionnalisme, sa ponctualité et son dévouement à fournir des résultats exceptionnels étaient évidents tout au long de notre projet. L'enthousiasme d'Adrian pour chaque facette du développement se démarque vraiment. Si vous cherchez à améliorer votre site web et à rehausser votre marque, Adrian est le partenaire idéal.",
    name: "Michel Dupont",
    title: "Directeur de AlphaStream Technologies",
  },
  {
    quote:
      "Collaborer avec Adrian a été un plaisir absolu. Son professionnalisme, sa ponctualité et son dévouement à fournir des résultats exceptionnels étaient évidents tout au long de notre projet. L'enthousiasme d'Adrian pour chaque facette du développement se démarque vraiment. Si vous cherchez à améliorer votre site web et à rehausser votre marque, Adrian est le partenaire idéal.",
    name: "Michel Dupont",
    title: "Directeur de AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Stagiaire Ingénieur Frontend",
    desc: "A participé au développement d'une plateforme web en utilisant React.js, améliorant l'interactivité.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développeur d'Applications Mobiles - JSM Tech",
    desc: "Conception et développement d'une application mobile pour les plateformes iOS et Android en utilisant React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Projet de Développement d'Application en Freelance",
    desc: "Direction du développement d'une application mobile pour un client, du concept initial au déploiement sur les stores d'applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Développeur Frontend Principal",
    desc: "Développement et maintenance de fonctionnalités orientées utilisateur en utilisant des technologies frontend modernes.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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