import type { Variants } from 'framer-motion';
import { ANIMATION_DURATION, ANIMATION_EASE } from './constants';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE
    }
  })
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: ANIMATION_DURATION.slow,
      ease: ANIMATION_EASE
    }
  })
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: ANIMATION_DURATION.slow,
      ease: ANIMATION_EASE
    }
  })
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE
    }
  })
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: ANIMATION_DURATION.slow,
      ease: ANIMATION_EASE
    }
  })
};