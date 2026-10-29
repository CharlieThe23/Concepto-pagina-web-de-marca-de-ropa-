import React, { useState } from 'react';
import { IMAGE_REGISTRY } from '../config/imageRegistry';
import { CURRENT_COLLECTION_CONFIG, formatProductPrice } from '../config/dropConfig';

export type ProductPageView = 'jersey' | 'tracksuit' | 'denim' | 'beanie' | 'puffer' | 'sudadera';

interface CatalogSectionProps {
  onSelectProductPage: (page: ProductPageView) => void;
  onPlayClick?: () => void;
  initialCategory?: string;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectProductPage,
  onPlayClick,
  initialCategory = 'ALL'
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const categories = [
    { id: 'ALL', label: 'TODAS LAS PIEZAS' },
    { id: 'jerseys', label: 'JERSEYS' },
    { id: 'chandales', label: 'CHÁNDALES' },
    { id: 'pantalones', label: 'PANTALONES' },
    { id: 'accesorios', label: 'ACCESORIOS' },
    { id: 'archive', label: 'ARCHIVE CAPSULE' }
  ];

  const products = [
    {
      id: 'jersey',
      page: 'jersey' as ProductPageView,
      title: 'Anime Distressed Knit',
      ref: 'NS-W26-JK01',
      category: 'jerseys',
      categoryLabel: 'OVERSIZED KNITWEAR',
      price: formatProductPrice(CURRENT_COLLECTION_CONFIG.products.jersey),
      isStar: true,
      badge: 'PRODUCTO ESTRELLA · 45,00 €',
      badgeColor: 'text-zinc-100 bg-zinc-800',
      description: 'Gráfico anime frontal, inscripciones digitales pixeladas y remates deshilachados a mano. Ediciones BLACK y RED.',
      image: IMAGE_REGISTRY.CATALOG_JERSEY_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_JERSEY_CARD.altText,
      ctaText: 'Ver Ficha'
    },
    {
      id: 'tracksuit',
      page: 'tracksuit' as ProductPageView,
      title: 'NULL.SYS Technical Tracksuit',
      ref: 'NS-W26-TS01',
      category: 'chandales',
      categoryLabel: 'TECHNICAL NYLON SHELL',
      price: formatProductPrice(CURRENT_COLLECTION_CONFIG.products.tracksuit),
      isPreOrder: true,
      badge: 'LIMITED DROP — PRE-ORDER',
      badgeColor: 'text-white bg-zinc-800 border-zinc-600',
      description: 'Conjunto deportivo de nylon reflectante con ilustración KAMI TO TO NO MI en la espalda. Black & White Editions.',
      image: IMAGE_REGISTRY.CATALOG_TRACKSUIT_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_TRACKSUIT_CARD.altText,
      ctaText: 'Pre-Reserva'
    },
    {
      id: 'denim',
      page: 'denim' as ProductPageView,
      title: 'Baggy Washed Denim',
      ref: 'NS-W26-DN01',
      category: 'pantalones',
      categoryLabel: 'HEAVYWEIGHT WASHED DENIM',
      price: formatProductPrice(CURRENT_COLLECTION_CONFIG.products.denim),
      badge: 'LIMITED DROP',
      badgeColor: 'text-zinc-300 bg-zinc-900',
      description: 'Denim de 14.5 oz con lavado ácido mineral gris ceniza y parche anime bordado en bolsillo posterior.',
      image: IMAGE_REGISTRY.CATALOG_DENIM_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_DENIM_CARD.altText,
      ctaText: 'Ver Ficha'
    },
    {
      id: 'beanie',
      page: 'beanie' as ProductPageView,
      title: 'Kami Beanie Accessories',
      ref: 'NS-W26-AC01',
      category: 'accesorios',
      categoryLabel: 'HARDWARE ACCESSORIES',
      price: formatProductPrice(CURRENT_COLLECTION_CONFIG.products.beanie),
      badge: 'KAMI TO TO NO MI',
      badgeColor: 'text-zinc-300 bg-zinc-900',
      description: 'Gorro de punto acanalado con rostro anime en jacquard y piercing de argolla metálica en el dobladillo.',
      image: IMAGE_REGISTRY.CATALOG_BEANIE_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_BEANIE_CARD.altText,
      ctaText: 'Ver Ficha'
    },
    {
      id: 'puffer',
      page: 'puffer' as ProductPageView,
      title: 'Abrigo Puffer Negra',
      ref: 'NS-ARCH-PF01',
      category: 'archive',
      categoryLabel: 'ARCHIVE // HEAVY OUTERWEAR',
      price: formatProductPrice(CURRENT_COLLECTION_CONFIG.products.puffer),
      badge: 'ARCHIVE · 72,00 €',
      badgeColor: 'text-zinc-400 bg-zinc-900',
      description: 'Chaqueta acolchada negra de gran volumen con cuello alto envolvente y cremallera completa.',
      image: IMAGE_REGISTRY.CATALOG_PUFFER_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_PUFFER_CARD.altText,
      ctaText: 'Ver Ficha'
    },
    {
      id: 'sudadera',
      page: 'sudadera' as ProductPageView,
      title: 'Sudadera con Capucha',
      ref: 'NS-ARCH-HD01',
      category: 'archive',
      categoryLabel: 'ARCHIVE // HOODIE',
      price: formatProductPrice(CURRENT_COLLECTION_CONFIG.products.sudadera),
      badge: 'ARCHIVE CAPSULE',
      badgeColor: 'text-zinc-400 bg-zinc-900',
      description: 'Sudadera en lavado ácido mineral oscuro, bolsillo canguro y capucha cruzada doble.',
      image: IMAGE_REGISTRY.CATALOG_SUDADERA_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_SUDADERA_CARD.altText,
      ctaText: 'Ver Ficha'
    }
  ];

