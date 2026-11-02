"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { translations, CV_LINK } from "@/data/data";
import TiltCard from "@/components/TiltCard";
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  ArrowUp,
  MessageCircle,
  Sparkles,
  Download,
  ExternalLink,
  Briefcase,
  MapPin,
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

export default function Contact({ lang = "es" }: { lang?: "es" | "en" }) {
  const isEs = lang === "es";
  const { personalData } = translations[lang] || translations["es"];
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sentSuccess, setSentSuccess] = useState(false);

  const phoneNumber = "525663852677";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    isEs
      ? "Hola Juan Carlos, vi tu portafolio y catálogo de servicios y me gustaría platicar sobre un proyecto."
      : "Hello Juan Carlos, I reviewed your portfolio and service catalog and would like to discuss a project."
  )}`;

  const targetedPositions = [
    "Desarrollador .NET / C#",
    "Desarrollador Full Stack",
    "Analista de Sistemas",
    "Programador SQL Server",
    "Administrador COMPRANET",
    "Instalación de Redes & CCTV",
    "Soporte Técnico Especializado",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jcarlos61200@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    const mailtoSubject = encodeURIComponent(`Contacto Portafolio: Propuesta de ${formState.name || "Cliente / Reclutador"}`);
    const mailtoBody = encodeURIComponent(`Nombre: ${formState.name}\nCorreo: ${formState.email}\n\nMensaje:\n${formState.message}`);
    window.location.href = `mailto:jcarlos61200@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative py-28 bg-background overflow-hidden border-t border-border">
      <div id="contacto" className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            {isEs ? "Disponible para Nuevos Proyectos y Oportunidades" : "Available for New Projects & Opportunities"}
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight">
            {isEs ? "¡Hagamos realidad " : "Let's bring your "}
            <span className="text-gradient">
              {isEs ? "tu proyecto!" : "project to life!"}
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-light">
            {isEs
              ? "Desde desarrollo de sistemas web, cableado estructurado y videovigilancia hasta integración de software crítico. Todo en un solo lugar con profesionalismo garantizado."
              : "From web applications, structured cabling, and CCTV systems to mission-critical software integration. All in one place with guaranteed quality."}
          </p>

          {/* TARGET POSITIONS BADGES */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-500" />
              {isEs ? "Servicios y Puestos Clave:" : "Key Services & Roles:"}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {targetedPositions.map((pos, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400"
                >
                  {pos}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
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
                  {isEs ? "Respuesta Inmediata" : "Instant Reply"}
                </span>
              </div>
            </motion.a>
          </TiltCard>

          {/* Email */}
          <TiltCard intensity={12} glare={true} className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full group glass p-7 rounded-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 border border-border hover:border-blue-500/40 shadow-xl relative"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:jcarlos61200@gmail.com"
                  className="text-slate-500 dark:text-slate-400 text-xs font-medium hover:text-blue-500 transition-colors break-all"
                >
                  jcarlos61200@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="mt-2 text-[11px] text-blue-500 font-bold block mx-auto underline cursor-pointer"
                >
                  {copied ? (isEs ? "¡Copiado!" : "Copied!") : (isEs ? "Copiar Correo" : "Copy Email")}
                </button>
              </div>
            </motion.div>
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
                  {isEs ? "Ubicación" : "Location"}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">
                  Lomas de Chicoloapan, CP 56380, CDMX / Edo. Méx.
                </p>
                <span className="text-[11px] text-purple-500 font-bold block mt-1">
                  {isEs ? "Presencial y Remoto" : "On-site & Remote"}
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
                <LinkedinIcon className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">LinkedIn</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                  Juan Carlos Hernández
                </p>
                <span className="text-[11px] text-blue-600 font-bold block mt-1">
                  {isEs ? "Perfil Profesional" : "Professional Profile"}
                </span>
              </div>
            </motion.a>
          </TiltCard>
        </div>

        {/* QUICK DIRECT MESSAGE FORM */}
        <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl border border-border mb-16 shadow-xl">
          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span>{isEs ? "Enviar Mensaje Rápido" : "Send Quick Message"}</span>
          </h3>
          <p className="text-xs text-slate-500 text-center mb-6">
            {isEs 
              ? "Envía tus datos y se abrirá tu cliente de correo listo para enviar a jcarlos61200@gmail.com."
              : "Submit your details to launch your email client pre-addressed to jcarlos61200@gmail.com."}
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={isEs ? "Tu nombre" : "Your name"}
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                required
                placeholder={isEs ? "Tu correo electrónico" : "Your email"}
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              rows={3}
              required
              placeholder={isEs ? "¿En qué puedo ayudarte? (Proyecto, vacante, cotización...)" : "How can I help you? (Project, job offer, quote...)"}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl glass border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isEs ? "Enviar Mensaje Directo" : "Send Direct Message"}</span>
            </button>
          </form>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="border-t border-border pt-8 text-xs text-slate-500 dark:text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">JCAH</span>
            <span>•</span>
            <span>
              © {new Date().getFullYear()} {personalData.name}.
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-blue-500">
              {isEs ? "Tu proyecto, en buenas manos" : "Your project, in good hands"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mscandy3312"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" />
              <span>LinkedIn</span>
            </a>
            {CV_LINK && (
              <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors text-xs font-semibold">
                CV 2026
              </a>
            )}

            <button
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="p-2 rounded-full glass hover:bg-blue-500/20 text-foreground transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}