export interface ServicePricing {
  concept: string;
  price: string;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  pricing: ServicePricing[];
  note: string;
  iconName: "Globe" | "Network" | "Camera" | "Video" | "Sparkles" | "Wrench";
  colorGradient: string;
  glowColor: string;
}

export const servicesData = {
  es: [
    {
      id: "web-dev",
      category: "Desarrollo Digital",
      title: "Páginas Web y Landing Pages",
      subtitle: "Sitios modernos, rápidos y optimizados para tus objetivos.",
      badge: "Más Solicitado",
      description: "Creamos experiencias digitales de alto impacto que transforman visitantes en clientes leales. Diseño moderno, adaptado a cualquier dispositivo y con máxima velocidad.",
      features: [
        "Sitios web corporativos de alta presencia",
        "Landing pages estratégicas (captación de clientes)",
        "Tiendas en línea (e-commerce) completas",
        "Diseño 100% responsivo (PC, tablet y móvil)",
        "Optimización SEO básico para Google",
        "Integración con redes sociales, formularios y pasarelas de pago"
      ],
      pricing: [
        { concept: "Landing page", price: "$2,500 – $5,000 MXN" },
        { concept: "Sitio web corporativo", price: "$5,000 – $12,000 MXN" },
        { concept: "Tienda en línea", price: "$8,000 – $20,000 MXN" }
      ],
      note: "Puede variar según la complejidad y funcionalidades requeridas.",
      iconName: "Globe" as const,
      colorGradient: "from-blue-500 to-cyan-400",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      id: "networking",
      category: "Infraestructura y Monitoreo",
      title: "Cableado Estructurado",
      subtitle: "Redes seguras y estables para tu negocio u hogar.",
      badge: "Infraestructura",
      description: "Garantizamos conexiones de máxima estabilidad y velocidad para oficinas, comercios y hogares, eliminando pérdidas de señal y caídas de red.",
      features: [
        "Diseño e instalación profesional de redes de datos",
        "Cableado Cat5e / Cat6 de alto rendimiento",
        "Montaje y orden de Racks y gabinetes",
        "Puntos de red y telefonía IP",
        "Certificación y mapeo de cableado",
        "Configuración de switches administrables y routers"
      ],
      pricing: [
        { concept: "Punto de red (material + inst.)", price: "$500 – $1,000 MXN" },
        { concept: "Cableado por metro (Cat6)", price: "$25 – $40 MXN" },
        { concept: "Rack / gabinete", price: "$2,000 – $5,000 MXN" }
      ],
      note: "Depende de la distancia, materiales y tipo de red a implementar.",
      iconName: "Network" as const,
      colorGradient: "from-emerald-500 to-teal-400",
      glowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      id: "security-cctv",
      category: "Infraestructura y Monitoreo",
      title: "Sistemas de Video Vigilancia Pro",
      subtitle: "Monitoreo 24/7 y soluciones integrales de seguridad.",
      badge: "Seguridad 24/7",
      description: "Protege tu patrimonio con tecnología de vanguardia. Cámaras inteligentes con visión nocturna y acceso total desde tu smartphone en cualquier lugar del mundo.",
      features: [
        "Cámaras de Alta Resolución (IP / Analógicas / Domo)",
        "Instalación limpia y configuración profesional",
        "Sistemas de grabación continua DVR / NVR Pro",
        "Acceso remoto cifrado y seguro (PC y Móvil)",
        "Monitoreo 24/7 con detección y alertas inteligentes",
        "Soluciones a medida para Casa, Negocio e Industria"
      ],
      pricing: [
        { concept: "Cámara Individual Pro", price: "$600 – $1,000 MXN" },
        { concept: "Kit 4 Cámaras + NVR Pro", price: "$4,500 – $7,000 MXN" },
        { concept: "Instalación por Cámara", price: "$250 – $400 MXN" }
      ],
      note: "Los precios pueden variar según marca (Hikvision, Dahua) y complejidad.",
      iconName: "Camera" as const,
      colorGradient: "from-purple-500 to-indigo-500",
      glowColor: "rgba(168, 85, 247, 0.3)"
    },
    {
      id: "video-editing",
      category: "Producción Multimedia",
      title: "Edición de Video Profesional",
      subtitle: "Convierte tus videos en contenido que impacta.",
      badge: "Creatividad",
      description: "Dale vida y dinamismo a tus grabaciones con ritmo, retención y edición moderna pensada para multiplicar tus conversiones y vistas.",
      features: [
        "Edición vertical para Reels, TikTok, YouTube Shorts",
        "Videos corporativos, promocionales y publicitarios",
        "Edición de cursos online, podcasts y tutoriales",
        "Corrección de color cinematográfica y efectos visuales",
        "Subtítulos dinámicos y música con licencias comerciales",
        "Renderizado en 4K y compresión optimizada"
      ],
      pricing: [
        { concept: "Video corto (hasta 1 min)", price: "$500 – $1,000 MXN" },
        { concept: "Video medio (2 a 5 min)", price: "$1,000 – $2,000 MXN" },
        { concept: "Pieza profesional (> 5 min)", price: "$2,500 – $5,000 MXN" }
      ],
      note: "Dependiendo de la complejidad de motion graphics y requerimientos.",
      iconName: "Video" as const,
      colorGradient: "from-rose-500 to-pink-500",
      glowColor: "rgba(244, 63, 94, 0.3)"
    },
    {
      id: "photo-design",
      category: "Producción Multimedia",
      title: "Edición de Fotos y Diseño",
      subtitle: "Haz que tus imágenes hablen por ti.",
      badge: "Branding",
      description: "Diseño visual pulido que proyecta confianza y profesionalismo en cada píxel para tus redes y material publicitario.",
      features: [
        "Retoque fotográfico profesional y limpieza de piel",
        "Corrección avanzada de color e iluminación",
        "Eliminación de objetos o personas no deseadas",
        "Diseño de banners publicitarios y flyers digitales",
        "Composición avanzada en Adobe Photoshop",
        "Imágenes de perfil corporativas y assets para redes"
      ],
      pricing: [
        { concept: "Edición básica (retoque)", price: "$150 – $200 MXN" },
        { concept: "Edición avanzada (composición)", price: "$300 – $800 MXN" },
        { concept: "Diseño de banners / flyers", price: "$500 – $1,500 MXN" }
      ],
      note: "Depende del tiempo de diseño y nivel de detalle requerido.",
      iconName: "Sparkles" as const,
      colorGradient: "from-amber-500 to-orange-400",
      glowColor: "rgba(245, 158, 11, 0.3)"
    },
    {
      id: "tech-support",
      category: "Soporte Técnico y Hardware",
      title: "Servicio Técnico: Consolas, PC y Móviles",
      subtitle: "Mantenimiento y reparación de equipos de cómputo y dispositivos móviles.",
      badge: "Soporte Especializado",
      description: "Diagnóstico preciso y reparación experta con refacciones de calidad para que tus herramientas de trabajo y entretenimiento funcionen como el primer día.",
      features: [
        "Mantenimiento Preventivo y Correctivo (Consolas y PC Gamer / Workstation)",
        "Reparación de Celulares (Pantallas, baterías, centros de carga)",
        "Actualización y reinstalación de Software / Sistemas Operativos",
        "Limpieza profunda de hardware, despolvado y cambio de pasta térmica",
        "Optimización de rendimiento, eliminación de virus y configuración de red"
      ],
      pricing: [
        { concept: "Mantenimiento consolas / PC", price: "$300 – $600 MXN" },
        { concept: "Software (PC / Móvil)", price: "$200 – $500 MXN" },
        { concept: "Limpieza profunda de equipo", price: "$400 – $800 MXN" },
        { concept: "Reparación hardware celular", price: "Previa cotización" }
      ],
      note: "Puede variar según modelo, diagnóstico y costo de refacciones.",
      iconName: "Wrench" as const,
      colorGradient: "from-sky-500 to-blue-600",
      glowColor: "rgba(14, 165, 233, 0.3)"
    }
  ],
  en: [
    {
      id: "web-dev",
      category: "Digital Development",
      title: "Websites & Landing Pages",
      subtitle: "Modern, ultra-fast websites optimized for your goals.",
      badge: "Most Popular",
      description: "High-impact digital experiences that turn visitors into loyal clients. Clean modern design, responsive across devices, and blazing speed.",
      features: [
        "Corporate websites with strong brand presence",
        "Conversion-focused landing pages",
        "Full e-commerce online stores",
        "100% responsive design (PC, tablet, and mobile)",
        "Foundational SEO for Google ranking",
        "Social media, custom forms, and payment gateways"
      ],
      pricing: [
        { concept: "Landing page", price: "$2,500 – $5,000 MXN (~$140 – $280 USD)" },
        { concept: "Corporate website", price: "$5,000 – $12,000 MXN (~$280 – $670 USD)" },
        { concept: "Online Store (E-commerce)", price: "$8,000 – $20,000 MXN (~$450 – $1,120 USD)" }
      ],
      note: "Prices may vary depending on project complexity and required features.",
      iconName: "Globe" as const,
      colorGradient: "from-blue-500 to-cyan-400",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      id: "networking",
      category: "Infrastructure & Monitoring",
      title: "Structured Cabling & Networking",
      subtitle: "Secure and resilient networks for business or home.",
      badge: "Infrastructure",
      description: "We guarantee maximum speed and reliable connections for offices, retail, and homes, eliminating packet loss and dead zones.",
      features: [
        "Professional data network design and setup",
        "High-performance Cat5e / Cat6 cabling",
        "Server racks and network cabinets organization",
        "Network data points and VoIP telephony",
        "Cabling certification and diagnostics",
        "Managed switches and router configuration"
      ],
      pricing: [
        { concept: "Network drop (materials + labor)", price: "$500 – $1,000 MXN" },
        { concept: "Cabling per meter (Cat6)", price: "$25 – $40 MXN" },
        { concept: "Rack / cabinet installation", price: "$2,000 – $5,000 MXN" }
      ],
      note: "Subject to distance, environment, and network architecture.",
      iconName: "Network" as const,
      colorGradient: "from-emerald-500 to-teal-400",
      glowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      id: "security-cctv",
      category: "Infrastructure & Monitoring",
      title: "Professional CCTV & Video Surveillance",
      subtitle: "24/7 monitoring and comprehensive security solutions.",
      badge: "24/7 Security",
      description: "Protect your assets with high-definition smart surveillance. Crystal clear night vision and remote live feed straight to your smartphone.",
      features: [
        "High-resolution cameras (IP / Analog / Dome)",
        "Clean, professional installation and cabling",
        "Continuous DVR / NVR Pro recording systems",
        "Encrypted remote access (PC and mobile apps)",
        "24/7 motion detection and smart instant alerts",
        "Custom setups for homes, retail, and enterprise"
      ],
      pricing: [
        { concept: "Individual Pro Camera", price: "$600 – $1,000 MXN" },
        { concept: "4-Camera Kit + NVR Pro", price: "$4,500 – $7,000 MXN" },
        { concept: "Installation per camera", price: "$250 – $400 MXN" }
      ],
      note: "Prices vary by hardware brand (Hikvision, Dahua) and complexity.",
      iconName: "Camera" as const,
      colorGradient: "from-purple-500 to-indigo-500",
      glowColor: "rgba(168, 85, 247, 0.3)"
    },
    {
      id: "video-editing",
      category: "Multimedia Production",
      title: "Professional Video Editing",
      subtitle: "Turn raw footage into viral, high-retention stories.",
      badge: "Creative",
      description: "Engaging video cuts tailored for maximum audience retention, slick motion graphics, and audio mastering.",
      features: [
        "Short-form content for Reels, TikTok, and YouTube Shorts",
        "Corporate, commercial, and promotional videos",
        "Course lectures, podcast production, and tutorials",
        "Cinematic color grading and visual effects",
        "Dynamic kinetic subtitles and royalty-free music",
        "Crisp 4K rendering and web-optimized compression"
      ],
      pricing: [
        { concept: "Short video (up to 1 min)", price: "$500 – $1,000 MXN" },
        { concept: "Medium video (2 to 5 min)", price: "$1,000 – $2,000 MXN" },
        { concept: "Full production (> 5 min)", price: "$2,500 – $5,000 MXN" }
      ],
      note: "Depends on animation detail and specific asset requirements.",
      iconName: "Video" as const,
      colorGradient: "from-rose-500 to-pink-500",
      glowColor: "rgba(244, 63, 94, 0.3)"
    },
    {
      id: "photo-design",
      category: "Multimedia Production",
      title: "Photo Retouching & Graphic Design",
      subtitle: "Visual storytelling that elevates your brand identity.",
      badge: "Branding",
      description: "Crisp visual design that builds trust and authority across social media, flyers, and advertising campaigns.",
      features: [
        "Professional skin retouching and object cleanup",
        "Advanced color balance and lighting corrections",
        "Background removal and object replacement",
        "Advertising banners and high-res print flyers",
        "Advanced Photoshop matte painting and compositions",
        "Brand assets and social media branding kits"
      ],
      pricing: [
        { concept: "Basic retouching", price: "$150 – $200 MXN" },
        { concept: "Advanced compositing", price: "$300 – $800 MXN" },
        { concept: "Banner / flyer design", price: "$500 – $1,500 MXN" }
      ],
      note: "Based on design hours and composite fidelity.",
      iconName: "Sparkles" as const,
      colorGradient: "from-amber-500 to-orange-400",
      glowColor: "rgba(245, 158, 11, 0.3)"
    },
    {
      id: "tech-support",
      category: "Hardware & Tech Support",
      title: "Tech Support: Consoles, PCs & Mobile",
      subtitle: "Preventative care, hardware repair, and OS optimization.",
      badge: "Expert Support",
      description: "Thorough diagnostics and certified repairs so your gaming consoles, work PCs, and mobile devices operate at peak performance.",
      features: [
        "Preventative & corrective maintenance for PC, Laptops & Consoles",
        "Smartphone screen, battery, and charging port repair",
        "Operating system updates, recovery, and software setup",
        "Deep hardware ultrasonic dusting and premium thermal paste application",
        "Performance optimization, malware removal, and network tuning"
      ],
      pricing: [
        { concept: "Console / PC Maintenance", price: "$300 – $600 MXN" },
        { concept: "Software setup (PC / Mobile)", price: "$200 – $500 MXN" },
        { concept: "Deep hardware cleaning", price: "$400 – $800 MXN" },
        { concept: "Mobile hardware repair", price: "Free diagnostic quote" }
      ],
      note: "Costs vary according to model, damage assessment, and replacement parts.",
      iconName: "Wrench" as const,
      colorGradient: "from-sky-500 to-blue-600",
      glowColor: "rgba(14, 165, 233, 0.3)"
    }
  ]
};
