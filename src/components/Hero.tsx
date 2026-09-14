"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { translations } from "@/data/data";
import { Sparkles, ArrowRight, Mail, Check, Layers, Award, Terminal, Cpu } from "lucide-react";

interface HeroProps {
  lang: "es" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang] || translations["es"];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jcarlos61200@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const stats = [
    {
      value: "9+",
      label: lang === "es" ? "Años de Experiencia (Desde 2017)" : "Years Experience (Since 2017)",
      icon: <Award className="w-5 h-5 text-blue-500" />,
    },
    {
      value: "13+",
      label: lang === "es" ? "Proyectos Entregados" : "Delivered Projects",
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
    },
    {
      value: "+100",
      label: lang === "es" ? "Incidencias/mes (COMPRANET)" : "Incidents/mo (COMPRANET)",
      icon: <Terminal className="w-5 h-5 text-cyan-500" />,
    },
    {
      value: "Java & Next.js",
      label: lang === "es" ? "Especialidad Full Stack" : "Full Stack Focus",
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-32 pb-20 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* STATUS BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 bg-blue-500/10 dark:bg-blue-500/15 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/20 mb-8 inline-flex items-center gap-2"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs md:text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-300">
          {t.personalData.title} • {lang === "es" ? "Disponible para proyectos" : "Available for Projects"}
        </span>
      </motion.div>

      {/* HEADLINE */}
      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground z-10 tracking-tight leading-[1.1]"
      >
        <span>{t.personalData.name.split(" ")[0]} {t.personalData.name.split(" ")[1]}</span>
        <span className="block text-gradient mt-2 font-extrabold">
          {t.personalData.name.split(" ").slice(2).join(" ")}
        </span>
      </motion.h1>

      {/* SUBTITLE PROFILE */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl z-10 font-normal leading-relaxed"
      >
        {t.personalData.profile}
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 z-10 flex flex-wrap justify-center items-center gap-4"
      >
        <button
          onClick={() => {
            const section = document.getElementById("projects");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold
                     hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span>{t.personalData.cta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleCopyEmail}
          className="px-6 py-4 glass-card text-foreground rounded-full font-semibold hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-500">{lang === "es" ? "¡Correo Copiado!" : "Copied Email!"}</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-blue-500" />
              <span>jcarlos61200@gmail.com</span>
            </>
          )}
        </button>
      </motion.div>

      {/* STATS BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 w-full max-w-5xl z-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-4"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center border border-border hover:border-blue-500/30 transition-all group"
          >
            <div className="p-2 rounded-xl bg-blue-500/10 mb-2 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}