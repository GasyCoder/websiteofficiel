"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";

/**
 * Section À propos de Janga Consulting
 */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "Accompagner les entreprises dans leur transformation digitale avec des solutions sur mesure et innovantes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Adopter les dernières technologies pour créer des solutions web performantes et modernes.",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Une équipe passionnée et qualifiée, prête à relever tous vos défis techniques.",
    },
    {
      icon: Rocket,
      title: "Résultats",
      description: "Des projets livrés dans les délais avec un engagement qualité et une satisfaction client maximale.",
    },
  ];

  return (
    <section
      id="a-propos"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            À propos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Janga Consulting
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Basée à <strong>Mahajanga, Madagascar</strong>, Janga Consulting est une{" "}
            <strong>agence numérique</strong> spécialisée dans le développement
            d&apos;applications web, le conseil technique et l&apos;innovation digitale.
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
            Nous mettons notre expertise au service des entreprises qui souhaitent
            se démarquer grâce à des solutions technologiques performantes,
            accessibles et centrées sur l&apos;humain.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity" />

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Prêt à transformer votre vision en réalité ?
            </h3>
            <p className="text-blue-100 mb-5 text-base">
              Discutons de votre projet ensemble.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 text-sm bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-md"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
