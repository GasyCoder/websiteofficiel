"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

/**
 * Theme Toggle - Modern Minimalist Design
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" aria-label="Toggle theme" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center"
      aria-label="Toggle theme"
      title={theme === "light" ? "Dark mode" : "Light mode"}
    >
      <div className="relative w-4 h-4">
        <Moon
          className={`w-4 h-4 text-gray-600 dark:text-gray-400 absolute inset-0 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-50"
          }`}
        />
        <Sun
          className={`w-4 h-4 text-gray-600 dark:text-gray-400 absolute inset-0 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50"
          }`}
        />
      </div>
    </button>
  );
}
