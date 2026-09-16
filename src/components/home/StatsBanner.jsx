import { motion } from 'framer-motion';
import { Layers, Zap, Award, Clock } from 'lucide-react';

const stats = [
  {
    id: 'disciplines',
    icon: Layers,
    value: '15+',
    label: 'DISCIPLINES',
    accentColor: '#6286FE',
  },
  {
    id: 'faster',
    icon: Zap,
    value: '10x',
    label: 'FASTER',
    accentColor: '#8967FD',
  },
  {
    id: 'commercial',
    icon: Award,
    value: '4K',
    label: 'COMMERCIAL',
    accentColor: '#A78BFA',
  },
  {
    id: 'turnaround',
    icon: Clock,
    value: '48h',
    label: 'TURNAROUND',
    accentColor: '#D770FF',
  },
];

export default function StatsBanner() {
  return (
    <section className="relative z-20 py-8 sm:py-12 bg-[#070709] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] sm:rounded-[32px] p-[1px] overflow-hidden"
        >
          {/* Subtle Iridescent Outer Border Gradient */}
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-[#6286FE]/20 via-[#8967FD]/30 to-[#D770FF]/20" />

          {/* Inner Unified Glass Capsule Container */}
          <div className="relative rounded-[23px] sm:rounded-[31px] bg-[#0C0E14]/90 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
            
            {/* Top Accent Gradient Shimmer Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8967FD]/50 to-transparent" />

            {/* 4 Stat Boxes Grid Layout with Dividers */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 sm:divide-x divide-white/[0.07]">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative flex flex-col items-center justify-center text-center p-6 sm:p-8 lg:p-9 transition-all duration-300 cursor-default select-none overflow-hidden"
                  >
                    {/* Hover Ambient Radial Glow Spotlight */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#8967FD]/[0.14] via-[#6286FE]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Shimmer Light Reflection on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                    {/* Interactive Icon Box */}
                    <div className="relative z-10 mb-3 sm:mb-4 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#8967FD]/60 group-hover:bg-[#8967FD]/20 group-hover:shadow-[0_0_20px_rgba(137,103,253,0.5)] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5 text-[#6286FE] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(98,134,254,0.4)]" />
                      </div>
                    </div>

                    {/* Big Value Number */}
                    <div className="relative z-10">
                      <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-none tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#C4B5FD] group-hover:to-[#6286FE] transition-all duration-300 block">
                        {stat.value}
                      </span>
                    </div>

                    {/* Label */}
                    <div className="relative z-10 mt-2 sm:mt-2.5">
                      <span className="block text-[11px] sm:text-xs font-mono font-semibold tracking-[0.22em] text-[#8E95A5] group-hover:text-white transition-colors duration-300 uppercase">
                        {stat.label}
                      </span>
                    </div>

                    {/* Bottom Micro Indicator Glow on Hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-[#8967FD] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
