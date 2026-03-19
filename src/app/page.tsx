"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <main>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} /> 
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}