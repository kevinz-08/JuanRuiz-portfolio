import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 60 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 60 });
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 22 });

  // Pending coords and RAF id — shared via refs to avoid stale closures
  const pendingX = useRef(-200);
  const pendingY = useRef(-200);
  const rafId = useRef<number>(0);
  const hasPending = useRef(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.style.cursor = 'none';

    const flush = () => {
      mouseX.set(pendingX.current);
      mouseY.set(pendingY.current);
      hasPending.current = false;
    };

    const move = (e: MouseEvent) => {
      pendingX.current = e.clientX;
      pendingY.current = e.clientY;

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      // Schedule a single RAF per frame — skip if one is already queued
      if (!hasPending.current) {
        hasPending.current = true;
        rafId.current = requestAnimationFrame(flush);
      }
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('button, a, [role="button"], [data-cursor-hover]'));
    };

    const hide = () => {
      setVisible(false);
      visibleRef.current = false;
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    document.documentElement.addEventListener('mouseleave', hide);

    return () => {
      document.body.style.cursor = '';
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.documentElement.removeEventListener('mouseleave', hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-red-500"
          animate={{ width: hovering ? 10 : 6, height: hovering ? 10 : 6 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border border-red-500/50"
          animate={{
            width: hovering ? 48 : 30,
            height: hovering ? 48 : 30,
            backgroundColor: hovering ? 'rgba(239,68,68,0.07)' : 'transparent',
            borderColor: hovering ? 'rgba(239,68,68,0.7)' : 'rgba(239,68,68,0.45)',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
      </motion.div>
    </>
  );
}
