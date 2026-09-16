export default function ProjectOverview({ project }) {
  return (
    <section id="project-overview" className="section-padding container-custom text-center">
      <div className="py-12 border border-dashed border-border-brand/50 rounded-2xl bg-surface/30">
        <span className="text-xs uppercase tracking-widest text-brand-violet font-semibold">
          Work Section Placeholder
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading font-bold mt-3 text-text-primary">
          ProjectOverview
        </h2>
        {project && (
          <p className="mt-2 text-text-secondary text-sm max-w-xl mx-auto">
            {project.overview || project.description}
          </p>
        )}
      </div>
    </section>
  );
}
