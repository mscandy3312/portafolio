"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Layout, Server, Database, Wrench } from "lucide-react";

interface SkillsProps {
  lang: "es" | "en";
}

export default function Skills({ lang }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: lang === "es" ? "Todas" : "All" },
    { id: "frontend", label: lang === "es" ? "Frontend & Mobile" : "Frontend & Mobile" },
    { id: "backend", label: lang === "es" ? "Backend & Cloud" : "Backend & Cloud" },
    { id: "database", label: lang === "es" ? "Bases de Datos" : "Databases" },
    { id: "tools", label: lang === "es" ? "Herramientas & CMS" : "Tools & CMS" },
  ];

  const skillGroups = [
    {
      title: "Frontend & Mobile",
      category: "frontend",
      icon: <Layout className="w-5 h-5 text-blue-500" />,
      items: [
        { name: "Next.js", level: "Avanzado" },
        { name: "React", level: "Avanzado" },
        { name: "TypeScript", level: "Avanzado" },
        { name: "Tailwind CSS", level: "Avanzado" },
        { name: "Framer Motion", level: "Intermedio" },
        { name: "React Native", level: "Intermedio" },
        { name: "Kotlin (Android)", level: "Intermedio" },
      ],
    },
    {
      title: "Backend & Cloud",
      category: "backend",
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      items: [
        { name: "Java 17+", level: "Avanzado" },
        { name: "Spring Boot", level: "Avanzado" },
        { name: "Microservicios", level: "Avanzado" },
        { name: "Node.js", level: "Intermedio" },
        { name: "Laravel / PHP", level: "Avanzado" },
        { name: ".NET / C#", level: "Experiencia SHCP" },
        { name: "AWS", level: "Cloud SaaS" },
      ],
    },
    {
      title: "Bases de Datos & Data",
      category: "database",
      icon: <Database className="w-5 h-5 text-cyan-500" />,
      items: [
        { name: "MySQL", level: "Avanzado" },
        { name: "SQL Server", level: "Optimización" },
        { name: "Prisma ORM", level: "Avanzado" },
        { name: "Firebase", level: "Real-time" },
        { name: "H2 Database", level: "Dev & Test" },
      ],
    },
    {
      title: "Herramientas & CMS",
      category: "tools",
      icon: <Wrench className="w-5 h-5 text-purple-500" />,
      items: [
        { name: "Git / GitHub", level: "Control de versiones" },
        { name: "Figma", level: "UI/UX Design" },
        { name: "WordPress / Elementor", level: "Custom CSS" },
        { name: "REST APIs", level: "Arquitectura" },
        { name: "ApexCharts", level: "Visualización" },
      ],
    },
  ];

  const filteredGroups = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 relative bg-card-bg border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            {lang === "es" ? "Stack Tecnológico & " : "Tech Stack & "}
            <span className="text-gradient">
              {lang === "es" ? "Habilidades" : "Skills"}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            {lang === "es"
              ? "Herramientas y tecnologías que utilizo para construir arquitecturas de microservicios, ERPs empresariales y aplicaciones web/móviles."
              : "Tools and technologies I use to build microservices architectures, enterprise ERPs, and web/mobile apps."}
          </p>
        </motion.div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "glass text-slate-600 dark:text-slate-300 hover:border-blue-500/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="glass-card p-7 rounded-3xl border border-border hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl glass border border-border hover:border-blue-500/40 hover:bg-blue-500/5 transition-all flex items-center justify-between gap-3 group cursor-default"
                  >
                    <span className="font-semibold text-foreground text-sm group-hover:text-blue-500 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {item.level}
                    </span>
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