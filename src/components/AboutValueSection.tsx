import React from 'react';

export const AboutValueSection: React.FC = () => {
  return (
    <article id="profile" className="border-b border-zinc-800 bg-[#090a0c]">
      
      {/* Section: About Us (#presentacion) */}
      <section 
        id="presentacion" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-b border-zinc-800/80"
        aria-labelledby="about-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
              [ 01 // MANIFESTO ]
            </span>
            <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold font-mono uppercase text-zinc-100">
              About Us // Null.Sys
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-light">
              We choose the void. <strong className="text-white font-semibold">Null.Sys</strong> is hardware for the modern dystopia. Monochromatic Y2K utility meets brutalist minimalism. Tactical leather, baggy silhouettes, and terminal-inspired design. Dress for the system. Survive the crash.
            </p>
            
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
              <div>FOUNDED: 2026</div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <div>AESTHETIC: Y2K BRUTALIST</div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <div>ARCHIVE: LIMITED BATCH</div>
            </div>
          </div>

        </div>
      </section>

      {/* Section: What We Offer / Value Proposition (#era-y2k) */}
      <section 
        id="era-y2k" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        aria-labelledby="value-prop-heading"
      >
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
            [ 02 // ARCHITECTURAL STANDARD ]
          </span>
          <h2 id="value-prop-heading" className="text-2xl sm:text-3xl font-bold font-mono uppercase text-zinc-100">
            What We Offer // Value Proposition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Proposition 1 */}
          <div className="p-6 bg-zinc-950 border border-zinc-800 space-y-3">
            <div className="text-xs font-mono text-zinc-500">PROP_01</div>
            <h3 className="text-base font-bold font-mono uppercase text-zinc-100">
              Proportion Engineering
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Architectural cuts and exaggerated volumes. Structural dropped shoulders, anatomical leg stacking, and sculpted drape.
            </p>
          </div>

          {/* Proposition 2 */}
          <div className="p-6 bg-zinc-950 border border-zinc-800 space-y-3">
            <div className="text-xs font-mono text-zinc-500">PROP_02</div>
            <h3 className="text-base font-bold font-mono uppercase text-zinc-100">
              Monochromatic Integration
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A strict greyscale and chrome palette. Effortless matching, maximum visual impact across matte leathers and raw denims.
            </p>
          </div>

          {/* Proposition 3 */}
          <div className="p-6 bg-zinc-950 border border-zinc-800 space-y-3">
            <div className="text-xs font-mono text-zinc-500">PROP_03</div>
            <h3 className="text-base font-bold font-mono uppercase text-zinc-100">
              High-Density Fabrics
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Heavyweight denim and treated leather built for urban friction. Laminated technical membranes resistant to abrasions.
            </p>
          </div>

          {/* Proposition 4 */}
          <div className="p-6 bg-zinc-950 border border-zinc-800 space-y-3">
            <div className="text-xs font-mono text-zinc-500">PROP_04</div>
            <h3 className="text-base font-bold font-mono uppercase text-zinc-100">
              Scarcity Protocol
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Limited batch drops. Once extracted from the system, it doesn&apos;t return. Each garment carries verified cryptographic provenance.
            </p>
          </div>

        </div>
      </section>

    </article>
  );
};
