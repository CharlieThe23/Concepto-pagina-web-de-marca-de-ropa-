import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onPlayClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd,
  onPlayClick
}) => {
  const isAvailable = product.status === 'live_drop' || product.status === 'AVAILABLE' || product.status === 'FEW UNITS';
  const isComingSoon = product.status === 'coming_soon';

  return (
    <article className="group flex flex-col bg-[#0c0d10] border border-zinc-800 hover:border-zinc-600 transition-colors">
      
      {/* Product Image Slot with Styled Fallback Container */}
      <div 
        onClick={() => {
          onPlayClick();
          onSelect(product);
        }}
        className="relative aspect-4/3 overflow-hidden bg-zinc-950 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top filter grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Technical Coordinate & Stock Status (Unboxed text) */}
        <div className="absolute top-3 left-3 bg-black/85 border border-zinc-800 px-2.5 py-1 text-[11px] font-mono text-zinc-300">
          {product.code}
        </div>

        <div className="absolute top-3 right-3 bg-black/85 border border-zinc-800 px-2 py-0.5 text-[10px] font-mono">
          <span className={
            product.status === 'coming_soon' 
              ? 'text-sky-400 font-bold' 
              : product.status === 'sold_out' || product.status === 'EXTRACTED' 
              ? 'text-zinc-500' 
              : 'text-zinc-300'
          }>
            {product.status === 'coming_soon' ? 'COMING SOON' : product.status === 'sold_out' ? 'SOLD OUT' : product.status}
          </span>
        </div>
      </div>

      {/* Card Content & Metadata (Zero-Pill Discipline) */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        
        <div>
          {/* Unboxed category metadata with separator */}
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-zinc-500 mb-1.5">
            <span>{product.category}</span>
            <span aria-hidden="true" className="text-zinc-700">/</span>
            <span>{product.isStarProduct ? 'DROP_001' : 'Universe Ref'}</span>
          </div>

          <h3 
            onClick={() => {
              onPlayClick();
              onSelect(product);
            }}
            className="text-base font-semibold font-mono text-zinc-100 hover:text-white transition-colors cursor-pointer"
          >
            {product.title}
          </h3>

          <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Bottom baseline: Price + Action */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3">
          <div className="text-xs font-mono font-bold tabular-nums text-zinc-100">
            {product.priceConfigured && product.priceEUR !== null ? (
              <span>{product.priceEUR} <span className="text-[10px] font-normal text-zinc-500">{product.currency}</span></span>
            ) : (
              <span className="text-sky-400 font-mono text-[11px] tracking-wider uppercase">PRICE REVEAL SOON</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onPlayClick();
                onSelect(product);
              }}
              className="px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-colors cursor-pointer"
            >
              Specs
            </button>

            {isAvailable ? (
              <button
                onClick={() => {
                  onPlayClick();
                  onQuickAdd(product);
                }}
                className="px-3 py-1.5 text-xs font-mono font-bold text-black bg-zinc-100 hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
              >
                + Add
              </button>
            ) : isComingSoon ? (
              <span className="px-2.5 py-1.5 text-[10px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 font-semibold uppercase">
                Preview
              </span>
            ) : (
              <span className="px-3 py-1.5 text-xs font-mono text-zinc-600 bg-zinc-950 border border-zinc-800 cursor-not-allowed">
                Archive
              </span>
            )}
          </div>
        </div>

      </div>

    </article>
  );
};
