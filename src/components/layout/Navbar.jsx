import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navLinks, ctaLink } from '../../data/navigation';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, path) => {
    if (path === '/' || path === '/#home') {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById('home');
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(0, { duration: 1.2 });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      return;
    }

    if (path.includes('#')) {
      const [targetPath, hash] = path.split('#');
      if (location.pathname === (targetPath || '/')) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center group select-none"
        >
          <img
            src="/images/logo/company-logo-horizontal.png"
            alt="Peony Luxe AI"
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(139,92,246,0.25)]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7 2xl:space-x-8">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path.includes('#') && location.pathname === '/' && location.hash === `#${link.path.split('#')[1]}`);
            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`text-xs xl:text-[13.5px] 2xl:text-sm tracking-wide transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#9DA3AF] hover:text-white font-normal'
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to={ctaLink.path}
            onClick={(e) => handleLinkClick(e, ctaLink.path)}
            className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_28px_rgba(137,103,253,0.45)]"
          >
            {/* Animated Iridescent Gradient Border */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Inner Dark Glass Pill */}
            <span className="relative flex items-center justify-center px-5 py-2 xl:px-6 xl:py-2.5 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/80 backdrop-blur-md transition-all duration-300 text-xs xl:text-[13px] font-heading font-medium text-white tracking-wide overflow-hidden">
              {/* Shimmer Light Reflection Sweep on Hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Button Label & Arrow */}
              <span className="relative z-10">{ctaLink.name}</span>
              <span className="relative z-10 ml-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C4B5FD] group-hover:text-white">
                →
              </span>
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Open mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
