import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initGSAP } from '../../utils/helpers';

/**
 * ParallaxImage: Lightweight GSAP ScrollTrigger parallax wrapper
 */
export default function ParallaxImage({ children, speed = 0.15, className = '' }) {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    initGSAP();

    if (!containerRef.current || !targetRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <div ref={targetRef} className="w-full h-full will-change-transform scale-110">
        {children}
      </div>
    </div>
  );
}
