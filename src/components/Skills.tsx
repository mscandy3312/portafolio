"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Server, Wrench, Sparkles, Layers } from "lucide-react";

interface SkillsProps {
  lang: "es" | "en";
}

export default function Skills({ lang }: SkillsProps) {
  const isEs = lang === "es";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: isEs ? "Todas las tecnologías" : "All Stacks" },
    { id: "primary", label: isEs ? "Especialidad principal" : "Primary Specialty" },
    { id: "fullstack", label: isEs ? "Desarrollo Full Stack" : "Full Stack Development" },
    { id: "complementary", label: isEs ? "Experiencia complementaria" : "Complementary Experience" },
  ];

  const skillGroups = [
    {
      id: "primary",
      categoryName: isEs ? "NIVEL 1" : "LEVEL 1",
      title: isEs ? "Especialidad Principal" : "Primary Specialty",
      description: isEs 
        ? "Tecnologías y lenguajes centrales en los que se fundamenta mi trayectoria en desarrollo de software empresarial y bases de datos relacionales."
        : "Core technologies forming the backbone of my enterprise software engineering.",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30 font-bold",
      items: [
        "C#",
        ".NET",
        "ASP.NET Core",
        "MVC",
        "SQL Server",
      ],
    },
    {
      id: "fullstack",
      categoryName: isEs ? "NIVEL 2" : "LEVEL 2",
      title: isEs ? "Desarrollo Full Stack" : "Full Stack Development",
      description: isEs
        ? "Ecosistema de tecnologías web, lenguajes frontend/backend y servicios API utilizados para construir aplicaciones interactivas e integraciones."
        : "Web ecosystem, frontend/backend languages, and API services used for modern applications.",
      icon: <Server className="w-6 h-6 text-indigo-500" />,
      badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30 font-bold",
      items: [
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Laravel",
        "PHP",
        "HTML5",
        "CSS",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      id: "complementary",
      categoryName: isEs ? "NIVEL 3" : "LEVEL 3",
      title: isEs ? "Experiencia Complementaria" : "Complementary Experience",
      description: isEs
        ? "Herramientas de desarrollo, motores de datos, plataformas móviles, cloud y diseño trabajados en proyectos y soluciones independientes."
        : "Development tools, database engines, mobile/cloud platforms, and design tools.",
      icon: <Wrench className="w-6 h-6 text-purple-500" />,
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30 font-semibold",
      items: [
        "React Native",
        "Kotlin",
        "Firebase / Firestore",
        "AWS",
        "MySQL",
        "WordPress",
        "Elementor",
        "Power BI",
        "Figma",
        "Git / GitHub",
        "Android Studio",
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
              ? "Reorganización transparente del dominio tecnológico alineada con la experiencia demostrable del CV 2026."
              : "Clear reorganization of tech stack matching verified experience in CV 2026."}
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