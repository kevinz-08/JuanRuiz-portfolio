export function FormacionPanel() {
  return (
    <section id="formacion">
      <div className="ctr">

        <div className="shdr">
          <span className="seyebrow rv">✦ Trayectoria</span><br />
          <span className="stitle rv d1"><span className="shimmer-silver">Formación</span></span>
          <div className="srule rv d2"></div>
        </div>

        {/* LENS 3D logo scene */}
        <div className="form-scene rv d2">
          <div className="lens-glow"></div>
          <div className="lens-logo-3d">
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lF" x1="15%" y1="8%" x2="85%" y2="92%">
                  <stop offset="0%"   stopColor="#ff3a3a"/>
                  <stop offset="50%"  stopColor="#d00000"/>
                  <stop offset="100%" stopColor="#7a0000"/>
                </linearGradient>
                <linearGradient id="lR" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#560000"/>
                  <stop offset="100%" stopColor="#2c0000"/>
                </linearGradient>
                <linearGradient id="lB" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"   stopColor="#3e0000"/>
                  <stop offset="100%" stopColor="#1a0000"/>
                </linearGradient>
                <linearGradient id="lS" x1="0%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%"   stopColor="rgba(255,255,255,.30)"/>
                  <stop offset="40%"  stopColor="rgba(255,255,255,.06)"/>
                  <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                </linearGradient>
              </defs>
              <rect x="10" y="8" width="164" height="164" rx="28" fill="url(#lF)"/>
              <path d="M174 8 L194 24 L194 188 L174 172 Z" fill="url(#lR)"/>
              <path d="M10 172 L30 188 L194 188 L174 172 Z" fill="url(#lB)"/>
              <rect x="10" y="8" width="164" height="164" rx="28" fill="url(#lS)"/>
              <path d="M32 28 Q60 18 92 22" stroke="rgba(255,255,255,.22)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <text x="22" y="112" fontFamily="Arial Black,Impact,sans-serif" fontWeight="900" fontSize="68" fill="#fff" letterSpacing="-3">lens</text>
              <text x="22" y="134" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="rgba(255,255,255,.92)" letterSpacing="1.4">ESCUELA</text>
              <text x="22" y="150" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="rgba(255,255,255,.92)" letterSpacing="1.4">DE ARTES VISUALES</text>
            </svg>
          </div>
        </div>

        {/* Formation cards */}
        <div className="form-cards">

          {/* 1 — LENS (featured) */}
          <div className="form-card featured rv">
            <div className="form-dot"></div>
            <div className="form-header">
              <div className="form-logo-badge" style={{ background: '#cc0000', width: '42px', height: '42px', borderRadius: '8px' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="200" rx="0" fill="#cc0000"/>
                  <text x="14" y="118" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="74" fill="#fff" letterSpacing="-2">lens</text>
                  <text x="14" y="138" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="rgba(255,255,255,.88)" letterSpacing="1.2">ESCUELA</text>
                  <text x="14" y="155" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="rgba(255,255,255,.88)" letterSpacing="1.2">DE ARTES VISUALES</text>
                </svg>
              </div>
              <div>
                <div className="form-year">2025 – 2026 · Estudio principal</div>
                <div className="form-title">Curso Profesional de Edición y Postproducción de Video</div>
              </div>
            </div>
            <div className="form-source">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
              Formado en <span className="src-name">LENS Escuela de Artes Visuales</span> — Madrid, España
            </div>
            <p className="form-desc">
              Curso de nivel universitario en la escuela española de artes visuales <mark>LENS</mark>, con sede en Madrid.
              Abarca tanto la teoría como la práctica de la <mark>edición de video</mark>, la <mark>animación de gráficos</mark>
              y la <mark>postproducción de audio y color</mark>. Titulación avalada por la
              <mark>UEMC</mark> (Universidad Europea Miguel de Cervantes) y por la propia escuela.
            </p>
            <span className="form-badge">✦ Titulación universitaria</span>
          </div>

          {/* 2 — Udemy Máster Premiere */}
          <div className="form-card rv d1">
            <div className="form-dot"></div>
            <div className="form-header">
              <div className="form-logo-badge" style={{ background: '#a435f0', width: '42px', height: '42px', borderRadius: '50%' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="#a435f0"/>
                  <text x="100" y="130" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="110" fill="#fff" textAnchor="middle">U</text>
                </svg>
              </div>
              <div>
                <div className="form-year">2025</div>
                <div className="form-title">Adobe Premiere Pro — Máster: De Básico a Profesional</div>
              </div>
            </div>
            <div className="form-source">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
              Formado en <span className="src-name">Udemy</span>
            </div>
            <p className="form-desc">
              Curso completado en <mark>Udemy</mark> como primer paso formal en el dominio del software.
              El objetivo fue aprender las bases de <mark>Adobe Premiere Pro</mark> y llevarlas al máximo nivel
              posible antes de comenzar un estudio más completo y estructurado.
            </p>
          </div>

          {/* 3 — Udemy Masterclass */}
          <div className="form-card rv d1">
            <div className="form-dot"></div>
            <div className="form-header">
              <div className="form-logo-badge" style={{ background: '#a435f0', width: '42px', height: '42px', borderRadius: '50%' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="#a435f0"/>
                  <text x="100" y="130" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="110" fill="#fff" textAnchor="middle">U</text>
                </svg>
              </div>
              <div>
                <div className="form-year">2025</div>
                <div className="form-title">Adobe Premiere Pro CC: Masterclass de Edición de Video</div>
              </div>
            </div>
            <div className="form-source">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
              Formado en <span className="src-name">Udemy</span>
            </div>
            <p className="form-desc">
              Segundo curso en <mark>Udemy</mark>, completado tras el anterior. Sirvió como repaso integral
              y afianzamiento definitivo del dominio de <mark>Adobe Premiere Pro</mark>, consolidando
              todo lo aprendido antes de iniciar la formación profesional en LENS.
            </p>
          </div>

          {/* 4 — Autodidacta */}
          <div className="form-card rv d2">
            <div className="form-dot"></div>
            <div className="form-header">
              <div className="form-logo-badge" style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(220,38,38,.35)', boxShadow: '0 0 12px rgba(220,38,38,.25)' }}>
                <img src="/src/assets/foto_de_perfil.png" alt="Juan Ruiz" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="form-year">2023 – Presente · Aprendizaje continuo</div>
                <div className="form-title">Formación Autodidacta en Edición de Video</div>
              </div>
            </div>
            <div className="form-source">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
              <span className="src-name">Aprendizaje independiente y continuo</span>
            </div>
            <p className="form-desc">
              El inicio en el mundo de la edición surgió como hobby en <mark>2023</mark>, impulsado por
              la pasión por el videojuego <mark>Roblox</mark> y la creación de contenido en video.
              Desde entonces, ese hobbie evolucionó hacia una vocación seria: cada curso,
              cada proyecto y cada pieza nueva es un paso más en un aprendizaje que
              no tiene fecha de caducidad — porque en el mundo audiovisual,
              quien deja de aprender, se queda atrás.
            </p>
            <span className="form-badge">∞ En constante evolución</span>
          </div>

        </div>
      </div>
    </section>
  );
}
