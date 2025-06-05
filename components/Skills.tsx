import { HoverEffect } from "./ui/card-hover-effect";

const Skills = () => {
  const techSkills = [
    {
            description: <img src="/python-svgrepo-com.svg" alt="Python" className="w-10 h-10" />,

    },
    {
            description: <img src="/django-svgrepo-com.svg" alt="Django" className="w-10 h-10" />,

    },
    {
            description: <img src="/javascript-svgrepo-com (1).svg" alt="JavaScript" className="w-10 h-10" />,

    },
    {
            description: <img src="/ts.svg" alt="TypeScript" className="w-10 h-10" />,
    },
    {
            description: <img src="/react-svgrepo-com.svg" alt="React" className="w-10 h-10" />,
    },
    {
      description: <img src="/next.svg" alt="Next.js" className="w-10 h-10" />,
    },
    {
      description: <img src="/tail.svg" alt="Tailwind CSS" className="w-10 h-10" />,
    },
    {
            description: <img src="/dock.svg" alt="Docker" className="w-10 h-10" />,
    },
    {
            description: <img src="/github.svg" alt="Docker" className="w-10 h-10" />,
    },
    
    {
            description: <img src="/postgresql-svgrepo-com.svg" alt="PostgreSQL" className="w-10 h-10" />,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Mes <span className="text-purple-500">Compétences</span>
      </h1>
      <p className="text-center text-white-200 md:tracking-wider my-4 text-sm md:text-lg lg:text-xl">
        Je suis passionné par l'apprentissage continu et l'exploration de nouvelles technologies pour créer des solutions innovantes et performantes.
      </p>

      <div className="mt-12">
        <HoverEffect items={techSkills} />
      </div>
    </section>
  );
};

export default Skills;

/**
 * Note pour l'utilisateur :
 * J'ai utilisé des balises <img> pour les icônes SVG. Assurez-vous que les chemins (ex: "/ts.svg")
 * pointent correctement vers vos fichiers dans le dossier `public`.
 * J'ai également ajouté un `id="skills"` à la section pour la navigation interne
 * et quelques classes Tailwind pour le style du titre et du paragraphe.
 * Le fichier `javascript-svgrepo-com.svg` a été inclus comme demandé,
 * en supposant qu'il existe dans votre dossier `public`.
 */