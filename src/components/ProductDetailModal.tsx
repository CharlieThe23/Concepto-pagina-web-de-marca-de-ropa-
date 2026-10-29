import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
  onOpenNotifyModal: () => void;
  onPlayClick: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenNotifyModal,
  onPlayClick
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'OS');
  const isAvailable = product.status === 'live_drop' || product.status === 'AVAILABLE' || product.status === 'FEW UNITS';
  const isComingSoon = product.status === 'coming_soon';

  const handleAdd = () => {
    onPlayClick();
    onAddToCart(product, selectedSize);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0c0d10] border border-zinc-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-mono"
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950 text-xs">
          <div className="flex items-center gap-3 text-zinc-400">
            <span className="text-zinc-100 font-bold">{product.code}</span>
            <span aria-hidden="true" className="text-zinc-700">/</span>
            <span className="uppercase">{product.category}</span>
            <span aria-hidden="true" className="text-zinc-700">/</span>
            <span className={isComingSoon ? 'text-sky-400 font-bold' : 'text-zinc-400'}>
              {product.status === 'coming_soon' ? 'COMING SOON' : product.status}
            </span>
          </div>

          <button
            onClick={() => {
              onPlayClick();
              onClose();
            }}
            className="text-zinc-400 hover:text-white px-2 py-1 uppercase text-xs cursor-pointer"
            aria-label="Cerrar modal de producto"
          >
            [ ESC // CLOSE ]
          </button>
        </div>

        {/* Modal Body: 2-Column Split */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Image */}
          <div className="md:col-span-6 bg-zinc-950 border border-zinc-800 aspect-3/4 sm:aspect-square overflow-hidden relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-top filter grayscale contrast-105"
            />
            <div className="absolute bottom-3 left-3 bg-black/85 border border-zinc-700 px-2.5 py-1 text-[10px] text-zinc-300">
              STATUS: {isComingSoon ? 'COMING SOON' : product.status}
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-widest text-sky-400">
                {product.categoryLabel}
              </div>

              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold uppercase text-zinc-100">
                {product.title}
              </h2>

              {/* Price */}
              <div className="text-lg font-bold tabular-nums text-zinc-100">
                {product.priceConfigured && product.priceEUR !== null ? (
                  <span>{product.priceEUR} {product.currency}</span>
                ) : (
                  <span className="text-sky-400 text-sm tracking-wider uppercase">PRICE REVEAL SOON</span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* Features (if provided) */}
            {product.features && (
              <div className="space-y-2 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
                <span className="text-zinc-300 uppercase block font-semibold text-[11px]">
                  Detalles de la Prenda:
                </span>
                <ul className="space-y-1">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-sky-400">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Size Variant Selector */}
            <div className="space-y-2 pt-3 border-t border-zinc-800/80">
              <span className="text-xs uppercase text-zinc-400 block font-semibold">
                Tallas {isComingSoon ? '(Informativas)' : 'Disponibles'}:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => {
                      onPlayClick();
                      setSelectedSize(size);
                    }}
                    className={`px-3 py-1.5 text-xs transition-colors cursor-pointer border ${
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

            {/* Primary Action Button */}
            <div className="pt-4 border-t border-zinc-800">
              {isAvailable ? (
                <button
                  onClick={handleAdd}
                  className="w-full py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer border border-zinc-200"
                >
                  Añadir a la Bolsa // {product.priceEUR ? `${product.priceEUR} EUR` : ''}
                </button>
              ) : isComingSoon ? (
                <button
                  onClick={() => {
                    onPlayClick();
                    onClose();
                    onOpenNotifyModal();
                  }}
                  className="w-full py-3.5 bg-sky-950/80 hover:bg-sky-900 text-sky-300 border border-sky-600/80 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Registrar Aviso de Lanzamiento // Notify Me
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-3.5 bg-zinc-900 text-zinc-600 text-xs font-bold uppercase tracking-widest border border-zinc-800 cursor-not-allowed"
                >
                  Pieza de Archivo // Sold Out
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
