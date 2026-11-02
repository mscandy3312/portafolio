"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { translations } from "@/data/data";
import TiltCard from "@/components/TiltCard";
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

    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="proyectos" className="py-28 px-6 relative bg-background overflow-hidden border-t border-border">
      {/* Background Decor */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <FolderKanban className="w-3.5 h-3.5" />
            {isEs ? "Casos Reales y Producción" : "Real Cases & Production"}
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-4 tracking-tight">
            {isEs ? "Portafolio de " : "Portfolio of "}
            <span className="text-gradient">
              {isEs ? "Proyectos" : "Projects"}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {isEs
              ? "Soluciones de software empresariales (.NET / C#, SQL Server, Laravel), plataformas Full Stack en la nube y aplicaciones móviles."
              : "Enterprise software solutions (.NET / C#, SQL Server, Laravel), Full Stack cloud platforms, and mobile apps."}
          </p>

          {/* SEARCH & FILTERS */}
          <div className="mt-10 max-w-xl mx-auto relative mb-6">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={isEs ? "Buscar por tecnología (.NET, SQL Server, Next.js, Laravel) o nombre..." : "Search by technology (.NET, SQL Server, Next.js) or name..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full glass border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
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
        </motion.div>

        {/* PROJECTS GRID WITH 3D TILT */}
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
              <TiltCard key={project.id || `${project.title}-${index}`} intensity={10} glare={true} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.1,
                  }}
                  className="group relative h-full rounded-3xl overflow-hidden glass-card shadow-xl flex flex-col justify-between border border-border hover:border-blue-500/40"
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
                        unoptimized
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
                          {isEs ? "Ver Detalles Completos" : "View Full Details"}
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

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl glass hover:bg-blue-500/20 text-blue-500 transition-all border border-blue-500/30"
                          title="Demo en vivo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl glass hover:bg-purple-500/20 text-purple-500 transition-all border border-purple-500/30"
                          title="Repositorio GitHub"
                        >
                          <GithubIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full glass hover:bg-white/10 text-slate-300 hover:text-white transition-all z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* MODAL IMAGE */}
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>

              {/* MODAL CONTENT */}
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      {selectedProject.category}
                    </span>
                    {selectedProject.highlights && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {selectedProject.highlights}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* PURPOSE BOX */}
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-slate-200">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-blue-400 mb-1">
                    {isEs ? "Propósito / Problema que Resuelve" : "Purpose & Solved Challenge"}
                  </h4>
                  <p className="text-sm font-medium leading-relaxed">
                    {selectedProject.problemPurpose}
                  </p>
                </div>

                {/* DETAILED DESCRIPTION */}
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2">
                    {isEs ? "Descripción y Alcance" : "Description & Scope"}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                {/* TECH STACK */}
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-500" />
                    {isEs ? "Tecnologías Utilizadas" : "Technologies Used"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* MODAL FOOTER */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
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
                        className="px-5 py-3 rounded-full glass hover:bg-purple-500/10 hover:text-purple-400 text-white font-semibold text-sm transition-all flex items-center gap-2 border border-slate-700"
                      >
                        <GithubIcon />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full glass text-slate-300 hover:text-white font-semibold text-sm transition-all"
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