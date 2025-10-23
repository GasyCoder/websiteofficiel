"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Hero Section - Modern Minimalist Design
 * Inspired by SpaceX & Google
 */
export default function Hero() {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = t("hero.tagline");

  useEffect(() => {
    setTypedText("");
    setIsTypingComplete(false);
  }, [fullText]);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText]);
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#121212]"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 dark:to-black/20" />

      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
            >
              <span className="block text-gray-900 dark:text-white">
                {t("hero.company").split(" ")[0]} <span className="text-gradient">{t("hero.company").split(" ")[1]}</span>
              </span>
            </motion.h1>

            {/* Tagline with typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem]"
            >
              <span>{typedText}</span>
              {!isTypingComplete && (
                <span className="animate-pulse text-gradient">|</span>
              )}
            </motion.div>

            {/* Short description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 text-white font-medium rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
              >
                {t("hero.cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-gray-900 dark:text-white font-medium rounded-full border-2 border-violet-600 dark:border-violet-500 transition-all hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white hover:shadow-lg hover:shadow-violet-500/50"
              >
                {t("hero.view_services")}
              </a>
            </motion.div>

            {/* Minimal stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-12 flex items-center justify-center gap-12 text-sm"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">6+</div>
                <div className="text-gray-500 dark:text-gray-500 mt-1">{t("hero.stats.experts")}</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-800" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-gray-500 dark:text-gray-500 mt-1">{t("hero.stats.projects")}</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-800" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-gray-500 dark:text-gray-500 mt-1">{t("hero.stats.satisfaction")}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-400 dark:via-gray-600 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
