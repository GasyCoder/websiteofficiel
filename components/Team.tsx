"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Team Section - Modern Minimalist Design
 */
export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Joël",
      role: "CEO & Founder",
      avatar: "🎯",
    },
    {
      name: "Florent Bezara",
      role: "Tech Director",
      avatar: "💻",
    },
    {
      name: "Frédo Manantsaina",
      role: "Tech Advisor",
      avatar: "🔧",
    },
    {
      name: "Emelien Rakotobe",
      role: "Lead Manager",
      avatar: "🚀",
    },
    {
      name: "Billy Laurant",
      role: "Financial Director",
      avatar: "📊",
    },
    {
      name: "Eliot",
      role: "Full-Stack Dev",
      avatar: "⚡",
    },
  ];

  return (
    <section
      id="equipe"
      ref={ref}
      className="py-16 sm:py-20 bg-white dark:bg-[#121212]"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {t("team.title")} <span className="text-gradient-orange">{t("team.title_highlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-orange-600 dark:text-orange-400">{t("team.subtitle_highlight")}</span> {t("team.subtitle_text")}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:border-gray-300 dark:hover:border-gray-700">
                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center text-3xl transition-transform group-hover:scale-110">
                    {member.avatar}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {member.role}
                  </p>

                  {/* Social */}
                  <button
                    className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-white flex items-center justify-center transition-all group/btn"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/btn:text-white dark:group-hover/btn:text-gray-900 transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
