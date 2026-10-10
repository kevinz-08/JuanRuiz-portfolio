import { useEffect, useRef, useState } from 'react';
import { scrollToSection } from './Navigation';

export function HeroPanel() {
  const [typeText, setTypeText] = useState('');
  const twRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const text = 'EDITOR DE VIDEO Y MOTION DESIGNER';
    let i = 0;
    function tick() {
      i++;
      setTypeText(text.slice(0, i));
      if (i < text.length) twRef.current = setTimeout(tick, 42);
    }
    twRef.current = setTimeout(tick, 900);
    return () => { if (twRef.current) clearTimeout(twRef.current); };
  }, []);

  return (
    <section id="inicio">
      <div className="ctr">
        <div className="hcenter">
          <div className="hrow">
            <span className="htag" id="tw">{typeText}</span>
            <span className="cblink"></span>
          </div>
          <h1 className="hh1">
            <span className="l1"><span className="shimmer-silver">Hagamos de tu idea un</span></span>
            <span className="l2"><span className="shimmer-red">video impactante</span></span>
          </h1>
          <p className="hdesc">Edición profesional con Motion Graphics, VFX y Postproducción para impulsar tu producto/servicio</p>
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
      </div>
    </section>
  );
}
