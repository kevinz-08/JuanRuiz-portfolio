import { useState, type CSSProperties } from 'react';
import logoAvid from '@/assets/logo_avid.webp';
import logoDv from '@/assets/logo_davinci.webp';
import logoAe from '@/assets/logo_aftereffects.webp';
import logoPr from '@/assets/logo_premiere.webp';
import logoAu from '@/assets/logo_audition.webp';

interface ToolData {
  key: string;
  name: string;
  category: string;
  description: string;
  logo: string;
}

const toolsData: Record<string, ToolData> = {
  ae: {
    key: 'ae',
    name: 'Adobe After Effects',
    category: 'Motion Graphics & VFX',
    description: 'Es mi mano derecha. Me permite hacer las cosas más increíbles que ves en mis videos — animaciones y efectos visuales específicamente. Sin After Effects, los videos no tendrían el alma suficiente y nunca serían lo mismo.',
    logo: logoAe,
  },
  pr: {
    key: 'pr',
    name: 'Adobe Premiere Pro',
    category: 'Edición de Video',
    description: 'Mi mano izquierda y el hermano de After Effects. Adobe Premiere trabaja en conjunto con After Effects para llevar a cabo el proceso completo de los videos. Premiere se encarga principalmente de permitirme trabajar clips de video de forma precisa y clips de audio.',
    logo: logoPr,
  },
  dv: {
    key: 'dv',
    name: 'DaVinci Resolve',
    category: 'Corrección de Color',
    description: 'Este programa me permite trabajar el color de forma ultraprecisa. Es un software creado para coloristas que luego se convirtió también en una potente herramienta de edición completa.',
    logo: logoDv,
  },
  au: {
    key: 'au',
    name: 'Adobe Audition',
    category: 'Diseño de Sonido',
    description: 'Es el mejor programa para trabajar sonido — como la versión completa de lo que se puede hacer con audio dentro de Adobe Premiere. Honestamente, muy pocas veces es necesario usarlo, pero cuando se necesita, es insuperable.',
    logo: logoAu,
  },
  avid: {
    key: 'avid',
    name: 'Avid Media Composer',
    category: 'Edición Profesional',
    description: 'Este programa es utilizado por cadenas de televisión, productoras y empresas grandes del sector audiovisual. Es conocido precisamente por eso — es un requisito para trabajar con grandes compañías audiovisuales, aunque no está al nivel de ninguno de los programas mencionados anteriormente.',
    logo: logoAvid,
  },
};

interface OrbitNode {
  tool: string;
  angle: number;
}

interface OrbitRing {
  /** Diameter as a percentage of the orbit system box */
  diameter: string;
  /** Seconds for a full revolution */
  duration: string;
  direction: 'cw' | 'ccw';
  /** Node diameter */
  node: string;
  nodes: OrbitNode[];
}

const rings: OrbitRing[] = [
  {
    diameter: '38%',
    duration: '48s',
    direction: 'cw',
    node: 'clamp(54px,8.6vw,84px)',
    nodes: [{ tool: 'ae', angle: 28 }],
  },
  {
    diameter: '68%',
    duration: '66s',
    direction: 'ccw',
    node: 'clamp(50px,7.8vw,76px)',
    nodes: [
      { tool: 'pr', angle: 340 },
      { tool: 'dv', angle: 155 },
    ],
  },
  {
    diameter: '97%',
    duration: '88s',
    direction: 'cw',
    node: 'clamp(48px,7.2vw,72px)',
    nodes: [
      { tool: 'au', angle: 62 },
      { tool: 'avid', angle: 232 },
    ],
  },
];

export function ToolsPanel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTool, setActiveTool] = useState<ToolData | null>(null);

  function openTool(key: string) {
    const tool = toolsData[key];
    if (!tool) return;
    setActiveTool(tool);
    setModalOpen(true);
  }

  return (
    <section id="herramientas">
      <div className="ctr">
        <div className="cosmos-hdr">
          <span className="cosmos-eyebrow rv">✦ Arsenal Cinematográfico</span>
          <h2 className="cosmos-title rv d1">Mis herramientas</h2>
          <p className="cosmos-sub rv d2">Haz click sobre cada una para más información</p>
        </div>

        <div className="orbit-system rv d2">
          <div className="orbit-core" aria-hidden="true"></div>

          {rings.map((ring, ri) => (
            <div
              key={ri}
              className="orbit-ring"
              style={{ '--d': ring.diameter, '--node': ring.node } as CSSProperties}
            >
              <div
                className={`orbit-track${ring.direction === 'ccw' ? ' ccw' : ''}`}
                style={{ '--dur': ring.duration } as CSSProperties}
              >
                {ring.nodes.map((n) => {
                  const tool = toolsData[n.tool];
                  return (
                    <div
                      key={n.tool}
                      className="orbit-arm"
                      style={{ '--angle': `${n.angle}deg` } as CSSProperties}
                    >
                      <div className="orbit-pos">
                        <span className="orbit-trail" aria-hidden="true"></span>
                        <span className="orbit-counter" style={{ '--dur': ring.duration } as CSSProperties}>
                          <button
                            type="button"
                            className="orbit-node"
                            aria-label={`Más información sobre ${tool.name}`}
                            /* The node is always in motion: opening on pointer down
                               avoids losing the click if the cursor and the logo
                               drift apart between press and release. */
                            onPointerDown={(e) => { if (e.pointerType === 'mouse') openTool(n.tool); }}
                            onClick={() => openTool(n.tool)}
                          >
                            <img className="orbit-logo" src={tool.logo} alt={tool.name} loading="lazy" />
                          </button>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

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
              <div className="tool-modal-logo">
                <img src={activeTool.logo} alt={activeTool.name} />
              </div>
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
