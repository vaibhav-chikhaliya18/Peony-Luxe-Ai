import { motion } from 'framer-motion';
import { Sparkles, Video, Layers, Film, BookOpen } from 'lucide-react';

const servicesData = [
  {
    id: 'ai-image-creation',
    number: '01',
    title: 'AI Image Creation',
    description:
      'Photorealistic editorial and conceptual imagery crafted with cutting-edge AI. Indistinguishable from reality — and far beyond it.',
    icon: Sparkles,
    deliverables: [
      'High-Resolution Key Visuals',
      'Editorial & Fashion Concepts',
      'Product Visualization',
      'Art Direction Guidelines',
    ],
  },
  {
    id: 'ai-video-production',
    number: '02',
    title: 'AI Video Production',
    description:
      'Cinematic AI video for campaigns, social and commercial use. Motion that communicates what static imagery cannot.',
    icon: Video,
    deliverables: [
      'Commercial Video Production',
      'Cinematic Motion Graphics',
      'Prompt-Engineered VFX',
      '4K Upscaling & Post-Grading',
    ],
  },
  {
    id: 'image-catalogue',
    number: '03',
    title: 'Image Catalogue',
    description:
      'Comprehensive high-resolution visual lookbooks, product catalogues, and brand series crafted with aesthetic precision.',
    icon: Layers,
    deliverables: [
      'Product Lookbook Suites',
      'Editorial Image Catalogues',
      'Consistent Lighting Presets',
      'High-Resolution Print Renders',
    ],
  },
  {
    id: 'ai-films',
    number: '04',
    title: 'AI Films',
    description:
      'Short-form AI films with narrative depth, visual richness and cinematic production values. Stories that feel completely real.',
    icon: Film,
    deliverables: [
      'Short Film Directing & Production',
      'Worldbuilding & Consistency',
      'Bespoke AI Soundtracks & Foley',
      'Festival-Grade Color Finishing',
    ],
  },
  {
    id: 'brand-stories',
    number: '05',
    title: 'Brand Stories',
    description:
      'We translate brand identity into visual narratives that forge lasting emotional connections with audiences.',
    icon: BookOpen,
    deliverables: [
      'Brand Identity Narratives',
      'Digital Lookbooks & Mood Films',
      'Multi-Platform Campaign Strategy',
      'Interactive Brand Experiences',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#070709] py-16 sm:py-24 text-left scroll-mt-20 relative overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#6286FE]/[0.03] via-[#8967FD]/[0.05] to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8967FD] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.26em] text-[#8E95A5] uppercase">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-heading font-extrabold text-white tracking-tight">
            Our Services
          </h2>
        </div>

        {/* 5 Cards Grid Layout with Best-in-Class Luxury Hover Effects (Informational Only - No Page Navigation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 items-stretch">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full flex flex-col"
              >
                <div className="group relative h-full rounded-[22px] p-[1px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent hover:from-[#6286FE] hover:via-[#8967FD] hover:to-[#D770FF] transition-all duration-500 hover:-translate-y-1.5 flex flex-col select-none">
                  {/* 1. Atmospheric Ambient Violet/Indigo Glow Behind Card on Hover */}
                  <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 pointer-events-none -z-10" />

                  {/* 2. Card Inner Dark Surface in Natural Flow */}
                  <div className="relative w-full h-full rounded-[21px] bg-[#0B0D13] group-hover:bg-[#0E1018]/95 backdrop-blur-xl p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-lg group-hover:shadow-[0_20px_40px_-15px_rgba(137,103,253,0.35)]">
                    
                    {/* Top Accent Radial Spotlight Glow inside the card */}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-b from-[#8967FD]/25 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Top Subtle Hairline Gradient Edge */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#C4B5FD]/80 to-transparent transition-all duration-500" />

                    {/* Shimmer Light Reflection Sweep diagonally across card */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />

                    {/* Top Section: Icon, Number, Title, Description */}
                    <div className="relative z-10 mb-4">
                      {/* Header Row: Icon Badge & Discipline Monospace Number */}
                      <div className="flex items-center justify-between mb-4 xl:mb-5">
                        {/* Glowing Icon Container */}
                        <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#8967FD]/60 group-hover:bg-gradient-to-tr group-hover:from-[#6286FE]/20 group-hover:to-[#8967FD]/30 group-hover:shadow-[0_0_24px_rgba(137,103,253,0.45)] flex items-center justify-center text-zinc-400 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-zinc-300 group-hover:text-white" />
                        </div>

                        {/* Discipline Number */}
                        <span className="text-[11px] font-mono tracking-[0.24em] text-zinc-500 group-hover:text-[#A78BFA] transition-colors duration-300">
                          {service.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-white text-base sm:text-[18px] lg:text-[17px] xl:text-[19px] tracking-tight mb-2.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-[#C4B5FD] transition-all duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#8F95A5] group-hover:text-zinc-300 text-xs sm:text-[13px] leading-[1.65] font-normal transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Deliverables / Scope List */}
                    {service.deliverables && (
                      <div className="relative z-10 pt-4 border-t border-white/[0.08] group-hover:border-white/15 transition-colors duration-300 mt-auto">
                        <ul className="space-y-2">
                          {service.deliverables.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-[11px] sm:text-xs text-[#8F95A5] group-hover:text-zinc-200 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8967FD] shrink-0 mt-1.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
