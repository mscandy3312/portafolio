"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";
import { Briefcase, Calendar, CheckCircle2, Building2, Award, Star, Flame } from "lucide-react";

export default function Experience({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = translations[lang] || translations["es"];

  const experienceData = [
    {
      id: "compranet",
      featured: true,
      company: "SHCP / SFP",
      system: "Sistema de Contrataciones Públicas COMPRANET",
      title: lang === "es" ? "Administrador y programador interno" : "Internal Administrator & Programmer",
      sub: "SHCP / SFP – Sistema de Contrataciones Públicas COMPRANET",
      period: "2020 – 2024",
      highlightMetric: "+100 incidencias técnicas mensuales",
      highlightText: lang === "es" 
        ? "Resolución de más de 100 incidencias técnicas mensuales, contribuyendo a la continuidad operativa de COMPRANET."
        : "Resolution of over 100 monthly technical incidents, contributing to COMPRANET's operational continuity.",
      tags: ["SQL Server", ".NET / C#", "Soporte Nivel 2", "Mesa de Ayuda", "Pruebas Funcionales", "Lógica de Negocio"],
      items: lang === "es" ? [
        "Administración técnica y funcional del Sistema de Contrataciones Públicas COMPRANET a nivel federal.",
        "Participación en la operación, monitoreo, mantenimiento y mejora continua del sistema.",
        "Soporte técnico-funcional de segundo nivel y atención especializada a dependencias y entidades usuarias.",
        "Atención de requerimientos mediante mesa de ayuda, atención telefónica y correo electrónico.",
        "Análisis, atención y resolución oportuna de incidencias técnicas y funcionales.",
        "Validación de procesos, seguimiento de requerimientos internos y pruebas funcionales.",
        "Uso, consulta y validación rigurosa de información y lógica de negocio en SQL Server.",
        "Colaboración directa con equipos internos de TI para mantener la continuidad operativa."
      ] : [
        "Technical and functional administration of the COMPRANET Federal Procurement System.",
        "Participation in operations, monitoring, maintenance, and continuous platform improvement.",
        "Second-level technical-functional support and specialized assistance for federal agencies.",
        "Help desk, telephone, and email incident management and ticket resolution.",
        "Analysis, investigation, and resolution of technical and functional incidents.",
        "Process validation, internal requirement tracking, and functional test execution.",
        "Use, querying, and data validation in SQL Server to verify business logic.",
        "Direct collaboration with internal IT teams to maintain operation continuity."
      ]
    },
    {
      id: "valora",
      featured: false,
      company: "Valora IT",
      system: "Desarrollo .NET & SQL Server",
      title: lang === "es" ? "Programador .NET" : ".NET Programmer",
      sub: "Valora IT | 2019 – 2020",
      period: "2019 – 2020",
      highlightMetric: "Optimización SQL 70%",
      highlightText: lang === "es"
        ? "Optimización de consultas en SQL Server que redujeron los tiempos de respuesta del sistema en un 70%."
        : "SQL Server query optimization that reduced system response times by 70%.",
      tags: [".NET / C#", "ASP.NET Core", "Arquitectura MVC", "SQL Server", "Procedimientos Almacenados"],
      items: lang === "es" ? [
        "Desarrollo de aplicaciones web y de escritorio utilizando .NET / C# y ASP.NET Core bajo arquitectura MVC.",
        "Desarrollo de aplicaciones web para el área de Marketing y desarrollo del sistema 'Afores'.",
        "Desarrollo de sistemas administrativos para control de horarios e incidencias de personal.",
        "Diseño, conexión y administración de bases de datos relacionales SQL Server.",
        "Creación de consultas complejas, procedimientos almacenados y validación de datos."
      ] : [
        "Development of web and desktop applications using .NET / C# and ASP.NET Core under MVC architecture.",
        "Development of web applications for Marketing and core 'Afores' system.",
        "Development of administrative systems for schedule control and incident tracking.",
        "Design, connection, and administration of relational SQL Server databases.",
        "Creation of complex queries, stored procedures, and data validation."
      ]
    },
    {
      id: "freelance",
      featured: false,
      company: "Freelance",
      system: "Proyectos Web, Móviles & Empresariales",
      title: lang === "es" ? "Desarrollador Full-Stack Freelance" : "Full-Stack Developer Freelance",
      sub: "Proyectos Independientes | 2024 – Actualidad",
      period: "2024 – Actualidad",
      highlightMetric: "Desarrollo Full-Stack",
      highlightText: lang === "es"
        ? "Desarrollo de soluciones web, móviles y empresariales para proyectos independientes, incluyendo modernización de sistemas, optimización de servidores y desarrollo de aplicaciones."
        : "Development of web, mobile, and enterprise solutions for independent ventures, including system modernization, server optimization, and app development.",
      tags: ["Next.js", "React Native", "Kotlin", "AWS", "Naxine", "AstroMatch", "Design Medicine"],
      items: lang === "es" ? [
        "Desarrollo de soluciones web modernas (Next.js, React, Tailwind CSS).",
        "Desarrollo de aplicaciones móviles independientes (React Native / Kotlin).",
        "Modernización de sistemas empresariales, optimización de servidores e integración con AWS.",
        "Desarrollo de plataformas destacadas: Naxine Enterprise SaaS, AstroMatch y Design Medicine."
      ] : [
        "Development of modern web solutions (Next.js, React, Tailwind CSS).",
        "Independent mobile app engineering (React Native / Kotlin).",
        "Enterprise system modernization, server tuning, and AWS cloud setup.",
        "Featured project developments: Naxine Enterprise SaaS, AstroMatch, and Design Medicine."
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-24 px-6 relative bg-background border-b border-border">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Award className="w-4 h-4 text-blue-500" />
            <span>{lang === "es" ? "Historial Profesional" : "Work History"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            {lang === "es" ? "Experiencia " : "Professional "}
            <span className="text-gradient">
              {lang === "es" ? "Profesional" : "Experience"}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* CARDS LIST */}
        <div className="space-y-10">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-3xl p-7 sm:p-10 border transition-all duration-300 relative ${
                exp.featured
                  ? "border-blue-500/60 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/20 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"
                  : "border-border hover:border-blue-500/40"
              }`}
            >
              {/* FEATURED BADGE */}
              {exp.featured && (
                <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/30">
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                  <span>{lang === "es" ? "Experiencia Destacada — Plataforma Crítica Federal" : "Featured Experience — Federal Critical Platform"}</span>
                </div>
              )}

              {/* CARD TOP INFO */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      • {exp.system}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                    {exp.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-border text-xs font-bold text-slate-600 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* HIGHLIGHT BOX */}
              <div className="my-5 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold tracking-wider text-blue-600 dark:text-blue-400">
                    {lang === "es" ? "Logro / Impacto Clave" : "Key Achievement / Impact"} ({exp.highlightMetric})
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-0.5">
                    {exp.highlightText}
                  </div>
                </div>
              </div>

              {/* DUTIES BULLETS */}
              <ul className="text-slate-700 dark:text-slate-300 space-y-2.5 text-sm leading-relaxed mb-6 font-normal">
                {exp.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}