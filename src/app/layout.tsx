import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_SC } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const cormorant = Cormorant_SC({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-script" });

export const metadata: Metadata = {
  title: "Inspirações para Madrinhas · Luana & Patrick",
  description: "Referências de estilo e modelagem de vestidos para as madrinhas do casamento de Luana & Patrick — 26/09/2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("font-sans", inter.variable, playfair.variable, cormorant.variable)}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
