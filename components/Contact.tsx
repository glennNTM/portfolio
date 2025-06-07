"use client";
import React from 'react';
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';

const Contact = () => {
  const myEmail = "votre.email@example.com"; // Remplacez par votre adresse e-mail
  const cvPath = "/cv/mon_cv.pdf"; // Remplacez par le chemin vers votre CV dans le dossier public
  const linkedInUrl = "https://www.linkedin.com/in/votrenom/"; // Remplacez par votre URL LinkedIn
  const githubUrl = "https://github.com/votrenom/"; // Remplacez par votre URL GitHub

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(myEmail)
      .then(() => {
        alert("Adresse e-mail copiée dans le presse-papiers !");
      })
      .catch(err => {
        console.error("Erreur lors de la copie de l'e-mail:", err);
        alert("Impossible de copier l'adresse e-mail.");
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    // Ici, vous intégreriez la logique d'envoi (par exemple, via une API backend ou un service comme Formspree)
    console.log("Données du formulaire:", data);
    alert("Message envoyé (simulation) ! Pensez à configurer l'envoi réel.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Entrons en contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-2xl">
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
              className="mt-1 shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            />
            {/* Pour un effet de survol identique à Input.tsx, envisagez un composant Textarea.tsx dédié */}
          </div>
          <div>
            <MagicButton
              type="submit"
              title="Envoyer le message"
              otherClasses="w-full !mt-4" // S'assure que le bouton prend toute la largeur et ajuste la marge
            />
          </div>
        </form>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Ou retrouvez-moi sur :</h3>
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

          <a href={cvPath} download="CV_VotreNom.pdf" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
            <FaDownload size={20} className="mr-2" />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact