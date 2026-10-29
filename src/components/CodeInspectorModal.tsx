import React, { useState } from 'react';

interface CodeInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayClick: () => void;
}

const REFACTORED_HTML_CODE = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NULL.SYS // Void_Architecture for the Human Form</title>
  <meta name="description" content="NULL.SYS is hardware for the modern dystopia. Monochromatic Y2K utility meets brutalist minimalism. Tactical leather, baggy silhouettes, and terminal-inspired design.">
  <meta property="og:type" content="website">
  <meta property="og:title" content="NULL.SYS // Void_Architecture for the Human Form">
  <meta property="og:description" content="Utilitarian streetwear, tactical leather, baggy silhouettes, and greyscale chrome aesthetics.">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!-- Encabezado Principal y Marca -->
  <header id="main-header">
    <div class="brand-lockup">
      <img src="image.jpg" alt="Logotipo NULL.SYS" width="120" height="40" loading="lazy">
      <h1>[ NULL.SYS ] // Void_Architecture for the Human Form</h1>
    </div>

    <!-- Menú de navegación principal con IDs corregidos -->
    <nav aria-label="Navegación principal">
      <h2>Welcome / Índice de navegación</h2>
      <ol>
        <li><a href="#presentacion">About Us</a></li>
        <li><a href="#marca-emergente">Navigation / Categories</a></li>
        <li><a href="#era-y2k">What We Offer / Value Proposition</a></li>
      </ol>
    </nav>
  </header>

  <!-- Contenedor Principal Semántico -->
  <main id="main-content">
    
    <!-- Inicio de Sesión y Acceso Encriptado -->
    <section id="auth-section" aria-labelledby="auth-heading">
      <h2 id="auth-heading">Acceso al Sistema // Drop Coordinates</h2>
      <form action="/login" method="post">
        <fieldset>
          <legend><strong>¿Mantener la sesión iniciada?</strong></legend>
          <div class="radio-group">
            <input type="radio" id="sesion-si" name="mantener_sesion" value="si" checked>
            <label for="sesion-si">Sí</label>
            <input type="radio" id="sesion-no" name="mantener_sesion" value="no">
            <label for="sesion-no">No</label>
          </div>
        </fieldset>
        
        <div class="input-group">
          <label for="user-email">Correo Electrónico:</label>
          <input type="email" id="user-email" name="email" placeholder="nombre@ejemplo.com" required autocomplete="email">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>

    <!-- Artículo de Presentación y Manifiesto de Marca -->
    <article id="profile">
      
      <!-- Sección: About Us -->
      <section id="presentacion" aria-labelledby="heading-about">
        <h2 id="heading-about">About Us</h2>
        <p>We choose the void. Null.Sys is hardware for the modern dystopia. Monochromatic Y2K utility meets brutalist minimalism. Tactical leather, baggy silhouettes, and terminal-inspired design. Dress for the system. Survive the crash.</p>
      </section>

      <!-- Sección: Navegación y Categorías de Colección -->
      <section id="marca-emergente" aria-labelledby="heading-categories">
        <h2 id="heading-categories">Navigation / Categories</h2>
        <nav aria-label="Categorías de prendas y hardware">
          <ul>
            <li><a href="#era-y2k">&gt; DIR: OUTERWEAR // Heavy leather &amp; technical shells.</a></li>
            <li><a href="#era-techwear">&gt; DIR: BOTTOMS // Baggy denim &amp; modular cargos.</a></li>
            <li><a href="#era-industrial">&gt; DIR: HARDWARE // Cross-body utility &amp; industrial accessories.</a></li>
            <li><a href="#era-minimalist">&gt; DIR: ARCHIVE // Monochromatic lookbooks &amp; past drops.</a></li>
          </ul>
        </nav>
      </section>

      <!-- Subdirectorios correspondientes a las categorías -->
      <section id="era-y2k" aria-labelledby="heading-outerwear">
        <h3 id="heading-outerwear">DIR: OUTERWEAR</h3>
        <p>Heavy treated leather motorcycle bombers, architectural collars, and water-resistant modular shells.</p>
      </section>

      <section id="era-techwear" aria-labelledby="heading-bottoms">
        <h3 id="heading-bottoms">DIR: BOTTOMS</h3>
        <p>Ultra-baggy heavyweight grey raw denim, articulated knee darts, and removable modular tactical cargo pockets.</p>
      </section>

      <section id="era-industrial" aria-labelledby="heading-hardware">
        <h3 id="heading-hardware">DIR: HARDWARE</h3>
        <p>Brushed chrome quick-release cobra buckles, ballistic chest rigs, and industrial cross-body utility straps.</p>
      </section>

      <section id="era-minimalist" aria-labelledby="heading-archive">
        <h3 id="heading-archive">DIR: ARCHIVE</h3>
        <p>Monochromatic editorial lookbooks, past batch records, and permanent system extraction vault.</p>
      </section>

      <!-- Sección: Propuesta de Valor -->
      <section id="value-proposition" aria-labelledby="heading-value">
        <h2 id="heading-value">What We Offer / Value Proposition</h2>
        <dl>
          <dt><strong>Proportion Engineering</strong></dt>
          <dd>Architectural cuts and exaggerated volumes.</dd>

          <dt><strong>Monochromatic Integration</strong></dt>
          <dd>A strict greyscale and chrome palette. Effortless matching, maximum visual impact.</dd>

          <dt><strong>High-Density Fabrics</strong></dt>
          <dd>Heavyweight denim and treated leather built for urban friction.</dd>

          <dt><strong>Scarcity Protocol</strong></dt>
          <dd>Limited batch drops. Once extracted from the system, it doesn't return.</dd>
        </dl>
      </section>

    </article>
  </main>

  <!-- Pie de Página Unificado y Semántico -->
  <footer id="main-footer">
    <div class="footer-legal">
      <p>&copy; 2026 NULL.SYS. [ INITIATE_LINK ] // Enter email for drop coordinates and encrypted access.</p>
    </div>
    <nav class="footer-social" aria-label="Enlaces a redes sociales">
      <ul>
        <li>
          <a href="https://www.instagram.com/nombre_de_la_marca" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Perfil oficial de Instagram de NULL.SYS" width="24" height="24">
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@nombre_de_la_marca" target="_blank" rel="noopener noreferrer">
            <img src="tiktok-icon.png" alt="Canal de TikTok de NULL.SYS" width="24" height="24">
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</body>
</html>`;

export const CodeInspectorModal: React.FC<CodeInspectorModalProps> = ({
  isOpen,
  onClose,
  onPlayClick
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'diff' | 'code'>('diff');

  if (!isOpen) return null;

  const handleCopy = () => {
    onPlayClick();
    navigator.clipboard.writeText(REFACTORED_HTML_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inspector-title"
    >
      <div className="relative w-full max-w-5xl bg-[#0c0d10] border border-zinc-700 shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950 text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="text-zinc-100 font-bold">[ HTML5 ARCHITECTURE REFACTOR ]</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onPlayClick();
                  setActiveTab('diff');
                }}
                className={`px-3 py-1 cursor-pointer transition-colors ${
                  activeTab === 'diff' ? 'bg-zinc-100 text-black font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                1. Diagnóstico y Correcciones
              </button>
              <button
                onClick={() => {
                  onPlayClick();
                  setActiveTab('code');
                }}
                className={`px-3 py-1 cursor-pointer transition-colors ${
                  activeTab === 'code' ? 'bg-zinc-100 text-black font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                2. Código HTML5 Limpio
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              onPlayClick();
              onClose();
            }}
            className="text-zinc-400 hover:text-white uppercase cursor-pointer"
          >
            [ ESC // CLOSE ]
          </button>
        </div>

        {/* Tab 1: Diff & Architectural Explanation */}
        {activeTab === 'diff' ? (
          <div className="p-6 overflow-y-auto space-y-6 text-xs font-mono leading-relaxed text-zinc-300">
            <div className="p-4 bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="text-sm font-bold text-white uppercase">
                Auditoría de Errores Estructurales Corregidos
              </div>
              <p className="text-zinc-400">
                El archivo original presentaba múltiples violaciones de las especificaciones W3C y fallas de accesibilidad WCAG. A continuación se detalla cada solución aplicada:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-4 bg-zinc-950 border border-red-950/50 space-y-2">
                <span className="text-red-400 font-bold block">❌ ERROR 1: Anidamiento Invertido</span>
                <code className="text-zinc-500 block bg-black/60 p-2 text-[11px]">
                  &lt;section id=&quot;profile-image&quot;&gt;<br/>
                  &nbsp;&nbsp;&lt;header class=&quot;login-&quot;&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;img ...&gt;<br/>
                  &nbsp;&nbsp;&lt;/section&gt;<br/>
                  &lt;/header&gt;
                </code>
                <span className="text-zinc-400 text-[11px] block">
                  El cierre de tags cruzado rompía el árbol del DOM impidiendo a los navegadores renderizar correctamente.
                </span>
              </div>

              <div className="p-4 bg-zinc-950 border border-zinc-700 space-y-2">
                <span className="text-zinc-200 font-bold block">✅ SOLUCIÓN 1: Jerarquía Semántica</span>
                <code className="text-zinc-300 block bg-black/60 p-2 text-[11px]">
                  &lt;header id=&quot;main-header&quot;&gt;<br/>
                  &nbsp;&nbsp;&lt;div class=&quot;brand-lockup&quot;&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;img ...&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;[ NULL.SYS ]...&lt;/h1&gt;<br/>
                  &nbsp;&nbsp;&lt;/div&gt;<br/>
                  &lt;/header&gt;
                </code>
                <span className="text-zinc-400 text-[11px] block">
                  Encabezado global unificado con marca y título estructurado en un solo nivel jerárquico.
                </span>
              </div>

              <div className="p-4 bg-zinc-950 border border-red-950/50 space-y-2">
                <span className="text-red-400 font-bold block">❌ ERROR 2: Invasión de &lt;main&gt; y Cierre Externo</span>
                <code className="text-zinc-500 block bg-black/60 p-2 text-[11px]">
                  &lt;body&gt;<br/>
                  &nbsp;&nbsp;&lt;article id=&quot;profile&quot;&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;main&gt;...&lt;/article&gt;<br/>
                  &lt;/body&gt;<br/>
                  &lt;footer&gt;...&lt;/footer&gt;<br/>
                  &lt;/main&gt;<br/>
                  &lt;/html&gt;
                </code>
                <span className="text-zinc-400 text-[11px] block">
                  &lt;main&gt; se abría dentro de &lt;article&gt;, cerraba después de &lt;/body&gt; y contenía múltiples footers huérfanos fuera del body.
                </span>
              </div>

              <div className="p-4 bg-zinc-950 border border-zinc-700 space-y-2">
                <span className="text-zinc-200 font-bold block">✅ SOLUCIÓN 2: Contenedor Principal Válido</span>
                <code className="text-zinc-300 block bg-black/60 p-2 text-[11px]">
                  &lt;body&gt;<br/>
                  &nbsp;&nbsp;&lt;header&gt;...&lt;/header&gt;<br/>
                  &nbsp;&nbsp;&lt;main id=&quot;main-content&quot;&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt;...&lt;/section&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;article&gt;...&lt;/article&gt;<br/>
                  &nbsp;&nbsp;&lt;/main&gt;<br/>
                  &nbsp;&nbsp;&lt;footer id=&quot;main-footer&quot;&gt;...&lt;/footer&gt;<br/>
                  &lt;/body&gt;
                </code>
                <span className="text-zinc-400 text-[11px] block">
                  Flujo natural HTML5: un único &lt;main&gt; como hijo directo de &lt;body&gt;, seguido de un único &lt;footer&gt; semántico.
                </span>
              </div>

              <div className="p-4 bg-zinc-950 border border-red-950/50 space-y-2">
                <span className="text-red-400 font-bold block">❌ ERROR 3: Múltiples &lt;footer&gt; Fuera de &lt;body&gt;</span>
                <span className="text-zinc-400 text-[11px] block">
                  Había 3 etiquetas &lt;footer&gt; consecutivas colocadas después de que el elemento &lt;body&gt; ya se había cerrado.
                </span>
              </div>

              <div className="p-4 bg-zinc-950 border border-zinc-700 space-y-2">
                <span className="text-zinc-200 font-bold block">✅ SOLUCIÓN 3: Footer Unificado con &lt;nav&gt; Social</span>
                <span className="text-zinc-400 text-[11px] block">
                  Un solo &lt;footer id=&quot;main-footer&quot;&gt; que aloja el copyright/drop link y una lista de redes sociales con &lt;nav aria-label=&quot;Redes sociales&quot;&gt;.
                </span>
              </div>

              <div className="p-4 bg-zinc-950 border border-red-950/50 space-y-2">
                <span className="text-red-400 font-bold block">❌ ERROR 4: IDs de Navegación Rotos</span>
                <span className="text-zinc-400 text-[11px] block">
                  Los enlaces apuntaban a #presentacion, #marca-emergente, #era/y2k (con slash no estándar) sin correspondencia con los elementos de destino.
                </span>
              </div>

              <div className="p-4 bg-zinc-950 border border-zinc-700 space-y-2">
                <span className="text-zinc-200 font-bold block">✅ SOLUCIÓN 4: Anclas y Slugs Estandarizados</span>
                <span className="text-zinc-400 text-[11px] block">
                  Se definieron secciones con id=&quot;presentacion&quot;, id=&quot;marca-emergente&quot;, id=&quot;era-y2k&quot;, id=&quot;era-techwear&quot;, etc., garantizando scroll fluido nativo.
                </span>
              </div>

            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  onPlayClick();
                  setActiveTab('code');
                }}
                className="px-5 py-2.5 bg-zinc-100 text-black font-mono font-bold uppercase hover:bg-white cursor-pointer"
              >
                Ver Código Completo →
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-3 text-xs font-mono">
              <span className="text-zinc-400">Archivo: /public/nullsys-refactored.html (100% W3C Valid)</span>
              <div className="flex items-center gap-3">
                <a
                  href="/nullsys-refactored.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  Abrir Archivo HTML ↗
                </a>
                <button
                  onClick={handleCopy}
                  className="px-4 py-1.5 bg-zinc-100 text-black font-bold uppercase hover:bg-white transition-colors cursor-pointer"
                >
                  {copied ? '✓ COPIADO AL PORTAPAPELES' : 'COPIAR CÓDIGO HTML5'}
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-black border border-zinc-800 p-4 font-mono text-[11px] text-zinc-300 leading-relaxed selection:bg-zinc-700">
              <pre className="whitespace-pre-wrap">{REFACTORED_HTML_CODE}</pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
