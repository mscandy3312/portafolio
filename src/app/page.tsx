"use client";

import { useState } from "react";
import { GoogleAuthProvider } from "@/context/GoogleAuthContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import GoogleLoginModal from "@/components/GoogleLoginModal";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <GoogleAuthProvider>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-300">
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Reviews lang={lang} />
        <Contact lang={lang} />

        {/* Global Google Login Modal */}
        <GoogleLoginModal lang={lang} />
      </main>
    </GoogleAuthProvider>
  );
}