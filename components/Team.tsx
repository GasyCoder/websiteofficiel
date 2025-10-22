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
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Notre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Équipe
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Une équipe de professionnels passionnés, dédiés à votre réussite.
            Chacun apporte son expertise unique pour faire de vos projets un succès.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient top bar */}
              <div className={`h-2 bg-gradient-to-r ${member.gradient}`} />

              <div className="p-8">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 mx-auto bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-5xl shadow-xl group-hover:scale-110 transition-transform`}
                  >
                    {member.avatar}
                  </div>
                  {/* Ring animation on hover */}
                  <div className={`absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-br ${member.gradient} rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social links placeholder */}
                  <div className="flex items-center justify-center gap-3">
                    <button
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors group/btn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover/btn:text-blue-600" />
                    </button>
                    <button
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors group/btn"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-gray-600 group-hover/btn:text-blue-600" />
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
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { emoji: "🤝", text: "Esprit d'équipe" },
            { emoji: "💡", text: "Innovation continue" },
            { emoji: "✨", text: "Excellence technique" },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">{value.emoji}</div>
              <div className="font-semibold text-gray-900">{value.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
