import React, { useState } from 'react';
import { DROP_001_CONFIG, formatProductPrice } from '../config/dropConfig';

interface SudaderaProductViewProps {
  onBackToCatalog: () => void;
  onOpenNotifyModal: () => void;
  onPlayClick: () => void;
}

export const SudaderaProductView: React.FC<SudaderaProductViewProps> = ({
  onBackToCatalog,
  onOpenNotifyModal,
  onPlayClick
}) => {
  const [selectedSize, setSelectedSize] = useState('1 (S-M)');

  const priceDisplay = formatProductPrice(DROP_001_CONFIG.products.sudadera);

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
            <span className="text-sky-400 font-bold uppercase">SUDADERA CON CAPUCHA</span>
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
                  [ DROP_001 // FLEECE SERIES ]
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                  Sudadera con Capucha // Heavyweight Fleece
                </h2>
              </div>
              <p className="text-xs text-zinc-400 max-w-md font-light leading-relaxed">
                Sudadera con capucha en lavado ácido antracita, hombro caído estructurado y bolsillo canguro reforzado con remates desgastados.
              </p>
              <div className="text-[10px] text-zinc-600">
                ENCABEZADO: 04-sudadera-escenario-1920x1080.png
              </div>
            </div>

            {/* Right Area: Clean Architectural Placeholder for Pending Scenario File */}
            <div className="lg:col-span-6 bg-[#0c0d10] border-t lg:border-t-0 lg:border-l border-zinc-800/80 p-6 flex flex-col items-center justify-center text-center space-y-2">
              <span className="text-zinc-600 text-2xl font-black">[ SCENARIO 04 ]</span>
              <div className="text-xs font-bold text-zinc-400 uppercase">
                Ubicación reservada: 04-sudadera-escenario-1920x1080.png
              </div>
              <p className="text-[11px] text-zinc-500 max-w-sm">
                Espacio reservado para la toma de la sudadera en escenario industrial.
              </p>
            </div>

          </div>
        </header>

        {/* Specifications & Pricing */}
        <div className="max-w-3xl mx-auto bg-zinc-950 border border-zinc-800 p-8 space-y-6">
          
          <div className="space-y-3 border-b border-zinc-800 pb-5">
            <div className="flex items-center gap-2 text-xs text-sky-400 tracking-widest uppercase font-bold">
              <span className="w-2 h-2 bg-sky-400"></span>
              <span>HEAVY FLEECE // DROP_001</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              NULL.SYS — Sudadera con Capucha
            </h1>

            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <span>REF: <strong className="text-zinc-200">NS-D001-004</strong></span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>CAT: <strong className="text-zinc-200">Heavyweight Hoodie</strong></span>
            </div>

            {/* Price: PRICE REVEAL SOON (No invented price!) */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-sky-300 font-mono text-sm font-bold tracking-wider uppercase">
                <span className="w-2 h-2 bg-sky-400 animate-pulse"></span>
                <span>{priceDisplay}</span>
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">
                La sudadera no tiene precio comercial confirmado por la marca. Sin precios provisionales inventados.
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
              Descripción de la Prenda:
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light bg-zinc-900/50 p-4 border border-zinc-800/80">
              Sudadera encapuchada confeccionada en tejido grueso con acabado desgastado mineral. Diseñada con un volumen generoso en el torso, mangas amplias y dobladillos ajustados para una caída arquitectónica distintiva.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2 border-t border-zinc-800 pt-4">
            <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
              Características:
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Tono ceniza oscuro / lavado mineral.</span></li>
              <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Silueta oversized con hombro caído.</span></li>
              <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Capucha cruzada de doble capa sin cordones.</span></li>
              <li className="flex items-center gap-2"><span className="text-sky-400">›</span><span>Bolsillo canguro frontal con remate reforzado.</span></li>
            </ul>
          </div>

          {/* Size Variants (Informative) */}
          <div className="space-y-2 border-t border-zinc-800 pt-4">
            <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block">
              Tallas Previstas (Informativo):
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
              <span>NOTIFY ME // AVISO DE PRECIO Y DROP</span>
            </button>
            
            <div className="p-3 bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 text-center">
              ESTADO: <strong className="text-sky-400 uppercase">COMING SOON</strong> · Compras deshabilitadas hasta confirmación del precio y stock.
            </div>
          </div>

        </div>

      </div>
    </article>
  );
};
