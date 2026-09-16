import { Sparkles, Video, Film, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Sparkles,
  Video,
  Film,
  BookOpen,
  Compass,
};

/**
 * Reusable ServiceCard component
 */
export default function ServiceCard({ service, index }) {
  const IconComponent = iconMap[service.icon] || Sparkles;

  return (
    <div className="group relative rounded-2xl p-8 bg-surface border border-border-brand/60 hover:border-brand-violet/50 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border-brand/60 flex items-center justify-center text-brand-violet group-hover:scale-110 group-hover:border-brand-violet/40 transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          {typeof index === 'number' && (
            <span className="text-xs font-mono text-text-muted">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>

        <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-gradient transition-all">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-text-secondary leading-relaxed">
          {service.shortDescription}
        </p>

        {service.deliverables && (
          <ul className="mt-6 space-y-2 text-xs text-text-muted border-t border-border-brand/30 pt-4">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-violet" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 pt-4 border-t border-border-brand/30">
        <Link
          to="/services"
          className="inline-flex items-center text-xs font-semibold text-text-primary group-hover:text-brand-magenta transition-colors gap-1.5"
        >
          Explore Service
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
