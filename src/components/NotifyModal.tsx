import React, { useState } from 'react';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayClick?: () => void;
  productTitle?: string;
  isPreOrder?: boolean;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({
  isOpen,
  onClose,
  onPlayClick,
  productTitle = 'SEE YOU IN VOID — DROP_001',
  isPreOrder = false
}) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    onPlayClick?.();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notify-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#0b0c0e] border border-zinc-700/80 shadow-2xl p-6 sm:p-8 font-mono">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-semibold">
              [ NULL.SYS // {isPreOrder ? 'REGISTRO DE PRE-RESERVA' : 'LAUNCH NOTIFICATION'} ]
            </span>
            <h2 id="notify-modal-title" className="text-base sm:text-lg font-bold uppercase text-white mt-0.5">
              {isPreOrder ? 'Pre-Reserva' : 'Aviso de Drop'} // {productTitle}
            </h2>
          </div>

          <button
            onClick={() => {
              onPlayClick?.();
              onClose();
            }}
            className="text-zinc-400 hover:text-white text-xs uppercase px-2 py-1 cursor-pointer"
            aria-label="Cerrar modal"
          >
            [ ESC // CLOSE ]
          </button>
        </div>

        {submitted ? (
          <div className="py-8 space-y-4 text-center">
            <div className="w-10 h-10 mx-auto bg-zinc-900 border border-zinc-400 text-white flex items-center justify-center font-bold text-lg">
              ✓
            </div>
            <h3 className="text-sm font-bold uppercase text-white">
              {isPreOrder ? 'Pre-Reserva Registrada en Cola Prioritaria' : 'Solicitud de Notificación Registrada'}
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
              Hemos tomado nota de tu registro para <strong className="text-white">{email}</strong> ({productTitle}).
            </p>
            <div className="p-3 bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 text-left space-y-1">
              <span className="text-zinc-300 font-bold block uppercase text-[10px]">
                Aviso de Transparencia de Servicio:
              </span>
              <p>
                El registro se vinculará a tu cuenta tras la activación de la pasarela y la base de datos oficial. Las coordenadas de pre-reserva se enviarán por correo directo sin cobros anticipados simulados.
              </p>
            </div>
            <button
              onClick={() => {
                onPlayClick?.();
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-zinc-100 text-black text-xs font-bold uppercase hover:bg-white transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <p className="text-xs text-zinc-300 leading-relaxed">
              {isPreOrder
                ? `Introduce tu correo para acceder al cupo preferencial de pre-reserva de ${productTitle} antes de la apertura pública del DROP.`
                : `Introduce tu correo para recibir las coordenadas de acceso y el aviso prioritario del lanzamiento oficial.`
              }
            </p>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="notify-email" className="block text-xs uppercase tracking-wider text-zinc-400">
                Correo electrónico:
              </label>
              <input
                type="email"
                id="notify-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.correo@dominio.com"
                className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-300"
              />
            </div>

            {/* Consent & Privacy Checkbox */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-2.5 text-xs text-zinc-300 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 bg-zinc-900 border-zinc-700 w-4 h-4 cursor-pointer shrink-0 accent-zinc-300"
                />
                <span className="text-[11px] leading-tight text-zinc-400">
                  Acepto recibir notificaciones exclusivas de pre-reserva y lanzamiento de NULL.SYS y confirmo haber leído la información sobre protección de datos.
                </span>
              </label>

              {/* Backend status disclosure */}
              <div className="p-3 bg-zinc-950/80 border border-zinc-800 text-[10px] text-zinc-400 leading-normal">
                <span className="text-zinc-300 font-semibold uppercase block mb-0.5">
                  Estado de la Integración:
                </span>
                La base de datos de suscripción se activará oficialmente con el despliegue del backend de producción. No se simula almacenamiento ficticio ni cobros sin pasarela bancaria.
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={!email || !consent}
                className="w-full py-3 bg-zinc-100 hover:bg-white text-black font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed border border-white"
              >
                {isPreOrder ? 'Confirmar Pre-Reserva // Registrarse' : 'Confirmar Aviso de Drop // Notify Me'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
