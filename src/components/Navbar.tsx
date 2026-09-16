"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Code2, Download, ExternalLink } from "lucide-react";
import { CV_LINK } from "@/data/data";

interface NavbarProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: lang === "es" ? "Inicio" : "Home", href: "#hero" },
    { name: lang === "es" ? "Perfil" : "Profile", href: "#perfil" },
    { name: lang === "es" ? "Experiencia" : "Experience", href: "#experiencia" },
    { name: lang === "es" ? "Especialidades" : "Specialties", href: "#especialidades" },
    { name: lang === "es" ? "Proyectos" : "Projects", href: "#proyectos" },
    { name: lang === "es" ? "Contacto" : "Contact", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground leading-tight">
              Juan Carlos Andrés<span className="text-blue-500">.dev</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
              Ingeniero en Sistemas
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* FEATURED CV BUTTON */}
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV 2026</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Cambiar idioma"
            className="px-3 py-1.5 text-xs font-bold border border-border text-foreground rounded-full hover:bg-blue-500/10 hover:border-blue-500/30 transition-all cursor-pointer"
          >
            {lang === "es" ? "EN 🇺🇸" : "ES 🇲🇽"}
          </button>
          
          <button 
            onClick={toggleTheme} 
            aria-label="Cambiar tema"
            className="p-2 text-foreground rounded-full hover:bg-foreground/5 border border-border/50 transition-all cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
            className="lg:hidden p-2 text-foreground rounded-lg border border-border cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass border-b border-border px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-foreground hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold rounded-xl bg-blue-600 text-white shadow-md cursor-pointer mt-4"
          >
            <Download className="w-4 h-4" />
            <span>Descargar CV 2026</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      )}
    </nav>
  );
}