import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Sparkles, Award, Layers, Play, Pause, GitBranch } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ShootDetailModal({
  isOpen,
  onClose,
  onBackToDemos,
  project,
  initialDemoIndex = 0,
}) {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [currentDemoIndex, setCurrentDemoIndex] = useState(initialDemoIndex || 0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Safe helper to extract current demo and media
  const demos = (project?.demos || []).slice(0, 2);
  const currentDemo = demos[currentDemoIndex] || demos[0] || null;

  const galleryImages = currentDemo?.gallery || (currentDemo ? [
    { label: currentDemo.video ? 'Video' : 'Image 1', type: currentDemo.video ? 'video' : 'image', video: currentDemo.video, src: currentDemo.image },
    { label: 'Image 2', type: 'image', src: demos[(currentDemoIndex + 1) % demos.length]?.image || currentDemo.image },
    { label: 'Image 3', type: 'image', src: currentDemo.image },
    { label: 'Image 4', type: 'image', src: demos[(currentDemoIndex + 1) % demos.length]?.image || currentDemo.image },
  ] : []);

  const currentMedia = galleryImages[selectedImageIndex] || galleryImages[0] || null;
  const isCurrentMediaVideo = Boolean(
    currentMedia?.type === 'video' ||
    currentMedia?.video ||
    (selectedImageIndex === 0 && currentDemo?.video)
  );

  // 1. Sync initial index when modal opens (Called unconditionally at top)
  useEffect(() => {
    if (isOpen) {
      setCurrentDemoIndex(initialDemoIndex || 0);
      setSelectedImageIndex(0);
    }
  }, [initialDemoIndex, isOpen]);

  // 2. Handle escape key and lock background scroll (Called unconditionally at top)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // 3. Auto-play video whenever selected media changes (Called unconditionally at top)
  useEffect(() => {
    if (isOpen && isCurrentMediaVideo && videoRef.current) {
      try {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
        const playPromise = videoRef.current.play();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        } else {
          setIsPlaying(true);
        }
      } catch (err) {
        setIsPlaying(false);
      }
    }
  }, [isOpen, isCurrentMediaVideo, currentDemoIndex, selectedImageIndex]);

  // Early return AFTER ALL HOOKS HAVE BEEN CALLED
  if (!isOpen || !project || !currentDemo) return null;

  const handlePrevDemo = () => {
    const newIdx = (currentDemoIndex - 1 + demos.length) % demos.length;
    setCurrentDemoIndex(newIdx);
    setSelectedImageIndex(0);
  };

  const handleNextDemo = () => {
    const newIdx = (currentDemoIndex + 1) % demos.length;
    setCurrentDemoIndex(newIdx);
    setSelectedImageIndex(0);
  };

  const handleTogglePlay = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    try {
      if (videoRef.current.paused) {
        const playPromise = videoRef.current.play();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.catch(() => {});
        }
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      // Ignore
    }
  };

  const deliverableList = currentDemo.deliverables || [
    'Flat Saree Capture',
    'Neural Model Synthesis',
    'Drape Physics Engine',
    'Camera Path Direction',
    'Heritage Environment',
    '4K Commercial Mastering',
  ];

  const workflowSteps = currentDemo.workflow || [
    {
      step: 'Step 01 • Raw Asset Ingestion',
      desc: 'Extracted precise RGB color gamuts and border geometry from flat-lay captures.',
    },
    {
      step: 'Step 02 • Virtual Model Casting',
      desc: 'Generated an elegant virtual model anatomy complementing traditional Indian drape.',
    },
    {
      step: 'Step 03 • Cloth Physics Simulation',
      desc: 'Simulated gravity, pleating dynamics, and natural pallu sway in motion.',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        {/* Darkened Blur Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050608]/85 backdrop-blur-xl -z-10"
        />

        {/* Modal Container: Matches Second Reference Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[1100px] max-h-[92vh] overflow-y-auto bg-white text-[#0F172A] rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.75)] border border-slate-100 my-auto select-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
            {/* Left Column: Hero Video / Image Showcase with Badges */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/70 shadow-sm flex items-center justify-center">
                {/* Top Badges Overlay */}
                <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="bg-[#2563EB] text-white font-semibold text-[11px] sm:text-xs px-3 py-1 rounded-full shadow-md">
                    Demo {String(currentDemoIndex + 1).padStart(2, '0')} of {demos.length}
                  </span>
                  <span className="bg-white/95 backdrop-blur-sm text-amber-600 border border-amber-200/80 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>{currentDemo.badgeText || (currentDemo.video ? '4K Commercial Video' : '4K Editorial Stills')}</span>
                  </span>
                </div>

                {/* Main Hero Media: Video or Image */}
                {isCurrentMediaVideo ? (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      key={currentMedia?.video || currentDemo.video}
                      src={currentMedia?.video || currentDemo.video}
                      poster={currentMedia?.src || currentDemo.image}
                      autoPlay
                      muted
                      loop
                      controls
                      playsInline
                      onLoadedData={(e) => {
                        try {
                          e.currentTarget.muted = true;
                          const p = e.currentTarget.play();
                          if (p && typeof p.catch === 'function') p.catch(() => {});
                        } catch (err) {}
                      }}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Play MP4 Video badge (interactive button matching reference image) */}
                    <div className="absolute top-12 right-3.5 z-20">
                      <button
                        type="button"
                        onClick={handleTogglePlay}
                        className="bg-[#052e16]/90 hover:bg-[#064e3b] backdrop-blur-md text-[#34d399] border border-[#10b981]/50 text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg transition-all cursor-pointer hover:scale-105"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-2.5 h-2.5 fill-[#34d399] text-[#34d399]" />
                            <span>Playing 4K Video</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-2.5 h-2.5 fill-[#34d399] text-[#34d399]" />
                            <span>Play MP4 Video</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <motion.img
                    key={currentMedia?.src || currentDemo.image}
                    initial={{ opacity: 0.8, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={currentMedia?.src || currentDemo.image}
                    alt={currentDemo.title}
                    className="w-full h-full object-cover object-center"
                  />
                )}

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Case Study Details, Deliverables & Workflow Architecture */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              {/* Header Navigation Row */}
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-[#EEF2FF] text-[#4338CA] text-[11px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider border border-[#C7D2FE]">
                      {currentDemo.tag || project.category}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {currentDemo.subCategory || 'Ai Video Modeling'}
                    </span>
                  </div>

                  {/* Navigation & Close Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onBackToDemos}
                      className="bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>All Demos</span>
                    </button>

                    <button
                      type="button"
                      onClick={handlePrevDemo}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-900 px-2 py-1 rounded transition-colors cursor-pointer"
                    >
                      ← Prev
                    </button>

                    <button
                      type="button"
                      onClick={handleNextDemo}
                      className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] px-2 py-1 rounded transition-colors cursor-pointer"
                    >
                      Next →
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors ml-1 cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Shoot Main Title & Subtitle */}
                <h2 className="font-heading font-extrabold text-2xl sm:text-[26px] md:text-[28px] text-[#0F172A] tracking-tight leading-tight">
                  {currentDemo.shootTitle || currentDemo.title}
                </h2>
                <p className="text-xs sm:text-[13px] text-[#2563EB] font-semibold mt-0.5">
                  {currentDemo.shootSubtitle || 'Hyper-Realistic Fabric Motion & 4K AI Model Runway'}
                </p>
              </div>

              {/* Commercial Deliverables Section (Horizontal 4-Thumbnails Strip) */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2">
                  <Award className="w-4 h-4 text-[#2563EB]" />
                  <span>COMMERCIAL DELIVERABLES:</span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
                  {galleryImages.slice(0, 4).map((img, i) => {
                    const isSelected = selectedImageIndex === i;
                    const isVideoItem = img.type === 'video' || (i === 0 && Boolean(currentDemo.video));
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedImageIndex(i)}
                        className={`relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 group text-left cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'ring-2 ring-[#2563EB] shadow-md shadow-[#2563EB]/25'
                            : 'border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                        <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between pointer-events-none">
                          <span className="text-[11px] font-semibold text-white tracking-wide drop-shadow-sm truncate">
                            {img.label || `Image ${i + 1}`}
                          </span>
                          {isVideoItem && (
                            <Play className="w-2.5 h-2.5 fill-white text-white drop-shadow-sm shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Creative Strategy & Impact Card */}
              <div className="bg-[#F8FAFC] border border-blue-100/80 rounded-xl p-3 sm:p-3.5">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>CREATIVE STRATEGY & IMPACT INSIGHT:</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 italic font-normal leading-relaxed">
                  "{currentDemo.strategy || '4K neural video models simulate real cloth weight, gravity, and fluid motion, delivering full runway video campaigns in 36 hours.'}"
                </p>
              </div>

              {/* Production Scope & Deliverables */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>PRODUCTION SCOPE & DELIVERABLES:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {deliverableList.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/90 px-2.5 py-1 rounded-md flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Workflow Architecture (3 Cards Pipeline) */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2">
                  <GitBranch className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>WORKFLOW ARCHITECTURE:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {workflowSteps.map((wf, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 flex flex-col justify-start"
                    >
                      <p className="text-[11px] font-bold text-[#2563EB] tracking-wide mb-1 leading-snug">
                        {wf.step}
                      </p>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {wf.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action & Cost Metric Row */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{currentDemo.metric || '94% cost reduction vs traditional model shoot'}</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    navigate('/contact');
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-[13px] font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] shadow-md shadow-[#2563EB]/25 flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Inquire About This Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
