export const personalData = {
  name: "Juan Carlos Andrés Hernández",
  title: "Ingeniero en Sistemas Computacionales",
  experience: "+7 años",
  location: "Ciudad de México",
  email: "jcarlos61200@gmail.com",
  phone: "5663852677",
  profile: "Ingeniero en Sistemas con más de 7 años de experiencia en desarrollo de software y administración de plataformas críticas como COMPRANET. Experto en arquitecturas MVC, .NET (C#) y SQL Server, con enfoque en alta disponibilidad y modernización tecnológica.",
  skills: {
    frontend: ["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML5/CSS"],
    backend: [".NET (C#)", "ASP.NET Core", "Laravel", "Node.js", "PHP"],
    mobile: ["Kotlin", "React Native", "Android Studio"],
    database: ["SQL Server", "MySQL", "Prisma", "Firebase/Firestore"],
    tools: ["AWS", "Power BI (DAX)", "Cisco (Networking)"]
  }
};

export const projects = [
  {
    title: "ERP en Next.js + Prisma + Tailwind",
    description: "Sistema integral para gestión de proyectos, recursos humanos y analítica.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"],
    highlights: "Dashboards dinámicos e integración escalable.",
    image: "/images/erp-next.jpg"
  },
  {
    title: "Administración COMPRANET (SHCP-SFP)",
    description: "Administración técnica y funcional del Sistema de Contrataciones Públicas a nivel federal.",
    tech: [".NET", "SQL Server", "Arquitectura MVC"],
    highlights: "Resolución de más de 100 incidencias mensuales asegurando la continuidad del servicio.",
    image: "/images/compranet.jpg"
  },
  {
    title: "ERP en React Native + Firebase",
    description: "Aplicación móvil multiplataforma para gestión empresarial con sincronización en tiempo real.",
    tech: ["React Native", "Firebase", "JavaScript"],
    highlights: "Acceso móvil en tiempo real a información corporativa.",
    image: "/images/erp-mobile.jpg"
  },
  {
    title: "Sistema de Ventas en Laravel",
    description: "Gestión moderna de inventarios y control administrativo automatizado.",
    tech: ["Laravel", "PHP", "MySQL", "phpMyAdmin"],
    highlights: "Optimización de procesos de venta listos para producción.",
    image: "/images/ventas.jpg"
  },
  {
    title: "Guardianes de la Luz",
    description: "Obra literaria de 60 capítulos con estilo dark/gótico y maquetación profesional.",
    tech: ["Edición Editorial", "Maquetación profesional"],
    highlights: "Documento listo para publicación física y digital.",
    image: "/images/libro.jpg"
  }
];