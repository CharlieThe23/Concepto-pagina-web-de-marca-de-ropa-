import React from 'react';
import { IMAGE_REGISTRY } from '../config/imageRegistry';
import { CURRENT_COLLECTION_CONFIG } from '../config/dropConfig';

interface HeroSectionProps {
  onExploreCollection: () => void;
  onNavigateToTracksuit: () => void;
  onOpenCodeInspector?: () => void;
  onPlayClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollection,
  onNavigateToTracksuit,
  onPlayClick
}) => {
  const groupHero = IMAGE_REGISTRY.INICIO_GROUP_HERO;

  return (
    <section 
      id="inicio"
      className="relative border-b border-zinc-800 bg-[#060709] overflow-hidden" 
      aria-label="Inicio — SEE YOU IN VOID"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
        
        {/* Top telemetry & Release metadata strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="text-zinc-100 uppercase font-semibold">NULL.SYS</span>
            <span aria-hidden="true" className="text-zinc-700">/</span>
            <span className="text-zinc-300 font-bold uppercase">{CURRENT_COLLECTION_CONFIG.title}</span>
            <span aria-hidden="true" className="text-zinc-700">/</span>
            <span className="text-zinc-400">{CURRENT_COLLECTION_CONFIG.season}</span>
            <span aria-hidden="true" className="text-zinc-700">/</span>
            <span className="text-zinc-400">{CURRENT_COLLECTION_CONFIG.graphicLine}</span>
          </div>

          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-1">
            <span className="w-2 h-2 bg-zinc-300 animate-pulse"></span>
            <span className="text-zinc-200 font-bold uppercase tracking-wider text-[11px]">
              LIMITED RELEASE · COMING SOON
            </span>
          </div>
        </div>

        {/* 2-Column Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end font-mono">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs tracking-widest text-zinc-400 uppercase font-semibold">
              {CURRENT_COLLECTION_CONFIG.season} — LIMITED RELEASE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[0.92]">
              {CURRENT_COLLECTION_CONFIG.title}
            </h1>

            <div className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-zinc-200">
              {CURRENT_COLLECTION_CONFIG.claim}
            </div>

            <blockquote className="text-base text-zinc-400 font-light italic border-l-2 border-zinc-600 pl-4 py-1 leading-relaxed max-w-2xl">
              {CURRENT_COLLECTION_CONFIG.editorialText}
            </blockquote>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end space-y-3">
            <div className="flex flex-col sm:flex-row lg:flex-col w-full gap-3">
              <button
                onClick={() => {
                  onPlayClick?.();
                  onExploreCollection();
                }}
                className="px-6 py-3.5 bg-zinc-100 hover:bg-white text-black font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer border border-white flex items-center justify-center gap-2 shadow-xl"
              >
                <span>EXPLORE COLLECTION</span>
                <span className="font-black">↓</span>
              </button>

              <button
                onClick={() => {
                  onPlayClick?.();
                  onNavigateToTracksuit();
                }}
                className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer border border-zinc-700 flex items-center justify-center gap-2"
              >
                <span>TRACKSUIT — PRE-ORDER</span>
                <span className="text-zinc-400">→</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
              <span>JERSEY 45,00 € · CHÁNDAL PRE-RESERVA · GORROS KAMI</span>
            </div>
          </div>

        </div>

        {/* Full-Width Group Campaign Photo (Exclusive to Inicio, 16:9 Ratio, No Cuts) */}
        <div className="relative bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl w-full aspect-16/9 flex items-center justify-center">
          <img
            src={groupHero.filePath!}
            alt={groupHero.altText}
            className="w-full h-full object-contain sm:object-cover object-center"
            loading="eager"
          />

          <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-sm border border-zinc-800 px-3.5 py-1.5 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-zinc-300"></span>
            <span>SEE YOU IN VOID // 16:9 CAMPAIGN HERO (4 MODELOS NULL.SYS)</span>
          </div>

          <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-sm border border-zinc-800 px-3 py-1 text-[10px] font-mono text-zinc-400">
            AUTUMN / WINTER 2026
          </div>
        </div>

      </div>
    </section>
  );
};
