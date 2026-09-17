import { useState } from 'react';
import { motion } from 'framer-motion';
import FeaturedWorkModal from './FeaturedWorkModal';
import ShootDetailModal from './ShootDetailModal';

const featuredProjects = [
  {
    id: 'noir-fashion-campaign',
    title: 'Noir Fashion Campaign',
    category: 'AI IMAGE',
    disciplineBadge: 'DISCIPLINE 01 • FASHION & EDITORIAL',
    modalTitle: 'AI Photo Modeling — High-Fashion Photo Showcase',
    slideText: 'FEATURED PRODUCTION DEMOS',
    image: '/images/projects/client-1-1.jpg',
    link: '/work',
    containerClass: 'md:col-span-1 md:row-span-2 min-h-[460px] md:min-h-full',
    demos: [
      {
        title: 'Demo 01',
        shootTitle: 'Heritage Ethnic Fashion Shoot',
        shootSubtitle: 'High-Fashion Virtual Model Staging',
        tag: 'ETHNIC WEAR',
        turnaround: '24 Hours',
        image: '/images/projects/client-1-1.jpg',
        link: '/work/noir-fashion-campaign',
        strategy: 'Virtual model staging preserves 100% of authentic fabric embroidery while constructing editorial lighting that rivals Vogue campaigns.',
        deliverables: ['Flat Photo', 'Model Synthesis', 'Texture Preservation', 'Studio Staging', '4K Output'],
        metric: '95% cost reduction vs physical shoot',
        gallery: [
          { label: 'Image 1', src: '/images/projects/client-1-1.jpg' },
          { label: 'Image 2', src: '/images/projects/client-1-2.jpg' },
          { label: 'Image 3', src: '/images/projects/client-1-3.jpg' },
          { label: 'Image 4', src: '/images/projects/client-1-4.jpg' },
        ],
      },
      {
        title: 'Demo 02',
        shootTitle: 'Haute Couture Studio Editorial',
        shootSubtitle: 'Avant-Garde Architectural Silhouette Staging',
        tag: 'HAUTE COUTURE',
        subCategory: 'Ai Photo Modeling',
        turnaround: '24 Hours',
        image: '/images/projects/client-2-1.jpg',
        link: '/work',
        strategy: 'Geometric refraction and bold color science synthesized without expensive physical stage builds or lengthy post-production.',
        deliverables: ['Haute Couture', 'Geometric Staging', 'Color Science', 'High-Res Stills', 'Lookbook Suite'],
        metric: '10x faster turnaround vs traditional set',
        gallery: [
          { label: 'Image 1', src: '/images/projects/client-2-1.jpg' },
          { label: 'Image 2', src: '/images/projects/client-2-2.jpg' },
          { label: 'Image 3', src: '/images/projects/client-2-3.jpg' },
          { label: 'Image 4', src: '/images/projects/client-2-4.jpg' },
        ],
      },
    ],
  },
  {
    id: 'cosmetic-ai-motion',
    title: 'AI Fashion Video',
    category: 'AI VIDEO',
    disciplineBadge: 'DISCIPLINE 02 • AI VIDEO PRODUCTION',
    modalTitle: 'AI Video Synthesis — Commercial & Motion Showcase',
    slideText: 'FEATURED PRODUCTION DEMOS',
    image: '/images/projects/client-3-poster.jpg',
    video: '/videos/projects/client-3.mp4',
    link: '/work',
    containerClass: 'aspect-[16/10] sm:aspect-[16/9.5]',
    demos: [
      {
        title: 'Demo 01',
        shootTitle: 'AI Luxury Fashion Video Showcase',
        shootSubtitle: 'Couture Motion Synthesis & 4K Studio Cinematic Flow',
        tag: 'LUXURY FASHION',
        subCategory: 'Ai Video Modeling',
        turnaround: '36 Hours',
        image: '/images/projects/client-3-poster.jpg',
        video: '/videos/projects/client-3.mp4',
        isVideo: true,
        badgeText: '4K Commercial Video',
        link: '/work/cosmetic-ai-motion',
        strategy: '4K neural video models simulate real fabric drapery, fluid lighting reflection, and luxury couture motion, delivering full commercial campaigns in 36 hours.',
        deliverables: [
          'Couture Motion Synthesis',
          'Cinematic Lighting Flow',
          'Studio Jewelry & Fabric Detailing',
          'Camera Path Direction',
          'Color Grading',
          '4K Broadcast Mastering'
        ],
        workflow: [
          {
            step: 'Step 01 • Raw Asset Ingestion',
            desc: 'Extracted precise RGB color gamuts and fabric textures from client collections.'
          },
          {
            step: 'Step 02 • Fluid & Light Physics',
            desc: 'Simulated ambient warm studio illumination and delicate jewelry reflections.'
          },
          {
            step: 'Step 03 • 4K Motion Synthesis',
            desc: 'Synthesized cinematic camera orbital flow and 4K commercial mastering.'
          }
        ],
        metric: '94% cost reduction vs traditional physical shoot',
        gallery: [
          { label: 'Video', type: 'video', video: '/videos/projects/client-3.mp4', src: '/images/projects/client-3-poster.jpg' },
          { label: 'Poster', type: 'image', src: '/images/projects/client-3-poster.jpg' },
          { label: 'Image 2', type: 'image', src: '/images/projects/client-3-frame-2.jpg' },
          { label: 'Image 3', type: 'image', src: '/images/projects/client-3-frame-3.jpg' },
        ],
      },
      {
        title: 'Demo 02',
        shootTitle: 'Aura Luminescence Couture Fashion Reveal',
        shootSubtitle: 'Embroidery Motion Synthesis & Palatial Studio Staging',
        tag: 'LUXURY COUTURE',
        subCategory: 'Ai Video Modeling',
        turnaround: '36 Hours',
        image: '/images/projects/client-4-poster.jpg',
        video: '/videos/projects/client-4.mp4',
        isVideo: true,
        badgeText: '4K Commercial Video',
        link: '/work',
        strategy: '4K neural video models simulate delicate embroidery textures, luxury fabric flow, and soft palatial daylighting, delivering full commercial motion campaigns in 36 hours.',
        deliverables: [
          'Fabric Texture Synthesis',
          'Embroidery Macro Staging',
          'Neural Motion Synthesis',
          'Camera Path Direction',
          'Soft Daylighting Flow',
          '4K Commercial Mastering'
        ],
        workflow: [
          {
            step: 'Step 01 • Raw Asset Ingestion',
            desc: 'Extracted high-fidelity embroidery details, silk luster, and garment silhouette.'
          },
          {
            step: 'Step 02 • Fluid & Light Physics',
            desc: 'Simulated ambient natural window daylight and subtle fabric drape dynamics.'
          },
          {
            step: 'Step 03 • 4K Motion Synthesis',
            desc: 'Synthesized seamless camera motion flow and neural 4K broadcast mastering.'
          }
        ],
        metric: '94% cost reduction vs traditional physical shoot',
        gallery: [
          { label: 'Video', type: 'video', video: '/videos/projects/client-4.mp4', src: '/images/projects/client-4-poster.jpg' },
          { label: 'Image 1', type: 'image', src: '/images/projects/client-4-poster.jpg' },
          { label: 'Image 2', type: 'image', src: '/images/projects/client-4-frame-2.jpg' },
          { label: 'Image 3', type: 'image', src: '/images/projects/client-4-frame-3.jpg' },
        ],
      },
    ],
  },
  {
    id: 'product-branding',
    title: 'Product Branding',
    category: 'IMAGE CATALOGUE',
    disciplineBadge: 'DISCIPLINE 03 • IMAGE CATALOGUE',
    modalTitle: 'Image Catalogue — Luxury Lookbook & Product Series',
    slideText: 'FEATURED PRODUCTION DEMOS',
    image: '/images/projects/product-branding.jpg',
    link: '/work',
    containerClass: 'aspect-[16/10] sm:aspect-[16/9.5]',
    demos: [
      {
        title: 'Demo 01',
        shootTitle: 'Chronos Minimalist Hardware Catalogue',
        shootSubtitle: 'Studio Macro Industrial Staging',
        tag: 'PRODUCT DESIGN',
        turnaround: '24 Hours',
        image: '/images/projects/product-branding.jpg',
        link: '/work/product-branding',
        strategy: 'Tactile matte textures and directional studio shadowing synthesized with CAD sub-millimeter precision.',
        deliverables: ['Matte Texture Engine', 'Directional Shadows', 'Macro Perspectives', 'Product Lookbook', 'Print-Ready 4K'],
        metric: 'Zero physical prototyping delay & instant iterations',
        gallery: [
          { label: 'Image 1', src: '/images/projects/product-branding.jpg' },
          { label: 'Image 2', src: '/images/projects/cream-2.jpeg' },
          { label: 'Image 3', src: '/images/projects/brand-story.jpg' },
          { label: 'Image 4', src: '/images/projects/creative-campaign.jpg' },
        ],
      },
      {
        title: 'Demo 02',
        shootTitle: 'Luxe Skincare Bottle & Formulation Lookbook',
        shootSubtitle: 'Dewy Organic Reflection & Texture Staging',
        tag: 'SKINCARE & BEAUTY',
        turnaround: '24 Hours',
        image: '/images/projects/cream-2.jpeg',
        link: '/work',
        strategy: 'Dewy glass bottles, creamy textures, and pure botanical elegance engineered for omnichannel luxury e-commerce.',
        deliverables: ['Botanical Textures', 'Glass Refraction', 'Packaging Series', 'Omnichannel Suite', '4K E-Comm Renders'],
        metric: 'Complete product catalogue generated in 24 hours',
        gallery: [
          { label: 'Image 1', src: '/images/projects/cream-2.jpeg' },
          { label: 'Image 2', src: '/images/projects/product-branding.jpg' },
          { label: 'Image 3', src: '/images/projects/brand-story.jpg' },
          { label: 'Image 4', src: '/images/projects/noir-fashion.jpg' },
        ],
      },
    ],
  },
  {
    id: 'ai-short-film',
    title: 'AI Short Film',
    category: 'AI FILM',
    disciplineBadge: 'DISCIPLINE 04 • AI FILMS & CINEMA',
    modalTitle: 'Cinematic AI Films — Narrative & Directing Showcase',
    slideText: 'FEATURED PRODUCTION DEMOS',
    image: '/images/projects/ai-short-film.jpg',
    link: '/ai-films',
    containerClass: 'aspect-[16/10] sm:aspect-[16/9.5]',
    demos: [
      {
        title: 'Demo 01',
        shootTitle: 'Velvet Horizon Narrative Cinema',
        shootSubtitle: 'Generative On-Set Cinematography & Storytelling',
        tag: 'CINEMATIC NARRATIVE',
        turnaround: '72 Hours',
        image: '/images/projects/ai-short-film.jpg',
        link: '/ai-films',
        strategy: 'Translating classic film grammar and anamorphic flares into neural generation with uncompromising character consistency.',
        deliverables: ['Anamorphic Cinematography', 'Consistent Actors', 'Atmospheric Foley', 'Color Grading', 'Directors Cut'],
        metric: 'Hollywood-scale production in days, not months',
        gallery: [
          { label: 'Image 1', src: '/images/projects/ai-short-film.jpg' },
          { label: 'Image 2', src: '/images/films/clapperboard-bg.jpg' },
          { label: 'Image 3', src: '/images/ai-films-coming-soon-clean.jpg' },
          { label: 'Image 4', src: '/images/ai-films-coming-soon-fullscreen.jpg' },
        ],
      },
      {
        title: 'Demo 02',
        shootTitle: 'The Night Cafe Studio Production',
        shootSubtitle: 'Virtual Production Sets & Lighting Rigging',
        tag: 'BEHIND THE SCENES',
        turnaround: '48 Hours',
        image: '/images/films/clapperboard-bg.jpg',
        link: '/ai-films',
        strategy: 'Recreating realistic film studio atmospheres, production monitors, and clapperboard authentic set environments.',
        deliverables: ['Virtual Set Design', 'Atmospheric Particles', 'Realistic Camera Rigs', 'Lighting Continuity', 'Teaser Renders'],
        metric: '80% reduction in physical set construction budgets',
        gallery: [
          { label: 'Image 1', src: '/images/films/clapperboard-bg.jpg' },
          { label: 'Image 2', src: '/images/projects/ai-short-film.jpg' },
          { label: 'Image 3', src: '/images/ai-films-coming-soon-fullscreen.jpg' },
          { label: 'Image 4', src: '/images/ai-films-coming-soon-clean.jpg' },
        ],
      },
    ],
  },
  {
    id: 'brand-story',
    title: 'Brand Story',
    category: 'BRAND STORY',
    disciplineBadge: 'DISCIPLINE 05 • BRAND STORIES',
    modalTitle: 'Brand Worldbuilding — Visual Narrative & Identity Showcase',
    slideText: 'FEATURED PRODUCTION DEMOS',
    image: '/images/projects/brand-story.jpg',
    link: '/work',
    containerClass: 'aspect-[16/10] sm:aspect-[16/9.5]',
    demos: [
      {
        title: 'Demo 01',
        shootTitle: 'Maison Luxe Timeless Accessories Shoot',
        shootSubtitle: 'High-Impact Flatlay Narrative & Material Prestige',
        tag: 'LUXURY GOODS',
        turnaround: '24 Hours',
        image: '/images/projects/brand-story.jpg',
        link: '/work/brand-story',
        strategy: 'Weaving obsidian leather, polished jewelry, and marble reflections into an unforgettable brand identity and emotion.',
        deliverables: ['Luxury Still Life', 'Obsidian & Gold Textures', 'Campaign Storytelling', 'Brand Style Guide', 'Editorial Stills'],
        metric: '3.4x higher engagement across social campaigns',
        gallery: [
          { label: 'Image 1', src: '/images/projects/brand-story.jpg' },
          { label: 'Image 2', src: '/images/projects/brand-stories-model.jpg' },
          { label: 'Image 3', src: '/images/projects/product-branding.jpg' },
          { label: 'Image 4', src: '/images/projects/creative-campaign.jpg' },
        ],
      },
      {
        title: 'Demo 02',
        shootTitle: 'Prestige Brand Persona & Editorial World',
        shootSubtitle: 'Character Narrative & Ambient Story Worldbuilding',
        tag: 'BRAND IDENTITY',
        turnaround: '24 Hours',
        image: '/images/projects/brand-stories-model.jpg',
        link: '/brand-stories',
        strategy: 'Capturing the emotional essence and distinctive persona of luxury clientele through architectural and editorial staging.',
        deliverables: ['Persona Development', 'Architectural Staging', 'Haute Couture Series', 'Social Lookbook', 'Editorial Campaign'],
        metric: 'Seamless identity cohesion across all brand touchpoints',
        gallery: [
          { label: 'Image 1', src: '/images/projects/brand-stories-model.jpg' },
          { label: 'Image 2', src: '/images/projects/brand-story.jpg' },
          { label: 'Image 3', src: '/images/projects/noir-fashion.jpg' },
          { label: 'Image 4', src: '/images/projects/cream-2.jpeg' },
        ],
      },
    ],
  },
];

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(null);

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

        {/* 3-Column Bento Grid Layout with Best-in-Class Luxury Hover Effects & Interactive Demo Modals */}
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
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedDemoIndex(null);
                    }}
                    className="block w-full h-full relative text-left cursor-pointer focus:outline-none"
                  >
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
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 1. Category Demos Selector Modal (2 Demos) */}
      <FeaturedWorkModal
        isOpen={!!selectedProject && selectedDemoIndex === null}
        onClose={() => {
          setSelectedProject(null);
          setSelectedDemoIndex(null);
        }}
        project={selectedProject}
        onSelectDemo={(idx) => setSelectedDemoIndex(idx)}
      />

      {/* 2. Shoot Detail Modal (Matches Second Reference Image - for all categories EXCEPT AI Video) */}
      <ShootDetailModal
        isOpen={!!selectedProject && selectedDemoIndex !== null}
        onClose={() => {
          setSelectedProject(null);
          setSelectedDemoIndex(null);
        }}
        onBackToDemos={() => setSelectedDemoIndex(null)}
        project={selectedProject}
        initialDemoIndex={selectedDemoIndex || 0}
      />
    </section>
  );
}
