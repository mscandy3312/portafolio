import "./globals.css";
import { Outfit } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jcah-portafolio.com"),
  title: "Juan Carlos Andrés Hernández (JCAH) | Ingeniero en Sistemas | .NET C# | Full Stack",
  description: "Desarrollamos, conectamos y hacemos crecer tus ideas. Portafolio profesional de desarrollo web, .NET C#, SQL Server, redes, videovigilancia y soporte técnico.",
  keywords: [
    "Juan Carlos Andrés Hernández",
    "JCAH",
    "Ingeniero en Sistemas",
    "Desarrollador .NET",
    "C#",
    "SQL Server",
    "ASP.NET Core",
    "React",
    "Next.js",
    "Full Stack Developer",
    "Cableado Estructurado",
    "Videovigilancia CCTV",
    "MongoDB Atlas",
    "COMPRANET",
    "México",
  ],
  authors: [{ name: "Juan Carlos Andrés Hernández" }],
  creator: "Juan Carlos Andrés Hernández",
  publisher: "Juan Carlos Andrés Hernández",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Juan Carlos Andrés Hernández (JCAH) | Ingeniero en Sistemas",
    description: "Desarrollamos, conectamos y hacemos crecer tus ideas. Sitios web, sistemas empresariales, cableado estructurado, videovigilancia y soporte técnico.",
    url: "https://jcah-portafolio.com",
    siteName: "Portafolio Profesional JCAH",
    images: [
      {
        url: "/projects/erp-web.png",
        width: 1200,
        height: 630,
        alt: "Juan Carlos Andrés Hernández - JCAH Portafolio",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos Andrés Hernández (JCAH) | Ingeniero en Sistemas",
    description: "Desarrollo .NET/C#, SQL Server, React, Next.js, sistemas empresariales y administración COMPRANET.",
    images: ["/projects/erp-web.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${outfit.className} bg-background text-foreground antialiased selection:bg-blue-500/30 selection:text-blue-200 transition-colors duration-300`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
