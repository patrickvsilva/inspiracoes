"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

const dresses = [
  {
    id: 1,
    title: "Vermelho Vibrante",
    description: "Corte sereia com decote coração, perfeito para uma entrada triunfal.",
    image: "/IMG_5863.JPG.jpeg",
    style: "Glamour",
    likes: "1.243",
    time: "HÁ 2 HORAS",
  },
  {
    id: 2,
    title: "Elegância Clássica",
    description: "Vestido tomara que caia com fenda lateral, unindo sofisticação e modernidade.",
    image: "/IMG_5864.JPG.jpeg",
    style: "Clássico",
    likes: "892",
    time: "HÁ 5 HORAS",
  },
  {
    id: 3,
    title: "Chic Minimalista",
    description: "Linhas limpas e tecido estruturado para um visual contemporâneo e limpo.",
    image: "/IMG_5865.JPG.jpeg",
    style: "Minimalista",
    likes: "1.056",
    time: "HÁ 8 HORAS",
  },
  {
    id: 4,
    title: "Red Carpet Ready",
    description: "Drapeado luxuoso que valoriza a silhueta em eventos de gala.",
    image: "/IMG_5866.JPG.jpeg",
    style: "Luxo",
    likes: "2.104",
    time: "HÁ 12 HORAS",
  },
  {
    id: 5,
    title: "Romance Moderno",
    description: "Fluidez e movimento em um design que celebra a feminilidade.",
    image: "/IMG_5867.JPG.jpeg",
    style: "Romântico",
    likes: "1.543",
    time: "HÁ 1 DIA",
  },
  {
    id: 6,
    title: "Sofisticação Atemporal",
    description: "Decote assimétrico e caimento impecável para madrinhas exigentes.",
    image: "/IMG_5868.JPG.jpeg",
    style: "Atemporal",
    likes: "945",
    time: "HÁ 1 DIA",
  },
  {
    id: 7,
    title: "Audácia Elegante",
    description: "Recortes estratégicos que trazem um toque de ousadia com classe.",
    image: "/IMG_5870.PNG",
    style: "Moderno",
    likes: "1.876",
    time: "HÁ 2 DIAS",
  },
  {
    id: 8,
    title: "Presença Marcante",
    description: "Capa integrada para um visual dramático e inesquecível.",
    image: "/IMG_5872.PNG",
    style: "Dramático",
    likes: "2.341",
    time: "HÁ 2 DIAS",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white md:bg-wedding-beige text-stone-900 md:text-stone-800 font-sans md:selection:bg-wedding-red/20">
      {/* Decorative top border representing foliage (Desktop only) */}
      <div className="hidden md:block w-full h-8 bg-gradient-to-r from-wedding-olive/20 via-wedding-olive/40 to-wedding-olive/20" />

      <div className="max-w-md md:max-w-6xl mx-auto md:px-4 md:py-16 lg:py-24 bg-white md:bg-transparent min-h-screen md:min-h-0 sm:border-x sm:border-stone-200 md:border-none">
        
        {/* Instagram-like Header (Mobile only) */}
        <header className="md:hidden sticky top-0 z-50 bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between">
          <h1 className="font-script text-2xl font-bold tracking-tight">Galeria de Vestidos</h1>
          <Heart className="w-6 h-6" />
        </header>

        {/* Desktop Title */}
        <div className="hidden md:block text-center mb-16">
          <h2 className="font-script text-5xl lg:text-6xl text-stone-900 mb-4">Galeria de Vestidos</h2>
          <p className="font-serif text-stone-500">Algumas ideias de estilo e modelagem na paleta escolhida</p>
        </div>

        {/* Feed / Grid */}
        <section className="pb-16 md:pb-0">
          <div className="flex flex-col gap-6 sm:gap-8 pt-2 md:pt-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {dresses.map((dress, index) => (
              <motion.div
                key={dress.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white md:group md:relative md:rounded-xl md:overflow-hidden md:shadow-sm hover:md:shadow-xl md:transition-all md:duration-500 md:border md:border-stone-100"
              >
                {/* Post Header (Mobile only) */}
                <div className="md:hidden flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 p-[2px]">
                      <div className="w-full h-full bg-white rounded-full border border-white flex items-center justify-center overflow-hidden">
                        <span className="text-[10px] font-bold text-stone-700">L&P</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{dress.title}</h3>
                      <p className="text-xs text-stone-500">{dress.style}</p>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-stone-600" />
                </div>

                {/* Post Image */}
                <div className="relative aspect-[4/5] md:aspect-[3/4] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={dress.image}
                    alt={dress.title}
                    fill
                    className="object-cover md:transition-transform md:duration-700 md:group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Desktop Hover Effects */}
                  <div className="hidden md:block absolute inset-0 bg-wedding-red/0 group-hover:bg-wedding-red/10 transition-colors duration-500 mix-blend-multiply" />
                  <div className="hidden md:block absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-sm text-wedding-red">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                </div>

                {/* Post Actions (Mobile only) */}
                <div className="md:hidden px-3 pt-3 pb-2 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Heart className="w-6 h-6 hover:text-red-500 hover:fill-red-500 transition-colors cursor-pointer" />
                    <MessageCircle className="w-6 h-6 hover:text-stone-500 transition-colors cursor-pointer" />
                    <Send className="w-6 h-6 hover:text-stone-500 transition-colors cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 hover:text-stone-500 transition-colors cursor-pointer" />
                </div>

                {/* Mobile Post Details (Likes, Caption, Time) */}
                <div className="md:hidden px-3 pb-4">
                  <p className="font-semibold text-sm mb-1">{dress.likes} curtidas</p>
                  <p className="text-sm">
                    <span className="font-semibold mr-2">{dress.title}</span>
                    {dress.description}
                  </p>
                  <p className="text-[10px] text-stone-500 mt-2 font-medium tracking-wide">
                    {dress.time}
                  </p>
                </div>

                {/* Desktop Post Details */}
                <div className="hidden md:block p-6 text-center">
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
        
        {/* Footer */}
        <footer className="py-12 bg-stone-100/50 mt-20 border-t border-stone-200 md:bg-transparent md:border-none md:mt-10">
          <div className="container mx-auto px-4 text-center">
            <p className="font-script text-3xl text-stone-400">Luana & Patrick</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

