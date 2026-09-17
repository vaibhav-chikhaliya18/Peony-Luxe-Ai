import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#070709] py-24 sm:py-32 selection:bg-[#9166FD] selection:text-white text-center"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(139, 92, 246, 0.09) 0%, rgba(7, 7, 9, 0.8) 65%, #070709 100%)',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-[#4F75FF]/[0.06] via-[#8B5EFF]/[0.08] to-[#D55CFF]/[0.06] rounded-full blur-3xl pointer-events-none" />
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
            GET STARTED
          </p>
        </motion.div>

        {/* Main Headline matching reference */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-extrabold text-[44px] sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[98px] 2xl:text-[104px] leading-[0.98] tracking-[-0.035em] text-white select-none"
        >
          <span className="block">Have a Vision?</span>
          <span className="block mt-1 sm:mt-2">Let’s Bring It</span>
          <span className="block mt-1 sm:mt-2">to Life.</span>
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 sm:mt-9 max-w-[580px] text-[15px] sm:text-base md:text-[17px] leading-[1.65] text-[#9CA3AF] font-normal"
        >
          Whether it's a campaign, a film or a complete brand transformation — we're
          ready to create something extraordinary.
        </motion.p>

        {/* START A PROJECT CTA Button matching Navbar Contact Us design */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 sm:mt-11 flex items-center justify-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] hover:shadow-[0_0_32px_rgba(137,103,253,0.5)] select-none"
          >
            {/* Animated Iridescent Gradient Border matching Navbar */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Inner Dark Glass Pill matching Navbar */}
            <span className="relative flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/80 backdrop-blur-md transition-all duration-300 text-xs sm:text-sm font-heading font-medium sm:font-semibold text-white tracking-wider uppercase overflow-hidden">
              {/* Shimmer Light Reflection Sweep on Hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Button Label & Animated Arrow */}
              <span className="relative z-10">START A PROJECT</span>
              <span className="relative z-10 ml-2 text-base leading-none transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-[#C4B5FD] group-hover:text-white">
                →
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

