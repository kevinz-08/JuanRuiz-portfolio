import { useRef } from 'react';
import posterMotion from '@/assets/portada_videomotiongraphics2Dy3D.webp';
import posterIntro from '@/assets/portada_videointrodinamica.webp';
import posterLogitech from '@/assets/portada_videologitech.webp';
import posterFinal from '@/assets/portada_videotrabajofinaldecurso.webp';
import posterEdicion from '@/assets/portada_videoedicionypostproduccion.webp';
import posterPromo from '@/assets/portada_videopromocional.jpg';

interface Project {
  title: string;
  vimeoId?: string;
  poster?: string;
  delay?: string;
}

const projects: Project[] = [
  {
    title: 'Motion Graphics 2D y 3D',
    vimeoId: '1194993377',
    poster: posterMotion,
  },
  {
    title: 'Intro Dinámica',
    delay: 'd1',
    vimeoId: '1195356421',
    poster: posterIntro,
  },
  {
    title: 'Reto Creativo Logitech',
    delay: 'd2',
    vimeoId: '1194096598',
    poster: posterLogitech,
  },
  {
    title: 'Mi Trabajo Final de Curso',
    delay: 'd1',
    vimeoId: '1191646422',
    poster: posterFinal,
  },
  {
    title: 'Edición & Postproducción',
    vimeoId: '1197456089',
    poster: posterEdicion,
  },
  {
    title: 'Video Promocional',
    delay: 'd1',
    vimeoId: '1198576587',
    poster: posterPromo,
  },
];

function VideoCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  function loadVideo() {
    if (!cardRef.current || !posterRef.current || !project.vimeoId) return;
    const iframe = document.createElement('iframe');
    iframe.className = 'viframe';
    iframe.src = `https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&autopause=0&muted=0&loop=1`;
    iframe.allow = 'autoplay; fullscreen';
    iframe.title = project.title;
    cardRef.current.appendChild(iframe);
    posterRef.current.style.transition = 'opacity .4s ease';
    posterRef.current.style.opacity = '0';
    setTimeout(() => posterRef.current?.remove(), 420);
  }

  const isPlaceholder = !project.vimeoId;

  return (
    <div className={`work-item rv${project.delay ? ' ' + project.delay : ''}`}>
      <h3 className="work-title"><span className="shimmer-silver">{project.title}</span></h3>

      <div className="work-card" ref={cardRef}>
        {isPlaceholder ? (
          <div className="vpost vpost--soon">
            <span className="vpost-soon-label">En un futuro…</span>
          </div>
        ) : (
          <div
            className="vpost"
            ref={posterRef}
            onClick={loadVideo}
            style={project.poster ? { backgroundImage: `url(${project.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
          >
            <div className="vplay psm">
              <svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z"/></svg>
            </div>
          </div>
        )}
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

        <p className="works-quality-hint rv d2">
          Para ver los videos con mayor calidad y fluidez, después de darle clic a un video, ir a <span>⚙️</span>, luego ir a «Calidad» y seleccionar <strong>1080p</strong>
        </p>

        <div className="wgrid">
          {projects.map((p, i) => (
            <VideoCard key={i} project={p} />
          ))}
        </div>

        <p className="bnote rv d2">
          <span className="bnote-inner">¿Buscas un estilo diferente? Cuéntame qué tienes en mente</span>
        </p>
      </div>
    </section>
  );
}
