"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";
import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";

export default function Experience({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = translations[lang] || translations["es"];

  const experienceData = [
    {
      company: "SHCP / SFP",
      title: lang === "es" ? "Administrador y Programador Interno – SHCP / SFP" : "Internal Administrator & Programmer – SHCP / SFP",
      sub: lang === "es" ? "Sistema de Contrataciones Públicas COMPRANET | 2020 – 2024" : "Federal Procurement System COMPRANET | 2020 – 2024",
      period: "2020 – 2024",
      tags: [".NET", "C#", "SQL Server", "Arquitectura MVC", "Soporte Nivel 2"],
      items: lang === "es" ? [
        "Administración técnica y funcional del sistema de contrataciones públicas federal COMPRANET.",
        "Resolución efectiva de más de 100 incidencias técnicas complejas mensuales asegurando continuidad operativa.",
        "Validación, diseño y optimización de consultas SQL Server para alto volumen de transacciones.",
        "Atención y soporte técnico especializado a dependencias gubernamentales e instituciones federales.",
        "Pruebas funcionales, depuración y mantenimiento en entorno .NET y SQL Server."
      ] : [
        "Technical and functional administration of the federal procurement system COMPRANET.",
        "Resolution of +100 monthly complex technical incidents ensuring uninterrupted operation.",
        "Validation, design, and optimization of SQL Server queries for high-volume transactions.",
        "Specialized technical support for federal agencies and public entities.",
        "Functional testing, debugging, and maintenance in .NET and SQL Server environments."
      ]
    },
    {
      company: "Valora IT",
      title: lang === "es" ? "Programador .NET – Valora IT" : ".NET Programmer – Valora IT",
      sub: lang === "es" ? "2019 – 2020 | Ciudad de México" : "2019 – 2020 | Mexico City",
      period: "2019 – 2020",
      tags: ["ASP.NET Core", "C#", "SQL Server", "MVC", "Optimización SQL"],
      items: lang === "es" ? [
        "Desarrollo de aplicaciones web y de escritorio en entorno .NET (C#, ASP.NET Core, MVC).",
        "Optimización de consultas SQL en bases de datos relacionales, logrando reducir tiempos de respuesta en un 70%.",
        "Diseño e implementación de sistemas de control administrativo y gestión de horarios.",
        "Implementación rigurosa de patrones de arquitectura MVC y código mantenible."
      ] : [
        "Development of web and desktop applications using .NET (C#, ASP.NET Core, MVC).",
        "SQL query optimization reducing database response times by 70%.",
        "Design and implementation of administrative control and schedule management systems.",
        "Rigorous implementation of MVC patterns and clean code standards."
      ]
    },
    {
      company: "Freelance & Enterprise",
      title: lang === "es" ? "Desarrollador Full-Stack & Arquitecto Freelance" : "Full-Stack Developer & Freelance Architect",
      sub: lang === "es" ? "2024 – Actualidad | Remoto / Global" : "2024 – Present | Remote / Global",
      period: "2024 – Actualidad",
      tags: ["Java 17+", "Spring Boot", "Microservicios", "Next.js", "React Native", "Kotlin", "AWS"],
      items: lang === "es" ? [
        "Desarrollo del Dashboard CompraNova implementando una arquitectura distribuida de microservicios con Java 17, Spring Boot y Spring Cloud Eureka.",
        "Creación de la plataforma SaaS Naxine Enterprise con procesamiento recurrente Stripe e infraestructura escalable en AWS.",
        "Desarrollo de la app móvil AstroMatch utilizando Kotlin, Jetpack Compose y Firebase en tiempo real.",
        "Diseño de la plataforma científica y médica DesignMedicine enfocado en rendimiento, accesibilidad y experiencia UX.",
        "Modernización de sistemas heredados, integración de pasarelas de pago y optimización avanzada de bases de datos."
      ] : [
        "Engineered CompraNova Dashboard using a distributed microservices architecture with Java 17, Spring Boot, and Spring Cloud Eureka.",
        "Built Naxine Enterprise SaaS platform featuring Stripe recurring billing on AWS infrastructure.",
        "Developed AstroMatch mobile app with native Kotlin, Jetpack Compose, and real-time Firebase.",
        "Designed scientific & medical portal DesignMedicine focusing on top performance, UX, and accessibility.",
        "Modernized legacy systems, integrated payment gateways, and performed high-level database tuning."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative bg-background border-b border-border">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            {t.experience.title.split(" ")[0]} {" "}
            <span className="text-gradient">
              {t.experience.title.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-base">
            {lang === "es" 
              ? "Trayectoria sólida respaldada por años en el sector público federal y proyectos de alto impacto digital." 
              : "Solid track record backed by years in federal public sector and high-impact digital ventures."}
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative space-y-10 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-transparent">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* TIMELINE ICON NODE */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              
              {/* CARD CONTENT */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-7 sm:p-8 rounded-3xl border border-border hover:border-blue-500/40 transition-all duration-300 relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    {exp.company}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {exp.title}
                </h3>
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-5">
                  {exp.sub}
                </div>

                <ul className="text-slate-600 dark:text-slate-300 space-y-2.5 text-sm leading-relaxed mb-6">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}