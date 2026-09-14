"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";

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
    { name: lang === "es" ? "Habilidades" : "Skills", href: "#skills" },
    { name: lang === "es" ? "Proyectos" : "Projects", href: "#projects" },
    { name: lang === "es" ? "Experiencia" : "Experience", href: "#experience" },
    { name: lang === "es" ? "Contacto" : "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "glass py-3 shadow-md" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Juan Carlos<span className="text-blue-500">.dev</span>
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
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
            className="md:hidden p-2 text-foreground rounded-lg border border-border cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-b border-border px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300">
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
        </div>
      )}
    </nav>
  );
}