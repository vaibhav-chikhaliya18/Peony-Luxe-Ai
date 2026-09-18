import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import { services } from '../../data/services';

const connectLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/peony_luxe_ai/' },
  { name: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavchikhaliya18@gmail.com' },
  { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=919825548544' },
];

export default function Footer() {
  return (
    <footer className="bg-[#070709] text-[#8E95A5] pt-20 pb-12 sm:pt-24 sm:pb-16 text-left">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group select-none">
              <img
                src="/images/logo/company-logo.png"
                alt="Peony Luxe AI"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_16px_rgba(139,92,246,0.25)]"
              />
            </Link>
            <p className="text-sm text-[#8E95A5] font-normal pt-1">
              Where Imagination Becomes Visual.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.24em] text-white uppercase mb-5 select-none">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#8E95A5] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Added right next to Quick Links) */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.24em] text-white uppercase mb-5 select-none">
              SERVICES
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-sm">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to={
                      service.id === 'ai-films'
                        ? '/ai-films'
                        : service.id === 'brand-stories'
                        ? '/brand-stories'
                        : '/services'
                    }
                    className="text-[#8E95A5] hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.24em] text-white uppercase mb-5 select-none">
              CONNECT
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-sm">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8E95A5] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-16 sm:mt-24 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[13px] text-[#555A68]">
          <p>© 2026 Peony Luxe AI. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
