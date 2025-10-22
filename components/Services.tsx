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

/**
 * Services Section - Modern Minimalist Design
 */
export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love",
    },
    {
      icon: Database,
      title: "Tech Consulting",
      description: "Strategic guidance for your tech stack",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and deployment",
    },
    {
      icon: TrendingUp,
      title: "Digital Growth",
      description: "Transform your business digitally",
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
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive solutions for your digital needs
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
          <div className="inline-flex flex-col items-center gap-6 p-12 bg-gray-50 dark:bg-[#1a1a1a] rounded-3xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Ready to start your project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Let&apos;s discuss how we can help bring your vision to life
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full transition-all hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
