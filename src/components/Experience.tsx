"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";

// 1. Definimos que recibe 'lang'
export default function Experience({ lang = "es" }: { lang?: "es" | "en" }) {
  
  // 2. Accedemos al diccionario de traducciones
  const t = translations[lang];

  // 3. Contenido localizado (idealmente esto debería vivir en data.ts)
  const experienceData = [
    {
      title: lang === "es" ? "Administrador y Programador Interno – SHCP / SFP" : "Internal Administrator & Programmer – SHCP / SFP",
      sub: lang === "es" ? "Sistema de Contrataciones Públicas COMPRANET | 2020 – 2024" : "Federal Procurement System COMPRANET | 2020 – 2024",
      items: lang === "es" ? [
        "Administración técnica y funcional del sistema federal COMPRANET.",
        "Resolución de +100 incidencias técnicas mensuales.",
        "Validación y optimización de consultas en SQL Server.",
        "Soporte técnico de segundo nivel a dependencias federales.",
        "Pruebas funcionales en entorno .NET y SQL Server."
      ] : [
        "Technical and functional administration of the COMPRANET federal system.",
        "Resolution of +100 monthly technical incidents.",
        "Validation and optimization of SQL Server queries.",
        "Technical support for federal agencies.",
        "Functional testing in .NET and SQL Server environments."
      ]
    },
    {
      title: lang === "es" ? "Programador .NET – Valora IT" : ".NET Programmer – Valora IT",
      sub: lang === "es" ? "2019 – 2020 | Ciudad de México" : "2019 – 2020 | Mexico City",
      items: lang === "es" ? [
        "Desarrollo web y escritorio en .NET (C#, ASP.NET Core, MVC).",
        "Optimización de consultas SQL reduciendo tiempos en 70%.",
        "Desarrollo de sistemas administrativos y control de horarios.",
        "Implementación de arquitectura MVC."
      ] : [
        "Web and desktop development in .NET (C#, ASP.NET Core, MVC).",
        "SQL query optimization reducing response times by 70%.",
        "Development of administrative systems and schedule control.",
        "MVC architecture implementation."
      ]
    },
    {
      title: lang === "es" ? "Desarrollador Full-Stack Freelance" : "Freelance Full-Stack Developer",
      sub: lang === "es" ? "2024 – Actualidad" : "2024 – Present",
      items: lang === "es" ? [
        "Desarrollo de plataforma SaaS Naxine con despliegue en AWS.",
        "App móvil AstroMatch con Firebase y arquitectura escalable.",
        "Plataforma médica DesignMedicine con enfoque en UX y SEO.",
        "Optimización de servidores y modernización de sistemas."
      ] : [
        "Development of Naxine SaaS platform deployed on AWS.",
        "AstroMatch mobile app with Firebase and scalable architecture.",
        "DesignMedicine medical platform with UX and SEO focus.",
        "Server optimization and system modernization."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.experience.title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-transparent">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 relative"
              >
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mt-2">
                    {exp.sub}
                  </div>
                </div>
                <ul className="text-slate-600 dark:text-slate-400 space-y-3 text-sm md:text-base leading-relaxed">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}