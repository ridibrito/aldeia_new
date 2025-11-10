import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aldeia Singular - Comunidade para Pais de Crianças com Altas Habilidades",
  description: "A jornada parental nas altas habilidades e superdotação não precisa ser solitária. Junte-se à Aldeia Singular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
