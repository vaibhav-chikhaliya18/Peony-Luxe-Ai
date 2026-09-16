import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { navLinks, ctaLink } from '../../data/navigation';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleItemClick = (path) => {
    onClose();
    if (path === '/' || path === '/#home') {
      setTimeout(() => {
        if (window.lenis) {
          window.lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    if (path.includes('#')) {
      const [, hash] = path.split('#');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#070709]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:hidden">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          onClick={() => handleItemClick('/')}
          className="flex items-center"
        >
          <img
            src="/images/logo/company-logo-horizontal.png"
            alt="Peony Luxe AI"
            className="h-7 w-auto object-contain"
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex flex-col space-y-6 my-auto text-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => handleItemClick(link.path)}
            className="text-xl font-heading text-zinc-400 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div>
        <Link
          to={ctaLink.path}
          onClick={() => handleItemClick(ctaLink.path)}
          className="group relative flex items-center justify-center w-full p-[1px] rounded-full overflow-hidden text-center text-sm font-medium transition-all shadow-[0_0_20px_rgba(137,103,253,0.3)] active:scale-[0.98]"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF]" />
          <span className="relative flex items-center justify-center w-full py-3.5 rounded-full bg-[#0E1016]/85 text-white">
            <span>{ctaLink.name}</span>
            <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
