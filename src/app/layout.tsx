import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Juan Carlos Hernández | Full Stack Engineer",
  description: "Portafolio profesional de desarrollo de software e ingeniería",
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
