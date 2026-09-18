import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const filterCategories = [
  'All',
  'AI Image',
  'AI Video',
  'Image Catalogue',
  'AI Film',
  'Brand Story',
];

const portfolioItems = [
  {
    id: '1',
    slug: 'noir-fashion-campaign',
    title: 'Noir Fashion Campaign',
    category: 'AI Image',
    categories: ['AI Image', 'Image Catalogue'],
    column: 1,
    image: '/images/projects/client-1-1.jpg',
    aspect: 'tall', // spans full left column in 'All'
  },
  {
    id: '2',
    slug: 'ai-short-film',
    title: 'AI Short Film',
    category: 'AI Film',
    categories: ['AI Film', 'AI Video'],
    column: 2,
    image: '/images/projects/ai-short-film.jpg',
    aspect: 'landscape',
  },
  {
    id: '3',
    slug: 'brand-stories',
    title: 'Fashion Catalogue Editorial',
    category: 'Brand Story',
    categories: ['Brand Story', 'Image Catalogue'],
    column: 2,
    image: '/images/projects/client-2-2.jpg',
    aspect: 'portrait',
  },
  {
    id: '4',
    slug: 'brand-story',
    title: 'Brand Story Flatlay',
    category: 'Brand Story',
    categories: ['Brand Story', 'Image Catalogue'],
    column: 3,
    image: '/images/projects/client 4 (4).jpg',
    aspect: 'landscape',
  },
  {
    id: '5',
    slug: 'cosmetic-ai-motion',
    title: 'AI Fashion Video',
    category: 'AI Video',
    categories: ['AI Video'],
    image: '/images/projects/client-3-poster.jpg',
    aspect: 'landscape',
  },
  {
    id: '6',
    slug: 'product-branding',
    title: 'Fashion Catalogue',
    category: 'AI Image',
    categories: ['AI Image', 'Image Catalogue'],
    column: 3,
    image: '/images/projects/cateloug 1.png',
    aspect: 'landscape',
  },
];

export default function PortfolioPreview() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter items based on active category
  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems.filter((item) => item.column !== undefined) // Top 5 for 3-column 'All' layout
      : portfolioItems.filter((item) => {
          const active = activeCategory.toLowerCase();
          const itemCat = item.category.toLowerCase();
          if (itemCat === active) return true;
          if (item.categories && item.categories.some((c) => c.toLowerCase() === active)) return true;
          if (active === 'ai video' && (itemCat.includes('video') || itemCat.includes('film'))) return true;
          if (active === 'ai film' && (itemCat.includes('film') || item.slug === 'ai-short-film')) return true;
          if (active === 'image catalogue' && (itemCat.includes('catalogue') || (item.categories && item.categories.some((c) => c.toLowerCase().includes('catalogue'))))) return true;
          return false;
        });

  return (
    <section id="our-work" className="bg-[#070709] py-16 sm:py-24 text-left scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-7 sm:mb-8 text-left">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#8E95A5] uppercase mb-3 select-none">
            PORTFOLIO
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-heading font-extrabold text-white tracking-tight">
            Our Work
          </h2>
        </div>

        {/* Filter Pills Row with Luxury Hover & Sliding Transition */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap mb-10 sm:mb-12">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`group relative px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-300 cursor-pointer select-none overflow-hidden ${
                  isActive
                    ? 'text-white font-semibold shadow-lg shadow-[#8A5EFF]/30'
                    : 'text-[#9DA3AF] hover:text-white border border-white/10 hover:border-[#8967FD]/60 hover:bg-[#121422]/90 hover:shadow-[0_0_20px_rgba(137,103,253,0.35),0_4px_12px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Active Animated Gradient Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#6286FE] via-[#7B68F5] to-[#A05CFF] rounded-full shadow-[0_0_22px_rgba(123,104,245,0.5)] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Inactive Hover Internal Light Shimmer Reflection */}
                {!isActive && (
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />
                )}

                {/* Button Label */}
                <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-200">
                  {cat}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Gallery Container */}
        <AnimatePresence mode="wait">
          {activeCategory === 'All' ? (
            /* 'All' 3-Column Editorial Grid Layout */
            <motion.div
              key="all-portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start"
            >
              {/* Column 1: Tall Card */}
              <div className="space-y-5 lg:space-y-6">
                {filteredItems
                  .filter((item) => item.column === 1)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6 }}
                      className="rounded-2xl overflow-hidden bg-[#101217] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group min-h-[500px] md:min-h-[560px] relative cursor-default select-none"
                    >
                      <div className="w-full h-full relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Column 2: 2 Stacked Cards (AI Short Film & Brand Stories Model) */}
              <div className="space-y-5 lg:space-y-6">
                {filteredItems
                  .filter((item) => item.column === 2)
                  .map((item, idx) => {
                    const isAiFilm = item.category === 'AI Films' || item.slug === 'ai-short-film';
                    return (
                      <motion.div
                        key={item.id}
                        onClick={() => isAiFilm && navigate('/ai-films')}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`rounded-2xl overflow-hidden bg-[#101217] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative select-none ${
                          isAiFilm ? 'cursor-pointer hover:border-[#8967FD]/60' : 'cursor-default'
                        } ${
                          item.aspect === 'landscape' ? 'aspect-[16/10]' : 'aspect-[4/5]'
                        }`}
                      >
                        <div className="w-full h-full relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
              </div>

              {/* Column 3: 2 Stacked Cards (Brand Story Flatlay & Product Branding) */}
              <div className="space-y-5 lg:space-y-6">
                {filteredItems
                  .filter((item) => item.column === 3)
                  .map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="rounded-2xl overflow-hidden bg-[#101217] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative aspect-[16/11] cursor-default select-none"
                    >
                      <div className="w-full h-full relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ) : (
            /* Filtered Category Grid: Items STRICTLY start from the LEFT (Column 1) */
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 items-start justify-start"
            >
              {filteredItems.map((item, idx) => {
                const isAiFilm = item.category === 'AI Films' || item.slug === 'ai-short-film';
                return (
                  <motion.div
                    key={item.id}
                    onClick={() => isAiFilm && navigate('/ai-films')}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className={`rounded-2xl overflow-hidden bg-[#101217] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative aspect-[16/11] select-none ${
                      isAiFilm ? 'cursor-pointer hover:border-[#8967FD]/60' : 'cursor-default'
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      />
                      {/* Subtle luxury caption bar on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/90 via-[#070709]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left pointer-events-none">
                        <span className="text-[10px] font-mono tracking-wider text-[#A78BFA] uppercase mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-heading font-bold text-white text-base sm:text-lg">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


