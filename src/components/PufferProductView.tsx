import React, { useState } from 'react';
import { IMAGE_REGISTRY } from '../config/imageRegistry';
import { DROP_001_CONFIG, formatProductPrice } from '../config/dropConfig';

interface PufferProductViewProps {
  onBackToCatalog: () => void;
  onOpenNotifyModal: () => void;
  onPlayClick: () => void;
}

export const PufferProductView: React.FC<PufferProductViewProps> = ({
  onBackToCatalog,
  onOpenNotifyModal,
  onPlayClick
}) => {
  const [selectedSize, setSelectedSize] = useState('1 (S-M)');
  const [isZoomed, setIsZoomed] = useState(false);

  const priceDisplay = formatProductPrice(DROP_001_CONFIG.products.puffer);
  const editorialImage = IMAGE_REGISTRY.PUFFER_PAGE_EDITORIAL_MODEL;

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
            <span className="text-sky-400 font-bold uppercase">ABRIGO PUFFER NEGRA</span>
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

        {/* Encabezado con Escenario (Section 5 layout rule: text on the left, keeping product on right) */}
        <header className="relative border border-zinc-800 bg-zinc-950 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[220px]">
            
            {/* Left Area: Scenario Text and Metadata */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4 z-10 bg-zinc-950/90">
              <div className="space-y-1">
                <span className="text-[10px] text-sky-400 uppercase tracking-widest font-semibold block">
                  [ DROP_001 // OUTERWEAR EDITION ]
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                  Abrigo Puffer Negra // High-Volume Shell
                </h2>
              </div>
              <p className="text-xs text-zinc-400 max-w-md font-light leading-relaxed">
                Silueta de plumífero sobredimensionado con cuello alto envolvente, cierre frontal de cremallera y acolchado de volumen arquitectónico.
              </p>
              <div className="text-[10px] text-zinc-600">
                ENCABEZADO: 03-puffer-escenario-1920x1080.png
              </div>
            </div>

            {/* Right Area: Clean Architectural Placeholder for Pending Scenario File */}
            <div className="lg:col-span-6 bg-[#0c0d10] border-t lg:border-t-0 lg:border-l border-zinc-800/80 p-6 flex flex-col items-center justify-center text-center space-y-2">
              <span className="text-zinc-600 text-2xl font-black">[ SCENARIO 03 ]</span>
              <div className="text-xs font-bold text-zinc-400 uppercase">
                Ubicación reservada: 03-puffer-escenario-1920x1080.png
              </div>
              <p className="text-[11px] text-zinc-500 max-w-sm">
                Espacio preparado para la toma escénica del abrigo puffer en hangar industrial.
              </p>
            </div>

          </div>
        </header>

        {/* Product Details 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Exclusive Editorial Model Photo */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative bg-zinc-950 border border-zinc-800 overflow-hidden">
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
                  src={editorialImage.filePath!}
                  alt={editorialImage.altText}
                  className="w-full h-full object-cover object-top filter grayscale contrast-110"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 bg-black/85 border border-zinc-800 px-3 py-1 text-[11px] text-zinc-300">
                01. Fotografía Editorial // Modelo con Abrigo Puffer
              </div>
              <div className="absolute top-4 right-4 bg-black/85 border border-zinc-800 px-2.5 py-1 text-[10px] text-zinc-400">
                {isZoomed ? '[ ZOOM ACTIVO ]' : '[ CLICK PARA ZOOM ]'}
              </div>
            </div>

            <div className="p-3 bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between">
              <span>REF FOTOGRÁFICA: {editorialImage.promptReference}</span>
              <span className="text-zinc-400">ASIGNACIÓN EXCLUSIVA</span>
            </div>
          </div>

          {/* Right Column: Specifications & Pricing */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            <div className="space-y-3 border-b border-zinc-800 pb-5">
              <div className="flex items-center gap-2 text-xs text-sky-400 tracking-widest uppercase font-bold">
                <span className="w-2 h-2 bg-sky-400"></span>
                <span>OUTERWEAR // DROP_001</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                NULL.SYS — Abrigo Puffer Negra
              </h1>

              <div className="flex items-center gap-4 text-xs text-zinc-400">
                <span>REF: <strong className="text-zinc-200">NS-D001-003</strong></span>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <span>CAT: <strong className="text-zinc-200">Heavy Puffer Coat</strong></span>
              </div>

              {/* Exact Confirmed Price: 72,00 € */}
              <div className="pt-2">
                <div className="text-3xl font-black tabular-nums text-white flex items-baseline gap-2">
                  <span>{priceDisplay}</span>
                </div>
                <div className="text-[11px] text-zinc-500 mt-1">
                  Precio oficial confirmado. Compras temporalmente deshabilitadas hasta el drop oficial.
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
                Descripción de la Prenda:
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light bg-zinc-950 p-4 border border-zinc-800/80">
                Abrigo de plumón técnico de corte boxy y cuello alto envolvente. Diseñado con cámaras de aislamiento sobredimensionadas para retener calor y proteger frente a la fricción urbana, manteniendo un peso ligero y máxima movilidad.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2 border-t border-zinc-800 pt-4">
              <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
                Características:
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Color negro mate.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Silueta puffer de gran volumen.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Cuello alto acolchado.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Cremallera frontal completa con tirador industrial.</span></li>
                <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Bolsillos laterales diagonales.</span></li>
              </ul>
            </div>

            {/* Size Variants (Informative) */}
            <div className="space-y-2 border-t border-zinc-800 pt-4">
              <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
                Tallas Disponibles:
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
                ESTADO: <strong className="text-sky-400 uppercase">COMING SOON</strong> · Compras deshabilitadas hasta el lanzamiento oficial.
              </div>
            </div>

          </div>

        </div>

      </div>
    </article>
  );
};
