"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";
import { UserCheck, Code2, Database, ShieldCheck, Wrench, Cpu } from "lucide-react";

interface ProfileProps {
  lang: "es" | "en";
}

export default function Profile({ lang }: ProfileProps) {
  const t = translations[lang] || translations["es"];

  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      title: lang === "es" ? "Desarrollo .NET / C#" : ".NET / C# Development",
      desc: lang === "es" ? "ASP.NET Core, MVC, APIs RESTful y arquitectura limpia." : "ASP.NET Core, MVC, RESTful APIs, and clean architecture.",
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      title: lang === "es" ? "Gestión de SQL Server" : "SQL Server Management",
      desc: lang === "es" ? "Diseño de esquemas, procedimientos almacenados y optimización de consultas." : "Schema design, stored procedures, and query optimization.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-cyan-500" />,
      title: lang === "es" ? "Soporte Técnico-Funcional" : "Technical-Functional Support",
      desc: lang === "es" ? "Diagnóstico y atención de incidencias críticas de 2º nivel." : "Diagnostic and 2nd level critical incident resolution.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: lang === "es" ? "Sistemas Críticos" : "Critical Systems",
      desc: lang === "es" ? "Experiencia operativa en plataformas gubernamentales y empresariales." : "Operational experience in enterprise and government platforms.",
    },
  ];

  return (
    <section id="perfil" className="py-20 px-6 relative bg-background border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <UserCheck className="w-4 h-4 text-blue-500" />
            <span>{lang === "es" ? "Resumen Ejecutivo" : "Executive Summary"}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            {lang === "es" ? "Perfil " : "Professional "}
            <span className="text-gradient">
              {lang === "es" ? "Profesional" : "Profile"}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-border shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-4 border-blue-500 pl-4 py-1 bg-blue-500/5 rounded-r-xl font-medium text-foreground">
              {t.personalData.profileText1}
            </p>

            <p className="text-slate-600 dark:text-slate-300">
              {t.personalData.profileText2}
            </p>
          </div>

          {/* HIGHLIGHT CAPABILITIES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-border/50">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-4 rounded-2xl border border-border/60 flex items-start gap-3.5 hover:border-blue-500/30 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-blue-500/10 shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
