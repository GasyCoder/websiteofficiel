"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Contact Section - Modern Minimalist Design
 */
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "contact@jangaconsulting.com",
      href: "mailto:contact@jangaconsulting.com",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+261 34 93 452 51",
      href: "tel:+261349345251",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: "Mahajanga, Madagascar",
      href: "https://www.google.com/maps/search/?api=1&query=Mahajanga,Madagascar",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contact.title")} <span className="text-gradient">{t("contact.title_highlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("contact.subtitle").replace("{letsChat}", "")}
            <span className="font-semibold text-violet-600 dark:text-violet-400">{t("contact.lets_chat")}</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              target={info.icon === MapPin ? "_blank" : undefined}
              rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 transition-all hover:border-gray-300 dark:hover:border-gray-700"
            >
              <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <info.icon className="w-6 h-6 text-white dark:text-gray-900" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send us a message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted! In production, this will be connected to a backend.");
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 dark:bg-[#121212] dark:text-white rounded-lg focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-500 focus:border-transparent transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 dark:bg-[#121212] dark:text-white rounded-lg focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-500 focus:border-transparent transition-all outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 dark:bg-[#121212] dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 dark:bg-[#121212] dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 text-white font-medium rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
