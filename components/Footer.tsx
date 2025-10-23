"use client";

import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Footer - Modern Minimalist Design
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { label: t("nav.home"), href: "#accueil" },
    { label: t("nav.about"), href: "#a-propos" },
    { label: t("nav.team"), href: "#equipe" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-gray-900 font-bold text-sm">JC</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Janga Consulting
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contact@jangaconsulting.com"
                className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@jangaconsulting.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Mahajanga, Madagascar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-white rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <social.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              © {currentYear} Janga Consulting. {t("footer.rights")}
            </p>
            <div className="flex gap-6 text-xs">
              <a
                href="/politique-de-confidentialite"
                className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="/conditions-utilisation"
                className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Conditions d&apos;utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
