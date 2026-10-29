import React, { useState } from 'react';
import { IMAGE_REGISTRY } from '../config/imageRegistry';
import { CURRENT_COLLECTION_CONFIG, formatProductPrice } from '../config/dropConfig';
import { TerminalScannerOverlay } from './TerminalScannerOverlay';

interface DenimProductViewProps {
  onBackToCatalog: () => void;
  onOpenNotifyModal: (productTitle?: string) => void;
  onPlayClick?: () => void;
}

export const DenimProductView: React.FC<DenimProductViewProps> = ({
  onBackToCatalog,
  onOpenNotifyModal,
  onPlayClick
}) => {
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSize, setSelectedSize] = useState('31-33 (M)');

  // Strictly curated to 2 angles: Full silhouette with anime patch and technical collage
  const views = [
    {
      title: '01. Silueta Completa // Parche Posterior Anime',
      src: IMAGE_REGISTRY.CATALOG_DENIM_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_DENIM_CARD.altText
    },
    {
      title: '02. Collage Técnico // Bolsillos & Remaches Metálicos',
      src: IMAGE_REGISTRY.DENIM_COLLAGE_DETAILS.filePath!,
      alt: IMAGE_REGISTRY.DENIM_COLLAGE_DETAILS.altText
    }
  ];

  const currentView = views[activeAngleIndex] || views[0];
  const priceDisplay = formatProductPrice(CURRENT_COLLECTION_CONFIG.products.denim);

  return (
    <article className="min-h-screen bg-[#060709] text-zinc-200 font-mono py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4 text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-zinc-400">
            <button
              onClick={() => {
                onPlayClick?.();
                onBackToCatalog();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              INICIO
            </button>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <button
              onClick={() => {
                onPlayClick?.();
                onBackToCatalog();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              PANTALONES
            </button>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span className="text-zinc-100 font-bold uppercase">NULL.SYS BAGGY WASHED DENIM</span>
          </nav>

          <button
            onClick={() => {
              onPlayClick?.();
              onBackToCatalog();
            }}
            className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white uppercase transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>← VOLVER AL CATÁLOGO</span>
          </button>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image Viewer with Terminal Scanner */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative bg-zinc-950 border border-zinc-800 overflow-hidden">
              <TerminalScannerOverlay label="BAGGY DENIM // REAR PATCH SCAN">
                <div
                  onClick={() => {
                    onPlayClick?.();
                    setIsZoomed(prev => !prev);
                  }}
                  className={`w-full aspect-3/4 overflow-hidden flex items-center justify-center cursor-zoom-in transition-all duration-300 ${
                    isZoomed ? 'scale-125 cursor-zoom-out' : ''
                  }`}
                >
                  <img
                    src={currentView.src}
                    alt={currentView.alt}
                    className="w-full h-full object-cover object-center filter contrast-105"
                    loading="eager"
                  />
                </div>
              </TerminalScannerOverlay>

              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm border border-zinc-800 px-3 py-1 text-[11px] text-zinc-300 pointer-events-none z-10">
                {currentView.title}
              </div>

              <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-sm border border-zinc-800 px-2.5 py-1 text-[10px] text-zinc-400 pointer-events-none z-10">
                CLICK PARA {isZoomed ? 'REDUCIR' : 'ZOOM'}
              </div>
            </div>

            {/* Angle Selectors (2 Clean Non-Redundant Perspectives) */}
            <div className="grid grid-cols-2 gap-2">
              {views.map((v, idx) => (
                <button
                  key={v.title}
                  onClick={() => {
                    onPlayClick?.();
                    setActiveAngleIndex(idx);
                    setIsZoomed(false);
                  }}
                  className={`p-2.5 text-left text-xs border transition-colors cursor-pointer ${
                    activeAngleIndex === idx
                      ? 'bg-zinc-800 border-zinc-400 text-white font-semibold'
                      : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <span className="block text-[10px] text-zinc-500">ÁNGULO 0{idx + 1}</span>
                  <span className="truncate block">{v.title.split('//')[0]}</span>
                </button>
              ))}
            </div>

            <div className="bg-zinc-950 border border-zinc-850 p-4 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200 font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-zinc-300"></span>
                <span>ARQUITECTURA DE VOLUMEN // DENIM BAGGY Y2K</span>
              </div>
              <p className="leading-relaxed">
                Confeccionado en denim rígido de 14.5 oz sometido a un proceso de lavado mineral por abrasión para lograr una tonalidad ceniza única en cada pieza. El bolsillo trasero aloja un parche exclusivo tejido con estética anime pixelada.
              </p>
            </div>
          </div>

          {/* Right Column: Module */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6 sticky top-24">
            
            <div className="space-y-2 border-b border-zinc-800/80 pb-5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-bold uppercase">
                  LIMITED DROP // BOTTOMS
                </span>
                <span className="text-zinc-500">REF: NS-W26-DN01</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                NULL.SYS Baggy Washed Denim
              </h1>

              <div className="text-xs text-zinc-400">
                SEE YOU IN VOID // OTOÑO-INVIERNO 2026
              </div>

              <div className="pt-2 text-xl sm:text-2xl font-black tabular-nums text-white">
                {priceDisplay}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
              <label className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">
                TALLA DISPONIBLE:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['28-30 (S)', '31-33 (M)', '34-36 (L)'].map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      onPlayClick?.();
                      setSelectedSize(size);
                    }}
                    className={`py-2.5 text-xs font-semibold border text-center transition-colors cursor-pointer ${
                      selectedSize === size
                        ? 'bg-zinc-100 text-black border-white'
                        : 'bg-zinc-900/50 text-zinc-300 border-zinc-800 hover:border-zinc-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Notification / Pre-order button */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  onPlayClick?.();
                  onOpenNotifyModal('Baggy Washed Denim');
                }}
                className="w-full py-4 bg-zinc-100 hover:bg-white text-black font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer border border-white flex items-center justify-center gap-2 shadow-xl"
              >
                <span>AVÍSAME DEL LANZAMIENTO</span>
                <span className="font-bold">→</span>
              </button>

              <div className="bg-zinc-900/80 border border-zinc-800 p-3 text-[11px] text-zinc-400 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-zinc-300">
                  <span className="w-1.5 h-1.5 bg-zinc-400"></span>
                  <span>ESTADO: PRECIO POR ANUNCIAR</span>
                </div>
                <p>
                  El precio oficial y la apertura del stock se comunicarán prioritariamente a la lista de acceso de NULL.SYS.
                </p>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="border-t border-zinc-800/80 pt-5 space-y-3 text-xs text-zinc-400 font-mono">
              <div className="text-zinc-200 font-semibold uppercase">ESPECIFICACIONES:</div>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>100% denim de algodón de 14.5 oz de gramaje pesado.</li>
                <li>Lavado ácido mineral en gris ceniza con desgaste en costuras.</li>
                <li>Parche de tela bordado con gráfico anime en bolsillo posterior derecho.</li>
                <li>Silueta ultra baggy con tiro medio y pernera recta sin estrechamiento.</li>
                <li>Botones y remaches de zinc con acabado plateado mate.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </article>
  );
};
