import { lazy, Suspense, useEffect, useState } from 'react';
import { IntroOverlay } from '@/app/components/IntroOverlay';
import { BackgroundScene } from '@/app/components/BackgroundScene';
import { ScrollProgress } from '@/app/components/ScrollProgress';
import { Navigation } from '@/app/components/Navigation';
import { HeroPanel } from '@/app/components/HeroPanel';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

const WorksPanel    = lazy(() => import('@/app/components/WorksPanel').then(m => ({ default: m.WorksPanel })));
const ToolsPanel    = lazy(() => import('@/app/components/ToolsPanel').then(m => ({ default: m.ToolsPanel })));
const FormacionPanel = lazy(() => import('@/app/components/FormacionPanel').then(m => ({ default: m.FormacionPanel })));
const FaqPanel      = lazy(() => import('@/app/components/FaqPanel').then(m => ({ default: m.FaqPanel })));
const ContactPanel  = lazy(() => import('@/app/components/ContactPanel').then(m => ({ default: m.ContactPanel })));
const Footer        = lazy(() => import('@/app/components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  useScrollReveal();

  useEffect(() => {
    document.body.classList.add('intro-active');
    return () => document.body.classList.remove('intro-active');
  }, []);

  return (
    <>
      {!introDone && <IntroOverlay onDismiss={() => setIntroDone(true)} />}

      <BackgroundScene />
      <ScrollProgress />
      <Navigation />

      <main>
        <HeroPanel />
        <Suspense fallback={null}>
          <WorksPanel />
          <ToolsPanel />
          <FormacionPanel />
          <FaqPanel />
          <ContactPanel />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
