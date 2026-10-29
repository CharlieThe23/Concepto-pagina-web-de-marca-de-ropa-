/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LoginGate } from './components/LoginGate';
import { TopBar, ViewState } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { KamiEditorialSection } from './components/KamiEditorialSection';
import { CatalogSection, ProductPageView } from './components/CatalogSection';
import { JerseyProductView } from './components/JerseyProductView';
import { TracksuitProductView } from './components/TracksuitProductView';
import { DenimProductView } from './components/DenimProductView';
import { BeanieProductView } from './components/BeanieProductView';
import { PufferProductView } from './components/PufferProductView';
import { SudaderaProductView } from './components/SudaderaProductView';
import { AuthDropSection } from './components/AuthDropSection';
import { AboutValueSection } from './components/AboutValueSection';
import { CartDrawer } from './components/CartDrawer';
import { CodeInspectorModal } from './components/CodeInspectorModal';
import { NotifyModal } from './components/NotifyModal';
import { Footer } from './components/Footer';
import { validateImageUniqueness } from './config/imageRegistry';
import { playTacticalClick, playMechanicalTone } from './utils/audio';
import { CartItem } from './types';

export default function App() {
  const [currentUser, setCurrentUser] = useState<{ username: string; role: string } | null>(null);
  const [isLoadingSession, setIsLoadingSession] = useState(true);
  const [activeView, setActiveView] = useState<ViewState>('home');
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const [notifyModalProduct, setNotifyModalProduct] = useState<{ title: string; isPreOrder: boolean }>({
    title: 'SEE YOU IN VOID — DROP_001',
    isPreOrder: false
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCodeInspectorOpen, setIsCodeInspectorOpen] = useState(false);
  const [crtEnabled, setCrtEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Validate exclusive asset uniqueness and check server-side session on mount
  useEffect(() => {
    validateImageUniqueness();

    async function checkSession() {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        if (res.ok && data.authenticated && data.user) {
          setCurrentUser(data.user);
        } else {
          setCurrentUser(null);
        }
      } catch {
        setCurrentUser(null);
      } finally {
        setIsLoadingSession(false);
      }
    }

    checkSession();
  }, []);

  // Hash-based deep link routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'jersey' || hash === 'jerseys') setActiveView('jersey');
      else if (hash === 'tracksuit' || hash === 'chandal' || hash === 'chandales') setActiveView('tracksuit');
      else if (hash === 'denim' || hash === 'pantalones' || hash === 'bottoms') setActiveView('denim');
      else if (hash === 'beanie' || hash === 'accesorios' || hash === 'accessories') setActiveView('beanie');
      else if (hash === 'puffer') setActiveView('puffer');
      else if (hash === 'sudadera') setActiveView('sudadera');
      else if (hash === 'catalogo' || hash === 'catalog' || hash === 'archive') setActiveView('catalog');
      else if (hash === 'inicio' || hash === 'home') setActiveView('home');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const triggerClickAudio = () => {
    playTacticalClick(soundEnabled);
  };

  const triggerToneAudio = () => {
    playMechanicalTone(soundEnabled);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLoginSuccess = (user: { username: string; role: string }) => {
    triggerToneAudio();
    setCurrentUser(user);
    showToast(`SESIÓN AUTORIZADA: ${user.username.toUpperCase()}`);
  };

  const handleLogout = async () => {
    triggerClickAudio();
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // safe fallback
    }
    setCurrentUser(null);
    setActiveView('home');
    window.location.hash = '';
    showToast('SESIÓN CERRADA. ACCESO BLOQUEADO.');
  };

  const handleNavigate = (view: ViewState) => {
    triggerClickAudio();
    setActiveView(view);
    window.location.hash = view === 'home' ? '' : view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductPage = (page: ProductPageView) => {
    handleNavigate(page);
  };

  const openNotifyModal = (productTitle?: string, isPreOrder: boolean = false) => {
    triggerClickAudio();
    setNotifyModalProduct({
      title: productTitle || 'SEE YOU IN VOID — DROP_001',
      isPreOrder
    });
    setIsNotifyModalOpen(true);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    triggerClickAudio();
    setCartItems(prev => {
      const copy = [...prev];
      const target = copy[index];
      if (!target) return prev;
      const newQty = target.quantity + delta;
      if (newQty <= 0) {
        copy.splice(index, 1);
      } else {
        copy[index] = { ...target, quantity: newQty };
      }
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    triggerClickAudio();
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Loading state while checking HttpOnly session cookie
  if (isLoadingSession) {
    return (
      <div className="min-h-screen bg-[#060709] flex flex-col items-center justify-center font-mono text-zinc-400 p-6 space-y-4">
        <div className="w-8 h-8 border-2 border-zinc-700 border-t-zinc-200 animate-spin" />
        <div className="text-xs uppercase tracking-widest text-zinc-300">
          [ VALIDANDO NODO DE SESIÓN // NULL.SYS ]
        </div>
      </div>
    );
  }

  // Mandatory Authentication Gate: Block without verified session
  if (!currentUser) {
    return (
      <LoginGate
        onLoginSuccess={handleLoginSuccess}
        onPlayClick={triggerClickAudio}
      />
    );
  }

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className={`min-h-screen bg-[#060709] text-zinc-200 relative selection:bg-zinc-200 selection:text-black ${crtEnabled ? 'crt-overlay' : ''}`}>
      
      {/* Floating Tactical System Control Bar */}
      <aside aria-label="System Controls" className="fixed bottom-4 right-4 z-40 bg-zinc-950/90 border border-zinc-700/80 p-1.5 flex items-center gap-2 backdrop-blur-md shadow-2xl text-[11px] font-mono">
        <button
          onClick={() => {
            triggerClickAudio();
            setCrtEnabled(prev => !prev);
          }}
          className={`px-2.5 py-1 transition-colors cursor-pointer border ${
            crtEnabled ? 'bg-zinc-800 text-zinc-100 border-zinc-500 font-bold' : 'text-zinc-500 border-transparent hover:text-zinc-300'
          }`}
          title="Alternar simulación de scanlines CRT"
        >
          CRT: {crtEnabled ? 'ON' : 'OFF'}
        </button>

        <button
          onClick={() => {
            const next = !soundEnabled;
            setSoundEnabled(next);
            playTacticalClick(next);
          }}
          className={`px-2.5 py-1 transition-colors cursor-pointer border ${
            soundEnabled ? 'bg-zinc-800 text-zinc-100 border-zinc-600 font-bold' : 'text-zinc-500 border-transparent hover:text-zinc-300'
          }`}
          title="Alternar sonido táctico"
        >
          AUDIO: {soundEnabled ? 'ON' : 'MUTE'}
        </button>

        <button
          onClick={() => {
            triggerClickAudio();
            setIsCodeInspectorOpen(true);
          }}
          className="px-2.5 py-1 bg-zinc-100 text-black font-bold uppercase transition-colors cursor-pointer hover:bg-white"
        >
          HTML5 Spec
        </button>
      </aside>

      {/* Top Navigation Bar with the 4 Categories + Archive + Bag */}
      <TopBar
        currentUser={currentUser}
        onLogout={handleLogout}
        onNavigate={handleNavigate}
        activeView={activeView}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onPlayClick={triggerClickAudio}
      />

      {/* Main Landmark enclosing application content */}
      <main id="main-content">
        
        {/* VIEW 1: INICIO (HOME) */}
        {activeView === 'home' && (
          <>
            {/* Hero Section with exclusive group photo */}
            <HeroSection
              onExploreCollection={() => {
                const el = document.getElementById('catalogo');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else handleNavigate('catalog');
              }}
              onNavigateToTracksuit={() => handleNavigate('tracksuit')}
              onOpenCodeInspector={() => {
                triggerClickAudio();
                setIsCodeInspectorOpen(true);
              }}
              onPlayClick={triggerClickAudio}
            />

            {/* Editorial Block: KAMI TO TO NO MI */}
            <KamiEditorialSection
              onExploreTracksuits={() => handleNavigate('tracksuit')}
              onExploreAccessories={() => handleNavigate('beanie')}
            />

            {/* Reorganized Catalog Section */}
            <CatalogSection
              onSelectProductPage={handleSelectProductPage}
              onPlayClick={triggerClickAudio}
            />

            {/* System Access Node Form */}
            <AuthDropSection onPlayClick={triggerClickAudio} />

            {/* Manifesto & Value Proposition Section */}
            <AboutValueSection />
          </>
        )}

        {/* VIEW 2: STANDALONE CATALOG / ARCHIVE */}
        {activeView === 'catalog' && (
          <CatalogSection
            onSelectProductPage={handleSelectProductPage}
            onPlayClick={triggerClickAudio}
          />
        )}

        {/* VIEW 3: DEDICATED JERSEY PRODUCT VIEW (45,00 €) */}
        {activeView === 'jersey' && (
          <JerseyProductView
            onBackToCatalog={() => handleNavigate('catalog')}
            onOpenNotifyModal={() => openNotifyModal('Anime Distressed Knit', false)}
            onPlayClick={triggerClickAudio}
          />
        )}

        {/* VIEW 4: DEDICATED TRACKSUIT PRODUCT VIEW (PRE-ORDER) */}
        {activeView === 'tracksuit' && (
          <TracksuitProductView
            onBackToCatalog={() => handleNavigate('catalog')}
            onOpenNotifyModal={(variantTitle) => openNotifyModal(variantTitle || 'NULL.SYS Technical Tracksuit', true)}
            onPlayClick={triggerClickAudio}
          />
        )}

        {/* VIEW 5: DEDICATED DENIM PRODUCT VIEW */}
        {activeView === 'denim' && (
          <DenimProductView
            onBackToCatalog={() => handleNavigate('catalog')}
            onOpenNotifyModal={(prodTitle) => openNotifyModal(prodTitle || 'Baggy Washed Denim', false)}
            onPlayClick={triggerClickAudio}
          />
        )}

        {/* VIEW 6: DEDICATED BEANIE ACCESSORIES VIEW */}
        {activeView === 'beanie' && (
          <BeanieProductView
            onBackToCatalog={() => handleNavigate('catalog')}
            onOpenNotifyModal={(prodTitle) => openNotifyModal(prodTitle || 'Kami Beanie', false)}
            onPlayClick={triggerClickAudio}
          />
        )}

        {/* VIEW 7: DEDICATED PUFFER PRODUCT VIEW (ARCHIVE, 72,00 €) */}
        {activeView === 'puffer' && (
          <PufferProductView
            onBackToCatalog={() => handleNavigate('catalog')}
            onOpenNotifyModal={() => openNotifyModal('Abrigo Puffer Negra', false)}
            onPlayClick={triggerClickAudio}
          />
        )}

        {/* VIEW 8: DEDICATED SUDADERA PRODUCT VIEW (ARCHIVE) */}
        {activeView === 'sudadera' && (
          <SudaderaProductView
            onBackToCatalog={() => handleNavigate('catalog')}
            onOpenNotifyModal={() => openNotifyModal('Sudadera con Capucha', false)}
            onPlayClick={triggerClickAudio}
          />
        )}

      </main>

      {/* Semantic Unified Footer */}
      <Footer
        onOpenCodeInspector={() => {
          triggerClickAudio();
          setIsCodeInspectorOpen(true);
        }}
        onPlayClick={triggerClickAudio}
      />

      {/* Shopping Bag Drawer (with Disabled Checkout & Coming Soon Banner) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onPlayClick={triggerClickAudio}
      />

      {/* Launch Notification & Pre-Order Modal */}
      <NotifyModal
        isOpen={isNotifyModalOpen}
        onClose={() => setIsNotifyModalOpen(false)}
        onPlayClick={triggerClickAudio}
        productTitle={notifyModalProduct.title}
        isPreOrder={notifyModalProduct.isPreOrder}
      />

      {/* HTML5 Diagnostic & Specification Modal */}
      <CodeInspectorModal
        isOpen={isCodeInspectorOpen}
        onClose={() => setIsCodeInspectorOpen(false)}
        onPlayClick={triggerClickAudio}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-6 z-50 bg-zinc-100 text-zinc-950 font-mono text-xs font-bold px-4 py-2.5 border border-white shadow-2xl flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-zinc-900 inline-block"></span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
