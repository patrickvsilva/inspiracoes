"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const dresses = [
  {
    id: 1,
    title: "Vermelho Vibrante",
    description: "Corte sereia com decote coração, perfeito para uma entrada triunfal.",
    image: "/IMG_5863.JPG.jpeg",
    style: "Glamour",
  },
  {
    id: 2,
    title: "Elegância Clássica",
    description: "Vestido tomara que caia com fenda lateral, unindo sofisticação e modernidade.",
    image: "/IMG_5864.JPG.jpeg",
    style: "Clássico",
  },
  {
    id: 3,
    title: "Chic Minimalista",
    description: "Linhas limpas e tecido estruturado para um visual contemporâneo e limpo.",
    image: "/IMG_5865.JPG.jpeg",
    style: "Minimalista",
  },
  {
    id: 4,
    title: "Red Carpet Ready",
    description: "Drapeado luxuoso que valoriza a silhueta em eventos de gala.",
    image: "/IMG_5866.JPG.jpeg",
    style: "Luxo",
  },
  {
    id: 5,
    title: "Romance Moderno",
    description: "Fluidez e movimento em um design que celebra a feminilidade.",
    image: "/IMG_5867.JPG.jpeg",
    style: "Romântico",
  },
  {
    id: 6,
    title: "Sofisticação Atemporal",
    description: "Decote assimétrico e caimento impecável para madrinhas exigentes.",
    image: "/IMG_5868.JPG.jpeg",
    style: "Atemporal",
  },
  {
    id: 7,
    title: "Audácia Elegante",
    description: "Recortes estratégicos que trazem um toque de ousadia com classe.",
    image: "/IMG_5870.PNG",
    style: "Moderno",
  },
  {
    id: 8,
    title: "Presença Marcante",
    description: "Capa integrada para um visual dramático e inesquecível.",
    image: "/IMG_5872.PNG",
    style: "Dramático",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-wedding-beige text-stone-800 font-sans selection:bg-wedding-red/20">
      {/* Decorative top border representing foliage */}
      <div className="w-full h-8 bg-gradient-to-r from-wedding-olive/20 via-wedding-olive/40 to-wedding-olive/20" />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        
        {/* Gallery Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-script text-5xl md:text-6xl text-stone-900 mb-4">Galeria de Vestidos</h2>
            <p className="font-serif text-stone-500">Algumas ideias de estilo e modelagem na paleta escolhida</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dresses.map((dress, index) => (
              <motion.div
                key={dress.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-50">
                  <Image
                    src={`/inspiracoes${dress.image}`}
                    alt={dress.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-wedding-red/0 group-hover:bg-wedding-red/10 transition-colors duration-500 mix-blend-multiply" />
                  
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-sm text-wedding-red">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-serif italic text-wedding-gold border border-wedding-gold/30 rounded-full">
                    {dress.style}
                  </div>
                  <h3 className="text-xl font-serif text-stone-800 mb-2">
                    {dress.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-sans line-clamp-2 leading-relaxed">
                    {dress.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="py-12 bg-stone-100/50 mt-20 border-t border-stone-200">
        <div className="container mx-auto px-4 text-center">
          <p className="font-script text-3xl text-stone-400">Luana & Patrick</p>
        </div>
      </footer>
    </main>
  );
}

