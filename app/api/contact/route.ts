// app/api/contact/route.ts

import { NextResponse } from 'next/server';
// Importez votre transporteur d'e-mail (ex: nodemailer) - Assurez-vous que nodemailer est installé
import nodemailer from 'nodemailer'

// Configurez votre transporteur d'e-mail ici
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou autre service (ex: 'Outlook365', 'sendgrid', etc.)
  auth: {
    user: process.env.EMAIL_USER, // Votre adresse e-mail d'envoi
    pass: process.env.EMAIL_PASS, // Le mot de passe de votre adresse e-mail ou un mot de passe d'application
  },
});

function generateContactEmailHTML(fullname: string, email: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouveau Message de Contact</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          font-family: 'Arial', sans-serif;
          color: #333333;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #6d28d9; /* Violet (comme la couleur principale du portfolio) */
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
        }
        .content {
          padding: 30px 25px;
          line-height: 1.6;
        }
        .content h2 {
          color: #6d28d9;
          font-size: 22px;
          margin-top: 0;
          margin-bottom: 20px;
        }
        .content p {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
          color: #555555;
        }
        .message-box {
          background-color: #f9f9f9;
          border-left: 4px solid #6d28d9;
          padding: 15px;
          margin-top: 10px;
          border-radius: 4px;
          white-space: pre-wrap; /* Conserve les sauts de ligne et espaces du message */
        }
        .footer {
          background-color: #333333;
          color: #eeeeee;
          text-align: center;
          padding: 20px;
          font-size: 12px;
        }
        .footer a {
          color: #c084fc; /* Violet plus clair pour les liens */
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .container {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }
          .header h1 {
            font-size: 24px;
          }
          .content {
            padding: 20px 15px;
          }
          .content h2 {
            font-size: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nouveau Message de Contact</h1>
        </div>
        <div class="content">
          <h2>Détails de la soumission :</h2>
          <p><span class="label">Nom Complet :</span> ${fullname}</p>
          <p><span class="label">Adresse E-mail :</span> <a href="mailto:${email}" style="color: #6d28d9; text-decoration: none;">${email}</a></p>
          <div>
            <span class="label">Message :</span>
            <div class="message-box">
              ${message}
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Cet e-mail a été envoyé depuis le formulaire de contact de votre portfolio.</p>
          <p>&copy; ${new Date().getFullYear()} Votre Nom/Marque. Tous droits réservés.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    // L'extraction du body doit être faite correctement.
    // Si le body est stringifié dans le client, il faut le parser ici.
    // Si le client envoie `application/json`, `request.json()` est la bonne méthode.
    let bodyData;
    const contentType = request.headers.get('Content-Type');

    if (contentType && contentType.includes('application/json')) {
        // Si c'est du JSON, on parse le body qui est déjà un objet JSON
        const rawBody = await request.json();
        // Dans Contact.tsx, le body de la requête fetch est stringifié DANS l'objet headers.
        // C'est incorrect. Le body doit être l'objet JSON lui-même.
        // Si vous corrigez Contact.tsx pour envoyer body: JSON.stringify({ fullname, email, message }),
        // alors rawBody ici sera { fullname, email, message }.
        // Si vous gardez Contact.tsx tel quel, alors rawBody sera { body: "{\"fullname\":...}" }
        // et il faudra parser rawBody.body.
        // Supposons que Contact.tsx est corrigé pour envoyer un body JSON correct :
        bodyData = rawBody; // { fullname, email, message }
    } else {
        // Gérer d'autres types de contenu si nécessaire, ou retourner une erreur
        return NextResponse.json({ message: "Type de contenu non supporté" }, { status: 415 });
    }

    const { fullname, email, message } = bodyData;


    if (!fullname || !email || !message) {
      return NextResponse.json({ message: "Champs manquants" }, { status: 400 });
    }

    const htmlEmail = generateContactEmailHTML(fullname, email, message);

    // Logique d'envoi d'e-mail avec votre transporteur (ex: nodemailer)
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // L'expéditeur (votre adresse configurée)
      to: process.env.EMAIL_RECEIVER || "glennntoutoume8@gmail.com", // Le destinataire (votre adresse de réception)
      replyTo: email, // L'adresse de l'utilisateur pour répondre directement
      subject: `Nouveau message de ${fullname} via le portfolio`,
      html: htmlEmail,
    });

    // Vous pouvez garder ces logs si vous voulez toujours voir ce qui est envoyé, ou les supprimer.
    // console.log("E-mail envoyé (ou tentative d'envoi) :");
    // console.log("À : ", process.env.EMAIL_RECEIVER || "glennntoutoume8@gmail.com");
    // console.log("Sujet : Nouveau message de " + fullname + " via le portfolio");
    // console.log("Contenu HTML : \n", htmlEmail);

    return NextResponse.json({ message: "Message envoyé avec succès !" }, { status: 200 });

  } catch (error) {
    console.error("Erreur lors du traitement de la requête:", error);
    // Si l'erreur est due à un JSON malformé envoyé par le client
    if (error instanceof SyntaxError) {
        return NextResponse.json({ message: "Données JSON malformées" }, { status: 400 });
    }
    return NextResponse.json({ message: "Erreur interne du serveur" }, { status: 500 });
  }
}
