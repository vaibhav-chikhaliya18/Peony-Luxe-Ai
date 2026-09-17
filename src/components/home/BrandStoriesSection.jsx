import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BrandStoriesSection() {
  return (
    <section
      id="brand-stories"
      className="bg-[#070709] py-16 sm:py-24 lg:py-28 overflow-hidden text-left"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Model Editorial Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 xl:col-span-5"
          >
            <div className="relative rounded-[26px] overflow-hidden bg-[#101217] border border-white/[0.08] shadow-2xl aspect-[3/4] max-h-[600px] group">
              <img
                src="/images/projects/brand-stories-model.jpg"
                alt="Brand Stories Editorial"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />

              {/* Floating Purple Dot Badge at Top Right */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#161822]/85 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9B6BFF] shadow-sm shadow-[#9B6BFF]/80" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center pl-0 lg:pl-4 xl:pl-8"
          >
            {/* Kicker Badge */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#8E95A5] uppercase mb-4 sm:mb-5 select-none">
              BRAND STORIES
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] 2xl:text-[52px] font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6 sm:mb-7">
              <span className="block">More Than Content.</span>
              <span className="block mt-1 sm:mt-1.5">A Story That Sells.</span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 max-w-xl text-[#9CA3AF] text-sm sm:text-base leading-[1.7] font-normal">
              <p>
                We don't just create visuals — we craft narratives that resonate. Every brand
                has a story worth telling.
              </p>
              <p>We make sure it's unforgettable.</p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                to="/brand-stories"
                className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_28px_rgba(137,103,253,0.45)]"
              >
                {/* Animated Iridescent Gradient Border */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Inner Dark Glass Pill */}
                <span className="relative flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/80 backdrop-blur-md transition-all duration-300 text-xs sm:text-[13px] font-heading font-medium text-white tracking-wide overflow-hidden">
                  {/* Shimmer Light Reflection Sweep on Hover */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  <span className="relative z-10">Explore Brand Stories</span>
                  <span className="relative z-10 ml-2 text-sm leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C4B5FD] group-hover:text-white">
                    →
                  </span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
