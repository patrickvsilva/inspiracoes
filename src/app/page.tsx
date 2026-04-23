"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const dresses = [
  {
    id: 1,
    title: "Rosa Romântico",
    description: "Vestido longo em chiffon com caimento suave, ideal para casamentos diurnos.",
    image: "/dress1.png",
    style: "Boho Chic",
  },
  {
    id: 2,
    title: "Verde Sálvia",
    description: "Elegância minimalista em cetim de seda, perfeito para cerimônias clássicas.",
    image: "/dress2.png",
    style: "Minimalista",
  },
  {
    id: 3,
    title: "Azul Noturno",
    description: "Sofisticação e glamour em veludo com brilhos para festas luxuosas.",
    image: "/dress3.png",
    style: "Glamour",
  },
  {
    id: 4,
    title: "Terracota Boêmio",
    description: "Leveza e rendas para casamentos ao ar livre ou na praia no fim de tarde.",
    image: "/dress4.png",
    style: "Rústico",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-primary h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Inspirações
              </span>
              <Sparkles className="text-primary h-6 w-6" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">
              Madrinhas Inesquecíveis
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra ideias de vestidos perfeitos para acompanhar quem você ama
              nesse dia tão especial. Encontre o estilo que combina com você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {dresses.map((dress, index) => (
              <motion.div
                key={dress.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={dress.image}
                    alt={dress.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {dress.style}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {dress.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {dress.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border mt-10">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Galeria de Inspirações. Feito com amor para madrinhas.</p>
        </div>
      </footer>
    </main>
  );
}
