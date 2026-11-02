import "./globals.css";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://jcah-portafolio.com"),
  title: "Juan Carlos Hernández (JCAH) | Ingeniero en Sistemas Computacionales",
  description: "Desarrollamos, conectamos y hacemos crecer tus ideas. Portafolio profesional de desarrollo web, redes, videovigilancia y soporte técnico.",
  openGraph: {
    title: "Juan Carlos Hernández (JCAH) | Ingeniero en Sistemas Computacionales",
    description: "Desarrollamos, conectamos y hacemos crecer tus ideas. Sitios web, cableado estructurado, videovigilancia y soporte técnico.",
    url: "https://jcah-portafolio.com",
    siteName: "JCAH - Juan Carlos Hernández",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juan Carlos Hernández Portafolio",
      },
    ],
    locale: "es_MX",
    type: "website",
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
