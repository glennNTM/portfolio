import React from 'react'

type MagicButtonProps = {
    title: string;
    icon?: React.ReactNode; // Rendu optionnel
    position?: 'left' | 'right'; // Position de l'icône
    handleClick?: () => void;
    otherClasses?: string;
    type?: string
}

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    type
}: MagicButtonProps) => {
    return (
        <button
            className={`p-[3px] relative ${otherClasses} md:w-60 md:mt-10`}
            onClick={handleClick}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 rounded-[6px] relative group transition duration-200 flex items-center justify-center gap-2 bg-white text-black dark:bg-black dark:text-white hover:bg-transparent">
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </div>
        </button>
    )
}

export default MagicButton