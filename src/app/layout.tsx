import "./globals.css";
import { Outfit } from "next/font/google";
import { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/mscandy3312/portafolio"),
  title: "Juan Carlos Andrés Hernández | Ingeniero en Sistemas | .NET C# | SQL Server",
  description: "Ingeniero en Sistemas Computacionales con más de 7 años de experiencia en C#, .NET, ASP.NET Core, SQL Server, desarrollo Full Stack, React, Next.js, análisis de sistemas y soporte técnico. Experiencia en COMPRANET y desarrollo de soluciones web y empresariales.",
  keywords: [
    "Ingeniero en Sistemas",
    "Desarrollador .NET",
    "C#",
    "SQL Server",
    "ASP.NET Core",
    "React",
    "Next.js",
    "Full Stack Developer",
    "Analista de Sistemas",
    "Desarrollador Web",
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
    title: "Juan Carlos Andrés Hernández | Ingeniero en Sistemas | .NET C# | SQL Server",
    description: "Ingeniero en Sistemas Computacionales con más de 7 años de experiencia en desarrollo .NET/C#, SQL Server, React, Next.js, sistemas empresariales y soporte técnico-funcional.",
    url: "https://github.com/mscandy3312/portafolio",
    siteName: "Portafolio Profesional Juan Carlos Andrés Hernández",
    images: [
      {
        url: "/projects/erp-web.png",
        width: 1200,
        height: 630,
        alt: "Juan Carlos Andrés Hernández - Ingeniero en Sistemas .NET C# SQL Server",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos Andrés Hernández | Ingeniero en Sistemas",
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
      </body>
    </html>
  );
}
