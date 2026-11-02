"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGoogleAuth } from "@/context/GoogleAuthContext";
import { X, Sparkles, ShieldCheck, Mail, User as UserIcon } from "lucide-react";

declare global {
  interface Window {
    google?: any;
  }
}

export default function GoogleLoginModal({ lang = "es" }: { lang?: "es" | "en" }) {
  const { isLoginModalOpen, closeLoginModal, loginWithGoogleCredential, loginWithDemoUser } = useGoogleAuth();
  const [activeTab, setActiveTab] = useState<"official" | "custom">("official");
  const [customName, setCustomName] = useState("");
  const [customEmail, setCustomEmail] = useState("");
  const [hasGoogleScriptLoaded, setHasGoogleScriptLoaded] = useState(false);
  const googleBtnRef = useRef<HTMLDivElement>(null);

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "108394871928-demoexamplegoogleclientid.apps.googleusercontent.com";

  useEffect(() => {
    if (!isLoginModalOpen) return;

    // Load Google Identity Services script if not already present
    if (!window.google?.accounts) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setHasGoogleScriptLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      setHasGoogleScriptLoaded(true);
    }
  }, [isLoginModalOpen]);

  useEffect(() => {
    if (hasGoogleScriptLoaded && window.google?.accounts && googleBtnRef.current) {
      try {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: (response: any) => {
            if (response.credential) {
              loginWithGoogleCredential(response.credential);
            }
          },
        });

        googleBtnRef.current.innerHTML = "";
        window.google.accounts.id.renderButton(googleBtnRef.current, {
          theme: "outline",
          size: "large",
          width: 320,
          text: "continue_with",
          shape: "pill",
          logo_alignment: "left",
        });
      } catch (err) {
        console.warn("Google Sign-In button render error:", err);
      }
    }
  }, [hasGoogleScriptLoaded, isLoginModalOpen, clientId]);

  if (!isLoginModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLoginModal}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-blue-500/20 blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={closeLoginModal}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/25 mb-4 flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground">
              {lang === "es" ? "Acceso con Google" : "Google Sign-In"}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {lang === "es"
                ? "Inicia sesión para dejar una reseña y calificar los servicios."
                : "Sign in to leave a verified review and rate services."}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl mb-6">
            <button
              onClick={() => setActiveTab("official")}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "official"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-500 hover:text-foreground"
              }`}
            >
              {lang === "es" ? "Google Instantáneo" : "Instant Google"}
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "custom"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-500 hover:text-foreground"
              }`}
            >
              {lang === "es" ? "Personalizar Perfil" : "Custom Profile"}
            </button>
          </div>

          {activeTab === "official" ? (
            <div className="space-y-4">
              {/* Google official button container */}
              <div className="flex justify-center min-h-[44px]">
                <div ref={googleBtnRef} className="flex justify-center" />
              </div>

              {/* Fast 1-Click Demo Google Button */}
              <button
                onClick={() => loginWithDemoUser("Cliente Verificado", "cliente.verificado@gmail.com")}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-500/20 active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4" />
                {lang === "es" ? "Acceso Rápido como Cliente" : "Quick Demo Client Access"}
              </button>

              <div className="flex items-center gap-2 pt-2 text-xs text-slate-400 justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>
                  {lang === "es"
                    ? "Tus datos se usan únicamente para validar tu comentario."
                    : "Your data is only used to verify your review."}
                </span>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customName) {
                  loginWithDemoUser(customName, customEmail);
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
                  {lang === "es" ? "Tu Nombre Completo" : "Full Name"}
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder={lang === "es" ? "Ej. Carlos Mendoza" : "e.g. John Doe"}
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
                  {lang === "es" ? "Correo de Google (Opcional)" : "Google Email (Optional)"}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="nombre@gmail.com"
                    value={customEmail}
                    onChange={(e) => setCustomEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
              >
                {lang === "es" ? "Entrar y Dejar Reseña" : "Sign In & Review"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
