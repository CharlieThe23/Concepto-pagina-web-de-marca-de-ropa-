import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onPlayClick: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onPlayClick
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => {
    const itemPrice = item.product.priceEUR ?? 0;
    return sum + itemPrice * item.quantity;
  }, 0);

  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + (items.length > 0 ? shipping : 0);

  const handleCheckout = () => {
    onPlayClick();
    setIsCheckingOut(true);
    setTimeout(() => {
      const orderId = `NULL-DROP-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderConfirmed(orderId);
      setIsCheckingOut(false);
      onClearCart();
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a0b0d] border-l border-zinc-800 flex flex-col justify-between shadow-2xl">
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950 font-mono">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">
                [ SYSTEM BAG // LOG ]
              </span>
              <h2 id="drawer-title" className="text-base font-bold uppercase text-zinc-100">
                Extraction Bag [{items.reduce((acc, i) => acc + i.quantity, 0)}]
              </h2>
            </div>

            <button
              onClick={() => {
                onPlayClick();
                onClose();
              }}
              className="text-zinc-400 hover:text-white text-xs uppercase px-2 py-1 cursor-pointer"
              aria-label="Cerrar bolsa"
            >
              [ CLOSE ]
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6 font-mono">
            {orderConfirmed ? (
              <div className="p-6 bg-zinc-950 border border-zinc-700 space-y-4 text-center">
                <div className="w-10 h-10 mx-auto bg-white text-black flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <h3 className="text-base font-bold uppercase text-white">
                  Order Dispatched // Confirmed
                </h3>
                <p className="text-xs text-zinc-400">
                  Transaction registered in the system archive. Your dispatch tracking code is:
                </p>
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-sm font-bold text-zinc-200">
                  {orderConfirmed}
                </div>
                <button
                  onClick={() => {
                    onPlayClick();
                    setOrderConfirmed(null);
                    onClose();
                  }}
                  className="w-full py-2.5 bg-zinc-100 text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                >
                  Return to Flagship
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="text-zinc-600 text-2xl font-bold">[ VOID ]</div>
                <p className="text-xs text-zinc-400 uppercase tracking-wider">
                  Your extraction bag is currently empty.
                </p>
                <p className="text-[11px] text-zinc-500 max-w-xs mx-auto">
                  DROP_001 items are currently in preview state. Use NOTIFY ME to receive drop alerts.
                </p>
              </div>
            ) : (
              <ul className="space-y-4 divide-y divide-zinc-800/80">
                {items.map((item, index) => {
                  const price = item.product.priceEUR ?? 0;
                  return (
                    <li key={`${item.product.id}-${item.size}`} className="pt-4 first:pt-0 flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-20 h-20 object-cover object-top bg-zinc-950 border border-zinc-800 filter grayscale"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-bold text-zinc-100 uppercase">
                              {item.product.title}
                            </h4>
                            <button
                              onClick={() => {
                                onPlayClick();
                                onRemoveItem(index);
                              }}
                              className="text-zinc-500 hover:text-zinc-200 text-xs cursor-pointer"
                              title="Eliminar de la bolsa"
                            >
                              ×
                            </button>
                          </div>
                          <div className="text-[11px] text-zinc-400 mt-0.5">
                            Size: {item.size}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs mt-3">
                          <div className="flex items-center border border-zinc-800 bg-zinc-950">
                            <button
                              onClick={() => {
                                onPlayClick();
                                onUpdateQuantity(index, -1);
                              }}
                              className="px-2 py-0.5 text-zinc-400 hover:text-white cursor-pointer"
                              aria-label="Disminuir cantidad"
                            >
                              -
                            </button>
                            <span className="px-2 py-0.5 text-zinc-100 tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => {
                                onPlayClick();
                                onUpdateQuantity(index, 1);
                              }}
                              className="px-2 py-0.5 text-zinc-400 hover:text-white cursor-pointer"
                              aria-label="Aumentar cantidad"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-zinc-100 font-bold tabular-nums">
                            {price > 0 ? `${price * item.quantity} EUR` : 'PRICE REVEAL SOON'}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Drawer Footer with Subtotal & Checkout */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-zinc-950 space-y-4 font-mono">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal:</span>
                  <span className="text-zinc-200 tabular-nums">{subtotal} EUR</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Courier Envío:</span>
                  <span className="text-zinc-200 tabular-nums">
                    {shipping === 0 ? 'GRATIS (PEDIDOS &gt; 200€)' : `${shipping} EUR`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Total Estimado:</span>
                  <span className="tabular-nums">{total} EUR</span>
                </div>
              </div>

              <button
                disabled={true}
                className="w-full py-4 bg-zinc-900 text-zinc-500 text-xs font-bold uppercase tracking-widest border border-zinc-800 cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span>COMPRAS DESHABILITADAS // COMING SOON</span>
              </button>

              <div className="text-[10px] text-center text-zinc-500 uppercase">
                Los precios confirmados no activan la pasarela de compra hasta el drop oficial.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
