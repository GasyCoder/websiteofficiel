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
      className="py-20 sm:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            À propos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Janga Consulting
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Basée à <strong>Mahajanga, Madagascar</strong>, Janga Consulting est une{" "}
            <strong>agence numérique</strong> spécialisée dans le développement
            d&apos;applications web, le conseil technique et l&apos;innovation digitale.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mt-4">
            Nous mettons notre expertise au service des entreprises qui souhaitent
            se démarquer grâce à des solutions technologiques performantes,
            accessibles et centrées sur l&apos;humain.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
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
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Prêt à transformer votre vision en réalité ?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Discutons de votre projet ensemble.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
