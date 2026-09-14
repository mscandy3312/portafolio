import "./globals.css";
import { Outfit } from "next/font/google";
import { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Carlos Hernández | Full Stack Engineer & Microservices Architect",
  description: "Portafolio profesional de Juan Carlos Hernández - Ingeniero en Sistemas Computacionales con +7 años de experiencia en desarrollo Full Stack, Java 17, Spring Boot y Next.js.",
  keywords: ["Juan Carlos Hernández", "Full Stack Engineer", "Java", "Spring Boot", "Microservicios", "Next.js", "React", "TypeScript", "SHCP COMPRANET", "Portafolio"],
  authors: [{ name: "Juan Carlos Hernández" }],
  openGraph: {
    title: "Juan Carlos Hernández | Full Stack Engineer & Microservices Architect",
    description: "Ingeniero en Sistemas Computacionales con +7 años de experiencia en arquitecturas escalables, Java 17, Spring Boot, Next.js y soluciones empresariales.",
    url: "https://github.com/mscandy3312/portafolio",
    siteName: "Portafolio Juan Carlos Hernández",
    images: [
      {
        url: "/projects/comprasnova.png",
        width: 1200,
        height: 630,
        alt: "Juan Carlos Hernández - Portafolio Profesional",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos Hernández | Full Stack Engineer",
    description: "Portafolio profesional de desarrollo de software, microservicios y soluciones Web/Mobile.",
    images: ["/projects/comprasnova.png"],
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

