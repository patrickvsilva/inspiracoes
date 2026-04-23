"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

const dresses = [
  {
    id: 1,
    title: "Vermelho Vibrante",
    description:
      "Corte sereia com decote coração, perfeito para uma entrada triunfal.",
    image: "/IMG_5863.JPG.jpeg",
    style: "Glamour",
    likes: "1.243",
    time: "HÁ 2 HORAS",
  },
  {
    id: 2,
    title: "Elegância Clássica",
    description:
      "Vestido tomara que caia com fenda lateral, unindo sofisticação e modernidade.",
    image: "/IMG_5864.JPG.jpeg",
    style: "Clássico",
    likes: "892",
    time: "HÁ 5 HORAS",
  },
  {
    id: 3,
    title: "Chic Minimalista",
    description:
      "Linhas limpas e tecido estruturado para um visual contemporâneo e limpo.",
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
    description:
      "Decote assimétrico e caimento impecável para madrinhas exigentes.",
    image: "/IMG_5868.JPG.jpeg",
    style: "Atemporal",
    likes: "945",
    time: "HÁ 1 DIA",
  },
  {
    id: 7,
    title: "Audácia Elegante",
    description:
      "Recortes estratégicos que trazem um toque de ousadia com classe.",
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
    <main className="min-h-screen bg-wedding-beige text-stone-900 font-sans selection:bg-wedding-red/20">
      <div className="w-full h-0.5 bg-gradient-to-r from-wedding-olive/30 via-wedding-gold/60 to-wedding-olive/30" />

      <div className="max-w-md md:max-w-5xl mx-auto md:px-4 md:py-14 lg:py-20">
        {/* Header */}
        <header className="sticky md:static top-0 z-50 bg-wedding-beige/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-stone-200 md:border-none px-4 py-3 md:py-0 md:mb-10 flex flex-col items-center text-center">
          <h1 className="font-script text-2xl md:text-5xl lg:text-6xl text-stone-900">
            Inspirações para Madrinhas
          </h1>
          {/* <p className="md:hidden font-serif text-[11px] text-stone-400 mt-0.5 tracking-wide">
            Luana &amp; Patrick · 26.09.2026
          </p> */}
        </header>
        <p className="hidden md:block text-center font-script text-stone-500 mb-10 -mt-6">
          Referências de estilo e modelagem para o casamento de Luana &amp;
          Patrick · 26.09.2026
        </p>

        {/* Feed / Masonry */}
        <section className="pb-4 md:pb-8">
          <div className="flex flex-col pt-2 md:pt-0 md:block md:columns-3 lg:columns-4 md:[column-gap:10px]">
            {dresses.map((dress, index) => (
              <motion.div
                key={dress.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-stone-50 group relative border-b border-stone-100 md:border md:border-stone-200 md:rounded-xl md:overflow-hidden md:shadow-sm md:hover:shadow-md md:transition-shadow md:duration-300 md:break-inside-avoid md:mb-[10px] md:inline-block md:w-full"
              >
                {/* Post Header */}
                <div className="flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 p-[2px] flex-shrink-0">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <span className="font-script text-[11px] text-stone-700">
                          L&amp;P
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-none mb-0.5">
                        {dress.title}
                      </p>
                      <p className="text-xs text-stone-400">{dress.style}</p>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-stone-400" />
                </div>

                {/* Image — natural height on all screen sizes */}
                <div className="w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={`/inspiracoes${dress.image}`}
                    alt={dress.title}
                    width={600}
                    height={800}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Actions */}
                <div className="px-3 pt-2.5 pb-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <Heart className="w-6 h-6 hover:text-wedding-red hover:fill-wedding-red transition-colors cursor-pointer" />
                    <MessageCircle className="w-6 h-6 hover:text-stone-500 transition-colors cursor-pointer" />
                    <Send className="w-6 h-6 hover:text-stone-500 transition-colors cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 hover:text-stone-500 transition-colors cursor-pointer" />
                </div>

                {/* Details */}
                <div className="px-3 pb-4">
                  <p className="font-semibold text-sm mb-1">
                    {dress.likes} curtidas
                  </p>
                  <p className="text-sm leading-snug">
                    <span className="font-semibold mr-1">{dress.title}</span>
                    <span className="text-stone-500">{dress.description}</span>
                  </p>
                  <p className="text-[10px] text-stone-400 mt-1.5 font-medium tracking-wide">
                    {dress.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-4 md:mx-0 py-6 md:py-10 border-t border-stone-200/60">
          <div className="text-center space-y-1">
            <p className="font-script text-3xl text-stone-400">
              Luana &amp; Patrick
            </p>
            <p className="font-serif text-xs text-stone-400 tracking-widest">
              26 · 09 · 2026
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
