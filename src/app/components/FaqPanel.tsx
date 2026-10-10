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
      <p>Me enfoco en anuncios de productos digitales con Motion Graphics avanzados. Pero estoy abierto a ofertas.</p>
    ),
  },
  {
    question: '¿Cómo trabajas con el cliente?',
    delay: 'd1',
    answer: (
      <>
        <div className="faq-step">
          <p className="faq-step-title">Análisis</p>
          <p className="faq-step-text">Analizo tu producto/servicio y entiendo qué es lo que necesitas.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Anticipo del 30%</p>
          <p className="faq-step-text">Un anticipo del 30% para asegurar el cupo en agenda y dar inicio al proyecto con total tranquilidad para ambas partes.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Ideación mutua</p>
          <p className="faq-step-text">Ideo la estructura completa del proyecto, te la propongo y la moldeamos con mi criterio y tu visión acorde a lo que es factible.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Storyboard y Modificación</p>
          <p className="faq-step-text">Armo un storyboard, el cual es un mapa visual completo desglosando el proyecto. Te lo propongo y me das tu feedback para hacer los ajustes requeridos.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Ejecución completa</p>
          <p className="faq-step-text">Inicia todo el proceso. Edición, animación y postproducción.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Revisión y aprobación</p>
          <p className="faq-step-text"><strong style={{ color: 'rgba(255,255,255,.85)' }}>1 ronda de cambios incluida.</strong> El video lo entrego a través de <strong style={{ color: 'rgba(255,255,255,.85)' }}>Frame.io</strong>, un sitio web en el que puedes marcar de forma precisa dónde quieres un cambio para hacer todo más rápido y efectivo.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">Pago del 70%</p>
          <p className="faq-step-text">Pago final.</p>
        </div>
        <div className="faq-step">
          <p className="faq-step-title">¡Entrega del enlace de descarga!</p>
        </div>
      </>
    ),
  },
  {
    question: '¿Cuánto tarda un proyecto?',
    delay: 'd2',
    answer: (
      <p>Dependiendo de la dificultad del video y de los proyectos que tenga en proceso, la duración de la fase de creación puede variar, adaptándome siempre a las urgencias del cliente.</p>
    ),
  },
  {
    question: '¿Cuánto vale un video?',
    delay: 'd3',
    answer: (
      <p>Cobro en base a la dificultad del proyecto y la duración estimada. Tras analizar tu proyecto y llegar a un acuerdo te lo comentaré con certeza.</p>
    ),
  },
  {
    question: '¿Cómo funciona el pago?',
    delay: 'd4',
    answer: (
      <p>Una vez lleguemos a un acuerdo de proyecto y precio, me pagarás el 30% por adelantado para que yo pueda iniciar a trabajar y el 70% restante luego de que yo haya finalizado el proyecto, te lo haya mostrado y tu lo hayas aprobado, por ultimo te entregaré el video.</p>
    ),
  },
  {
    question: '¿Qué métodos de pago acepto?',
    delay: 'd4',
    answer: (
      <>
        <p>Clientes en Colombia: Transferencias vía <strong style={{ color: 'rgba(255,255,255,.85)' }}>Bancolombia</strong> o <strong style={{ color: 'rgba(255,255,255,.85)' }}>Nequi</strong>.</p>
        <br />
        <p>Clientes Internacionales: Pagos a través de <strong style={{ color: 'rgba(255,255,255,.85)' }}>PayPal</strong>, <strong style={{ color: 'rgba(255,255,255,.85)' }}>Binance</strong>, <strong style={{ color: 'rgba(255,255,255,.85)' }}>Wise</strong>, <strong style={{ color: 'rgba(255,255,255,.85)' }}>Airtm</strong>, <strong style={{ color: 'rgba(255,255,255,.85)' }}>Payoneer</strong> o <strong style={{ color: 'rgba(255,255,255,.85)' }}>DolarApp</strong>.</p>
      </>
    ),
  },
  {
    question: '¿Cómo es la comunicación entre el cliente y el editor?',
    answer: (
      <p>Después de haberme contactado y haber llegado a un acuerdo —ya sea en llamada o por chat— estableceremos un medio de contacto: puede ser el mismo que usaste para contactarme u otro (correo, X, Instagram o incluso TikTok). Yo iniciaré a trabajar en el video y en dicho medio te mostraré avances o sugerencias, y así sucesivamente.</p>
    ),
  },
  {
    question: '¿Puedo pedir cambios al video?',
    delay: 'd1',
    answer: (
      <p>Puedes solicitar 1 ronda de cambios gratuita dentro de un margen de 1 semana tras la entrega. Cualquier ronda de cambios adicional tendrá un 20% extra del valor total del proyecto.</p>
    ),
  },
  {
    question: '¿Qué tipo de cambios puedes pedir en el video?',
    delay: 'd1',
    answer: (
      <p>Cambios que no alteren la estructura: Colores, Tipografías, Movimientos, SFX, detalles.</p>
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

function FaqItemComponent({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const [visible, setVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

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
      className={`faq-item${item.delay ? ' ' + item.delay : ''}${isOpen ? ' open' : ''}${visible ? ' in' : ''}`}
    >
      <button
        className="faq-q"
        aria-expanded={isOpen}
        onClick={onToggle}
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <FaqItemComponent
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
