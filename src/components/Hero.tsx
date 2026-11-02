"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";
import ThreeHeroScene from "@/components/ThreeHeroScene";
import { useGoogleAuth } from "@/context/GoogleAuthContext";
import { Sparkles, Star, Shield, ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  lang: "es" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang] || translations["es"];
  const { openLoginModal, user } = useGoogleAuth();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-24 pb-16"
    >
      {/* 3D Interactive Three.js WebGL Scene */}
      <ThreeHeroScene />

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating 3D Brand Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 inline-flex items-center gap-2.5 bg-white/10 dark:bg-slate-900/60 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 dark:border-white/10 mb-6 shadow-xl"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-xs font-bold tracking-widest text-foreground uppercase">
          JCAH • {t.personalData.title}
        </span>
      </motion.div>

      {/* Slogan pill from PDF */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="z-10 mb-6"
      >
        <span className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
          {lang === "es"
            ? "Desarrollamos, conectamos y hacemos crecer tus ideas"
            : "We develop, connect, and scale your ideas"}
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground z-10 tracking-tight max-w-5xl"
      >
        <span className="block">Juan Carlos</span>
        <span className="block text-gradient mt-1">Andrés Hernández</span>
      </motion.h1>

      {/* Subtitle / Bio */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl z-10 font-light leading-relaxed"
      >
        {t.personalData.profile}
      </motion.p>

      {/* Interactive Floating 3D Metric Badges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-8 z-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-3xl"
      >
        {/* Rating Pill */}
        <button
          onClick={() => {
            const el = document.getElementById("reviews");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 text-xs font-bold hover:scale-105 transition-all text-foreground cursor-pointer shadow-lg shadow-amber-500/5"
        >
          <div className="flex text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
          </div>
          <span>5.0 • {lang === "es" ? "Reseñas de Clientes" : "Client Reviews"}</span>
        </button>

        {/* Experience Pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-xs font-bold text-foreground shadow-lg shadow-blue-500/5">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>+7 {lang === "es" ? "Años de Experiencia" : "Years Experience"}</span>
        </div>

        {/* COMPRANET Security Pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-xs font-bold text-foreground shadow-lg shadow-emerald-500/5">
          <Shield className="w-3.5 h-3.5 text-emerald-500" />
          <span>{lang === "es" ? "Tu proyecto, en buenas manos" : "Your project, in good hands"}</span>
        </div>
      </motion.div>

      {/* Action CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.55, type: "spring", stiffness: 120 }}
        className="mt-10 z-10 flex gap-4 flex-col sm:flex-row w-full sm:w-auto px-4"
      >
        <button
          onClick={() => {
            const section = document.getElementById("services");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-4 bg-foreground text-background dark:bg-white dark:text-black rounded-full font-bold text-sm
                     hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/10 flex items-center justify-center gap-2"
        >
          <span>{lang === "es" ? "Ver Servicios & Tarifas" : "View Services & Pricing"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            if (!user) {
              openLoginModal();
            } else {
              const el = document.getElementById("reviews");
              el?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="px-8 py-4 rounded-full glass text-foreground font-bold text-sm hover:bg-white/10 transition-all duration-300 border border-blue-500/30 flex items-center justify-center gap-2 hover:scale-105"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
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
          <span>
            {user
              ? lang === "es"
                ? "Dejar mi Calificación"
                : "Leave My Rating"
              : lang === "es"
              ? "Calificar con Google"
              : "Rate with Google"}
          </span>
        </button>

        <a
          href="https://wa.me/525663852677?text=Hola%20Juan%20Carlos,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 rounded-full bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:bg-emerald-600/20 transition-all border border-emerald-500/30 flex items-center justify-center gap-2 hover:scale-105"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </motion.div>

      {/* 3D interactive hint */}
      <div className="z-10 mt-8 text-xs text-slate-400/80 hidden md:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>
          {lang === "es"
            ? "💡 Arrastra con el cursor para rotar el núcleo 3D interactivo"
            : "💡 Drag with your cursor to rotate the interactive 3D core"}
        </span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-foreground to-transparent" />
      </motion.div>
    </section>
  );
}