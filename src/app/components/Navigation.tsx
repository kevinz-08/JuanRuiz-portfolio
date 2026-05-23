import { useEffect, useState } from 'react';
import profilePhoto from '../../assets/profile-photo.jpg';

const sections = ['inicio', 'trabajos', 'herramientas', 'formacion', 'faq', 'contacto'];
const labels: Record<string, string> = {
  inicio: 'Inicio',
  trabajos: 'Proyectos',
  herramientas: 'Herramientas',
  formacion: 'Formación',
  faq: 'Preguntas',
  contacto: 'Contacto',
};

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  let top = el.getBoundingClientRect().top + window.scrollY - 80;
  // #herramientas fades in via scroll animation — jump past the fade-in zone
  if (id === 'herramientas') top += window.innerHeight * 0.95;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    sections.forEach((s) => { const el = document.getElementById(s); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  function handleNav(id: string) {
    scrollToSection(id);
    setMobileOpen(false);
  }

  return (
    <>
      <nav>
        <div className={`pill${scrolled ? ' sc' : ''}`} id="pill">
          <button className="nlogo" id="logo-btn" aria-label="Inicio" onClick={() => handleNav('inicio')}>
            <img src={profilePhoto} alt="Juan Ruiz" />
            <span className="nname">Juan Ruiz</span>
          </button>
          <div className="nright">
            {sections.filter(s => s !== 'contacto').map((s) => (
              <button key={s} className={`nlink${active === s ? ' act' : ''}`} onClick={() => handleNav(s)}>
                {labels[s]}
              </button>
            ))}
            <button className="ncta" onClick={() => handleNav('contacto')}>Contacto</button>
          </div>
          <button className="ham" id="ham" aria-label="Menú" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg id="hamico" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {mobileOpen ? (
                <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
              ) : (
                <><line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="14" x2="19" y2="14"/></>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mob${mobileOpen ? ' open' : ''}`} id="mob">
        {sections.map((s) => (
          <button key={s} className="mlink" onClick={() => handleNav(s)}>{labels[s]}</button>
        ))}
        <span className="mhandle">@juanruizedita</span>
      </div>

    </>
  );
}
