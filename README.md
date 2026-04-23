# Inspirações — Galeria de Vestidos para Madrinhas

Galeria de inspirações de vestidos para as madrinhas do casamento de Luana & Patrick (26/09/2026). Reúne referências de estilo e modelagem na paleta de cores escolhida para o evento, com layout estilo Instagram feed no mobile e masonry grid no desktop.

**Deploy:** https://patrickvsilva.github.io/inspiracoes/

## Stack

- **Next.js 14** — App Router, static export (`output: 'export'`)
- **Tailwind CSS** — paleta customizada (wedding-red, wedding-gold, wedding-olive, wedding-beige)
- **Framer Motion** — animações de fade-in com scroll
- **shadcn/ui** — componente Button base
- **GitHub Pages** — hospedagem estática via `gh-pages`

## Comandos

```bash
npm run dev     # Dev server em localhost:3000
npm run build   # Build estático para /out
npm run lint    # ESLint
npm run deploy  # Build + deploy para GitHub Pages
```

## Estrutura

```
src/
  app/
    page.tsx      # Galeria principal (dataset de vestidos inline)
    layout.tsx    # Root layout com Google Fonts
  components/
    ui/button.tsx # shadcn/ui Button com variante xs customizada
  lib/
    utils.ts      # cn() helper (clsx + tailwind-merge)
public/           # Imagens estáticas servidas em /inspiracoes/[filename]
```

## Imagens

As imagens ficam em `public/` e devem ser referenciadas com o basePath completo:

```tsx
src="/inspiracoes/filename.jpg"
```

`unoptimized: true` está habilitado no Next.js, então o `<Image>` não prepend o basePath automaticamente.
