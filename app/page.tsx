import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Page d'accueil principale du site Janga Consulting
 *
 * Structure:
 * - Header (navigation sticky)
 * - Hero (section d'accueil avec slogan)
 * - About (présentation de l'entreprise)
 * - Team (équipe de 6 membres)
 * - Services (services offerts)
 * - Contact (formulaire et informations)
 * - Footer (pied de page avec liens)
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
