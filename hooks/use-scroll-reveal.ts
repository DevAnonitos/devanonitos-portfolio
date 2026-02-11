'use client';

import { useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  once?: boolean;
  amount?: number | 'some' | 'all';
}

/**
 * Custom hook to trigger animations when an element enters the viewport.
 * @param options - once: only trigger once, amount: how much it should be in view
 * @returns { ref, controls, isInView }
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { once = true, amount = 0.2 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return { ref, controls, isInView };
}
