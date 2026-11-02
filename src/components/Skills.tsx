"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";
import { Cpu, Server, Database, Shield, Smartphone, Terminal, Code2 } from "lucide-react";

interface SkillsProps {
  lang: "es" | "en";
}

const skillCategories = [
  {
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    name: { es: "Frontend Moderno", en: "Modern Frontend" },
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Framer Motion", "Three.js / WebGL"],
  },
  {
    icon: <Server className="w-5 h-5 text-indigo-500" />,
    name: { es: "Backend & Arquitectura", en: "Backend & Architecture" },
    skills: [".NET (C#)", "ASP.NET Core", "Laravel (PHP)", "Node.js", "Arquitectura MVC", "API RESTful"],
  },
  {
    icon: <Database className="w-5 h-5 text-cyan-500" />,
    name: { es: "Bases de Datos & Cloud", en: "Databases & Cloud" },
    skills: ["SQL Server", "MySQL", "Prisma ORM", "Firebase / Firestore", "AWS", "phpMyAdmin"],
  },
  {
    icon: <Shield className="w-5 h-5 text-emerald-500" />,
    name: { es: "Infraestructura, Redes & Seguridad", en: "Networks, CCTV & Security" },
    skills: ["Cableado Estructurado Cat6", "CCTV / DVR / NVR", "Switches & Routers", "Administración COMPRANET", "Soporte y Hardware"],
  },
];

export default function Skills({ lang }: SkillsProps) {
  return (
    <section id="skills" className="py-28 px-6 relative bg-background overflow-hidden border-t border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {lang === "es" ? "Stack Tecnológico" : "Tech Stack"}
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tight">
            {lang === "es" ? "Habilidades & " : "Skills & "}
            <span className="text-gradient">
              {lang === "es" ? "Tecnologías" : "Technologies"}
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === "es"
              ? "Dominio técnico integral: desde el código de aplicaciones web escalables hasta la instalación de redes y servidores críticos."
              : "Comprehensive technical proficiency: from scalable web code to mission-critical servers and structured networking."}
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass rounded-3xl p-7 md:p-8 border border-border hover:border-blue-500/30 transition-all shadow-xl group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-white/5 dark:bg-white/10 border border-white/10">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {cat.name[lang]}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold bg-white/5 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/60 text-foreground hover:border-blue-500/50 hover:text-blue-500 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
