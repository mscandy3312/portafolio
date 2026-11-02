"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Server, Shield, Wrench, Sparkles, Cpu } from "lucide-react";

interface SkillsProps {
  lang: "es" | "en";
}

export default function Skills({ lang }: SkillsProps) {
  const isEs = lang === "es";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: isEs ? "Todas las tecnologías" : "All Stacks" },
    { id: "primary", label: isEs ? "Especialidad Principal (.NET & SQL)" : "Primary Specialty (.NET & SQL)" },
    { id: "web", label: isEs ? "Web & Full Stack" : "Web & Full Stack" },
    { id: "infrastructure", label: isEs ? "Infraestructura & CCTV" : "Infrastructure & CCTV" },
    { id: "complementary", label: isEs ? "Cloud & Mobile" : "Cloud & Mobile" },
  ];

  const skillGroups = [
    {
      id: "primary",
      categoryName: isEs ? "NIVEL 1" : "LEVEL 1",
      title: isEs ? "ESPECIALIDAD PRINCIPAL (.NET / C# & SQL SERVER)" : "PRIMARY SPECIALTY (.NET / C# & SQL SERVER)",
      description: isEs 
        ? "Tecnologías y competencias centrales respaldadas por trayectoria profesional comprobable en desarrollo de sistemas empresariales y administración de bases de datos críticas."
        : "Core technologies and competencies backed by verified enterprise software experience in mission-critical environments.",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30 font-bold",
      items: [
        "C#",
        ".NET Core",
        "ASP.NET Core",
        "Arquitectura MVC",
        "SQL Server",
        "Optimización de consultas SQL",
        "Soporte técnico COMPRANET",
        "RESTful APIs",
        "Entity Framework",
        "Alta Disponibilidad",
      ],
    },
    {
      id: "web",
      categoryName: isEs ? "NIVEL 2" : "LEVEL 2",
      title: isEs ? "DESARROLLO WEB FULL STACK" : "FULL STACK WEB DEVELOPMENT",
      description: isEs
        ? "Ecosistema web moderno, frameworks reactivos, diseño responsivo y herramientas aplicadas en plataformas corporativas e independientes."
        : "Modern web ecosystem, reactive frameworks, responsive design, and tools used across enterprise applications.",
      icon: <Server className="w-6 h-6 text-indigo-500" />,
      badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30 font-semibold",
      items: [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Node.js",
        "HTML5 / CSS3",
        "Laravel / PHP",
        "MySQL",
        "Three.js / WebGL",
        "Framer Motion",
        "Git / GitHub",
      ],
    },
    {
      id: "infrastructure",
      categoryName: isEs ? "NIVEL 3" : "LEVEL 3",
      title: isEs ? "INFRAESTRUCTURA, REDES & SEGURIDAD CCTV" : "INFRASTRUCTURE, NETWORKING & CCTV",
      description: isEs
        ? "Instalación física y lógica de cableado estructurado certificado, cámaras de videovigilancia IP/analógicas, NVR/DVR y configuración de redes empresariales."
        : "Physical and logical installation of certified structured cabling, IP/analog CCTV, NVR/DVR, and enterprise networking.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-semibold",
      items: [
        "Cableado Estructurado Cat6 / Cat5e",
        "Sistemas CCTV IP & Analógicas",
        "Grabación DVR / NVR Pro",
        "Racks y Gabinetes de Telecomunicaciones",
        "Switches Administrables & Routers",
        "Puntos de Red & Telefonía",
        "Mantenimiento Hardware & Pasta Térmica",
        "Diagnóstico y Reparación de Equipos",
      ],
    },
    {
      id: "complementary",
      categoryName: isEs ? "NIVEL 4" : "LEVEL 4",
      title: isEs ? "CLOUD, MÓVIL & HERRAMIENTAS COMPLEMENTARIAS" : "CLOUD, MOBILE & COMPLEMENTARY TOOLS",
      description: isEs
        ? "Servicios cloud, aplicaciones móviles multiplataforma, bases de datos no relacionales y pasarelas de pago integradas."
        : "Cloud services, cross-platform mobile apps, NoSQL databases, and integrated payment gateways.",
      icon: <Wrench className="w-6 h-6 text-purple-500" />,
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30 font-normal",
      items: [
        "AWS (EC2, S3)",
        "Firebase / Firestore",
        "React Native",
        "Prisma ORM",
        "Stripe Payments",
        "Google Cloud Platform (GCP)",
        "WordPress & Elementor",
        "Adobe Photoshop",
      ],
    },
  ];

  const filteredGroups = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 relative bg-card-bg border-y border-border">
      <div id="especialidades" className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Cpu className="w-4 h-4 text-blue-500" />
            <span>{isEs ? "Capacidad Técnica & Stacks" : "Technical Capability & Stacks"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            {isEs ? "Habilidades & " : "Skills & "}
            <span className="text-gradient">
              {isEs ? "Especialidades Técnicas" : "Technical Specialties"}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            {isEs
              ? "Herramientas y tecnologías que utilizo para desarrollar sistemas empresariales, aplicaciones web, cableado de red y soluciones de seguridad física."
              : "Tools and technologies I use to develop enterprise software, web applications, network cabling, and physical security solutions."}
          </p>
        </motion.div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "glass text-slate-600 dark:text-slate-300 hover:border-blue-500/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SKILLS GROUPS */}
        <div className="space-y-8">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-border hover:border-blue-500/30 transition-all shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                    {group.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                      {group.categoryName}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{group.title}</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md font-light">
                  {group.description}
                </p>
              </div>

              {/* BADGES GRID */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2.5 rounded-xl border text-sm transition-all flex items-center gap-2 cursor-default ${group.badgeColor}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current opacity-70" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}