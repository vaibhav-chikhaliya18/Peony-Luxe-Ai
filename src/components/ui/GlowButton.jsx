import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/helpers';

/**
 * GlowButton component featuring the Peony Luxe brand gradient with subtle luminous aura
 */
const GlowButton = forwardRef(function GlowButton(
  {
    children,
    to,
    href,
    className = '',
    size = 'md',
    ...props
  },
  ref
) {
  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const buttonClasses = cn(
    'relative inline-flex items-center justify-center font-heading font-semibold text-white rounded-full transition-all duration-300 group overflow-hidden shadow-lg shadow-brand-violet/25 hover:shadow-brand-violet/40 hover:scale-[1.02] active:scale-[0.98]',
    sizes[size],
    className
  );

  const content = (
    <>
      {/* Brand Gradient Background */}
      <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-violet to-brand-magenta transition-transform duration-500 group-hover:scale-105" />

      {/* Subtle Radiant Glow Overlay */}
      <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Foreground Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={buttonClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} className={buttonClasses} {...props}>
      {content}
    </button>
  );
});

export default GlowButton;
