export interface ServicePricing {
  concept: string;
  price: string;
}

export interface ServiceItem {
  id: string;
  pillar?: number; // 1, 2, 3 for core commercial pillars
  isPillar: boolean; // true for core commercial lines, false for additional creative services
  pillarLabel: string;
  priorityBadge: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  pricing: ServicePricing[];
  note: string;
  iconName: "Code2" | "Globe" | "Network" | "Camera" | "Video" | "Sparkles" | "Wrench" | "Cpu" | "Database" | "Workflow";
  colorGradient: string;
  glowColor: string;
}

export const servicesData: { es: ServiceItem[]; en: ServiceItem[] } = {
  es: [
    {
      id: "software-empresarial",
      pillar: 1,
      isPillar: true,
      pillarLabel: "LÍNEA COMERCIAL 1",
      priorityBadge: "Prioridad Principal • B2B",
      category: "Desarrollo Empresarial",
      title: "Desarrollo de Software Empresarial",
      subtitle: "Sistemas administrativos, ERP, plataformas SaaS y automatización.",
      badge: "Especialidad Core",
      description: "Transformamos procesos de negocio en soluciones digitales escalables. Construimos sistemas a la medida, módulos ERP, APIs de integración y optimizamos bases de datos críticas para reducir costos y acelerar operaciones.",
      features: [
        "Sistemas administrativos y ERP a la medida (.NET C# / SQL Server)",
        "Plataformas web corporativas y arquitecturas SaaS escalables",
        "Desarrollo e integración de APIs RESTful y microservicios seguros",
        "Automatización de procesos empresariales y flujos de trabajo",
        "Bases de datos de alto rendimiento y optimización avanzada SQL Server",
        "Alta disponibilidad, roles de usuario granulares y seguridad empresarial"
      ],
      pricing: [
        { concept: "Módulo / Sistema Administrativo", price: "$8,000 – $25,000 MXN" },
        { concept: "Plataforma Web / SaaS a medida", price: "$15,000 – $40,000 MXN" },
        { concept: "Integración de APIs & Automatizaciones", price: "$4,000 – $12,000 MXN" }
      ],
      note: "Presupuesto adaptado a la arquitectura, volumen de datos y requerimientos técnicos.",
      iconName: "Code2",
      colorGradient: "from-blue-600 via-indigo-600 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.4)"
    },
    {
      id: "web-growth",
      pillar: 2,
      isPillar: true,
      pillarLabel: "LÍNEA COMERCIAL 2",
      priorityBadge: "Prioridad Principal • Ventas & Crecimiento",
      category: "Crecimiento Digital",
      title: "Desarrollo Web & Crecimiento Digital",
      subtitle: "Landing pages, sitios corporativos, tiendas y embudos automatizados.",
      badge: "Alta Conversión",
      description: "Desarrollo web estratégico diseñado para vender y captar clientes: páginas de aterrizaje de máxima velocidad, tiendas online completas y embudos sincronizados con tus plataformas de venta.",
      features: [
        "Landing pages de alta conversión diseñadas para generar prospectos",
        "Sitios web corporativos que transmiten confianza y máxima autoridad",
        "Tiendas en línea completas (E-commerce) con pasarelas de pago seguras",
        "Embudos de venta automatizados para captación continua de clientes",
        "Integraciones directas con Hotmart, Make y Systeme.io",
        "Optimización SEO para posicionamiento en Google y velocidad de carga"
      ],
      pricing: [
        { concept: "Landing page de alta conversión", price: "$2,500 – $5,000 MXN" },
        { concept: "Sitio web corporativo profesional", price: "$5,000 – $12,000 MXN" },
        { concept: "Tienda online / Embudo automatizado", price: "$8,000 – $20,000 MXN" }
      ],
      note: "Totalmente responsivo (PC, tablet y móvil) con analítica e integraciones.",
      iconName: "Globe",
      colorGradient: "from-emerald-500 via-teal-500 to-cyan-400",
      glowColor: "rgba(16, 185, 129, 0.4)"
    },
    {
      id: "infraestructura-soporte",
      pillar: 3,
      isPillar: true,
      pillarLabel: "LÍNEA COMERCIAL 3",
      priorityBadge: "Servicio Complementario • Conectividad & Seguridad",
      category: "Infraestructura & Soporte",
      title: "Infraestructura & Soporte Tecnológico",
      subtitle: "Redes estructuradas, videovigilancia CCTV y soporte de equipos.",
      badge: "Presencial & Remoto",
      description: "Garantizamos la estabilidad y seguridad operativa de tu negocio: cableado certificado de alta velocidad, cámaras inteligentes con visión nocturna y acceso móvil, y mantenimiento experto de equipos.",
      features: [
        "Diseño e instalación de cableado estructurado Cat6 / Cat5e y gabinetes racks",
        "Sistemas de videovigilancia CCTV profesional (IP / analógicas, DVR / NVR) 24/7",
        "Acceso y monitoreo remoto seguro desde smartphone o computadora",
        "Configuración de switches administrables, routers y telefonía IP",
        "Mantenimiento preventivo y correctivo (Workstations, PC Gamer, Consolas)",
        "Diagnóstico de hardware, cambio de pasta térmica y limpieza profunda"
      ],
      pricing: [
        { concept: "Punto de red Cat6 (material + instalación)", price: "$500 – $1,000 MXN" },
        { concept: "Kit CCTV 4 Cámaras + NVR configurado", price: "$4,500 – $7,000 MXN" },
        { concept: "Mantenimiento / Soporte de equipo", price: "$400 – $800 MXN" }
      ],
      note: "Precios sujetos a distancia, tipo de instalación y marca de equipos (Hikvision, Dahua).",
      iconName: "Network",
      colorGradient: "from-purple-600 via-violet-600 to-indigo-500",
      glowColor: "rgba(168, 85, 247, 0.4)"
    },
    {
      id: "video-editing",
      isPillar: false,
      pillarLabel: "SERVICIO ADICIONAL",
      priorityBadge: "Servicio Adicional",
      category: "Creatividad Digital",
      title: "Edición de Video Profesional",
      subtitle: "Contenido dinámico para redes y material publicitario.",
      badge: "Multimedia",
      description: "Edición de video con ritmo, retención y diseño moderno pensada para complementar tus campañas y presencia digital en redes sociales.",
      features: [
        "Edición vertical para Reels, TikTok y YouTube Shorts",
        "Videos corporativos, testimoniales y piezas publicitarias",
        "Edición de cursos online, masterclasses y tutoriales",
        "Subtítulos dinámicos con efectos y corrección de color",
        "Renderizado en alta resolución 4K optimizado para web"
      ],
      pricing: [
        { concept: "Video corto para redes (hasta 1 min)", price: "$500 – $1,000 MXN" },
        { concept: "Video promocional medio (2 a 5 min)", price: "$1,000 – $2,000 MXN" },
        { concept: "Pieza profesional (> 5 min)", price: "$2,500 – $5,000 MXN" }
      ],
      note: "Sujeto a complejidad de animación, efectos y volumen de piezas solicitadas.",
      iconName: "Video",
      colorGradient: "from-rose-500 to-pink-500",
      glowColor: "rgba(244, 63, 94, 0.3)"
    },
    {
      id: "photo-design",
      isPillar: false,
      pillarLabel: "SERVICIO ADICIONAL",
      priorityBadge: "Servicio Adicional",
      category: "Creatividad Digital",
      title: "Edición de Fotos y Diseño Gráfico",
      subtitle: "Banners publicitarios, retoque y flyers digitales.",
      badge: "Diseño Gráfico",
      description: "Diseño visual pulido que proyecta confianza y profesionalismo para tus campañas en redes y plataformas publicitarias.",
      features: [
        "Diseño de banners publicitarios para campañas digitales",
        "Flyers, portadas digitales y piezas gráficas para promociones",
        "Retoque fotográfico profesional y limpieza de imperfecciones",
        "Composiciones avanzadas y fotomontajes en Adobe Photoshop",
        "Assets y recursos visuales adaptados a cada red social"
      ],
      pricing: [
        { concept: "Retoque / edición básica", price: "$150 – $300 MXN" },
        { concept: "Diseño de banners / flyers", price: "$500 – $1,500 MXN" },
        { concept: "Paquete gráfico para campaña", price: "$2,000 – $4,000 MXN" }
      ],
      note: "Depende del número de piezas requeridas y complejidad de la composición.",
      iconName: "Sparkles",
      colorGradient: "from-amber-500 to-orange-400",
      glowColor: "rgba(245, 158, 11, 0.3)"
    }
  ],
  en: [
    {
      id: "software-empresarial",
      pillar: 1,
      isPillar: true,
      pillarLabel: "COMMERCIAL LINE 1",
      priorityBadge: "Core Priority • B2B",
      category: "Enterprise Development",
      title: "Enterprise Software Engineering",
      subtitle: "Custom systems, ERP, scalable SaaS platforms, and automation.",
      badge: "Core Specialty",
      description: "We transform business operations into scalable digital software. We build tailored systems, ERP modules, integration APIs, and optimize critical SQL databases to lower costs and accelerate workflows.",
      features: [
        "Custom administrative systems and ERP (.NET C# / SQL Server)",
        "Enterprise-grade corporate web platforms and scalable SaaS architectures",
        "Secure RESTful APIs and microservice integrations",
        "Business process automation and data pipeline workflows",
        "High-performance databases and advanced SQL Server query tuning",
        "High availability, granular role-based permissions, and enterprise security"
      ],
      pricing: [
        { concept: "Custom Administrative Module / ERP", price: "$8,000 – $25,000 MXN (~$450 – $1,400 USD)" },
        { concept: "Custom Web Platform / SaaS", price: "$15,000 – $40,000 MXN (~$850 – $2,250 USD)" },
        { concept: "API Integrations & Automations", price: "$4,000 – $12,000 MXN (~$225 – $675 USD)" }
      ],
      note: "Custom quotation based on architecture, modules, and transaction volume.",
      iconName: "Code2",
      colorGradient: "from-blue-600 via-indigo-600 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.4)"
    },
    {
      id: "web-growth",
      pillar: 2,
      isPillar: true,
      pillarLabel: "COMMERCIAL LINE 2",
      priorityBadge: "Core Priority • Sales & Growth",
      category: "Digital Growth",
      title: "Web Development & Digital Growth",
      subtitle: "High-converting landing pages, corporate websites, stores & funnels.",
      badge: "High Conversion",
      description: "Strategic web development engineered to sell and capture clients: ultra-fast pages, authoritative design, full e-commerce stores, and funnels connected with marketing tools.",
      features: [
        "High-converting landing pages engineered to generate qualified leads",
        "Modern corporate websites projecting authority and brand trust",
        "Full e-commerce online stores with integrated card payment gateways",
        "Automated sales funnels for continuous lead acquisition",
        "Direct integrations with Hotmart, Make, and Systeme.io",
        "Foundational SEO optimization for Google rankings and lightning load speed"
      ],
      pricing: [
        { concept: "High-Converting Landing Page", price: "$2,500 – $5,000 MXN (~$140 – $280 USD)" },
        { concept: "Professional Corporate Website", price: "$5,000 – $12,000 MXN (~$280 – $670 USD)" },
        { concept: "E-Commerce / Automated Sales Funnel", price: "$8,000 – $20,000 MXN (~$450 – $1,120 USD)" }
      ],
      note: "100% responsive across devices with integrated analytics and tracking.",
      iconName: "Globe",
      colorGradient: "from-emerald-500 via-teal-500 to-cyan-400",
      glowColor: "rgba(16, 185, 129, 0.4)"
    },
    {
      id: "infraestructura-soporte",
      pillar: 3,
      isPillar: true,
      pillarLabel: "COMMERCIAL LINE 3",
      priorityBadge: "Complementary Service • Connectivity & Security",
      category: "Infrastructure & Support",
      title: "Infrastructure & Tech Support",
      subtitle: "Structured cabling, CCTV surveillance, and hardware maintenance.",
      badge: "On-site & Remote",
      description: "We guarantee operational stability and security: certified high-speed network cabling, smart CCTV surveillance with night vision and remote phone monitoring, and expert workstation maintenance.",
      features: [
        "Certified Cat6 / Cat5e structured cabling design and server rack assembly",
        "Professional CCTV video surveillance (IP / Analog, DVR / NVR) 24/7",
        "Encrypted live remote feed accessible anytime from smartphone or PC",
        "Configuration of managed network switches, routers, and VoIP",
        "Preventive and corrective hardware maintenance (Workstations, PC, Consoles)",
        "Hardware diagnostics, deep cleaning, and thermal paste replacement"
      ],
      pricing: [
        { concept: "Cat6 Network Point (material + labor)", price: "$500 – $1,000 MXN (~$30 – $60 USD)" },
        { concept: "4-Camera Kit CCTV + Configured NVR", price: "$4,500 – $7,000 MXN (~$250 – $400 USD)" },
        { concept: "Computer / Hardware Maintenance", price: "$400 – $800 MXN (~$25 – $45 USD)" }
      ],
      note: "Prices subject to distance, environment, and hardware brands (Hikvision, Dahua).",
      iconName: "Network",
      colorGradient: "from-purple-600 via-violet-600 to-indigo-500",
      glowColor: "rgba(168, 85, 247, 0.4)"
    },
    {
      id: "video-editing",
      isPillar: false,
      pillarLabel: "ADDITIONAL SERVICE",
      priorityBadge: "Additional Service",
      category: "Creative Media",
      title: "Professional Video Editing",
      subtitle: "Dynamic video content for social channels and advertising.",
      badge: "Multimedia",
      description: "Fast-paced, modern video editing designed to boost social engagement and support your marketing campaigns.",
      features: [
        "Vertical editing for Reels, TikTok, and YouTube Shorts",
        "Corporate promo videos, customer testimonials, and ads",
        "Editing for online courses, tutorials, and masterclasses",
        "Dynamic subtitles, sound design, and color grading",
        "High-definition 4K rendering optimized for web delivery"
      ],
      pricing: [
        { concept: "Short social video (up to 1 min)", price: "$500 – $1,000 MXN (~$30 – $60 USD)" },
        { concept: "Medium promotional video (2 to 5 min)", price: "$1,000 – $2,000 MXN (~$60 – $115 USD)" },
        { concept: "Full professional production (> 5 min)", price: "$2,500 – $5,000 MXN (~$140 – $280 USD)" }
      ],
      note: "Depends on motion graphics complexity, sound design, and video count.",
      iconName: "Video",
      colorGradient: "from-rose-500 to-pink-500",
      glowColor: "rgba(244, 63, 94, 0.3)"
    },
    {
      id: "photo-design",
      isPillar: false,
      pillarLabel: "ADDITIONAL SERVICE",
      priorityBadge: "Additional Service",
      category: "Creative Media",
      title: "Photo Retouching & Graphic Design",
      subtitle: "Ad banners, digital flyers, and Photoshop compositions.",
      badge: "Graphic Design",
      description: "Polished graphic design projecting confidence and credibility for digital campaigns and social media presence.",
      features: [
        "Digital ad banners for social media and marketing campaigns",
        "Flyers, digital covers, and promotional creative assets",
        "Professional photo retouching and background enhancements",
        "Advanced compositing and manipulation in Adobe Photoshop",
        "Brand assets tailored to platform specifications"
      ],
      pricing: [
        { concept: "Basic photo retouching", price: "$150 – $300 MXN (~$10 – $20 USD)" },
        { concept: "Banner / Digital Flyer design", price: "$500 – $1,500 MXN (~$30 – $85 USD)" },
        { concept: "Full campaign graphic kit", price: "$2,000 – $4,000 MXN (~$115 – $230 USD)" }
      ],
      note: "Based on required deliverable count and graphic detail.",
      iconName: "Sparkles",
      colorGradient: "from-amber-500 to-orange-400",
      glowColor: "rgba(245, 158, 11, 0.3)"
    }
  ]
};
