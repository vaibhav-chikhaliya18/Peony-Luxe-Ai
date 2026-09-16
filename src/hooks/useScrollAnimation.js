import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initGSAP } from '../utils/helpers';

/**
 * Custom hook for setting up GSAP ScrollTrigger animations with automatic cleanup
 * @param {Function} animationCallback - Callback receiving the target element and gsap context
 * @param {Array} dependencies - React dependency array
 */
export const useScrollAnimation = (animationCallback, dependencies = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    initGSAP();

    if (!elementRef.current) return;

    // Create GSAP context for safe scoped cleanup
    const ctx = gsap.context(() => {
      if (typeof animationCallback === 'function') {
        animationCallback(elementRef.current, gsap, ScrollTrigger);
      }
    }, elementRef);

    return () => {
      ctx.revert(); // Automatically cleans up all animations and ScrollTriggers inside context
    };
  }, dependencies);

  return elementRef;
};
