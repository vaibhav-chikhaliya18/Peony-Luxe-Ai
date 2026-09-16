import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NextProject({ nextProject }) {
  return (
    <section id="next-project" className="section-padding container-custom text-center">
      <div className="py-12 border border-dashed border-border-brand/50 rounded-2xl bg-surface/30">
        <span className="text-xs uppercase tracking-widest text-brand-violet font-semibold">
          Work Section Placeholder
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading font-bold mt-3 text-text-primary">
          NextProject
        </h2>
        {nextProject && (
          <div className="mt-4">
            <Link
              to={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-gradient transition-colors"
            >
              <span>{nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
