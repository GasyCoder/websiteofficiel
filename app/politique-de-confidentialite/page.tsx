import Link from 'next/link';

export const metadata = {
  title: 'Politique de confidentialité | Janga Consulting',
  description: 'Politique de confidentialité de Janga Consulting - Comment nous collectons, utilisons et protégeons vos données personnelles.',
};

export default function PolitiqueDeConfidentialite() {
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
          Politique de confidentialité
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Janga Consulting s&apos;engage à protéger la confidentialité de vos données personnelles. Cette politique décrit comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Données collectées
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nous collectons les types de données suivants :
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Informations d&apos;identification (nom, prénom, email)</li>
              <li>Données de contact (numéro de téléphone, adresse postale)</li>
              <li>Informations professionnelles (entreprise, fonction)</li>
              <li>Données de navigation (cookies, adresse IP, type de navigateur)</li>
              <li>Historique des communications avec notre entreprise</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Utilisation des données
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Vos données personnelles sont utilisées pour :
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Fournir et améliorer nos services</li>
              <li>Répondre à vos demandes et questions</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Analyser l&apos;utilisation de notre site web</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Protection des données
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou altération. Cela inclut le chiffrement des données, des contrôles d&apos;accès stricts et des audits de sécurité réguliers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Partage des données
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Avec des prestataires de services travaillant pour notre compte</li>
              <li>Pour se conformer à des obligations légales</li>
              <li>Avec votre consentement explicite</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Vos droits
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Conformément au RGPD et aux lois applicables, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l&apos;effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@jangaconsulting.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@jangaconsulting.com</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Conservation des données
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux fins pour lesquelles elles ont été collectées, ou conformément aux obligations légales applicables.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Modifications
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page pour rester informé.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, contactez-nous :
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
