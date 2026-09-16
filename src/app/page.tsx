"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import RecruiterSection from "@/components/RecruiterSection";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Profile lang={lang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <RecruiterSection lang={lang} />
      <Contact lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </main>
  );
}