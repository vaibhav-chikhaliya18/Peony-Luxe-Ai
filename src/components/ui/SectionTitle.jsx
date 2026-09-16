import { cn } from '../../utils/helpers';

/**
 * SectionTitle component for standard section headers
 */
export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center', // 'left' | 'center' | 'right'
  className = '',
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col mb-12 md:mb-16', alignments[align], className)}>
      {badge && (
        <span className="inline-block px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-brand-violet bg-brand-violet/10 border border-brand-violet/20 rounded-full">
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-text-primary leading-tight">
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
