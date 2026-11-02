"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useGoogleAuth } from "@/context/GoogleAuthContext";
import { Menu, X, Star, User, LogOut, Sun, Moon } from "lucide-react";

interface NavbarProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, openLoginModal, logout } = useGoogleAuth();

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
    { href: "#services", label: lang === "es" ? "Servicios" : "Services" },
    { href: "#projects", label: lang === "es" ? "Proyectos" : "Projects" },
    { href: "#experience", label: lang === "es" ? "Experiencia" : "Experience" },
    { href: "#skills", label: lang === "es" ? "Habilidades" : "Skills" },
    { href: "#reviews", label: lang === "es" ? "Reseñas ⭐" : "Reviews ⭐" },
    { href: "#contact", label: lang === "es" ? "Contacto" : "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border py-3 shadow-lg shadow-black/10"
          : "bg-background/50 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-black text-white text-sm tracking-wider">
              JC
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-black tracking-tight text-foreground leading-none">
              JCAH<span className="text-blue-500">.</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Ingeniería</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls & Google User Profile */}
        <div className="flex items-center gap-3">
          {/* Google Auth Button or User Avatar */}
          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-500 shadow-sm">
                <Image src={user.avatar} alt={user.name} fill unoptimized className="object-cover" />
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-foreground max-w-[100px] truncate">
                {user.name.split(" ")[0]}
              </span>
              <button
                onClick={logout}
                title={lang === "es" ? "Cerrar sesión" : "Sign Out"}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={openLoginModal}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-blue-500/30 text-foreground text-xs font-bold hover:bg-blue-500/10 transition-all hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>{lang === "es" ? "Acceder con Google" : "Google Sign-In"}</span>
            </button>
          )}

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-1.5 text-xs font-bold border border-border text-foreground rounded-full hover:bg-foreground/10 transition-colors"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass border border-border text-foreground hover:scale-110 transition-transform"
            title="Cambiar tema"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl glass border border-border text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass border-b border-border py-4 px-6 mt-3 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-500 py-1"
            >
              {link.label}
            </a>
          ))}

          {!user && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openLoginModal();
              }}
              className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20"
            >
              <span>{lang === "es" ? "Acceder con Google" : "Google Sign-In"}</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}