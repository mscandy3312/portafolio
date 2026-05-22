"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { translations } from "@/data/data";

export default function Projects({
  lang = "es",
}: {
  lang?: "es" | "en";
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Obtiene TODOS los proyectos desde data.ts
  const projectsList = translations[lang]?.projects || [];

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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-5 tracking-tight">
            {lang === "es"
              ? "Proyectos Destacados"
              : "Featured Projects"}
          </h2>

          <div className="w-28 h-1.5 bg-blue-500 mx-auto rounded-full mb-6" />

          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {lang === "es"
              ? "Desarrollo de plataformas empresariales, fintech, ERP, aplicaciones móviles, sitios premium y soluciones digitales de alto impacto."
              : "Enterprise platforms, fintech products, ERP systems, mobile apps and high-impact digital experiences."}
          </p>
        </motion.div>

        {/* GRID DE 13 PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 shadow-xl"
            >
              {/* IMAGE */}
              <div
                className="relative w-full h-72 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1280px) 50vw,
                         33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                {/* BADGE */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide">
                    {lang === "es"
                      ? "Proyecto Real"
                      : "Real Project"}
                  </span>
                </div>

                {/* CTA */}
                <div className="absolute bottom-5 left-5 z-20 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold shadow-lg">
                    {lang === "es"
                      ? "Ver Proyecto"
                      : "View Project"}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 line-clamp-4">
                  {project.description}
                </p>

                {/* HIGHLIGHTS */}
                {project.highlights && (
                  <div className="mb-5">
                    <p className="text-sm text-blue-500 font-medium leading-relaxed">
                      {project.highlights}
                    </p>
                  </div>
                )}

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-5 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 22,
              }}
              className="relative w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src={selectedImage}
                alt="Project Preview"
                fill
                sizes="100vw"
                className="object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}