import { useEffect, useRef, useState } from 'react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
  delay?: string;
}

const faqItems: FaqItem[] = [
  {
    question: '¿Qué tipo de videos editas?',
    answer: (
      <p>Normalmente videos cortos de un minuto enfocados en Motion Graphics de alto nivel para lograr un entendimiento y entretenimiento máximos del espectador, ¡pero todo tipo de videos son bienvenidos!</p>
    ),
  },
  {
    question: '¿Cómo trabajas con el cliente?',
    delay: 'd1',
    answer: (
      <>
        <div className="faq-step">
          <p className="faq-step-title">Análisis</p>
          <p className="faq-step-text">Analizo tu tipo de video y entiendo qué es lo que necesitas.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Entrega de material</p>
          <p className="faq-step-text">Recibo el material que me proporciones: imágenes, videos, archivos 3D, efectos de sonido, música, grafismos… Lo que tengas disponible. En caso de no haber nada, llegamos a un acuerdo.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Planeación</p>
          <p className="faq-step-text">Hago un boceto mental y digital del video con base en tu idea y estructura. Si se me ocurre alguna mejora, te la comunico antes de llevarla a cabo.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Edición</p>
          <p className="faq-step-text">Inicia todo el proceso. Dependiendo de tu video se usarán ciertos parámetros: montaje, ritmo, diseño de sonido, ajustes de color, etc. Cada uno de estos ajustes enfocado en llegar al video que buscas.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Revisión y entrega</p>
          <p className="faq-step-text">El video lo entrego a través de <strong style={{ color: 'rgba(255,255,255,.85)' }}>Frame</strong>, un sitio web en el que puedes marcar de forma precisa dónde quieres un cambio, para hacer todo más rápido y efectivo.</p>
        </div>
      </>
    ),
  },
  {
    question: '¿Cuánto tarda un proyecto?',
    delay: 'd2',
    answer: (
      <p>Depende de la dificultad del video. Normalmente no más de una semana; en caso de ser más sencillo, un par de días.</p>
    ),
  },
  {
    question: '¿Cuánto vale un video?',
    delay: 'd3',
    answer: (
      <p>Cobro por hora. Al momento de analizar tu video calculo cuánto tiempo me va a tomar y en base a eso calculo un valor estimado.</p>
    ),
  },
  {
    question: '¿Cómo funciona el pago?',
    delay: 'd4',
    answer: (
      <p>Una vez analizado tu video y habiendo llegado a un acuerdo tanto en la idea final como en el precio, me pagarás el 50% por adelantado para iniciar el proyecto si es la primera vez que trabajamos. Esto con el objetivo de filtrar estafadores y oportunistas que al final no pagan.</p>
    ),
  },
  {
    question: '¿Cómo es la comunicación entre el cliente y el editor?',
    answer: (
      <p>Después de haberme contactado y haber llegado a un acuerdo —ya sea en llamada o por chat— estableceremos un medio de contacto: puede ser el mismo que usaste para contactarme u otro (correo, X, Instagram o incluso TikTok). Yo iniciaré a trabajar en el video y en dicho medio te mostraré avances o sugerencias, y así sucesivamente.</p>
    ),
  },
  {
    question: '¿Qué tipo de cambios puedes pedir en el video?',
    delay: 'd1',
    answer: (
      <>
        <p>La edición es como una torre de Jenga: si quieres cambiar algo, dependiendo de en qué posición de la torre esté, puede hacer que cierta parte de la edición se pierda.</p>
        <br />
        <p>Existen 2 elementos que son prácticamente imposibles de cambiar una vez iniciada la edición:</p>
        <ul>
          <li><strong style={{ color: 'rgba(255,255,255,.8)' }}>Música</strong> — El director de la obra; marca el ritmo de todo.</li>
          <li><strong style={{ color: 'rgba(255,255,255,.8)' }}>Clips</strong> — El material de construcción.</li>
        </ul>
        <br />
        <p>Sin embargo, me aseguraré de que estés de acuerdo con el uso de todo el material antes de usarlo. Eso sí, queda de tu parte mantener tu palabra de aprobación.</p>
      </>
    ),
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 14 14">
      <line x1="7" y1="1" x2="7" y2="13"/>
      <line x1="1" y1="7" x2="13" y2="7"/>
    </svg>
  );
}

function FaqItemComponent({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  // Own IntersectionObserver so React controls the "in" class via state,
  // preventing it from being wiped on re-renders when open toggles.
  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`faq-item${item.delay ? ' ' + item.delay : ''}${open ? ' open' : ''}${visible ? ' in' : ''}`}
    >
      <button
        className="faq-q"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {item.question}
        <span className="faq-icon"><PlusIcon /></span>
      </button>
      <div className="faq-body">
        <div className="faq-body-inner">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export function FaqPanel() {
  return (
    <section id="faq">
      <div className="ctr">
        <div className="shdr">
          <span className="seyebrow rv">✦ Preguntas</span><br />
          <span className="stitle rv d1"><span className="shimmer-silver">Preguntas frecuentes</span></span>
          <div className="srule rv d2"></div>
        </div>

        <div className="faq-inner">
          {faqItems.map((item, i) => (
            <FaqItemComponent key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
