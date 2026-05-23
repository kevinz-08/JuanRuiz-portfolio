import { useEffect, useRef, useState } from 'react';
import { cosmosStageHTML } from './cosmosStageHTML';
import { asteroidDefsHTML } from './asteroidDefsHTML';

interface ToolData {
  key: string;
  name: string;
  category: string;
  description: string;
  color: string;
  logoSvg: string;
}

const toolsData: Record<string, ToolData> = {
  avid: {
    key: 'avid',
    name: 'Avid Media Composer',
    category: 'Edición Profesional',
    description: 'Este programa es utilizado por cadenas de televisión, productoras y empresas grandes del sector audiovisual. Es conocido precisamente por eso — es un requisito para trabajar con grandes compañías audiovisuales, aunque no está al nivel de ninguno de los programas mencionados anteriormente.',
    color: '#7028e0',
    logoSvg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ml-avid" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#9148ff"/><stop offset="100%" stop-color="#6420d8"/></radialGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-avid)"/><g transform="translate(8 8) scale(1.28)"><circle cx="25" cy="25" r="18" fill="none" stroke="#fff" stroke-width="2"/><path d="M14 16 Q14 13 18 13 L32 13 Q36 13 36 16 L36 19 L14 19 Z" fill="#fff"/><path d="M14 34 L36 34 L36 37 Q36 40 32 40 L18 40 Q14 40 14 37 Z" fill="#fff"/><rect x="14" y="21" width="22" height="11" fill="#fff"/><rect x="16.5" y="20.7" width="17" height="11.6" rx=".5" fill="#7028e0"/><rect x="9" y="20.5" width="1.5" height="2.8" fill="#fff"/><rect x="9" y="25.4" width="1.5" height="2.8" fill="#fff"/><rect x="9" y="30.3" width="1.5" height="2.8" fill="#fff"/><rect x="39.5" y="20.5" width="1.5" height="2.8" fill="#fff"/><rect x="39.5" y="25.4" width="1.5" height="2.8" fill="#fff"/><rect x="39.5" y="30.3" width="1.5" height="2.8" fill="#fff"/></g></svg>`,
  },
  dv: {
    key: 'dv',
    name: 'DaVinci Resolve',
    category: 'Corrección de Color',
    description: 'Este programa me permite trabajar el color de forma ultraprecisa. Es un software creado para coloristas que luego se convirtió también en una potente herramienta de edición completa.',
    color: '#f97316',
    logoSvg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ml-dv" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#3a3a3a"/><stop offset="100%" stop-color="#1a1a1a"/></radialGradient><linearGradient id="ml-dvRT" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3a8de8"/><stop offset="50%" stop-color="#a230e8"/><stop offset="100%" stop-color="#ee2860"/></linearGradient><linearGradient id="ml-dvRB" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3ae898"/><stop offset="50%" stop-color="#ffd028"/><stop offset="100%" stop-color="#ee5028"/></linearGradient><radialGradient id="ml-dvBl" cx="40%" cy="30%" r="65%"><stop offset="0%" stop-color="#e8f4ff"/><stop offset="40%" stop-color="#58a8e8"/><stop offset="100%" stop-color="#1860a8"/></radialGradient><radialGradient id="ml-dvYl" cx="40%" cy="35%" r="65%"><stop offset="0%" stop-color="#fffae8"/><stop offset="50%" stop-color="#fae058"/><stop offset="100%" stop-color="#c89818"/></radialGradient><radialGradient id="ml-dvRd" cx="40%" cy="30%" r="65%"><stop offset="0%" stop-color="#ffe8e8"/><stop offset="45%" stop-color="#f04860"/><stop offset="100%" stop-color="#a01828"/></radialGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-dv)"/><g transform="translate(8 8) scale(1.28)"><path d="M3 25 A22 22 0 0 1 47 25" fill="none" stroke="url(#ml-dvRT)" stroke-width="1.8" stroke-linecap="round"/><path d="M47 25 A22 22 0 0 1 3 25" fill="none" stroke="url(#ml-dvRB)" stroke-width="1.8" stroke-linecap="round"/><circle cx="25" cy="25" r="19.5" fill="#2a2a2a"/><path d="M25 24.5 Q22 21 22 16 Q22 11 25 9 Q28 11 28 16 Q28 21 25 24.5 Z" fill="url(#ml-dvBl)"/><path d="M24 26.4 Q19.2 27.8 14.5 30.4 Q10 32.8 11.3 36.5 Q14.5 39 19 36.8 Q23.4 34.2 25.4 28.4 Z" fill="url(#ml-dvYl)"/><path d="M26 26.4 Q30.8 27.8 35.5 30.4 Q40 32.8 38.7 36.5 Q35.5 39 31 36.8 Q26.6 34.2 24.6 28.4 Z" fill="url(#ml-dvRd)"/></g></svg>`,
  },
  ae: {
    key: 'ae',
    name: 'Adobe After Effects',
    category: 'Motion Graphics & VFX',
    description: 'Es mi mano derecha. Me permite hacer las cosas más increíbles que ves en mis videos — animaciones y efectos visuales específicamente. Sin After Effects, los videos no tendrían el alma suficiente y nunca serían lo mismo.',
    color: '#9999ff',
    logoSvg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ml-ae" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1c0f3e"/><stop offset="100%" stop-color="#0d0626"/></linearGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-ae)"/><text x="50%" y="68%" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-weight="800" font-size="38" fill="#c8b8ff" letter-spacing="-2.5">Ae</text></svg>`,
  },
  pr: {
    key: 'pr',
    name: 'Adobe Premiere Pro',
    category: 'Edición de Video',
    description: 'Mi mano izquierda y el hermano de After Effects. Adobe Premiere trabaja en conjunto con After Effects para llevar a cabo el proceso completo de los videos. Premiere se encarga principalmente de permitirme trabajar clips de video de forma precisa y clips de audio.',
    color: '#9999ff',
    logoSvg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ml-pr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1c0f3e"/><stop offset="100%" stop-color="#0d0626"/></linearGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-pr)"/><text x="50%" y="68%" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-weight="800" font-size="38" fill="#c8b8ff" letter-spacing="-2.5">Pr</text></svg>`,
  },
  au: {
    key: 'au',
    name: 'Adobe Audition',
    category: 'Diseño de Sonido',
    description: 'Es el mejor programa para trabajar sonido — como la versión completa de lo que se puede hacer con audio dentro de Adobe Premiere. Honestamente, muy pocas veces es necesario usarlo, pero cuando se necesita, es insuperable.',
    color: '#9999ff',
    logoSvg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ml-au" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1c0f3e"/><stop offset="100%" stop-color="#0d0626"/></linearGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-au)"/><text x="50%" y="68%" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-weight="800" font-size="38" fill="#c8b8ff" letter-spacing="-2.5">Au</text></svg>`,
  },
};

