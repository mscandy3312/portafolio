"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData, ServiceItem } from "@/data/services";
import TiltCard from "@/components/TiltCard";
import {
  Code2,
  Globe,
  Network,
  Video,
  Sparkles,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Calculator,
  Shield,
  Zap,
  Layers,
  TrendingUp,
} from "lucide-react";

interface ServicesProps {
  lang: "es" | "en";
}

export default function Services({ lang = "es" }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCalculatorService, setActiveCalculatorService] = useState<string>("software-empresarial");
  const [calculatorOption, setCalculatorOption] = useState<number>(0);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const services = servicesData[lang] || servicesData["es"];

  const corePillars = services.filter((s) => s.isPillar);
  const additionalServices = services.filter((s) => !s.isPillar);

  const categories = [
    { id: "all", label: lang === "es" ? "Todas las Líneas" : "All Lines" },
    { id: "pillar-1", label: lang === "es" ? "1. Software Empresarial" : "1. Enterprise Software" },
    { id: "pillar-2", label: lang === "es" ? "2. Web & Crecimiento" : "2. Web & Growth" },
    { id: "pillar-3", label: lang === "es" ? "3. Infraestructura & Soporte" : "3. Infrastructure & Support" },
    { id: "creative", label: lang === "es" ? "🎨 Servicios Creativos" : "🎨 Creative Services" },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6" />;
      case "Globe":
        return <Globe className="w-6 h-6" />;
      case "Network":
        return <Network className="w-6 h-6" />;
      case "Video":
        return <Video className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getWhatsAppLink = (serviceTitle: string, pricing?: string) => {
    const text =
      lang === "es"
        ? `Hola Juan Carlos, me interesa cotizar una solución de "${serviceTitle}"${pricing ? ` (${pricing})` : ""}. ¿Podemos platicar los detalles técnicos y requerimientos?`
        : `Hi Juan Carlos, I'm interested in getting a quote for "${serviceTitle}"${pricing ? ` (${pricing})` : ""}. Can we discuss the technical specifications?`;
    return `https://wa.me/525663852677?text=${encodeURIComponent(text)}`;
  };

  const shouldShowPillar = (pillarNum: number) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === `pillar-${pillarNum}`) return true;
    return false;
  };

  const shouldShowCreative = () => {
    return selectedCategory === "all" || selectedCategory === "creative";
  };

  return (
    <section id="services" className="py-28 px-6 relative bg-background overflow-hidden border-t border-border/50">
      {/* Background Lighting Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === "es" ? "JCAH • Soluciones Tecnológicas Comerciales" : "JCAH • Commercial Tech Solutions"}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-4">
            {lang === "es" ? "Tres Líneas Comerciales & " : "Three Commercial Lines & "}
            <span className="text-gradient">
              {lang === "es" ? "Servicios de Ingeniería" : "Engineering Services"}
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            {lang === "es"
              ? "Transformamos procesos de negocio en soluciones digitales. Estructuramos nuestros servicios en 3 líneas comerciales estratégicas orientadas a resolver problemas reales, vender más y garantizar continuidad operativa."
              : "We transform business workflows into digital solutions. Structured across 3 core commercial pillars engineered to solve real challenges, increase sales, and ensure operational resilience."}
          </p>

          {/* Quick quote calculator trigger */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-500/30 text-foreground font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/5 group cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-blue-500 group-hover:rotate-12 transition-transform" />
              <span>
                {isCalculatorOpen
                  ? lang === "es"
                    ? "Ocultar Cotizador Interactivo"
                    : "Hide Interactive Estimator"
                  : lang === "es"
                  ? "Calculadora de Presupuesto Rápido"
                  : "Quick Budget Estimator"}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Interactive Calculator Drawer */}
        <AnimatePresence>
          {isCalculatorOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 48 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="max-w-3xl mx-auto glass rounded-3xl p-6 md:p-8 border border-blue-500/30 shadow-2xl relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold">
                      ⚡
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {lang === "es" ? "Estimador de Proyecto al Instante" : "Instant Project Estimator"}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {lang === "es"
                          ? "Selecciona la línea o servicio para ver el costo estimado y solicitar propuesta"
                          : "Select a commercial line or service to view estimated budget"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveCalculatorService(s.id);
                        setCalculatorOption(0);
                      }}
                      className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                        activeCalculatorService === s.id
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30"
                          : "glass border-border text-foreground hover:bg-white/10"
                      }`}
                    >
                      <div className="truncate font-bold">{s.title}</div>
                      <div className="text-[10px] opacity-75 mt-0.5">{s.pillarLabel || s.category}</div>
                    </button>
                  ))}
                </div>

                {/* Selected Service Pricing Options */}
                {(() => {
                  const currentService = services.find((s) => s.id === activeCalculatorService) || services[0];
                  const selectedTier = currentService.pricing[calculatorOption] || currentService.pricing[0];
                  return (
                    <div className="bg-white/5 dark:bg-black/30 rounded-2xl p-5 border border-white/10">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-blue-500 font-bold block mb-1">
                            {currentService.title}
                          </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {currentService.pricing.map((tier, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCalculatorOption(idx)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                                  calculatorOption === idx
                                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                                    : "bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-foreground"
                                }`}
                              >
                                {tier.concept}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="text-left md:text-right w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                          <span className="text-xs text-slate-500 block">
                            {lang === "es" ? "Presupuesto Estimado:" : "Estimated Price:"}
                          </span>
                          <div className="text-2xl font-black text-gradient mt-1">
                            {selectedTier.price}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <span className="text-xs text-slate-500 italic">
                          *{currentService.note}
                        </span>
                        <a
                          href={getWhatsAppLink(currentService.title, `${selectedTier.concept}: ${selectedTier.price}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>{lang === "es" ? "Pedir Cotización en WhatsApp" : "Request on WhatsApp"}</span>
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-foreground text-background dark:bg-white dark:text-black shadow-lg shadow-blue-500/10 scale-105"
                  : "glass text-slate-600 dark:text-slate-400 hover:text-foreground border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SECTION 1: THE 3 CORE COMMERCIAL PILLARS (PROTAGONISTAS) */}
        {selectedCategory !== "creative" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars
              .filter((p) => shouldShowPillar(p.pillar || 1))
              .map((service, index) => (
                <TiltCard
                  key={service.id}
                  intensity={12}
                  glare={true}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full glass rounded-3xl p-7 md:p-8 flex flex-col justify-between border border-border hover:border-blue-500/40 transition-colors shadow-xl relative overflow-hidden group"
                  >
                    {/* Ambient glow accent top-right */}
                    <div
                      className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-45 transition-opacity"
                      style={{ backgroundColor: service.glowColor }}
                    />

                    <div className="relative z-10">
                      {/* Top Pill / Commercial Line Indicator */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.colorGradient} p-0.5 shadow-lg shadow-blue-500/20`}
                        >
                          <div className="w-full h-full bg-slate-900/95 rounded-[14px] flex items-center justify-center text-white">
                            {getIcon(service.iconName)}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                            {service.pillarLabel}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                            {service.priorityBadge}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-blue-500 transition-colors tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        {service.subtitle}
                      </p>

                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        {service.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-2.5 mb-8">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Box & CTA */}
                    <div className="relative z-10 pt-5 border-t border-border mt-auto">
                      <div className="mb-4">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-2">
                          {lang === "es" ? "Rangos de Cotización Estimados:" : "Estimated Price Ranges:"}
                        </span>
                        <div className="space-y-1.5 bg-black/5 dark:bg-white/5 rounded-xl p-3 border border-white/5">
                          {service.pricing.map((p, pIdx) => (
                            <div key={pIdx} className="flex items-center justify-between text-xs">
                              <span className="text-slate-600 dark:text-slate-400 font-medium">
                                {p.concept}
                              </span>
                              <span className="font-bold text-foreground">
                                {p.price}
                              </span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 italic">
                          *{service.note}
                        </p>
                      </div>

                      <a
                        href={getWhatsAppLink(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-foreground text-background dark:bg-white dark:text-black font-semibold text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md group-hover:shadow-blue-500/20"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-500" />
                        <span>{lang === "es" ? "Cotizar por WhatsApp" : "Quote via WhatsApp"}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
          </div>
        )}

        {/* SECTION 2: SERVICIOS ADICIONALES (CREATIVOS & MULTIMEDIA) */}
        {shouldShowCreative() && (
          <div className="mt-20 pt-16 border-t border-border/60">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === "es" ? "Servicios Adicionales & Creativos" : "Additional & Creative Services"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
                {lang === "es" ? "Producción Multimedia & Diseño Gráfico" : "Multimedia Production & Graphic Design"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                {lang === "es"
                  ? "Servicios complementarios para acompañar y potenciar la presencia de tu marca en canales digitales y redes sociales."
                  : "Supplementary creative services to power your digital marketing presence and social branding."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {additionalServices.map((service, index) => (
                <TiltCard
                  key={service.id}
                  intensity={10}
                  glare={true}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full glass rounded-3xl p-7 flex flex-col justify-between border border-border hover:border-rose-500/30 transition-colors shadow-lg relative overflow-hidden group"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.colorGradient} p-0.5 shadow-md`}
                        >
                          <div className="w-full h-full bg-slate-900/90 rounded-[10px] flex items-center justify-center text-white">
                            {getIcon(service.iconName)}
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                          {service.badge}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-rose-500 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs font-semibold text-rose-500/90 mb-3">{service.subtitle}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-5 font-light">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-border mt-auto">
                      <div className="mb-4">
                        <div className="space-y-1 bg-black/5 dark:bg-white/5 rounded-xl p-2.5 border border-white/5">
                          {service.pricing.map((p, pIdx) => (
                            <div key={pIdx} className="flex items-center justify-between text-xs">
                              <span className="text-slate-600 dark:text-slate-400">{p.concept}</span>
                              <span className="font-bold text-foreground">{p.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href={getWhatsAppLink(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl glass hover:bg-rose-500/10 hover:border-rose-500/30 font-semibold text-xs transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{lang === "es" ? "Cotizar Servicio Creativo" : "Quote Creative Service"}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
