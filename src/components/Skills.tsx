"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/data";

interface SkillsProps {
  lang: "es" | "en";
}

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Laravel", "PHP", "MySQL", "Prisma", "React Native",
  "Android Studio", "Firebase", "Framer Motion", "Git", "WordPress", "AWS"
];

export default function Skills({ lang }: SkillsProps) {
  const t = translations[lang] || translations["es"];

  return (
    <section id="skills" className="py-24 px-6 relative bg-card-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {lang === "es" ? "Habilidades & Tecnologías" : "Skills & Technologies"}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 glass rounded-full text-foreground font-medium shadow-sm hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
