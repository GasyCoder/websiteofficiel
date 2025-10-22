"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  PenTool,
  Smartphone,
  Database,
  Cloud,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

/**
 * Section Services de Janga Consulting
 */
export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code2,
      title: "Développement Web",
      description:
        "Création de sites web et applications performantes avec les dernières technologies (React, Next.js, Node.js).",
      features: [
        "Sites vitrine et e-commerce",
        "Applications web sur mesure",
        "Progressive Web Apps (PWA)",
      ],
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description:
        "Développement d'applications mobiles natives et cross-platform pour iOS et Android.",
      features: [
        "React Native",
        "Interface utilisateur intuitive",
        "Optimisation des performances",
      ],
      color: "indigo",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description:
        "Conception d'interfaces modernes, élégantes et centrées sur l'expérience utilisateur.",
      features: [
        "Design system",
        "Prototypage interactif",
        "Tests utilisateurs",
      ],
      color: "purple",
    },
    {
      icon: Database,
      title: "Conseil Technologique",
      description:
        "Accompagnement stratégique pour choisir les meilleures solutions techniques adaptées à vos besoins.",
      features: [
        "Audit technique",
        "Architecture logicielle",
        "Choix des technologies",
      ],
      color: "pink",
    },
    {
      icon: Cloud,
      title: "Hébergement & DevOps",
      description:
        "Déploiement, hébergement et maintenance de vos applications dans le cloud.",
      features: [
        "CI/CD automatisé",
        "Monitoring 24/7",
        "Optimisation des coûts",
      ],
      color: "cyan",
    },
    {
      icon: TrendingUp,
      title: "Transformation Digitale",
      description:
        "Accompagnement complet pour digitaliser vos processus et améliorer votre présence en ligne.",
      features: [
        "Stratégie digitale",
        "Formation des équipes",
        "Accompagnement continu",
      ],
      color: "emerald",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; gradient: string }> = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      gradient: "from-blue-600 to-cyan-600",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      gradient: "from-indigo-600 to-purple-600",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      gradient: "from-purple-600 to-pink-600",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      gradient: "from-pink-600 to-rose-600",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      gradient: "from-cyan-600 to-blue-600",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      gradient: "from-emerald-600 to-green-600",
    },
  };

  return (
    <section
      id="services"
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
            Nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Des solutions complètes et sur mesure pour répondre à tous vos besoins
            digitaux. De la conception à la mise en production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 border border-blue-100"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Vous avez un projet en tête ?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est prête à vous accompagner de la conception à la
            réalisation de votre projet digital.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all hover:scale-105"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}
