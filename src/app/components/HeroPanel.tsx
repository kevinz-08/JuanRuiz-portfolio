import { useEffect, useRef, useState } from 'react';
import { scrollToSection } from './Navigation';
import posterQuienSoyYo from '@/assets/Portada_video_quiensoyyo.webp';

function loadVimeo(card: HTMLElement, poster: HTMLElement, vimeoId: string) {
  const iframe = document.createElement('iframe');
  iframe.className = 'viframe';
  iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&autopause=0&muted=0&loop=1&background=0`;
  iframe.allow = 'autoplay; fullscreen';
  iframe.title = 'Video';
  card.appendChild(iframe);
  poster.style.transition = 'opacity .4s ease';
  poster.style.opacity = '0';
  setTimeout(() => poster.remove(), 420);
}

export function HeroPanel() {
  const [typeText, setTypeText] = useState('');
  const twRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = 'EDITOR Y POSTPRODUCTOR DE VIDEO';
    let i = 0;
    function tick() {
      i++;
      setTypeText(text.slice(0, i));
      if (i < text.length) twRef.current = setTimeout(tick, 42);
    }
    twRef.current = setTimeout(tick, 900);
    return () => { if (twRef.current) clearTimeout(twRef.current); };
  }, []);

  function handlePlayClick() {
    if (!cardRef.current || !posterRef.current) return;
    loadVimeo(cardRef.current, posterRef.current, '1199052249');
  }

  return (
    <section id="inicio">
      <div className="ctr">
        <div className="hgrid">
          <div>
            <div className="hrow">
              <span className="htag" id="tw">{typeText}</span>
              <span className="cblink"></span>
            </div>
            <h1 className="hh1">
              <span className="l1"><span className="shimmer-silver">Hagamos de tu idea un</span></span>
              <span className="l2"><span className="shimmer-red">video impactante</span></span>
            </h1>
            <p className="hdesc">Edición profesional con Motion Graphics y VFX para llevar la calidad de tu contenido al siguiente nivel</p>
            <div className="hbtns">
              <button className="btnp" onClick={() => scrollToSection('trabajos')}>
                <svg className="bico" viewBox="0 0 20 20">
                  <rect x="2" y="3" width="16" height="14" rx="2"/>
                  <path d="M8 7l5 3-5 3V7z" fill="white" stroke="none"/>
                </svg>
                Ver Proyectos
              </button>
              <button className="btng" onClick={() => scrollToSection('contacto')}>
                <svg className="bico" viewBox="0 0 20 20">
                  <path d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"/>
                  <path d="M3 6l7 5 7-5" strokeLinecap="round"/>
                </svg>
                Contactar
              </button>
            </div>
          </div>

          <div className="hvwrap">
            <div className="hvcard" id="hcard" ref={cardRef}>
              <div
                className="vpost"
                id="hpost"
                ref={posterRef}
                onClick={handlePlayClick}
                style={{ backgroundImage: `url(${posterQuienSoyYo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="vplay plg">
                  <svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z"/></svg>
                </div>
                <span className="vlbl">¿Quién soy yo?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
