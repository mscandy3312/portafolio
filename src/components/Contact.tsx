"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";

export default function Contact({ lang = "es" }: { lang?: "es" | "en" }) {
  const { personalData } = translations[lang];

  const phoneNumber = "525663852677";
  const message = lang === "es" 
    ? "Hola Juan Carlos, vi tu portafolio y me gustaría platicar sobre un proyecto." 
    : "Hello Juan Carlos, I saw your portfolio and I would like to talk about a project.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer id="contact" className="relative py-24 bg-background overflow-hidden border-t border-border">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            {lang === "es" ? "Disponible para contratación" : "Available for hire"}
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            {lang === "es" ? "Construyamos algo " : "Let's build something "}
            <span className="text-gradient">
              {lang === "es" ? "impactante." : "impactful."}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {lang === "es" 
              ? "¿Tienes un proyecto en mente o buscas un desarrollador Full Stack para tu equipo? Hablemos."
              : "Do you have a project in mind or looking for a Full Stack developer for your team? Let's talk."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href={`mailto:${personalData.email}`} 
            className="group glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center gap-4 border border-border hover:border-blue-500/30"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-3xl group-hover:bg-blue-500/20 transition-colors">
              📧
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
              <p className="text-slate-500 text-sm">{personalData.email}</p>
            </div>
          </motion.a>

          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center gap-4 border border-border hover:border-green-500/30"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-3xl group-hover:bg-green-500/20 transition-colors">
              💬
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">WhatsApp</h3>
              <p className="text-slate-500 text-sm">+52 56 6385 2677</p>
            </div>
          </motion.a>

          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center gap-4 border border-border hover:border-blue-700/30"
          >
            <div className="w-16 h-16 rounded-full bg-blue-700/10 flex items-center justify-center text-3xl group-hover:bg-blue-700/20 transition-colors">
              🔗
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">LinkedIn</h3>
              <p className="text-slate-500 text-sm">Juan Carlos Hernández</p>
            </div>
          </motion.a>
        </div>

        <div className="border-t border-border pt-8 text-sm text-slate-500 dark:text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} {personalData.name}.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/mscandy3312" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}