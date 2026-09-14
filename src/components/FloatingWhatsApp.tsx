"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp({ lang = "es" }: { lang?: "es" | "en" }) {
  const phoneNumber = "525663852677";
  const defaultMsg = lang === "es" 
    ? "Hola Juan Carlos, estuve viendo tu portafolio web y me gustaría ponerme en contacto." 
    : "Hello Juan Carlos, I was looking at your portfolio and would like to get in touch.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-extrabold uppercase tracking-wider">
        {lang === "es" ? "WhatsApp Directo" : "Direct WhatsApp"}
      </span>
    </motion.a>
  );
}
