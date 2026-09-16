import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Idea',
    description: 'Align on your vision and goals',
    accent: '#6286FE',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Creative strategy and direction',
    accent: '#7B68F5',
  },
  {
    number: '03',
    title: 'Visual Direction',
    description: 'Moodboards and style references',
    accent: '#8967FD',
  },
  {
    number: '04',
    title: 'Creation',
    description: 'AI production with human oversight',
    accent: '#A78BFA',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description: 'Polished, ready-to-deploy assets',
    accent: '#D770FF',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#070709] py-20 sm:py-28 lg:py-32 overflow-hidden text-center relative">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-[#6286FE]/[0.03] via-[#8967FD]/[0.05] to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Header matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-4 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8967FD] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.28em] text-[#8E95A5] uppercase">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-heading font-extrabold text-white tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-white via-white/95 to-[#A78BFA] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </motion.div>

        {/* Desktop Process Timeline with Best-in-Class Hover Effects */}
        <div className="hidden md:block relative pt-4 pb-8">
          {/* Continuous Gradient Track Line running through node centers with glow */}
          <div
            className="absolute top-[32px] left-[20px] right-[20px] h-[2px] -translate-y-1/2 z-0 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.35)]"
            style={{
              background:
                'linear-gradient(90deg, #5B7CEE 0%, #7B68F5 35%, #9B63F6 70%, #B867FE 100%)',
            }}
          />

          {/* 5 Process Nodes Grid with Interactive Luxury Hover */}
          <div className="grid grid-cols-5 gap-4 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col items-start text-left cursor-default select-none"
              >
                {/* 1. Node Bullet Circle on the Line with Interactive Glow Aura */}
                <div className="relative mb-6">
                  {/* Expanding Neon Radar Aura on Hover */}
                  <div
                    className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${step.accent}88 0%, transparent 70%)`,
                    }}
                  />

                  {/* Outer Node Circle */}
                  <div className="relative w-8 h-8 rounded-full bg-[#10121A] border border-white/20 group-hover:border-white/60 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(137,103,253,0.8)] z-10">
                    {/* Inner Glowing Center Dot */}
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:scale-125 shadow-sm"
                      style={{
                        backgroundColor: step.accent,
                        boxShadow: `0 0 10px ${step.accent}`,
                      }}
                    />
                  </div>
                </div>

                {/* 2. Step Details Card with Glass Shimmer & Lift on Hover */}
                <div className="relative w-full rounded-2xl p-4 sm:p-5 transition-all duration-300 -ml-4 border border-transparent group-hover:border-white/10 group-hover:bg-[#0E1018]/90 group-hover:backdrop-blur-md group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(137,103,253,0.25)] overflow-hidden">
                  {/* Subtle Top Radial Glow inside Card on Hover */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${step.accent}44 0%, transparent 70%)`,
                    }}
                  />

                  {/* Shimmer Light Reflection Sweep on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />

                  {/* Step Monospace Number */}
                  <span
                    className="block text-[11px] font-mono tracking-[0.24em] font-semibold text-zinc-500 group-hover:text-white transition-colors duration-300 mb-1 select-none"
                    style={{ color: undefined }}
                  >
                    STEP {step.number}
                  </span>

                  {/* Title with Gradient Sheen on Hover */}
                  <h3 className="font-heading font-bold text-white text-base sm:text-[17px] mb-2 tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-[#C4B5FD]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8E95A5] group-hover:text-zinc-300 text-xs sm:text-[13.5px] leading-relaxed font-normal transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Bottom Colored Accent Line on Hover */}
                  <div
                    className="mt-4 h-[2px] w-0 group-hover:w-8 rounded-full transition-all duration-300"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Process Timeline with Matching Hover Effects */}
        <div className="block md:hidden relative pl-6 border-l-2 border-[#7B68F5]/40 ml-3 space-y-8 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Mobile Node Circle on vertical line */}
              <div className="absolute -left-[33px] top-1 w-6 h-6 rounded-full bg-[#10121A] border border-white/20 group-hover:border-white/60 flex items-center justify-center transition-all duration-300 group-hover:scale-125 shadow-md">
                <span
                  className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: step.accent,
                    boxShadow: `0 0 8px ${step.accent}`,
                  }}
                />
              </div>

              {/* Mobile Content */}
              <div className="p-3 rounded-xl transition-all duration-300 group-hover:bg-white/[0.03]">
                <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase mb-0.5">
                  STEP {step.number}
                </span>
                <h3 className="font-heading font-bold text-white text-base mb-1 group-hover:text-[#A78BFA] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#8E95A5] group-hover:text-zinc-300 text-xs sm:text-sm leading-relaxed transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
