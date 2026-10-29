import React, { useState } from 'react';

interface AuthDropSectionProps {
  onPlayClick: () => void;
}

export const AuthDropSection: React.FC<AuthDropSectionProps> = ({ onPlayClick }) => {
  const [keepSession, setKeepSession] = useState<'si' | 'no'>('si');
  const [email, setEmail] = useState('');
  const [submittedKey, setSubmittedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onPlayClick();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedKey = `0xSYS_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
      setSubmittedKey(generatedKey);
      setIsSubmitting(false);
      try {
        localStorage.setItem('nullsys_session', keepSession);
        localStorage.setItem('nullsys_email', email);
      } catch {
        // safe storage
      }
    }, 400);
  };

  return (
    <section 
      id="profile-image" 
      className="border-b border-zinc-800 bg-[#0c0d10] py-10 px-4 sm:px-6 lg:px-8"
      aria-labelledby="auth-form-title"
    >
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-zinc-950 border border-zinc-800 p-6 sm:p-8">
          
          {/* Header lockup resolving the broken <section><header> nesting */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                [ INITIATE_LINK // ENCRYPTED ACCESS PROTOCOL ]
              </span>
              <h2 id="auth-form-title" className="text-xl font-bold font-mono uppercase text-zinc-100">
                Access Node // Drop Coordinates
              </h2>
            </div>
            
            {/* Semantic logo image container */}
            <div className="px-3 py-1.5 bg-zinc-900 border border-zinc-700/80 inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-zinc-400"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-200">
                NULL.SYS_ID
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            
            {/* Fieldset & Legend for Session Preference */}
            <fieldset className="border border-zinc-800/80 p-4 bg-zinc-900/40">
              <legend className="text-xs font-mono uppercase tracking-wider text-zinc-300 px-2 font-semibold">
                ¿Mantener la sesión iniciada?
              </legend>

              <div className="flex items-center gap-6 mt-2">
                <label 
                  htmlFor="sesion-si" 
                  className={`flex items-center gap-2.5 text-xs font-mono cursor-pointer transition-colors ${
                    keepSession === 'si' ? 'text-zinc-100 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <input
                    type="radio"
                    id="sesion-si"
                    name="mantener_sesion"
                    value="si"
                    checked={keepSession === 'si'}
                    onChange={() => setKeepSession('si')}
                    className="w-4 h-4 accent-zinc-100 bg-zinc-950 border-zinc-700 cursor-pointer"
                  />
                  <span>SÍ (PERSISTIR ACCESO)</span>
                </label>

                <label 
                  htmlFor="sesion-no" 
                  className={`flex items-center gap-2.5 text-xs font-mono cursor-pointer transition-colors ${
                    keepSession === 'no' ? 'text-zinc-100 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <input
                    type="radio"
                    id="sesion-no"
                    name="mantener_sesion"
                    value="no"
                    checked={keepSession === 'no'}
                    onChange={() => setKeepSession('no')}
                    className="w-4 h-4 accent-zinc-100 bg-zinc-950 border-zinc-700 cursor-pointer"
                  />
                  <span>NO (SESIÓN VOLÁTIL)</span>
                </label>
              </div>
            </fieldset>

            {/* Email input and submission */}
            <div className="space-y-2">
              <label htmlFor="user-email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                Correo Electrónico (Coordinates Dispatch):
              </label>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@ejemplo.com"
                  required
                  className="flex-1 bg-zinc-900 border border-zinc-700 px-4 py-3 text-sm font-mono text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-300"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50 whitespace-nowrap border border-zinc-300"
                >
                  {isSubmitting ? 'Encriptando...' : 'Enviar // Conectar'}
                </button>
              </div>
            </div>

            {/* Success Access Confirmation */}
            {submittedKey && (
              <div className="p-4 bg-zinc-900 border border-zinc-600 text-xs font-mono text-zinc-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-100 font-bold">[ ACCESO VALIDADO ]</span>
                  <span className="text-zinc-400">STATUS: AUTHORIZED</span>
                </div>
                <p className="text-zinc-400">
                  Coordenadas del próximo drop y clave temporal emitidas para <strong className="text-zinc-200">{email}</strong>.
                </p>
                <div className="text-[11px] text-zinc-500 pt-1">
                  SYS_KEY: <code className="text-zinc-300 bg-zinc-950 px-1 py-0.5">{submittedKey}</code>
                </div>
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};