  const filteredProducts = activeCategory === 'ALL'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section 
      id="catalogo" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-b border-zinc-800 font-mono"
      aria-labelledby="catalog-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800/80">
        <div>
          <span className="text-xs text-zinc-400 uppercase tracking-widest block mb-2 font-semibold">
            [ {CURRENT_COLLECTION_CONFIG.title} // CATÁLOGO OFICIAL ]
          </span>
          <h2 id="catalog-heading" className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Colección {CURRENT_COLLECTION_CONFIG.season}
          </h2>
          <div className="text-xs text-zinc-400 mt-1">
            Prendas individuales aisladas con transparencia real. Categorías organizadas según la nueva arquitectura.
          </div>
        </div>

        <div className="text-xs text-zinc-400 font-mono">
          ESTADO COMERCIAL: <strong className="text-white">COMING SOON / PRE-ORDER</strong>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <nav aria-label="Filtro de Categorías" className="pt-6 pb-2 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                onPlayClick?.();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-zinc-100 text-black border-white'
                  : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 items-stretch">
        {filteredProducts.map(product => (
          <article 
            key={product.id}
            className={`group flex flex-col justify-between bg-zinc-950/80 border transition-all duration-300 p-6 space-y-6 ${
              product.isStar 
                ? 'border-zinc-700 hover:border-zinc-400' 
                : 'border-zinc-850 hover:border-zinc-650'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] text-zinc-500">
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 border border-zinc-800 ${product.badgeColor}`}>
                  {product.badge}
                </span>
                <span>REF: {product.ref}</span>
              </div>

              {/* Product Image Preview */}
              <div 
                onClick={() => {
                  onPlayClick?.();
                  onSelectProductPage(product.page);
                }}
                className="relative aspect-square flex items-center justify-center p-4 bg-zinc-900/40 border border-zinc-850 hover:bg-zinc-900/60 transition-colors cursor-pointer overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 text-[9px] text-zinc-500 bg-black/60 px-1.5 py-0.5">
                  NULL.SYS // SPEC
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase">{product.categoryLabel}</span>
                <h3 
                  onClick={() => {
                    onPlayClick?.();
                    onSelectProductPage(product.page);
                  }}
                  className="text-base font-bold uppercase text-white hover:text-zinc-300 transition-colors cursor-pointer"
                >
                  {product.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-850 flex items-center justify-between">
              <div className="text-base font-black tabular-nums text-white">
                {product.price}
              </div>

              <button
                onClick={() => {
                  onPlayClick?.();
                  onSelectProductPage(product.page);
                }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  product.isPreOrder
                    ? 'bg-zinc-100 hover:bg-white text-black border border-white'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700'
                }`}
              >
                <span>{product.ctaText}</span>
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};
