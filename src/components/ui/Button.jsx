import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/helpers';

/**
 * Reusable Button component supporting both <button> and <Link>
 */
const Button = forwardRef(function Button(
  {
    children,
    to,
    href,
    variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
    size = 'md', // 'sm' | 'md' | 'lg'
    className = '',
    ...props
  },
  ref
) {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-violet/50 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-text-primary text-bg-primary hover:bg-white hover:shadow-md shadow-white/5',
    secondary: 'bg-surface-elevated text-text-primary border border-border-brand hover:border-text-secondary/50',
    outline: 'border border-border-brand text-text-primary hover:bg-surface hover:border-text-secondary',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface/50',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link ref={ref} to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} className={combinedClasses} {...props}>
      {children}
    </button>
  );
});

export default Button;
