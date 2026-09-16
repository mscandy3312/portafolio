"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Server, Wrench, Sparkles } from "lucide-react";

interface SkillsProps {
  lang: "es" | "en";
}

export default function Skills({ lang }: SkillsProps) {
  const isEs = lang === "es";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: isEs ? "Todas las tecnologías" : "All Stacks" },
    { id: "primary", label: isEs ? "Especialidad Principal" : "Primary Specialty" },
    { id: "experience", label: isEs ? "Experiencia" : "Experience" },
    { id: "complementary", label: isEs ? "Complementario / Proyectos" : "Complementary / Projects" },
  ];

  const skillGroups = [
    {
      id: "primary",
      categoryName: isEs ? "NIVEL 1" : "LEVEL 1",
      title: isEs ? "ESPECIALIDAD PRINCIPAL" : "PRIMARY SPECIALTY",
      description: isEs 
        ? "Tecnologías y competencias centrales respaldadas por trayectoria profesional comprobable en desarrollo de sistemas empresariales y administración de bases de datos."
        : "Core technologies and competencies backed by verified enterprise software experience.",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30 font-bold",
      items: [
        "C#",
        ".NET",
        "ASP.NET Core",
        "MVC",
        "SQL Server",
        "SQL / optimización de consultas",
        "Soporte técnico y funcional",
      ],
    },
    {
      id: "experience",
      categoryName: isEs ? "NIVEL 2" : "LEVEL 2",
      title: isEs ? "EXPERIENCIA" : "EXPERIENCE",
      description: isEs
        ? "Tecnologías de desarrollo web Full Stack, maquetación, motores relacionales y servicios web aplicados en proyectos corporativos."
        : "Full Stack web technologies, layout, relational engines, and web services used in corporate applications.",
      icon: <Server className="w-6 h-6 text-indigo-500" />,
      badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30 font-semibold",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Laravel / PHP",
        "MySQL",
        "WordPress / Elementor",
        "REST APIs",
        "Git / GitHub",
        "Figma",
      ],
    },
    {
      id: "complementary",
      categoryName: isEs ? "NIVEL 3" : "LEVEL 3",
      title: isEs ? "COMPLEMENTARIO / PROYECTOS" : "COMPLEMENTARY / PROJECTS",
      description: isEs
        ? "Tecnologías, plataformas cloud, arquitecturas de proyectos e infraestructura aplicadas en desarrollos específicos del portafolio."
        : "Technologies, cloud platforms, project architectures, and infrastructure used across portfolio builds.",
      icon: <Wrench className="w-6 h-6 text-purple-500" />,
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30 font-normal",
      items: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "Microservicios",
        "AWS",
        "Kotlin",
        "Firebase",
        "React Native",
        "Prisma",
        "TypeScript",
        "Tailwind CSS",
        "Android Studio",
        "ApexCharts",
        "H2 Database",
      ],
    },
  ];

  const filteredGroups = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section id="especialidades" className="py-24 px-6 relative bg-card-bg border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>{isEs ? "Capacidad Técnica & Stacks" : "Technical Capability & Stacks"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            {isEs ? "Especialidades " : "Technical "}
            <span className="text-gradient">
              {isEs ? "técnicas" : "Specialties"}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            {isEs
              ? "Reorganización clara en 3 niveles de dominio técnico para reflejar con precisión la experiencia profesional del CV 2026."
              : "Clear 3-level reorganization matching verified experience in CV 2026."}
          </p>
        </motion.div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "glass text-slate-600 dark:text-slate-300 hover:border-blue-500/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SKILLS GROUPS */}
        <div className="space-y-8">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-border hover:border-blue-500/30 transition-all shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                    {group.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                      {group.categoryName}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">{group.title}</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
                  {group.description}
                </p>
              </div>

              {/* BADGES GRID */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2.5 rounded-xl border text-sm transition-all flex items-center gap-2 cursor-default ${group.badgeColor}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current opacity-70" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}