import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure ScrollTrigger is registered only once across the app
let isScrollTriggerRegistered = false;

export const initGSAP = () => {
  if (typeof window !== 'undefined' && !isScrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isScrollTriggerRegistered = true;
  }
};

/**
 * Utility to join CSS class names cleanly
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Format project numbers with leading zero (e.g., 01, 02)
 */
export const formatNumber = (num) => {
  return String(num).padStart(2, '0');
};
