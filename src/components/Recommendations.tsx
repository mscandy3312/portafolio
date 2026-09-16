"use client";

import { motion } from "framer-motion";
import { translations, CV_LINK } from "@/data/data";
import { Award, FileText, GraduationCap, ExternalLink, BookOpen, CheckCircle2 } from "lucide-react";

export default function Recommendations({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = translations[lang] || translations["es"];
  const recs = t.recommendations;

  return (
    <section id="recomendaciones" className="py-24 px-6 relative bg-background border-b border-border">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* ================================================== */}
        {/* 1. SECCIÓN CERTIFICACIONES Y FORMACIÓN */}
        {/* ================================================== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>{lang === "es" ? "Acreditaciones" : "Accreditations"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {recs.certifications.title}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-base">
              {recs.certifications.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recs.certifications.items.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/40 backdrop-blur-sm border border-border/60 hover:border-primary/40 transition-all rounded-xl p-6 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-primary/80 mt-1 mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all w-full justify-center group/btn"
                  >
                    <span>{cert.buttonText || (lang === "es" ? "Ver certificado" : "View certificate")}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================================================== */}
        {/* 2. SECCIÓN RECOMENDACIONES PROFESIONALES */}
        {/* ================================================== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === "es" ? "Respaldos Laborales" : "Work References"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {recs.title}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-base">
              {recs.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recs.items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/40 backdrop-blur-sm border border-border/60 hover:border-primary/40 transition-all rounded-xl p-6 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 w-fit mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-primary/80 mt-1 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all w-full justify-center group/btn"
                  >
                    <span>{lang === "es" ? "Ver recomendación" : "View recommendation"}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================================================== */}
        {/* 3. SECCIÓN EXPERIENCIA / RECOMENDACIÓN DOCENTE */}
        {/* ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/40 backdrop-blur-sm border border-border/60 hover:border-primary/40 transition-all rounded-2xl p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{recs.teaching.title}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {recs.teaching.item.title}
              </h3>
              <p className="text-sm font-medium text-primary/90">
                {recs.teaching.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {recs.teaching.item.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {lang === "es" ? "Comunicación Efectiva" : "Effective Communication"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {lang === "es" ? "Capacidad Explicativa" : "Teaching & Mentorship"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {lang === "es" ? "Responsabilidad Profesional" : "Professional Responsibility"}
                </span>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
              <a
                href={recs.teaching.item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/10 w-full md:w-auto group/btn"
              >
                <span>{recs.teaching.item.buttonText || (lang === "es" ? "Ver comprobante docente" : "View teaching certificate")}</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
