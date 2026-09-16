import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AiFilmsSection() {
  return (
    <section
      id="ai-films"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#070709] py-24 sm:py-32 selection:bg-[#9166FD] selection:text-white"
    >
      {/* Background Visual Layer: Cinematic Clapperboard Silhouette */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/films/clapperboard-bg.jpg"
          alt="Cinematic Clapperboard"
          className="w-full h-full object-cover object-center opacity-25 md:opacity-30 mix-blend-luminosity scale-[1.03]"
        />
        {/* Dark Vignette Overlay to match exact lighting */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(13, 14, 18, 0.25) 0%, rgba(7, 7, 9, 0.82) 58%, #070709 100%)',
          }}
        />
        {/* Subtle center ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[480px] bg-gradient-to-tr from-[#5D87FF]/[0.05] via-[#9166FD]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Kicker Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#8E95A5] uppercase mb-6 sm:mb-8 select-none">
            CINEMATIC AI
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-extrabold text-[52px] sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[112px] leading-[0.98] tracking-[-0.035em] text-white select-none"
        >
          <span className="block">Ideas That</span>
          <span className="block mt-1 sm:mt-2">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(100deg, #6286FE 0%, #8967FD 38%, #BC68FD 72%, #D770FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Feel Real.
            </span>
          </span>
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 sm:mt-9 max-w-[620px] text-[15px] sm:text-base md:text-[17px] leading-[1.65] text-[#9CA3AF] font-normal"
        >
          From concept to final frame — AI films with the depth, emotion and craft
          of traditional cinema.
        </motion.p>

        {/* Explore AI Films CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 sm:mt-11 flex items-center justify-center"
        >
          <Link
            to="/ai-films"
            className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_28px_rgba(137,103,253,0.45)]"
          >
            {/* Animated Iridescent Gradient Border */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Inner Dark Glass Pill */}
            <span className="relative flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/80 backdrop-blur-md transition-all duration-300 text-xs sm:text-[13px] font-heading font-medium text-white tracking-wide overflow-hidden">
              {/* Shimmer Light Reflection Sweep on Hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              <span className="relative z-10">Explore AI Films</span>
              <span className="relative z-10 ml-2 text-sm leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C4B5FD] group-hover:text-white">
                →
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