export function ToolsPanel() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTool, setActiveTool] = useState<ToolData | null>(null);

  // Scroll-driven cosmos stage animation
  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = stageRef.current;
    if (!section || !wrapper) return;

    // Target the actual .cosmos-stage element (which has CSS opacity:0)
    const stage = wrapper.querySelector<HTMLElement>('#cosmos-stage');
    if (!stage) return;

    const bgEl = stage.querySelector<HTMLElement>('#cosmos-bg');
    const fogEl = stage.querySelector<HTMLElement>('.cosmos-fog');
    const vigEl = stage.querySelector<HTMLElement>('.cosmos-vignette');
    const starsEl = stage.querySelector<HTMLElement>('#cosmos-stars');
    const dustEl = stage.querySelector<HTMLElement>('#cosmos-dust');
    const contentEl = stage.querySelector<HTMLElement>('.cosmos-content');

    function updateScroll() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const sH = section.offsetHeight;

      // Start appearing when section top is 60% down the viewport (still partly
      // below the fold, so the cosmos fades in while #trabajos is still visible).
      const earlyStart = vh * 0.6;
      const progress = Math.max(0, Math.min(1, (earlyStart - rect.top) / (earlyStart + sH - vh)));
      const envProgress = Math.min(1, progress * 2.5);
      const fadeOut = progress > 0.85 ? Math.max(0, 1 - (progress - 0.85) / 0.15) : 1;

      const finalOp = envProgress * fadeOut;
      stage.style.opacity = String(finalOp);

      if (bgEl) bgEl.style.opacity = String(Math.min(1, envProgress * 1.4));
      if (fogEl) fogEl.style.opacity = String(Math.min(1, envProgress * 1.2));
      if (vigEl) vigEl.style.opacity = String(Math.min(1, envProgress * 1.5));
      if (starsEl) starsEl.style.opacity = String(Math.min(1, envProgress * 1.6));
      if (dustEl) dustEl.style.opacity = String(Math.min(1, envProgress * 1.3));

      if (contentEl) {
        const cProgress = Math.max(0, (envProgress - 0.3) / 0.7);
        contentEl.style.opacity = String(cProgress * fadeOut);
        contentEl.style.transform = `translateY(${(1 - cProgress) * 40}px)`;
      }

      if (envProgress > 0.6) {
        stage.classList.add('interactive', 'active');
      } else {
        stage.classList.remove('interactive', 'active');
      }
    }

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // Bind asteroid clicks (delegated since HTML is injected via dangerouslySetInnerHTML)
  useEffect(() => {
    const wrapper = stageRef.current;
    if (!wrapper) return;
    const stage = wrapper.querySelector<HTMLElement>('#cosmos-stage') ?? wrapper;

    function handleClick(e: Event) {
      const target = e.target as HTMLElement;
      const asteroid = target.closest<HTMLElement>('[data-tool]');
      if (asteroid) {
        const toolKey = asteroid.dataset.tool;
        if (toolKey && toolsData[toolKey]) {
          setActiveTool(toolsData[toolKey]);
          setModalOpen(true);
        }
      }
    }
    stage.addEventListener('click', handleClick);
    return () => stage.removeEventListener('click', handleClick);
  }, []);

  // Canvas stars animation inside cosmos stage
  useEffect(() => {
    const wrapper = stageRef.current;
    if (!wrapper) return;
    const canvas = wrapper.querySelector<HTMLCanvasElement>('#cosmos-stars');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, dpr = 1, rafId = 0;
    const starsArr: { x: number; y: number; r: number; a: number; v: number }[] = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsArr.length = 0;
      for (let i = 0; i < 160; i++) {
        starsArr.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.5 + .3, a: Math.random(), v: .3 + Math.random() * .8 });
      }
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    let t = 0;
    function draw() {
      if (!ctx) return;
      rafId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, W, H);
      t += .008;
      for (const s of starsArr) {
        const alpha = .2 + .8 * (.5 + .5 * Math.sin(t * s.v + s.x));
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="herramientas" ref={sectionRef}>

      {/* SVG filter defs */}
      <div dangerouslySetInnerHTML={{ __html: asteroidDefsHTML }} />

      {/* Cosmos stage — static asteroid field HTML */}
      <div
        ref={stageRef}
        dangerouslySetInnerHTML={{ __html: cosmosStageHTML }}
      />

      {/* Tool modal */}
      <div
        className={`tool-modal-bg${modalOpen ? ' open' : ''}`}
        onClick={() => setModalOpen(false)}
      />
      <div className={`tool-modal${modalOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button
          className="tool-modal-close"
          aria-label="Cerrar"
          onClick={() => setModalOpen(false)}
        >
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        {activeTool && (
          <>
            <div className="tool-modal-head">
              <div
                className="tool-modal-logo"
                dangerouslySetInnerHTML={{ __html: activeTool.logoSvg }}
              />
              <div className="tool-modal-info">
                <div className="tool-modal-tag">{activeTool.category}</div>
                <div className="tool-modal-title">{activeTool.name}</div>
              </div>
            </div>
            <p className="tool-modal-desc">{activeTool.description}</p>
          </>
        )}
      </div>
    </section>
  );
}
