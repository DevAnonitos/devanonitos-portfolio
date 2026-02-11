import { Variants } from 'motion/react';

/**
 * Standard transition for most animations
 */
export const STANDARD_TRANSITION = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const, // Custom cubic-bezier for smooth finish
};

/**
 * Fade in from bottom animation
 */
export const FADE_IN_UP: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: STANDARD_TRANSITION
  }
};

/**
 * Fade in with slight scale up
 */
export const FADE_IN_SCALE: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: STANDARD_TRANSITION
  }
};

/**
 * Stagger container for children animations
 */
export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Side reveal (useful for split layouts)
 */
export const REVEAL_LEFT: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: STANDARD_TRANSITION
  }
};

export const REVEAL_RIGHT: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: STANDARD_TRANSITION
  }
};
