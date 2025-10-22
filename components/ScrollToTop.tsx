"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ScrollToTop - Bouton pour remonter en haut de la page
 * Apparaît automatiquement après avoir scrollé vers le bas
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton après 400px de scroll
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300",
        "bg-gray-900 dark:bg-white text-white dark:text-gray-900",
        "hover:scale-110 hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      )}
      aria-label="Remonter en haut de la page"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
