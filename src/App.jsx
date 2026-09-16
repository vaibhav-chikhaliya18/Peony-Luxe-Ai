import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import Preloader from './components/layout/Preloader';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import ProjectDetails from './pages/ProjectDetails';
import AiFilms from './pages/AiFilms';
import BrandStories from './pages/BrandStories';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

/**
 * ScrollToTop helper on route changes
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <SmoothScroll>
      <Preloader />
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-[#070709] text-text-primary selection:bg-brand-violet selection:text-white">
        <Navbar />

        <main className={`flex-1 ${!isHome ? 'pt-20 sm:pt-24' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetails />} />
            <Route path="/ai-films" element={<AiFilms />} />
            <Route path="/brand-stories" element={<BrandStories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
