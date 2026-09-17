import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FeaturedWorkModal({ isOpen, onClose, project, onSelectDemo }) {
  const navigate = useNavigate();

  // Close on Escape key and prevent background body scrolling
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

  if (!isOpen || !project) return null;

  const demos = (project.demos || []).slice(0, 2);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Darkened Blur Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050608]/80 backdrop-blur-xl -z-10"
        />

        {/* Modal Container: Perfectly proportioned for 2 demos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[820px] bg-[#F8FAFC] text-[#0F172A] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.65)] border border-white/40 overflow-hidden my-auto select-none"
        >
          {/* Header Row: Badge & Close Button */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]">
                {project.disciplineBadge || project.category}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500">
                2 Live Demos
              </span>
            </div>

            {/* Circular Close Button (X) */}
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Showcase Heading */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1120] tracking-tight mb-5 leading-tight">
            {project.modalTitle || project.title}
          </h2>

          {/* Subheader */}
          <div className="flex items-center gap-2 mb-6 border-t border-slate-200/80 pt-4 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#2563EB]">
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            <span>FEATURED PRODUCTION DEMOS</span>
          </div>

          {/* Clean 2-Card Grid Layout (No horizontal scrolling, fills modal width symmetrically) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {demos.map((demo, idx) => {
              const hasVideo = Boolean(demo.video);
              const handleClick = () => {
                if (onSelectDemo) {
                  onSelectDemo(idx);
                }
              };

              return (
                <div
                  key={idx}
                  onClick={handleClick}
                  className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
                >
                  {/* Demo Media (Video or Image) */}
                  <div className="aspect-[16/11] w-full overflow-hidden bg-slate-900 relative">
                    {hasVideo ? (
                      <div className="relative w-full h-full">
                        <video
                          src={demo.video}
                          poster={demo.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          onLoadedData={(e) => {
                            try {
                              e.currentTarget.muted = true;
                              const p = e.currentTarget.play();
                              if (p && typeof p.catch === 'function') p.catch(() => {});
                            } catch (err) {}
                          }}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                        />
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md border border-white/20 pointer-events-none">
                          <Play className="w-2.5 h-2.5 fill-white text-white" />
                          <span>4K Commercial Video</span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={demo.image}
                        alt={demo.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Demo Card Body */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight mb-2">
                        {demo.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 tracking-wide mb-4">
                        Turnaround:{' '}
                        <span className="text-[#2563EB] font-bold">
                          {demo.turnaround || '24 Hours'}
                        </span>
                      </p>
                    </div>

                    {/* View Case Study CTA Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick();
                      }}
                      className="w-fit px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] shadow-md shadow-[#2563EB]/25 flex items-center gap-1.5 transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
