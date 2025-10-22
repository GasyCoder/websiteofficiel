"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Eviter le flash pendant le SSR
  if (!mounted) {
    return (
      <div className="w-8 h-8" aria-label="Toggle theme">
        <div className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-8 h-8 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
      title={theme === "light" ? "Mode sombre" : "Mode clair"}
    >
      <div className="relative w-4 h-4">
        <Moon
          className={`w-4 h-4 text-gray-600 dark:text-gray-300 absolute inset-0 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-50"
          }`}
        />
        <Sun
          className={`w-4 h-4 text-gray-600 dark:text-gray-300 absolute inset-0 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50"
          }`}
        />
      </div>
    </button>
  );
}
