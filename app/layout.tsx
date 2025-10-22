import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janga Consulting - Innover pour l'humain",
  description: "Agence numérique basée à Mahajanga, Madagascar. Spécialisée dans le développement d'applications, le conseil technique et l'innovation web.",
  keywords: ["consulting", "développement web", "innovation", "Madagascar", "Mahajanga", "agence digitale"],
  authors: [{ name: "Janga Consulting" }],
  openGraph: {
    title: "Janga Consulting - Innover pour l'humain",
    description: "Agence numérique basée à Mahajanga, Madagascar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
