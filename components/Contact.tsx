"use client";
import React from 'react'
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'

const Contact = () => {
  const myEmail = "glennntoutoume8@gmail.com"
  const cvPath = "/cv/CV de Glenn - Développeur Backend.pdf"
  const linkedInUrl = "https://www.linkedin.com/in/glenn-ange-emmanuel-ntoutoume-0ba1a8192/"
  const githubUrl = "https://github.com/glennNTM"

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(myEmail)
      .then(() => {
        alert("Adresse e-mail copiée dans le presse-papiers !")
      })
      .catch(err => {
        console.error("Erreur lors de la copie de l'e-mail:", err)
        alert("Impossible de copier l'adresse e-mail.")
      });
  };

  const handleSubmit = (event: React.FormEvent) => {
    // Récupérer les valeurs des champs du formulaire
    const fullname = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    event.preventDefault()
    fetch('/api/contact', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullname, email, message }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.error(err)
      })
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden"> {/* dark:bg-gray-950 retiré, relative et overflow-hidden ajoutés */}
      {/* Nouveau fond avec grille et dégradé radial */}
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8"> {/* Conteneur pour le contenu au-dessus du fond */}
        <h2 className="text-3xl font-bold text-center mb-12"> {/* text-gray-900 dark:text-white hérité */}
          Entrons en contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-2xl"> {/* dark:bg-zinc-800 changé en dark:bg-zinc-900 pour contraste */}
          <div>
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Nom complet</Label>
            <Input type="text" id="name" name="name" placeholder="Votre nom" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Adresse e-mail</Label>
            <Input type="email" id="email" name="email" placeholder="Votre e-mail" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Votre message ici..."
              required
              className="mt-1 shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600" // dark:bg-zinc-900 changé en dark:bg-zinc-800 pour contraste
            />
            {/* Pour un effet de survol identique à Input.tsx, envisagez un composant Textarea.tsx dédié */}
          </div>
          <div className="flex justify-center"> {/* Ajout pour centrer le bouton */}
            <MagicButton
              type="submit"
              title="Envoyer le message"
              otherClasses="!mt-4" // w-full est retiré pour que le bouton prenne sa largeur naturelle/md:w-60 et soit centré
            />
          </div>
        </form>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Ou retrouvez-moi sur :</h3> {/* text-gray-900 dark:text-white hérité */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              <FaLinkedin size={32} />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              <FaGithub size={32} />
            </a>
            <button onClick={handleEmailCopy} aria-label="Copier l'adresse e-mail" className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors flex items-center">
              <FaEnvelope size={32} />
            </button>
          </div>

          <a href={cvPath} download="CV de Glenn - Développeur Backend.pdf" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
            <FaDownload size={20} className="mr-2" />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact