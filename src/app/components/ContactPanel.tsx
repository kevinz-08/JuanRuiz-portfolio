import { useRef, useState } from 'react';

const EMAILJS_SERVICE = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC = 'YOUR_PUBLIC_KEY';

type FormState = 'idle' | 'sending' | 'success' | 'error';

function ArrowIcon() {
  return <svg className="sarr" viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2v6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export function ContactPanel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const formRef = useRef<HTMLDivElement>(null);

  async function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setState('sending');
    try {
      // EmailJS integration — replace service/template/key with real values
      const emailjs = (window as any).emailjs;
      if (emailjs) {
        await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
          from_name: name,
          from_email: email,
          message,
        }, EMAILJS_PUBLIC);
      }
      setState('success');
    } catch {
      setState('error');
    }
  }

  return (
    <section id="contacto">
      <div className="ctr">
        <div className="cin">
          <h2 className="ch rv">
            <span className="wh"><span className="shimmer-silver">Trabajemos </span></span>
            <span className="re"><span className="shimmer-red">juntos.</span></span>
          </h2>
          <div className="crule rv d1"></div>

          {/* Social buttons */}
          <div className="srow rv d2">
            <a className="sbtn" href="https://x.com/juanruizedita" target="_blank" rel="noopener noreferrer">
              <svg className="ico" viewBox="0 0 24 24" fill="rgba(220,38,38,.9)">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              DM en X
              <ArrowIcon />
            </a>
            <a className="sbtn" href="https://www.instagram.com/juanruizedita/reels/" target="_blank" rel="noopener noreferrer">
              <svg className="ico" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#dc2626"/>
                    <stop offset="50%" stopColor="#f87171"/>
                    <stop offset="100%" stopColor="#dc2626"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#ig-grad)" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="1.8"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)"/>
              </svg>
              Instagram
              <ArrowIcon />
            </a>
          </div>

          {/* Email card */}
          <div className="glass-r ecard rv d3">
            <div className="ehead">
              <div className="eico">
                <svg viewBox="0 0 24 24">
                  <path d="M3 5h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"/>
                  <path d="M3 6l9 6 9-6" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="etit">Enviar un mensaje</p>
                <p className="esub">juanruizedita@gmail.com</p>
              </div>
            </div>

            <div ref={formRef}>
              {state === 'error' && (
                <div className="ebox show" id="ebox">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#f87171"/></svg>
                  Error al enviar. Inténtalo de nuevo o escríbeme por Instagram o X.
                </div>
              )}

              {state !== 'success' ? (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                    <div className="fld">
                      <input className="finp" type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="fld">
                      <input className="finp" type="email" placeholder="Tu correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                  <div className="fld">
                    <textarea className="ftxt" placeholder="¿En qué puedo ayudarte?" value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                  <button
                    className="sendbtn"
                    onClick={handleSubmit}
                    disabled={state === 'sending'}
                  >
                    {state === 'sending' ? (
                      <><div className="spin"></div> Enviando…</>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24">
                          <path d="M3 5h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"/>
                          <path d="M3 6l9 6 9-6" strokeLinecap="round"/>
                        </svg>
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="sucbox show" id="sucbox">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="suctit">¡Mensaje enviado!</p>
                    <p className="sucsub">Te responderé lo antes posible.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Calendly mini-panel */}
          <div className="glass-r cal-card rv d4">
            <div className="cal-left">
              <p className="cal-title">¿Prefieres hablar directamente?</p>
              <p className="cal-desc">Agenda una videollamada de descubrimiento de 20 minutos</p>
            </div>
            <a className="cal-btn" href="https://calendly.com/juanruizedita/videollamada_descubrimiento" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Agendar en Calendly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
