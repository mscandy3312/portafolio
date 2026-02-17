"use client";
import { useState, useEffect } from "react";

interface NavbarProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${
      scrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    } py-3`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-slate-900 dark:text-white">JC<span className="text-blue-600">.</span></div>
        
        <div className="flex items-center gap-3">
          {/* BOTÓN DE IDIOMA ÚNICO */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-1 text-xs font-bold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* BOTÓN DE TEMA ÚNICO */}
          <button onClick={toggleTheme} className="p-2 text-lg">
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}