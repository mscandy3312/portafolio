"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { translations } from "@/data/data";
import TiltCard from "@/components/TiltCard";
import { ExternalLink, Eye, Code, Sparkles, Layers } from "lucide-react";

export default function Projects({ lang = "es" }: { lang?: "es" | "en" }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projectsList = translations[lang].projects;

  return (
    <section id="projects" className="py-28 px-6 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            {lang === "es" ? "Portfolio de Éxito" : "Portfolio of Success"}
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tight">
            {lang === "es" ? "Proyectos " : "Featured "}
            <span className="text-gradient">
              {lang === "es" ? "Destacados" : "Projects"}
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === "es"
              ? "Plataformas web empresariales, ERPs en la nube, aplicaciones móviles y soluciones de misión crítica."
              : "Enterprise web platforms, cloud ERPs, mobile applications, and mission-critical systems."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <TiltCard key={index} intensity={12} glare={true} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group h-full glass rounded-3xl overflow-hidden border border-border hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Image Container */}
                <div>
                  <div
                    className="relative w-full h-56 cursor-pointer overflow-hidden bg-slate-900"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Quick view badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white inline-flex items-center justify-center border border-white/20 group-hover:bg-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/30">
                        {lang === "es" ? "Click para ampliar" : "Click to expand"}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      {"link" in project && project.link && (
                        <a
                          href={project.link as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 transition-colors"
                          title="Visitar sitio"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="p-6 md:p-7 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Modal Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <Image
                src={selectedImage}
                alt="Project Zoom"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}