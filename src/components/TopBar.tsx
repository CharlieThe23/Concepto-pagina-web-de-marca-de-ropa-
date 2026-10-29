import React, { useState } from 'react';

export type ViewState = 'home' | 'catalog' | 'jersey' | 'tracksuit' | 'denim' | 'beanie' | 'puffer' | 'sudadera';

interface TopBarProps {
  currentUser: { username: string; role: string } | null;
  onLogout: () => void;
  onNavigate: (view: ViewState) => void;
  activeView: string;
  cartCount?: number;
  onOpenCart?: () => void;
  onPlayClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentUser,
  onLogout,
  onNavigate,
  activeView,
  cartCount = 0,
  onOpenCart,
  onPlayClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-[#060709]/95 backdrop-blur-md border-b border-zinc-800 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            onPlayClick?.();
            onNavigate('home');
          }}
          className="text-lg sm:text-xl font-bold tracking-tighter text-zinc-100 whitespace-nowrap shrink-0 hover:text-white transition-colors uppercase cursor-pointer"
        >
          [ NULL.SYS ]
        </button>

        {/* Zone 2: 4 new categories + Archive clean text links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs tracking-widest uppercase text-zinc-400" aria-label="Navegación Principal">
          <button 
            onClick={() => {
              onPlayClick?.();
              onNavigate('home');
            }} 
            className={`transition-colors underline-offset-4 hover:underline whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'home' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Inicio
          </button>

          <button 
            onClick={() => {
              onPlayClick?.();
              onNavigate('jersey');
            }} 
            className={`transition-colors underline-offset-4 hover:underline whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'jersey' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Jerseys
          </button>

          <button 
            onClick={() => {
              onPlayClick?.();
              onNavigate('tracksuit');
            }} 
            className={`transition-colors underline-offset-4 hover:underline whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'tracksuit' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Chándales
          </button>

          <button 
            onClick={() => {
              onPlayClick?.();
              onNavigate('denim');
            }} 
            className={`transition-colors underline-offset-4 hover:underline whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'denim' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Pantalones
          </button>

          <button 
            onClick={() => {
              onPlayClick?.();
              onNavigate('beanie');
            }} 
            className={`transition-colors underline-offset-4 hover:underline whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'beanie' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Accesorios
          </button>

          <button 
            onClick={() => {
              onPlayClick?.();
              onNavigate('catalog');
            }} 
            className={`transition-colors underline-offset-4 hover:underline whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'catalog' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Archive
          </button>
        </nav>

        {/* Zone 3: Account State, Cart & Logout Action */}
        <div className="flex items-center gap-3 shrink-0">
          {onOpenCart && (
            <button
              onClick={() => {
                onPlayClick?.();
                onOpenCart();
              }}
              className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs border border-zinc-700 flex items-center gap-2 cursor-pointer transition-colors"
              aria-label="Abrir Bolsa de Compra"
            >
              <span>BAG</span>
              <span className="w-4 h-4 rounded-full bg-zinc-100 text-black text-[10px] font-bold flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            </button>
          )}

          {currentUser && (
            <div className="hidden sm:flex items-center gap-3 text-xs">
              <span className="text-zinc-500 font-mono text-[11px]">
                USR: <strong className="text-zinc-300">{currentUser.username}</strong>
              </span>

              <button
                onClick={() => {
                  onPlayClick?.();
                  onLogout();
                }}
                className="px-2.5 py-1 text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-colors uppercase cursor-pointer"
              >
                Cerrar Sesión
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Abrir Menú"
          >
            <span className="text-sm font-mono">[MENU]</span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#090a0d] p-4 space-y-3 text-xs font-mono">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button 
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left border ${activeView === 'home' ? 'bg-zinc-800 border-zinc-500 text-white' : 'border-zinc-800 text-zinc-400'}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => { onNavigate('jersey'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left border ${activeView === 'jersey' ? 'bg-zinc-800 border-zinc-500 text-white' : 'border-zinc-800 text-zinc-400'}`}
            >
              Jerseys
            </button>
            <button 
              onClick={() => { onNavigate('tracksuit'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left border ${activeView === 'tracksuit' ? 'bg-zinc-800 border-zinc-500 text-white' : 'border-zinc-800 text-zinc-400'}`}
            >
              Chándales
            </button>
            <button 
              onClick={() => { onNavigate('denim'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left border ${activeView === 'denim' ? 'bg-zinc-800 border-zinc-500 text-white' : 'border-zinc-800 text-zinc-400'}`}
            >
              Pantalones
            </button>
            <button 
              onClick={() => { onNavigate('beanie'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left border ${activeView === 'beanie' ? 'bg-zinc-800 border-zinc-500 text-white' : 'border-zinc-800 text-zinc-400'}`}
            >
              Accesorios
            </button>
            <button 
              onClick={() => { onNavigate('catalog'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left border ${activeView === 'catalog' ? 'bg-zinc-800 border-zinc-500 text-white' : 'border-zinc-800 text-zinc-400'}`}
            >
              Archive
            </button>
          </div>

          {currentUser && (
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-[11px] text-zinc-400">Usuario: {currentUser.username}</span>
              <button 
                onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                className="text-[11px] text-zinc-300 underline"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
