"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { translations } from "@/data/data";
import { Search, Eye, X, Sparkles, Code, ExternalLink, Layers } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  highlights?: string;
  image: string;
}

export default function Projects({
  lang = "es",
}: {
  lang?: "es" | "en";
}) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Obtiene TODOS los proyectos desde data.ts
  const projectsList: ProjectItem[] = translations[lang]?.projects || [];

  const categories = [
    { id: "all", label: lang === "es" ? "Todos (13)" : "All (13)" },
    { id: "backend", label: lang === "es" ? "Backend & Microservicios" : "Backend & Microservices" },
    { id: "web", label: lang === "es" ? "Web & SaaS" : "Web & SaaS" },
    { id: "mobile", label: lang === "es" ? "Aplicaciones Móviles" : "Mobile Apps" },
    { id: "cms", label: lang === "es" ? "CMS & Design UI/UX" : "CMS & UI/UX" },
  ];

  // Helper para categorizar dinámicamente un proyecto según su stack
  const getProjectCategory = (proj: ProjectItem): string => {
    const t = proj.tech.join(" ").toLowerCase() + " " + proj.title.toLowerCase();
    if (t.includes("microservicios") || t.includes("java") || t.includes("spring") || t.includes("laravel")) {
      return "backend";
    }
    if (t.includes("react native") || t.includes("kotlin") || t.includes("android")) {
      return "mobile";
    }
    if (t.includes("wordpress") || t.includes("figma") || t.includes("edición")) {
      return "cms";
    }
    return "web";
  };

  const filteredProjects = projectsList.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const projCat = getProjectCategory(project);
    const matchesCategory = activeCategory === "all" || projCat === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            {lang === "es" ? "Proyectos " : "Featured "}
            <span className="text-gradient">
              {lang === "es" ? "Destacados" : "Projects"}
            </span>
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />

          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            {lang === "es"
              ? "Explora soluciones empresariales en tiempo real, plataformas SaaS en la nube, arquitecturas de microservicios con Java 17 / Spring Boot, ERPs distribuidos y aplicaciones móviles nativas."
              : "Explore real-time enterprise systems, cloud SaaS platforms, Java 17 / Spring Boot microservices architectures, distributed ERPs, and native mobile apps."}
          </p>
        </motion.div>

        {/* CONTROLES DE FILTRO Y BÚSQUEDA */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          {/* SEARCH BAR */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={lang === "es" ? "Buscar por tecnología o título..." : "Search tech or title..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full glass border border-border text-sm text-foreground focus:outline-none focus:border-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-foreground cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* CATEGORIES */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "glass text-slate-600 dark:text-slate-300 hover:border-blue-500/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PROYECTOS */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-3xl">
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 text-lg font-medium">
              {lang === "es" ? "No se encontraron proyectos con ese criterio." : "No projects match your search."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                className="group relative rounded-3xl overflow-hidden glass-card hover:-translate-y-2 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* IMAGE CONTAINER */}
                  <div
                    className="relative w-full h-60 overflow-hidden cursor-pointer bg-slate-950"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                    {/* BADGE */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md border border-blue-400/30 text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-300" />
                        {lang === "es" ? "Verificado" : "Verified"}
                      </span>
                    </div>

                    {/* CTA OVERLAY HOVER */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-950/40 backdrop-blur-[2px]">
                      <span className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs tracking-wide shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4 text-blue-600" />
                        {lang === "es" ? "Ver Detalles" : "View Details"}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors duration-300 cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* HIGHLIGHTS */}
                    {project.highlights && (
                      <div className="mb-5 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <p className="text-xs text-blue-600 dark:text-blue-300 font-medium leading-relaxed flex items-start gap-1.5">
                          <span className="text-blue-500 font-bold">•</span>
                          {project.highlights}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* TECH STACK FOOTER */}
                <div className="px-7 pb-7 pt-2 flex flex-wrap gap-1.5 border-t border-border/40 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL DETALLADO DE PROYECTO */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] glass-card rounded-3xl overflow-hidden border border-border shadow-2xl flex flex-col cursor-default"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* MODAL HERO IMAGE */}
              <div className="relative w-full h-72 sm:h-96 bg-slate-950 shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="100vw"
                  className="object-contain bg-slate-950"
                />
              </div>

              {/* MODAL BODY */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.highlights && (
                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                      {lang === "es" ? "Aspectos Clave / Logro" : "Key Highlight / Impact"}
                    </h4>
                    <p className="text-sm font-semibold text-foreground">
                      {selectedProject.highlights}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-500" />
                    {lang === "es" ? "Tecnologías & Arquitectura" : "Technologies & Architecture"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="mailto:jcarlos61200@gmail.com"
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
                  >
                    <span>{lang === "es" ? "Consultar proyecto similar" : "Inquire similar project"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full glass text-slate-600 dark:text-slate-300 hover:text-foreground font-semibold text-sm transition-all"
                  >
                    {lang === "es" ? "Cerrar" : "Close"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}