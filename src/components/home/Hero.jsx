import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070709] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 xl:pt-40 xl:pb-28 selection:bg-[#9166FD] selection:text-white"
      >
        {/* Background Visual Layer: Subtle Dark Tablet / Stylus Backdrop */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Creative Studio Setup"
            className="w-full h-full object-cover object-center opacity-30 md:opacity-35 mix-blend-luminosity scale-[1.03]"
          />
          {/* Ambient Lighting & Vignette to guarantee exact dark atmosphere */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 45%, rgba(13, 14, 18, 0.25) 0%, rgba(7, 7, 9, 0.78) 55%, #070709 100%)',
            }}
          />
          {/* Subtle violet/blue center ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-[#5D87FF]/[0.05] via-[#9166FD]/[0.07] to-transparent rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Foreground Content */}
        <div className="container-custom relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          {/* Kicker Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#9A9EA7] uppercase mb-5 sm:mb-7 select-none">
              AI CREATIVE STUDIO
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-extrabold text-[46px] sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px] 2xl:text-[112px] leading-[0.98] tracking-[-0.035em] text-white select-none"
          >
            <span className="block">Where</span>
            <span className="block mt-1 sm:mt-2">Imagination</span>
            <span className="block mt-1 sm:mt-2">
              Becomes{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(100deg, #6286FE 0%, #8967FD 38%, #BC68FD 72%, #D770FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Visual.
              </span>
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-9 max-w-[620px] text-[15px] sm:text-base md:text-[17px] leading-[1.65] text-[#9CA3AF] font-normal"
          >
            We create cinematic AI images, videos, films and brand stories designed
            to make brands impossible to ignore.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 sm:mt-11 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {/* Explore Our Work Pill Button -> Links directly to /contact */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_28px_rgba(137,103,253,0.45)] cursor-pointer"
            >
              {/* Animated Iridescent Gradient Border */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Inner Dark Glass Pill */}
              <span className="relative flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/80 backdrop-blur-md transition-all duration-300 text-sm sm:text-[15px] font-heading font-medium text-white tracking-wide overflow-hidden">
                {/* Shimmer Light Reflection Sweep on Hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <span className="relative z-10">Explore Our Work</span>
                <span className="relative z-10 ml-2 text-base leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C4B5FD] group-hover:text-white">
                  →
                </span>
              </span>
            </Link>

            {/* Watch Showreel Play Button -> Links directly to /work */}
            <Link
              to="/work"
              className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_28px_rgba(137,103,253,0.45)] cursor-pointer focus:outline-none"
            >
              {/* Animated Iridescent Gradient Border */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Inner Dark Glass Pill */}
              <span className="relative flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/80 backdrop-blur-md transition-all duration-300 text-sm sm:text-[15px] font-heading font-medium text-white tracking-wide overflow-hidden">
                {/* Shimmer Light Reflection Sweep on Hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {/* Play Icon Circle */}
                <span className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/[0.08] group-hover:bg-[#8967FD]/30 border border-white/15 flex items-center justify-center transition-all duration-300">
                  <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white text-white translate-x-[0.5px]" />
                </span>

                <span className="relative z-10">Watch Showreel</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
  );
}
