"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar"; // Importamos el nuevo Navbar
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <main>
      {/* El Navbar va hasta arriba y recibe lang y setLang */}
      <Navbar lang={lang} setLang={setLang} />
      
      {/* El resto de componentes siguen igual, recibiendo su prop lang */}
      <Hero lang={lang} setLang={setLang} />
      <Projects lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}