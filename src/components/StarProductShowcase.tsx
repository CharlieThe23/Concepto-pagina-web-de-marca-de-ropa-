import React from 'react';
import { Product } from '../types';
import { DropCollectionConfig } from '../config/dropConfig';

interface StarProductShowcaseProps {
  product: Product;
  config: DropCollectionConfig;
  onOpenNotifyModal: () => void;
  onAddToCart: (product: Product, size: string) => void;
  onPlayClick: () => void;
}

export const StarProductShowcase: React.FC<StarProductShowcaseProps> = ({
  product,
  onOpenNotifyModal,
  onPlayClick
}) => {
  return (
    <section className="p-8 text-center font-mono">
      <h2 className="text-xl font-bold uppercase">{product.title}</h2>
      <button 
        onClick={() => {
          onPlayClick();
          onOpenNotifyModal();
        }}
        className="mt-4 px-6 py-2 bg-white text-black"
      >
        Notify Me
      </button>
    </section>
  );
};
