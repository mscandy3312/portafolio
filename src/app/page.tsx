"use client";

import { useState } from "react";
import { GoogleAuthProvider } from "@/context/GoogleAuthContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Recommendations from "@/components/Recommendations";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import RecruiterSection from "@/components/RecruiterSection";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleLoginModal from "@/components/GoogleLoginModal";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <GoogleAuthProvider>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-300 antialiased">
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <Profile lang={lang} />
        <Services lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Recommendations lang={lang} />
        <Skills lang={lang} />
        <Reviews lang={lang} />
        <RecruiterSection lang={lang} />
        <Contact lang={lang} />
        <FloatingWhatsApp lang={lang} />

        {/* Global Google Login Modal */}
        <GoogleLoginModal lang={lang} />
      </main>
    </GoogleAuthProvider>
  );
}