import React, { useState } from 'react';
import { IMAGE_REGISTRY } from '../config/imageRegistry';
import { CURRENT_COLLECTION_CONFIG, formatProductPrice } from '../config/dropConfig';
import { TerminalScannerOverlay } from './TerminalScannerOverlay';

interface JerseyProductViewProps {
  onBackToCatalog: () => void;
  onOpenNotifyModal: () => void;
  onPlayClick: () => void;
}

export const JerseyProductView: React.FC<JerseyProductViewProps> = ({
  onBackToCatalog,
  onOpenNotifyModal,
  onPlayClick
}) => {
  const [selectedColorway, setSelectedColorway] = useState<'black' | 'red'>('black');
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSize, setSelectedSize] = useState('1 (S-M)');

  // Strictly curated to authentic, non-redundant perspectives with updated null_jersey_1 and Anime Distressed Knit - RED variant
  const views = [
    {
      id: 'black',
      title: '01. Anime Distressed Knit - BLACK // Frontal & Espalda Anime (null_jersey_1)',
      src: IMAGE_REGISTRY.CATALOG_JERSEY_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_JERSEY_CARD.altText,
      ref: 'null_jersey_1.jpg',
      colorway: 'black' as const
    },
    {
      id: 'red',
      title: '02. Anime Distressed Knit - RED // Gráfico Anime y Logo Rojo',
      src: IMAGE_REGISTRY.JERSEY_RED_VARIANT_VIEW.filePath!,
      alt: IMAGE_REGISTRY.JERSEY_RED_VARIANT_VIEW.altText,
      ref: '40688AFF-4CD9-441F-AFE3-63C4EAAA9116_1107c892.PNG',
      colorway: 'red' as const
    },
    {
      id: 'editorial',
      title: '03. Fotografía Editorial // Dúo en Exteriores',
      src: IMAGE_REGISTRY.JERSEY_MODEL_DUO.filePath!,
      alt: IMAGE_REGISTRY.JERSEY_MODEL_DUO.altText,
      ref: IMAGE_REGISTRY.JERSEY_MODEL_DUO.promptReference,
      colorway: null
    }
  ];

  const currentView = views[activeAngleIndex] || views[0];
  const priceDisplay = formatProductPrice(CURRENT_COLLECTION_CONFIG.products.jersey);

  return (
    <article className="min-h-screen bg-[#08090b] text-zinc-200 font-mono py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation & Back to Catalog Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4 text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-zinc-400">
            <button
              onClick={() => {
                onPlayClick();
                onBackToCatalog();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              INICIO
            </button>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <button
              onClick={() => {
                onPlayClick();
                onBackToCatalog();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              CATÁLOGO
            </button>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span className="text-white font-bold uppercase">ANIME DISTRESSED KNIT</span>
          </nav>

          <button
            onClick={() => {
              onPlayClick();
              onBackToCatalog();
            }}
            className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white uppercase transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>← VOLVER AL CATÁLOGO</span>
          </button>
        </div>

        {/* Product Hero 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Viewer with Terminal Scanner */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="relative bg-zinc-950 border border-zinc-800 overflow-hidden">
              
              {/* Terminal Scanner and Glitch Overlay wrapping the product view */}
              <TerminalScannerOverlay label="ANIME DISTRESSED KNIT // WEAVE SCAN">
                <div
                  onClick={() => {
                    onPlayClick();
                    setIsZoomed(prev => !prev);
                  }}
                  className={`w-full aspect-3/4 overflow-hidden flex items-center justify-center cursor-zoom-in transition-all duration-300 ${
                    isZoomed ? 'scale-125 cursor-zoom-out' : ''
                  }`}
                >
                  <img
                    src={currentView.src}
                    alt={currentView.alt}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                </div>
              </TerminalScannerOverlay>

              {/* View angle badge */}
              <div className="absolute top-4 left-4 bg-black/85 border border-zinc-800 px-3 py-1 text-[11px] text-zinc-300 pointer-events-none z-10">
                {currentView.title}
              </div>

              {/* Zoom state indicator */}
              <div className="absolute top-4 right-4 bg-black/85 border border-zinc-800 px-2.5 py-1 text-[10px] text-zinc-400 pointer-events-none z-10">
                {isZoomed ? '[ ZOOM ACTIVO · CLICK PARA RESETEAR ]' : '[ CLICK PARA ZOOM ]'}
              </div>

              {/* Angle Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center p-3 z-30">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayClick();
                    setIsZoomed(false);
                    setActiveAngleIndex(prev => {
                      const next = (prev - 1 + views.length) % views.length;
                      if (views[next].colorway) setSelectedColorway(views[next].colorway);
                      return next;
                    });
                  }}
                  aria-label="Ángulo anterior"
                  className="w-10 h-10 bg-black/80 hover:bg-black border border-zinc-700 text-white flex items-center justify-center text-lg transition-colors cursor-pointer"
                >
                  ‹
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center p-3 z-30">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayClick();
                    setIsZoomed(false);
                    setActiveAngleIndex(prev => {
                      const next = (prev + 1) % views.length;
                      if (views[next].colorway) setSelectedColorway(views[next].colorway);
                      return next;
                    });
                  }}
                  aria-label="Ángulo siguiente"
                  className="w-10 h-10 bg-black/80 hover:bg-black border border-zinc-700 text-white flex items-center justify-center text-lg transition-colors cursor-pointer"
                >
                  ›
                </button>
              </div>

            </div>

            {/* Stepper Dots & Number Controls */}
            <div className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-400">
              <div className="flex items-center gap-2 flex-wrap">
                {views.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onPlayClick();
                      setIsZoomed(false);
                      setActiveAngleIndex(idx);
                      if (v.colorway) {
                        setSelectedColorway(v.colorway);
                      }
                    }}
                    className={`px-3 py-1 border transition-colors cursor-pointer text-xs ${
                      activeAngleIndex === idx
                        ? 'bg-zinc-100 text-black border-white font-bold'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    <span>VISTA 0{idx + 1}</span>
                    <span className="text-[10px] ml-1.5 opacity-75 font-mono">
                      {idx === 0 ? '(BLACK)' : idx === 1 ? '(RED)' : '(DÚO)'}
                    </span>
                  </button>
                ))}
              </div>

              <div className="text-[11px] text-zinc-500 font-mono">
                REF: {currentView.ref}
              </div>
            </div>

          </div>

          {/* Right Column: Contiguous Purchase Module & Verbatim Specifications */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            <div className="space-y-3 border-b border-zinc-800 pb-5">
              <div className="flex items-center gap-2 text-xs text-sky-400 tracking-widest uppercase font-bold">
                <span className="w-2 h-2 bg-sky-400"></span>
                <span>PRODUCTO ESTRELLA // DROP_001</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                NULL.SYS — Anime Distressed Knit
              </h1>

              <div className="flex items-center gap-4 text-xs text-zinc-400">
                <span>REF: <strong className="text-zinc-200">NS-D001-001</strong></span>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <span>CAT: <strong className="text-zinc-200">Oversized Knitwear</strong></span>
              </div>

              {/* Exact Confirmed Price: 45,00 € */}
              <div className="pt-2">
                <div className="text-3xl font-black tabular-nums text-white flex items-baseline gap-2">
                  <span>{priceDisplay}</span>
                </div>
                <div className="text-[11px] text-zinc-500 mt-1">
                  Precio oficial confirmado. Compras temporalmente deshabilitadas hasta el drop oficial.
                </div>
              </div>
            </div>

            {/* Official Verbatim Description */}
            <div className="space-y-2">
              <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
                Descripción Oficial:
              </span>
              <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light bg-zinc-950 p-4 border border-zinc-800/80 space-y-3">
                <p>El primer capítulo del universo NULL.SYS.</p>
                <p>Anime Distressed Knit combina una silueta oversized, un gráfico de inspiración anime y acabados desgastados que desafían las convenciones del streetwear.</p>
                <p>Una pieza pensada para quienes no siguen el sistema.</p>
                <p className="text-sky-400 font-bold">DROP_001. Limited release.</p>
              </div>
            </div>

            {/* Characteristics from brief */}
            <div className="space-y-2 border-t border-zinc-800 pt-4">
              <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
                Características de Producto:
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Color negro.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Estética oversized.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Gráfico anime frontal.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Tipografía NULL.SYS integrada.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Elementos gráficos digitales y pixelados.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Puños y bajo con acabado desgastado.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Parte trasera lisa.</span></li>
              </ul>
            </div>

            {/* Colorway / Edition Selector */}
            <div className="space-y-3 border-t border-zinc-800 pt-4">
              <label className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">
                EDICIÓN & VARIANTE: <span className="text-white">{selectedColorway === 'black' ? 'Anime Distressed Knit - BLACK' : 'Anime Distressed Knit - RED'}</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onPlayClick();
                    setSelectedColorway('black');
                    setActiveAngleIndex(0);
                    setIsZoomed(false);
                  }}
                  className={`p-3 border text-xs text-left transition-colors flex items-center justify-between cursor-pointer ${
                    selectedColorway === 'black'
                      ? 'bg-zinc-900 border-zinc-300 text-white'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 bg-zinc-950 border border-zinc-600 inline-block"></span>
                    <span className="font-mono text-xs">Knit - BLACK</span>
                  </div>
                  {selectedColorway === 'black' && <span className="text-xs">●</span>}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onPlayClick();
                    setSelectedColorway('red');
                    setActiveAngleIndex(1);
                    setIsZoomed(false);
                  }}
                  className={`p-3 border text-xs text-left transition-colors flex items-center justify-between cursor-pointer ${
                    selectedColorway === 'red'
                      ? 'bg-zinc-900 border-red-500 text-white'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 bg-red-700 border border-red-500 inline-block"></span>
                    <span className="font-mono text-xs">Knit - RED</span>
                  </div>
                  {selectedColorway === 'red' && <span className="text-xs text-red-400">●</span>}
                </button>
              </div>
            </div>

            {/* Size Variants (Informative) */}
            <div className="space-y-2 border-t border-zinc-800 pt-4">
              <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
                Tallas Confirmadas (Informativo):
              </span>
              <div className="flex gap-2">
                {['1 (S-M)', '2 (L-XL)'].map(size => (
                  <button
                    key={size}
                    onClick={() => {
                      onPlayClick();
                      setSelectedSize(size);
                    }}
                    className={`px-4 py-2 text-xs transition-colors cursor-pointer border ${
                      selectedSize === size
                        ? 'bg-zinc-100 text-black border-zinc-100 font-bold'
                        : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action State: COMING SOON -> Notify Me */}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => {
                  onPlayClick();
                  onOpenNotifyModal();
                }}
                className="w-full py-4 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer border border-white flex items-center justify-center gap-2"
              >
                <span>NOTIFY ME // REGISTRAR AVISO DE DROP</span>
              </button>
              
              <div className="p-3 bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 text-center">
                ESTADO: <strong className="text-sky-400 uppercase">COMING SOON</strong> · Compras y carrito inhabilitados hasta el lanzamiento oficial.
              </div>
            </div>

          </div>

        </div>

        {/* Apartado de producto en escenario industrial (Pending exact file slot) */}
        <section className="border border-zinc-800 bg-zinc-950 p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between text-xs text-zinc-500 border-b border-zinc-800/80 pb-3">
            <span className="text-sky-400 uppercase font-semibold">[ APARTADO EN ESCENARIO INDUSTRIAL ]</span>
            <span>SLOT: P/ESCENARIO/01-jersey-escenario-1920x1080.png</span>
          </div>
          
          {/* Architectural placeholder container with technical coordinates */}
          <div className="w-full aspect-16/9 bg-[#0b0c0e] border border-dashed border-zinc-800 flex flex-col items-center justify-center p-8 text-center space-y-2">
            <span className="text-zinc-600 text-3xl font-black">[ SCENARIO 01 ]</span>
            <div className="text-sm font-bold text-zinc-300 uppercase">
              Ubicación reservada: 01-jersey-escenario-1920x1080.png
            </div>
            <p className="text-xs text-zinc-500 max-w-md">
              Contenedor arquitectónico reservado para la toma de producto en escenario industrial. No se sustituye por imágenes de stock ni fotografías reutilizadas.
            </p>
          </div>
        </section>

      </div>
    </article>
  );
};
