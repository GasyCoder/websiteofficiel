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
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Services Section - Modern Minimalist Design
 */
export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    {
      icon: Code2,
      title: t("services.web_dev"),
      description: t("services.web_dev_desc"),
    },
    {
      icon: Smartphone,
      title: t("services.mobile_apps"),
      description: t("services.mobile_apps_desc"),
    },
    {
      icon: PenTool,
      title: t("services.ui_ux"),
      description: t("services.ui_ux_desc"),
    },
    {
      icon: Database,
      title: t("services.tech_consulting"),
      description: t("services.tech_consulting_desc"),
    },
    {
      icon: Cloud,
      title: t("services.cloud_devops"),
      description: t("services.cloud_devops_desc"),
    },
    {
      icon: TrendingUp,
      title: t("services.digital_growth"),
      description: t("services.digital_growth_desc"),
    },
  ];

  return (
    <section
      id="services"
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
            {t("services.title")} <span className="text-gradient-blue">{t("services.title_highlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("services.subtitle").replace("{digitalNeeds}", "")}
            <span className="font-semibold text-violet-600 dark:text-violet-400">{t("services.digital_needs")}</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <service.icon className="w-6 h-6 text-white dark:text-gray-900" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 bg-gradient-to-br from-blue-50 via-violet-50 to-orange-50 dark:from-blue-950/20 dark:via-violet-950/20 dark:to-orange-950/20 rounded-3xl border-2 border-violet-200 dark:border-violet-800">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {t("services.cta.title").replace("{project}", "")}
              <span className="text-gradient">{t("services.cta.project")}</span>?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              {t("services.cta.description")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 text-white font-medium rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
            >
              {t("services.cta.button")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
