import React, { useState } from 'react';
import { IMAGE_REGISTRY } from '../config/imageRegistry';
import { CURRENT_COLLECTION_CONFIG, formatProductPrice } from '../config/dropConfig';
import { TerminalScannerOverlay } from './TerminalScannerOverlay';

interface BeanieProductViewProps {
  onBackToCatalog: () => void;
  onOpenNotifyModal: (productTitle?: string) => void;
  onPlayClick?: () => void;
}

export const BeanieProductView: React.FC<BeanieProductViewProps> = ({
  onBackToCatalog,
  onOpenNotifyModal,
  onPlayClick
}) => {
  const [selectedColor, setSelectedColor] = useState<'black' | 'white'>('black');
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const blackViews = [
    {
      title: '01. Colección KAMI // 5 Gorros Pixel Anime (IMG-5220)',
      src: IMAGE_REGISTRY.CATALOG_BEANIE_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_BEANIE_CARD.altText
    },
    {
      title: '02. Black Edition // Rostro Anime & Ojal Metálico',
      src: IMAGE_REGISTRY.BEANIE_BLACK_DETAIL.filePath!,
      alt: IMAGE_REGISTRY.BEANIE_BLACK_DETAIL.altText
    },
    {
      title: '03. Muestra Multiperspectiva // Catálogo de Ángulos',
      src: IMAGE_REGISTRY.BEANIE_GRID_SHOWCASE.filePath!,
      alt: IMAGE_REGISTRY.BEANIE_GRID_SHOWCASE.altText
    }
  ];

  const whiteViews = [
    {
      title: '01. White Edition // Rostro Anime & Ojal Metálico',
      src: IMAGE_REGISTRY.BEANIE_WHITE_DETAIL.filePath!,
      alt: IMAGE_REGISTRY.BEANIE_WHITE_DETAIL.altText
    },
    {
      title: '02. Muestra Multiperspectiva // Catálogo de Ángulos',
      src: IMAGE_REGISTRY.BEANIE_GRID_SHOWCASE.filePath!,
      alt: IMAGE_REGISTRY.BEANIE_GRID_SHOWCASE.altText
    }
  ];

  const views = selectedColor === 'black' ? blackViews : whiteViews;
  const currentView = views[activeAngleIndex] || views[0];
  const priceDisplay = formatProductPrice(CURRENT_COLLECTION_CONFIG.products.beanie);

  return (
    <article className="min-h-screen bg-[#060709] text-zinc-200 font-mono py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
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
              ACCESORIOS
            </button>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span className="text-zinc-100 font-bold uppercase">NULL.SYS KAMI BEANIE</span>
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
          
          {/* Left Column: Image Viewer */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative bg-zinc-950 border border-zinc-800 overflow-hidden">
              <TerminalScannerOverlay label="KAMI ACCESSORIES // PIXEL WEAVE SCAN">
                <div
                  onClick={() => {
                    onPlayClick?.();
                    setIsZoomed(prev => !prev);
                  }}
                  className={`w-full aspect-square overflow-hidden flex items-center justify-center cursor-zoom-in transition-all duration-300 ${
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

            {/* Angle Selectors */}
            <div className="grid grid-cols-3 gap-2">
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
                      ? 'bg-zinc-800 border-zinc-500 text-white font-semibold'
                      : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <span className="block text-[10px] text-zinc-500">VISTA 0{idx + 1}</span>
                  <span className="truncate block">{v.title.split('//')[0]}</span>
                </button>
              ))}
            </div>

            <div className="bg-zinc-950 border border-zinc-850 p-4 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200 font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-zinc-300"></span>
                <span>LÍNEA KAMI TO TO NO MI // HARDWARE PIERCING BEANIE</span>
              </div>
              <p className="leading-relaxed">
                El gorro Kami Beanie sintetiza la estética retro-anime con la crudeza industrial. Confeccionado en doble capa de punto elástico con ojal perforado de acero inoxidable y argolla plateada desmontable.
              </p>
            </div>
          </div>

          {/* Right Column: Module */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6 sticky top-24">
            
            <div className="space-y-2 border-b border-zinc-800/80 pb-5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-bold uppercase">
                  ACCESSORIES // HARDWARE
                </span>
                <span className="text-zinc-500">REF: NS-W26-AC01</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                NULL.SYS Kami Beanie
              </h1>

              <div className="text-xs text-zinc-400">
                KAMI TO TO NO MI // ACCESORIOS DE COLECCIÓN
              </div>

              <div className="pt-2 text-xl sm:text-2xl font-black tabular-nums text-white">
                {priceDisplay}
              </div>
            </div>

            {/* Colorway Switcher (Black / White) */}
            <div className="space-y-3">
              <label className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">
                COLORWAY: <span className="text-white">{selectedColor === 'black' ? 'BLACK EDITION' : 'WHITE EDITION'}</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onPlayClick?.();
                    setSelectedColor('black');
                    setActiveAngleIndex(0);
                  }}
                  className={`p-3 border text-xs text-left transition-colors flex items-center justify-between cursor-pointer ${
                    selectedColor === 'black'
                      ? 'bg-zinc-900 border-zinc-300 text-white'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-zinc-900 border border-zinc-650"></span>
                    <span>Black Edition</span>
                  </div>
                  {selectedColor === 'black' && <span className="text-xs">●</span>}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onPlayClick?.();
                    setSelectedColor('white');
                    setActiveAngleIndex(0);
                  }}
                  className={`p-3 border text-xs text-left transition-colors flex items-center justify-between cursor-pointer ${
                    selectedColor === 'white'
                      ? 'bg-zinc-900 border-zinc-300 text-white'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-zinc-100 border border-zinc-400"></span>
                    <span>White Edition</span>
                  </div>
                  {selectedColor === 'white' && <span className="text-xs">●</span>}
                </button>
              </div>
            </div>

            {/* Size */}
            <div className="space-y-3">
              <label className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">
                TALLA:
              </label>
              <div className="py-2.5 px-4 bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 text-center font-semibold">
                ONE SIZE — AJUSTE ENVOLVENTE UNISEX
              </div>
            </div>

            {/* Notification CTA */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  onPlayClick?.();
                  onOpenNotifyModal(`Kami Beanie (${selectedColor === 'black' ? 'Black' : 'White'})`);
                }}
                className="w-full py-4 bg-zinc-100 hover:bg-white text-black font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer border border-white flex items-center justify-center gap-2 shadow-xl"
              >
                <span>AVÍSAME DEL DROP</span>
                <span className="font-bold">→</span>
              </button>

              <div className="bg-zinc-900/80 border border-zinc-800 p-3 text-[11px] text-zinc-400 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-zinc-300">
                  <span className="w-1.5 h-1.5 bg-zinc-400"></span>
                  <span>ESTADO: EDICIÓN LIMITADA</span>
                </div>
                <p>
                  Unidades limitadas por persona. Las coordenadas de compra se enviarán por correo prioritario.
                </p>
              </div>
            </div>

            {/* Specs */}
            <div className="border-t border-zinc-800/80 pt-5 space-y-3 text-xs text-zinc-400 font-mono">
              <div className="text-zinc-200 font-semibold uppercase">ESPECIFICACIONES:</div>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Tejido jacquard de alta densidad con rostro anime pixelado.</li>
                <li>Ojal metálico reforzado con argolla piercing de acero cromado.</li>
                <li>Doble capa de punto acanalado para retención térmica.</li>
                <li>Etiqueta de tela negra tejida con logotipo NULL.SYS en dobladillo lateral.</li>
                <li>Confección elástica anatómica unisex.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </article>
  );
};
