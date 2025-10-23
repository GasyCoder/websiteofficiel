"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * About Section - Modern Minimalist Design
 */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t("about.feature.mission"),
      description: t("about.feature.mission_desc"),
    },
    {
      icon: Lightbulb,
      title: t("about.feature.innovation"),
      description: t("about.feature.innovation_desc"),
    },
    {
      icon: Users,
      title: t("about.feature.expertise"),
      description: t("about.feature.expertise_desc"),
    },
    {
      icon: Rocket,
      title: t("about.feature.results"),
      description: t("about.feature.results_desc"),
    },
  ];

  return (
    <section
      id="a-propos"
      ref={ref}
      className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0a0a0a]"
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
            {t("about.title")} <span className="text-gradient-violet">{t("about.title_highlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.description")
              .replace("{location}", `<span class="font-semibold text-orange-600 dark:text-orange-400">${t("about.location")}</span>`)
              .replace("{webDev}", `<span class="font-semibold text-blue-600 dark:text-blue-400">${t("about.web_dev")}</span>`)
              .replace("{innovation}", `<span class="font-semibold text-violet-600 dark:text-violet-400">${t("about.innovation")}</span>`)
              .split(/(<span[^>]*>.*?<\/span>)/g)
              .map((part, i) =>
                part.startsWith("<span") ? (
                  <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
                ) : (
                  part
                )
              )}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:border-gray-300 dark:hover:border-gray-700">
                <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
