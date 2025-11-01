import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google"; // 1. Importer Lato
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider"; // Chemin corrigé pour votre ThemeProvider personnalisé
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Configurer Lato
const lato = Lato({
  variable: "--font-lato", // Crée une variable CSS --font-lato
  weight: ["400", "700"], // Choisissez les graisses (weights) dont vous avez besoin
  subsets: ["latin"], // Choisissez les sous-ensembles de caractères
});

export const metadata: Metadata = {
  title: "Glenn NTOUTOUME Porfolio",
  description: "Portfolio de Glenn NTOUTOUME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} antialiased text-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}
