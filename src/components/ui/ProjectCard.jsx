import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * Reusable ProjectCard component
 */
export default function ProjectCard({ project, to }) {
  if (!project) return null;

  const isAiFilm =
    project.category === 'AI Films' ||
    project.category === 'AI Film' ||
    project.slug === 'ai-short-film' ||
    project.services?.includes('AI Films') ||
    project.services?.includes('AI Film');

  const destination = isAiFilm ? '/ai-films' : (to || '/contact');

  return (
    <Link
      to={destination}
      className="group block relative overflow-hidden rounded-2xl bg-surface border border-border-brand/60 hover:border-brand-violet/50 transition-all duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden bg-[#101218] relative">
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#8E95A5] text-sm bg-gradient-to-br from-[#0E1016] to-[#141622]">
            <span>{project.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-transparent pointer-events-none" />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-[#070709]/85 backdrop-blur-md text-white border border-white/10 select-none">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="p-2 rounded-full bg-surface-elevated text-text-muted group-hover:text-text-primary group-hover:bg-brand-violet/20 transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border-brand/30 flex items-center justify-between text-xs text-text-muted">
          <span>{project.year}</span>
          <span>{project.services?.join(' • ')}</span>
        </div>
      </div>
    </Link>
  );
}
