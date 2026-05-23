import { useEffect, useState } from 'react';
import { IntroOverlay } from '@/app/components/IntroOverlay';
import { BackgroundScene } from '@/app/components/BackgroundScene';
import { ScrollProgress } from '@/app/components/ScrollProgress';
import { Navigation } from '@/app/components/Navigation';
import { HeroPanel } from '@/app/components/HeroPanel';
import { WorksPanel } from '@/app/components/WorksPanel';
import { ToolsPanel } from '@/app/components/ToolsPanel';
import { FormacionPanel } from '@/app/components/FormacionPanel';
import { FaqPanel } from '@/app/components/FaqPanel';
import { ContactPanel } from '@/app/components/ContactPanel';
import { Footer } from '@/app/components/Footer';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  useScrollReveal();

  // Manage intro-active class on body
  useEffect(() => {
    document.body.classList.add('intro-active');
    return () => document.body.classList.remove('intro-active');
  }, []);

  function handleIntroDismiss() {
    setIntroDone(true);
  }

  return (
    <>
      {!introDone && <IntroOverlay onDismiss={handleIntroDismiss} />}

      <BackgroundScene />
      <ScrollProgress />
      <Navigation />

      <main>
        <HeroPanel />
        <WorksPanel />
        <ToolsPanel />
        <FormacionPanel />
        <FaqPanel />
        <ContactPanel />
      </main>

      <Footer />
    </>
  );
}
