"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <main>
      {/* 1. Navbar SI recibe setLang porque es donde están los botones ahora */}
      <Navbar lang={lang} setLang={setLang} />
      
      {/* 2. Hero SOLO recibe lang (aquí estaba el error de TypeScript) */}
      <Hero lang={lang} /> 
      
      {/* 3. Los demás componentes solo leen el idioma */}
      <Projects lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}