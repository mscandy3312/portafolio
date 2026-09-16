"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { translations, CV_LINK } from "@/data/data";
import { Download, ArrowRight, Mail, Check, ShieldCheck, Terminal, Cpu, Database, ExternalLink } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

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
      value: "+7",
      label: lang === "es" ? "Años de Experiencia Profesional" : "Years Professional Experience",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    },
    {
      value: "+100",
      label: lang === "es" ? "Incidencias/mes en COMPRANET" : "Monthly Incidents (COMPRANET)",
      icon: <Terminal className="w-5 h-5 text-cyan-500" />,
    },
    {
      value: "2020–2024",
      label: lang === "es" ? "Experiencia SHCP / SFP COMPRANET" : "SHCP / SFP COMPRANET Record",
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
    },
    {
      value: "C# / .NET & SQL",
      label: lang === "es" ? "Especialidad Principal" : "Primary Specialty",
      icon: <Database className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-32 pb-16 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* STATUS BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 bg-blue-500/10 dark:bg-blue-500/15 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/20 mb-6 inline-flex items-center gap-2"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs md:text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-300">
          {t.personalData.title} • {lang === "es" ? "Disponible para Oportunidades Profesionales" : "Available for Professional Opportunities"}
        </span>
      </motion.div>

      {/* NAME HEADLINE */}
      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground z-10 tracking-tight leading-[1.1]"
      >
        <span>Juan Carlos Andrés</span>
        <span className="block text-gradient mt-1 font-extrabold">
          Hernández
        </span>
      </motion.h1>

      {/* SUBTITLE & HEADLINE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-4 z-10 text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight"
      >
        {t.personalData.subtitle}
      </motion.div>

      {/* DESCRIPTIVE PHRASES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl z-10 font-normal leading-relaxed space-y-3"
      >
        <p className="font-medium text-slate-800 dark:text-slate-200">
          "{t.personalData.description1}"
        </p>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          "{t.personalData.description2}"
        </p>
      </motion.div>

      {/* MAIN ACTION BUTTONS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-8 z-10 flex flex-wrap justify-center items-center gap-4"
      >
        {/* VER CV 2026 */}
        <a
          href={CV_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-sm
                     hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/20"
        >
          <Download className="w-4 h-4" />
          <span>{t.personalData.ctaCv}</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>

        {/* VER PROYECTOS */}
        <button
          onClick={() => {
            const section = document.getElementById("proyectos");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-7 py-4 glass-card text-foreground rounded-full font-bold text-sm hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span>{t.personalData.ctaProjects}</span>
          <ArrowRight className="w-4 h-4 text-blue-500" />
        </button>

        {/* CONTACTARME */}
        <button
          onClick={() => {
            const section = document.getElementById("contacto");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-7 py-4 glass-card text-foreground rounded-full font-bold text-sm hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <Mail className="w-4 h-4 text-indigo-500" />
          <span>{t.personalData.ctaContact}</span>
        </button>
      </motion.div>

      {/* VISIBLE SOCIAL LINKS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-6 z-10 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300"
      >
        <a
          href={t.personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass hover:text-blue-500 hover:border-blue-500/30 transition-all"
        >
          <LinkedinIcon className="w-4 h-4 text-blue-600" />
          <span>LinkedIn</span>
        </a>

        <a
          href={t.personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass hover:text-purple-500 hover:border-purple-500/30 transition-all"
        >
          <GithubIcon className="w-4 h-4 text-purple-500" />
          <span>GitHub</span>
        </a>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass hover:text-emerald-500 hover:border-emerald-500/30 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-500">{lang === "es" ? "¡Correo Copiado!" : "Copied Email!"}</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-cyan-500" />
              <span>jcarlos61200@gmail.com</span>
            </>
          )}
        </button>
      </motion.div>

      {/* STATS BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="mt-14 w-full max-w-5xl z-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-2"
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