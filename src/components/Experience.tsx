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
    <section id="experience" className="min-h-screen px-6 py-24 bg-background transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-20 text-foreground">
        {/* Usamos el título traducido del data.ts */}
        {t.experience.title}
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none transition-colors"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              {exp.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
              {exp.sub}
            </p>

            <ul className="text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
              {exp.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}