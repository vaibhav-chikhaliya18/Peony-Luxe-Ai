import { motion } from 'framer-motion';

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="bg-[#070709] py-20 sm:py-28 lg:py-32 overflow-hidden text-left"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Kicker Badge */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#8E95A5] uppercase mb-4 sm:mb-5 select-none">
              ABOUT
            </p>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[58px] font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
              <span className="block">We Create What</span>
              <span className="block mt-1 sm:mt-1.5">Doesn’t Exist Yet.</span>
            </h2>

            {/* Paragraph Descriptions */}
            <div className="space-y-4 sm:space-y-5 text-[#9CA3AF] text-sm sm:text-base leading-[1.7] font-normal max-w-xl mb-12 sm:mb-14">
              <p>
                Peony Luxe AI is a premium AI creative studio at the intersection of
                imagination and technology. We specialize in crafting visuals that push
                beyond the boundaries of traditional production.
              </p>
              <p>
                From fashion campaigns to cinematic AI films, our work is rooted in creative
                vision and executed with precision. We partner with brands that dare to
                imagine differently.
              </p>
            </div>

            {/* Stats Row with Luxury Hover Effects matching reference */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 pt-2 -ml-3 flex-wrap sm:flex-nowrap">
              {[
                {
                  value: '200+',
                  label: 'Projects Delivered',
                  color: '#4F78FE',
                  glow: 'rgba(79, 120, 254, 0.7)',
                },
                {
                  value: '50+',
                  label: 'Brand Partners',
                  color: '#6286FE',
                  glow: 'rgba(98, 134, 254, 0.7)',
                },
                {
                  value: '100%',
                  label: 'Custom Work',
                  color: '#7B68F5',
                  glow: 'rgba(123, 104, 245, 0.7)',
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group relative px-4 py-3 rounded-2xl border border-transparent hover:border-white/10 hover:bg-[#0E1018]/80 hover:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.8),0_0_20px_rgba(123,104,245,0.25)] cursor-default select-none overflow-hidden"
                >
                  {/* Subtle Top Radial Glow inside Card on Hover */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full blur-xl opacity-0 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${stat.glow} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Shimmer Light Reflection Sweep on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

                  {/* Stat Number with Neon Hover Glow */}
                  <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-[#4F78FE] transition-all duration-300 group-hover:scale-105 origin-left">
                    <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-[#A78BFA] group-hover:drop-shadow-[0_0_18px_rgba(137,103,253,0.7)]">
                      {stat.value}
                    </span>
                  </span>

                  {/* Stat Label */}
                  <span className="block text-xs sm:text-[13px] text-[#8E95A5] group-hover:text-white mt-1.5 font-normal transition-colors duration-300">
                    {stat.label}
                  </span>

                  {/* Expanding Colored Accent Bar */}
                  <div
                    className="mt-2.5 h-[2px] w-0 group-hover:w-8 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: stat.color,
                      boxShadow: `0 0 10px ${stat.glow}`,
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Luxury Lifestyle Flatlay Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#101217] border border-white/[0.08] shadow-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] group">
              <img
                src="/images/projects/brand-story.jpg"
                alt="Luxury Creative Studio Flatlay"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
