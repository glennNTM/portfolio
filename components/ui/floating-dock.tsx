"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";

import React, { useRef, useState } from "react";


export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  // La logique de visibilité au scroll est retirée pour revenir au comportement initial
  // const { scrollYProgress } = useScroll();
  // const [visible, setVisible] = useState(false);

  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   if (typeof current === "number") {
  //     let direction = current - (scrollYProgress.getPrevious() ?? 0);
  //     if (scrollYProgress.get() < 0.05) { // Masquer en haut de la page
  //       setVisible(false);
  //     } else {
  //       if (direction < 0 || scrollYProgress.get() <= 0) { // Afficher en scrollant vers le haut ou tout en haut
  //         setVisible(true);
  //       } else { // Masquer en scrollant vers le bas
  //         setVisible(false);
  //       }
  //     }
  //   }
  // });

  let mouseY = useMotionValue(Infinity); // On revient à mouseY pour l'interaction verticale
  return (
    // <AnimatePresence mode="wait"> // Retiré car la visibilité au scroll est enlevée
      <motion.div
        // initial={{ // Retiré
        //   opacity: 1,
        //   y: -100,
        // }}
        // animate={{ // Retiré
        //   y: visible ? 0 : -100,
        //   opacity: visible ? 1 : 0,
        // }}
        // transition={{ // Retiré
        //   duration: 0.2,
        // }}
        onMouseMove={(e) => mouseY.set(e.pageY)} // On utilise e.pageY
        onMouseLeave={() => mouseY.set(Infinity)}
        className={cn(
          // Styles pour un layout vertical à gauche
          "hidden md:flex flex-col items-center gap-4 rounded-2xl bg-gray-50 px-3 py-4 dark:bg-neutral-900 shadow-lg border dark:border-white/[0.2]",
          className // Permet de surcharger depuis page.tsx pour le positionnement
        )}
      >
        {/* <motion.div // Div interne retirée, les styles sont sur la div principale
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className={cn(
            "flex flex-row items-center gap-2 sm:gap-3 rounded-full bg-gray-50 px-4 py-3 dark:bg-neutral-900 shadow-lg border dark:border-white/[0.2]"
          )}
        > */}
          {items.map((item) => (
            <IconContainer mouseY={mouseY} key={item.title} {...item} /> // On repasse mouseY
          ))}
        {/* </motion.div> */}
      </motion.div>
    // </AnimatePresence> // Retiré
  );
};

function IconContainer({
  mouseX,
  mouseY, // Ajout de mouseY à la déstructuration
  title,
  icon,
  href,
}: {
  mouseX?: MotionValue; // Gardé optionnel pour compatibilité si jamais utilisé ailleurs
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  // Utiliser mouseY pour calculer la distance verticale
  let distance = useTransform(mouseY, (val) => { // On utilise mouseY
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 }; // On utilise y et height
    return val - bounds.y - bounds.height / 2; // On utilise y et height
  });

  const effectRange = 80; // Portée de l'effet pour un layout vertical
  let sizeTransform = useTransform(distance, [-effectRange, 0, effectRange], [40, 60, 40]);
  let iconSizeTransform = useTransform(
    distance,
    [-effectRange, 0, effectRange],
    [20, 30, 20],
  );
  let width = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let widthIcon = useSpring(iconSizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(iconSizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: -10, y: "-50%" }} // Position initiale pour tooltip à droite
              animate={{ opacity: 1, x: 0, y: "-50%" }}
              exit={{ opacity: 0, x: -10, y: "-50%" }}
              className="absolute left-full ml-3 top-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white z-50" // Positionné à droite
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
