import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()

    // Valider que les champs nécessaires sont présents
    if (!body.email || !body.fullname || !body.message) {
        return NextResponse.json({ message: "Champs manquants dans la requête" }, { status: 400 });
    }

    const recipientEmail = process.env.NODEMAILER_EMAIL_TO;
    if (!recipientEmail) {
        console.error("NODEMAILER_EMAIL_TO n'est pas défini dans les variables d'environnement.");
        return NextResponse.json({ error: "Configuration du serveur incomplète (destinataire manquant)." }, { status: 500 });
    }

    const message = {
        from: body.email,
        to: recipientEmail,
        subject: `Message de ${body.fullname}`,
        html: `
            <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="padding: 20px 0 30px 0;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                                <tr>
                                    <td align="center" bgcolor="#703add" style="padding: 30px 0 30px 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                                        Nouveau Message de Contact
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="color: #153643; font-size: 24px; font-weight: bold; margin-bottom: 20px;">
                                                    Détails du Contact :
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 15px 0 10px 0; color: #153643; font-size: 16px; line-height: 24px;">
                                                    <strong>Nom Complet :</strong> ${body.fullname}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0 10px 0; color: #153643; font-size: 16px; line-height: 24px;">
                                                    <strong>Adresse E-mail :</strong> <a href="mailto:${body.email}" style="color: #703add; text-decoration: none;">${body.email}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0 10px 0; color: #153643; font-size: 18px; font-weight: bold;">
                                                    Message :
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0 0 0; color: #153643; font-size: 16px; line-height: 24px; border: 1px solid #eeeeee; background-color: #f9f9f9; border-radius: 5px; padding: 15px;">
                                                    ${body.message.replace(/\n/g, '<br>')}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#f0e9ff" style="padding: 30px 30px 30px 30px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="color: #555555; font-size: 14px; text-align: center;">
                                                    Cet e-mail a été envoyé via le formulaire de contact de votre portfolio.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
        `,

        headers: {
            "X-Entity-Ref-ID": "newmail", // Vous pouvez garder ou modifier cet en-tête personnalisé
        },
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Assurez-vous que la configuration Gmail est correcte
        auth: {
            user: process.env.NODEMAILER_EMAIL_USER,
            pass: process.env.NODEMAILER_EMAIL_PASS, // Utilisez un mot de passe d'application si 2FA est activé
        },
        // tls: { // Généralement pas nécessaire pour Gmail avec 'service: gmail'
        //     rejectUnauthorized: false,
        // },
    })
    console.log("Données reçues pour l'e-mail:", JSON.stringify(body)); // Log pour le débogage
    try {
        await transporter.sendMail(message);
        console.log("E-mail envoyé avec succès à:", recipientEmail);
        return NextResponse.json({ message: "Message envoyé avec succès" }, { status: 200 });
    } catch (error: any) {
        console.error("Erreur Nodemailer lors de l'envoi de l'e-mail:", error);
        return NextResponse.json({ error: `Erreur lors de l'envoi de l'e-mail: ${error.message}` }, { status: 500 });
    }
}
