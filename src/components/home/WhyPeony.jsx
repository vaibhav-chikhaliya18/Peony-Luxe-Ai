import { motion } from 'framer-motion';

const reasons = [
  {
    number: '01',
    title: 'Creative Direction',
  },
  {
    number: '02',
    title: 'Premium Visual Quality',
  },
  {
    number: '03',
    title: 'Fast Production',
  },
  {
    number: '04',
    title: 'Custom Brand Solutions',
  },
  {
    number: '05',
    title: 'Consistent Visual Identity',
  },
  {
    number: '06',
    title: 'Image-to-Film Workflow',
  },
];

export default function WhyPeony() {
  return (
    <section id="why-peony" className="bg-[#070709] py-20 sm:py-28 lg:py-32 text-left relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[450px] bg-gradient-to-bl from-[#8967FD]/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title and Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-4 sm:mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8967FD] animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.26em] text-[#8E95A5] uppercase select-none">
                WHY CHOOSE US
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
              <span className="block">Built for Brands</span>
              <span className="block mt-1 sm:mt-1.5">That Want More.</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-[#9CA3AF] text-sm sm:text-base leading-[1.7] font-normal max-w-md">
              We combine creative vision with technical mastery to deliver visuals that
              transcend ordinary production.
            </p>
          </motion.div>

          {/* Right Column: Numbered Items List (Clean Non-Clickable Design with Luxury Hover Effect) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col pl-0 lg:pl-6 xl:pl-10"
          >
            <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              {reasons.map((item) => (
                <div
                  key={item.number}
                  className="group relative flex items-center py-5 sm:py-6 px-3 sm:px-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-white/[0.03] hover:via-[#8967FD]/[0.05] hover:to-transparent cursor-default select-none overflow-hidden"
                >
                  {/* Left Edge Accent Indicator Bar on Hover */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-3/5 rounded-full bg-gradient-to-b from-[#6286FE] via-[#8967FD] to-[#D770FF] transition-all duration-300 opacity-0 group-hover:opacity-100" />

                  {/* Shimmer Light Reflection Sweep on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none rounded-xl" />

                  <div className="relative z-10 flex items-center gap-3 sm:gap-4 w-full">
                    {/* Glowing Bullet Dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#8967FD] group-hover:shadow-[0_0_8px_rgba(137,103,253,0.8)] transition-all duration-300 flex-shrink-0" />

                    {/* Monospace Number */}
                    <span className="w-10 sm:w-12 font-mono text-xs sm:text-sm font-medium text-[#6B7280] group-hover:text-[#A78BFA] transition-colors duration-300 select-none flex-shrink-0">
                      {item.number}
                    </span>

                    {/* Title with Subtle Right Shift and Gradient Sheen on Hover */}
                    <span className="font-heading font-bold text-white text-base sm:text-[17px] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-[#C4B5FD] transition-all duration-300 group-hover:translate-x-1.5">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
