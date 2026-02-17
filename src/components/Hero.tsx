"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";

interface HeroProps {
  lang: "es" | "en";
  // Quitamos setLang de aquí porque ya lo controla el Navbar
}

export default function Hero({ lang }: HeroProps) {
  // Obtenemos las traducciones según el idioma actual
  const t = translations[lang] || translations["es"];

  return (
    <section 
      id="hero" 
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative bg-background transition-colors duration-300"
    >
      {/* ELIMINAMOS EL PANEL DE HERRAMIENTAS (BOTONES) DE AQUÍ 
          PORQUE YA ESTÁN EN TU NAVBAR 
      */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white"
      >
        {t.personalData.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl"
      >
        {t.personalData.profile}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10"
      >
        <button
          onClick={() => {
            const section = document.getElementById("projects");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold
                     hover:bg-blue-700 transition-all hover:scale-105
                     shadow-lg shadow-blue-500/30"
        >
          {t.personalData.cta}
        </button>
      </motion.div>
    </section>
  );
}