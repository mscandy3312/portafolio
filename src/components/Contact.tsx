"use client";

import { translations } from "@/data/data";

export default function Contact({ lang = "es" }: { lang?: "es" | "en" }) {
  const { personalData } = translations[lang];

  const phoneNumber = "525663852677";
  const message = lang === "es" 
    ? "Hola Juan Carlos, vi tu portafolio y me gustaría platicar sobre un proyecto." 
    : "Hello Juan Carlos, I saw your portfolio and I would like to talk about a project.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="px-6 py-20 bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        
        <h2 className="text-3xl font-bold text-foreground">
          {lang === "es" ? "Construyamos algo impactante juntos." : "Let's build something impactful together."}
        </h2>

        {/* BOTÓN DE WHATSAPP */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium hover:scale-105 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all cursor-pointer border border-green-200 dark:border-green-800"
        >
          <span className="mr-2">●</span>
          {lang === "es" ? "Disponible para contratación" : "Available for hire"}
        </a>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-gray-600 dark:text-gray-400">
          
          {/* Email */}
          <a 
            href={`mailto:${personalData.email}`} 
            className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <span className="text-xl">📧</span>
            <span className="border-b border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400">
              {personalData.email}
            </span>
          </a>

          {/* LinkedIn Actualizado */}
          <a 
            href="https://www.linkedin.com/in/juan-carlos-andrés-hernández-8850b136a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <span className="text-xl">🔗</span>
            <span className="border-b border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/mscandy3312" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <span className="text-xl">💻</span>
            <span className="border-b border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400">
              GitHub
            </span>
          </a>
        </div>

        <div className="border-t border-border pt-8 text-sm text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} {personalData.name}. 
          <br className="md:hidden" /> {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}