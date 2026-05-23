import { useRef, useState } from 'react';

interface Project {
  num: string;
  title: React.ReactNode;
  desc: string;
  vimeoId?: string;
  delay?: string;
}

const projects: Project[] = [
  {
    num: 'Proyecto 01',
    title: 'Edición & Postproducción',
    desc: 'Pieza visual centrada en el montaje y la postproducción de audio y color. Un tipo de video ideal para cortometrajes y proyectos que buscan contar una historia con una narrativa sólida y envolvente.',
  },
  {
    num: 'Proyecto 02',
    title: 'Motion Graphics 2D & 3D',
    desc: 'Muestra de Motion Graphics con técnicas 2D y 3D combinadas. Un proyecto ambicioso que refleja por qué los Motion Graphics son la mejor forma de transmitir un mensaje con claridad e impacto visual.',
    delay: 'd1',
  },
  {
    num: 'Proyecto 03',
    title: 'VFX Cinematográficos',
    desc: 'Mezcla de técnicas profesionales de VFX: integración de efectos visuales cinemáticos con rastreo de movimiento 2D, rastreo de cámara 3D, rastreo de superficies (Mocha AE), estabilización de movimiento y rotoscopia.',
    delay: 'd2',
  },
  {
    num: 'Proyecto 04',
    title: 'Intro Dinámica',
    desc: 'Introducción creada para un youtuber del videojuego Roblox. La intro de un video debe ser dinámica y llamativa desde el primer segundo, y este proyecto es la demostración perfecta de ese principio.',
    delay: 'd1',
  },
  {
    num: 'Proyecto 05',
    title: 'Reto Creativo Logitech',
    desc: 'Video hecho para participar en un reto creativo de Logitech dirigido a varios países latinoamericanos. El material fue proporcionado por la empresa; el reto: crear la mejor pieza visual posible en la resolución establecida (1080×3050) y con un peso máximo de 5 MB. Para contexto: hay fotos que pesan más, y un video es el acumulado de cientos de fotogramas.',
    vimeoId: '1194096598',
  },
  {
    num: 'Proyecto 06',
    title: <><span className="shimmer-red">Mi Trabajo Final de Curso</span></>,
    desc: 'Mi Trabajo Final de Curso en la Escuela de Artes Visuales LENS. El proyecto más ambicioso que he realizado: la idea, la planeación y la ejecución de cada parte del video fueron asumidas completamente por mí. No solo representa habilidad técnica de alto nivel, sino también capacidad de resolución y criterio creativo propio.',
    delay: 'd1',
    vimeoId: '1191646422',
  },
];

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="7.5"/>
      <line x1="10" y1="9" x2="10" y2="13.5" strokeLinecap="round"/>
      <circle cx="10" cy="6.5" r=".1" strokeLinecap="round" strokeWidth="2.5"/>
    </svg>
  );
}

function FlipCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  function loadVideo() {
    if (!cardRef.current || !posterRef.current || !project.vimeoId) return;
    const iframe = document.createElement('iframe');
    iframe.className = 'viframe';
    iframe.src = `https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&autopause=0&muted=0&loop=1`;
    iframe.allow = 'autoplay; fullscreen';
    iframe.title = typeof project.title === 'string' ? project.title : project.num;
    cardRef.current.appendChild(iframe);
    posterRef.current.style.transition = 'opacity .4s ease';
    posterRef.current.style.opacity = '0';
    setTimeout(() => posterRef.current?.remove(), 420);
  }

  return (
    <div className={`flip-wrap rv${project.delay ? ' ' + project.delay : ''}`}>
      <div className={`flip${flipped ? ' flipped' : ''}`} data-flip={index + 1}>
        <button
          className="flip-toggle"
          aria-label={`Más información del video ${index + 1}`}
          onClick={(e) => { e.stopPropagation(); setFlipped(!flipped); }}
        >
          <InfoIcon />
        </button>

        <div className="flip-face flip-front" ref={cardRef}>
          <div className="vpost" ref={posterRef} onClick={loadVideo}>
            <div className="vplay psm">
              <svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z"/></svg>
            </div>
          </div>
        </div>

        <div className="flip-face flip-back">
          <p className="flip-back-num">{project.num}</p>
          <h4 className="flip-back-title">{project.title}</h4>
          <p className="flip-back-text">{project.desc}</p>
        </div>
      </div>
    </div>
  );
}

export function WorksPanel() {
  return (
    <section id="trabajos">
      <div className="ctr">
        <div className="shdr">
          <span className="seyebrow rv">✦ Portafolio</span><br />
          <span className="stitle rv d1"><span className="shimmer-silver">Proyectos</span></span>
          <div className="srule rv d2"></div>
        </div>

        <div className="wgrid">
          {projects.map((p, i) => (
            <FlipCard key={i} project={p} index={i} />
          ))}
        </div>

        <p className="bnote rv d2">
          <span className="bnote-inner">¿Buscas un estilo diferente? Cuéntame qué tienes en mente</span>{' '}
          <span className="fire">🔥</span>
        </p>
      </div>
    </section>
  );
}
