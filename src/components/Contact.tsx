"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";
import TiltCard from "@/components/TiltCard";
import { Mail, MessageCircle, MapPin, Shield } from "lucide-react";

function LinkedInIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Contact({ lang = "es" }: { lang?: "es" | "en" }) {
  const { personalData } = translations[lang];

  const phoneNumber = "525663852677";
  const message =
    lang === "es"
      ? "Hola Juan Carlos, vi tu portafolio y catálogo de servicios y me gustaría cotizar un proyecto."
      : "Hello Juan Carlos, I saw your portfolio and service catalog and I would like to discuss a project.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer id="contact" className="relative py-28 bg-background overflow-hidden border-t border-border">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            {lang === "es" ? "Disponible para Nuevos Proyectos" : "Available for New Projects"}
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight">
            {lang === "es" ? "¡Hagamos realidad " : "Let's bring your "}
            <span className="text-gradient">
              {lang === "es" ? "tu proyecto!" : "project to life!"}
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === "es"
              ? "Desde una página web o tienda en línea hasta cableado estructurado y videovigilancia. Todo en un solo lugar con soporte integral."
              : "From a website or online store to structured network cabling and CCTV security. All in one place with end-to-end support."}
          </p>
        </motion.div>

        {/* 3D Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {/* WhatsApp */}
          <TiltCard intensity={12} glare={true} className="h-full">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full group glass p-7 rounded-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 border border-border hover:border-emerald-500/40 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">WhatsApp</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">
                  (56) 6385-2677
                </p>
                <span className="text-[11px] text-emerald-500 font-bold block mt-1">
                  {lang === "es" ? "Respuesta Inmediata" : "Instant Reply"}
                </span>
              </div>
            </motion.a>
          </TiltCard>

          {/* Email */}
          <TiltCard intensity={12} glare={true} className="h-full">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href={`mailto:${personalData.email}`}
              className="h-full group glass p-7 rounded-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 border border-border hover:border-blue-500/40 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">Email</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium break-all">
                  {personalData.email}
                </p>
                <span className="text-[11px] text-blue-500 font-bold block mt-1">
                  {lang === "es" ? "Cotizaciones Formales" : "Formal Quotes"}
                </span>
              </div>
            </motion.a>
          </TiltCard>

          {/* Location */}
          <TiltCard intensity={12} glare={true} className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-full group glass p-7 rounded-3xl flex flex-col items-center justify-center text-center gap-4 border border-border hover:border-purple-500/40 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">
                  {lang === "es" ? "Ubicación" : "Location"}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">
                  Lomas de Chicoloapan, CP 56380, CDMX / Edo. Méx.
                </p>
                <span className="text-[11px] text-purple-500 font-bold block mt-1">
                  {lang === "es" ? "Atención en Sitio y Remota" : "On-site & Remote"}
                </span>
              </div>
            </motion.div>
          </TiltCard>

          {/* LinkedIn */}
          <TiltCard intensity={12} glare={true} className="h-full">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full group glass p-7 rounded-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 border border-border hover:border-blue-700/40 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-700/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-700/20 group-hover:scale-110 transition-all">
                <LinkedInIcon className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">LinkedIn</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                  Juan Carlos Hernández
                </p>
                <span className="text-[11px] text-blue-600 font-bold block mt-1">
                  {lang === "es" ? "Perfil Profesional" : "Professional Profile"}
                </span>
              </div>
            </motion.a>
          </TiltCard>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-border pt-8 text-xs text-slate-500 dark:text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">JCAH</span>
            <span>•</span>
            <span>
              © {new Date().getFullYear()} {personalData.name}.
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-blue-500">
              {lang === "es" ? "Tu proyecto, en buenas manos" : "Your project, in good hands"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mscandy3312"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-blue-500" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}