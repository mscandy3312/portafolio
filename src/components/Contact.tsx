"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { translations, CV_LINK } from "@/data/data";
import { Mail, Phone, Send, Copy, Check, ArrowUp, MessageSquare, Sparkles, Download, ExternalLink, Briefcase } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact({ lang = "es" }: { lang?: "es" | "en" }) {
  const isEs = lang === "es";
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sentSuccess, setSentSuccess] = useState(false);

  const phoneNumber = "525663852677";
  const defaultWhatsAppMsg = isEs 
    ? "Hola Juan Carlos, estuve viendo tu portafolio profesional y me gustaría platicar sobre una oportunidad laboral o proyecto." 
    : "Hello Juan Carlos, I reviewed your professional portfolio and would like to discuss a job opportunity or project.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultWhatsAppMsg)}`;

  const targetedPositions = [
    "Desarrollador .NET / C#",
    "Desarrollador Full Stack",
    "Analista de Sistemas",
    "Desarrollador Web",
    "Soporte técnico-funcional / aplicaciones",
    "Especialista en SQL Server",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jcarlos61200@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    const mailtoSubject = encodeURIComponent(`Contacto Portafolio: Oportunidad de ${formState.name || "Reclutador"}`);
    const mailtoBody = encodeURIComponent(`Nombre: ${formState.name}\nCorreo: ${formState.email}\n\nMensaje:\n${formState.message}`);
    window.location.href = `mailto:jcarlos61200@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="relative py-24 bg-background overflow-hidden border-t border-border">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            {isEs ? "Disponible para contratación inmediata & proyectos" : "Available for immediate hire & projects"}
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">
            {isEs ? "¿Tienes una " : "Have a "}
            <span className="text-gradient">
              {isEs ? "oportunidad profesional?" : "professional opportunity?"}
            </span>
          </h2>

          {/* TARGET POSITIONS BADGES */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-500" />
              {isEs ? "Estoy interesado en oportunidades como:" : "I am interested in roles as:"}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {targetedPositions.map((pos, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300"
                >
                  {pos}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* QUICK BUTTONS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
        >
          {/* ENVIAR CORREO */}
          <a
            href="mailto:jcarlos61200@gmail.com"
            className="px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{isEs ? "Enviar Correo" : "Send Email"}</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-full glass-card hover:border-blue-600/40 text-foreground font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-600" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/mscandy3312"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-full glass-card hover:border-purple-500/40 text-foreground font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-purple-500" />
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* DESCARGAR CV */}
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-full glass-card hover:border-emerald-500/40 text-foreground font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-500" />
            <span>{isEs ? "Descargar CV 2026" : "Download CV 2026"}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </motion.div>

        {/* MAIN CONTACT GRID: CARDS AND DIRECT FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* CONTACT CARDS (5 COLUMNS) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* EMAIL CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-3xl border border-border hover:border-blue-500/30 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Email</h3>
                  <a href="mailto:jcarlos61200@gmail.com" className="text-sm sm:text-base font-bold text-foreground hover:text-blue-500 transition-colors">
                    jcarlos61200@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                title={isEs ? "Copiar correo" : "Copy email"}
                className="p-2.5 rounded-xl glass hover:bg-blue-500/10 text-slate-500 hover:text-blue-500 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* WHATSAPP CARD */}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-3xl border border-border hover:border-emerald-500/40 transition-all group flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">WhatsApp</h3>
                <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                  +52 56 6385 2677
                </p>
              </div>
            </motion.a>

            {/* LINKEDIN CARD */}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-3xl border border-border hover:border-blue-600/40 transition-all group flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">LinkedIn</h3>
                <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-blue-600 transition-colors">
                  Juan Carlos Hernández
                </p>
              </div>
            </motion.a>

            {/* GITHUB CARD */}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="https://github.com/mscandy3312"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-3xl border border-border hover:border-purple-500/40 transition-all group flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">GitHub</h3>
                <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-purple-500 transition-colors">
                  mscandy3312
                </p>
              </div>
            </motion.a>
          </div>

          {/* QUICK MESSAGE FORM (7 COLUMNS) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-border flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                {isEs ? "Enviar Mensaje Directo" : "Send Direct Message"}
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                {isEs 
                  ? "Escribe tus detalles y se abrirá tu cliente de correo listo para enviar a jcarlos61200@gmail.com."
                  : "Fill in your details and it will launch your email client ready to send to jcarlos61200@gmail.com."}
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                    {isEs ? "Tu Nombre / Empresa" : "Your Name / Company"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isEs ? "Ej. María García — Reclutadora IT" : "e.g. Jane Doe — IT Recruiter"}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-border text-sm text-foreground focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                    {isEs ? "Tu Correo Electrónico" : "Your Email Address"}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@empresa.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-border text-sm text-foreground focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                    {isEs ? "Detalles de la Vacante o Proyecto" : "Job Role or Project Details"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={isEs ? "Detalla el puesto, requerimientos o propuesta laboral..." : "Describe the role, tech stack or project..."}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-border text-sm text-foreground focus:outline-none focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isEs ? "Enviar a jcarlos61200@gmail.com" : "Send to jcarlos61200@gmail.com"}</span>
                </button>

                {sentSuccess && (
                  <p className="text-center text-xs text-emerald-500 font-semibold pt-2">
                    {isEs ? "¡Cliente de correo iniciado correctamente!" : "Email client launched successfully!"}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER BAR */}
        <div className="border-t border-border pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Juan Carlos Andrés Hernández — Ingeniero en Sistemas Computacionales. {isEs ? "Todos los derechos reservados." : "All rights reserved."}
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/mscandy3312" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-xs font-semibold">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-xs font-semibold">
              LinkedIn
            </a>
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors text-xs font-semibold">
              CV 2026
            </a>
            
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