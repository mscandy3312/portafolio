"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";

interface HeroProps {
  lang: "es" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang] || translations["es"];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 bg-white/5 dark:bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-8 inline-block"
      >
        <span className="text-sm font-medium tracking-wide text-foreground uppercase">
          {t.personalData.title}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground z-10 tracking-tight"
      >
        <span className="block">{t.personalData.name.split(" ")[0]} {t.personalData.name.split(" ")[1]}</span>
        <span className="block text-gradient mt-2">{t.personalData.name.split(" ").slice(2).join(" ")}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl z-10 font-light leading-relaxed"
      >
        {t.personalData.profile}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
        className="mt-12 z-10 flex gap-4 flex-col sm:flex-row"
      >
        <button
          onClick={() => {
            const section = document.getElementById("projects");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-4 bg-foreground text-background dark:bg-white dark:text-black rounded-full font-semibold
                     hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]
                     dark:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]"
        >
          {t.personalData.cta}
        </button>
        <button
          onClick={() => {
            const section = document.getElementById("contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-4 glass text-foreground rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 border border-slate-300/50 dark:border-white/10"
        >
          {lang === "es" ? "Contactar" : "Contact"}
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground to-transparent" />
      </motion.div>
    </section>
  );
}