import Hero from '../components/home/Hero';
import StatsBanner from '../components/home/StatsBanner';
import FeaturedWork from '../components/home/FeaturedWork';
import ServicesSection from '../components/home/ServicesSection';
import AiFilmsSection from '../components/home/AiFilmsSection';
import BrandStoriesSection from '../components/home/BrandStoriesSection';
import WhyPeony from '../components/home/WhyPeony';
import Process from '../components/home/Process';
import PortfolioPreview from '../components/home/PortfolioPreview';
import AboutPreview from '../components/home/AboutPreview';
import ProjectCTA from '../components/home/ProjectCTA';
import PageTransition from '../components/animations/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <StatsBanner />
      <FeaturedWork />
      <ServicesSection />
      <AiFilmsSection />
      <BrandStoriesSection />
      <WhyPeony />
      <Process />
      <PortfolioPreview />
      <AboutPreview />
      <ProjectCTA />
    </PageTransition>
  );
}
