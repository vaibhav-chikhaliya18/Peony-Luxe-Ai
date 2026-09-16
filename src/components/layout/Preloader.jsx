import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const isFinishedRef = useRef(false);
  const rafRef = useRef(null);

  // Finish loader smoothly
  const finishLoading = () => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;
    setProgress(100);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    }, 450);
  };

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';
    if (window.lenis) {
      window.lenis.stop();
    }

    const video = videoRef.current;
    if (video) {
      // Set slightly brisk playback rate so animation feels energetic and premium
      video.playbackRate = 1.25;

      const attemptPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoPlaying(true);
            })
            .catch(() => {
              // In case autoplay is blocked, start simulated timer fallback
              startFallbackProgress();
            });
        }
      };

      // Play immediately
      attemptPlay();
    }

    // High-precision 60fps frame-synced progress tracking
    const trackVideoProgress = () => {
      if (isFinishedRef.current) return;

      const vid = videoRef.current;
      if (vid && vid.duration && !isNaN(vid.duration)) {
        const currentPct = Math.min(
          99,
          Math.floor((vid.currentTime / vid.duration) * 100)
        );
        setProgress((prev) => Math.max(prev, currentPct));

        if (vid.currentTime >= vid.duration - 0.1 || vid.ended) {
          finishLoading();
          return;
        }
      }

      rafRef.current = requestAnimationFrame(trackVideoProgress);
    };

    rafRef.current = requestAnimationFrame(trackVideoProgress);

    // Fallback timer if video takes more than 1.2s to start or fails
    let fallbackInterval = null;
    const startFallbackProgress = () => {
      if (fallbackInterval || isFinishedRef.current) return;
      const startTime = Date.now();
      const duration = 4500;

      fallbackInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(99, Math.floor((elapsed / duration) * 100));
        setProgress((prev) => Math.max(prev, pct));

        if (elapsed >= duration) {
          clearInterval(fallbackInterval);
          finishLoading();
        }
      }, 40);
    };

    // If video hasn't started playing within 1200ms, start fallback
    const safetyCheck = setTimeout(() => {
      if (!isVideoPlaying && progress < 10) {
        startFallbackProgress();
      }
    }, 1200);

    // Hard fallback limit
    const hardLimit = setTimeout(() => {
      finishLoading();
    }, 8500);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (fallbackInterval) clearInterval(fallbackInterval);
      clearTimeout(safetyCheck);
      clearTimeout(hardLimit);
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [isVideoPlaying]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="minimal-luxury-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070709] px-6 select-none overflow-hidden"
        >
          {/* Main Centered Stack: Animated Logo + Loader */}
          <div className="flex flex-col items-center justify-center w-full max-w-2xl">
            {/* 3D Animated Logo Video (Prominent, displays immediately) */}
            <div className="relative w-[340px] sm:w-[480px] md:w-[560px] lg:w-[640px] max-h-[58vh] sm:max-h-[66vh] aspect-[9/16] flex items-center justify-center mb-4 sm:mb-6 overflow-visible">
              <video
                ref={videoRef}
                src="/videos/company-logo-animated.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                onLoadedData={() => {
                  if (videoRef.current) {
                    videoRef.current.play().catch(() => {});
                  }
                }}
                onCanPlay={() => {
                  if (videoRef.current) {
                    videoRef.current.play().catch(() => {});
                  }
                }}
                onPlaying={() => setIsVideoPlaying(true)}
                onEnded={finishLoading}
                className="w-full h-full object-contain object-center scale-[1.18] sm:scale-[1.28]"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'contrast(135%) brightness(96%)',
                }}
              />
            </div>

            {/* Loader: Elegant Editorial Percentage Counter in 100% sync with video */}
            <div className="flex items-baseline justify-center gap-1.5 mb-3">
              <span className="font-heading font-light text-5xl sm:text-6xl text-white tracking-tight tabular-nums leading-none">
                {String(progress).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#8967FD] font-semibold tracking-wider">
                %
              </span>
            </div>

            {/* Precision Gradient Progress Bar */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] rounded-full shadow-[0_0_14px_rgba(137,103,253,0.8)] transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

