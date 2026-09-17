import { useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Sparkles } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';

export default function AiFilms() {
  const containerRef = useRef(null);

  // 3D Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end fluid 3D tilt
  const springConfig = { stiffness: 120, damping: 20, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Rotations & Translations
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-9deg', '9deg']);
  const translateX = useTransform(smoothX, [-0.5, 0.5], ['-24px', '24px']);
  const translateY = useTransform(smoothY, [-0.5, 0.5], ['-20px', '20px']);
  const scale = useTransform(smoothX, [-0.5, 0, 0.5], [1.06, 1.05, 1.06]);

  // Dynamic holographic light sheen tracking cursor
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['10%', '90%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['10%', '90%']);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Generate deterministic floating 3D ember particles
  const emberParticles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${(i * 4.2 + (i % 5) * 3) % 100}%`,
      duration: Math.random() * 7 + 8,
      delay: Math.random() * 5,
      xOffset: (i % 2 === 0 ? 1 : -1) * (Math.random() * 40 + 20),
      color: i % 3 === 0 ? '#D65CFF' : i % 2 === 0 ? '#8057FF' : '#FFB74D',
    }));
  }, []);

  return (
    <PageTransition>
      {/* Full Screen Interactive 3D Cinematic Section */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[calc(100vh-5rem)] min-h-[500px] xl:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#050608] perspective-[1400px] select-none"
      >
        {/* Dynamic 3D Moving Ambient Backdrop */}
        <motion.div
          style={{
            x: useTransform(smoothX, [-0.5, 0.5], ['30px', '-30px']),
            y: useTransform(smoothY, [-0.5, 0.5], ['25px', '-25px']),
          }}
          className="absolute inset-0 overflow-hidden pointer-events-none -z-20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[65vh] bg-gradient-to-r from-[#4C7DFF]/25 via-[#8057FF]/35 to-[#D65CFF]/25 blur-[160px] rounded-full animate-pulse" />
          <div className="absolute -top-20 left-1/3 w-[450px] h-[450px] bg-[#8057FF]/20 blur-[130px] rounded-full" />
        </motion.div>

        {/* Floating 3D Embers / Particle Sparks */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {emberParticles.map((ember) => (
            <motion.div
              key={ember.id}
              initial={{
                opacity: 0,
                y: '105vh',
                x: 0,
              }}
              animate={{
                opacity: [0, 0.9, 0.9, 0],
                y: '-10vh',
                x: [0, ember.xOffset, 0],
              }}
              transition={{
                duration: ember.duration,
                repeat: Infinity,
                delay: ember.delay,
                ease: 'easeInOut',
              }}
              style={{
                left: ember.left,
                width: `${ember.size}px`,
                height: `${ember.size}px`,
                backgroundColor: ember.color,
                boxShadow: `0 0 ${ember.size * 3}px ${ember.color}`,
              }}
              className="absolute rounded-full"
            />
          ))}
        </div>

        {/* 3D Animated Poster with Tilt, Parallax, and Breathing */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
            scale,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform"
        >
          {/* Organic Floating Wave (Breathing Motion) */}
          <motion.div
            animate={{
              y: [0, -9, 0],
              scale: [1, 1.012, 1],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full h-full"
          >
            <picture className="w-full h-full">
              {/* Mobile portrait poster */}
              <source
                media="(max-width: 768px)"
                srcSet="/images/ai-films-coming-soon-clean-mobile.jpg"
              />
              {/* Desktop widescreen 16:9 poster */}
              <img
                src="/images/ai-films-coming-soon-clean.jpg"
                alt="Coming Soon"
                className="w-full h-full object-cover object-center select-none"
                draggable={false}
              />
            </picture>

            {/* Dynamic 3D Holographic Light Gleam tracking the cursor */}
            <motion.div
              style={{
                background: useTransform(
                  [glareX, glareY],
                  ([gx, gy]) =>
                    `radial-gradient(circle 500px at ${gx} ${gy}, rgba(255, 255, 255, 0.22), rgba(214, 92, 255, 0.12) 40%, transparent 75%)`
                ),
              }}
              className="absolute inset-0 pointer-events-none mix-blend-overlay z-10 transition-opacity duration-300"
            />

            {/* Top & Bottom Cinematic Edge Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/45 pointer-events-none z-10" />
          </motion.div>
        </motion.div>

        {/* Interactive 3D Cursor Hint Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-3 sm:top-5 xl:top-6 z-30 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-md text-[10.5px] sm:text-[11px] font-heading text-white/70 tracking-wider shadow-lg pointer-events-none"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C4B5FD] animate-pulse" />
          <span>Interactive 3D Cinema Experience</span>
        </motion.div>

        {/* Minimal Floating Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-4 sm:bottom-6 xl:bottom-9 inset-x-0 z-30 flex items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0E1016]/85 hover:bg-[#151822] border border-white/20 hover:border-white/40 backdrop-blur-xl text-xs sm:text-sm font-heading font-medium text-white transition-all duration-300 hover:scale-105 shadow-xl shadow-black/70"
          >
            <ArrowLeft className="w-4 h-4 text-[#C4B5FD]" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/work"
            className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl shadow-brand-violet/35"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF]" />
            <span className="relative flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/90 backdrop-blur-xl text-xs sm:text-sm font-heading font-medium text-white transition-all">
              <Compass className="w-4 h-4 text-[#C4B5FD]" />
              <span>Explore Our Work</span>
            </span>
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}






