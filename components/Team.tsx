"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

/**
 * Section Équipe avec les 6 membres
 */
export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Joël",
      role: "Gérant",
      description: "Visionnaire et leader, Joël pilote la stratégie globale de l'entreprise avec passion.",
      avatar: "🎯",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "BEZARA Florent",
      role: "Directeur Technique",
      description: "Expert en architecture logicielle, Florent garantit l'excellence technique de nos projets.",
      avatar: "💻",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "MANANTSAINA Frédo",
      role: "Conseiller Technique",
      description: "Conseiller avisé, Frédo apporte son expertise pour optimiser nos solutions techniques.",
      avatar: "🔧",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "RAKOTOBE Emelien",
      role: "Manager et Lead",
      description: "Leader d'équipe expérimenté, Emelien coordonne les projets avec efficacité et bienveillance.",
      avatar: "🚀",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Billy Laurant",
      role: "Designer",
      description: "Créatif et méticuleux, Billy conçoit des interfaces élégantes et intuitives.",
      avatar: "🎨",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      name: "Eliot",
      role: "Développeur Frontend & Backend",
      description: "Full-stack polyvalent, Eliot transforme les idées en applications performantes.",
      avatar: "⚡",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="equipe"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Notre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Équipe
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Une équipe de professionnels passionnés, dédiés à votre réussite.
            Chacun apporte son expertise unique pour faire de vos projets un succès.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${member.gradient}`} />

              <div className="p-6">
                {/* Avatar */}
                <div className="relative mb-5">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {member.avatar}
                  </div>
                  {/* Ring animation on hover */}
                  <div className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${member.gradient} rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Social links placeholder */}
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 flex items-center justify-center transition-colors group/btn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400" />
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 flex items-center justify-center transition-colors group/btn"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { emoji: "🤝", text: "Esprit d'équipe" },
            { emoji: "💡", text: "Innovation continue" },
            { emoji: "✨", text: "Excellence technique" },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{value.emoji}</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">{value.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
