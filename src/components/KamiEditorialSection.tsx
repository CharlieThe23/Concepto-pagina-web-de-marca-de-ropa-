import React from 'react';
import { CURRENT_COLLECTION_CONFIG } from '../config/dropConfig';

interface KamiEditorialSectionProps {
  onExploreAccessories?: () => void;
  onExploreTracksuits?: () => void;
}

export const KamiEditorialSection: React.FC<KamiEditorialSectionProps> = ({
  onExploreAccessories,
  onExploreTracksuits
}) => {
  return (
    <section 
      id="kami-line" 
      className="border-b border-zinc-800 bg-[#090a0d] py-16 px-4 sm:px-6 lg:px-8 font-mono"
      aria-label="Editorial Line KAMI TO TO NO MI"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">[LINE IDENTITY]</span>
            <span className="text-zinc-200 font-bold uppercase">{CURRENT_COLLECTION_CONFIG.graphicLine}</span>
          </div>
          <div className="text-zinc-500 uppercase">
            AUTUMN / WINTER 2026 CAPSULE
          </div>
        </div>

        {/* Japanese Quote & Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 uppercase tracking-widest">
              LÍNEA GRÁFICA & IDENTIDAD CONCEPTUAL
            </div>

            <div className="space-y-2">
              <p className="text-2xl sm:text-4xl font-black text-white tracking-wide font-sans">
                神よ、私を見捨てないで。
              </p>
              <p className="text-lg sm:text-xl text-zinc-300 font-mono italic">
                {CURRENT_COLLECTION_CONFIG.japaneseQuote}
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-mono">
                {CURRENT_COLLECTION_CONFIG.quoteTranslation}
              </p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed font-sans max-w-2xl">
              Dentro del universo <span className="font-semibold text-white">SEE YOU IN VOID</span>, la línea gráfica <span className="font-semibold text-white">KAMI TO TO NO MI</span> reúne las prendas y accesorios que incorporan la iconografía de inspiración anime, códigos digitales y el simbolismo existencial que define la identidad visual de NULL.SYS.
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-2xl">
              Nacida de la fricción entre la estética brutalista Y2K y la funcionalidad técnica contemporánea, cada silueta está diseñada para resistir el colapso del sistema: nylon repelente al agua, punto de alto gramaje, remaches de cromo envejecido y acabados deshilachados a mano.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
              {onExploreTracksuits && (
                <button
                  onClick={onExploreTracksuits}
                  className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Ver Chándales Técnicos →
                </button>
              )}
              {onExploreAccessories && (
                <button
                  onClick={onExploreAccessories}
                  className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border border-zinc-800 uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Ver Gorros Kami Beanie →
                </button>
              )}
            </div>
          </div>

          {/* Technical Specs Callout Box */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 p-6 space-y-4">
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold border-b border-zinc-800 pb-2 flex justify-between">
              <span>FICHA DE LÍNEA // KAMI SPEC</span>
              <span className="text-zinc-500">REV. 2026.4</span>
            </div>

            <ul className="text-xs text-zinc-300 space-y-3 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-zinc-500">01.</span>
                <span><strong>Gráfica Exclusiva:</strong> Retrato anime melancólico serigrafiado en gran formato y tejido jacquard pixelado.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-500">02.</span>
                <span><strong>Herrajes Industriales:</strong> Inserción de argolla piercing metálica plateada y cremalleras técnicas bidireccionales.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-500">03.</span>
                <span><strong>Paleta Monocromática:</strong> Negro absoluto (#050505), blanco nieve frío y gris grafito lavado con piedra pómez.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-500">04.</span>
                <span><strong>Tirada Limitada:</strong> Producción bajo demanda controlada. Sin reposición una vez extraído del catálogo.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-500">
              DISPONIBLE EXCLUSIVAMENTE A TRAVÉS DEL SISTEMA CENTRAL DE NULL.SYS.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
