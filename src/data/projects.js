export const projects = [
  {
    id: '1',
    slug: 'noir-fashion-campaign',
    title: 'Noir Fashion Campaign',
    category: 'AI Image',
    description: 'An avant-garde fashion campaign blending bold streetwear aesthetics with hyper-realistic AI editorial photography.',
    cover: '/images/projects/client-1-1.jpg',
    services: ['AI Fashion Editorial', 'Creative Direction', 'Color Grading'],
    year: '2026',
    featured: true,
    client: 'Noir Paris',
    overview: 'Noir Fashion Campaign captures high-contrast editorial elegance with generative precision, producing bespoke haute-couture assets.',
    deliverables: ['16 Key Editorial Portraits', 'Social Launch Series', 'High-Res Print Stills'],
    creativeDirection: 'Warm textured studio walls meeting cool sunglasses reflections and delicate jewelry detailing.'
  },
  {
    id: '2',
    slug: 'cosmetic-ai-motion',
    title: 'AI Fashion Video',
    category: 'AI Video',
    description: 'Dynamic commercial fluid physics and product motion synthesis designed for high-end beauty brands.',
    cover: '/images/projects/client-3-poster.jpg',
    services: ['AI Video Production', 'Motion Synthesis', 'Color Finishing'],
    year: '2026',
    featured: true,
    client: 'Luxe Botanicals',
    overview: 'Fluid dynamics simulation rendered via generative neural tools to bring cosmetic product textures alive.',
    deliverables: ['Product Reel 4K', 'Macro Texture Stills', 'Social Cutdowns'],
    creativeDirection: 'Sculptural cream waves, dewy lighting, and warm minimalist studio aesthetic.'
  },
  {
    id: '3',
    slug: 'product-branding',
    title: 'Fashion Catalogue',
    category: 'Image Catalogue',
    description: 'Minimalist industrial product visual identity for next-generation smart accessories.',
    cover: '/images/projects/cateloug 1.png',
    services: ['3D AI Simulation', 'Product Visuals', 'Brand Identity'],
    year: '2026',
    featured: true,
    client: 'Chronos Lab',
    overview: 'Clean studio lighting and ultra-tactile matte finishes engineered to showcase minimalist hardware ergonomics.',
    deliverables: ['Hardware Concept Renders', 'Studio Product Stills', 'Interactive Brand Showcase'],
    creativeDirection: 'Monochrome precision, soft directional shadowing, and pure industrial simplicity.'
  },
  {
    id: '4',
    slug: 'ai-short-film',
    title: 'AI Short Film',
    category: 'AI Film',
    description: 'Behind the scenes and on-set narrative drama engineered through generative cinematic cinematography.',
    cover: '/images/projects/ai-short-film.jpg',
    services: ['AI Films', 'Cinematic Motion', 'Sound Design'],
    year: '2026',
    featured: true,
    client: 'Velvet Horizon Studios',
    overview: 'Exploring the boundary between traditional film sets and AI synthetic production environments.',
    deliverables: ['Cinematic Short Film', 'Director Cut Teaser', 'Atmospheric Score'],
    creativeDirection: 'Anamorphic film flares, textural film grain, and authentic clapperboard set lighting.'
  },
  {
    id: '5',
    slug: 'brand-story',
    title: 'Brand Story',
    category: 'Brand Story',
    description: 'Luxury lifestyle visual narrative weaving timeless personal accessories into modern brand storytelling.',
    cover: '/images/projects/client 4 (4).jpg',
    services: ['Brand Stories', 'Luxury Flatlay', 'Visual Identity'],
    year: '2026',
    featured: true,
    client: 'Maison Luxe',
    overview: 'Curating modern luxury essentials into high-impact visual compositions designed to elevate brand authority.',
    deliverables: ['Luxury Campaign Suite', 'Editorial Social Assets', 'Brand Visual Guidelines'],
    creativeDirection: 'Carrara marble surfaces, polished gold accents, and deep obsidian leather textures.'
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug);
};

export const getFeaturedProjects = () => {
  return projects.filter((p) => p.featured);
};
