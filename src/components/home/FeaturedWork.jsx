import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    id: 'noir-fashion-campaign',
    title: 'Noir Fashion Campaign',
    category: 'FASHION & EDITORIAL',
    image: '/images/projects/noir-fashion.jpg',
    link: '/work',
    containerClass: 'md:col-span-1 md:row-span-2 min-h-[460px] md:min-h-full',
  },
  {
    id: 'product-branding',
    title: 'Product Branding',
    category: '3D & VISUAL IDENTITY',
    image: '/images/projects/product-branding.jpg',
    link: '/work',
    containerClass: 'aspect-[16/10] sm:aspect-[16/9.5]',
  },
  {
    id: 'ai-commercial',
    title: 'AI Commercial',
    category: 'COMMERCIAL ADVERTISING',
    image: '/images/projects/ai-commercial.jpg',
    link: '/work',
    containerClass: 'aspect-[16/10] sm:aspect-[16/9.5]',
  },
  {
    id: 'ai-short-film',
    title: 'AI Short Film',
    category: 'CINEMATIC NARRATIVE',
    image: '/images/projects/ai-short-film.jpg',
    link: '/work',
    containerClass: 'aspect-[16/10] sm:aspect-[16/9.5]',
  },
  {
    id: 'brand-story',
    title: 'Brand Story',
    category: 'BRAND STORYTELLING',
    image: '/images/projects/brand-story.jpg',
    link: '/work',
    containerClass: 'aspect-[16/10] sm:aspect-[16/9.5]',
  },
];

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="bg-[#070709] py-16 sm:py-24 text-left relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[450px] bg-gradient-to-bl from-[#6286FE]/[0.03] via-[#8967FD]/[0.04] to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8967FD] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.26em] text-[#8E95A5] uppercase">
              PORTFOLIO HIGHLIGHTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-heading font-extrabold text-white tracking-tight">
            Featured Work
          </h2>
        </div>

        {/* 3-Column Bento Grid Layout with Best-in-Class Luxury Hover Effects & Explore Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`${project.containerClass} relative rounded-[22px] p-[1px] group transition-all duration-500 hover:-translate-y-2`}
            >
              {/* 1. Atmospheric Ambient Violet Aura Behind Card on Hover */}
              <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 pointer-events-none -z-10" />

              {/* 2. Iridescent Hairline Border Frame */}
              <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent group-hover:from-[#6286FE] group-hover:via-[#8967FD] group-hover:to-[#D770FF] transition-all duration-500 p-[1px]">
                
                {/* 3. Card Inner Dark Surface */}
                <div className="relative w-full h-full rounded-[21px] bg-[#0E1017] overflow-hidden">
                  <Link to={project.link} className="block w-full h-full relative">
                    {/* Background Media with Smooth Zoom & Pan on Hover */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Vignette & Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/95 via-[#070709]/40 to-transparent group-hover:from-[#070709]/90 transition-colors duration-500 pointer-events-none" />

                    {/* Top Subtle Hairline Gradient Edge */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-[#C4B5FD]/70 to-transparent transition-all duration-500" />

                    {/* Shimmer Light Reflection Sweep diagonally across card */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />

                    {/* Bottom Card Content with Explore Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.2em] text-[#A78BFA] uppercase select-none">
                          {project.category}
                        </p>
                        <h3 className="font-heading font-bold text-white text-base sm:text-lg lg:text-xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-[#C4B5FD] transition-all duration-300">
                          {project.title}
                        </h3>
                      </div>

                      {/* Explore Button */}
                      <div className="flex-shrink-0">
                        <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.08] group-hover:bg-[#8967FD] border border-white/15 group-hover:border-[#8967FD] text-xs sm:text-[13px] font-medium text-white transition-all duration-300 flex items-center gap-1.5 shadow-sm group-hover:shadow-[0_0_18px_rgba(137,103,253,0.6)] group-hover:scale-105">
                          <span>Explore</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
