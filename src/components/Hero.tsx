"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { translations, CV_LINK } from "@/data/data";
import ThreeHeroScene from "@/components/ThreeHeroScene";
import { useGoogleAuth } from "@/context/GoogleAuthContext";
import {
  Download,
  ArrowRight,
  Mail,
  Check,
  ShieldCheck,
  Terminal,
  Cpu,
  Database,
  ExternalLink,
  Sparkles,
  Star,
  Shield,
  MessageCircle,
} from "lucide-react";

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
  const { openLoginModal, user } = useGoogleAuth();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jcarlos61200@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const stats = [
    {
      value: "+7",
      label: lang === "es" ? "Años de Experiencia" : "Years of Experience",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    },
    {
      value: "13+",
      label: lang === "es" ? "Proyectos Destacados" : "Featured Projects",
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
    },
    {
      value: "+100",
      label: lang === "es" ? "Incidencias/mes (COMPRANET)" : "Incidents/month (COMPRANET)",
      icon: <Terminal className="w-5 h-5 text-cyan-500" />,
    },
    {
      value: ".NET / C#",
      label: lang === "es" ? "Especialidad Principal" : "Core Specialty",
      icon: <Database className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-16 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* 3D Interactive Three.js WebGL Scene */}
      <ThreeHeroScene />

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating 3D Brand Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 inline-flex items-center gap-2.5 bg-white/10 dark:bg-slate-900/60 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 dark:border-white/10 mb-4 shadow-xl"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs md:text-sm font-semibold tracking-wide text-foreground">
          JCAH • {t.personalData.title}
        </span>
      </motion.div>

      {/* Slogan Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="z-10 mb-4"
      >
        <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
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
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground z-10 tracking-tight leading-[1.08] max-w-5xl"
      >
        <span>Juan Carlos Andrés</span>
        <span className="block text-gradient mt-1 font-extrabold">Hernández</span>
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
        className="mt-6 z-10 flex flex-wrap justify-center items-center gap-3 max-w-3xl"
      >
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

        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-xs font-bold text-foreground shadow-lg shadow-blue-500/5">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>+7 {lang === "es" ? "Años de Experiencia" : "Years Experience"}</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-xs font-bold text-foreground shadow-lg shadow-emerald-500/5">
          <Shield className="w-3.5 h-3.5 text-emerald-500" />
          <span>{lang === "es" ? "Tu proyecto, en buenas manos" : "Your project, in good hands"}</span>
        </div>
      </motion.div>

      {/* Action CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-8 z-10 flex flex-wrap justify-center items-center gap-3.5 w-full sm:w-auto px-4"
      >
        {/* VER CV 2026 */}
        {CV_LINK && (
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-xs sm:text-sm hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Ver CV 2026</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        )}

        {/* VER SERVICIOS */}
        <button
          onClick={() => {
            const section = document.getElementById("services");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3.5 bg-foreground text-background dark:bg-white dark:text-black rounded-full font-bold text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/10 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{lang === "es" ? "Ver Servicios & Tarifas" : "View Services & Pricing"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* CALIFICAR CON GOOGLE */}
        <button
          onClick={() => {
            if (!user) {
              openLoginModal();
            } else {
              const el = document.getElementById("reviews");
              el?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="px-6 py-3.5 rounded-full glass text-foreground font-bold text-xs sm:text-sm hover:bg-white/10 transition-all duration-300 border border-blue-500/30 flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
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
                ? "Dejar Calificación"
                : "Leave Rating"
              : lang === "es"
              ? "Calificar con Google"
              : "Rate with Google"}
          </span>
        </button>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/525663852677?text=Hola%20Juan%20Carlos,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 rounded-full bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm hover:bg-emerald-600/20 transition-all border border-emerald-500/30 flex items-center justify-center gap-2 hover:scale-105"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </motion.div>

      {/* 3D interactive hint */}
      <div className="z-10 mt-6 text-xs text-slate-400/80 hidden md:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>
          {lang === "es"
            ? "💡 Arrastra con el cursor para rotar el núcleo 3D interactivo"
            : "💡 Drag with your cursor to rotate the interactive 3D core"}
        </span>
      </div>

      {/* STATS BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="mt-10 w-full max-w-5xl z-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-2"
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

      {/* SOCIAL LINKS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="mt-6 z-10 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300"
      >
        <a
          href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass hover:text-blue-500 hover:border-blue-500/30 transition-all"
        >
          <LinkedinIcon className="w-4 h-4 text-blue-600" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/mscandy3312"
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
    </section>
  );
}