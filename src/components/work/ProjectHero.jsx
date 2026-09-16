export default function ProjectHero({ project }) {
  return (
    <section id="project-hero" className="section-padding container-custom text-center">
      <div className="py-12 border border-dashed border-border-brand/50 rounded-2xl bg-surface/30">
        <span className="text-xs uppercase tracking-widest text-brand-violet font-semibold">
          Work Section Placeholder
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold mt-3 text-text-primary">
          ProjectHero {project ? `— ${project.title}` : ''}
        </h1>
        {project && (
          <p className="mt-2 text-text-secondary text-sm">
            {project.category} &bull; {project.year}
          </p>
        )}
      </div>
    </section>
  );
}
