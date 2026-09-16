"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { translations } from "@/data/data";
import { Search, Eye, X, Sparkles, Code, ExternalLink, Layers, Mail, FolderKanban } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  problemPurpose: string;
  tech: string[];
  highlights?: string;
  image: string;
  category: "enterprise" | "web" | "mobile" | "personal";
  demoUrl?: string;
  githubUrl?: string;
}

export default function Projects({
  lang = "es",
}: {
  lang?: "es" | "en";
}) {
  const isEs = lang === "es";
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const projectsList: ProjectItem[] = (translations[lang]?.projects as ProjectItem[]) || [];

  const categories = [
    { id: "all", label: isEs ? "Todos los proyectos" : "All Projects" },
    { id: "enterprise", label: isEs ? "Sistemas Empresariales & ERPs" : "Enterprise Systems & ERPs" },
    { id: "web", label: isEs ? "Desarrollo Web & SaaS" : "Web Development & SaaS" },
    { id: "mobile", label: isEs ? "Aplicaciones Móviles" : "Mobile Apps" },
    { id: "personal", label: isEs ? "Proyectos Personales" : "Personal Projects" },
  ];

  const filteredProjects = projectsList.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.problemPurpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === "all" || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="proyectos"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <FolderKanban className="w-4 h-4 text-blue-500" />
            <span>{isEs ? "Portafolio de Soluciones" : "Solutions Portfolio"}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            {isEs ? "Proyectos " : "Featured "}
            <span className="text-gradient">
              {isEs ? "Destacados" : "Projects"}
            </span>
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />

          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            {isEs
              ? "Reorganizados por relevancia laboral: ERPs empresariales, control de ventas e inventarios, plataformas SaaS, aplicaciones móviles y soluciones web profesionales."
              : "Reordered by enterprise relevance: ERPs, sales & inventory systems, cloud SaaS, mobile apps, and professional web platforms."}
          </p>
        </motion.div>

        {/* FILTERS & SEARCH BAR */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-12">
          {/* SEARCH BAR */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={isEs ? "Buscar tecnología o proyecto..." : "Search tech or project..."}
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
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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

        {/* PROJECTS GRID */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-3xl border border-border">
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 text-lg font-medium">
              {isEs ? "No se encontraron proyectos con ese criterio." : "No projects match your search criteria."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id || `${project.title}-${index}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                className="group relative rounded-3xl overflow-hidden glass-card hover:-translate-y-2 transition-all duration-500 shadow-xl flex flex-col justify-between border border-border hover:border-blue-500/40"
              >
                <div>
                  {/* IMAGE CONTAINER */}
                  <div
                    className="relative w-full h-56 overflow-hidden cursor-pointer bg-slate-950"
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

                    {/* CATEGORY BADGE */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 text-[10px] font-extrabold uppercase tracking-wider">
                        {project.category === "enterprise" ? (isEs ? "Empresarial" : "Enterprise") :
                         project.category === "mobile" ? (isEs ? "Móvil" : "Mobile") :
                         project.category === "personal" ? (isEs ? "Personal" : "Personal") : "Web"}
                      </span>
                    </div>

                    {/* CTA OVERLAY HOVER */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-950/40 backdrop-blur-[2px]">
                      <span className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs tracking-wide shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4 text-blue-600" />
                        {isEs ? "Ver Detalles Completo" : "View Full Details"}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors duration-300 cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    {/* PURPOSE / PROBLEM STATEMENT */}
                    <div className="mb-3 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-xl border border-blue-500/20">
                      <span className="font-extrabold">{isEs ? "Propósito: " : "Purpose: "}</span>
                      {project.problemPurpose}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="px-7 pb-7 pt-2 flex flex-col gap-4 mt-auto">
                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isEs ? "Ver Proyecto" : "View Project"}</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl glass hover:bg-purple-500/10 hover:text-purple-500 text-slate-400 transition-all cursor-pointer"
                        title="GitHub Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* DETAILED PROJECT MODAL */}
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
              <div className="relative w-full h-64 sm:h-80 bg-slate-950 shrink-0">
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
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
                    {selectedProject.title}
                  </h3>

                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3.5 py-2 rounded-xl border border-blue-500/20 mb-4 inline-block">
                    <span className="font-extrabold">{isEs ? "Propósito principal: " : "Main Purpose: "}</span>
                    {selectedProject.problemPurpose}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.highlights && (
                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                      {isEs ? "Características Principales / Logro" : "Key Features / Highlight"}
                    </h4>
                    <p className="text-sm font-semibold text-foreground">
                      {selectedProject.highlights}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-500" />
                    {isEs ? "Tecnologías Utilizadas" : "Technologies Used"}
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

                {/* MODAL FOOTER */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:jcarlos61200@gmail.com"
                      className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{isEs ? "Consultar sobre este proyecto" : "Inquire about this project"}</span>
                    </a>

                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-full glass hover:bg-purple-500/10 hover:text-purple-500 text-foreground font-semibold text-sm transition-all flex items-center gap-2 border border-border"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full glass text-slate-600 dark:text-slate-300 hover:text-foreground font-semibold text-sm transition-all"
                  >
                    {isEs ? "Cerrar" : "Close"}
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