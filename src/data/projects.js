export const projects = [
  {
    id: '1',
    slug: 'noir-fashion-campaign',
    title: 'Noir Fashion Campaign',
    category: 'Fashion Campaign',
    description: 'An avant-garde fashion campaign blending bold streetwear aesthetics with hyper-realistic AI editorial photography.',
    cover: '/images/projects/noir-fashion.jpg',
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
    slug: 'product-branding',
    title: 'Product Branding',
    category: 'Product Design',
    description: 'Minimalist industrial product visual identity for next-generation smart accessories.',
    cover: '/images/projects/product-branding.jpg',
    services: ['3D AI Simulation', 'Product Visuals', 'Brand Identity'],
    year: '2026',
    featured: true,
    client: 'Chronos Lab',
    overview: 'Clean studio lighting and ultra-tactile matte finishes engineered to showcase minimalist hardware ergonomics.',
    deliverables: ['Hardware Concept Renders', 'Studio Product Stills', 'Interactive Brand Showcase'],
    creativeDirection: 'Monochrome precision, soft directional shadowing, and pure industrial simplicity.'
  },
  {
    id: '3',
    slug: 'ai-commercial',
    title: 'AI Commercial',
    category: 'Commercials',
    description: 'A cinematic brand commercial celebrating creative analog workflows in an AI-powered universe.',
    cover: '/images/projects/ai-commercial.jpg',
    services: ['AI Video Production', 'Creative Campaigns'],
    year: '2026',
    featured: true,
    client: 'Atelier Note',
    overview: 'A visual celebration of thought and sketching translated into digital reality through bespoke generative tools.',
    deliverables: ['30-Second Commercial Film', 'Digital Artbook', 'Key Art Campaign'],
    creativeDirection: 'Soft pastel warmth, textural stationery fibers, and tranquil studio composition.'
  },
  {
    id: '4',
    slug: 'ai-short-film',
    title: 'AI Short Film',
    category: 'AI Films',
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
    category: 'Brand Stories',
    description: 'Luxury lifestyle visual narrative weaving timeless personal accessories into modern brand storytelling.',
    cover: '/images/projects/brand-story.jpg',
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
