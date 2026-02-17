"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { translations } from "@/data/data";

export default function Projects({ lang = "es" }: { lang?: "es" | "en" }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projectsList = translations[lang].projects;

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-background transition-colors duration-300"
    >
      {/* CAMBIO AQUÍ: Forzamos el color del título */}
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-colors duration-300">
        {lang === "es" ? "Proyectos Destacados" : "Featured Projects"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg dark:shadow-none"
          >
            <div
              className="relative w-full h-56 cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              {/* CAMBIO AQUÍ: Forzamos el color del nombre del proyecto */}
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              {/* REINSERCIÓN DE BOTONES AZULES (Tech Tags) */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          >
            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={selectedImage}
                alt="Project Zoom"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}