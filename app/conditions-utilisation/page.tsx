import Link from 'next/link';

export const metadata = {
  title: "Conditions d'utilisation | Janga Consulting",
  description: "Conditions d'utilisation du site web de Janga Consulting - Règles et conditions régissant l'utilisation de nos services.",
};

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-gray-900 font-bold text-sm">JC</span>
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Janga Consulting
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Conditions d&apos;utilisation
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptation des conditions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              En accédant et en utilisant le site web de Janga Consulting, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Description des services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Janga Consulting fournit des services de conseil en transformation digitale, développement web et mobile, et solutions technologiques. Les services spécifiques sont détaillés sur notre site web et peuvent être modifiés à tout moment.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Utilisation du site
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Vous vous engagez à utiliser ce site de manière légale et à ne pas :
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Violer des lois ou règlements applicables</li>
              <li>Transmettre du contenu illégal, offensant ou inapproprié</li>
              <li>Tenter d&apos;accéder de manière non autorisée à nos systèmes</li>
              <li>Interférer avec le fonctionnement normal du site</li>
              <li>Collecter des informations sur d&apos;autres utilisateurs sans leur consentement</li>
              <li>Utiliser le site à des fins commerciales sans autorisation</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Propriété intellectuelle
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Tout le contenu présent sur ce site (textes, images, logos, graphiques, code source) est la propriété de Janga Consulting ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Contenu utilisateur
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Si vous soumettez du contenu via notre site (commentaires, formulaires de contact, etc.), vous garantissez que :
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Vous possédez les droits sur ce contenu</li>
              <li>Le contenu ne viole aucun droit de tiers</li>
              <li>Le contenu ne contient rien d&apos;illégal ou offensant</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Vous nous accordez une licence non exclusive pour utiliser ce contenu dans le cadre de nos services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Liens externes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Notre site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu, des politiques de confidentialité ou des pratiques de ces sites externes. L&apos;accès à ces liens se fait à vos propres risques.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Limitation de responsabilité
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Janga Consulting s&apos;efforce de maintenir l&apos;exactitude et la mise à jour des informations sur ce site. Toutefois, nous ne garantissons pas :
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>L&apos;exactitude, la complétude ou la pertinence des informations</li>
              <li>La disponibilité continue du site sans interruption</li>
              <li>L&apos;absence d&apos;erreurs ou de virus</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Dans les limites autorisées par la loi, nous déclinons toute responsabilité pour les dommages directs, indirects ou consécutifs résultant de l&apos;utilisation de ce site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Confidentialité
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              L&apos;utilisation de vos données personnelles est régie par notre{' '}
              <Link
                href="/politique-de-confidentialite"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Politique de confidentialité
              </Link>
              . Nous vous encourageons à la lire attentivement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Disponibilité du service
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nous nous efforçons de maintenir le site accessible 24h/24 et 7j/7, mais nous nous réservons le droit de suspendre, limiter ou interrompre l&apos;accès au site à tout moment, notamment pour maintenance, sans préavis.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Modifications des conditions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nous nous réservons le droit de modifier ces conditions d&apos;utilisation à tout moment. Les modifications entrent en vigueur dès leur publication sur cette page. Votre utilisation continue du site après la publication des modifications constitue votre acceptation de ces modifications.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Résiliation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nous nous réservons le droit de suspendre ou de résilier votre accès au site, sans préavis, si vous violez ces conditions d&apos;utilisation ou pour toute autre raison jugée nécessaire.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              12. Droit applicable
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Ces conditions d&apos;utilisation sont régies par le droit malgache. Tout litige relatif à l&apos;utilisation de ce site sera soumis à la juridiction exclusive des tribunaux de Madagascar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              13. Divisibilité
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Si une disposition de ces conditions est jugée invalide ou inapplicable, les autres dispositions resteront en vigueur dans toute la mesure permise par la loi.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              14. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Pour toute question concernant ces conditions d&apos;utilisation, contactez-nous :
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">Janga Consulting</p>
              <p className="text-gray-600 dark:text-gray-400">Email : <a href="mailto:contact@jangaconsulting.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@jangaconsulting.com</a></p>
              <p className="text-gray-600 dark:text-gray-400">Adresse : Mahajanga, Madagascar</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Janga Consulting. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
