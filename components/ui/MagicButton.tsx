import React from 'react'

type MagicButtonProps = {
    title: string;
    icon?: React.ReactNode; // Rendu optionnel
    position?: 'left' | 'right'; // Position de l'icône
    handleClick?: () => void;
    otherClasses?: string;
    type?: "button" | "submit" | "reset"; // type HTML standard pour les boutons
}

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    type
}: MagicButtonProps) => {
    // Le titre sera toujours visible, la logique de masquage est retirée.

    return (
        <button
            className={`p-[3px] relative ${otherClasses} md:w-60 md:mt-10`}
            type={type || "button"} // Utiliser le type fourni ou "button" par défaut
            onClick={handleClick}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className={`px-4 sm:px-8 py-2 rounded-[6px] relative group transition duration-200 flex items-center justify-center bg-white text-black dark:bg-black dark:text-white hover:bg-transparent ${icon ? 'gap-2' : ''}`}>
                {position === 'left' && icon}
                {title} {/* Le titre est maintenant toujours affiché directement */}
                {position === 'right' && icon}
            </div>
        </button>
    )
}

export default MagicButton