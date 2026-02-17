import "./globals.css";

export const metadata = {
  title: "Juan Carlos Hernández | Ingeniero en Sistemas",
  description: "Portafolio profesional de desarrollo de software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
