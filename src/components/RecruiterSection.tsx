"use client";

import { motion } from "framer-motion";
import { CV_LINK } from "@/data/data";
import { Briefcase, Download, ExternalLink, ShieldCheck, CheckCircle2, Building, Database, Code2 } from "lucide-react";

interface RecruiterSectionProps {
  lang: "es" | "en";
}

export default function RecruiterSection({ lang }: RecruiterSectionProps) {
  const isEs = lang === "es";

  const cards = [
    {
      stat: "+7",
      label: isEs ? "Años de experiencia" : "Years of experience",
      sub: isEs ? "Desarrollo y soporte técnico" : "Development & support",
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
    },
    {
      stat: "+100",
      label: isEs ? "Incidencias técnicas mensuales" : "Monthly technical incidents",
      sub: isEs ? "Atendidas y resueltas en COMPRANET" : "Resolved in COMPRANET",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
    },
    {
      stat: "2020–2024",
      label: isEs ? "Experiencia en COMPRANET" : "COMPRANET Experience",
      sub: isEs ? "Administración técnica y funcional" : "Technical & functional admin",
      icon: <Building className="w-5 h-5 text-indigo-500" />,
    },
    {
      stat: ".NET / C#",
      label: isEs ? "Desarrollo Backend & MVC" : "Backend & MVC Development",
      sub: isEs ? "ASP.NET Core y C# profesional" : "Professional C# & ASP.NET Core",
      icon: <Code2 className="w-5 h-5 text-purple-500" />,
    },
    {
      stat: "SQL Server",
      label: isEs ? "Bases de Datos Relacionales" : "Relational Databases",
      sub: isEs ? "Optimización de consultas y SPs" : "Query tuning & stored procedures",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
    },
    {
      stat: "React / Next.js",
      label: isEs ? "Frontend & Full Stack" : "Frontend & Full Stack",
      sub: isEs ? "Interfaces modernas e interactivas" : "Modern interactive interfaces",
      icon: <Code2 className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section className="py-20 px-6 relative bg-card-bg border-y border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span>{isEs ? "Aviso para Reclutadores" : "Recruiter Notice"}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {isEs ? "¿Buscas un desarrollador para tu equipo?" : "Looking for a developer for your team?"}
          </h2>
          
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-normal">
            {isEs
              ? "Soy Ingeniero en Sistemas Computacionales con experiencia en desarrollo de software, sistemas empresariales, soporte técnico-funcional y bases de datos."
              : "I am a Computer Systems Engineer with experience in software development, enterprise systems, technical-functional support, and databases."}
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-3xl border border-border hover:border-blue-500/30 transition-all flex flex-col justify-between group"
            >
              <div className="p-2.5 rounded-2xl bg-blue-500/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-1">
                  {item.stat}
                </div>
                <div className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DOWNLOAD CV BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-foreground">
              {isEs ? "Descarga mi Currículum Vitae Completo" : "Download My Full Curriculum Vitae"}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {isEs 
                ? "Consulta mi trayectoria detallada, habilidades técnicas y experiencia comprobable." 
                : "Review my detailed background, technical skills, and verified experience."}
            </p>
          </div>

          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{isEs ? "DESCARGAR CV 2026" : "DOWNLOAD CV 2026"}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
