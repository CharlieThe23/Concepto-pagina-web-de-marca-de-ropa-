import React, { useState } from 'react';

interface TerminalScannerOverlayProps {
  label?: string;
  className?: string;
  children: React.ReactNode;
  defaultActive?: boolean;
}

export const TerminalScannerOverlay: React.FC<TerminalScannerOverlayProps> = ({
  label = 'ANIME WEAVE SCAN // 1080P',
  className = '',
  children,
  defaultActive = true
}) => {
  const [isScanActive, setIsScanActive] = useState(defaultActive);

  return (
    <div className={`relative overflow-hidden group/scanner select-none ${className}`}>
      
      {/* Subject Container with Chromatic Glitch effect when active */}
      <div className={`w-full h-full transition-transform ${isScanActive ? 'chromatic-glitch-target' : ''}`}>
        {children}
      </div>

      {/* Terminal Scanner Elements (Active State) */}
      {isScanActive && (
        <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
          
          {/* Laser Scanning Beam with glowing gradient tail */}
          <div className="terminal-scan-beam">
            <div className="terminal-scan-tail" />
          </div>

          {/* Precision Tactical Targeting Corner Reticles */}
          <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-zinc-400/60" />
          <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-zinc-400/60" />
          <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-zinc-400/60" />
          <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-zinc-400/60" />

          {/* Tactical Center Line Crosshair Markers */}
          <div className="absolute top-1/2 left-2 w-2 h-[1px] bg-zinc-500/50 -translate-y-1/2" />
          <div className="absolute top-1/2 right-2 w-2 h-[1px] bg-zinc-500/50 -translate-y-1/2" />
          
          {/* Top subtle HUD telemetry chip */}
          <div className="absolute top-2 left-8 bg-black/80 backdrop-blur-sm border border-zinc-800/80 px-2 py-0.5 text-[9px] font-mono text-zinc-400 tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-ping" />
            <span>{label}</span>
          </div>
        </div>
      )}

      {/* On-Viewer Interactive Toggle Control */}
      <div className="absolute bottom-2 left-2 z-30">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsScanActive(prev => !prev);
          }}
          className={`px-2 py-1 text-[10px] font-mono tracking-widest border transition-colors cursor-pointer flex items-center gap-1.5 backdrop-blur-sm shadow-lg ${
            isScanActive
              ? 'bg-black/90 border-zinc-500 text-zinc-100 hover:bg-zinc-900'
              : 'bg-black/80 border-zinc-800 text-zinc-500 hover:text-zinc-300'
          }`}
          title="Alternar efecto de escaneo láser y glitch cromático"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isScanActive ? 'bg-zinc-200' : 'bg-zinc-600'}`} />
          <span>SCAN: {isScanActive ? 'ACTIVE' : 'OFF'}</span>
        </button>
      </div>

    </div>
  );
};
