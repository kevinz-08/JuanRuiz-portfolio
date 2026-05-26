import { useEffect, useRef, useState } from 'react';
import buttonSoundOgg from '../../assets/sonido_de_boton_para_abrir_portafolio.ogg';
import buttonSoundMp3 from '../../assets/sonido_de_boton_para_abrir_portafolio.mp3';

interface IntroOverlayProps {
  onDismiss: () => void;
}

export function IntroOverlay({ onDismiss }: IntroOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const parallaxRef = useRef({ x: 0, y: 0 });
  const runningRef = useRef(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [gone, setGone] = useState(false);
  const [centerClass, setCenterClass] = useState('');
  const [btnClass, setBtnClass] = useState('');

  interface Star {
    x: number; y: number; z: number; r: number;
    vx: number; vy: number;
    tw: number; ts: number;
    hue: 'r' | 'w';
  }

  // Preload audio so it fires instantly on click (OGG Opus preferred, MP3 fallback)
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    const srcOgg = document.createElement('source');
    srcOgg.src = buttonSoundOgg;
    srcOgg.type = 'audio/ogg; codecs=opus';
    const srcMp3 = document.createElement('source');
    srcMp3.src = buttonSoundMp3;
    srcMp3.type = 'audio/mpeg';
    audio.appendChild(srcOgg);
    audio.appendChild(srcMp3);
    audio.load();
    audioRef.current = audio;
    return () => { audioRef.current = null; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let SW = 0, SH = 0, DPR = 1;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      SW = window.innerWidth;
      SH = window.innerHeight;
      canvas.width = SW * DPR;
      canvas.height = SH * DPR;
      canvas.style.width = SW + 'px';
      canvas.style.height = SH + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const cores = navigator.hardwareConcurrency ?? 4;
    const COUNT = (window.innerWidth < 700 || cores <= 4) ? 80
      : cores <= 8 ? 140
      : 240;
    function initStars() {
      starsRef.current = [];
      for (let i = 0; i < COUNT; i++) {
        const depth = Math.random();
        starsRef.current.push({
          x: Math.random() * SW,
          y: Math.random() * SH,
          z: depth,
          r: depth < .35 ? Math.random() * .8 + .3
            : depth < .75 ? Math.random() * 1.4 + .6
              : Math.random() * 2.2 + 1,
          vx: (Math.random() - .5) * .15 * (depth * 1.2 + .3),
          vy: (Math.random() - .5) * .15 * (depth * 1.2 + .3),
          tw: Math.random() * Math.PI * 2,
          ts: .5 + Math.random() * 1.5,
          hue: Math.random() < .12 ? 'r' : 'w',
        });
      }
    }
    initStars();

    function draw(t: number) {
      if (!runningRef.current) return;
      animFrameRef.current = requestAnimationFrame(draw);

      const tx = (mouseRef.current.x - SW / 2) / SW * 30;
      const ty = (mouseRef.current.y - SH / 2) / SH * 30;
      parallaxRef.current.x += (tx - parallaxRef.current.x) * .05;
      parallaxRef.current.y += (ty - parallaxRef.current.y) * .05;

      ctx.fillStyle = 'rgba(2,2,8,.35)';
      ctx.fillRect(0, 0, SW, SH);

      for (const s of starsRef.current) {
        s.x += s.vx; s.y += s.vy;
        s.tw += .015 * s.ts;
        if (s.x < -5) s.x = SW + 5;
        if (s.x > SW + 5) s.x = -5;
        if (s.y < -5) s.y = SH + 5;
        if (s.y > SH + 5) s.y = -5;

        const twinkle = .5 + .5 * Math.sin(s.tw);
        const alpha = (.25 + .75 * s.z) * twinkle;
        const px = s.x + parallaxRef.current.x * s.z;
        const py = s.y + parallaxRef.current.y * s.z;

        if (s.hue === 'r') {
          ctx.fillStyle = `rgba(255,90,90,${alpha})`;
          ctx.shadowColor = `rgba(220,38,38,${alpha * .6})`;
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.shadowColor = `rgba(255,255,255,${alpha * .4})`;
          ctx.shadowBlur = s.z > .7 ? 6 : 0;
        }
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      runningRef.current = false;
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }

  function prepareAssembly() {
    const selectors = [
      '.pill',
      '#inicio .hrow',
      '#inicio .hh1 .l1',
      '#inicio .hh1 .l2',
      '#inicio .hdesc',
      '#inicio .hbtns',
      '#inicio .hvwrap',
    ];
    selectors.forEach(s => document.querySelector(s)?.classList.add('asm-pre'));
  }

  function triggerAssembly() {
    const selectors = [
      '.pill',
      '#inicio .hrow',
      '#inicio .hh1 .l1',
      '#inicio .hh1 .l2',
      '#inicio .hdesc',
      '#inicio .hbtns',
      '#inicio .hvwrap',
    ];
    selectors.forEach((s, i) => {
      setTimeout(() => document.querySelector(s)?.classList.add('asm-in'), i * 80);
    });
  }

  function handleClick() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    setBtnClass('clicked');

    setTimeout(() => {
      setCenterClass('departing');
      prepareAssembly();
    }, 180);

    setTimeout(() => {
      runningRef.current = false;
      cancelAnimationFrame(animFrameRef.current);
    }, 400);

    setTimeout(() => {
      document.body.classList.remove('intro-active');
      setGone(true);
      onDismiss();
    }, 700);

    setTimeout(() => {
      triggerAssembly();
    }, 900);
  }

  if (gone) return null;

  return (
    <div
      className={`intro${gone ? ' gone' : ''}`}
      id="intro"
      aria-hidden="false"
      onMouseMove={handleMouseMove}
    >
      <canvas ref={canvasRef} id="stars" />
      <div className={`intro-center${centerClass ? ' ' + centerClass : ''}`} id="intro-center">
        <span className="intro-tag">✦ Bienvenido</span>
        <h1 className="intro-title">Juan Ruiz</h1>
        <p className="intro-sub">Editor y postproductor de video. Una experiencia audiovisual te espera.</p>
        <button
          className={`intro-btn${btnClass ? ' ' + btnClass : ''}`}
          id="intro-btn"
          aria-label="Abrir portafolio"
          onClick={handleClick}
        >
          <svg viewBox="0 0 20 20">
            <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Abrir Portafolio
        </button>
      </div>
    </div>
  );
}
