"use client";

import { Facebook, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";

/**
 * Footer component avec informations de contact et réseaux sociaux
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#a-propos" },
    { label: "Équipe", href: "#equipe" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JC</span>
              </div>
              <span className="text-lg font-bold text-white">
                Janga Consulting
              </span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 leading-relaxed max-w-md">
              Agence numérique basée à Mahajanga, Madagascar. Nous transformons
              vos idées en solutions digitales innovantes.
            </p>
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
              Innover pour l&apos;humain.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="mailto:contact@jangaconsulting.com"
                className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@jangaconsulting.com</span>
              </a>
              <a
                href="tel:+261349345251"
                className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+261 34 93 452 51</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Mahajanga, Madagascar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Suivez-nous</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 dark:text-gray-500 text-xs text-center md:text-left">
              © {currentYear} Janga Consulting. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
