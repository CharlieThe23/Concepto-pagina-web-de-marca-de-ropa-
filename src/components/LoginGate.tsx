import React, { useState } from 'react';

interface LoginGateProps {
  onLoginSuccess: (user: { username: string; role: string }) => void;
  onPlayClick: () => void;
}

export const LoginGate: React.FC<LoginGateProps> = ({ onLoginSuccess, onPlayClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;

    onPlayClick();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        onLoginSuccess(data.user);
      } else {
        setErrorMessage(data.error || 'Credenciales no autorizadas en el sistema NULL.SYS.');
      }
    } catch {
      setErrorMessage('Error de conexión con el nodo de autenticación backend.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090b] flex flex-col items-center justify-center p-4 sm:p-6 font-mono relative selection:bg-sky-400 selection:text-black">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#08090b] to-[#08090b] pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 p-8 shadow-2xl space-y-6">
        
        {/* Brand Lockup */}
        <div className="space-y-2 border-b border-zinc-800/80 pb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] text-sky-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-sky-400 animate-pulse"></span>
            <span>RESTRICTED ACCESS // NODE AUTH</span>
          </div>

          <h1 className="text-2xl font-black uppercase text-white tracking-tight pt-2">
            [ NULL.SYS ]
          </h1>
          <p className="text-xs text-zinc-400">
            Inicia sesión para acceder al catálogo y material exclusivo de DROP_001.
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div 
            role="alert" 
            className="p-3 bg-red-950/50 border border-red-800 text-xs text-red-200 space-y-1"
          >
            <div className="font-bold flex items-center gap-1.5 uppercase text-[11px]">
              <span>[ ACCESS DENIED ]</span>
            </div>
            <p className="text-[11px] leading-relaxed text-red-300">{errorMessage}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Username Field */}
          <div className="space-y-1.5">
            <label 
              htmlFor="auth-username" 
              className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold"
            >
              Usuario / Identificador:
            </label>
            <input
              type="text"
              id="auth-username"
              name="username"
              required
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin / curator"
              className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label 
                htmlFor="auth-password" 
                className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold"
              >
                Contraseña:
              </label>
              <button
                type="button"
                onClick={() => {
                  onPlayClick();
                  setShowPassword(prev => !prev);
                }}
                className="text-[10px] text-zinc-500 hover:text-zinc-300 uppercase cursor-pointer"
              >
                {showPassword ? '[ OCULTAR ]' : '[ MOSTRAR ]'}
              </button>
            </div>
            
            <input
              type={showPassword ? 'text' : 'password'}
              id="auth-password"
              name="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !username || !password}
            className="w-full py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-white mt-4 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span>VERIFICANDO CREDENCIALES...</span>
            ) : (
              <span>ENTRAR // ACCEDER AL SISTEMA</span>
            )}
          </button>

        </form>

        {/* Security & Configuration Notice */}
        <div className="pt-4 border-t border-zinc-900 text-[11px] text-zinc-500 space-y-1">
          <div className="text-zinc-400 font-semibold uppercase text-[10px]">
            Configuración de Acceso Inicial:
          </div>
          <p className="leading-relaxed">
            Sesión validada por servidor Express con cookie HttpOnly protegida.
          </p>
          <p className="text-zinc-400 pt-1">
            Usuario provisional: <code className="text-zinc-200 bg-zinc-900 px-1 py-0.5">nullsys_admin</code> | Contraseña: <code className="text-zinc-200 bg-zinc-900 px-1 py-0.5">void_system_2026</code>
          </p>
        </div>

      </div>

    </div>
  );
};
